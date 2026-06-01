'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowRight, Download } from 'lucide-react'
import ParticleCanvas from '../ParticleCanvas'

const roles = [
  'Machine Learning Engineer',
  'ML/AI Engineer',
  'Software Engineer',
  'Problem Solver',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [speed, setSpeed] = useState(100)

  useEffect(() => {
    const fullText = roles[roleIndex]
    
    const handleType = () => {
      if (!isDeleting) {
        setDisplayedText(fullText.substring(0, displayedText.length + 1))
        setSpeed(80)

        if (displayedText === fullText) {
          setSpeed(2000) // pause at full text
          setIsDeleting(true)
        }
      } else {
        setDisplayedText(fullText.substring(0, displayedText.length - 1))
        setSpeed(40)

        if (displayedText === '') {
          setIsDeleting(false)
          setRoleIndex((prev) => (prev + 1) % roles.length)
          setSpeed(400)
        }
      }
    }

    const timer = setTimeout(handleType, speed)
    return () => clearTimeout(timer)
  }, [displayedText, isDeleting, roleIndex, speed])

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center bg-gray-950 overflow-hidden pt-20"
    >
      {/* Dynamic 3D Particle Canvas */}
      <ParticleCanvas />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center justify-center">
        {/* Top Mini Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-950/20 backdrop-blur-sm text-cyan-400 text-xs font-medium uppercase tracking-widest mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          Open for Collaboration
        </motion.div>

        {/* Main Name Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-4"
        >
          Toqeer Ahmed
        </motion.h1>

        {/* Typewriter text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="h-10 md:h-12 flex items-center justify-center mb-6"
        >
          <p className="text-xl md:text-3xl font-medium tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400 font-mono">
            {displayedText}
            <span className="w-1.5 h-6 bg-cyan-400 inline-block ml-1 animate-pulse" />
          </p>
        </motion.div>

        {/* Professional Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-2xl text-gray-400 text-base md:text-lg font-light leading-relaxed mb-10 px-4"
        >
          Building intelligent systems that transform ideas into real-world impact. Passionate about machine learning pipelines, deep learning, NLP, and scalable engineering.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-14"
        >
          <a
            href="#projects"
            className="group flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-sm font-semibold text-white hover:brightness-110 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all duration-300"
          >
            View Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="/Toqeer_Ahmed_CV.pdf"
            download="Toqeer_Ahmed_CV.pdf"
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-gray-700 bg-gray-900/50 hover:bg-gray-900 text-sm font-semibold text-white hover:border-gray-600 transition-all duration-300"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>
          <a
            href="#contact"
            className="text-sm font-semibold text-cyan-400 hover:text-cyan-300 py-2 transition-colors"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex items-center gap-6"
        >
          <a
            href="https://github.com/toqeer-ahmed"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-gray-800 bg-gray-950/50 hover:border-cyan-500/30 hover:bg-gray-900 text-gray-400 hover:text-cyan-400 shadow-sm hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all duration-300"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/toqeerahmedbhatti/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-gray-800 bg-gray-950/50 hover:border-cyan-500/30 hover:bg-gray-900 text-gray-400 hover:text-cyan-400 shadow-sm hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all duration-300"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:atoqeer759@gmail.com"
            className="p-3 rounded-full border border-gray-800 bg-gray-950/50 hover:border-cyan-500/30 hover:bg-gray-900 text-gray-400 hover:text-cyan-400 shadow-sm hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all duration-300"
          >
            <Mail className="w-5 h-5" />
          </a>
        </motion.div>
      </div>

      {/* Absolute floating decorations */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-cyan-500/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-purple-500/5 rounded-full filter blur-[100px] pointer-events-none" />
    </section>
  )
}
