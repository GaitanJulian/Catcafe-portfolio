'use client'

import React from 'react'
import { socialLinks } from '@/lib/social-links'

export default function ContactFooter() {
  const socials = socialLinks

  return (
    <footer className="relative bg-gradient-to-t from-black via-gray-950 to-transparent border-t border-amber-700/40 mt-16">
      <div
        className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-20 pointer-events-none blur-3xl -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(255, 165, 0, 0.5) 0%, transparent 70%)'
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Contact section */}
        <div className="grid md:grid-cols-2 gap-16 mb-20">
          <div>
            <h3 className="text-4xl font-bold mb-6 text-foreground">Let's Create Together</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
              Have a project in mind? Ready to collaborate? I'd love to hear from you. Let's brew something amazing in this cafAc together and create experiences that warm hearts.
            </p>
            <a
              href="mailto:juliangaitan_h@hotmail.com"
              className="px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-500 text-white rounded-lg font-semibold hover-lift-glow shadow-lg inline-flex items-center justify-center"
            >
              Send me an email
            </a>
          </div>

          {/* Quick navigation */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-foreground">Quick Tour</h4>
            <div className="space-y-4 text-muted-foreground">
              {['Backend Projects Shelf', 'Play Corner', 'CafAc Window', 'About Me'].map((link, idx) => (
                <a key={idx} href="#" className="block hover:text-orange-300 transition-colors group">
                  <span className="group-hover:translate-x-1 inline-block transition-transform">?</span> {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer divider */}
        <div className="py-8 border-t border-amber-700/40 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-muted-foreground text-sm">Ac 2025 Julian Gaitan. All rights reserved. Made with warmth ?</p>
          <div className="flex gap-4">
            {socials.map((social, idx) => {
              const Icon = social.icon
              return (
                <a
                  key={idx}
                  href={social.href}
                  className="p-3 rounded-lg transition-all duration-300 hover-lift-glow"
                  style={{
                    background: 'rgba(212, 165, 116, 0.15)',
                    border: '1px solid rgba(212, 165, 116, 0.25)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 165, 0, 0.35)'
                    e.currentTarget.style.boxShadow = '0 0 30px rgba(255, 165, 0, 0.5)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(212, 165, 116, 0.15)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5 text-amber-200" />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
