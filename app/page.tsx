// Component imports - importing our custom components
import Hero from "@/app/components/Hero";     // Hero section with video background
import Products from "@/app/components/Products"; // Products grid component
import CreativeSection from "@/app/components/CreativeSection"; // Creative harmonious living section
import TrendingSection from "@/app/components/TrendingSection"; // Trending Now carousel section
import ComfortableSection from "@/app/components/ComfortableSection"; // Comfortable & Elegante Living section

// Sanity CMS imports
import { groq } from "next-sanity";              // GROQ query language for Sanity
import { client } from "@/sanity/lib/client";    // Configured Sanity client
import Footer from "./components/Footer";

// Main Home page component - this is a Server Component (runs on the server)
// Server Components can directly fetch data and don't need useEffect or useState
export default async function Home() {
  // Parallel data fetching using Promise.all for better performance
  const [heroData, products, creativeSectionData, comfortableSectionData] = await Promise.all([
    
    // GROQ Query 1: Fetch hero section data
    client.fetch(groq`
      *[_type == "hero"][0] {
        title,
        subtitle,
        "videoUrl": backgroundVideo.asset->url
      }
    `),
    
    // GROQ Query 2: Fetch all products data
    client.fetch(groq`
      *[_type == "products"] {
        _id,
        name,
        price,
        description,
        images
      }
    `),
    
    // GROQ Query 3: Fetch creative section data
    client.fetch(groq`
      *[_type == "creativeSection"][0] {
        title,
        description,
        "video": {
          "asset": {
            "url": video.asset->url
          }
        },
        "videoThumbnail": {
          "asset": {
            "url": videoThumbnail.asset->url
          }
        }
      }
    `),
    
    // GROQ Query 4: Fetch comfortable section data
    client.fetch(groq`
      *[_type == "comfortableSection"][0] {
        title,
        description,
        "video": {
          "asset": {
            "url": video.asset->url
          }
        },
        "videoThumbnail": {
          "asset": {
            "url": videoThumbnail.asset->url
          }
        }
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
      
      {/* Creative Harmonious Living Section */}
      <CreativeSection {...(creativeSectionData || {})} />
      
      {/* Trending Now Section */}
      <TrendingSection products={products} />
      
      {/* Comfortable & Elegante Living Section */}
      <ComfortableSection {...(comfortableSectionData || {})} />

     
     <Footer />
    </main>
  );
}
