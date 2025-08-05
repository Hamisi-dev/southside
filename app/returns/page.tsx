import { RefreshCw, Package, Shield, X, Check, Clock, Truck } from 'lucide-react';
import Link from 'next/link';

export default function ReturnsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-orange-800 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <RefreshCw className="w-10 h-10" />
            <h1 className="text-4xl md:text-5xl font-bold">Returns & Exchanges</h1>
          </div>
          <p className="text-xl text-white/90 max-w-3xl">
            We want you to love your Southside purchase. If you&apos;re not completely satisfied, we&apos;re here to help.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Return Policy Summary */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Return Policy</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-blue-50 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-blue-600" />
                  <h3 className="text-lg font-semibold">Return Window</h3>
                </div>
                <p className="text-gray-600">
                  You have <span className="font-semibold">14 days</span> from the date of delivery to initiate a return for a full refund or exchange.
                </p>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <Package className="w-6 h-6 text-orange-600" />
                  <h3 className="text-lg font-semibold">Condition of Items</h3>
                </div>
                <p className="text-gray-600">
                  Items must be unworn, unwashed, and in original condition with all tags attached.
                </p>
              </div>
            </div>
            
            <div className="bg-green-50 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-green-600" />
                <h3 className="text-lg font-semibold">Refund Method</h3>
              </div>
              <p className="text-gray-600 mb-2">
                Refunds will be issued to the original payment method within 5-7 business days after we receive and process your return.
              </p>
              <p className="text-sm text-gray-500">
                Please note that shipping fees are non-refundable unless the return is due to our error.
              </p>
            </div>
          </div>

          {/* How to Return */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Return an Item</h2>
            
            <div className="space-y-8">
              {[
                {
                  step: '1',
                  title: 'Request a Return',
                  description: 'Contact our customer service at southsidediani@gmail.com with your order number and the items you wish to return or exchange.',
                  icon: <RefreshCw className="w-6 h-6 text-blue-600" />
                },
                {
                  step: '2',
                  title: 'Package Your Items',
                  description: 'Securely pack the items in their original packaging with all tags attached. Include a copy of your order confirmation.',
                  icon: <Package className="w-6 h-6 text-orange-600" />
                },
                {
                  step: '3',
                  title: 'Ship Your Return',
                  description: 'Send your return to the address provided in your return authorization email. We recommend using a trackable shipping service.',
                  icon: <Truck className="w-6 h-6 text-green-600" />
                },
                {
                  step: '4',
                  title: 'Receive Your Refund',
                  description: 'Once we receive and process your return, we&apos;ll issue your refund or ship your exchange within 3-5 business days.',
                  icon: <Check className="w-6 h-6 text-green-600" />
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Non-Returnable Items */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Non-Returnable Items</h2>
            
            <div className="bg-red-50 p-6 rounded-xl">
              <div className="flex items-start gap-4">
                <X className="w-6 h-6 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">The following items cannot be returned or exchanged:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Items marked as &quot;Final Sale&quot; or &quot;Non-Returnable&quot;</li>
                    <li>• Underwear, swimwear, and other intimate apparel (for hygiene reasons)</li>
                    <li>• Items that have been worn, washed, or altered</li>
                    <li>• Items damaged due to misuse or improper care</li>
                    <li>• Items without original tags or packaging</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Exchanges */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Exchanges</h2>
            
            <div className="bg-green-50 p-6 rounded-xl">
              <div className="flex items-start gap-4">
                <RefreshCw className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-700 mb-4">
                    We&apos;re happy to exchange items for a different size or color, subject to availability. Please note:
                  </p>
                  <ul className="space-y-2 text-gray-700 mb-4">
                    <li>• Exchanges are only available for items of equal or greater value</li>
                    <li>• The item must be in its original condition with all tags attached</li>
                    <li>• You are responsible for return shipping costs unless the exchange is due to our error</li>
                  </ul>
                  <p className="text-gray-700">
                    To request an exchange, please contact us at <a href="mailto:southsidediani@gmail.com" className="text-blue-600 hover:underline">southsidediani@gmail.com</a> with your order number and exchange request.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-900 to-orange-800 rounded-2xl p-8 text-center text-white">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold mb-4">Need Help With Your Return?</h2>
              <p className="text-white/90 mb-6">
                Our customer service team is here to assist you with any questions about returns, exchanges, or your order.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="inline-block bg-white text-blue-900 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
                >
                  Contact Us
                </Link>
                <Link 
                  href="/shipping" 
                  className="inline-block border-2 border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white/10 transition-colors"
                >
                  View Shipping Info
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
