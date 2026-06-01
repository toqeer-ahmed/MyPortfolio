'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FileDown, Menu, X, Brain } from 'lucide-react'

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Playground', href: '#playground' },
  { name: 'Contact', href: '#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
        scrolled
          ? 'py-4 bg-gray-950/70 border-b border-cyan-500/10 backdrop-blur-md shadow-lg shadow-cyan-950/10'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group text-white">
          <Brain className="w-6 h-6 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
          <span className="font-bold text-lg tracking-wider bg-gradient-to-r from-white via-cyan-300 to-cyan-500 bg-clip-text text-transparent group-hover:brightness-110 transition-all">
            TOQEER.AI
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative text-sm text-gray-400 hover:text-white transition-colors duration-300 font-medium tracking-wide group py-1"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* CTA Actions */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="/Toqeer_Ahmed_CV.pdf"
            download="Toqeer_Ahmed_CV.pdf"
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-xs font-semibold text-cyan-400 hover:text-white hover:border-cyan-400 hover:bg-cyan-950/50 shadow-[0_0_15px_rgba(6,182,212,0.1)] hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300"
          >
            <FileDown className="w-3.5 h-3.5" />
            Resume
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden flex items-center gap-4">
          <a
            href="/Toqeer_Ahmed_CV.pdf"
            download="Toqeer_Ahmed_CV.pdf"
            className="flex items-center gap-1.5 p-2 rounded-full border border-cyan-500/30 bg-cyan-950/20 text-cyan-400 hover:bg-cyan-950/40 text-xs"
            title="Download Resume"
          >
            <FileDown className="w-4 h-4" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-400 hover:text-white transition-colors focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden w-full bg-gray-950/95 border-b border-cyan-500/10 backdrop-blur-lg overflow-hidden"
          >
            <div className="flex flex-col px-6 py-6 gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-300 hover:text-cyan-400 transition-colors text-base font-semibold py-2"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
