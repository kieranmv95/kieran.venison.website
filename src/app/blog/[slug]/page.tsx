import type { Metadata } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDev } from "@fortawesome/free-brands-svg-icons";
import { getPost } from "@/app/helpers/blog";
import { prettyDate } from "@/helpers/prettyDate";
import MarkDownRenderer from "@/components/MarkDownRenderer";

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
    <main>
      <div className="skinny-container py-8">
        <p className="text-primary">{prettyDate(new Date(post.meta.date))}</p>
        <h1 className="text-3xl font-bold lg:text-4xl mb-4">
          {post.meta.title}
        </h1>

        {post.meta.devTo && (
          <a
            href={post.meta.devTo}
            target="_blank"
            rel="noreferrer"
            className="text-lg text-primary inline-flex items-center gap-2 hover:underline"
          >
            <span className="text-white text-3xl">
              <FontAwesomeIcon icon={faDev} />
            </span>{" "}
            Read on dev.to
          </a>
        )}

        <MarkDownRenderer markdown={post.blog} />
      </div>
    </main>
  );
}
