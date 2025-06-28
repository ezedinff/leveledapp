import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Metadata } from "next";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.leveledapp.com'),
  title: {
    default: 'LeveledApp - Software Development Services',
    template: '%s | LeveledApp'
  },
  description: 'LeveledApp is a forward-thinking technology company providing top-tier web development, mobile app development, offshore team building, and product discovery services for startups and businesses.',
  manifest: '/manifest.json',
  themeColor: '#FFCD00',
  applicationName: 'LeveledApp',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'web development',
    'mobile development',
    'nearshore development',
    'product discovery',
    'software development',
    'startup solutions',
    'UI/UX design',
    'product management',
    'cybersecurity',
    'data management',
    'WebRTC solutions',
    'DevOps',
    'Quality Assurance',
    'affordable software development',
    'innovative tech solutions',
    'custom software development',
    'tech consulting'
  ],
  category: 'technology',
  authors: [{ name: 'LeveledApp' }],
  creator: 'LeveledApp',
  publisher: 'LeveledApp',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'LeveledApp - Software Development Services',
    description: 'Empowering startups with top-tier, affordable digital solutions. Expert web & mobile development, nearshore teams, and product discovery services.',
    url: 'https://www.leveledapp.com',
    siteName: 'LeveledApp',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'LeveledApp - Software Development Services'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LeveledApp - Software Development Services',
    description: 'Empowering startups with top-tier, affordable digital solutions. Expert web & mobile development, nearshore teams, and product discovery services.',
    creator: '@leveledapp',
    images: [{
      url: '/images/twitter-image.jpg',
      width: 1200,
      height: 600,
      alt: 'LeveledApp - Software Development Services'
    }]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'add-your-google-site-verification-here',
    yandex: 'add-your-yandex-verification-here',
    yahoo: 'add-your-yahoo-verification-here'
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" }
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
    other: [
      {
        rel: 'mask-icon',
        url: '/favicon.svg',
        color: '#FFCD00'
      }
    ]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${inter.className} bg-white dark:bg-black`}>
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        )}
        <Providers>
          <div className="bg-[#FCFCFC] dark:bg-black">
            <Header />
            {children}
            <Footer />
            <ScrollToTop />
          </div>
        </Providers>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "LeveledApp",
                "url": "https://www.leveledapp.com",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.leveledapp.com/images/logo.png",
                  "width": "512",
                  "height": "512"
                },
                "description": "LeveledApp is a forward-thinking technology company providing top-tier web development, mobile app development, offshore team building, and product discovery services.",
                "sameAs": [
                  "https://twitter.com/leveledapp",
                  "https://linkedin.com/company/leveledapp",
                  "https://github.com/leveledapp"
                ],
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "",
                  "contactType": "customer service",
                  "email": "contact@leveledapp.com",
                  "areaServed": "Worldwide"
                },
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "United States"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "LeveledApp",
                "url": "https://www.leveledapp.com",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://www.leveledapp.com/search?q={search_term_string}",
                  "query-input": "required name=search_term_string"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                "serviceType": "Software Development",
                "provider": {
                  "@type": "Organization",
                  "name": "LeveledApp"
                },
                "areaServed": "Worldwide",
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Software Development Services",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Web Development",
                        "description": "Expert web development services"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Mobile Development",
                        "description": "Professional mobile app development"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Product Discovery",
                        "description": "Product discovery and prototyping services"
                      }
                    }
                  ]
                }
              }
            ])
          }}
        />
      </body>
    </html>
  );
}
