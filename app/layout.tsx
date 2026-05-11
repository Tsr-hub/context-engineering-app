import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import Link from "next/link"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: "Kyohei's Blog",
    template: "%s | Kyohei's Blog",
  },
  description: "福田京平のマイクロブログ。技術・思考・日常。",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground flex flex-col">
        <header className="border-b border-border/60">
          <div className="max-w-2xl mx-auto px-6 py-5 flex items-center justify-between">
            <Link
              href="/"
              className="text-sm font-medium text-foreground hover:text-foreground/70 transition-colors tracking-tight"
            >
              Kyohei Fukuda
            </Link>
            <nav className="flex items-center gap-5">
              <Link
                href="https://x.com/labelmake"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                X
              </Link>
              <Link
                href="https://zenn.dev/hand_dot"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                Zenn
              </Link>
              <Link
                href="https://github.com/hand-dot"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                GitHub
              </Link>
            </nav>
          </div>
        </header>

        <main className="flex-1">
          {children}
        </main>

        <footer className="border-t border-border/60">
          <div className="max-w-2xl mx-auto px-6 py-6">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Kyohei Fukuda
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
