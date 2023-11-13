import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'
import './globals.css'
import { ThemeProvider } from './components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Kendrick Lawton",
  description:
    "Welcome to Kendrick Lawton's portfolio showcasing a "+ 
    "diverse collection of web development " +
    "projects and achievements. This portfolio is built " +
    "with Next.js and React, ensuring a seamless and " +
    "interactive user experience. Hosted on Vercel, " +
    "it's always accessible and up-to-date. Explore my work, " +
    "learn about my skills, and get in touch to discuss potential collaborations or opportunities."
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          {/* <Header /> */}
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
