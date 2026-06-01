'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Terminal, Database, Cpu, Wrench } from 'lucide-react'

const categories = [
  { id: 'all', name: 'All Skills', icon: null },
  { id: 'programming', name: 'Programming', icon: <Terminal className="w-4 h-4" /> },
  { id: 'ai-ml', name: 'AI & ML', icon: <Cpu className="w-4 h-4" /> },
  { id: 'backend', name: 'Backend', icon: <Database className="w-4 h-4" /> },
  { id: 'tools', name: 'Tools & Others', icon: <Wrench className="w-4 h-4" /> },
]

const skills = [
  // Programming
  { name: 'Python', category: 'programming', level: 95, desc: 'Primary language for ML, research pipelines, and backend APIs.' },
  { name: 'C++', category: 'programming', level: 90, desc: 'Algorithms, performance critical engines, ICPC challenges.' },
  { name: 'Java', category: 'programming', level: 85, desc: 'OOP architectures, Spring Boot ecosystems, enterprise design.' },
  { name: 'JavaScript', category: 'programming', level: 85, desc: 'Modern web applications, Node.js scripts, dynamic UI logic.' },
  { name: 'SQL', category: 'programming', level: 80, desc: 'Relational design, indexing, advanced queries in PostgreSQL.' },
  { name: 'NoSQL', category: 'programming', level: 75, desc: 'Document store optimization and database caching systems.' },
  { name: 'C', category: 'programming', level: 80, desc: 'Systems programming, hardware layout, and kernel operations.' },

  // AI & ML
  { name: 'PyTorch', category: 'ai-ml', level: 92, desc: 'Dynamic graphs, custom model building, and deep learning training.' },
  { name: 'TensorFlow', category: 'ai-ml', level: 85, desc: 'Model exporting, Keras architectures, and deep neural structures.' },
  { name: 'Scikit-Learn', category: 'ai-ml', level: 90, desc: 'Statistical modeling, feature selection, pipeline construction.' },
  { name: 'OpenCV', category: 'ai-ml', level: 88, desc: 'Image manipulation, filters, video pipelines, spatial matrices.' },
  { name: 'NLP', category: 'ai-ml', level: 90, desc: 'Tokenizers, BERT/SBERT, semantic search, TF-IDF mapping.' },
  { name: 'CNNs', category: 'ai-ml', level: 93, desc: 'Image classification, feature map extractions, custom architectures.' },
  { name: 'Deep Learning', category: 'ai-ml', level: 92, desc: 'Multi-layer systems, backpropagation, optimizers, learning rate decays.' },
  { name: 'Model Optimization', category: 'ai-ml', level: 80, desc: 'ONNX exports, tensor quantization, and latency minimization.' },

  // Backend
  { name: 'Node.js', category: 'backend', level: 88, desc: 'Asynchronous scripting, REST architectures, NPM libraries.' },
  { name: 'Express.js', category: 'backend', level: 88, desc: 'Modular routing, custom middleware execution, API services.' },
  { name: 'Flask', category: 'backend', level: 85, desc: 'Microservices, deep learning models serving, lightweight endpoints.' },
  { name: 'REST APIs', category: 'backend', level: 90, desc: 'Standard conventions, security measures, request body validations.' },

  // Tools
  { name: 'Git & GitHub', category: 'tools', level: 92, desc: 'Collaborative development, PRs, branching structures, CI/CD.' },
  { name: 'Linux', category: 'tools', level: 85, desc: 'Shell scripting, administration, file systems, server deployments.' },
  { name: 'Jupyter & Colab', category: 'tools', level: 95, desc: 'Exploratory data analysis, rapid prototyping, research notes.' },
  { name: 'Jira', category: 'tools', level: 80, desc: 'Sprint schedules, agile organization, issue tracking tickets.' },
  { name: 'OCR', category: 'tools', level: 82, desc: 'Optical text extractions, structural parsing, Tesseract tools.' },
]

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredSkills = skills.filter((skill) => {
    if (activeCategory === 'all') return true
    return skill.category === activeCategory
  })

  return (
    <section id="skills" className="py-24 bg-gray-950 relative overflow-hidden">
      
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-purple-500/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-sm font-semibold tracking-widest text-cyan-400 uppercase mb-3">Skills</h2>
          <p className="text-3xl md:text-4xl font-bold text-white max-w-2xl">
            My Technical Arsenal
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded mt-4" />
        </div>

        {/* Categories Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 border ${
                activeCategory === cat.id
                  ? 'border-cyan-400 bg-cyan-950/20 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.25)]'
                  : 'border-gray-800 bg-gray-950/40 text-gray-400 hover:text-gray-200 hover:border-gray-700'
              }`}
            >
              {cat.icon}
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={skill.name}
                className="p-5 rounded-2xl border border-gray-900 bg-gray-950/40 backdrop-blur-sm hover:border-cyan-500/20 hover:bg-cyan-950/5 group shadow-sm transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-gray-200 text-sm md:text-base group-hover:text-cyan-400 transition-colors">
                      {skill.name}
                    </span>
                    <span className="font-mono text-xs font-semibold text-cyan-400/90 bg-cyan-950/25 border border-cyan-500/10 px-2 py-0.5 rounded-full">
                      {skill.level}%
                    </span>
                  </div>
                  <p className="text-[11px] md:text-xs text-gray-500 leading-relaxed font-light mb-4 min-h-[32px]">
                    {skill.desc}
                  </p>
                </div>

                {/* Progress bar container */}
                <div className="w-full h-1.5 bg-gray-900 rounded-full overflow-hidden mt-auto">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full shadow-[0_0_8px_rgba(6,182,212,0.5)]"
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  )
}
