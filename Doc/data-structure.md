# データ構造

## Markdownファイル形式

### ファイルパス
```
posts/YYYYMMDD-slug.md
```

### ファイル全体の構造
```
---
title: "投稿タイトル"
date: "2026-04-24"
slug: "hello-world"
---

Markdown本文をここに記述する。

## 見出し

- リスト項目
- リスト項目

コードブロックも使える。

```ts
const hello = "world"
```
```

---

## frontmatterスキーマ

| フィールド | 型 | 必須 | 形式 | 説明 |
|-----------|-----|------|------|------|
| `title` | `string` | Yes | 任意の文字列 | 一覧・詳細ページに表示するタイトル |
| `date` | `string` | Yes | `YYYY-MM-DD` | 投稿日（一覧の並び順に使用） |
| `slug` | `string` | Yes | 英数字・ハイフンのみ | URLパスに使用（`/posts/[slug]`） |

---

## TypeScript型定義

```ts
// 一覧表示用（本文なし）
type PostMeta = {
  title: string
  date: string   // "YYYY-MM-DD"
  slug: string
}

// 詳細表示用（本文あり）
type Post = PostMeta & {
  contentHtml: string  // remarkで変換済みのHTML文字列
}
```

---

## lib/posts.ts のインターフェース

```ts
// 全投稿のメタデータを新着順で取得（一覧ページ用）
getAllPosts(): PostMeta[]

// slugで特定の投稿を取得（詳細ページ用）
getPostBySlug(slug: string): Promise<Post>

// 全slugを取得（generateStaticParams用）
getAllSlugs(): { slug: string }[]
```

---

## ファイル名とslugの関係

ファイル名の日付部分はソート用、slug部分がURLになる。

```
posts/20260424-hello-world.md  →  /posts/hello-world
posts/20260425-next-js-tips.md →  /posts/next-js-tips
```

slugはfrontmatterの `slug` フィールドを正とする（ファイル名から自動抽出もできるが、明示的に管理するためfrontmatterに記載する）。

---

## サンプルファイル

```markdown
---
title: "はじめての投稿"
date: "2026-04-24"
slug: "hello-world"
---

マイクロブログを始めました。

このブログはNext.jsとMarkdownで動いています。

## 技術スタック

- Next.js 15
- shadcn/ui
- Vercel
```
