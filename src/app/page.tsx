import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getLatestPostsMetadata } from "./helpers/blog";
import { prettyDate } from "@/helpers/prettyDate";
import CompanyLogos from "@/components/CompanyLogos";

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
          I am a seasoned Developer located in Manchester, with a rich background in crafting digital products tailored
          to meet the needs of both businesses and consumers. Possessing a profound sense of confidence and an
          unwavering curiosity, I am committed to perpetual skill enhancement and staying at the forefront of
          technological advancements.
        </p>
        <p className="max-w-3xl mb-6 md:mb-8">
          My portfolio includes collaborations with esteemed companies, showcasing a track record of successful partnerships:
        </p>
        <CompanyLogos/>
      </div>

      <div className="generic-container py-24 space-y-6">
        <h2 className="text-3xl font-bold lg:text-4xl">BLOG</h2>
        <p>
          Dive into my insights on web development, technology, and other intriguing topics. My writings are also shared on <a
            href="https://dev.to/kieranmv95"
            target="_blank"
            rel="noreferrer"
            className="text-primary hover:underline"
        >
          dev.to
        </a>, providing a window into my explorations and discussions in the web development landscape. Anticipate
          engaging content and lively debates.
        </p>
        <div className="grid gap-4 lg:grid-cols-3 pointer posts">
          {postMetadata.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="p-6 bg-slate-200 dark:text-white dark:bg-slate-900 rounded"
            >
              <p className="text-primary">{prettyDate(new Date(post.date))}</p>
              <h3 className="text-lg font-bold mb-4">{post.title}</h3>
              <p className="hidden lg:block">{post.description}</p>
            </Link>
          ))}
        </div>
        <Link
          className="inline-block px-5 py-3 border-solid border-2 border-primary text-primary hover:bg-primary hover:text-white dark:hover:text-bg-end active:bg-primary active:text-bg-end"
          href="/blog"
        >
          All Blog Posts
        </Link>
      </div>

      <div className="generic-container py-24 space-y-6">
        <h2 className="text-3xl font-bold lg:text-4xl">ABOUT</h2>
        <p>
          I excel in creating digital solutions tailored to the needs of both businesses and consumers. My approach is fueled by a blend of confidence and innate curiosity, driving me to enhance my abilities daily.
        </p>
        <p>
          Beyond my professional endeavors and responsibilities as a parent, I am deeply passionate about weightlifting and gaming. My interests lie particularly in Olympic Lifting and CrossFit, and while I&apos;m enthusiastic about these sports, I refrain from overwhelming others with CrossFit talk. For those interested in gaming, I&apos;m always ready for a match in &quot;League of Legends&quot; or &quot;The Finals&quot; any day of the week.
        </p>
        <Link
          className="inline-block px-5 py-3 border-solid border-2 border-primary text-primary hover:bg-primary hover:text-white dark:hover:text-bg-end active:bg-primary active:text-bg-end"
          href="/about"
        >
          About me
        </Link>
      </div>
    </main>
  );
}
