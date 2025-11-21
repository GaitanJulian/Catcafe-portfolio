'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { usePreloadImages } from '../hooks/use-preload-images'

interface Project {
  title: string
  description: string
  emoji: string
  tags: string[]
  image?: string
  githubUrl?: string
  liveUrl?: string
  apiUrl?: string // URL del backend/API si está desplegada por separado
  techStack?: string[]
  screenshots?: string[] // Array de URLs de screenshots para proyectos especiales
}

interface BackendProjectsProps {
  onNavigate: (view: string) => void
}

const backendProjects: Project[] = [
  {
    title: 'StatusBoard',
    description: 'A fullstack incident & production support dashboard. Simulates Level 3 support workflow with REST APIs, incident tracking, and status management.',
    emoji: 'dY"S',
    tags: ['Node.js', 'TypeScript', 'Express', 'React', 'Prisma'],
    image: '/projects/statusboard-cover.png',
    techStack: ['Node.js', 'TypeScript', 'Express', 'React', 'Prisma', 'SQLite'],
    githubUrl: 'https://github.com/GaitanJulian/StatusBoard',
    liveUrl: 'https://status-board-dxljzosd7-julians-projects-389143e1.vercel.app', // Agregar Live Demo URL cuando la tengas
    apiUrl: '' // Opcional: URL del backend si estA� desplegada por separado
  },
  {
    title: 'IncidentHub',
    description: 'Production-ready RESTful API for incident management with JWT authentication, role-based access control, service management, and audit logs.',
    emoji: '�s�',
    tags: ['Node.js', 'TypeScript', 'Express', 'PostgreSQL', 'Docker', 'JWT'],
    image: '/projects/incidenthub-cover.png',
    techStack: ['Node.js', 'TypeScript', 'Express', 'PostgreSQL', 'Prisma', 'Docker', 'JWT', 'React'],
    githubUrl: 'https://github.com/GaitanJulian/IncidentHub',
    liveUrl: 'https://incident-89vl06psn-julians-projects-389143e1.vercel.app'
  },
  {
    title: 'FlowOrder',
    description:
      'Asynchronous order processing platform with real-time payment simulation, signed webhooks, JWT authentication, refresh tokens, and state machine for order lifecycle.',
    emoji: 'dY",',
    tags: ['Node.js', 'TypeScript', 'Express', 'PostgreSQL', 'Docker', 'JWT', 'Prisma'],
    image: '/projects/floworder-cover.png',
    techStack: [
      'Node.js',
      'TypeScript',
      'Express',
      'PostgreSQL',
      'Prisma',
      'Docker',
      'JWT',
      'Supertest',
      'Jest'
    ],
    githubUrl: 'https://github.com/GaitanJulian/PaymentFlow', 
    liveUrl: '', 
    apiUrl: '' 
  },
  {
    title: 'GameInsider',
    description: 'A Django-based forum platform for video game discussions. Users can create posts, search content, like and comment on posts, and manage their profiles with custom bios and pictures.',
    emoji: 'dYZr',
    tags: ['Python', 'Django', 'SQLite', 'Bootstrap', 'JavaScript'],
    image: '/projects/gameinsider-cover.png',
    techStack: ['Python', 'Django', 'SQLite', 'Bootstrap', 'JavaScript', 'HTML', 'CSS'],
    githubUrl: 'https://github.com/GaitanJulian/GameInsiderDjango',
    liveUrl: '' // Agregar Live Demo URL si estA� desplegada
  },
  {
    title: 'Postpartum Hemorrhage XR Simulation',
    description: 'Mixed reality training simulation developed in Unity to guide medical students through postpartum hemorrhage procedures. Features spatial anchors, data capture, and performance analytics.',
    emoji: 'dY?�',
    tags: ['Unity', 'C#', 'Mixed Reality', 'XR', 'Data Analytics', 'Spatial Anchors'],
    image: '/projects/hemorrhage-xr-cover.png',
    techStack: ['Unity', 'C#', 'Mixed Reality', 'XR', 'Voice Commands', 'Data Analytics', 'Spatial Anchors'],
    screenshots: [
      '/projects/hemorrhage-xr-1.jpeg',
      '/projects/hemorrhage-xr-2.png',
      '/projects/hemorrhage-xr-3.png'
      // Agregar mA�s screenshots cuando los tengas
    ]
  }
]

const backendProjectImageUrls = backendProjects
  .map((project) => project.image)
  .filter((image): image is string => Boolean(image))

export default function BackendProjects({ onNavigate }: BackendProjectsProps) {
  usePreloadImages(backendProjectImageUrls)
  const projects = backendProjects

  const [centerIndex, setCenterIndex] = useState(0)
  const [showScreenshots, setShowScreenshots] = useState(false)
  const [screenshotIndex, setScreenshotIndex] = useState(0)
  
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
        <div className="text-center mb-12 relative z-10">
          <h2 className="text-5xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-amber-100 to-orange-200 bg-clip-text text-transparent">
            Backend Projects Shelf
          </h2>
          <p className="text-lg text-muted-foreground mb-0">Carefully displayed projects</p>
        </div>

        {/* Center-focused carousel */}
        <div className="relative mb-12 flex justify-center items-center h-80 mt-8">
          {/* Left card - dimmed and smaller */}
          <div className="absolute left-0 w-1/4 opacity-60 scale-75 transition-all duration-500">
            <div className="card-glow p-8 rounded-2xl h-full flex flex-col">
              {projects[left].image ? (
                <div className="relative w-full h-32 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={projects[left].image}
                    alt={projects[left].title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
              ) : (
                <div className="text-5xl mb-6">{projects[left].emoji}</div>
              )}
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
          <div className="relative w-1/3 max-w-md transition-all duration-500 z-10">
            <div className="group card-glow p-5 rounded-2xl hover-lift-glow h-full flex flex-col scale-100 shadow-2xl overflow-hidden" style={{
              boxShadow: '0 0 50px rgba(255, 165, 0, 0.4), 0 0 100px rgba(245, 169, 98, 0.2)'
            }}>
              {projects[center].image ? (
                <div className="relative w-full h-32 mb-3 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={projects[center].image}
                    alt={projects[center].title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              ) : (
                <div className="text-4xl mb-3 flex-shrink-0">{projects[center].emoji}</div>
              )}
              <h3 className="text-lg font-bold mb-2 text-foreground flex-shrink-0 line-clamp-2">{projects[center].title}</h3>
              <p className="text-muted-foreground mb-3 flex-grow text-xs leading-relaxed overflow-y-auto line-clamp-4">{projects[center].description}</p>
              <div className="flex flex-wrap gap-1.5 mb-3 flex-shrink-0">
                {projects[center].tags.map((tag, i) => (
                  <span key={i} className="px-2 py-0.5 text-xs font-medium rounded-full bg-orange-500/20 text-orange-200 border border-orange-500/30">
                    {tag}
                  </span>
                ))}
              </div>
              {/* Action buttons */}
              <div className="flex flex-wrap gap-2 mt-auto flex-shrink-0">
                {projects[center].githubUrl && projects[center].githubUrl.trim() !== '' && (
                  <a
                    href={projects[center].githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 bg-amber-700/30 text-amber-200 hover:bg-amber-700/50 rounded-lg text-xs font-semibold transition-all text-center"
                  >
                    GitHub
                  </a>
                )}
                {projects[center].liveUrl && projects[center].liveUrl.trim() !== '' && (
                  <a
                    href={projects[center].liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 bg-orange-600/30 text-orange-200 hover:bg-orange-600/50 rounded-lg text-xs font-semibold transition-all text-center"
                  >
                    Live Demo
                  </a>
                )}
                {projects[center].apiUrl && projects[center].apiUrl.trim() !== '' && (
                  <a
                    href={projects[center].apiUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 bg-purple-600/30 text-purple-200 hover:bg-purple-600/50 rounded-lg text-xs font-semibold transition-all text-center"
                  >
                    API
                  </a>
                )}
                {projects[center].screenshots && projects[center].screenshots.length > 0 && (
                  <button
                    onClick={() => {
                      setScreenshotIndex(0)
                      setShowScreenshots(true)
                    }}
                    className="px-3 py-2 bg-emerald-600/30 text-emerald-200 hover:bg-emerald-600/50 rounded-lg text-xs font-semibold transition-all text-center"
                  >
                    📸 Screenshots
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Right card - dimmed and smaller */}
          <div className="absolute right-0 w-1/4 opacity-60 scale-75 transition-all duration-500">
            <div className="card-glow p-8 rounded-2xl h-full flex flex-col">
              {projects[right].image ? (
                <div className="relative w-full h-32 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={projects[right].image}
                    alt={projects[right].title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
              ) : (
                <div className="text-5xl mb-6">{projects[right].emoji}</div>
              )}
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
        <div className="flex justify-center items-center gap-8 mb-12 relative z-20">
          <button
            onClick={prevSlide}
            className="px-4 py-2 card-glow text-foreground rounded-lg hover-lift-glow text-sm font-semibold transition-all relative z-20"
          >
            ← Prev
          </button>
          <div className="flex items-center gap-2 relative z-20">
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
            className="px-4 py-2 card-glow text-foreground rounded-lg hover-lift-glow text-sm font-semibold transition-all relative z-20"
          >
            Next →
          </button>
        </div>

        <div className="flex flex-col items-center gap-4 mb-4">
          <button
            onClick={() => onNavigate('hero')}
            className="px-6 py-2 card-glow text-foreground rounded-lg hover-lift-glow text-sm font-semibold"
          >
            ↓ Back to Home
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

      {/* Screenshots Viewer Overlay */}
      {showScreenshots && projects[centerIndex].screenshots && projects[centerIndex].screenshots.length > 0 && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowScreenshots(false)
            }
          }}
        >
          {/* Backdrop with warm glow */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at center, rgba(255, 165, 0, 0.2) 0%, transparent 70%)'
            }}
          />

          {/* Screenshots container */}
          <div className="relative z-10 w-full max-w-5xl max-h-[90vh] card-glow rounded-2xl overflow-hidden shadow-2xl" style={{
            boxShadow: '0 0 80px rgba(255, 165, 0, 0.5), 0 0 160px rgba(245, 169, 98, 0.3)'
          }}>
            {/* Header */}
            <div className="bg-gradient-to-r from-amber-900/80 to-orange-900/80 px-6 py-4 border-b border-amber-700/40 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📸</span>
                <h3 className="text-lg font-bold text-amber-100">
                  {projects[centerIndex].title} - Screenshots
                </h3>
              </div>
              <button
                onClick={() => setShowScreenshots(false)}
                className="px-4 py-2 bg-red-600/30 text-red-200 hover:bg-red-600/50 rounded-lg text-sm font-semibold transition-all"
              >
                ✕ Close
              </button>
            </div>

            {/* Image container */}
            <div className="relative bg-gradient-to-br from-slate-900 via-slate-950 to-black p-8">
              <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-6">
                <Image
                  src={projects[centerIndex].screenshots![screenshotIndex]}
                  alt={`Screenshot ${screenshotIndex + 1} of ${projects[centerIndex].title}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 80vw"
                />
              </div>

              {/* Navigation controls */}
              <div className="flex items-center justify-center gap-4 mb-4">
                <button
                  onClick={() => {
                    const newIndex = screenshotIndex > 0 
                      ? screenshotIndex - 1 
                      : projects[centerIndex].screenshots!.length - 1
                    setScreenshotIndex(newIndex)
                  }}
                  className="px-4 py-2 card-glow text-foreground rounded-lg hover-lift-glow text-sm font-semibold transition-all"
                >
                  ← Prev
                </button>
                
                {/* Screenshot indicators */}
                <div className="flex items-center gap-2">
                  {projects[centerIndex].screenshots!.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setScreenshotIndex(idx)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        screenshotIndex === idx ? 'bg-orange-400 w-6' : 'bg-orange-400/40'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => {
                    const newIndex = screenshotIndex < projects[centerIndex].screenshots!.length - 1
                      ? screenshotIndex + 1
                      : 0
                    setScreenshotIndex(newIndex)
                  }}
                  className="px-4 py-2 card-glow text-foreground rounded-lg hover-lift-glow text-sm font-semibold transition-all"
                >
                  Next →
                </button>
              </div>

              {/* Screenshot counter */}
              <div className="text-center text-sm text-muted-foreground">
                {screenshotIndex + 1} / {projects[centerIndex].screenshots!.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

