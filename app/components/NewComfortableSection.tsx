'use client'

import React from 'react'
import SectionVideo from './SectionVideo'

interface ComfortableSectionProps {
  title?: string
  description?: string
  video: {
    asset: {
      url: string
    }
  }
  videoThumbnail?: {
    asset: {
      url: string
    }
  }
}

const ComfortableSection: React.FC<ComfortableSectionProps> = ({ 
  title = "Comfortable & Elegante Living",
  description = "RAOUF Products are all made to standard sizes so that you can mix and match them freely",
  video,
  videoThumbnail
}) => {
  return (
    <div className='bg-[#f8f8f8] w-full py-16'>
      <div className='md:max-w-[1024px] max-w-[600px] px-4 md:px-0 m-auto w-full'>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <SectionVideo
              video={video}
              thumbnail={videoThumbnail}
              className="bg-gradient-to-br from-gray-100 to-gray-200"
            />
          </div>
          <div className="space-y-6 order-1 lg:order-2">
            <div className="text-2xl text-gray-600">⚹</div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              {title}
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed max-w-md">
              {description}
            </p>
            <button className="bg-black text-white px-8 py-3 font-semibold hover:bg-gray-800 transition-colors duration-300">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComfortableSection
