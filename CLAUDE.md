# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

個人用マイクロブログ。`posts/` 配下のMarkdownファイルをコンテンツソースとし、Next.js 15のSSGでビルドしてVercelにデプロイする。DBなし・認証なし。

## 開発コマンド

```bash
npm run dev      # 開発サーバー起動
npm run build    # 本番ビルド（SSG）
npm run lint     # ESLint実行
```

## アーキテクチャ

### データフロー

```
posts/*.md → gray-matter(frontmatter) → remark(HTML変換) → Next.js SSG → Vercel CDN
```

### ルーティング

| パス | ファイル | 役割 |
|------|----------|------|
| `/` | `app/page.tsx` | 投稿一覧（新着順） |
| `/posts/[slug]` | `app/posts/[slug]/page.tsx` | 投稿詳細 |

### 主要ファイルの責務

- **`lib/posts.ts`**: Markdownファイルの読み込み・パース・ソートのすべてのロジック。`getAllPosts()` / `getPostBySlug(slug)` / `getAllSlugs()` の3つの関数を公開する。
- **`components/MarkdownRenderer.tsx`**: remarkで変換済みのHTML文字列を `dangerouslySetInnerHTML` で安全にレンダリング。
- **`components/PostCard.tsx`**: 一覧ページで使用するカードUI（shadcn/ui の `Card` ベース）。

### コンポーネント方針

Server Componentsをデフォルトとし、インタラクションが必要な場合のみ `"use client"` を付与する。

## コンテンツ（Markdownファイル）

### ファイル形式

```
posts/YYYYMMDD-slug.md
```

### 必須frontmatter

```yaml
---
title: "投稿タイトル"
date: "2026-04-24"
slug: "hello-world"
---
```

slugはfrontmatterの値を正とする（ファイル名からは自動抽出しない）。

### TypeScript型

```ts
type PostMeta = { title: string; date: string; slug: string }
type Post = PostMeta & { contentHtml: string }
```

## コード規約

- TypeScript: `type` を優先（`interface` は外部拡張が必要な場合のみ）
- コンポーネント名: PascalCase、ユーティリティ: camelCase

## ドキュメント参照

作業前に `Doc/` 配下の関連ドキュメントを適宜参照すること。

| ファイル | 参照タイミング |
|----------|----------------|
| `Doc/requirement.md` | 要件の確認 |
| `Doc/architecture.md` | 設計判断・構成の確認 |
| `Doc/implementation-plan.md` | 実装順序・進捗確認 |
| `Doc/conventions.md` | ファイル命名・コーディング規約 |
| `Doc/tech-stack.md` | パッケージ使用方法・バージョン確認 |
| `Doc/data-structure.md` | 型定義・frontmatterスキーマ確認 |

## 実装状況

`Doc/implementation-plan.md` にPhase別チェックリストがある。タスク完了時は必ず該当項目を `[ ]` から `[x]` に更新すること。
