---
name: Implementation Notes
description: ビルド・Lintで問題になったパターンと解決策、shadcn/uiとの相性メモ
type: feedback
---

## @tailwindcss/typography を使わなかった理由

このプロジェクトは Tailwind v4 を使用している。`@tailwindcss/typography` プラグインのv4対応が不安定なため、`prose` クラスを `globals.css` の `@layer components` に手動定義した。

**How to apply:** 今後もTypography pluginは使わず、手動proseを拡張していく。

## lib/posts.ts の getPostBySlug 実装

slugはファイル名でなくfrontmatterの `data.slug` を正とする仕様のため、全ファイルをスキャンしてslugが一致するものを探す実装にした。ファイル数が少ない（SSGブログ）前提で許容。

## next.js 16 + params は Promise

App Router の page.tsx で `params` は `Promise<{slug: string}>` 型。
`const { slug } = await params` と await が必要。忘れると TypeScript エラー。

## PostCard をシンプルなリスト形式にした理由

shadcn/ui の `Card` コンポーネント（ring-1 ring-foreground/10）を使うと重たい印象になった。
overreacted.io / leerob.com の参考から、border-bottom のみのリスト形式が読みやすくミニマルで良いと判断。
`Card` コンポーネントはインポートせず、`Link` ラッパーに直接スタイルを当てた。

**Why:** カード型はUIが重くなりがちで、コンテンツ（テキスト）が主役のブログには不向き。

## ビルド確認済み構成

- Next.js 16.2.4 + Turbopack
- gray-matter 4.x / remark 15.x / remark-html 16.x
- shadcn/ui (Tailwind v4 ベース)
- TypeScript strict mode: エラーなし
- ESLint: エラーなし
- 全3記事が SSG で静的生成される (`generateStaticParams` 動作確認済み)
