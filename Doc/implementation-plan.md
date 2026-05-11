# 実装計画

## ステータス凡例
- `[ ]` 未着手
- `[x]` 完了

---

## Phase 1: プロジェクトセットアップ

- [x] `npx create-next-app@latest` でNext.js 15プロジェクト作成
  - TypeScript: Yes
  - Tailwind CSS: Yes
  - App Router: Yes
  - src/ directory: No
- [x] shadcn/ui 初期化 (`npx shadcn@latest init`)
- [x] 必要パッケージのインストール
  - `gray-matter` （frontmatterパース）
  - `remark` + `remark-html` （Markdown→HTML変換）
- [x] `posts/` ディレクトリ作成
- [x] サンプル投稿Markdownファイル作成（動作確認用）

---

## Phase 2: コアロジック実装

- [x] `lib/posts.ts` 実装
  - `getAllPosts()`: 全投稿のメタデータ取得（一覧用）
  - `getPostBySlug(slug)`: 特定投稿の取得（詳細用）
  - `getAllSlugs()`: `generateStaticParams` 用のslug一覧取得

---

## Phase 3: UIコンポーネント実装

- [x] `app/layout.tsx`: ルートレイアウト（ヘッダー含む）
- [x] `components/PostCard.tsx`: 投稿カードコンポーネント
- [x] `components/MarkdownRenderer.tsx`: HTML安全レンダリング
- [x] `app/page.tsx`: 投稿一覧ページ
- [x] `app/posts/[slug]/page.tsx`: 投稿詳細ページ

---

## Phase 4: スタイリング

- [x] shadcn/ui コンポーネントを活用したデザイン調整
- [x] レスポンシブ対応確認
- [x] Markdownスタイリング（手動proseクラス実装）
- [x] カラーパレット最適化（ウォームオフホワイト / ダークモード対応）
- [x] タイポグラフィ最適化（Geist Sans / line-height 1.8 / tracking-tight）

---

## Phase 5: デプロイ

- [ ] GitHubリポジトリ作成・push
- [ ] Vercelプロジェクト作成・連携
- [ ] 本番環境での動作確認

---

## 現在の状態

Phase 4 完了。Phase 5（デプロイ）のみ未実施。
