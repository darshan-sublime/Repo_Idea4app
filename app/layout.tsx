import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans, Playfair_Display } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import AdgentekAd from './components/AdgentekAd'
import Idea4appBranding from './components/Idea4appBranding'
import { Phone, Mail, MapPin, Clock, Menu, ArrowRight, Heart, Sparkles, Globe, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Ember & Oak Events — Wedding & Event Planner in Savannah, GA',
  description: 'Full-service wedding and event planning in Savannah, Georgia. Luxury design and stress-free coordination.',
  openGraph: {
    title: 'Ember & Oak Events — Wedding & Event Planner in Savannah, GA',
    description: 'Full-service wedding and event planning in Savannah, Georgia. Luxury design and stress-free coordination.',
    siteName: 'Ember & Oak Events',
    url: 'emberoakevents.com',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ember & Oak Events — Wedding & Event Planner in Savannah, GA',
    description: 'Full-service wedding and event planning in Savannah, Georgia. Luxury design and stress-free coordination.',
  },
}

const navItems = [
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Packages', href: '/packages' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Availability', href: '/availability' },
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLdWebsite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Ember & Oak Events',
    url: 'emberoakevents.com',
    description: 'Unforgettable Events, Effortlessly Planned',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['.geo-paragraph', 'h1'],
    },
  }

  const jsonLdLocalBusiness = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Ember & Oak Events',
    description: 'Unforgettable Events, Effortlessly Planned',
    url: 'emberoakevents.com',
    telephone: '(912) 555-0188',
    email: 'hello@emberoakevents.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '412 Bull St',
      addressLocality: 'Savannah',
      addressRegion: 'GA',
      postalCode: '',
    },
    openingHoursSpecification: {},
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['.geo-paragraph', 'h1'],
    },
  }

  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${playfairDisplay.variable}`}>
      <head>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
        />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocalBusiness) }}
        />
      </head>
      <body className="font-sans antialiased bg-background text-foreground min-h-screen flex flex-col">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 md:h-20">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2 group">
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <Sparkles className="w-4 h-4 text-primary" />
                </div>
                <span className="font-serif font-bold text-xl tracking-tight text-foreground">
                  {'Ember & Oak Events'}
                </span>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-1 lg:gap-2">
                {navItems.slice(0, -1).map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="relative px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 group"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary rounded-full group-hover:w-3/4 transition-all duration-300" />
                  </Link>
                ))}
                <Link href="/availability">
                  <Button
                    size="sm"
                    className="ml-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-5 font-medium shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <span>Check Availability</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </Button>
                </Link>
              </nav>

              {/* Mobile Navigation — CSS-only with details/summary */}
              <details className="md:hidden group relative">
                <summary className="list-none cursor-pointer p-2 rounded-lg hover:bg-muted/50 transition-colors duration-200">
                  <Menu className="w-6 h-6 text-foreground" />
                </summary>
                <div className="fixed inset-0 top-16 bg-background/98 backdrop-blur-2xl z-50 animate-fade-in">
                  <nav className="flex flex-col items-center justify-center gap-2 pt-12 px-6">
                    {navItems.map((item, index) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="w-full text-center py-4 text-lg font-medium text-foreground hover:text-primary transition-colors duration-300 border-b border-border/30 animate-slide-up"
                        style={{ animationDelay: `${index * 60}ms` }}
                      >
                        {item.label}
                      </Link>
                    ))}
                    <div className="pt-6 w-full animate-slide-up" style={{ animationDelay: '420ms' }}>
                      <Link href="/availability" className="block w-full">
                        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full py-6 text-base font-medium shadow-lg">
                          <span>Check Availability</span>
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                    <div className="pt-6 flex flex-col items-center gap-3 text-sm text-muted-foreground animate-slide-up" style={{ animationDelay: '480ms' }}>
                      <a href="tel:(912) 555-0188" className="flex items-center gap-2 hover:text-primary transition-colors">
                        <Phone className="w-4 h-4" />
                        {'(912) 555-0188'}
                      </a>
                      <a href="mailto:hello@emberoakevents.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                        <Mail className="w-4 h-4" />
                        {'hello@emberoakevents.com'}
                      </a>
                    </div>
                  </nav>
                </div>
              </details>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-muted/30 border-t border-border/50 pt-16 pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
              {/* Column 1: Brand */}
              <div className="lg:col-span-1 animate-fade-in">
                <Link href="/" className="flex items-center gap-2 mb-4">
                  <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-primary" />
                  </div>
                  <span className="font-serif font-bold text-xl tracking-tight text-foreground">
                    {'Ember & Oak Events'}
                  </span>
                </Link>
                <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">
                  {'Unforgettable Events, Effortlessly Planned'}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  Creating unforgettable moments with meticulous planning, exquisite design, and heartfelt attention to every detail. Your vision, beautifully realized.
                </p>
                {/* Social placeholders */}
                <div className="flex items-center gap-3">
                  {['Instagram', 'Pinterest', 'Facebook'].map((social) => (
                    <div
                      key={social}
                      className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-all duration-300 cursor-pointer"
                    >
                      <Globe className="w-4 h-4 text-muted-foreground" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Column 2: Quick Links */}
              <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
                <h3 className="font-serif font-bold text-base text-foreground mb-5">Quick Links</h3>
                <ul className="space-y-3">
                  {navItems.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-1.5 group"
                      >
                        <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-primary" />
                        <span>{item.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 3: Contact Info */}
              <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
                <h3 className="font-serif font-bold text-base text-foreground mb-5">Contact Us</h3>
                <address className="not-italic space-y-4">
                  <a
                    href="tel:(912) 555-0188"
                    className="flex items-start gap-3 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Phone className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <span className="pt-1">{'(912) 555-0188'}</span>
                  </a>
                  <a
                    href="mailto:hello@emberoakevents.com"
                    className="flex items-start gap-3 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Mail className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <span className="pt-1 break-all">{'hello@emberoakevents.com'}</span>
                  </a>
                  <div className="flex items-start gap-3 text-sm text-muted-foreground">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <span className="pt-1">{'412 Bull St, Savannah, GA'}</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-muted-foreground">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <span className="pt-1">{'Mon–Fri: 9:00 AM – 5:00 PM'}</span>
                  </div>
                </address>

                {/* Map */}
                <div className="mt-5 relative w-full h-[150px] overflow-hidden rounded-xl border border-border/50">
                  <iframe
                    width="100%"
                    height="100%"
                    style={{ border: 0, height: 'calc(100% + 40px)', width: '100%' }}
                    src="https://www.openstreetmap.org/export/embed.html?bbox=-81.1012%2C32.0709%2C-81.0812%2C32.0909&layer=mapnik&marker=32.0809%2C-81.0912"
                    loading="lazy"
                    title="Map showing location of Ember & Oak Events"
                  />
                </div>
              </div>

              {/* Column 4: Legal + CTA */}
              <div className="animate-fade-in" style={{ animationDelay: '300ms' }}>
                <h3 className="font-serif font-bold text-base text-foreground mb-5">Legal</h3>
                <ul className="space-y-3 mb-6">
                  <li>
                    <Link
                      href="/privacy"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-1.5"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-1.5"
                    >
                      Terms of Service
                    </Link>
                  </li>
                </ul>

                <Separator className="my-6 bg-border/50" />

                <div className="p-5 rounded-2xl bg-primary/5 border border-primary/10">
                  <div className="flex items-center gap-2 mb-2">
                    <Heart className="w-4 h-4 text-primary" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">Plan Your Event</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Ready to create something unforgettable? Let&apos;s start planning your dream event today.
                  </p>
                  <Link href="/availability">
                    <Button
                      size="sm"
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full font-medium shadow-sm"
                    >
                      Check Availability
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <Separator className="my-8 bg-border/50" />
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
              <p>
                &copy; {'2026'} {'Ember & Oak Events'}. All rights reserved.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="mailto:abuse@idea4app.com?subject=Report%20Site%20emberoakevents.com"
                  className="hover:text-primary transition-colors duration-300 flex items-center gap-1"
                >
                  <ExternalLink className="w-3 h-3" />
                  Report this site
                </a>
              </div>
            </div>
          </div>
        </footer>

        <Idea4appBranding />
        <AdgentekAd context="events" />
        <Script
          src="https://api.adgentek.ai/storage/v1/object/public/sdk/sdk.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
