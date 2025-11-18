'use client'

import React from 'react'

interface WebGLShowcaseProps {
  onNavigate: (view: string) => void
}

export default function WebGLShowcase({ onNavigate }: WebGLShowcaseProps) {
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

      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-5xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
            Café Window
          </h2>
          <p className="text-lg text-muted-foreground">Interactive world showcase</p>
        </div>

        {/* Window frame container */}
        <div className="relative group mb-8">
          <div className="absolute -inset-4 bg-gradient-to-r from-amber-600/50 to-orange-600/40 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl -z-10" />

          <div className="relative bg-gradient-to-b from-gray-900 via-gray-950 to-black border-4 border-amber-700/60 rounded-2xl overflow-hidden shadow-2xl">
            {/* Browser-like header */}
            <div className="bg-gradient-to-r from-amber-900/50 to-orange-900/40 px-6 py-4 border-b border-amber-700/40 flex items-center gap-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500 shadow-lg shadow-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-lg shadow-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500 shadow-lg shadow-green-500/50" />
              </div>
              <span className="text-sm font-mono text-amber-200/90 ml-2">café-world.webgl</span>
            </div>

            {/* WebGL canvas area */}
            <div className="w-full aspect-video bg-gradient-to-br from-slate-900 via-slate-950 to-black flex items-center justify-center">
              {/* Soft warm glow from the café */}
              <div className="absolute inset-0 opacity-25" style={{
                background: 'radial-gradient(circle at center, rgba(255, 165, 0, 0.25) 0%, transparent 60%)'
              }} />

              {/* Placeholder content */}
              <div className="flex flex-col items-center gap-6 z-10">
                <div className="text-7xl mb-4 animate-float">🐱</div>
                <div className="text-center">
                  <h3 className="text-2xl font-semibold text-amber-100 mb-2">Cat Café WebGL</h3>
                  <p className="text-sm text-amber-100/70">Embed your interactive build here</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          {/* Feature highlights */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {[
              { icon: '🎨', title: 'Artistically Crafted', desc: 'Hand-designed with warm wooden textures and cozy lighting' },
              { icon: '✨', title: 'Interactive Magic', desc: 'Explore a fully interactive 3D café environment' },
              { icon: '🚀', title: 'Performant Build', desc: 'Smooth WebGL rendering optimized for immersion' }
            ].map((feature, idx) => (
              <div key={idx} className="card-glow p-6 rounded-lg text-center hover-lift-glow">
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h4 className="font-bold mb-2 text-foreground text-sm">{feature.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Navigation below window */}
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
              onClick={() => onNavigate('games')}
              className="px-4 py-2 bg-purple-700/20 text-purple-200/60 hover:text-purple-200 hover:bg-purple-700/30 rounded-lg text-sm transition-all"
            >
              ← Prev
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="px-4 py-2 bg-purple-700/20 text-purple-200/60 hover:text-purple-200 hover:bg-purple-700/30 rounded-lg text-sm transition-all"
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
