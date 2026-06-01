import React from 'react'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Skills from '../components/sections/Skills'
import Projects from '../components/sections/Projects'
import Timeline from '../components/sections/Timeline'
import Achievements from '../components/sections/Achievements'
import AIPlayground from '../components/sections/AIPlayground'
import Contact from '../components/sections/Contact'

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-gray-950 text-gray-100 selection:bg-cyan-500 selection:text-white">
      {/* Immersive 3D Landing & Hero */}
      <Hero />

      {/* Narrative & Animated Stats */}
      <About />

      {/* Skill Clouds with Filters */}
      <Skills />

      {/* Featured Projects with Case Study Modals */}
      <Projects />

      {/* Vertical Experience Timeline */}
      <Timeline />

      {/* Education Coursework & Academic Honors */}
      <Achievements />

      {/* Interactive Neural Network Sandbox */}
      <AIPlayground />

      {/* Cyberpunk Form & Direct Socials */}
      <Contact />
    </main>
  )
}
