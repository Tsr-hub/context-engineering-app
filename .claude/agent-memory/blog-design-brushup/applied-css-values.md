---
name: Applied CSS Values
description: このブログに実際に適用してうまくいったCSS値・デザイントークン
type: project
---

## カラーパレット (oklch)

### ライトモード
- background: `oklch(0.99 0.002 60)` — わずかにウォームなオフホワイト（純白より読みやすい）
- foreground: `oklch(0.13 0.005 260)` — わずかにクールなほぼ黒
- muted-foreground: `oklch(0.52 0.008 260)` — 日付・サブテキスト用グレー
- border: `oklch(0.90 0.003 260)` — 薄いボーダー

### ダークモード
- background: `oklch(0.11 0.005 260)` — 深いダークブルー系黒
- foreground: `oklch(0.95 0.003 60)` — ウォームなオフホワイト

**Why:** 純粋な白/黒（oklch(1 0 0) / oklch(0.145 0 0)）よりも彩度を微量加えることで目への刺激を軽減。

## タイポグラフィ

- font-family: Geist Sans (`--font-geist-sans`) — Next.js標準、読みやすい
- body font-size: 1rem (16px)
- line-height (prose): 1.8 — 日本語混在コンテンツに最適
- letter-spacing (heading): -0.02em (tracking-tight) — タイトル感が出る
- h1 (詳細ページ): 1.5rem / font-weight: 600
- h2 (prose): 1.35rem
- h3 (prose): 1.15rem

## レイアウト

- max-width: 672px (`max-w-2xl`) — コンテンツ幅。65ch相当で読みやすい
- padding horizontal: 1.5rem (px-6)
- padding vertical (pages): 4rem (py-16)
- header/footer padding: py-5 / py-6

## PostCard (投稿一覧アイテム)

- border-bottom のみ（カード枠なし）
- 日付: text-xs + text-muted-foreground + tabular-nums + tracking-wide
- タイトル: text-base + font-medium
- hover: text-foreground/70（opacity変化のみ）
- transition: colors 150ms

## Prose (Markdown本文)

- line-height: 1.8
- h2 margin-top: 2.5em（セクション間の呼吸）
- code inline: muted背景 + border + rounded-sm
- pre (コードブロック): muted背景 + border + rounded-md + overflow-x-auto
- blockquote: border-left 2px + muted-foreground + italic
- a: underline + underline-offset-3px + border色（ホバーでforeground色）
