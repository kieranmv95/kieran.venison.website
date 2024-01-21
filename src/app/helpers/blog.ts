import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { PostMetadata } from "@/types/PostMetadata";

const FOLDER = "src/posts/";

export const getPostMetadata = (): PostMetadata[] => {
  const files = fs.readdirSync(path.join(process.cwd(), FOLDER), "utf-8");

  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  const posts = markdownPosts.map((fileName) => {
    const fileContent = fs.readFileSync(`${FOLDER}/${fileName}`, "utf-8");
    const matterResult = matter(fileContent);

    return {
      slug: fileName.replace(".md", ""),
      ...matterResult.data,
    };
  });

  return (posts as PostMetadata[]).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
};

export const getLatestPostsMetadata = (): PostMetadata[] => {
  const postMetadata = getPostMetadata();

  return postMetadata.slice(0, 3);
};

export const getPost = (slug: string): { meta: PostMetadata; blog: string } => {
  const file = fs.readFileSync(
    path.join(process.cwd(), `${FOLDER}/${slug}.md`),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(file);

  return {
    meta: frontmatter as PostMetadata,
    blog: content,
  };
};
