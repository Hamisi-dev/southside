// Product detail page component
import React from 'react'
import Image from 'next/image'
import { groq } from "next-sanity"
import { client } from "@/sanity/lib/client"
import { urlFor } from '@/sanity/lib/image'
import ProductDetailClient from '../components/ProductDetailClient'
import TrendingSection from '../components/TrendingSection'
import Footer from '../components/Footer'

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

// Server component to fetch product data
export default async function ProductPage() {
  // Fetch both the single product and all products for trending section
  const [product, allProducts] = await Promise.all([
    // Fetch single product
    client.fetch(groq`
      *[_type == "products"][0] {
        _id,
        name,
        price,
        description,
        images
      }
    `),
    // Fetch all products for trending section
    client.fetch(groq`
      *[_type == "products"] {
        _id,
        name,
        price,
        description,
        images
      }
    `)
  ])

  // Fallback product if no data from Sanity
  const fallbackProduct: Product = {
    _id: 'fallback',
    name: 'Comfy Chair',
    price: 119.00,
    description: 'Sum is a series designed by the Danish designer Simon Legald, who is the epitome of modern elegance. Elegant and resolute as the tip of a wing, the armrests spread out invitingly, as if they want to embrace you in the armchair\'s soft, homely space.',
    images: []
  }

  const displayProduct = product || fallbackProduct

  return (
    <div className="min-h-screen bg-gray-50 pt-20">

      <main className="py-8">
        <div className="md:max-w-[1024px] max-w-[600px] px-4 md:px-0 m-auto w-full">
          <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
            {displayProduct.name}
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-4">
              <div className="aspect-square bg-white rounded-lg p-8 flex items-center justify-center">
                {displayProduct.images && displayProduct.images[0] ? (
                  <Image
                    src={urlFor(displayProduct.images[0]).width(500).height(500).url()}
                    alt={displayProduct.name}
                    width={500}
                    height={500}
                    className="object-contain max-w-full max-h-full"
                  />
                ) : (
                  <div className="w-80 h-80 bg-gray-800 rounded-2xl relative">
                    <div className="absolute bottom-20 left-8 right-8 h-16 bg-gray-700 rounded-t-3xl"></div>
                    <div className="absolute top-8 left-12 right-12 bottom-24 bg-gray-700 rounded-t-full"></div>
                    <div className="absolute bottom-4 left-12 w-2 h-16 bg-gray-400 rounded"></div>
                    <div className="absolute bottom-4 right-12 w-2 h-16 bg-gray-400 rounded"></div>
                    <div className="absolute bottom-4 left-20 w-2 h-16 bg-gray-400 rounded"></div>
                    <div className="absolute bottom-4 right-20 w-2 h-16 bg-gray-400 rounded"></div>
                  </div>
                )}
              </div>

              <div className="flex space-x-2">
                {displayProduct.images && displayProduct.images.length > 0 ? (
                  displayProduct.images.slice(0, 3).map((image: SanityImage, index: number) => (
                    <div key={index} className="w-20 h-20 bg-white rounded-lg p-2 flex items-center justify-center border-2 border-transparent hover:border-gray-300 cursor-pointer">
                      <Image
                        src={urlFor(image).width(80).height(80).url()}
                        alt={`${displayProduct.name} view ${index + 1}`}
                        width={80}
                        height={80}
                        className="object-contain max-w-full max-h-full"
                      />
                    </div>
                  ))
                ) : (
                  Array.from({ length: 3 }).map((_, index) => (
                    <div key={index} className="w-20 h-20 bg-white rounded-lg p-2 flex items-center justify-center border-2 border-transparent hover:border-gray-300 cursor-pointer">
                      <div className="w-12 h-12 bg-gray-300 rounded"></div>
                    </div>
                  ))
                )}
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                {displayProduct.description}
              </p>

              <ProductDetailClient product={displayProduct} />
            </div>
          </div>
        </div>

        {/* Trending Section */}
        <div className="mt-16">
          <TrendingSection products={allProducts} />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
