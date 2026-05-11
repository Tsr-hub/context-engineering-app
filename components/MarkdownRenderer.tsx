type MarkdownRendererProps = {
  contentHtml: string
}

export default function MarkdownRenderer({ contentHtml }: MarkdownRendererProps) {
  return (
    <div
      className="prose"
      dangerouslySetInnerHTML={{ __html: contentHtml }}
    />
  )
}
