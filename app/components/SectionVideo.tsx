'use client'

import React, { useRef, useEffect } from 'react'
import Image from 'next/image'

interface SectionVideoProps {
  video: {
    asset: {
      url: string
    }
  }
  thumbnail?: {
    asset: {
      url: string
    }
  }
  className?: string
}

const SectionVideo: React.FC<SectionVideoProps> = ({ video, thumbnail, className = '' }) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current && video?.asset?.url) {
      // Start playing when component is mounted
      videoRef.current.play().catch(() => {
        // Autoplay failed - this is expected on mobile devices
        console.log('Autoplay prevented')
      })
    }
  }, [video])

  if (!video?.asset?.url) {
    return (
      <div className={`relative w-full aspect-[4/3] rounded-lg overflow-hidden ${className}`}>
        <div className="w-full h-full flex items-center justify-center bg-gray-100">
          <p className="text-gray-500">Video not available</p>
        </div>
      </div>
    )
  }

  return (
    <div className={`relative w-full aspect-[4/3] rounded-lg overflow-hidden ${className}`}>
      {/* Show thumbnail while video is loading */}
      {thumbnail?.asset?.url && (
        <Image
          src={thumbnail.asset.url}
          alt="Video thumbnail"
          fill
          className="object-cover"
          priority
        />
      )}
      <video
        ref={videoRef}
        src={video.asset.url}
        className="w-full h-full object-cover"
        loop
        muted
        playsInline
        poster={thumbnail?.asset.url}
      />
    </div>
  )
}

export default SectionVideo
