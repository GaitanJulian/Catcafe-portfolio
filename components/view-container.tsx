'use client'

import { ReactNode } from 'react'

interface ViewContainerProps {
  isActive: boolean
  children: ReactNode
}

export default function ViewContainer({ isActive, children }: ViewContainerProps) {
  return (
    <div
      className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
        isActive 
          ? 'opacity-100 scale-100' 
          : 'opacity-0 scale-95 pointer-events-none'
      }`}
    >
      {children}
    </div>
  )
}
