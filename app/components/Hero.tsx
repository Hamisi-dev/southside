// React import
import React from 'react'

// TypeScript interface defining the props structure for the Hero component
// These props are passed from the parent component (page.tsx) using data fetched from Sanity
interface HeroProps {
  title: string;    // Main hero title text
  subtitle: string; // Hero subtitle/description text
  videoUrl: string; // Direct URL to the background video from Sanity CDN
}

// Hero component - displays a full-screen video background with overlay content
// This component receives data from Sanity CMS via the parent page component
const Hero = ({ title, subtitle, videoUrl }: HeroProps) => {
  return (
    // Main container - full screen height with relative positioning for layering
    <div className="relative w-full h-screen">
      
      {/* Background Video Layer */}
      {/* Note: Unlike images, videos don't need Next.js configuration for external domains */}
      {/* The video URL comes directly from Sanity's CDN (backgroundVideo.asset->url) */}
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover z-0" // z-0 puts video behind content
        autoPlay    // Start playing automatically
        loop        // Loop the video continuously
        muted       // Muted by default (required for autoplay in most browsers)
        playsInline // Prevents fullscreen on mobile devices
      >
        {/* Video source - uses the videoUrl from Sanity */}
        <source src={videoUrl} type="video/mp4" />
        {/* Fallback text for browsers that don't support video */}
        Your browser does not support video playback.
      </video>

      {/* Content Overlay Layer */}
      {/* z-10 ensures content appears above the video background */}
      <div className="relative z-10 h-full flex items-center">
        {/* Container for responsive centering and padding */}
        <div className="container mx-auto px-4">
          {/* Content wrapper with max width for better readability */}
          <div className="max-w-[600px]">
            
            {/* Main Hero Title */}
            {/* Large, bold white text that stands out against video background */}
            <h1 className="text-white text-5xl font-bold mb-4">
              {title} {/* Dynamic title from Sanity CMS */}
            </h1>
            
            {/* Hero Subtitle */}
            {/* Smaller descriptive text below the main title */}
            <h2 className="text-white text-xl mb-8">
              {subtitle} {/* Dynamic subtitle from Sanity CMS */}
            </h2>

            {/* Call-to-Action Button */}
            {/* Interactive button with hover effects */}
            <button className="bg-black hover:bg-blue-700 text-white px-10 py-4 rounded-full transition-colors duration-300">
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;