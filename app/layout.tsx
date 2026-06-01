import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SmoothScroll from '../components/SmoothScroll'
import CustomCursor from '../components/CustomCursor'
import Header from '../components/Header'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Toqeer Ahmed - Machine Learning Engineer & Developer',
  description:
    'Building intelligent systems that transform ideas into real-world impact. BS Software Engineering student at GIKI, specializing in PyTorch, NLP, and scalable backend platforms.',
  authors: [{ name: 'Toqeer Ahmed' }],
  keywords: [
    'Machine Learning',
    'AI',
    'Software Developer',
    'Deep Learning',
    'NLP',
    'Computer Vision',
    'Full Stack Development',
    'Portfolio',
    'GIKI',
    'Toqeer Ahmed',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://toqeer-ahmed.com',
    siteName: 'Toqeer Ahmed Portfolio',
    title: 'Toqeer Ahmed - ML Engineer & Software Developer',
    description:
      'Building intelligent systems that transform ideas into real-world impact.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Toqeer Ahmed - ML Engineer & Software Developer',
    description:
      'Building intelligent systems that transform ideas into real-world impact.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#030712" />
      </head>
      <body
        className={`${inter.variable} bg-gray-950 text-gray-100 overflow-x-hidden`}
      >
        <SmoothScroll>
          <CustomCursor />
          <Header />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  )
}

