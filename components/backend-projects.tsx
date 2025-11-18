'use client'

import React, { useState } from 'react'

interface BackendProjectsProps {
  onNavigate: (view: string) => void
}

export default function BackendProjects({ onNavigate }: BackendProjectsProps) {
  const projects = [
    {
      title: 'StatusBoard',
      description: 'A real-time monitoring dashboard for system health and performance tracking.',
      emoji: '📊',
      tags: ['Real-time', 'Monitoring', 'Scalable']
    },
    {
      title: 'IncidentHub',
      description: 'Incident management and response system designed for rapid team coordination.',
      emoji: '⚡',
      tags: ['Crisis Management', 'Coordination', 'Rapid Response']
    }
  ]

  const [centerIndex, setCenterIndex] = useState(0)
  
  const getVisibleIndices = () => {
    const total = projects.length
    const left = (centerIndex - 1 + total) % total
    const center = centerIndex
    const right = (centerIndex + 1) % total
    return { left, center, right }
  }
  
  const { left, center, right } = getVisibleIndices()
  
  const nextSlide = () => {
    setCenterIndex((prev) => (prev + 1) % projects.length)
  }
  
  const prevSlide = () => {
    setCenterIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10" style={{
        background: 'linear-gradient(180deg, rgba(15, 13, 10, 0.9) 0%, rgba(26, 22, 18, 0.8) 50%, rgba(15, 13, 10, 0.9) 100%)'
      }} />
      
      {/* Warm ambient glow */}
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
      
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-amber-100 to-orange-200 bg-clip-text text-transparent">
            Backend Projects Shelf
          </h2>
          <p className="text-lg text-muted-foreground mb-8">Carefully displayed projects</p>
        </div>

        {/* Center-focused carousel */}
        <div className="relative mb-12 flex justify-center items-center h-80">
          {/* Left card - dimmed and smaller */}
          <div className="absolute left-0 w-1/4 opacity-60 scale-75 transition-all duration-500">
            <div className="card-glow p-8 rounded-2xl h-full flex flex-col">
              <div className="text-5xl mb-6">{projects[left].emoji}</div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">{projects[left].title}</h3>
              <p className="text-muted-foreground mb-6 flex-grow text-sm">{projects[left].description}</p>
              <div className="flex flex-wrap gap-2">
                {projects[left].tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 text-xs font-medium rounded-full bg-orange-500/20 text-orange-200 border border-orange-500/30">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Center card - featured and larger */}
          <div className="relative w-1/3 transition-all duration-500 z-10">
            <div className="group card-glow p-8 rounded-2xl hover-lift-glow h-full flex flex-col scale-100 shadow-2xl" style={{
              boxShadow: '0 0 50px rgba(255, 165, 0, 0.4), 0 0 100px rgba(245, 169, 98, 0.2)'
            }}>
              <div className="text-5xl mb-6">{projects[center].emoji}</div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">{projects[center].title}</h3>
              <p className="text-muted-foreground mb-6 flex-grow">{projects[center].description}</p>
              <div className="flex flex-wrap gap-2">
                {projects[center].tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 text-xs font-medium rounded-full bg-orange-500/20 text-orange-200 border border-orange-500/30">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right card - dimmed and smaller */}
          <div className="absolute right-0 w-1/4 opacity-60 scale-75 transition-all duration-500">
            <div className="card-glow p-8 rounded-2xl h-full flex flex-col">
              <div className="text-5xl mb-6">{projects[right].emoji}</div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">{projects[right].title}</h3>
              <p className="text-muted-foreground mb-6 flex-grow text-sm">{projects[right].description}</p>
              <div className="flex flex-wrap gap-2">
                {projects[right].tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 text-xs font-medium rounded-full bg-orange-500/20 text-orange-200 border border-orange-500/30">
                    {tag}
                  </span>
                ))}
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
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCenterIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  centerIndex === idx ? 'bg-orange-400 w-6' : 'bg-orange-400/40'
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
            onClick={() => onNavigate('about')}
            className="px-4 py-2 bg-amber-700/20 text-amber-200/60 hover:text-amber-200 hover:bg-amber-700/30 rounded-lg text-sm transition-all"
          >
            ← Prev
          </button>
          <button
            onClick={() => onNavigate('games')}
            className="px-4 py-2 bg-amber-700/20 text-amber-200/60 hover:text-amber-200 hover:bg-amber-700/30 rounded-lg text-sm transition-all"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  )
}
