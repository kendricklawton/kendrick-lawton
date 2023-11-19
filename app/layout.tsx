import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from './components/Footer'
import './globals.css'
import { ThemeProvider } from './components/ThemeProvider'

// Initializing the Inter font with Latin subset
const inter = Inter({ subsets: ['latin'] })

// Metadata
export const metadata: Metadata = {
  title: "Kendrick Lawton",
  description:
    "Welcome to Kendrick Lawton's portfolio."
}

// Root layout component
export default function RootLayout({
  children, // Children components passed to the layout
}: {
  children: React.ReactNode // Type definition for children as React nodes
}) {
  return (
    <html lang="en"> {/* HTML tag with lang attribute set to 'en' for English */}
      <body className={inter.className}> {/* Body tag with Inter font's class name */}
        <ThemeProvider> {/* ThemeProvider wrapping the children */}
          {children} {/* Displaying the children components */}
          <Footer /> {/* Displaying the Footer component */}
        </ThemeProvider>
      </body>
    </html>
  )
}
