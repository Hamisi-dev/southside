"use client"

// React and Next.js imports
import React, { useState } from 'react'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import { motion } from 'framer-motion'
import { useCurrency } from '@/contexts/CurrencyContext'
import CurrencySelector from './CurrencySelector'

// TypeScript interface for Sanity image objects (reusing from Products component)
interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  hotspot?: {
    x: number
    y: number
    height: number
    width: number
  }
  crop?: {
    top: number
    bottom: number
    left: number
    right: number
  }
}

// TypeScript interface for trending products (same as regular products)
interface TrendingProduct {
  _id: string
  name: string
  price: number
  description: string
  images: SanityImage[]
}

// Props interface for the TrendingSection component
interface TrendingSectionProps {
  products: TrendingProduct[] // Array of trending products passed from parent
}

// TrendingSection component - displays horizontal scrollable product carousel
// This matches the exact design from the reference image with navigation arrows
const TrendingSection: React.FC<TrendingSectionProps> = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { format } = useCurrency()

  const itemWidth = 288 // w-72 = 18rem = 288px
  const gap = 24 // space-x-6 = 1.5rem = 24px
  const itemsPerView = 4 // Number of items visible at once

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(Math.max(0, currentIndex - 1))
    }
  }

  const handleNext = () => {
    if (currentIndex < products.length - itemsPerView) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const handleDotClick = (pageIndex: number) => {
    const newIndex = pageIndex * itemsPerView
    if (newIndex <= products.length - itemsPerView) {
      setCurrentIndex(newIndex)
    }
  }

  return (
    // Main container with white background
    <div className='bg-white w-full py-16'>
      {/* Container matching navbar and other sections positioning for consistency */}
      <div className='md:max-w-[1024px] max-w-[600px] px-4 md:px-0 m-auto w-full'>
        
        {/* Header section with title and navigation arrows */}
        <div className="flex justify-between items-center mb-8">
          {/* Section Title */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Trending Now
            </h2>
            {/* Currency Selector */}
            <div className="mt-2">
              <CurrencySelector />
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex space-x-2">
            {/* Left Arrow */}
            <button 
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`w-10 h-10 flex items-center justify-center rounded-lg transition-colors duration-300
                ${currentIndex === 0 
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                  : 'bg-black text-white hover:bg-gray-800 active:bg-gray-700'}`}
              aria-label="Previous products"
            >
              ←
            </button>
            {/* Right Arrow */}
            <button 
              onClick={handleNext}
              disabled={currentIndex >= products.length - itemsPerView}
              className={`w-10 h-10 flex items-center justify-center rounded-lg transition-colors duration-300
                ${currentIndex >= products.length - itemsPerView
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-black text-white hover:bg-gray-800 active:bg-gray-700'}`}
              aria-label="Next products"
            >
              →
            </button>
          </div>
        </div>
        
        {/* Horizontal Scrollable Products Container */}
        <div className="relative overflow-hidden">
          {/* Products Grid - horizontal layout */}
          <motion.div 
            className="flex space-x-6"
            animate={{
              x: -(currentIndex * (itemWidth + gap))
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 25,
              mass: 0.5
            }}
            initial={false}
          >
            {products.map((product) => (
              <div 
                key={product._id}
                className="flex-shrink-0 w-72 bg-gray-50 rounded-lg overflow-hidden hover:shadow-md transition-all duration-300 transform hover:scale-[1.02]"
              >
                {/* Product Image Container */}
                <div className="aspect-square relative bg-gray-100 flex items-center justify-center p-6">
                  {/* Conditional rendering - only show image if it exists */}
                  {product.images && product.images[0] && (
                    <Image
                      // Use Sanity's urlFor helper to generate optimized image URL
                      src={urlFor(product.images[0]).width(250).height(250).url()}
                      alt={product.name} // Accessibility: descriptive alt text
                      width={250}        // Required by Next.js Image component
                      height={250}       // Required by Next.js Image component
                      // object-contain ensures image fits without cropping
                      className="object-contain max-w-full max-h-full transition-opacity duration-300 hover:opacity-90"
                    />
                  )}
                </div>
                
                {/* Product Information Section */}
                <div className="p-4 bg-white">
                  {/* Product Name */}
                  <h3 className="text-lg font-medium text-gray-900 mb-2 line-clamp-2 hover:text-gray-700 transition-colors">
                    {product.name}
                  </h3>
                  {/* Product Price */}
                  <p className="text-xl font-bold text-gray-900">
                    {format(product.price)}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
        
        {/* Pagination Dots - indicate current page in carousel */}
        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            {Array.from({ length: Math.ceil(products.length / itemsPerView) }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleDotClick(idx)}
                className={`w-2 h-2 rounded-full transition-colors duration-300
                  ${Math.floor(currentIndex / itemsPerView) === idx ? 'bg-black' : 'bg-gray-300'}`}
                aria-label={`Go to page ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrendingSection
