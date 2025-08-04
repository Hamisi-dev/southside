'use client'

import React from 'react'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import { Product } from '@/types'
import { useCurrency } from '@/contexts/CurrencyContext'

interface ProductsProps {
  products: Product[]
}

const Products: React.FC<ProductsProps> = ({ products }) => {
  const { format } = useCurrency();
  return (
    <div className='bg-[#f8f8f8] w-full py-16 mt-[125px]'>
      <div className='md:max-w-[1024px] max-w-[600px] px-4 md:px-0 m-auto w-full'>
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-left">
          Products we are proud of
        </h2>
        
        {/* Responsive grid layout:
            - 1 column on mobile (grid-cols-1)
            - 2 columns on tablet (md:grid-cols-2)
            - 4 columns on desktop (lg:grid-cols-4)
            - gap-6 provides consistent spacing between cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Map through products array and render each product as a card */}
          {products.map((product) => (
            <div 
              key={product._id} // Use Sanity's unique _id as React key
              className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              {/* Product Image Container */}
              {/* aspect-square ensures 1:1 ratio, bg-gray-50 provides fallback background */}
              <div className="aspect-square relative bg-gray-50 flex items-center justify-center p-8">
                {/* Conditional rendering - only show image if it exists */}
                {product.images && product.images[0] && (
                  <Image
                    // Use Sanity's urlFor helper to generate optimized image URL
                    // .width(300).height(300) sets the image dimensions
                    // .url() generates the final URL
                    src={urlFor(product.images[0]).width(300).height(300).url()}
                    alt={product.name} // Accessibility: descriptive alt text
                    width={300}        // Required by Next.js Image component
                    height={300}       // Required by Next.js Image component
                    // object-contain ensures image fits without cropping
                    // max-w-full max-h-full prevents overflow
                    className="object-contain max-w-full max-h-full"
                  />
                )}
              </div>
              
              {/* Product Information Section */}
              <div className="p-4">
                {/* Product Name */}
                {/* line-clamp-2 limits text to 2 lines with ellipsis */}
                <h3 className="text-lg font-medium text-gray-900 mb-2 line-clamp-2">
                  {product.name}
                </h3>
                {/* Product Price */}
                <p className="text-2xl font-bold text-gray-900">
                  {format(product.price)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Products