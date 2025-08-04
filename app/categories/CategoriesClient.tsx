'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/sanity/lib/image'
import { Product } from '@/types'

interface CategoriesClientProps {
  products: Product[]
}

export default function CategoriesClient({ products }: CategoriesClientProps) {
  const [selectedCategory, setSelectedCategory] = useState('All')

  // Category filter options
  const categories = [
    'All', 'Furnitures', 'Electronics', 'Lamps', 'Kitchen', 'Chairs', 'Skin Care'
  ]

  // Filter products based on selected category
  // For now, showing all products since we don't have category data in Sanity
  const filteredProducts = products

  // Handle category selection
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category)
    // TODO: Implement actual filtering logic when categories are added to Sanity schema
  }

  return (
    <div>
      {/* Interactive Category Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategorySelect(category)}
            className={`px-6 py-2 rounded-full font-medium transition-colors ${
              selectedCategory === category
                ? 'bg-gray-900 text-white'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <Link 
            key={product._id}
            href={`/products/${product._id}`}
            className="group cursor-pointer"
          >
            <div className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
              {/* Product Image */}
              <div className="aspect-square bg-gray-50 flex items-center justify-center p-6">
                {product.images && product.images[0] ? (
                  <Image
                    src={urlFor(product.images[0]).width(300).height(300).url()}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="object-contain max-w-full max-h-full group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  // Fallback product illustrations
                  <div className="w-32 h-32 bg-gray-300 rounded-lg flex items-center justify-center">
                    <div className="w-8 h-8 bg-gray-400 rounded"></div>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900 mb-2 line-clamp-2 group-hover:text-gray-700 transition-colors">
                  {product.name}
                </h3>
                <p className="text-xl font-bold text-gray-900">
                  ${product.price}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Empty state if no products */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
          <p className="text-gray-600">Try selecting a different category or check back later.</p>
        </div>
      )}
    </div>
  )
}
