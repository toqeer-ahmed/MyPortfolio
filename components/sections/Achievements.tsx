'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Award, GraduationCap, Trophy, ShieldCheck, BookOpen } from 'lucide-react'

const courses = [
  'Artificial Intelligence',
  'Deep Learning',
  'Data Structures & Algorithms',
  'Software Engineering Principles',
  'Database Management Systems',
  'Operating Systems',
  'Web Engineering',
]

const achievements = [
  {
    title: 'ICPC National Programming Contest',
    desc: 'Qualified and represented GIKI in national competitive programming sprints, solving complex computational problems.',
    tag: 'Algorithms'
  },
  {
    title: 'Robotics Competitions',
    desc: 'Designed micro-controller interfaces and pathfinding logic for autonomous robots in university-level events.',
    tag: 'Embedded AI'
  },
  {
    title: 'Mathematics Competitions',
    desc: 'Secured high standings in mathematical Olympiads focusing on discrete mathematics, linear algebra, and probability.',
    tag: 'Mathematics'
  },
  {
    title: 'Project Commercialization Success',
    desc: 'Successfully pitched and developed commercial-grade software engines used by regional businesses (E-commerce store).',
    tag: 'Product'
  },
  {
    title: 'Technical Leadership Roles',
    desc: 'Mentored fresh students in GIKI and organized coding symposia under ACM and SOPHEP societies.',
    tag: 'Leadership'
  }
]

const certifications = [
  {
    title: 'Machine Learning Specialization',
    issuer: 'Stanford University (Coursera)',
    details: 'Supervised Learning, Neural Networks, Decision Trees, Unsupervised Learning, Recommender Systems.'
  },
  {
    title: 'Deep Neural Networks Certification',
    issuer: 'DeepLearning.AI',
    details: 'Hyperparameter tuning, regularization, optimization algorithms (Adam, RMSProp), deep architectures implementation.'
  }
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-gray-950/60 border-t border-gray-900 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-sm font-semibold tracking-widest text-cyan-400 uppercase mb-3">Milestones</h2>
          <p className="text-3xl md:text-4xl font-bold text-white max-w-2xl">
            Education & Academic Honors
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Education & Certifications */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Education Block */}
            <div className="p-6 rounded-2xl border border-gray-900 bg-gray-950/40 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-cyan-950/20 border border-cyan-500/20 rounded-xl">
                  <GraduationCap className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-white">Academic Journey</h3>
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Formal Studies</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-base font-bold text-gray-200">BS Software Engineering</h4>
                <p className="text-xs text-gray-400">GIKI (Ghulam Ishaq Khan Institute), Pakistan</p>
              </div>

              <div>
                <h5 className="text-xs font-bold text-gray-300 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-cyan-400" /> Relevant Coursework
                </h5>
                <div className="flex flex-wrap gap-2">
                  {courses.map((course) => (
                    <span
                      key={course}
                      className="px-2.5 py-1 rounded-xl text-[10px] font-semibold bg-gray-900 border border-gray-800 text-gray-400 hover:border-cyan-500/20 hover:text-gray-200 transition-colors"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Certifications Block */}
            <div className="p-6 rounded-2xl border border-gray-900 bg-gray-950/40 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-purple-950/20 border border-purple-500/20 rounded-xl">
                  <ShieldCheck className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-white">Verified Certifications</h3>
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Professional Credentials</p>
                </div>
              </div>

              <div className="space-y-4">
                {certifications.map((cert, i) => (
                  <div key={i} className="p-4 rounded-xl border border-gray-900 bg-gray-950/20">
                    <h4 className="text-sm font-bold text-gray-200 mb-1">{cert.title}</h4>
                    <p className="text-[10px] text-purple-400 font-mono mb-2">{cert.issuer}</p>
                    <p className="text-xs text-gray-400 leading-relaxed font-light">{cert.details}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Achievements (Reveal Cards) */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-xl font-extrabold text-gray-200 mb-6 pl-2 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-yellow-500 animate-pulse" /> Honors & Achievements
            </h3>

            <div className="space-y-4">
              {achievements.map((ach, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  key={index}
                  className="p-5 rounded-2xl border border-gray-900 bg-gray-950/20 hover:border-cyan-500/10 hover:bg-cyan-950/5 transition-all duration-300 flex items-start gap-4"
                >
                  <div className="p-2 bg-cyan-950/20 border border-cyan-500/10 rounded-xl text-cyan-400 mt-0.5">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                      <h4 className="text-sm md:text-base font-bold text-gray-200">{ach.title}</h4>
                      <span className="text-[9px] font-bold text-cyan-400 bg-cyan-950/30 border border-cyan-500/20 px-2 py-0.5 rounded-full uppercase tracking-wider font-mono">
                        {ach.tag}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400 font-light leading-relaxed">{ach.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
