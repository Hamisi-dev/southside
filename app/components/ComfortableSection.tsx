'use client'

import React from 'react'
import SectionVideo from './SectionVideo'

interface ComfortableSectionProps {
  title?: string
  description?: string
  video?: {
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
            {video ? (
              <SectionVideo
                video={video}
                thumbnail={videoThumbnail}
                className="bg-gradient-to-br from-gray-100 to-gray-200"
              />
            ) : (
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="grid grid-cols-6 grid-rows-4 gap-1 w-11/12 h-5/6">
                    {Array.from({ length: 24 }).map((_, index) => (
                      <div 
                        key={index}
                        className={`rounded-sm flex items-center justify-center ${
                          index % 3 === 0 ? 'bg-white' : 
                          index % 3 === 1 ? 'bg-gray-300' : 'bg-gray-200'
                        }`}
                      >
                        {index % 4 === 0 && (
                          <div className="flex space-x-1">
                            <div className="w-1 h-6 bg-red-500 rounded-sm"></div>
                            <div className="w-1 h-5 bg-blue-500 rounded-sm"></div>
                            <div className="w-1 h-7 bg-green-500 rounded-sm"></div>
                          </div>
                        )}
                        {index % 4 === 1 && (
                          <div className="w-4 h-4 bg-orange-400 rounded-full"></div>
                        )}
                        {index % 4 === 2 && (
                          <div className="w-5 h-3 bg-gray-700 rounded"></div>
                        )}
                        {index % 4 === 3 && (
                          <div className="flex space-x-1">
                            <div className="w-1 h-4 bg-purple-500 rounded-sm"></div>
                            <div className="w-1 h-6 bg-yellow-500 rounded-sm"></div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
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
