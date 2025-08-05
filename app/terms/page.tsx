import { FileText, ShoppingBag, CreditCard, Truck, RefreshCw, Shield, AlertTriangle } from 'lucide-react';
import Link from 'next/link';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-orange-800 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <FileText className="w-10 h-10" />
            <h1 className="text-4xl md:text-5xl font-bold">Terms of Service</h1>
          </div>
          <p className="text-xl text-white/90 max-w-3xl">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <p className="text-gray-600 mb-8">
              Welcome to Southside Clothing Diani. These Terms govern your use of our website and services. By accessing our site, you agree to these Terms and our Privacy Policy.
            </p>

            <div className="space-y-12">
              {/* Key Sections */}
              {[
                {
                  title: 'Account Registration',
                  icon: <User className="w-6 h-6 text-blue-600" />,
                  content: (
                    <>
                      <p>To access certain features, you may need to create an account. Provide accurate information and keep it updated.</p>
                      <p>You're responsible for account security and all activities under your account.</p>
                    </>
                  )
                },
                {
                  title: 'Products and Pricing',
                  icon: <ShoppingBag className="w-6 h-6 text-blue-600" />,
                  content: (
                    <>
                      <p>We strive for accuracy but don't guarantee product information is error-free. Prices are in KES and subject to change.</p>
                      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
                        <p className="text-sm text-yellow-700">
                          All prices are in Kenyan Shillings (KES) and subject to change without notice.
                        </p>
                      </div>
                    </>
                  )
                },
                {
                  title: 'Orders and Payment',
                  icon: <CreditCard className="w-6 h-6 text-blue-600" />,
                  content: (
                    <>
                      <p>Orders are offers to purchase subject to our acceptance. We accept major credit cards and mobile money.</p>
                      <p>Payments are processed securely; we don't store your payment details.</p>
                    </>
                  )
                },
                {
                  title: 'Shipping and Returns',
                  icon: <Truck className="w-6 h-6 text-blue-600" />,
                  content: (
                    <>
                      <p>Orders ship within 1-2 business days. Delivery times vary by location.</p>
                      <p>Returns accepted within 14 days for unworn, tagged items. See our <Link href="/returns" className="text-blue-600 hover:underline">Returns Policy</Link> for details.</p>
                    </>
                  )
                },
                {
                  title: 'Intellectual Property',
                  icon: <Shield className="w-6 h-6 text-blue-600" />,
                  content: (
                    <p>All website content is our property and protected by intellectual property laws. Unauthorized use is prohibited.</p>
                  )
                },
                {
                  title: 'Governing Law',
                  content: (
                    <p>These Terms are governed by Kenyan law. Any disputes will be resolved in Kenyan courts.</p>
                  )
                },
                {
                  title: 'Changes to Terms',
                  content: (
                    <p>We may update these Terms. Continued use after changes means you accept the new Terms.</p>
                  )
                },
                {
                  title: 'Contact Us',
                  content: (
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <p className="font-medium">Southside Clothing Diani</p>
                      <p>Diani Beach, Kenya</p>
                      <p>Email: <Link href="mailto:southsidediani@gmail.com" className="text-blue-600 hover:underline">southsidediani@gmail.com</Link></p>
                      <p>Phone: <Link href="tel:+254791921019" className="text-blue-600 hover:underline">+254 791 921 019</Link></p>
                    </div>
                  )
                }
              ].map((section, index) => (
                <section key={index}>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    {section.icon || <FileText className="w-6 h-6 text-blue-600" />}
                    {index + 1}. {section.title}
                  </h2>
                  <div className="prose prose-blue text-gray-600 space-y-4">
                    {section.content}
                  </div>
                </section>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Thank You for Shopping with Us</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We appreciate your business and are committed to providing you with quality products and excellent service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-block bg-gradient-to-r from-blue-900 to-orange-800 text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
              >
                Contact Us
              </Link>
              <Link 
                href="/privacy" 
                className="inline-block border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
