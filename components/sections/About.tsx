'use client'

import React, { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Brain, Cpu, Database, Eye, Layout, Server } from 'lucide-react'

function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const elementRef = useRef<HTMLSpanElement>(null)
  const isInView = useInView(elementRef, { once: true, margin: '-50px' })

  useEffect(() => {
    if (!isInView) return

    let startTimestamp: number | null = null
    const duration = 1500 // 1.5s animation

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)
      setCount(Math.floor(progress * value))
      if (progress < 1) {
        window.requestAnimationFrame(step)
      } else {
        setCount(value)
      }
    }

    window.requestAnimationFrame(step)
  }, [value, isInView])

  return (
    <span ref={elementRef} className="font-mono">
      {count}
      {suffix}
    </span>
  )
}

const expertises = [
  {
    icon: <Brain className="w-5 h-5 text-cyan-400" />,
    title: 'Machine Learning',
    desc: 'Supervised/Unsupervised models, regression, decision trees, and ensemble algorithms.',
  },
  {
    icon: <Cpu className="w-5 h-5 text-purple-400" />,
    title: 'Deep Learning',
    desc: 'Neural network architectures (CNNs, RNNs, LSTMs, Transformers) and hyperparameter optimization.',
  },
  {
    icon: <Database className="w-5 h-5 text-blue-400" />,
    title: 'NLP',
    desc: 'Semantic embeddings, transformer models (BERT, SBERT), text preprocessing, and sequence models.',
  },
  {
    icon: <Eye className="w-5 h-5 text-teal-400" />,
    title: 'Computer Vision',
    desc: 'CNN-driven object detection, emotion recognition, image segmentation, and Grad-CAM activation mapping.',
  },
  {
    icon: <Server className="w-5 h-5 text-pink-400" />,
    title: 'Backend Development',
    desc: 'Building high-performance REST APIs using Node.js, Express, Flask, and Spring Boot.',
  },
  {
    icon: <Layout className="w-5 h-5 text-indigo-400" />,
    title: 'Full Stack Development',
    desc: 'End-to-end applications combining modern frontends (React/Next.js) with scalable DBs (PostgreSQL).',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-950/60 border-t border-gray-900 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-sm font-semibold tracking-widest text-cyan-400 uppercase mb-3">About Me</h2>
          <p className="text-3xl md:text-4xl font-bold text-white max-w-2xl">
            Bridging AI Research & Scalable Software Engineering
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded mt-4" />
        </div>

        {/* Layout grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Narrative & Statistics */}
          <div className="lg:col-span-5 space-y-8">
            <h3 className="text-xl font-semibold text-gray-200">The Story</h3>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base font-light">
              I am a Software Engineering student at GIKI (Ghulam Ishaq Khan Institute of Engineering Sciences and Technology), Pakistan. My focus centers on building and deploying production-ready machine learning solutions, developing robust scalable architectures, and fostering student entrepreneurship.
            </p>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base font-light">
              From coding C++ algorithms to training CNN models for multimodal medical diagnosis systems, I thrive on turning complex research papers into production applications with sub-3-second latencies. I am highly interested in applying my skills to modern AI architectures at high-growth startups and top-tier labs.
            </p>

            {/* Statistics Counters */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="p-4 rounded-2xl border border-gray-800 bg-gray-950/40 backdrop-blur-sm">
                <p className="text-3xl font-extrabold text-cyan-400">
                  <AnimatedCounter value={10} suffix="+" />
                </p>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">AI Projects</p>
              </div>
              <div className="p-4 rounded-2xl border border-gray-800 bg-gray-950/40 backdrop-blur-sm">
                <p className="text-3xl font-extrabold text-purple-400">
                  <AnimatedCounter value={20} suffix="+" />
                </p>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">Technologies</p>
              </div>
              <div className="p-4 rounded-2xl border border-gray-800 bg-gray-950/40 backdrop-blur-sm">
                <p className="text-3xl font-extrabold text-blue-400">
                  <AnimatedCounter value={4} suffix="+" />
                </p>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">Leadership Roles</p>
              </div>
              <div className="p-4 rounded-2xl border border-gray-800 bg-gray-950/40 backdrop-blur-sm">
                <p className="text-3xl font-extrabold text-teal-400">
                  <AnimatedCounter value={5} suffix="+" />
                </p>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">Competitions</p>
              </div>
            </div>
          </div>

          {/* Expertises Grid */}
          <div className="lg:col-span-7">
            <h3 className="text-xl font-semibold text-gray-200 mb-8 pl-2">Areas of Expertise</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {expertises.map((item, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl border border-gray-900 bg-gray-950/20 hover:border-cyan-500/20 hover:bg-cyan-950/5 group shadow-sm transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="p-2.5 rounded-xl bg-gray-900/60 w-fit mb-4 group-hover:scale-110 group-hover:bg-cyan-950/20 transition-all duration-300">
                      {item.icon}
                    </div>
                    <h4 className="text-base font-bold text-gray-200 mb-2 group-hover:text-white transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-400 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
