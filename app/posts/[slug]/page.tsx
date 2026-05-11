import { getAllSlugs, getPostBySlug } from "@/lib/posts"
import MarkdownRenderer from "@/components/MarkdownRenderer"
import Link from "next/link"
import type { Metadata } from "next"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = getAllSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  return {
    title: post.title,
  }
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  return date.toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <div className="mb-10">
        <Link
          href="/"
          className="text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          &larr; 一覧に戻る
        </Link>
      </div>

      <article>
        <header className="mb-10">
          <time
            dateTime={post.date}
            className="text-xs text-muted-foreground tabular-nums tracking-wide block mb-3"
          >
            {formatDate(post.date)}
          </time>
          <h1 className="text-2xl font-semibold tracking-tight text-foreground leading-snug">
            {post.title}
          </h1>
        </header>

        <MarkdownRenderer contentHtml={post.contentHtml} />
      </article>
    </div>
  )
}
