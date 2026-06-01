'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Award, Calendar, Users, Briefcase, Heart, Cpu } from 'lucide-react'

interface TimelineItem {
  role: string
  organization: string
  period: string
  icon: React.ReactNode
  description: string[]
}

const timelineData: TimelineItem[] = [
  {
    role: 'Society Management Head',
    organization: 'ACM Student Chapter',
    period: '2025 - Present',
    icon: <Cpu className="w-5 h-5 text-cyan-400" />,
    description: [
      'Led executive committees organizing national hackathons, code sprints, and software showcases.',
      'Designed tech competition guidelines and managed cross-functional teams of 50+ student volunteers.'
    ]
  },
  {
    role: 'Sponsorship & Liaison Head',
    organization: 'SOPHEP (Society for Promotion of Higher Education)',
    period: '2024 - 2025',
    icon: <Briefcase className="w-5 h-5 text-purple-400" />,
    description: [
      'Secured over 1M+ PKR in sponsorships from corporations and tech firms for national symposiums.',
      'Fostered external corporate alliances, aligning student talents with active recruiter panels.'
    ]
  },
  {
    role: 'Co-Founder',
    organization: 'Mission Smile',
    period: '2023 - Present',
    icon: <Heart className="w-5 h-5 text-pink-400" />,
    description: [
      'Co-founded a student charity organization dedicated to providing healthcare and educational access.',
      'Organized fundraising drives, raising substantial donations for community outreach projects.'
    ]
  },
  {
    role: 'C++ Workshop Mentor',
    organization: 'GIKI ACM & IEEE Societies',
    period: '2024',
    icon: <Users className="w-5 h-5 text-teal-400" />,
    description: [
      'Conducted programming bootcamp series introducing object-oriented principles to 150+ freshman.',
      'Built custom lab exercises, debugging clinics, and algorithmic code reviews.'
    ]
  },
  {
    role: 'Competitive Programmer / Participant',
    organization: 'ICPC National Programming Contest',
    period: '2023 - 2024',
    icon: <Award className="w-5 h-5 text-blue-400" />,
    description: [
      'Represented GIKI in multiple national-level programming contests.',
      'Solved complex graph-theory, dynamic programming, and mathematical algorithms under tight time caps.'
    ]
  }
]

export default function Timeline() {
  return (
    <section id="experience" className="py-24 bg-gray-950 relative overflow-hidden">
      
      {/* Background radial effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-20 text-center">
          <h2 className="text-sm font-semibold tracking-widest text-cyan-400 uppercase mb-3">Timeline</h2>
          <p className="text-3xl md:text-4xl font-bold text-white max-w-2xl">
            Experience & Leadership
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded mt-4" />
        </div>

        {/* Counter Metric Cards at the Top */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-2xl border border-gray-900 bg-gray-950/40 backdrop-blur-sm hover:border-cyan-500/20 hover:bg-cyan-950/5 transition-all duration-300 text-center">
            <p className="text-2xl md:text-3xl font-black text-cyan-400 mb-1">1M+ PKR</p>
            <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold">Corporate Sponsorships Secured</p>
          </div>
          <div className="p-6 rounded-2xl border border-gray-900 bg-gray-950/40 backdrop-blur-sm hover:border-purple-500/20 hover:bg-purple-950/5 transition-all duration-300 text-center">
            <p className="text-2xl md:text-3xl font-black text-purple-400 mb-1">150+ Students</p>
            <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold">Guided via C++ bootcamps</p>
          </div>
          <div className="p-6 rounded-2xl border border-gray-900 bg-gray-950/40 backdrop-blur-sm hover:border-pink-500/20 hover:bg-pink-950/5 transition-all duration-300 text-center">
            <p className="text-2xl md:text-3xl font-black text-pink-400 mb-1">10+ Events</p>
            <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold">Organized under ACM leadership</p>
          </div>
        </div>

        {/* Vertical Timeline container */}
        <div className="relative border-l border-gray-900 max-w-3xl mx-auto pl-6 md:pl-10 space-y-12">
          
          {timelineData.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              key={index}
              className="relative group"
            >
              {/* Vertical line indicator bubble */}
              <div className="absolute -left-[35px] md:-left-[51px] top-1.5 w-6 h-6 rounded-full border border-gray-900 bg-gray-950 flex items-center justify-center group-hover:border-cyan-500/50 group-hover:scale-110 shadow-sm transition-all duration-300">
                {item.icon}
              </div>

              {/* Event card body */}
              <div className="p-6 rounded-2xl border border-gray-900 bg-gray-950/30 hover:border-cyan-500/10 hover:bg-cyan-950/5 shadow-sm transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h3 className="text-base md:text-lg font-extrabold text-white group-hover:text-cyan-400 transition-colors">
                      {item.role}
                    </h3>
                    <p className="text-xs text-gray-400 font-semibold">{item.organization}</p>
                  </div>
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-900 border border-gray-800 text-[10px] text-gray-400 font-mono mt-2 sm:mt-0 w-fit">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    {item.period}
                  </span>
                </div>

                <ul className="space-y-2">
                  {item.description.map((desc, i) => (
                    <li key={i} className="text-xs text-gray-400 leading-relaxed font-light flex items-start gap-2">
                      <span className="text-cyan-400 mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-cyan-400" />
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  )
}
