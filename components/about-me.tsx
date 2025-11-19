'use client'

import React from 'react'
import Image from 'next/image'

interface AboutMeProps {
  onNavigate: (view: string) => void
}

export default function AboutMe({ onNavigate }: AboutMeProps) {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: 'linear-gradient(180deg, rgba(15, 13, 10, 0.9) 0%, rgba(26, 22, 18, 0.8) 50%, rgba(15, 13, 10, 0.9) 100%)'
        }}
      />

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
        <div className="text-center mb-12">
          <h2 className="text-5xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-amber-100 to-orange-200 bg-clip-text text-transparent">
            Welcome to My café
          </h2>
        </div>

        <div className="grid md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] gap-8 items-center mb-12">
          <div className="space-y-8">
            <div className="card-glow p-8 rounded-2xl hover-lift-glow">
              <h4 className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="text-3xl">🎯</span>
                What I Do
              </h4>
              <p className="text-muted-foreground leading-relaxed text-sm">
                I design and build backend systems that are robust, maintainable, and a joy to use. I enjoy working on clean APIs, solid data models, and smooth integrations that make products feel effortless for users and teams.
              </p>
            </div>

            <div className="card-glow p-8 rounded-2xl hover-lift-glow">
              <h4 className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="text-3xl">🏡</span>
                The Café
              </h4>
              <p className="text-muted-foreground leading-relaxed text-sm">
                This portfolio is shaped like a cozy café: each section is a different table where you can sit, explore, and discover my work. Some tables highlight production-ready backend projects, others showcase prototypes and interactive worlds.
              </p>
            </div>
          </div>

          <div className="relative flex flex-col items-center gap-6 text-center">
            <div className="w-64 h-64 rounded-[30%] border border-amber-500/40 bg-gradient-to-br from-black/40 via-orange-500/20 to-amber-700/30 shadow-[0_20px_60px_rgba(0,0,0,0.6)] overflow-hidden flex items-center justify-center">
              <div className="relative w-full h-full">
                <Image
                  src="/photo/self_portrait.jpeg"
                  alt="Self portrait in the Cat CafAc"
                  fill
                  className="object-cover rounded-[40%]"
                  sizes="(max-width: 768px) 60vw, 256px"
                />
                <div className="absolute inset-x-0 bottom-4 text-center text-[12px] uppercase tracking-wider text-amber-50/80">
                  
                </div>
              </div>
            </div>
            <div className="text-muted-foreground text-sm leading-relaxed">
              Hi! I'm Julian Gaitan.
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h4 className="text-xl font-bold text-foreground mb-6">Skills & Interests</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {['Backend Dev', 'API Design', 'Python & Node.js', 'SQL & Data Modeling', 'System Design', 'Testing & Code Quality', 'Performance Optimization', 'Game Dev'].map((skill, idx) => (
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
            ↓ Back Home
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
