import Link from 'next/link'

type PostMeta = { title: string; date: string; slug: string }

type PostCardProps = {
  post: PostMeta
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  return date.toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Link
      href={`/posts/${post.slug}`}
      className="group flex flex-col gap-1 py-5 border-b border-border/60 transition-colors last:border-b-0 hover:no-underline"
    >
      <span className="text-xs text-muted-foreground tabular-nums tracking-wide">
        {formatDate(post.date)}
      </span>
      <span className="text-base font-medium text-foreground leading-snug group-hover:text-foreground/70 transition-colors">
        {post.title}
      </span>
    </Link>
  )
}
