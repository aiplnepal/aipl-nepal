import Link from "next/link";
import { AlertCircle } from "lucide-react";
import Image from "next/image";

export default function NotFound() {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">
          <header className="bg-white border-b border-gray-100 py-6 px-6">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              <Link href="/en" className="flex items-center" aria-label="AIPL Home">
                <Image src="/logo.png" alt="AIPL — Agricultural Investment Pvt. Ltd." width={200} height={56} className="h-10 w-auto object-contain" />
              </Link>
            </div>
          </header>
          
          <main className="flex-1 flex flex-col items-center justify-center p-6 bg-gray-50 text-center">
            <div className="bg-white p-10 rounded-2xl shadow-sm max-w-lg w-full border border-gray-100">
              <AlertCircle className="h-16 w-16 text-forest mx-auto mb-6" aria-hidden="true" />
              <h1 className="font-heading text-4xl font-bold text-gray-900 mb-4">404</h1>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Page Not Found / पृष्ठ फेला परेन</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We couldn't find the page you're looking for. It might have been moved or doesn't exist.<br/><br/>
                तपाईंले खोज्नुभएको पृष्ठ फेला पार्न सकेनौं। यो सारिएको हुन सक्छ वा अवस्थित छैन।
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/en" 
                  className="inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-semibold bg-forest text-white hover:bg-forest-dark transition-colors"
                >
                  Go to Homepage
                </Link>
                <Link 
                  href="/ne" 
                  className="inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-semibold border border-gray-200 text-gray-700 hover:border-forest hover:text-forest transition-colors"
                >
                  गृहपृष्ठमा जानुहोस्
                </Link>
              </div>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
