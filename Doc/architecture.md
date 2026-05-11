# アーキテクチャ

## 技術スタック

| 項目 | 採用技術 | 備考 |
|------|----------|------|
| フレームワーク | Next.js 15 | App Router |
| 言語 | TypeScript | strict mode |
| UIライブラリ | shadcn/ui | Tailwind CSS ベース |
| Markdownパース | gray-matter + remark | frontmatter + HTML変換 |
| デプロイ | Vercel | git push で自動デプロイ |
| コンテンツ管理 | Markdownファイル（`/posts`） | DBなし |

---

## ルーティング

```
/                    → 投稿一覧（app/page.tsx）
/posts/[slug]        → 投稿詳細（app/posts/[slug]/page.tsx）
```

---

## データフロー

```
posts/*.md
  └─ gray-matter でfrontmatterパース
       └─ remark で本文をHTMLに変換
            └─ Next.js SSG (generateStaticParams) でビルド時に静的生成
                 └─ Vercel CDN で配信
```

---

## ディレクトリ構成

```
/
├── posts/                      # Markdownコンテンツ（git管理）
│   └── YYYYMMDD-slug.md
├── app/
│   ├── layout.tsx              # ルートレイアウト
│   ├── page.tsx                # 投稿一覧ページ
│   └── posts/
│       └── [slug]/
│           └── page.tsx        # 投稿詳細ページ
├── components/
│   ├── PostCard.tsx            # 一覧のカードコンポーネント
│   └── MarkdownRenderer.tsx    # Markdownレンダリング
├── lib/
│   └── posts.ts                # Markdownファイルの読み込み・パースロジック
├── Doc/                        # 開発ドキュメント（このディレクトリ）
└── public/
```

---

## 主要な設計判断

### SSG（静的生成）を採用する理由
- コンテンツはビルド時に確定（Markdownファイル）
- サーバー不要でVercelの無料枠で運用可能
- パフォーマンスが高い

### DBを使わない理由
- 個人用で投稿数が少ない
- Gitでコンテンツのバージョン管理ができる
- シンプルさを優先

### 認証なしの理由
- 投稿はローカル編集 + git push で完結
- 閲覧のみ公開なので不要
