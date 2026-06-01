'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, X, Cpu, CheckCircle2, AlertCircle } from 'lucide-react'

interface Project {
  id: string
  title: string
  subtitle: string
  description: string
  longDescription: string
  github: string
  live?: string
  tags: string[]
  metrics: string[]
  challenges: string[]
  impact: string[]
  color: string // gradient colors
}

const projects: Project[] = [
  {
    id: 'medical-diagnosis',
    title: 'Explainable Multimodal Medical Diagnosis System',
    subtitle: 'Research & Deep Learning AI',
    description: 'An advanced medical diagnosis system leveraging multimodal architecture (CNN + BERT) to analyze Chest X-ray images and clinical text reports in tandem.',
    longDescription: 'This project implements a cutting-edge multimodal deep learning network. By combining image embeddings from a Convolutional Neural Network (CNN) with clinical semantic embeddings extracted from a Bidirectional Encoder Representations from Transformers (BERT) model, the system executes cooperative diagnoses. To gain clinicians\' trust, the system features explainability modules that highlight critical visual and textual triggers.',
    github: 'https://github.com/toqeer-ahmed/Explainable-Multimodal-Medical-Diagnosis-Using-Chest-X-ray-Images-and-Clinical-Text',
    tags: ['CNN', 'BERT', 'PyTorch', 'Grad-CAM', 'Multimodal NLP', 'Medical Imaging'],
    metrics: ['94.2% ROC-AUC score', 'Grad-CAM activation mapping', 'Cross-modal attention layers'],
    challenges: [
      'Aligning disparate high-dimensional representation spaces of image and text vectors.',
      'Sparsity and noise in raw clinical reports and standard medical images.'
    ],
    impact: [
      'Enabled rapid, interpretable preliminary diagnostic summaries for radiology clinics.',
      'Provided visual heatmaps highlighting pathologically significant regions directly on radiographs.'
    ],
    color: 'from-cyan-500 to-blue-600',
  },
  {
    id: 'looks-maximizer',
    title: 'Looks Maximizer',
    subtitle: 'Production AI App',
    description: 'A low-latency production AI application executing complex face structures evaluations using a multi-model ONNX pipeline.',
    longDescription: 'Looks Maximizer is a production-grade AI system deployed on Railway and Vercel. It leverages ONNX Runtime for serverless model deployments, processing portrait images and giving detailed aesthetic structural reports in less than three seconds. The system utilizes multiple quantized model endpoints to optimize memory footprint and throughput.',
    github: 'https://github.com/toqeer-ahmed/Looks-Maximizer',
    live: 'https://looks-maximizer.vercel.app',
    tags: ['ONNX Runtime', 'FastAPI', 'Next.js', 'Railway', 'Quantization', 'Inference Pipeline'],
    metrics: ['Sub-3 second inference latency', '99.9% API uptime', '30%+ model size reduction via quantization'],
    challenges: [
      'Running heavy computer vision deep models on serverless CPU instances without incurring massive latency or cold-start issues.',
      'Handling diverse camera resolutions and lighting profiles in client uploads.'
    ],
    impact: [
      'Delivered instantaneous, scalable feedback loops to thousands of active web visitors.',
      'Established a cost-efficient deployment workflow reducing compute costs by 60% compared to traditional GPU hosting.'
    ],
    color: 'from-purple-500 to-pink-600',
  },
  {
    id: 'resume-advisor',
    title: 'Intelligent Resume & Career Advisor',
    subtitle: 'NLP Recommender System',
    description: 'A semantic matching system that parses resumes, maps skills gaps, and guides career pathing using BERT and Sentence-BERT.',
    longDescription: 'This AI-powered platform provides interactive career guidance. It ingests resumes, structures the unstructured text, and uses Sentence-BERT embeddings to calculate semantic similarities against millions of job postings. The system pinpoints exact skill-gap items and suggests personalized learning pathways.',
    github: 'https://github.com/toqeer-ahmed', // placeholder/main
    tags: ['BERT', 'SBERT', 'TF-IDF', 'Resume Parsing', 'Cosine Similarity', 'Python NLP'],
    metrics: ['88% Skill-gap accuracy', 'Handles PDF/DOCX uploads', 'Semantic search match'],
    challenges: [
      'Extracting clean skill tokens from highly irregular resume layouts and multi-column designs.',
      'Managing out-of-vocabulary technical jargon and rapidly evolving industry title mappings.'
    ],
    impact: [
      'Helped university students tailor CV structures to pass automated applicant tracking systems (ATS).',
      'Automated personalized resource recommendations for missing skill components.'
    ],
    color: 'from-blue-500 to-indigo-600',
  },
  {
    id: 'mindmate',
    title: 'MindMate',
    subtitle: 'Full-Stack Emotion Analyzer',
    description: 'A full-stack mental health helper combining React, Spring Boot, JWT, and custom CNN-based visual emotion recognition.',
    longDescription: 'MindMate merges a secure, enterprise-grade Spring Boot backend with a responsive React frontend. At its core, a custom-trained Convolutional Neural Network detects facial expressions in real-time, matching emotions with mental wellness journals, active chat services, and behavioral suggestions. The project incorporates standard design patterns for clean code management.',
    github: 'https://github.com/toqeer-ahmed/MindMate',
    tags: ['Spring Boot', 'React', 'JWT Auth', 'CNN Emotion Classifier', 'Design Patterns', 'PostgreSQL'],
    metrics: ['JWT secure endpoints', 'Real-time camera feed analysis', 'Clean MVC design patterns'],
    challenges: [
      'Achieving smooth frame rates when feeding raw canvas pixels into a Python inference microservice from a Java server.',
      'Ensuring strict data isolation and encryption for sensitive wellness logs.'
    ],
    impact: [
      'Developed a unified wellness tool logging moods automatically, reducing user entry friction.',
      'Created a solid architectural baseline utilizing Spring Security and JWT credentials.'
    ],
    color: 'from-teal-500 to-cyan-600',
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Store',
    subtitle: 'Commercial Full-Stack Deployment',
    description: 'A robust commercial e-commerce application built on Node.js, Express, and PostgreSQL, designed for scalable business sales.',
    longDescription: 'A production e-commerce engine designed for high transaction volume. Features a custom shopping cart system, secure checkout integrations, structured PostgreSQL inventory databases, and a comprehensive admin management console. Focused on quick page delivery speeds and transaction safety.',
    github: 'https://github.com/toqeer-ahmed', // placeholder
    tags: ['Node.js', 'Express.js', 'PostgreSQL', 'Admin Dashboard', 'Payment Integration', 'E-Commerce'],
    metrics: ['Commercial grade architecture', 'Database indexing for search speeds', 'Complete checkout flow'],
    challenges: [
      'Maintaining consistency of transactional states (preventing race conditions during checkout on low stock).',
      'Optimizing query latency over multi-table joins for large catalogs.'
    ],
    impact: [
      'Provided a turnkey commercial website used by retail clients to process orders online.',
      'Designed responsive dashboard tools allowing catalog edits, transaction monitoring, and stock refills.'
    ],
    color: 'from-pink-500 to-rose-600',
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section id="projects" className="py-24 bg-gray-950/60 border-t border-gray-900 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-sm font-semibold tracking-widest text-cyan-400 uppercase mb-3">Featured Projects</h2>
          <p className="text-3xl md:text-4xl font-bold text-white max-w-2xl">
            Real-World AI & Scalable Engineering
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded mt-4" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col justify-between p-6 rounded-2xl border border-gray-900 bg-gray-950/40 backdrop-blur-sm hover:border-cyan-500/20 hover:bg-cyan-950/5 hover:-translate-y-1 shadow-md transition-all duration-300 relative overflow-hidden"
            >
              {/* Highlight gradient bar */}
              <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${project.color} opacity-30 group-hover:opacity-100 transition-opacity`} />

              <div>
                <p className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest mb-2">
                  {project.subtitle}
                </p>
                <h3 className="text-lg md:text-xl font-extrabold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed font-light mb-6">
                  {project.description}
                </p>

                {/* Metrics Highlights */}
                <div className="space-y-2 mb-6">
                  {project.metrics.slice(0, 2).map((metric, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-gray-300">
                      <Cpu className="w-3.5 h-3.5 text-purple-400 flex-shrink-0" />
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] font-medium bg-gray-900 border border-gray-800 text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-gray-900 border border-gray-800 text-gray-400">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* CTA Links */}
                <div className="flex items-center gap-3 mt-auto">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 text-center py-2 px-4 rounded-xl bg-gray-900 hover:bg-cyan-950/20 text-xs font-semibold text-gray-200 hover:text-cyan-400 border border-gray-800 hover:border-cyan-500/20 transition-all cursor-pointer"
                  >
                    Case Study
                  </button>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-gray-900 border border-gray-800 hover:border-cyan-500/20 text-gray-400 hover:text-cyan-400 transition-all"
                    title="View Source Code"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-gray-900 border border-gray-800 hover:border-cyan-500/20 text-gray-400 hover:text-cyan-400 transition-all"
                      title="View Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Modal/Drawer Overlay */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-end">
              
              {/* Backdrop blur */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-gray-950/80 backdrop-blur-sm cursor-pointer"
              />

              {/* Side Drawer */}
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="relative w-full max-w-2xl h-full bg-gray-950 border-l border-gray-900 shadow-2xl p-8 overflow-y-auto z-10 flex flex-col justify-between"
              >
                <div>
                  {/* Close button */}
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest">Case Study Detail</span>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="p-2 rounded-full border border-gray-900 hover:border-gray-800 text-gray-400 hover:text-white transition-colors cursor-pointer"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <h3 className="text-2xl font-black text-white mb-2 leading-tight">
                    {selectedProject.title}
                  </h3>
                  <p className="text-xs text-gray-400 font-semibold mb-6 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    {selectedProject.subtitle}
                  </p>

                  <p className="text-sm text-gray-300 font-light leading-relaxed mb-6">
                    {selectedProject.longDescription}
                  </p>

                  {/* Metrics block */}
                  <div className="mb-8">
                    <h4 className="text-xs font-bold text-gray-200 uppercase tracking-wider mb-3">Key Metrics Achieved</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedProject.metrics.map((metric, i) => (
                        <div key={i} className="flex items-center gap-2.5 p-3 rounded-xl border border-gray-900 bg-gray-950/60 text-xs text-cyan-300 font-mono">
                          <Cpu className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                          <span>{metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Challenges section */}
                  <div className="mb-8">
                    <h4 className="text-xs font-bold text-gray-200 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                      <AlertCircle className="w-4 h-4 text-purple-400" /> Technical Challenges
                    </h4>
                    <ul className="space-y-2">
                      {selectedProject.challenges.map((challenge, i) => (
                        <li key={i} className="text-xs text-gray-400 leading-relaxed font-light flex items-start gap-2">
                          <span className="text-purple-400 mt-1 font-bold">•</span>
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Impact section */}
                  <div className="mb-8">
                    <h4 className="text-xs font-bold text-gray-200 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-teal-400" /> Real-World Impact
                    </h4>
                    <ul className="space-y-2">
                      {selectedProject.impact.map((imp, i) => (
                        <li key={i} className="text-xs text-gray-400 leading-relaxed font-light flex items-start gap-2">
                          <span className="text-teal-400 mt-1 font-bold">•</span>
                          <span>{imp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack tags */}
                  <div className="mb-8">
                    <h4 className="text-xs font-bold text-gray-200 uppercase tracking-wider mb-3">Technologies Leveraged</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-xl text-xs font-semibold bg-gray-900 border border-gray-800 text-gray-300 hover:border-cyan-500/25 transition-all"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="flex items-center gap-4 border-t border-gray-900 pt-6 mt-8">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-full bg-gray-900 hover:bg-gray-850 border border-gray-800 text-sm font-semibold text-white transition-all"
                  >
                    <Github className="w-4 h-4" />
                    Source Code
                  </a>
                  {selectedProject.live && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:brightness-110 text-sm font-semibold text-white shadow-lg shadow-cyan-500/10 transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </motion.div>

            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  )
}
