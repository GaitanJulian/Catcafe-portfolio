'use client'

import React, { useState, useEffect, useRef } from 'react'

// Declaraciones de tipos para Unity WebGL
declare global {
  interface Window {
    createUnityInstance?: (
      canvas: HTMLElement,
      config: {
        dataUrl: string
        frameworkUrl: string
        codeUrl: string
        streamingAssetsUrl: string
        companyName: string
        productName: string
        productVersion: string
      }
    ) => Promise<any>
    unityInstance?: any
  }
}

interface WebGLShowcaseProps {
  onNavigate: (view: string) => void
}

// Configuración del build de Unity
// Ruta base donde está el build de Unity
const UNITY_BUILD_PATH = '/unity-build' // Carpeta base del build
const UNITY_BUILD_FOLDER = 'Build' // Subcarpeta dentro de unity-build
const UNITY_LOADER_FILE = 'Builds.loader.js' // Nombre del archivo loader de Unity

export default function WebGLShowcase({ onNavigate }: WebGLShowcaseProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [loadError, setLoadError] = useState<string | null>(null)
  const [unityLoaded, setUnityLoaded] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const unityInstanceRef = useRef<any>(null)

  useEffect(() => {
    // Cargar Unity WebGL cuando el componente se monta
    let script: HTMLScriptElement | null = null
    
    const loadUnity = async () => {
      try {
        // Verificar si el script de Unity ya está cargado
        if (window.unityInstance) {
          setUnityLoaded(true)
          setIsLoading(false)
          return
        }

        // Cargar el script loader de Unity
        script = document.createElement('script')
        const buildUrl = `${UNITY_BUILD_PATH}/${UNITY_BUILD_FOLDER}`
        const loaderUrl = `${buildUrl}/${UNITY_LOADER_FILE}`
        console.log('Loading Unity from:', loaderUrl)
        script.src = loaderUrl
        script.async = true
        
        script.onload = () => {
          // Unity está listo para cargar
          if (window.createUnityInstance && containerRef.current) {
            // Buscar o crear el canvas para Unity
            let canvas = containerRef.current.querySelector('#unity-canvas') as HTMLCanvasElement
            
            if (!canvas) {
              // Crear canvas solo si no existe
              canvas = document.createElement('canvas')
              canvas.id = 'unity-canvas'
              canvas.style.width = '100%'
              canvas.style.height = '100%'
              canvas.style.display = 'block'
              canvas.style.position = 'relative'
              canvas.style.zIndex = '1'
              
              // Agregar el canvas al contenedor sin limpiar el contenido
              // React gestionará los otros elementos (loading, error states)
              containerRef.current.appendChild(canvas)
            }
            
            // Unity necesita el canvas directamente, no el contenedor
            window.createUnityInstance(canvas, {
              dataUrl: `${buildUrl}/Builds.data.unityweb`,
              frameworkUrl: `${buildUrl}/Builds.framework.js.unityweb`,
              codeUrl: `${buildUrl}/Builds.wasm.unityweb`,
              streamingAssetsUrl: 'StreamingAssets',
              companyName: 'SuperShyProductions',
              productName: 'JulianGaitanPortfolio',
              productVersion: '0.9',
            })
              .then((instance: any) => {
                unityInstanceRef.current = instance
                window.unityInstance = instance
                setUnityLoaded(true)
                setIsLoading(false)
              })
              .catch((error: Error) => {
                console.error('Error loading Unity:', error)
                setLoadError('Failed to load Unity build. Please check the build path.')
                setIsLoading(false)
              })
          } else {
            setLoadError('Unity loader not found. Please ensure the build files are in the correct location.')
            setIsLoading(false)
          }
        }

        script.onerror = () => {
          setLoadError(`Could not load Unity build from ${buildUrl}/${UNITY_LOADER_FILE}. Please check the path.`)
          setIsLoading(false)
        }

        document.body.appendChild(script)
      } catch (error) {
        console.error('Error setting up Unity:', error)
        setLoadError('An error occurred while loading Unity.')
        setIsLoading(false)
      }
    }

    loadUnity()
    
    // Cleanup cuando el componente se desmonta
    return () => {
      if (script && script.parentNode) {
        script.parentNode.removeChild(script)
      }
      if (unityInstanceRef.current && typeof unityInstanceRef.current.Quit === 'function') {
        unityInstanceRef.current.Quit()
      }
      if (window.unityInstance) {
        delete window.unityInstance
      }
    }
  }, [])

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
              {isLoading && (
                <span className="ml-auto text-xs text-amber-200/60 flex items-center gap-2">
                  <span className="animate-pulse">●</span> Loading...
                </span>
              )}
            </div>

            {/* WebGL canvas area */}
            <div className="relative w-full aspect-video bg-gradient-to-br from-slate-900 via-slate-950 to-black overflow-hidden">
              {/* Soft warm glow from the café */}
              <div className="absolute inset-0 opacity-25 pointer-events-none" style={{
                background: 'radial-gradient(circle at center, rgba(255, 165, 0, 0.25) 0%, transparent 60%)'
              }} />

              {/* Unity WebGL Container */}
              <div 
                ref={containerRef}
                className="w-full h-full flex items-center justify-center relative"
                style={{ minHeight: '100%', position: 'relative' }}
              >
                {/* Loading state */}
                {isLoading && !loadError && !unityLoaded && (
                  <div className="flex flex-col items-center gap-6 z-10 absolute inset-0">
                    <div className="text-7xl mb-4 animate-float">🐱</div>
                    <div className="text-center">
                      <h3 className="text-2xl font-semibold text-amber-100 mb-2">Loading Café World...</h3>
                      <div className="flex gap-2 justify-center mt-4">
                        <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" style={{ animationDelay: '0s' }} />
                        <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                        <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                      </div>
                    </div>
                  </div>
                )}

                {/* Error state */}
                {loadError && (
                  <div className="flex flex-col items-center gap-6 z-10 p-8 absolute inset-0">
                    <div className="text-6xl mb-4">⚠️</div>
                    <div className="text-center max-w-md">
                      <h3 className="text-xl font-semibold text-amber-100 mb-2">Unable to Load</h3>
                      <p className="text-sm text-amber-100/70 mb-4">{loadError}</p>
                      <p className="text-xs text-amber-100/50 mt-4">
                        Make sure your Unity build is in <code className="bg-amber-900/30 px-2 py-1 rounded">{UNITY_BUILD_PATH}/{UNITY_BUILD_FOLDER}</code>
                      </p>
                    </div>
                  </div>
                )}

                {/* Placeholder cuando no hay Unity configurado */}
                {!isLoading && !loadError && !unityLoaded && (
                  <div className="flex flex-col items-center gap-6 z-10">
                    <div className="text-7xl mb-4 animate-float">🐱</div>
                    <div className="text-center">
                      <h3 className="text-2xl font-semibold text-amber-100 mb-2">Cat Café WebGL</h3>
                      <p className="text-sm text-amber-100/70">Configure your Unity build path</p>
                    </div>
                  </div>
                )}
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
              ↓ Back to Home
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
