import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'devfinder',
  description: 'GitHub user search app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header></header>
        <main className={montserrat.className}>
          {children}
        </main>
        <footer></footer>
      </body>
    </html>
  )
}
