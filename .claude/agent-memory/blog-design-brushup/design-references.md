---
name: Design Reference Blogs
description: UIブラッシュアップ時に参考にしたブログURLとデザイン特徴
type: reference
---

## 参考ブログ一覧

### overreacted.io (Dan Abramov)
- URL: https://overreacted.io/
- GitHub: https://github.com/gaearon/overreacted.io
- 特徴: Tailwind CSS + CSS変数テーマ、max-width ~680px、投稿リスト形式（カードなし）、Next.js SSG

### leerob.com (Lee Robinson)
- URL: https://leerob.com/writing
- 特徴: 超シンプルなリスト形式、日付+タイトルのみ、余白大、カードなし

### rauno.me (Rauno Freiberg)
- URL: https://rauno.me/
- 特徴: 超ミニマル、タイポグラフィ重視、大きな余白、Vercel所属デザイナー

## 共通デザインパターン（dev blog トレンド 2025）

- カード型UIよりシンプルなリスト形式が主流
- max-width: 640px〜720px（読みやすさ優先）
- フォント: Geist / Inter / system-ui 系 sans-serif
- 余白: padding top/bottom 4rem (64px) 以上
- 投稿アイテム: 日付（小さく、muted）+ タイトル の2行構成
- ボーダーラインで区切り（カードの枠線なし）
- ホバー: opacity変化のみ、アニメーションは最小限
