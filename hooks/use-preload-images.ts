'use client'

import { useEffect } from 'react'

export function usePreloadImages(imageUrls: string[]) {
  useEffect(() => {
    if (imageUrls.length === 0) return

    const images: HTMLImageElement[] = []

    imageUrls.forEach((url) => {
      const img = new Image()
      img.src = url
      images.push(img)
    })

    return () => {
      images.forEach((img) => {
        img.src = ''
      })
    }
  }, [imageUrls])
}
