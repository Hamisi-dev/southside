// Footer component for Southside Clothing Diani
// Clean, brand-focused footer design
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Instagram, Facebook, Youtube, Twitter, MessageCircle, Mail, Phone, MapPin, Shield, CreditCard, Truck, ArrowRight } from 'lucide-react'

interface SocialLinks {
  instagram?: string
  facebook?: string
  tiktok?: string
  youtube?: string
  twitter?: string
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
      instagram: "https://www.instagram.com/southside_diani/",
      facebook: "https://www.facebook.com/southsidediani/",
      youtube: "https://www.youtube.com/@SouthsideClothing",
      twitter: "https://x.com/Southsidediani",
      whatsapp: "https://wa.me/1234567890",
    },
    contactInfo: {
      email: "southsidediani@gmail.com",
      phone: "+254 791921019",
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
    <footer className="bg-white border-t border-gray-100">
      {/* Brand Newsletter Section */}
      <div className="bg-gradient-to-r from-blue-900 to-orange-800 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Join the Southside Family</h2>
            <p className="text-xl text-white/90 mb-8">Discover the latest beach fashion from Diani. Get exclusive access to new collections and special offers.</p>
            
            {!isSubscribed ? (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30 text-lg"
                  required
                />
                <button
                  type="submit"
                  className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2 text-lg shadow-lg hover:shadow-xl"
                >
                  Subscribe <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            ) : (
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 max-w-lg mx-auto border border-white/30">
                <p className="text-xl font-semibold">🎉 Welcome to the Southside family! Check your email for exclusive offers.</p>
              </div>
            )}
            
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            
            {/* Brand & About */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SOUTHSIDE</h3>
                <p className="text-gray-600 leading-relaxed">
                  Discover authentic beach fashion from the heart of Diani, Kenya. 
                  We create timeless pieces that capture the spirit of coastal living.
                </p>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-600">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <Link 
                    href={`tel:${contactInfo.phone}`}
                    className="hover:text-blue-600 transition-colors font-medium"
                  >
                    {contactInfo.phone}
                  </Link>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <Link 
                    href={`mailto:${contactInfo.email}`}
                    className="hover:text-blue-600 transition-colors font-medium"
                  >
                    {contactInfo.email}
                  </Link>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span>{contactInfo.address}</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><Link href="/categories" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Shop All</Link></li>
                <li><Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">About Us</Link></li>
                <li><Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Contact</Link></li>
                <li><Link href="/shipping" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Shipping Info</Link></li>
                <li><Link href="/returns" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Returns</Link></li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-6">Follow Us</h4>
              
              {/* Social Media Icons */}
              <div className="flex gap-4 mb-6">
                {socialLinks.instagram && (
                  <Link 
                    href={socialLinks.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gradient-to-br from-purple-600 to-pink-500 text-white p-3 rounded-full hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                    aria-label="Follow us on Instagram"
                  >
                    <Instagram className="w-6 h-6" />
                  </Link>
                )}
                {socialLinks.facebook && (
                  <Link 
                    href={socialLinks.facebook} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white p-3 rounded-full hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                    aria-label="Follow us on Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </Link>
                )}
                {socialLinks.twitter && (
                  <Link 
                    href={socialLinks.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-black text-white p-2 rounded-lg hover:scale-105 transition-transform"
                    aria-label="Follow us on Twitter/X"
                  >
                    <Twitter className="w-5 h-5" />
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
                    <Link 
                      href={`tel:${contactInfo.phone}`}
                      className="hover:text-[var(--deep-terracotta)] transition-colors cursor-pointer"
                    >
                      {contactInfo.phone}
                    </Link>
                  </div>
                )}
                {contactInfo.email && (
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <Link 
                      href={`mailto:${contactInfo.email}`}
                      className="hover:text-[var(--deep-terracotta)] transition-colors cursor-pointer"
                    >
                      {contactInfo.email}
                    </Link>
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
