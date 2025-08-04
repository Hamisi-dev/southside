import React from 'react'
import { groq } from "next-sanity"
import { client } from "@/sanity/lib/client"
import CategoriesClient from '../components/CategoriesClient'
import { Product } from '@/types'

export default async function CategoriesPage() {
  // Fetch all products for the categories page
  const products: Product[] = await client.fetch(groq`
    *[_type == "products"] {
      _id,
      name,
      price,
      description,
      images,
      category->{
        _id,
        name,
        slug,
        description
      }
    }
  `)

  // Fallback products if no data from Sanity
  const fallbackProducts: Product[] = [
    {
      _id: 'fallback-1',
      name: 'Little Armchair Sheepskin',
      price: 986,
      description: 'Comfortable armchair with sheepskin upholstery',
      images: []
    },
    {
      _id: 'fallback-2',
      name: 'Pop-Up Toaster',
      price: 45,
      description: 'Modern pop-up toaster for your kitchen',
      images: []
    },
    {
      _id: 'fallback-3',
      name: 'Lamp Light Blue',
      price: 79,
      description: 'Elegant blue pendant lamp',
      images: []
    },
    {
      _id: 'fallback-4',
      name: 'Pulp Unit - 5 Compartments',
      price: 254,
      description: 'Modular storage unit with 5 compartments',
      images: []
    }
  ]

  const displayProducts = products.length > 0 ? products : fallbackProducts

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <main className="py-8">
        <div className="md:max-w-[1024px] max-w-[600px] px-4 md:px-0 m-auto w-full">

          {/* Page Title */}
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
            ALL
          </h1>

          {/* Pass products to client component for interactive filtering */}
          <CategoriesClient products={displayProducts} />
        </div>
      </main>
    </div>
  )
}
