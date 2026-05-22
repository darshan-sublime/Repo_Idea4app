import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ChevronLeft, Shield, Mail, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

export const metadata: Metadata = {
  title: 'Terms of Service — Ember & Oak Events',
  description: 'Review the terms of service for Ember & Oak Events. Understand our booking policies, payment terms, and service agreements for event planning in Savannah, GA.',
  openGraph: {
    title: 'Terms of Service — Ember & Oak Events',
    description: 'Review the terms of service for Ember & Oak Events. Understand our booking policies, payment terms, and service agreements for event planning in Savannah, GA.',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Terms of Service — Ember & Oak Events',
    description: 'Review the terms of service for Ember & Oak Events. Understand our booking policies, payment terms, and service agreements for event planning in Savannah, GA.',
  },
}

export default function TermsOfServicePage() {
  const termsSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Terms of Service',
    description: 'Terms of service for Ember & Oak Events, a full-service wedding and event planning company in Savannah, GA.',
    url: 'https://emberoakevents.com/terms',
    publisher: {
      '@type': 'LocalBusiness',
      name: 'Ember & Oak Events',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '412 Bull St',
        addressLocality: 'Savannah',
        addressRegion: 'GA',
        postalCode: '',
      },
      telephone: '(912) 555-0188',
      email: 'hello@emberoakevents.com',
    },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '.geo-paragraph'],
    },
    dateModified: '2026-01-01',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(termsSchema) }}
        suppressHydrationWarning
      />

      <main>
        {/* Hero Header */}
        <section
          aria-label="Terms of Service Header"
          className="bg-hero relative min-h-[45vh] flex items-center justify-center overflow-hidden"
        >
          {/* Decorative floral line art overlay */}
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%27100%27%20height=%27100%27%20viewBox=%270%200%20100%20100%27%3E%3Cpath%20d=%27M50%2010%20Q60%2030%2080%2040%20Q60%2050%2050%2070%20Q40%2050%2020%2040%20Q40%2030%2050%2010Z%27%20fill=%27none%27%20stroke=%27%23ffffff%27%20stroke-width=%270.5%27/%3E%3C/svg%3E")`,
            backgroundSize: '120px 120px',
          }} />

          <div className="relative z-10 text-center px-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-2 mb-8">
              <Shield className="w-4 h-4 text-accent" />
              <span className="text-xs font-semibold uppercase tracking-wider text-white/90">
                Legal Information
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Terms of Service
            </h1>

            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Please review the following terms that govern your use of Ember & Oak Events&apos;s website and services.
            </p>

            <p className="mt-6 text-sm text-white/60 font-medium">
              Last updated: 2026
            </p>
          </div>

          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
        </section>

        {/* Terms Content */}
        <section
          aria-label="Terms of Service Content"
          className="py-20 md:py-28 bg-background"
        >
          <div className="max-w-3xl mx-auto px-6">
            {/* Geo paragraph for AEO */}
            <p className="geo-paragraph text-muted-foreground leading-relaxed mb-12 text-sm border-l-2 border-primary/30 pl-4 italic animate-fade-in">
              Ember & Oak Events is a premier full-service wedding and event planning company based in Savannah, GA. Serving the historic Savannah area, we specialize in luxury design, stress-free coordination, and creating unforgettable celebrations for couples and corporate clients throughout the Lowcountry region.
            </p>

            {/* Section 1: Acceptance of Terms */}
            <div className="mb-14 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                  1
                </div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                  Acceptance of Terms
                </h2>
              </div>
              <Separator className="mb-6 bg-border/50" />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  By accessing and using the Ember & Oak Events website (&ldquo;emberoakevents.com&rdquo;), you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must discontinue use of our website immediately.
                </p>
                <p>
                  These terms apply to all visitors, users, and others who access or use our website and services. Your continued use of the site following the posting of any changes to these terms constitutes acceptance of those changes.
                </p>
              </div>
            </div>

            {/* Section 2: Services Description */}
            <div className="mb-14 animate-slide-up" style={{ animationDelay: '0.15s' }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                  2
                </div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                  Services Description
                </h2>
              </div>
              <Separator className="mb-6 bg-border/50" />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Ember & Oak Events provides full-service wedding and event planning services in Savannah, GA and surrounding areas. Our offerings include, but are not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-2">
                  <li>Day-of coordination and event management</li>
                  <li>Partial event planning and design consultation</li>
                  <li>Full-service wedding and celebration planning</li>
                  <li>Corporate event planning and production</li>
                  <li>Vendor sourcing and management through our trusted network</li>
                  <li>Venue selection guidance and site visits</li>
                  <li>Design, décor, and styling services</li>
                </ul>
                <p>
                  The specific scope of services provided will be outlined in a signed service agreement or contract between Ember & Oak Events and the client. Information on our website is for general informational purposes and does not constitute a binding offer or guarantee of availability.
                </p>
              </div>
            </div>

            {/* Section 3: User Responsibilities */}
            <div className="mb-14 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                  3
                </div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                  User Responsibilities
                </h2>
              </div>
              <Separator className="mb-6 bg-border/50" />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  When using our website, you agree to the following:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-2">
                  <li>You will use the website only for lawful purposes and in accordance with these Terms of Service.</li>
                  <li>You will provide accurate and truthful information when submitting any inquiry forms, booking requests, or communications through our website.</li>
                  <li>You will not attempt to gain unauthorized access to any portion of the website, its servers, or any connected systems.</li>
                  <li>You will not use the website to transmit harmful, offensive, or misleading content, including spam, viruses, or other malicious code.</li>
                  <li>You will not reproduce, distribute, or exploit any content from this website without prior written consent from Ember & Oak Events.</li>
                </ul>
                <p>
                  We reserve the right to restrict or terminate access to our website for any user who violates these responsibilities or engages in conduct that we deem harmful to our business or other users.
                </p>
              </div>
            </div>

            {/* Section 4: Booking & Payments */}
            <div className="mb-14 animate-slide-up" style={{ animationDelay: '0.25s' }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                  4
                </div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                  Booking &amp; Payments
                </h2>
              </div>
              <Separator className="mb-6 bg-border/50" />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  All bookings with Ember & Oak Events are subject to the following policies:
                </p>
                <p>
                  <strong className="text-foreground">Booking Confirmation:</strong> A booking is considered confirmed only upon execution of a signed service agreement and receipt of the required retainer deposit. Submitting an inquiry or consultation request through our website does not constitute a confirmed booking.
                </p>
                <p>
                  <strong className="text-foreground">Deposits &amp; Payment Schedule:</strong> A non-refundable retainer deposit is required to secure your event date. The specific amount and payment schedule will be outlined in your individual service agreement. Typical payment milestones include an initial retainer, a midpoint payment, and a final balance due prior to the event date.
                </p>
                <p>
                  <strong className="text-foreground">Cancellation Policy:</strong> If you need to cancel your event or our services, written notice must be provided as outlined in your service agreement. The retainer deposit is non-refundable. Additional cancellation fees may apply depending on the timing of cancellation relative to your event date and the amount of work already completed. Specific cancellation terms are detailed in your signed contract.
                </p>
                <p>
                  <strong className="text-foreground">Rescheduling:</strong> Event date changes are subject to availability and may incur additional fees. We will work with you to accommodate rescheduling requests whenever possible, subject to the terms of your service agreement.
                </p>
                <p>
                  <strong className="text-foreground">Accepted Payment Methods:</strong> We accept payment via bank transfer, check, and major credit cards. A processing fee may apply to credit card payments as specified in your agreement.
                </p>
              </div>
            </div>

            {/* Section 5: Intellectual Property */}
            <div className="mb-14 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                  5
                </div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                  Intellectual Property
                </h2>
              </div>
              <Separator className="mb-6 bg-border/50" />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  All content on this website—including but not limited to text, graphics, logos, images, photographs, event designs, layouts, and software—is the property of Ember & Oak Events or its content suppliers and is protected by United States and international copyright, trademark, and intellectual property laws.
                </p>
                <p>
                  The Ember & Oak Events name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of Ember & Oak Events. You may not use such marks without our prior written permission.
                </p>
                <p>
                  Event photographs displayed on our website and social media channels may be used by Ember & Oak Events for portfolio and marketing purposes, unless otherwise agreed upon in writing within the service agreement. Proper credit will be given to photographers and vendors as applicable.
                </p>
                <p>
                  You may not reproduce, distribute, modify, create derivative works of, publicly display, or otherwise exploit any content from this website without express written authorization from Ember & Oak Events.
                </p>
              </div>
            </div>

            {/* Section 6: Limitation of Liability */}
            <div className="mb-14 animate-slide-up" style={{ animationDelay: '0.35s' }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                  6
                </div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                  Limitation of Liability
                </h2>
              </div>
              <Separator className="mb-6 bg-border/50" />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  The information provided on this website is for general informational purposes only. While Ember & Oak Events strives to keep the content accurate and up-to-date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the website or the information, products, services, or related graphics contained on the website.
                </p>
                <p>
                  To the fullest extent permitted by applicable law, Ember & Oak Events shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, goodwill, or other intangible losses, resulting from:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-2">
                  <li>Your access to or use of (or inability to access or use) the website</li>
                  <li>Any conduct or content of any third party on the website</li>
                  <li>Any content obtained from the website</li>
                  <li>Unauthorized access, use, or alteration of your transmissions or content</li>
                </ul>
                <p>
                  Ember & Oak Events acts as a coordinator and planner, and while we work diligently with our vendor network, we are not responsible for the performance, actions, or omissions of third-party vendors engaged for your event. Each vendor operates under their own terms and agreements.
                </p>
              </div>
            </div>

            {/* Section 7: Changes to Terms */}
            <div className="mb-14 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                  7
                </div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                  Changes to Terms
                </h2>
              </div>
              <Separator className="mb-6 bg-border/50" />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Ember & Oak Events reserves the right to modify, update, or replace these Terms of Service at any time at our sole discretion. Changes will be effective immediately upon posting to this page, and the &ldquo;Last updated&rdquo; date at the top of this page will be revised accordingly.
                </p>
                <p>
                  It is your responsibility to review these Terms of Service periodically for changes. Your continued use of the website following the posting of any changes constitutes acceptance of those changes. If you do not agree to the modified terms, you should discontinue use of the website.
                </p>
                <p>
                  For significant changes that materially affect your rights or obligations, we will make reasonable efforts to provide notice, such as posting a prominent notice on our website or sending communication to clients with active service agreements.
                </p>
              </div>
            </div>

            {/* Section 8: Contact Information */}
            <div className="mb-14 animate-slide-up" style={{ animationDelay: '0.45s' }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                  8
                </div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                  Contact Information
                </h2>
              </div>
              <Separator className="mb-6 bg-border/50" />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  If you have any questions, concerns, or requests regarding these Terms of Service, please do not hesitate to contact us. We are happy to clarify any policies or address your needs.
                </p>
                <div className="rounded-2xl border border-border/50 bg-card p-6 mt-6 space-y-4">
                  <p className="font-bold text-foreground text-lg">Ember & Oak Events</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-0.5">Email</p>
                      <a href="mailto:hello@emberoakevents.com" className="text-foreground hover:text-primary transition-colors">
                        hello@emberoakevents.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-0.5">Phone</p>
                      <a href="tel:(912) 555-0188" className="text-foreground hover:text-primary transition-colors">
                        (912) 555-0188
                      </a>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground pt-2">
                    <p>412 Bull St, Savannah, GA</p>
                  </div>
                </div>
              </div>
            </div>

            <Separator className="my-12 bg-border/50" />

            {/* Bottom Navigation */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <Link href="/">
                <Button variant="outline" className="rounded-full gap-2 border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300">
                  <ChevronLeft className="w-4 h-4" />
                  Back to Home
                </Button>
              </Link>
              <Link href="/privacy">
                <Button variant="ghost" className="rounded-full gap-2 text-primary hover:bg-primary/5 transition-all duration-300">
                  Privacy Policy
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Decorative CTA Section */}
        <section
          aria-label="Get in Touch"
          className="py-20 md:py-28 bg-muted/30 animate-fade-in"
        >
          <div className="max-w-3xl mx-auto px-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-4">
              Ready to Begin?
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
              Let&apos;s Plan Something Unforgettable
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto">
              Have questions about our services or ready to start planning your dream event? We&apos;d love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button className="rounded-full px-8 py-3 bg-primary text-primary-foreground hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl gap-2">
                  Check Availability
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/gallery">
                <Button variant="outline" className="rounded-full px-8 py-3 border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 gap-2">
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
