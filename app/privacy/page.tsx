import { ShieldCheck, Lock, User, CreditCard, Mail } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-orange-800 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <ShieldCheck className="w-10 h-10" />
            <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
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
              At Southside Clothing Diani, we are committed to protecting your privacy. This Privacy Policy explains how we collect, 
              use, disclose, and safeguard your information when you visit our website or make a purchase from us.
            </p>

            <div className="space-y-12">
              {/* Information We Collect */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <User className="w-6 h-6 text-blue-600" />
                  1. Information We Collect
                </h2>
                <div className="prose prose-blue text-gray-600 space-y-4">
                  <p>We collect several types of information from and about users of our website, including:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Personal Information:</strong> Name, email address, phone number, shipping/billing address, 
                      payment information, and other similar contact data.
                    </li>
                    <li>
                      <strong>Order Information:</strong> Details about products you purchase, shipping details, and 
                      transaction history.
                    </li>
                    <li>
                      <strong>Technical Data:</strong> IP address, browser type, operating system, referring URLs, 
                      device information, and other technology on the devices you use to access our website.
                    </li>
                    <li>
                      <strong>Usage Data:</strong> Information about how you use our website, products, and services.
                    </li>
                  </ul>
                </div>
              </section>

              {/* How We Use Your Information */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Lock className="w-6 h-6 text-blue-600" />
                  2. How We Use Your Information
                </h2>
                <div className="prose prose-blue text-gray-600 space-y-4">
                  <p>We may use the information we collect for various purposes, including to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Process and fulfill your orders and transactions</li>
                    <li>Communicate with you about your orders, products, and services</li>
                    <li>Provide customer support and respond to your inquiries</li>
                    <li>Improve our website, products, and services</li>
                    <li>Send you marketing communications (with your consent)</li>
                    <li>Prevent fraud and enhance the security of our website</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </div>
              </section>

              {/* Data Security */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-6 h-6 text-blue-600" />
                  3. Data Security
                </h2>
                <div className="prose prose-blue text-gray-600 space-y-4">
                  <p>
                    We implement appropriate technical and organizational measures to protect the security of your personal 
                    information. However, no method of transmission over the Internet or electronic storage is 100% 
                    secure, and we cannot guarantee absolute security.
                  </p>
                </div>
              </section>

              {/* Payment Information */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <CreditCard className="w-6 h-6 text-blue-600" />
                  4. Payment Information
                </h2>
                <div className="prose prose-blue text-gray-600 space-y-4">
                  <p>
                    All payment transactions are processed through secure payment processors. We do not store your 
                    payment card details on our servers. All payment information is encrypted during transmission 
                    using SSL technology.
                  </p>
                </div>
              </section>

              {/* Your Rights */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <User className="w-6 h-6 text-blue-600" />
                  5. Your Rights
                </h2>
                <div className="prose prose-blue text-gray-600 space-y-4">
                  <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>The right to access, update, or delete your information</li>
                    <li>The right to rectification of inaccurate information</li>
                    <li>The right to object to or restrict processing of your information</li>
                    <li>The right to data portability</li>
                    <li>The right to withdraw consent</li>
                  </ul>
                  <p>
                    To exercise any of these rights, please contact us using the information provided in the 
                    &quot;Contact Us&quot; section below.
                  </p>
                </div>
              </section>

              {/* Changes to This Policy */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Changes to This Policy</h2>
                <div className="prose prose-blue text-gray-600">
                  <p>
                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting 
                    the new Privacy Policy on this page and updating the &quot;Last updated&quot; date at the top of this policy.
                  </p>
                </div>
              </section>

              {/* Contact Us */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Mail className="w-6 h-6 text-blue-600" />
                  7. Contact Us
                </h2>
                <div className="prose prose-blue text-gray-600 space-y-4">
                  <p>
                    If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="font-medium">Southside Clothing Diani</p>
                    <p>Diani Beach, Kenya</p>
                    <p>Email: <Link href="mailto:southsidediani@gmail.com" className="text-blue-600 hover:underline">southsidediani@gmail.com</Link></p>
                    <p>Phone: <Link href="tel:+254791921019" className="text-blue-600 hover:underline">+254 791 921 019</Link></p>
                  </div>
                </div>
              </section>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Privacy Matters</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We&apos;re committed to protecting your personal information and being transparent about how we use it. 
              If you have any concerns or questions about our privacy practices, please don&apos;t hesitate to reach out.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-gradient-to-r from-blue-900 to-orange-800 text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
