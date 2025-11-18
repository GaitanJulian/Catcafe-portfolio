'use client'

import React from 'react'
import { Mail, Github, Linkedin, Twitter } from 'lucide-react'

interface FooterProps {
  onNavigate: (view: string) => void
  currentView: string
}

export default function Footer({ onNavigate, currentView }: FooterProps) {
  const navItems = [
    { id: 'backend', label: 'Backend' },
    { id: 'games', label: 'Games' },
    { id: 'webgl', label: 'WebGL' },
    { id: 'about', label: 'About' }
  ]

  return (
    <footer className="relative w-full bg-gradient-to-t from-gray-950 via-gray-900 to-transparent border-t border-amber-700/30 py-12 px-4 sm:px-6 lg:px-8">
      <div 
        className="absolute top-0 left-1/3 w-96 h-96 rounded-full opacity-20 pointer-events-none blur-3xl -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(255, 165, 0, 0.4) 0%, transparent 70%)'
        }}
      />
      <div 
        className="absolute top-1/2 right-1/4 w-80 h-80 rounded-full opacity-15 pointer-events-none blur-3xl -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(247, 212, 196, 0.3) 0%, transparent 70%)'
        }}
      />
      
      {/* Warm ambient glow */}
      <div 
        className="absolute inset-0 pointer-events-none blur-3xl opacity-20"
        style={{
          background: 'radial-gradient(circle at center, rgba(255, 165, 0, 0.3) 0%, transparent 70%)'
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Main footer content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Message */}
          <div className="flex flex-col justify-center">
            <p className="text-sm text-muted-foreground mb-4 font-light">Let's Create Together</p>
            <a 
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 px-4 py-2 card-glow text-foreground rounded-lg hover-lift-glow w-fit text-sm font-semibold"
            >
              <Mail size={16} />
              Send a Message
            </a>
          </div>

          {/* Quick navigation */}
          <div className="flex flex-col justify-center">
            <p className="text-sm text-muted-foreground mb-4 font-light">Explore Sections</p>
            <div className="flex flex-wrap gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`px-3 py-1 text-xs font-medium rounded-lg transition-all ${
                    currentView === item.id
                      ? 'card-glow text-foreground'
                      : 'bg-amber-700/20 text-amber-200/60 hover:text-amber-200 hover:bg-amber-700/30'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social links */}
          <div className="flex flex-col justify-center">
            <p className="text-sm text-muted-foreground mb-4 font-light">Connect</p>
            <div className="flex gap-4">
              {[
                { icon: Github, label: 'GitHub' },
                { icon: Linkedin, label: 'LinkedIn' },
                { icon: Twitter, label: 'Twitter' }
              ].map((social, idx) => {
                const Icon = social.icon
                return (
                  <a
                    key={idx}
                    href="#"
                    aria-label={social.label}
                    className="p-2 rounded-lg bg-amber-700/20 text-amber-200/60 hover:text-amber-200 hover:bg-amber-700/30 transition-all"
                  >
                    <Icon size={18} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Divider and copyright */}
        <div className="border-t border-amber-700/20 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-foreground/60">
            <p>Cat Café Studio © 2025</p>
            <button
              onClick={() => onNavigate('hero')}
              className="px-4 py-2 card-glow text-foreground rounded-lg hover-lift-glow text-xs font-semibold"
            >
              ↑ Back to Home
            </button>
            <p>Crafted with warmth and creativity</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
