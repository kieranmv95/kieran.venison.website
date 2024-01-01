import Link from "next/link";
import { prettyDate } from "@/helpers/prettyDate";
import { PostMetadata } from "@/types/PostMetadata";
import fs from "fs";
import matter from "gray-matter";
import { Metadata } from "next";
import path from "path";

const folder = "src/posts/";

const getPostMetadata = (): PostMetadata[] => {
  const files = fs.readdirSync(path.join(process.cwd(), folder), "utf-8");

  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  const posts = markdownPosts.map((fileName) => {
    const fileContent = fs.readFileSync(`${folder}/${fileName}`, "utf-8");
    const matterResult = matter(fileContent);

    return {
      slug: fileName.replace(".md", ""),
      ...matterResult.data,
    };
  });

  return posts as PostMetadata[];
};

export const metadata: Metadata = {
  title: "Blog | Kieran Venison",
  description: "Welcome to the blog by Kieran Venison",
};

export default function Blog() {
  const postMetadata = getPostMetadata();

  return (
    <main>
      <div className="skinny-container py-8  ">
        <h1 className="text-4xl font-bold lg:text-5xl mb-4">BLOG</h1>
        <p className="max-w-lg mb-6 md:mb-8">
          My mad ramblings about the world of web development, tech and other
          things I find vaguely interesting. I also cross post my blog posts to{" "}
          <a
            className="text-primary"
            href="https://dev.to/kieranmv95"
            target="_blank"
            rel="noreferrer"
          >
            dev.to
          </a>
        </p>

        <ul className="grid gap-4">
          {postMetadata
            .sort(
              (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
            )
            .map((post) => (
              <li key={post.slug}>
                <Link
                  href={`blog/${post.slug}`}
                  className="hover:underline grid border border-primary border-t-0 border-l-2 border-r-0 border-b-0 pl-4 md:border-none md:pl-0 md:block"
                >
                  <span className="text-primary md:mr-2">
                    {prettyDate(new Date(post.date))}
                  </span>
                  {post.title}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </main>
  );
}
