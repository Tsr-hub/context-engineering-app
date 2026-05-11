---
title: "はじめに"
date: "2026-04-20"
slug: "hello-world"
---

このブログを開設した。

Markdownで記事を書き、GitHubにpushするだけでVercelが自動ビルド・デプロイする仕組みにした。管理画面もログインも不要。シンプルさを最優先にした。

## なぜブログを書くのか

発信することで思考が整理される。書くことで初めて「自分が何を理解していて、何を理解していないか」が明確になる。

## 技術スタック

- **Next.js 15** — App Router + SSG
- **shadcn/ui** — UIコンポーネント
- **gray-matter** — frontmatterパース
- **remark** — Markdown → HTML変換
- **Vercel** — デプロイ

## コードの例

```typescript
// lib/posts.ts
export async function getPostBySlug(slug: string): Promise<Post> {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  const processedContent = await remark().use(html).process(content)
  return {
    title: data.title,
    date: data.date,
    slug: data.slug,
    contentHtml: processedContent.toString(),
  }
}
```

これ以上でも以下でもない。
