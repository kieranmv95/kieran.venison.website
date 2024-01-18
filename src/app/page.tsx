import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getLatestPostsMetadata } from "./helpers/blog";
import { prettyDate } from "@/helpers/prettyDate";

export const metadata: Metadata = {
  title: "Home | Kieran Venison",
  description: "Welcome to the website of Kieran Venison",
};

export default function Home() {
  const postMetadata = getLatestPostsMetadata();

  return (
    <main>
      <div className="generic-container py-24 relative">
        <Image
          src="/images/kieran.png"
          width={120}
          height={120}
          alt="Kieran Venison"
          className="mb-4"
        />
        <p className="text-primary">Hi I&apos;m</p>
        <h1 className="text-4xl font-bold lg:text-5xl mb-4">KIERAN VENISON</h1>
        <p className="max-w-lg mb-6 md:mb-8">
          I&apos;m a Manchester-based Developer specializing in building digital
          products for both businesses and consumers. With a strong sense of
          confidence and innate curiosity, I am continuously enhancing my skills
          day by day.
        </p>
        <div className="flex flex-wrap gap-4 md:gap-6">
          <img alt="haven company logo" src="/company_logos/haven.svg" />
          <img alt="gymshark company logo" src="/company_logos/gymshark.svg" />
          <img
            alt="mojo mortgages company logo"
            src="/company_logos/mojo.svg"
          />
          <img alt="sorted company logo" src="/company_logos/sorted.svg" />
          <img alt="and digital company logo" src="/company_logos/and.svg" />
          <img
            alt="car finance 247 company logo"
            src="/company_logos/cf247.svg"
          />
        </div>
      </div>

      <div className="generic-container py-24 space-y-6">
        <h2 className="text-3xl font-bold lg:text-4xl">BLOG</h2>
        <p>
          share my mad ramblings on web development, tech, and other topics that
          pique my interest. You can find my blog posts cross-posted on{" "}
          <a
            href="https://dev.to/kieranmv95"
            target="_blank"
            rel="noreferrer"
            className="text-primary hover:underline"
          >
            dev.to
          </a>{" "}
          Stay tuned for insightful content and discussions in the world of web
          development.
        </p>
        <div className="grid gap-4 lg:grid-cols-3 pointer posts">
          {postMetadata.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="p-6 bg-slate-900 rounded"
            >
              <p className="text-primary">{prettyDate(new Date(post.date))}</p>
              <h3 className="text-lg font-bold mb-4">{post.title}</h3>
              <p className="hidden lg:block">{post.description}</p>
            </Link>
          ))}
        </div>
        <Link
          className="inline-block px-5 py-3 border-solid border-2 border-primary text-primary hover:bg-primary hover:text-bg-end active:bg-primary active:text-bg-end"
          href="/blog"
        >
          All Blog Posts
        </Link>
      </div>

      <div className="generic-container py-24 space-y-6">
        <h2 className="text-3xl font-bold lg:text-4xl">ABOUT</h2>
        <p>
          I&apos;m a Manchester-based Developer, specializing in building
          digital products for businesses and consumers. With a confident and
          naturally curious mindset, I continuously strive to improve my skills
          every day.
        </p>
        <p>
          Outside of work and parenting, I have a passion for lifting heavy
          weights and gaming. Specifically, I enjoy Olympic Lifting and
          CrossFit, although I promise not to talk about CrossFit incessantly.
          If you&apos;re up for some gaming, feel free to hit me up for a game
          of League of Legends or Call of Duty any day of the week.
        </p>
        <Link
          className="inline-block px-5 py-3 border-solid border-2 border-primary text-primary hover:bg-primary hover:text-bg-end active:bg-primary active:text-bg-end"
          href="/about"
        >
          About me
        </Link>
      </div>
    </main>
  );
}
