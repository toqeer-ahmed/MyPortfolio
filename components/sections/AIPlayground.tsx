'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, RotateCcw, BrainCircuit, Activity } from 'lucide-react'

export default function AIPlayground() {
  // Neural Net Simulator States
  const [hiddenNodes, setHiddenNodes] = useState<number>(3)
  const [isFiring, setIsFiring] = useState<boolean>(false)
  const [pulseIndices, setPulseIndices] = useState<number[]>([]) // track animated pulses
  const [logs, setLogs] = useState<string[]>([
    'System initialized. Standing by for inference.',
  ])

  // Ecosystem Hover Connections Map
  const [activeEcoNode, setActiveEcoNode] = useState<string | null>(null)

  const ecoNodes = [
    { id: 'python', label: 'Python', category: 'core', x: 20, y: 30, connectsTo: ['pytorch', 'tensorflow', 'scikit', 'opencv', 'flask'] },
    { id: 'pytorch', label: 'PyTorch', category: 'ml', x: 45, y: 15, connectsTo: ['python', 'scikit', 'model-opt'] },
    { id: 'tensorflow', label: 'TensorFlow', category: 'ml', x: 45, y: 45, connectsTo: ['python', 'model-opt'] },
    { id: 'scikit', label: 'Scikit-Learn', category: 'ml', x: 75, y: 15, connectsTo: ['python', 'pytorch'] },
    { id: 'opencv', label: 'OpenCV', category: 'ml', x: 15, y: 75, connectsTo: ['python'] },
    { id: 'flask', label: 'Flask', category: 'backend', x: 40, y: 75, connectsTo: ['python', 'react'] },
    { id: 'node', label: 'Node.js', category: 'backend', x: 70, y: 55, connectsTo: ['express', 'postgres'] },
    { id: 'express', label: 'Express.js', category: 'backend', x: 85, y: 35, connectsTo: ['node', 'react'] },
    { id: 'postgres', label: 'PostgreSQL', category: 'db', x: 80, y: 80, connectsTo: ['node'] },
    { id: 'react', label: 'React / Next.js', category: 'frontend', x: 55, y: 90, connectsTo: ['express', 'flask'] }
  ]

  const forwardPass = () => {
    if (isFiring) return
    setIsFiring(true)
    setLogs((prev) => [...prev, '>> Running forward pass...'])
    
    // Simulate pipeline latency logs
    setTimeout(() => {
      setLogs((prev) => [...prev, 'Input activations loaded: [x₁ = 0.85, x₂ = 0.42]'])
    }, 300)

    setTimeout(() => {
      setLogs((prev) => [...prev, `Hidden layer: computed ${hiddenNodes} neurons with GELU activation functions`])
    }, 700)

    setTimeout(() => {
      setLogs((prev) => [
        ...prev,
        'Output logit layer: softmax activation completed.',
        'Result: Diagnosed [Class A] with 94.7% confidence.',
        'Forward pass finished (latency: 12ms).'
      ])
      setIsFiring(false)
    }, 1200)
  }

  const resetNet = () => {
    setIsFiring(false)
    setLogs(['System initialized. Standing by for inference.'])
  }

  return (
    <section id="playground" className="py-24 bg-gray-950 relative overflow-hidden">
      
      {/* Background neon lights */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-sm font-semibold tracking-widest text-cyan-400 uppercase mb-3">AI Showcase</h2>
          <p className="text-3xl md:text-4xl font-bold text-white max-w-2xl">
            Interactive Neural Network Playground
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded mt-4" />
        </div>

        {/* 2 Column Layout: NN Simulator + Ecosystem */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Column 1: NN Simulator */}
          <div className="lg:col-span-7 flex flex-col justify-between p-6 rounded-2xl border border-gray-900 bg-gray-950/40 backdrop-blur-sm min-h-[500px]">
            <div>
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                  <BrainCircuit className="w-5 h-5 text-cyan-400" />
                  <h3 className="text-base font-bold text-gray-200">Forward Propagation Visualizer</h3>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setHiddenNodes(Math.max(2, hiddenNodes - 1))}
                    disabled={isFiring}
                    className="px-2 py-1 bg-gray-900 border border-gray-800 rounded text-xs text-gray-400 hover:text-white disabled:opacity-40"
                  >
                    - Node
                  </button>
                  <span className="text-xs text-cyan-400 font-mono font-bold">{hiddenNodes} Hidden</span>
                  <button
                    onClick={() => setHiddenNodes(Math.min(6, hiddenNodes + 1))}
                    disabled={isFiring}
                    className="px-2 py-1 bg-gray-900 border border-gray-800 rounded text-xs text-gray-400 hover:text-white disabled:opacity-40"
                  >
                    + Node
                  </button>
                </div>
              </div>

              {/* Neural Net Node Grid Visualizer */}
              <div className="h-64 border border-gray-900 bg-gray-950/50 rounded-xl relative flex items-center justify-between px-8 overflow-hidden mb-6">
                {/* Input Layer */}
                <div className="flex flex-col gap-8 z-10">
                  <div className="relative flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full border border-cyan-400/50 bg-cyan-950 flex items-center justify-center text-cyan-400 font-mono text-xs font-black shadow-[0_0_8px_rgba(6,182,212,0.3)]">
                      x₁
                    </div>
                    <span className="text-[10px] text-gray-500 mt-1">Feature</span>
                  </div>
                  <div className="relative flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full border border-cyan-400/50 bg-cyan-950 flex items-center justify-center text-cyan-400 font-mono text-xs font-black shadow-[0_0_8px_rgba(6,182,212,0.3)]">
                      x₂
                    </div>
                    <span className="text-[10px] text-gray-500 mt-1">Clinical</span>
                  </div>
                </div>

                {/* Connection SVG layer */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  {/* Dynamic pulse representation when firing */}
                  {isFiring && (
                    <circle r="3" fill="#22d3ee" className="shadow-[0_0_8px_#22d3ee]">
                      <animateMotion
                        dur="1s"
                        repeatCount="1"
                        path="M 40 80 Q 150 50 250 80"
                        fill="freeze"
                      />
                    </circle>
                  )}
                </svg>

                {/* Hidden Layer */}
                <div className="flex flex-col gap-4 z-10">
                  {Array.from({ length: hiddenNodes }).map((_, i) => (
                    <motion.div
                      layout
                      key={i}
                      className="w-6 h-6 rounded-full border border-purple-400/40 bg-purple-950 flex items-center justify-center text-[10px] text-purple-400 font-mono"
                    >
                      h{i+1}
                    </motion.div>
                  ))}
                </div>

                {/* Output Layer */}
                <div className="flex flex-col z-10 items-center">
                  <motion.div
                    animate={isFiring ? { scale: [1, 1.2, 1] } : {}}
                    transition={{ delay: 0.8, duration: 0.4 }}
                    className="w-9 h-9 rounded-full border border-emerald-400/50 bg-emerald-950 flex items-center justify-center text-emerald-400 font-mono text-xs font-black shadow-[0_0_12px_rgba(52,211,153,0.3)]"
                  >
                    ŷ
                  </motion.div>
                  <span className="text-[10px] text-gray-500 mt-1">Softmax</span>
                </div>
              </div>
            </div>

            {/* Neural Net Simulator Logs */}
            <div className="flex-1 flex flex-col justify-between">
              <div className="p-4 bg-gray-950 border border-gray-900 rounded-xl h-44 overflow-y-auto font-mono text-xs text-gray-400 space-y-1.5 scrollbar-thin">
                {logs.map((log, index) => (
                  <div key={index} className="flex items-start gap-1">
                    <span className="text-gray-600 font-bold font-mono">[{index}]</span>
                    <span className={log.includes('Result') ? 'text-emerald-400 font-bold' : log.startsWith('>>') ? 'text-cyan-400 font-bold' : ''}>
                      {log}
                    </span>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-4 mt-4">
                <button
                  onClick={forwardPass}
                  disabled={isFiring}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:brightness-110 text-xs font-bold text-white shadow-lg shadow-cyan-500/25 transition-all disabled:opacity-40"
                >
                  <Play className="w-3.5 h-3.5 fill-white" />
                  Forward Pass
                </button>
                <button
                  onClick={resetNet}
                  className="p-2.5 rounded-full border border-gray-900 hover:border-gray-800 text-gray-400 hover:text-white transition-all"
                  title="Reset Logs"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

          {/* Column 2: Ecosystem Connection Map */}
          <div className="lg:col-span-5 p-6 rounded-2xl border border-gray-900 bg-gray-950/40 backdrop-blur-sm flex flex-col justify-between min-h-[500px]">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Activity className="w-5 h-5 text-purple-400" />
                <h3 className="text-base font-bold text-gray-200">Interactive Tech Ecosystem</h3>
              </div>
              <p className="text-xs text-gray-400 font-light leading-relaxed mb-6">
                Hover over any ecosystem node below to trace its linkages and understand how different frameworks interoperate in my pipelines.
              </p>
            </div>

            {/* Canvas-like Node Container */}
            <div className="relative h-80 border border-gray-900 bg-gray-950/50 rounded-xl overflow-hidden">
              
              {/* Overlay lines based on connection state */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {ecoNodes.map((node) => {
                  const isActive = activeEcoNode === node.id
                  const isConnected = activeEcoNode && node.connectsTo.includes(activeEcoNode)
                  
                  return node.connectsTo.map((targetId) => {
                    const targetNode = ecoNodes.find((n) => n.id === targetId)
                    if (!targetNode) return null

                    // Prevent duplicate lines
                    if (node.id > targetId) return null

                    const drawLine = activeEcoNode === null || isActive || (activeEcoNode === targetId)

                    return (
                      <line
                        key={`${node.id}-${targetId}`}
                        x1={`${node.x}%`}
                        y1={`${node.y}%`}
                        x2={`${targetNode.x}%`}
                        y2={`${targetNode.y}%`}
                        stroke={isActive || (activeEcoNode === targetId && isConnected) ? '#22d3ee' : '#1f2937'}
                        strokeWidth={isActive || (activeEcoNode === targetId && isConnected) ? 2 : 1}
                        strokeOpacity={drawLine ? 0.7 : 0.15}
                        className="transition-all duration-300"
                      />
                    )
                  })
                })}
              </svg>

              {/* Glowing Interactive Nodes */}
              {ecoNodes.map((node) => {
                const isActive = activeEcoNode === node.id
                const isLinked = activeEcoNode && node.connectsTo.includes(activeEcoNode)

                return (
                  <button
                    key={node.id}
                    onMouseEnter={() => setActiveEcoNode(node.id)}
                    onMouseLeave={() => setActiveEcoNode(null)}
                    style={{ left: `${node.x}%`, top: `${node.y}%` }}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 px-2.5 py-1 rounded-lg text-[9px] font-bold border transition-all duration-300 ${
                      isActive
                        ? 'border-cyan-400 bg-cyan-950/30 text-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.4)] scale-110'
                        : isLinked
                        ? 'border-purple-400 bg-purple-950/20 text-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.3)]'
                        : 'border-gray-800 bg-gray-900/60 text-gray-500 hover:text-gray-300 hover:border-gray-700'
                    }`}
                  >
                    {node.label}
                  </button>
                )
              })}
            </div>

            {/* Display focused ecosystem summary details */}
            <div className="p-3.5 bg-gray-950 border border-gray-900 rounded-xl mt-6">
              <p className="text-[10px] text-gray-500 uppercase tracking-widest font-extrabold mb-1">Ecosystem Status</p>
              <p className="text-xs text-gray-300 leading-relaxed font-light">
                {activeEcoNode === 'pytorch' && 'PyTorch leads my deep learning projects (Multimodal Medical Diagnostics). Linked with Scikit-learn for pipelines.'}
                {activeEcoNode === 'python' && 'Python serves as the core language for model experimentation, script building, data wrangling, and backend APIs.'}
                {activeEcoNode === 'node' && 'Node.js powers fast, lightweight server processes and feeds database operations securely to the client.'}
                {activeEcoNode === 'postgres' && 'PostgreSQL provides secure transaction logs, indexing constraints, and structured e-commerce catalog persistency.'}
                {activeEcoNode === 'react' && 'React / Next.js builds clean modular visual frames, loading data streams reactively and keeping state flows synced.'}
                {activeEcoNode === 'tensorflow' && 'TensorFlow supports model creation pipelines, CNN classifications, and optimization exports.'}
                {activeEcoNode === 'flask' && 'Flask hosts lightweight endpoints to serve raw Python ML/DL predictions directly to frontend networks.'}
                {activeEcoNode === 'express' && 'Express handles routing configurations and secure middlewares in Node-centric backend servers.'}
                {activeEcoNode === 'scikit' && 'Scikit-learn coordinates ML models training, clustering, features selection, and statistical logs.'}
                {activeEcoNode === 'opencv' && 'OpenCV performs real-time visual frames processing, color manipulations, and image preprocessing.'}
                {activeEcoNode === null && 'Trace connection channels by hovering over framework cards.'}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
