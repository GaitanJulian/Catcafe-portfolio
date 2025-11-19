'use client'

import React, { useState } from 'react'
import ViewContainer from '@/components/view-container'
import FloatingDecorations from '@/components/floating-decorations'
import HeroSection from '@/components/hero-section'
import BackendProjects from '@/components/backend-projects'
import GameDevelopment from '@/components/game-development'
import WebGLShowcase from '@/components/webgl-showcase'
import AboutMe from '@/components/about-me'
import Footer from '@/components/footer'

type ViewType = 'hero' | 'backend' | 'games' | 'webgl' | 'about'

export default function Home() {
  const [currentView, setCurrentView] = useState<ViewType>('hero')

  return (
    <main className="relative w-screen overflow-hidden bg-background">
      {/* Fixed floating decorations backdrop - always visible */}
      <FloatingDecorations />

      {/* Main viewport - single screen views */}
      <div className="relative w-full h-screen overflow-hidden z-10">
        <ViewContainer isActive={currentView === 'hero'}>
          <HeroSection onNavigate={(view) => setCurrentView(view as ViewType)} />
        </ViewContainer>

        <ViewContainer isActive={currentView === 'backend'}>
          <BackendProjects onNavigate={(view) => setCurrentView(view as ViewType)} />
        </ViewContainer>

        <ViewContainer isActive={currentView === 'games'}>
          <GameDevelopment onNavigate={(view) => setCurrentView(view as ViewType)} />
        </ViewContainer>

        <ViewContainer isActive={currentView === 'webgl'}>
          <WebGLShowcase onNavigate={(view) => setCurrentView(view as ViewType)} />
        </ViewContainer>

        <ViewContainer isActive={currentView === 'about'}>
          <AboutMe onNavigate={(view) => setCurrentView(view as ViewType)} />
        </ViewContainer>
      </div>

      <Footer onNavigate={(view) => setCurrentView(view as ViewType)} currentView={currentView} />
    </main>
  )
}
