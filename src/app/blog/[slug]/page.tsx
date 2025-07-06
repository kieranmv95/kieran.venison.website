import type { Metadata } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDev } from "@fortawesome/free-brands-svg-icons";
import { getPost } from "@/app/helpers/blog";
import { prettyDate } from "@/helpers/prettyDate";
import MarkDownRenderer from "@/components/MarkDownRenderer";
import Link from "next/link";

type Props = {
  params: { slug: string };
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
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="generic-container py-16 pb-8 md:py-24 md:pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center text-primary hover:underline mb-6 font-medium"
            >
              <svg
                className="mr-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Blog
            </Link>

            <p className="text-primary font-medium mb-4">
              {prettyDate(new Date(post.meta.date))}
            </p>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              {post.meta.title}
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              {post.meta.description}
            </p>

            {post.meta.devTo && (
              <a
                href={post.meta.devTo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                <FontAwesomeIcon icon={faDev} className="mr-2 text-xl" />
                Read on dev.to
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
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="generic-container pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-8 md:p-12">
            <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-200 prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
              <MarkDownRenderer markdown={post.blog} />
            </div>
          </div>
        </div>
      </section>

      {/* Related Content */}
      <section className="bg-gray-50 dark:bg-gray-900/50 py-16 md:py-24">
        <div className="generic-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              More Insights
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Explore more articles and thoughts on web development
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/blog"
                className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                View All Articles
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

              <a
                href="https://dev.to/kieranmv95"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center px-6 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-lg transition-colors font-medium"
              >
                <FontAwesomeIcon icon={faDev} className="mr-2" />
                Follow on dev.to
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
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
