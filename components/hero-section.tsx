'use client'

import React from 'react'

interface HeroSectionProps {
  onNavigate: (view: string) => void
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  const navItems = [
    { id: 'backend', label: 'Backend Projects', emoji: '🛋️' },
    { id: 'games', label: 'Play Corner', emoji: '🎮' },
    { id: 'webgl', label: 'Café Window', emoji: '🪟' },
    { id: 'about', label: 'About Me', emoji: '☕' }
  ]

  return (
    <section className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Warm ambient lighting - main glow */}
      <div 
        className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full opacity-40 pointer-events-none blur-3xl -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(255, 165, 0, 0.5) 0%, transparent 70%)'
        }}
      />
      
      {/* Soft peach glow accent */}
      <div 
        className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full opacity-25 pointer-events-none blur-3xl -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(247, 212, 196, 0.3) 0%, transparent 70%)'
        }}
      />

      {/* Main content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="space-y-12">
          {/* Warm greeting */}
          <div className="text-lg sm:text-xl font-light text-muted-foreground mb-8 opacity-90 tracking-wide">
            ✨ Welcome to my cozy corner ✨
          </div>

          {/* Main heading with gradient */}
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight text-balance">
            <span className="bg-gradient-to-r from-amber-100 via-orange-200 to-amber-100 bg-clip-text text-transparent drop-shadow-lg">
              Cat Café Studio
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
            A cozy digital café where backend engineering meets game design. Step in, explore, and feel the warmth of creative work.
          </p>

          {/* Navigation tokens */}
          <div className="flex flex-wrap gap-3 justify-center pt-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className="px-6 py-3 card-glow text-foreground rounded-xl font-semibold hover-lift-glow transition-all flex items-center gap-2 group"
              >
                <span className="text-xl group-hover:animate-float">{item.emoji}</span>
                <span className="hidden sm:inline text-sm">{item.label}</span>
              </button>
            ))}
          </div>

          {/* Scroll hint */}
          <div className="pt-12 text-sm text-muted-foreground opacity-60">
            Click any token to explore, or scroll down for more
          </div>
        </div>
      </div>
    </section>
  )
}
