'use client'

import React, { useState } from 'react'

interface GameDevelopmentProps {
  onNavigate: (view: string) => void
}

export default function GameDevelopment({ onNavigate }: GameDevelopmentProps) {
  const games = [
    {
      title: 'Cat Café Experience',
      description: 'The main interactive café world - a cozy indie game.',
      emoji: '🐱',
      status: 'Complete'
    },
    {
      title: 'Prototype Playland',
      description: 'Experimental mechanics laboratory where creative ideas evolve.',
      emoji: '🎮',
      status: 'In Development'
    },
    {
      title: 'Game Jam Magic',
      description: 'Fast-paced creations from game jam competitions.',
      emoji: '⚡',
      status: 'Complete'
    }
  ]

  const [centerIndex, setCenterIndex] = useState(0)
  
  const getVisibleIndices = () => {
    const total = games.length
    const left = (centerIndex - 1 + total) % total
    const center = centerIndex
    const right = (centerIndex + 1) % total
    return { left, center, right }
  }
  
  const { left, center, right } = getVisibleIndices()
  
  const nextSlide = () => {
    setCenterIndex((prev) => (prev + 1) % games.length)
  }
  
  const prevSlide = () => {
    setCenterIndex((prev) => (prev - 1 + games.length) % games.length)
  }

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10" style={{
        background: 'linear-gradient(180deg, rgba(15, 13, 10, 0.9) 0%, rgba(26, 22, 18, 0.8) 50%, rgba(15, 13, 10, 0.9) 100%)'
      }} />
      
      {/* Playful mint/teal glow for game corner */}
      <div 
        className="absolute top-0 left-1/3 w-96 h-96 rounded-full opacity-25 pointer-events-none blur-3xl -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(123, 168, 159, 0.4) 0%, transparent 70%)'
        }}
      />
      <div 
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-20 pointer-events-none blur-3xl -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(123, 168, 159, 0.25) 0%, transparent 70%)'
        }}
      />

      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4 animate-subtle-scale">🎮</div>
          <h2 className="text-5xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-emerald-200 to-teal-300 bg-clip-text text-transparent">
            Play Corner
          </h2>
          <p className="text-lg text-muted-foreground">Games and interactive experiences</p>
        </div>

        {/* Center-focused carousel */}
        <div className="relative mb-12 flex justify-center items-center h-80">
          {/* Left card - dimmed and smaller */}
          <div className="absolute left-0 w-1/4 opacity-60 scale-75 transition-all duration-500">
            <div className="card-glow p-6 rounded-xl h-full flex flex-col border border-emerald-500/20">
              <div className="text-5xl mb-4 inline-block">
                {games[left].emoji}
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">{games[left].title}</h3>
              <p className="text-sm text-muted-foreground mb-6 flex-grow">{games[left].description}</p>
              <div className={`px-3 py-1 rounded-full text-xs font-semibold w-fit ${
                games[left].status === 'Complete' 
                  ? 'bg-emerald-500/30 text-emerald-100' 
                  : 'bg-amber-500/30 text-amber-100'
              }`}>
                {games[left].status}
              </div>
            </div>
          </div>

          {/* Center card - featured and larger */}
          <div className="relative w-1/3 transition-all duration-500 z-10">
            <div className="group card-glow p-6 rounded-xl h-full flex flex-col border border-emerald-500/20 scale-100 shadow-2xl" style={{
              boxShadow: '0 0 50px rgba(123, 168, 159, 0.4), 0 0 100px rgba(196, 240, 232, 0.2)'
            }}>
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-100 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
              <div className="text-5xl mb-4 group-hover:animate-float inline-block">
                {games[center].emoji}
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">{games[center].title}</h3>
              <p className="text-sm text-muted-foreground mb-6 flex-grow">{games[center].description}</p>
              <div className={`px-3 py-1 rounded-full text-xs font-semibold w-fit ${
                games[center].status === 'Complete' 
                  ? 'bg-emerald-500/30 text-emerald-100' 
                  : 'bg-amber-500/30 text-amber-100'
              }`}>
                {games[center].status}
              </div>
            </div>
          </div>

          {/* Right card - dimmed and smaller */}
          <div className="absolute right-0 w-1/4 opacity-60 scale-75 transition-all duration-500">
            <div className="card-glow p-6 rounded-xl h-full flex flex-col border border-emerald-500/20">
              <div className="text-5xl mb-4 inline-block">
                {games[right].emoji}
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">{games[right].title}</h3>
              <p className="text-sm text-muted-foreground mb-6 flex-grow">{games[right].description}</p>
              <div className={`px-3 py-1 rounded-full text-xs font-semibold w-fit ${
                games[right].status === 'Complete' 
                  ? 'bg-emerald-500/30 text-emerald-100' 
                  : 'bg-amber-500/30 text-amber-100'
              }`}>
                {games[right].status}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation controls */}
        <div className="flex justify-center gap-8 mb-12">
          <button
            onClick={prevSlide}
            className="px-4 py-2 card-glow text-foreground rounded-lg hover-lift-glow text-sm font-semibold transition-all"
          >
            ← Prev
          </button>
          <div className="flex items-center gap-2">
            {games.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCenterIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  centerIndex === idx ? 'bg-emerald-400 w-6' : 'bg-emerald-400/40'
                }`}
              />
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="px-4 py-2 card-glow text-foreground rounded-lg hover-lift-glow text-sm font-semibold transition-all"
          >
            Next →
          </button>
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
            onClick={() => onNavigate('backend')}
            className="px-4 py-2 bg-emerald-700/20 text-emerald-200/60 hover:text-emerald-200 hover:bg-emerald-700/30 rounded-lg text-sm transition-all"
          >
            ← Prev
          </button>
          <button
            onClick={() => onNavigate('webgl')}
            className="px-4 py-2 bg-emerald-700/20 text-emerald-200/60 hover:text-emerald-200 hover:bg-emerald-700/30 rounded-lg text-sm transition-all"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  )
}
