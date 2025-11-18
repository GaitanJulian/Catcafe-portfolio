'use client'

import React from 'react'

interface AboutMeProps {
  onNavigate: (view: string) => void
}

export default function AboutMe({ onNavigate }: AboutMeProps) {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10" style={{
        background: 'linear-gradient(180deg, rgba(15, 13, 10, 0.9) 0%, rgba(26, 22, 18, 0.8) 50%, rgba(15, 13, 10, 0.9) 100%)'
      }} />
      
      <div 
        className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full opacity-30 pointer-events-none blur-3xl -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(255, 165, 0, 0.4) 0%, transparent 70%)'
        }}
      />
      <div 
        className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full opacity-20 pointer-events-none blur-3xl -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(247, 212, 196, 0.3) 0%, transparent 70%)'
        }}
      />

      <div className="max-w-5xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-amber-100 to-orange-200 bg-clip-text text-transparent">
            Welcome to My Café
          </h2>
        </div>

        {/* Content cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="card-glow p-8 rounded-2xl hover-lift-glow">
            <h4 className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
              <span className="text-3xl">🎯</span>
              What I Do
            </h4>
            <p className="text-muted-foreground leading-relaxed text-sm">
              I craft meaningful digital experiences at the intersection of backend engineering and game design.
            </p>
          </div>

          <div className="card-glow p-8 rounded-2xl hover-lift-glow">
            <h4 className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
              <span className="text-3xl">🏡</span>
              The Café
            </h4>
            <p className="text-muted-foreground leading-relaxed text-sm">
              This portfolio is a warm, welcoming digital space. Like stepping into a real café, each section offers something unique.
            </p>
          </div>
        </div>

        {/* Skills grid */}
        <div className="mb-12">
          <h4 className="text-xl font-bold text-foreground mb-6">Skills & Interests</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {['Backend Dev', 'Game Design', 'WebGL', 'System Design', 'Team Lead', 'UX Focus', 'Performance', 'Innovation'].map((skill, idx) => (
              <div key={idx} className="px-4 py-2 bg-orange-500/20 border border-orange-500/40 rounded-lg text-sm font-semibold text-orange-100 text-center hover:bg-orange-500/30 transition-colors">
                {skill}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 mb-4">
          <button
            onClick={() => onNavigate('hero')}
            className="px-6 py-2 card-glow text-foreground rounded-lg hover-lift-glow text-sm font-semibold"
          >
            ↓ Back to Café
          </button>
        </div>

        <div className="flex gap-4 justify-center">
          <button
            onClick={() => onNavigate('webgl')}
            className="px-4 py-2 bg-orange-700/20 text-orange-200/60 hover:text-orange-200 hover:bg-orange-700/30 rounded-lg text-sm transition-all"
          >
            ← Prev
          </button>
          <button
            onClick={() => onNavigate('backend')}
            className="px-4 py-2 bg-orange-700/20 text-orange-200/60 hover:text-orange-200 hover:bg-orange-700/30 rounded-lg text-sm transition-all"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  )
}
