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
  metadataBase: new URL('https://leveledapp.com'),
  title: {
    default: 'LeveledApp - Software Development Services',
    template: '%s | LeveledApp'
  },
  description: 'LeveledApp is a forward-thinking technology company providing top-tier web development, mobile app development, offshore team building, and product discovery services for startups and businesses.',
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
    'Quality Assurance'
  ],
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
    url: 'https://leveledapp.com',
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
    images: ['/images/twitter-image.jpg'],
    creator: '@leveledapp'
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
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "LeveledApp",
              "url": "https://leveledapp.com",
              "logo": "https://leveledapp.com/images/logo.png",
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
              },
              "offers": {
                "@type": "AggregateOffer",
                "offers": [
                  {
                    "@type": "Offer",
                    "name": "Web Development",
                    "description": "Expert web development services"
                  },
                  {
                    "@type": "Offer",
                    "name": "Mobile Development",
                    "description": "Professional mobile app development"
                  },
                  {
                    "@type": "Offer",
                    "name": "Nearshore Development Team",
                    "description": "Dedicated nearshore development teams"
                  },
                  {
                    "@type": "Offer",
                    "name": "Product Discovery",
                    "description": "Product discovery and prototyping services"
                  }
                ]
              }
            })
          }}
        />
      </body>
    </html>
  );
}
