# 技術スタック詳細

## コアフレームワーク

### Next.js 15
- **バージョン**: 15.x（最新版）
- **ルーター**: App Router
- **レンダリング**: SSG（Static Site Generation）
- **`generateStaticParams`** でビルド時に全投稿ページを静的生成

### TypeScript
- **strict mode**: 有効
- `tsconfig.json` のデフォルト設定をベースに使用

---

## UIライブラリ

### shadcn/ui
- **インストール**: `npx shadcn@latest init`
- **スタイルベース**: Tailwind CSS v4
- **テーマ**: CSS変数によるダークモード対応（任意）
- 使用予定コンポーネント:
  - `Card` - 投稿カード
  - `Badge` - 日付表示等
  - `Separator` - 区切り線

### Tailwind CSS v4
- shadcn/ui の依存として導入
- `@tailwindcss/typography` プラグイン（Markdownスタイリング用）

---

## コンテンツ処理

### gray-matter
- **用途**: MarkdownファイルのfrontmatterをパースしてJSオブジェクトに変換
- **インストール**: `npm install gray-matter`
- **型定義**: `npm install -D @types/gray-matter`（不要な場合あり）

```ts
import matter from 'gray-matter'
const { data, content } = matter(fileContent)
// data = { title, date, slug }
// content = Markdown本文
```

### remark / remark-html
- **用途**: Markdown本文をHTMLに変換
- **インストール**: `npm install remark remark-html`

```ts
import { remark } from 'remark'
import html from 'remark-html'
const result = await remark().use(html).process(content)
const htmlString = result.toString()
```

---

## デプロイ

### Vercel
- **トリガー**: `git push` で自動ビルド・デプロイ
- **ビルドコマンド**: `next build`（デフォルト）
- **出力**: 静的ファイル（`output: 'export'` は使わない、Vercel最適化のため）
- **プラン**: Hobby（無料）で運用可能

---

## 開発ツール

| ツール | 用途 |
|--------|------|
| ESLint | Next.js標準設定 |
| Prettier | コードフォーマット（任意） |

---

## パッケージ一覧（予定）

```json
{
  "dependencies": {
    "next": "^15.x",
    "react": "^19.x",
    "react-dom": "^19.x",
    "gray-matter": "^4.x",
    "remark": "^15.x",
    "remark-html": "^16.x"
  },
  "devDependencies": {
    "typescript": "^5.x",
    "@types/node": "^22.x",
    "@types/react": "^19.x",
    "@tailwindcss/typography": "^0.5.x"
  }
}
```
