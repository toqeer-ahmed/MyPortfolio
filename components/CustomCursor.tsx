'use client'

import React, { useEffect, useState, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    // Disable custom cursor on touch devices or small screens
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (isTouchDevice || window.innerWidth < 768) {
      return
    }

    const cursor = cursorRef.current
    const dot = dotRef.current

    let mouseX = 0
    let mouseY = 0
    let cursorX = 0
    let cursorY = 0

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (!visible) setVisible(true)
    }

    const onMouseLeave = () => {
      setVisible(false)
    }

    const onMouseEnter = () => {
      setVisible(true)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('clickable')
      ) {
        setHovered(true)
      } else {
        setHovered(false)
      }
    }

    window.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseleave', onMouseLeave)
    document.addEventListener('mouseenter', onMouseEnter)
    window.addEventListener('mouseover', handleMouseOver)

    const tick = () => {
      const ease = 0.15
      cursorX += (mouseX - cursorX) * ease
      cursorY += (mouseY - cursorY) * ease

      if (cursor) {
        cursor.style.transform = `translate3d(${cursorX - 16}px, ${cursorY - 16}px, 0)`
      }
      if (dot) {
        dot.style.transform = `translate3d(${mouseX - 3}px, ${mouseY - 3}px, 0)`
      }

      requestAnimationFrame(tick)
    }

    const animFrame = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseleave', onMouseLeave)
      document.removeEventListener('mouseenter', onMouseEnter)
      window.removeEventListener('mouseover', handleMouseOver)
      cancelAnimationFrame(animFrame)
    }
  }, [visible])

  if (!visible) return null

  return (
    <>
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-50 transition-all duration-300 ease-out border border-cyan-400/40 bg-cyan-400/5 mix-blend-screen ${
          hovered ? 'scale-150 border-cyan-400 bg-cyan-400/10 shadow-[0_0_15px_rgba(6,182,212,0.4)]' : ''
        }`}
      />
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 w-1.5 h-1.5 rounded-full pointer-events-none z-50 transition-all duration-100 bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)] ${
          hovered ? 'scale-0' : ''
        }`}
      />
    </>
  )
}
