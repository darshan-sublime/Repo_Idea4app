import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import AdgentekAd from './components/AdgentekAd';
import Idea4appBranding from './components/Idea4appBranding';
import { getBaseUrl } from '@/lib/utils';
import { Facebook, Instagram, Twitter, Linkedin, Youtube, MapPin, Phone, Mail, Menu, Sparkles, ChevronRight } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

export const viewport = { width: 'device-width', initialScale: 1 };

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = getBaseUrl();
  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: 'New Events — Premium Event Management Platform',
      template: '%s | New Events',
    },
    description: 'New Events is a premium event management platform for planning, organizing, and executing unforgettable corporate and social events.',
    alternates: {
      canonical: baseUrl,
      languages: { 'en': baseUrl, 'x-default': baseUrl },
    },
    openGraph: {
      title: 'New Events — Premium Event Management Platform',
      description: 'New Events is a premium event management platform for planning, organizing, and executing unforgettable corporate and social events.',
      url: baseUrl,
      siteName: 'New Events',
      type: 'website',
      images: [{ url: `${baseUrl}/og-image.jpg`, width: 1200, height: 630, alt: 'New Events' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'New Events — Premium Event Management Platform',
      description: 'New Events is a premium event management platform for planning, organizing, and executing unforgettable corporate and social events.',
    },
  };
}

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const baseUrl = getBaseUrl();
  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'New Events',
    url: baseUrl,
    description: 'Premium event management platform for planning, organizing, and executing unforgettable events.',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${baseUrl}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />

        <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-background/80 border-b border-border/50 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 lg:h-20">
              <Link href="/" className="flex items-center gap-2.5 group" aria-label="New Events Home">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
                  <Sparkles className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold gradient-text font-sans tracking-tight">New Events</span>
              </Link>

              <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="relative px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200 rounded-lg hover:bg-primary/5 group"
                  >
                    {link.label}
                    <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-200 rounded-full" />
                  </Link>
                ))}
              </nav>

              <div className="hidden lg:flex items-center gap-3">
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg shadow-primary/20 min-h-[48px] px-6 rounded-xl font-semibold">
                    Get Started
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </div>

              <Sheet>
                <SheetTrigger asChild className="lg:hidden">
                  <Button variant="ghost" size="icon" className="min-h-[48px] min-w-[48px]" aria-label="Open mobile menu">
                    <Menu className="w-5 h-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80 bg-background/95 backdrop-blur-xl">
                  <div className="flex flex-col gap-6 mt-8">
                    <Link href="/" className="flex items-center gap-2.5" aria-label="New Events Home">
                      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <span className="text-xl font-bold gradient-text">New Events</span>
                    </Link>
                    <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
                      {navLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="flex items-center gap-3 px-4 py-3 text-base font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-xl transition-all duration-200 min-h-[48px]"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </nav>
                    <Link href="/contact">
                      <Button className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground min-h-[48px] rounded-xl font-semibold">
                        Get Started
                      </Button>
                    </Link>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </header>

        <main className="min-h-screen">
          {children}
        </main>

        <footer className="bg-foreground text-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
              <div className="lg:col-span-1">
                <Link href="/" className="flex items-center gap-2.5 mb-4" aria-label="New Events Home">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="text-xl font-bold text-background">New Events</span>
                </Link>
                <p className="text-background/60 text-sm leading-relaxed mb-6">
                  Crafting unforgettable experiences through meticulous planning, creative vision, and flawless execution.
                </p>
                <div className="flex items-center gap-3">
                  {[
                    { href: 'https://facebook.com', icon: Facebook, label: 'Facebook' },
                    { href: 'https://instagram.com', icon: Instagram, label: 'Instagram' },
                    { href: 'https://twitter.com', icon: Twitter, label: 'Twitter/X' },
                    { href: 'https://linkedin.com', icon: Linkedin, label: 'LinkedIn' },
                    { href: 'https://youtube.com', icon: Youtube, label: 'YouTube' },
                  ].map(({ href, icon: Icon, label }) => (
                    <a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-9 h-9 rounded-lg bg-background/10 hover:bg-primary/80 flex items-center justify-center transition-all duration-200 hover:scale-110"
                    >
                      <Icon className="w-4 h-4 text-background" />
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-background font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h3>
                <ul className="space-y-2.5">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-background/60 hover:text-background text-sm transition-colors duration-200 hover:translate-x-1 inline-block">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-background font-semibold text-sm uppercase tracking-wider mb-4">Services</h3>
                <ul className="space-y-2.5">
                  {['Corporate Events', 'Weddings & Galas', 'Product Launches', 'Conferences', 'Private Parties', 'Virtual Events'].map((s) => (
                    <li key={s}>
                      <Link href="/services" className="text-background/60 hover:text-background text-sm transition-colors duration-200 hover:translate-x-1 inline-block">
                        {s}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-background font-semibold text-sm uppercase tracking-wider mb-4">Contact</h3>
                <address className="not-italic space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-background/60 text-sm">123 Event Plaza, Suite 400<br />New York, NY 10001</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-primary shrink-0" />
                    <a href="tel:+15551234567" className="text-background/60 hover:text-background text-sm transition-colors">(555) 123-4567</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-primary shrink-0" />
                    <a href="mailto:hello@newevents.com" className="text-background/60 hover:text-background text-sm transition-colors">hello@newevents.com</a>
                  </div>
                </address>
              </div>
            </div>

            <div className="border-t border-background/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-background/40 text-sm">© {new Date().getFullYear()} New Events. All rights reserved.</p>
              <div className="flex items-center gap-4">
                <Link href="/sitemap.xml" className="text-background/40 hover:text-background/60 text-xs transition-colors">Sitemap</Link>
                <a href="https://idea4app.ai/report" style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)' }}>Report this site</a>
              </div>
            </div>
          </div>
        </footer>

        <Idea4appBranding />
        <AdgentekAd context="event management" />
        <Script src="https://api.adgentek.ai/storage/v1/object/public/sdk/sdk.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
