import Link from "next/link";
import { prettyDate } from "@/helpers/prettyDate";
import { PostMetadata } from "@/types/PostMetadata";
import fs from "fs";
import matter from "gray-matter";
import { Metadata } from "next";
import path from "path";
import MarkDownRenderer from "@/components/MarkDownRenderer";

const posts = [
  {
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7147538745750089728/",
    date: "2024-01-01T17:00:00.000Z",
    service: "LinkedIn",
    content: `
Happy new year to all my connections 🎉 Wishing everyone a great 2024!

New Year Update:

I have been quiet about it but I start my new role with Little Journey on the 4th of January, Really excited about this as it aligns with a lot of my beliefs both personally and professionally!

Updated my [personal website](https://www.kieranvenison.co.uk/) to make use NextJS 13 features and adopted tailwind to trim down all the boilerplate and custom helper classes I had.

Wrote a small [article on dev.to](https://dev.to/kieranmv95/tailwind-my-altered-opinion-1of3) about tailwind and I also cross posted this to my updated website, so please check it out
    `,
  },
  {
    link: "https://twitter.com/theliftingdev/status/1741768056555085931",
    date: "2024-01-01T18:00:00.000Z",
    service: "X | Formerly Twitter",
    content: `
Ever since switching to apple silicon, it means the laptop doesn't get hot enough to comfortably place it on my legs when wearing shorts. I used to run a build or run jest and my laptop was warm enough to be comfortable. no more.
  
Nice problem to have :D
    `,
  },
];

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
      <div className="skinny-container py-8">
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

        <h2 className="text-4xl font-bold lg:text-5xl mb-4 mt-8">POSTS</h2>
        {posts.map((post) => (
          <div key={post.date} className="mb-6 p-6 bg-slate-900 rounded">
            <a href={post.link} className="hover:underline text-primary">
              {prettyDate(new Date(post.date))} - {post.service}
            </a>
            <MarkDownRenderer markdown={post.content} />
          </div>
        ))}
      </div>
    </main>
  );
}
