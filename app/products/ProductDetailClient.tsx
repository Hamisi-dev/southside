'use client'

// Client component for interactive product detail features
// Handles quantity selection, add to cart, and buy now functionality
import React, { useState } from 'react'
import { useCurrency } from '@/contexts/CurrencyContext'

// TypeScript interface for Sanity image objects
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

// TypeScript interface for product data
interface Product {
  _id: string
  name: string
  price: number
  description: string
  images: SanityImage[]
}

interface ProductDetailClientProps {
  product: Product
}

export default function ProductDetailClient({ product }: ProductDetailClientProps) {
  const [quantity, setQuantity] = useState(1)
  const { format } = useCurrency()

  // Handle quantity decrease
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  // Handle quantity increase
  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  // Handle direct quantity input
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value)
    if (value >= 1) {
      setQuantity(value)
    }
  }

  // Handle add to cart
  const handleAddToCart = () => {
    // TODO: Implement add to cart functionality
    console.log(`Added ${quantity} x ${product.name} to cart`)
    alert(`Added ${quantity} x ${product.name} to cart!`)
  }

  // Handle buy now
  const handleBuyNow = () => {
    // TODO: Implement buy now functionality
    console.log(`Buy now: ${quantity} x ${product.name}`)
    alert(`Proceeding to checkout with ${quantity} x ${product.name}`)
  }

  return (
    <div className="space-y-6">
      {/* Quantity Selector */}
      <div>
        <label className="block text-lg font-medium text-gray-900 mb-3">
          Quantity
        </label>
        <div className="flex items-center space-x-0 border border-gray-300 rounded-lg overflow-hidden w-fit">
          {/* Decrease Button */}
          <button
            onClick={decreaseQuantity}
            disabled={quantity <= 1}
            className={`w-12 h-12 flex items-center justify-center text-xl font-medium border-r border-gray-300 transition-colors
              ${quantity <= 1 
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                : 'bg-white text-gray-700 hover:bg-gray-50'}`}
          >
            −
          </button>
          
          {/* Quantity Input */}
          <input
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            min="1"
            className="w-16 h-12 text-center text-lg font-medium border-0 focus:outline-none focus:ring-0"
          />
          
          {/* Increase Button */}
          <button
            onClick={increaseQuantity}
            className="w-12 h-12 flex items-center justify-center text-xl font-medium border-l border-gray-300 bg-white text-gray-700 hover:bg-gray-50 transition-colors"
          >
            +
          </button>
        </div>
      </div>

      {/* Price Display */}
      <div className="flex items-center justify-between">
        <div className="text-3xl font-bold text-gray-900">
          {format(product.price)}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className="w-full py-3 px-6 border-2 border-gray-900 text-gray-900 font-semibold hover:bg-gray-900 hover:text-white transition-colors duration-300"
        >
          ADD TO CART
        </button>
        
        {/* Buy Now Button */}
        <button
          onClick={handleBuyNow}
          className="w-full py-3 px-6 bg-red-600 text-white font-semibold hover:bg-red-700 transition-colors duration-300"
        >
          BUY NOW
        </button>
      </div>

      {/* Product Specifications Section */}
      <div className="pt-8 border-t border-gray-200">
        <div className="grid grid-cols-3 gap-8">
          {/* Texture */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Texture:
            </h4>
            <p className="text-gray-700">
              Comfy Material
            </p>
          </div>
          
          {/* Weight */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Weight:
            </h4>
            <p className="text-gray-700">
              25kg
            </p>
          </div>
          
          {/* Size */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Size:
            </h4>
            <p className="text-gray-700">
              60cm x 30cm
            </p>
          </div>
        </div>
      </div>

      {/* Additional Product Info */}
      <div className="pt-6 border-t border-gray-200 space-y-4">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>Free shipping on orders over $75</span>
        </div>
        
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>30-day return policy</span>
        </div>
        
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <span>Secure checkout</span>
        </div>
      </div>
    </div>
  )
}
