// Component imports - importing our custom components
import Hero from "@/app/components/Hero";     // Hero section with video background
import Products from "@/app/components/Products"; // Products grid component

// Sanity CMS imports
import { groq } from "next-sanity";              // GROQ query language for Sanity
import { client } from "@/sanity/lib/client";    // Configured Sanity client

// Main Home page component - this is a Server Component (runs on the server)
// Server Components can directly fetch data and don't need useEffect or useState
export default async function Home() {
  // Parallel data fetching using Promise.all for better performance
  // This fetches both hero and products data simultaneously instead of sequentially
  const [heroData, products] = await Promise.all([
    
    // GROQ Query 1: Fetch hero section data
    // *[_type == "hero"][0] - Get the first document of type "hero"
    // The projection {...} specifies which fields to return
    client.fetch(groq`
      *[_type == "hero"][0] {
        title,                                    // Hero title text
        subtitle,                                 // Hero subtitle text
        "videoUrl": backgroundVideo.asset->url   // Transform video asset to direct URL
      }
    `),
    
    // GROQ Query 2: Fetch all products data
    // *[_type == "products"] - Get all documents of type "products"
    // Note: The schema name is "products" (plural) as defined in product-schema.ts
    client.fetch(groq`
      *[_type == "products"] {
        _id,          // Sanity document ID (required for React keys)
        name,         // Product name
        price,        // Product price
        description,  // Product description
        images        // Product images array (Sanity will return the full image objects)
      }
    `)
  ]);

  // Render the page structure
  return (
    <main>
      {/* Hero Section */}
      {/* Spread operator (...) passes all heroData properties as props */}
      {/* This is equivalent to: title={heroData.title} subtitle={heroData.subtitle} videoUrl={heroData.videoUrl} */}
      <Hero {...heroData} />
      
      {/* Products Section */}
      {/* Pass the products array as a prop to the Products component */}
      <Products products={products} />
    </main>
  );
}
