'use client'

import React, { useState } from 'react'
import Image from 'next/image'

interface Game {
  title: string
  description: string
  emoji?: string
  image?: string
  status: string
  tags?: string[]
  itchUrl?: string
  githubUrl?: string
}

interface GameDevelopmentProps {
  onNavigate: (view: string) => void
}

export default function GameDevelopment({ onNavigate }: GameDevelopmentProps) {

  const games: Game[] = [
    {
      title: 'Interactive Portfolio (WIP)',
      description:
        'A living, interactive space where visitors can explore my work as a 3D character, discover projects, and experience playful design.',
      emoji: '🐾',
      image: '/projects/interactive-portfolio-cover.png',
      status: 'In Development',
      tags: ['Unity', 'C#', 'WebGL', 'UX'],
      itchUrl: 'https://google.com', // reemplaza
      githubUrl: 'https://github.com'
    },
    {
      title: 'Bootcamp Brawlers',
      description:
        'Fast-paced arena brawler for up to 4 players with hazards, pickups, and polished gameplay.',
      emoji: '⚔️',
      image: '/projects/bootcamp-brawlers-cover.png',
      status: 'Complete',
      tags: ['Unity', 'C#', 'Local Multiplayer'],
      itchUrl: 'https://google.com',
      githubUrl: 'https://github.com'
    },
    {
      title: 'Life by Candlelight',
      description:
        'Atmospheric narrative-driven horror about light management, space tension and storytelling.',
      emoji: '🕯️',
      image: '/projects/life-by-candlelight-cover.png',
      status: 'Complete',
      tags: ['Unity', 'Lighting', 'Level Design'],
      itchUrl: 'https://google.com',
      githubUrl: 'https://github.com'
    },
    {
      title: 'Xenofurious Sabotage',
      description:
        'Pixel-art arcade shooter with tight controls and tuned enemy patterns.',
      emoji: '👾',
      image: '/projects/xenofurious-sabotage-cover.png',
      status: 'Complete',
      tags: ['Unity', '2D', 'C#'],
      itchUrl: 'https://google.com',
      githubUrl: 'https://github.com'
    },
    {
      title: 'NanoEscape',
      description:
        'Puzzle-platformer focusing on mechanics clarity and level pacing.',
      emoji: '🧪',
      image: '/projects/nanoescape-cover.png',
      status: 'Complete',
      tags: ['Unity', 'C#', 'Level Design'],
      itchUrl: 'https://google.com',
      githubUrl: 'https://github.com'
    },
    {
      title: 'Runes Quest',
      description:
        'Card + strategy prototype mixing lane combat and UI feedback.',
      emoji: '🔮',
      image: '/projects/runes-quest-cover.png',
      status: 'Prototype',
      tags: ['Unity', 'UI', 'C#'],
      itchUrl: 'https://google.com',
      githubUrl: 'https://github.com'
    },
    {
      title: 'Dimensional Dream',
      description:
        'Puzzle-platformer made in a jam with rapid prototyping and collaboration focus.',
      emoji: '✨',
      image: '/projects/dimensional-dream-cover.png',
      status: 'Game Jam',
      tags: ['Unity', 'C#', 'Jam Game'],
      itchUrl: 'https://google.com',
      githubUrl: 'https://github.com'
    }
  ]

  const [centerIndex, setCenterIndex] = useState(0)

  const getVisibleIndices = () => {
    const total = games.length
    return {
      left: (centerIndex - 1 + total) % total,
      center: centerIndex,
      right: (centerIndex + 1) % total
    }
  }

  const { left, center, right } = getVisibleIndices()

  const nextSlide = () => setCenterIndex((i) => (i + 1) % games.length)
  const prevSlide = () => setCenterIndex((i) => (i - 1 + games.length) % games.length)

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">

      {/* Background gradient */}
      <div className="absolute inset-0 -z-10"
        style={{
          background:
            'linear-gradient(180deg, rgba(15, 13, 10, 0.9) 0%, rgba(26, 22, 18, 0.8) 50%, rgba(15, 13, 10, 0.9) 100%)'
        }}
      />

      {/* Game glow */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full opacity-30 blur-3xl -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(123,168,159,0.4) 0%, transparent 70%)'
        }}
      />

      {/* Header */}
      <div className="text-center mb-12">
        <div className="text-6xl mb-4 animate-subtle-scale">🎮</div>
        <h2 className="text-5xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-emerald-200 to-teal-300 bg-clip-text text-transparent">
          Play Corner
        </h2>
        <p className="text-lg text-muted-foreground">Games and interactive experiences</p>
      </div>

      {/* Carousel */}
      <div className="relative mb-12 flex justify-center items-center h-80 mt-8">

        {/* --- LEFT CARD --- */}
        <div className="absolute left-0 w-1/4 opacity-60 scale-75 transition-all duration-500">
          <div className="card-glow p-6 rounded-xl h-full flex flex-col border border-emerald-500/20">
            <div className="text-5xl mb-4">{games[left].emoji}</div>
            <h3 className="text-xl font-bold mb-2">{games[left].title}</h3>
            <p className="text-sm text-muted-foreground flex-grow mb-4">{games[left].description}</p>
            <span className="px-3 py-1 text-xs rounded-full bg-emerald-500/20 text-emerald-100 w-fit">
              {games[left].status}
            </span>
          </div>
        </div>

        {/* --- CENTER CARD --- */}
        <div className="relative w-1/3 max-w-md z-10 transition-all duration-500">
          <div
            className="group card-glow p-6 rounded-xl h-full flex flex-col border border-emerald-500/30 shadow-2xl hover-lift-glow"
            style={{
              boxShadow:
                '0 0 50px rgba(123,168,159,0.4), 0 0 100px rgba(196,240,232,0.2)'
            }}
          >
            <div className="text-6xl mb-4">{games[center].emoji}</div>
            <h3 className="text-2xl font-bold mb-2">{games[center].title}</h3>

            <p className="text-sm text-muted-foreground flex-grow mb-4 leading-relaxed">
              {games[center].description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {games[center].tags?.map((t, i) => (
                <span key={i} className="px-2 py-1 text-xs rounded-full bg-emerald-500/20 text-emerald-100 border border-emerald-500/30">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-2 mt-auto">
              {games[center].itchUrl && (
                <a
                  href={games[center].itchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 bg-teal-600/30 text-teal-100 hover:bg-teal-600/50 rounded-lg text-xs font-semibold transition-all"
                >
                  ▶ Play on Itch.io
                </a>
              )}

              {games[center].githubUrl && (
                <a
                  href={games[center].githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 bg-emerald-600/30 text-emerald-100 hover:bg-emerald-600/50 rounded-lg text-xs font-semibold transition-all"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>

        {/* --- RIGHT CARD --- */}
        <div className="absolute right-0 w-1/4 opacity-60 scale-75 transition-all duration-500">
          <div className="card-glow p-6 rounded-xl h-full flex flex-col border border-emerald-500/20">
            <div className="text-5xl mb-4">{games[right].emoji}</div>
            <h3 className="text-xl font-bold mb-2">{games[right].title}</h3>
            <p className="text-sm text-muted-foreground flex-grow mb-4">{games[right].description}</p>
            <span className="px-3 py-1 text-xs rounded-full bg-emerald-500/20 text-emerald-100 w-fit">
              {games[right].status}
            </span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-center gap-8 mb-12">
        <button
          onClick={prevSlide}
          className="px-4 py-2 card-glow rounded-lg hover-lift-glow text-sm font-semibold"
        >
          ← Prev
        </button>
        <div className="flex items-center gap-2">
          {games.map((_, i) => (
            <button
              key={i}
              onClick={() => setCenterIndex(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                centerIndex === i ? 'bg-emerald-400 w-6' : 'bg-emerald-400/40'
              }`}
            />
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="px-4 py-2 card-glow rounded-lg hover-lift-glow text-sm font-semibold"
        >
          Next →
        </button>
      </div>

      {/* Back */}
      <button
        onClick={() => onNavigate('hero')}
        className="px-6 py-2 card-glow rounded-lg hover-lift-glow text-sm font-semibold"
      >
        ↓ Back to Café
      </button>
    </div>
  )
}
