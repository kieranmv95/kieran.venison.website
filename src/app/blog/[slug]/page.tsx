import type { Metadata } from "next";
import { PostMetadata } from "@/types/PostMetadata";

import fs from "fs";
import matter from "gray-matter";
import { prettyDate } from "@/helpers/prettyDate";
import path from "path";
import MarkDownRenderer from "@/components/MarkDownRenderer";

type Props = {
  params: { slug: string };
};

const getPost = (slug: string): { meta: PostMetadata; blog: string } => {
  const folder = "src/posts/";

  const file = fs.readFileSync(
    path.join(process.cwd(), `${folder}/${slug}.md`),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(file);

  return {
    meta: frontmatter as PostMetadata,
    blog: content,
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost(params.slug);

  return {
    title: `${post.meta.title} | Kieran Venison`,
    description: post.meta.description,
  };
}

export default function BlogPost({ params }: Props) {
  const post = getPost(params.slug);

  return (
    <main>
      <div className="skinny-container py-8">
        <p className="text-primary">{prettyDate(new Date(post.meta.date))}</p>
        <h1 className="text-3xl font-bold lg:text-4xl mb-4">
          {post.meta.title}
        </h1>

        <MarkDownRenderer markdown={post.blog} />
      </div>
    </main>
  );
}
