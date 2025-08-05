import { Cookie, Shield, Settings, User } from 'lucide-react';
import Link from 'next/link';

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-orange-800 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <Cookie className="w-10 h-10" />
            <h1 className="text-4xl md:text-5xl font-bold">Cookie Policy</h1>
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
              This Cookie Policy explains how Southside Clothing Diani ("we," "us," or "our") uses cookies and similar 
              technologies when you visit our website. By using our website, you consent to our use of cookies in 
              accordance with this policy.
            </p>

            <div className="space-y-12">
              {/* What Are Cookies */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. What Are Cookies?</h2>
                <div className="prose prose-blue text-gray-600 space-y-4">
                  <p>
                    Cookies are small text files that are stored on your device when you visit a website. They are 
                    widely used to make websites work more efficiently, as well as to provide information to the 
                    website owners.
                  </p>
                  <p>
                    We use both session cookies (which expire when you close your browser) and persistent cookies 
                    (which stay on your device for a set period of time or until you delete them).
                  </p>
                </div>
              </section>

              {/* Types of Cookies We Use */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Settings className="w-6 h-6 text-blue-600" />
                  2. Types of Cookies We Use
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      title: 'Essential Cookies',
                      description: 'These are necessary for the website to function and cannot be switched off. They are usually only set in response to actions made by you, such as setting your privacy preferences, logging in, or filling in forms.',
                      example: 'Authentication cookies, load balancing session cookies'
                    },
                    {
                      title: 'Performance and Analytics Cookies',
                      description: 'These allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us know which pages are the most and least popular and see how visitors move around the site.',
                      example: 'Google Analytics, Hotjar'
                    },
                    {
                      title: 'Functional Cookies',
                      description: 'These enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.',
                      example: 'Language preference, region selection'
                    },
                    {
                      title: 'Targeting/Advertising Cookies',
                      description: 'These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites.',
                      example: 'Facebook Pixel, Google Ads'
                    }
                  ].map((cookie, index) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-xl">
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">{cookie.title}</h3>
                      <p className="text-gray-600 mb-2">{cookie.description}</p>
                      <p className="text-sm text-gray-500">Example: {cookie.example}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Managing Cookies */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <User className="w-6 h-6 text-blue-600" />
                  3. Managing Cookies
                </h2>
                <div className="prose prose-blue text-gray-600 space-y-4">
                  <p>
                    You can control and/or delete cookies as you wish. You can delete all cookies that are already on 
                    your device and you can set most browsers to prevent them from being placed.
                  </p>
                  <p>
                    To manage your cookie preferences, you can:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Adjust your browser settings to refuse all or some cookies</li>
                    <li>Use our cookie consent banner to manage your preferences</li>
                    <li>Visit <Link href="https://www.aboutcookies.org/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">aboutcookies.org</Link> for comprehensive information on how to manage cookies</li>
                  </ul>
                  <p>
                    Please note that if you disable or refuse cookies, some parts of our website may become inaccessible or not function properly.
                  </p>
                </div>
              </section>

              {/* Third-Party Cookies */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Third-Party Cookies</h2>
                <div className="prose prose-blue text-gray-600 space-y-4">
                  <p>
                    We may use various third-party services that may also set cookies on your device when you visit our 
                    website. These third-party service providers include analytics companies and advertising networks.
                  </p>
                  <p>
                    We do not control these third-party cookies and they are not covered by this policy. We encourage 
                    you to review the privacy and cookie policies of these third-party services for more information 
                    about their use of cookies.
                  </p>
                </div>
              </section>

              {/* Changes to This Policy */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Changes to This Policy</h2>
                <div className="prose prose-blue text-gray-600">
                  <p>
                    We may update this Cookie Policy from time to time to reflect changes in our practices or for other 
                    operational, legal, or regulatory reasons. We will notify you of any material changes by posting 
                    the updated policy on our website and updating the "Last updated" date at the top of this policy.
                  </p>
                </div>
              </section>

              {/* Contact Us */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Contact Us</h2>
                <div className="prose prose-blue text-gray-600 space-y-4">
                  <p>
                    If you have any questions about our use of cookies or this Cookie Policy, please contact us at:
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
              We're committed to being transparent about how we use cookies and protecting your privacy online. 
              If you have any questions or concerns, please don't hesitate to reach out.
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
