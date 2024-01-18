import Link from "next/link";
import { prettyDate } from "@/helpers/prettyDate";
import { Metadata } from "next";
import MarkDownRenderer from "@/components/MarkDownRenderer";
import { getPostMetadata } from "../helpers/blog";

const posts = [
  {
    link: "https://www.linkedin.com/posts/kieran-venison_unpopular-opinion-but-sometimes-a-more-activity-7151500535584452609-282d?utm_source=share&utm_medium=member_desktop",
    date: "2024-11-01T17:00:00.000Z",
    service: "LinkedIn",
    content: `
Unpopular opinion, but sometimes, a more extended interview process is beneficial. In development, I often hear people complain about having more than two interviews before receiving an offer, while simultaneously seeking a substantial salary!

If the company is rigorously vetting you, assessing your communication across various business facets, and engaging in paired programming exercises, it indicates a genuine effort to find a good fit for the team.

I don't believe you can achieve that level of understanding in just a couple of interviews.

From my perspective, if everyone else on your team has undergone a similar process, starting means you join a group of individuals who have demonstrated they belong precisely where they are in the business and should be a solid cultural fit.
    `,
  },
  {
    link: "https://twitter.com/theliftingdev/status/1745362033078382713",
    date: "2024-11-01T17:00:00.000Z",
    service: "X | Formely Twitter",
    content: `
3-4 hour hackathon to build a game, built in an alpha engine that one of the devs made!

Very fun challenge and amazed that all the teams managed to develop functional mini-games in that tiny window.
    `,
  },
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
          {postMetadata.map((post) => (
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
