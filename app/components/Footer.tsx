// Footer component for Southside Clothing Diani
// 2025 e-commerce footer with lead magnets, enhanced social media, and mobile-first design
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Instagram, Facebook, Youtube, MessageCircle, Mail, Phone, MapPin, Shield, CreditCard, Truck, ArrowRight } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

interface SocialLinks {
  instagram?: string
  facebook?: string
  tiktok?: string
  youtube?: string
  whatsapp?: string
  googleReviews?: string
}

interface ContactInfo {
  email?: string
  phone?: string
  address?: string
}

interface SiteSettings {
  socialMedia?: SocialLinks
  contactInfo?: ContactInfo
}

export default function Footer() {
  // Static site settings - replace with your actual data
  const siteSettings: SiteSettings = {
    socialMedia: {
      instagram: "https://instagram.com/southside",
      facebook: "https://facebook.com/southside",
      youtube: "https://youtube.com/southside",
      whatsapp: "https://wa.me/1234567890",
    },
    contactInfo: {
      email: "hello@southside.com",
      phone: "+254 123 456 789",
      address: "Diani Beach, Kenya"
    }
  }

  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement newsletter signup API call
    setIsSubscribed(true)
    setEmail('')
    setTimeout(() => setIsSubscribed(false), 3000)
  }

  const socialLinks = siteSettings?.socialMedia || {}
  const contactInfo = siteSettings?.contactInfo || {}

  return (
    <footer className="bg-[var(--sand-beige)] border-t border-[var(--ocean-blue)]/10">
      {/* Newsletter Lead Magnet - 2025 Best Practice */}
      <div className="bg-gradient-to-r from-[var(--ocean-blue)] to-[var(--deep-terracotta)] py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h3 className="text-2xl font-bold mb-2">Join the Southside Family</h3>
            <p className="text-white/90 mb-6">Get exclusive access to new drops, beach style guides, and 15% off your first order</p>
            
            {!isSubscribed ? (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
                  required
                />
                <button
                  type="submit"
                  className="bg-white text-[var(--ocean-blue)] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
                >
                  Subscribe <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <div className="bg-white/20 rounded-lg p-4 max-w-md mx-auto">
                <p className="font-semibold">🎉 Welcome to the family! Check your email for your discount code.</p>
              </div>
            )}
            
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Shop Links - Prioritized Navigation */}
            <div>
              <h4 className="text-[var(--ocean-blue)] font-semibold mb-4">Shop</h4>
              <ul className="space-y-2">
                <li><Link href="/men" className="text-gray-600 hover:text-[var(--deep-terracotta)] transition-colors">Men</Link></li>
                <li><Link href="/women" className="text-gray-600 hover:text-[var(--deep-terracotta)] transition-colors">Women</Link></li>
                <li><Link href="/accessories" className="text-gray-600 hover:text-[var(--deep-terracotta)] transition-colors">Accessories</Link></li>
                <li><Link href="/shop" className="text-gray-600 hover:text-[var(--deep-terracotta)] transition-colors">All Products</Link></li>
              </ul>
            </div>

            {/* Customer Care */}
            <div>
              <h4 className="text-[var(--ocean-blue)] font-semibold mb-4">Customer Care</h4>
              <ul className="space-y-2">
                <li><Link href="/contact" className="text-gray-600 hover:text-[var(--deep-terracotta)] transition-colors">Contact Us</Link></li>
                <li><Link href="/shipping" className="text-gray-600 hover:text-[var(--deep-terracotta)] transition-colors">Shipping & Returns</Link></li>
                <li><Link href="/size-guide" className="text-gray-600 hover:text-[var(--deep-terracotta)] transition-colors">Size Guide</Link></li>
                <li><Link href="/faq" className="text-gray-600 hover:text-[var(--deep-terracotta)] transition-colors">FAQ</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-[var(--ocean-blue)] font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-600 hover:text-[var(--deep-terracotta)] transition-colors">About Us</Link></li>
                <li><Link href="/our-story" className="text-gray-600 hover:text-[var(--deep-terracotta)] transition-colors">Our Story</Link></li>
                <li><Link href="/why-choose-southside" className="text-gray-600 hover:text-[var(--deep-terracotta)] transition-colors">Why Choose Southside</Link></li>
                <li><Link href="/careers" className="text-gray-600 hover:text-[var(--deep-terracotta)] transition-colors">Careers</Link></li>
                <li><Link href="/sustainability" className="text-gray-600 hover:text-[var(--deep-terracotta)] transition-colors">Sustainability</Link></li>
              </ul>
            </div>

            {/* Connect & Contact */}
            <div>
              <h4 className="text-[var(--ocean-blue)] font-semibold mb-4">Connect</h4>
              
              {/* Enhanced Social Media - 2025 Best Practice */}
              <div className="flex flex-wrap gap-3 mb-4">
                {socialLinks.instagram && (
                  <Link 
                    href={socialLinks.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-2 rounded-lg hover:scale-105 transition-transform"
                    aria-label="Follow us on Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </Link>
                )}
                {socialLinks.facebook && (
                  <Link 
                    href={socialLinks.facebook} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white p-2 rounded-lg hover:scale-105 transition-transform"
                    aria-label="Follow us on Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </Link>
                )}
                {socialLinks.youtube && (
                  <Link 
                    href={socialLinks.youtube} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-red-600 text-white p-2 rounded-lg hover:scale-105 transition-transform"
                    aria-label="Subscribe to our YouTube channel"
                  >
                    <Youtube className="w-5 h-5" />
                  </Link>
                )}
                {socialLinks.whatsapp && (
                  <Link 
                    href={socialLinks.whatsapp} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white p-2 rounded-lg hover:scale-105 transition-transform"
                    aria-label="Chat with us on WhatsApp"
                  >
                    <MessageCircle className="w-5 h-5" />
                  </Link>
                )}
              </div>

              {/* Contact Info */}
              <div className="space-y-2 text-sm text-gray-600">
                {contactInfo.phone && (
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>{contactInfo.phone}</span>
                  </div>
                )}
                {contactInfo.email && (
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span>{contactInfo.email}</span>
                  </div>
                )}
                {contactInfo.address && (
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{contactInfo.address}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Trust Signals & Payment Methods - 2025 Best Practice */}
          <div className="border-t border-gray-200 mt-8 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
              
              {/* Trust Badges */}
              <div className="flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-green-600" />
                  <span>Secure Checkout</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-blue-600" />
                  <span>Free Shipping Over $75</span>
                </div>
                <div className="flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-purple-600" />
                  <span>Easy Returns</span>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600">We Accept:</span>
                <div className="flex items-center gap-2">
                  <div className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-bold">VISA</div>
                  <div className="bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">MC</div>
                  <div className="bg-green-600 text-white px-2 py-1 rounded text-xs font-bold">MPESA</div>
                </div>
              </div>
            </div>
          </div>

          {/* Legal & Copyright */}
          <div className="border-t border-gray-200 mt-6 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-4">
                <div className="text-sm text-gray-600">
                  <p>&copy; {new Date().getFullYear()} Southside Clothing Diani. All rights reserved.</p>
                </div>
                <ThemeToggle />
              </div>
              <div className="flex flex-wrap gap-4 text-sm">
                <Link href="/privacy" className="text-gray-600 hover:text-[var(--deep-terracotta)] transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="text-gray-600 hover:text-[var(--deep-terracotta)] transition-colors">Terms of Service</Link>
                <Link href="/cookies" className="text-gray-600 hover:text-[var(--deep-terracotta)] transition-colors">Cookie Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
