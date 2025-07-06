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
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="generic-container py-16 md:py-24 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Image
              src="/images/kieran.png"
              width={140}
              height={140}
              alt="Kieran Venison"
              className="rounded-full mx-auto mb-6 shadow-lg"
            />
            <p className="text-primary font-medium text-lg mb-2">
              Hi, I&apos;m
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Kieran Venison
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              Senior Developer • Manchester, UK
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200">
              I craft exceptional digital experiences that drive business growth
              and user satisfaction. With a proven track record of delivering
              scalable solutions, I combine technical expertise with strategic
              thinking to solve complex challenges.
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">
                React/Next.js
              </span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">
                TypeScript
              </span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">
                Node.js
              </span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">
                AWS
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Company Partnerships */}
      <section className="bg-gray-50 dark:bg-gray-900/50 py-16">
        <div className="generic-container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I&apos;ve collaborated with esteemed companies to deliver
              innovative solutions that drive results.
            </p>
          </div>
          <CompanyLogos />
        </div>
      </section>

      {/* Blog Section */}
      <section className="generic-container py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Latest Insights
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Sharing knowledge and experiences from the frontlines of web
              development. Also published on{" "}
              <a
                href="https://dev.to/kieranmv95"
                target="_blank"
                rel="noreferrer"
                className="text-primary hover:underline font-medium"
              >
                dev.to
              </a>
              .
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
            {postMetadata.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-primary/20"
              >
                <p className="text-primary text-sm font-medium mb-3">
                  {prettyDate(new Date(post.date))}
                </p>
                <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {post.description}
                </p>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
              href="/blog"
            >
              View All Posts
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-50 dark:bg-gray-900/50 py-16 md:py-24">
        <div className="generic-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Passionate about technology and continuous learning
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                  I specialize in building scalable, user-centric applications
                  that solve real business problems. My approach combines
                  technical excellence with strategic thinking, ensuring every
                  solution delivers measurable value.
                </p>
                <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                  When I&apos;m not coding, you&apos;ll find me in the gym
                  pursuing Olympic lifting or gaming with friends. I believe in
                  maintaining a healthy work-life balance while staying
                  passionate about technology.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                <h3 className="font-semibold mb-4 text-lg">Quick Facts</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Based in Manchester, UK
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    {new Date().getFullYear() - 2013}+ years of development
                    experience
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Full-stack expertise
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Passionate about clean code
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link
                className="inline-flex items-center px-6 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-lg transition-colors font-medium"
                href="/about"
              >
                Learn More About Me
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
