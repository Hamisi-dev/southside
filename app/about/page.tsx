import Link from 'next/link';

import { Instagram, Facebook, Youtube, Twitter } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-orange-800 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
          <p className="text-xl max-w-3xl">
            Join the Southside Family - Where beach fashion meets African heritage in the heart of Kenya&apos;s coast.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Welcome to Southside</h2>
            <div className="prose prose-lg text-gray-600 space-y-6">
              <p>
                Founded in the vibrant coastal town of Diani, Southside Clothing brings you authentic Kenyan beach fashion that combines comfort, style, and cultural heritage. 
                Our journey began with a simple vision: to create clothing that celebrates the beauty of Kenya coastline while supporting local artisans and communities.
              </p>
              <p>
                Each piece in our collection is thoughtfully designed to reflect the laid-back yet sophisticated spirit of Dian beach culture, using sustainable materials and traditional craftsmanship.
              </p>
            </div>
          </div>

          {/* Mission & Values */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To create sustainable, high-quality beachwear that celebrates Kenyan coastal culture while empowering local communities through ethical production and fair trade practices.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Sustainability & Ethical Production</li>
                <li>• Authentic Kenyan Design</li>
                <li>• Community Empowerment</li>
                <li>• Quality Craftsmanship</li>
                <li>• Customer Satisfaction</li>
              </ul>
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Meet the Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Sarah Mwangi',
                  role: 'Founder & Creative Director',
                  bio: 'With over 10 years in fashion design, Sarah brings Kenyan coastal aesthetics to life through her unique designs.'
                },
                {
                  name: 'James Omondi',
                  role: 'Head of Production',
                  bio: 'Ensuring every piece meets our high standards of quality and craftsmanship.'
                },
                {
                  name: 'Amina Hassan',
                  role: 'Community Relations',
                  bio: 'Building strong relationships with our local artisans and community partners.'
                }
              ].map((member, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="h-48 bg-gradient-to-r from-blue-100 to-orange-50"></div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-900">{member.name}</h4>
                    <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-900 to-orange-800 rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Join Our Journey</h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Follow us on social media to stay updated with our latest collections, behind-the-scenes content, and special offers. Discover the latest beach fashion from Diani. Get exclusive access to new collections and special offers.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="https://www.instagram.com/southside_diani/" target="_blank" className="bg-white text-blue-900 p-3 rounded-full hover:scale-110 transition-transform">
                <Instagram className="w-6 h-6" />
              </Link>
              <Link href="https://www.facebook.com/southsidediani/" target="_blank" className="bg-white text-blue-900 p-3 rounded-full hover:scale-110 transition-transform">
                <Facebook className="w-6 h-6" />
              </Link>
              <Link href="https://x.com/Southsidediani" target="_blank" className="bg-white text-blue-900 p-3 rounded-full hover:scale-110 transition-transform">
                <Twitter className="w-6 h-6" />
              </Link>
              <Link href="https://www.youtube.com/@SouthsideClothing" target="_blank" className="bg-white text-blue-900 p-3 rounded-full hover:scale-110 transition-transform">
                <Youtube className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
