'use client'

import React from 'react'
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <footer className="py-12 bg-gray-950 border-t border-gray-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Credits */}
        <div className="text-center md:text-left">
          <p className="text-xs text-gray-500 font-medium tracking-wide">
            &copy; {new Date().getFullYear()} Toqeer Ahmed. All rights reserved.
          </p>
          <p className="text-[10px] text-gray-650 font-light mt-1 uppercase tracking-wider">
            Designed & Developed by{' '}
            <span className="font-semibold text-gray-400 hover:text-cyan-400 transition-colors">
              Toqeer Ahmed
            </span>
          </p>
        </div>

        {/* Center: Social Icons */}
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/toqeer-ahmed"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-cyan-400 transition-colors"
            title="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/toqeerahmedbhatti/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-cyan-400 transition-colors"
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:atoqeer759@gmail.com"
            className="text-gray-500 hover:text-cyan-400 transition-colors"
            title="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Right Side: Back to Top */}
        <button
          onClick={scrollToTop}
          className="p-2.5 rounded-full border border-gray-900 hover:border-cyan-500/20 bg-gray-950/40 text-gray-500 hover:text-cyan-400 hover:shadow-[0_0_12px_rgba(6,182,212,0.15)] transition-all group cursor-pointer animate-pulse"
          title="Back to Top"
        >
          <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
        </button>

      </div>
    </footer>
  )
}
