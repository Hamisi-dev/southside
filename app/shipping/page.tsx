import { Truck, Clock, Package } from 'lucide-react';
import Link from 'next/link';

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-orange-800 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <Truck className="w-10 h-10" />
            <h1 className="text-4xl md:text-5xl font-bold">Shipping Information</h1>
          </div>
          <p className="text-xl text-white/90 max-w-3xl">
            Fast, reliable shipping across Kenya and beyond. Get your Southside favorites delivered to your doorstep.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Shipping Options */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Shipping Options & Rates</h2>
            
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row gap-6 p-6 bg-blue-50 rounded-xl">
                <div className="bg-blue-100 p-4 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <Truck className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Standard Shipping</h3>
                  <p className="text-gray-600 mb-3">
                    Delivery within 3-5 business days to major cities in Kenya. Rural areas may take 5-7 business days.
                  </p>
                  <p className="font-medium text-gray-900">
                    KES 300 - KES 800 (Free on orders over KES 5,000)
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 p-6 bg-orange-50 rounded-xl">
                <div className="bg-orange-100 p-4 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Express Shipping</h3>
                  <p className="text-gray-600 mb-3">
                    Get your order delivered within 1-2 business days to major cities in Kenya.
                  </p>
                  <p className="font-medium text-gray-900">
                    KES 800 - KES 1,500
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 p-6 bg-green-50 rounded-xl">
                <div className="bg-green-100 p-4 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <Package className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">International Shipping</h3>
                  <p className="text-gray-600 mb-3">
                    We ship worldwide! Delivery times and rates vary by destination. Contact us for a quote.
                  </p>
                  <p className="font-medium text-gray-900">
                    Starting from $25 USD
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How It Works</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  number: '1',
                  title: 'Place Your Order',
                  description: 'Browse our collection and complete your purchase with secure checkout.'
                },
                {
                  number: '2',
                  title: 'Order Processing',
                  description: 'We carefully prepare your items for shipping within 1-2 business days.'
                },
                {
                  number: '3',
                  title: 'On Its Way',
                  description: 'Track your order with the shipping confirmation sent to your email.'
                }
              ].map((step, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl">
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-lg mb-4">
                    {step.number}
                  </div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              {[
                {
                  question: 'How can I track my order?',
                  answer: 'Once your order has been shipped, you will receive a tracking number via email. You can use this number to track your package on our delivery partner&apos;s website.'
                },
                {
                  question: 'Do you offer free shipping?',
                  answer: 'Yes! We offer free standard shipping on all orders over KES 5,000 within Kenya.'
                },
                {
                  question: 'What if I&apos;m not home when my order arrives?',
                  answer: 'Our delivery partners will attempt to deliver your package. If you&apos;re not available, they will leave a notice with instructions for rescheduling or picking up your package.'
                },
                {
                  question: 'Do you ship internationally?',
                  answer: 'Yes, we ship worldwide! International shipping rates and delivery times vary by destination. Please contact us for specific rates to your country.'
                },
                {
                  question: 'How long does processing take before my order ships?',
                  answer: 'We process and ship orders within 1-2 business days. You will receive a shipping confirmation email with tracking information once your order is on its way.'
                }
              ].map((faq, index) => (
                <div key={index} className="border-b border-gray-100 pb-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-900 to-orange-800 rounded-2xl p-8 text-center text-white">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold mb-4">Need Help With Your Order?</h2>
              <p className="text-white/90 mb-6">
                Our customer service team is here to help with any questions about shipping, tracking, or your order status.
              </p>
              <Link 
                href="/contact" 
                className="inline-block bg-white text-blue-900 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
