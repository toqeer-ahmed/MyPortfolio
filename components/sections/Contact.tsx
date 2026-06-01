'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, MapPin, ExternalLink, ArrowRight } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-950/60 border-t border-gray-900 relative">
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-sm font-semibold tracking-widest text-cyan-400 uppercase mb-3">Contact</h2>
          <p className="text-3xl md:text-4xl font-bold text-white max-w-2xl">
            Let\'s Build Something Exceptional
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Column 1: Info Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-200 mb-4">Direct Coordinates</h3>
              <p className="text-xs text-gray-400 leading-relaxed font-light mb-8">
                Whether you\'re looking to recruit an ML engineer for research, develop an end-to-end full-stack app, or simply chat about neural networks, feel free to reach out. I am open to remote roles, research opportunities, and collaborative initiatives.
              </p>
            </div>

            {/* Info Cards Grid */}
            <div className="space-y-4">
              <a
                href="mailto:atoqeer759@gmail.com"
                className="p-4 rounded-xl border border-gray-900 bg-gray-950/30 hover:border-cyan-500/20 hover:bg-cyan-950/5 transition-all duration-300 flex items-center gap-4 group"
              >
                <div className="p-2.5 bg-gray-900/60 text-gray-400 group-hover:text-cyan-400 rounded-xl transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-505 uppercase tracking-wider font-semibold">Email Me</p>
                  <p className="text-xs text-gray-200 font-mono font-medium">atoqeer759@gmail.com</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/toqeerahmedbhatti/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl border border-gray-900 bg-gray-950/30 hover:border-cyan-500/20 hover:bg-cyan-950/5 transition-all duration-300 flex items-center gap-4 group"
              >
                <div className="p-2.5 bg-gray-900/60 text-gray-400 group-hover:text-cyan-400 rounded-xl transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-505 uppercase tracking-wider font-semibold">Connect on LinkedIn</p>
                  <p className="text-xs text-gray-200 font-medium">linkedin.com/in/toqeerahmedbhatti</p>
                </div>
              </a>

              <a
                href="https://github.com/toqeer-ahmed"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl border border-gray-900 bg-gray-950/30 hover:border-cyan-500/20 hover:bg-cyan-950/5 transition-all duration-300 flex items-center gap-4 group"
              >
                <div className="p-2.5 bg-gray-900/60 text-gray-400 group-hover:text-cyan-400 rounded-xl transition-colors">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-505 uppercase tracking-wider font-semibold">Explore Projects</p>
                  <p className="text-xs text-gray-200 font-medium">github.com/toqeer-ahmed</p>
                </div>
              </a>

              <div className="p-4 rounded-xl border border-gray-900 bg-gray-950/30 flex items-center gap-4">
                <div className="p-2.5 bg-gray-900/60 text-cyan-400 rounded-xl">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-550 uppercase tracking-wider font-semibold">Location</p>
                  <p className="text-xs text-gray-200 font-medium">Pakistan (Remote Available)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Direct Contact Hub Panel */}
          <div className="lg:col-span-7 p-8 rounded-2xl border border-gray-900 bg-gray-950/40 backdrop-blur-sm flex flex-col justify-between relative overflow-hidden group">
            {/* Ambient background glow inside panel */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full filter blur-[80px] pointer-events-none group-hover:bg-cyan-500/10 transition-colors duration-500" />
            
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/25 bg-emerald-950/20 text-emerald-400 text-[10px] font-medium tracking-wide uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                Active Response Mode
              </span>
              
              <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
                Let\'s build the next generation of AI systems.
              </h3>
              
              <p className="text-xs text-gray-450 leading-relaxed font-light">
                To maximize reliability when deploying on platforms like Vercel, I\'ve bypassed dead mockup input forms in favor of direct secure communication lines. Connect with me directly for prompt engineering discussions, job openings, or technical collaboration.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <a
                href="mailto:atoqeer759@gmail.com"
                className="flex items-center justify-center gap-2 py-4 px-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:brightness-110 text-xs font-bold text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
                Email Me Directly
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.linkedin.com/in/toqeerahmedbhatti/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-4 px-6 rounded-full border border-gray-800 bg-gray-900/40 hover:bg-gray-900 hover:border-gray-700 text-xs font-bold text-white transition-all duration-300"
              >
                <Linkedin className="w-4 h-4" />
                Connect on LinkedIn
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
