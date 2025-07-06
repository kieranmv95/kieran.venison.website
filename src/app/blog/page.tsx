import Link from "next/link";
import { prettyDate } from "@/helpers/prettyDate";
import { Metadata } from "next";
import { getPostMetadata } from "../helpers/blog";

export const metadata: Metadata = {
  title: "Blog | Kieran Venison",
  description:
    "Insights and thoughts on web development, technology, and industry trends from Kieran Venison",
};

export default function Blog() {
  const postMetadata = getPostMetadata();

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="generic-container py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Blog & Insights
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Sharing knowledge and experiences from the frontlines of web
              development, technology trends, and industry insights. Also
              published on{" "}
              <a
                className="text-primary hover:underline font-medium"
                href="https://dev.to/kieranmv95"
                target="_blank"
                rel="noreferrer"
              >
                dev.to
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Featured Blog Posts */}
      <section className="bg-gray-50 dark:bg-gray-900/50 py-16 md:py-24">
        <div className="generic-container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Articles</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                In-depth technical articles and insights on web development
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
              {postMetadata.map((post) => (
                <Link
                  key={post.slug}
                  href={`blog/${post.slug}`}
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
          </div>
        </div>
      </section>
    </main>
  );
}
