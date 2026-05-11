import { getAllPosts } from "@/lib/posts"
import PostCard from "@/components/PostCard"

export default function Home() {
  const posts = getAllPosts()

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <div className="mb-12">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground mb-2">
          Blog
        </h1>
        <p className="text-sm text-muted-foreground">
          技術・思考・日常
        </p>
      </div>

      <div>
        {posts.length === 0 ? (
          <p className="text-sm text-muted-foreground">記事がありません。</p>
        ) : (
          posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))
        )}
      </div>
    </div>
  )
}
