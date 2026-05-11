# 規約・コンベンション

## Markdownファイル規約

### ファイル名
```
posts/YYYYMMDD-slug.md
例: posts/20260424-hello-world.md
```

### frontmatter
```yaml
---
title: "投稿タイトル"
date: "2026-04-24"
slug: "hello-world"
---

本文をここに記述...
```

| フィールド | 型 | 必須 | 説明 |
|-----------|-----|------|------|
| `title` | string | Yes | 表示タイトル |
| `date` | string (YYYY-MM-DD) | Yes | 投稿日 |
| `slug` | string | Yes | URLパス（英数字・ハイフン） |

---

## コード規約

### TypeScript
- strict mode 有効
- `type` を優先（`interface` は外部拡張が必要な場合のみ）

### ファイル命名
- コンポーネント: PascalCase（`PostCard.tsx`）
- ユーティリティ: camelCase（`posts.ts`）
- ページ: Next.js規約に従う（`page.tsx`, `layout.tsx`）

### コンポーネント設計
- Server Components をデフォルトとする
- クライアント操作が必要な場合のみ `"use client"` を追加

---

## 投稿作成手順

1. `posts/YYYYMMDD-slug.md` を作成
2. frontmatterを記述（title, date, slug）
3. Markdown本文を記述
4. `git add . && git commit -m "post: タイトル"`
5. `git push` → Vercel自動デプロイ
