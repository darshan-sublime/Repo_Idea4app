import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Shield, Mail, Phone, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

export const metadata: Metadata = {
  title: 'Privacy Policy — Ember & Oak Events',
  description: 'Learn how Ember & Oak Events collects, uses, and protects your personal information. Your privacy matters to us.',
  openGraph: {
    title: 'Privacy Policy — Ember & Oak Events',
    description: 'Learn how Ember & Oak Events collects, uses, and protects your personal information. Your privacy matters to us.',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Privacy Policy — Ember & Oak Events',
    description: 'Learn how Ember & Oak Events collects, uses, and protects your personal information. Your privacy matters to us.',
  },
}

export default function PrivacyPolicyPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Privacy Policy',
    description: 'Privacy Policy for Ember & Oak Events — Full-service wedding and event planning in Savannah, Georgia.',
    url: 'https://emberoakevents.com/privacy',
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
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        suppressHydrationWarning
      />

      <main>
        {/* Hero / Page Header */}
        <section
          aria-label="Privacy Policy Header"
          className="bg-hero relative min-h-[45vh] flex items-center justify-center overflow-hidden"
        >
          {/* Decorative background pattern */}
          <div className="absolute inset-0 bg-overlay" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%221%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E")`,
            }}
          />

          <div className="relative z-10 text-center px-6 animate-fade-in">
            {/* Floating badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-2 mb-8">
              <Shield className="w-4 h-4 text-accent" />
              <span className="text-xs font-semibold uppercase tracking-wider text-white/90">
                Your Privacy Matters
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-4">
              How {'Ember & Oak Events'} collects, uses, and safeguards your personal information.
            </p>
            <p className="text-sm text-white/60">
              Last updated: {'2026'}
            </p>
          </div>

          {/* Decorative bottom curve */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <path d="M0 80V40C240 0 480 0 720 20C960 40 1200 60 1440 40V80H0Z" className="fill-background" />
            </svg>
          </div>
        </section>

        {/* Breadcrumb Navigation */}
        <section aria-label="Breadcrumb" className="bg-background py-4">
          <div className="max-w-3xl mx-auto px-6">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground animate-fade-in">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-foreground font-medium">Privacy Policy</span>
            </nav>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section aria-label="Privacy Policy Content" className="bg-background py-20 md:py-28">
          <div className="max-w-3xl mx-auto px-6">

            {/* Geo paragraph for AEO */}
            <p className="geo-paragraph text-muted-foreground leading-relaxed mb-12 animate-fade-in">
              {'Ember & Oak Events'} is a full-service wedding and event planning company based in {'Savannah'}, {'GA'}. Serving the Savannah metropolitan area and the surrounding Lowcountry region, we specialize in luxury event design, day-of coordination, and comprehensive planning for weddings, corporate gatherings, and milestone celebrations.
            </p>

            <Separator className="mb-16" />

            {/* Section 1: Information We Collect */}
            <div className="mb-14 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-bold text-sm">01</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                  Information We Collect
                </h2>
              </div>
              <div className="pl-14">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  When you inquire about our wedding planning, corporate event, or celebration coordination services, we collect personal information necessary to deliver an exceptional experience. This may include:
                </p>
                <ul className="space-y-2 text-muted-foreground leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                    <span><strong className="text-foreground">Contact details:</strong> Your full name, email address, phone number, and mailing address.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                    <span><strong className="text-foreground">Event information:</strong> Event date, venue preferences, guest count, budget range, and specific service requests (e.g., Day-of Coordination, Partial Planning, or Full Planning packages).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                    <span><strong className="text-foreground">Payment details:</strong> Billing information processed securely through our third-party payment processor when booking our services.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                    <span><strong className="text-foreground">Communications:</strong> Records of emails, phone calls, and messages exchanged during the planning process.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                    <span><strong className="text-foreground">Website usage data:</strong> Browser type, device information, pages visited, and referral source collected automatically when you browse our website.</span>
                  </li>
                </ul>
              </div>
            </div>

            <Separator className="mb-14" />

            {/* Section 2: How We Use Your Information */}
            <div className="mb-14 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-bold text-sm">02</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                  How We Use Your Information
                </h2>
              </div>
              <div className="pl-14">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {'Ember & Oak Events'} uses the information we collect to provide you with personalized, high-quality event planning services. Specifically, we use your data to:
                </p>
                <ul className="space-y-2 text-muted-foreground leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                    <span><strong className="text-foreground">Deliver our services:</strong> Plan, coordinate, and execute your wedding, corporate event, or celebration according to your vision and preferences.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                    <span><strong className="text-foreground">Communicate with you:</strong> Respond to inquiries, provide consultations, send planning updates, timelines, and post-event follow-ups.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                    <span><strong className="text-foreground">Process payments:</strong> Securely handle deposits, installments, and final payments for our Day-of Coordination, Partial Planning, and Full Planning packages.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                    <span><strong className="text-foreground">Improve our services:</strong> Analyze feedback and website usage to enhance our offerings, vendor partnerships, and client experience.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                    <span><strong className="text-foreground">Legal compliance:</strong> Fulfill contractual obligations, maintain business records, and comply with applicable laws and regulations.</span>
                  </li>
                </ul>
              </div>
            </div>

            <Separator className="mb-14" />

            {/* Section 3: Data Sharing & Third Parties */}
            <div className="mb-14 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-bold text-sm">03</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                  Data Sharing & Third Parties
                </h2>
              </div>
              <div className="pl-14">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We respect your privacy and do not sell your personal information to third parties. However, we may share limited information with trusted partners to deliver our services effectively:
                </p>
                <ul className="space-y-2 text-muted-foreground leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                    <span><strong className="text-foreground">Trusted vendor network:</strong> With your consent, we share relevant event details (date, venue, guest count) with our vetted network of caterers, florists, photographers, DJs, and other vendors to coordinate your event seamlessly.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                    <span><strong className="text-foreground">Payment processors:</strong> We use industry-standard, PCI-compliant payment processors to handle all financial transactions. We never store your full credit card information on our servers.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                    <span><strong className="text-foreground">Booking and CRM platforms:</strong> We utilize professional event management and client relationship tools to organize your planning timeline and communications securely.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                    <span><strong className="text-foreground">Legal requirements:</strong> We may disclose information when required by law, court order, or government regulation, or to protect the rights, safety, or property of {'Ember & Oak Events'} and our clients.</span>
                  </li>
                </ul>
              </div>
            </div>

            <Separator className="mb-14" />

            {/* Section 4: Cookies */}
            <div className="mb-14 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-bold text-sm">04</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                  Cookies & Tracking Technologies
                </h2>
              </div>
              <div className="pl-14">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our website uses cookies and similar technologies to enhance your browsing experience and help us understand how visitors interact with our site.
                </p>
                <ul className="space-y-2 text-muted-foreground leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                    <span><strong className="text-foreground">Essential cookies:</strong> Required for basic website functionality, such as form submissions and page navigation. These cannot be disabled.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                    <span><strong className="text-foreground">Analytics cookies:</strong> We use tools like Google Analytics to track page views, session duration, and traffic sources. This data is aggregated and anonymized to help us improve our website content and user experience.</span>
                  </li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  You can manage cookie preferences through your browser settings. Disabling certain cookies may affect website functionality.
                </p>
              </div>
            </div>

            <Separator className="mb-14" />

            {/* Section 5: Data Security */}
            <div className="mb-14 animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-bold text-sm">05</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                  Data Security
                </h2>
              </div>
              <div className="pl-14">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {'Ember & Oak Events'} takes the security of your personal information seriously. We implement industry-standard measures to protect your data, including:
                </p>
                <ul className="space-y-2 text-muted-foreground leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                    <span>SSL/TLS encryption on all website pages and forms to protect data in transit.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                    <span>Secure, password-protected access to client files and planning documents.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                    <span>Regular review and updating of our security practices and vendor agreements.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                    <span>Limited access to personal data — only team members directly involved in your event planning have access to your information.</span>
                  </li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  While no method of electronic storage or transmission is 100% secure, we are committed to protecting your information to the best of our ability and promptly addressing any security concerns.
                </p>
              </div>
            </div>

            <Separator className="mb-14" />

            {/* Section 6: Your Rights */}
            <div className="mb-14 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-bold text-sm">06</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                  Your Rights
                </h2>
              </div>
              <div className="pl-14">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You have the right to control how your personal information is collected, used, and stored. As a client or prospective client of {'Ember & Oak Events'}, you may:
                </p>
                <ul className="space-y-2 text-muted-foreground leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                    <span><strong className="text-foreground">Access your data:</strong> Request a summary of the personal information we hold about you.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                    <span><strong className="text-foreground">Correct your data:</strong> Ask us to update or correct inaccurate or incomplete information.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                    <span><strong className="text-foreground">Delete your data:</strong> Request the deletion of your personal information, subject to legal and contractual obligations that may require us to retain certain records.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                    <span><strong className="text-foreground">Opt out of communications:</strong> Unsubscribe from marketing emails or newsletters at any time by clicking the unsubscribe link or contacting us directly.</span>
                  </li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  To exercise any of these rights, please contact us using the information provided below. We will respond to your request within 30 business days.
                </p>
              </div>
            </div>

            <Separator className="mb-14" />

            {/* Section 7: Contact Us */}
            <div className="mb-14 animate-slide-up" style={{ animationDelay: '0.7s' }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-bold text-sm">07</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                  Contact Us
                </h2>
              </div>
              <div className="pl-14">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  If you have any questions, concerns, or requests regarding this Privacy Policy or how {'Ember & Oak Events'} handles your personal information, please don&apos;t hesitate to reach out:
                </p>
                <div className="rounded-2xl border border-border/50 bg-card shadow-sm p-6 md:p-8">
                  <h3 className="font-bold text-foreground text-lg mb-4">{'Ember & Oak Events'}</h3>
                  <address className="not-italic space-y-3">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-4 h-4 text-primary" />
                      </div>
                      <a href="mailto:hello@emberoakevents.com" className="hover:text-primary transition-colors">
                        {'hello@emberoakevents.com'}
                      </a>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-4 h-4 text-primary" />
                      </div>
                      <a href="tel:(912) 555-0188" className="hover:text-primary transition-colors">
                        {'(912) 555-0188'}
                      </a>
                    </div>
                    <div className="flex items-start gap-3 text-muted-foreground">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Shield className="w-4 h-4 text-primary" />
                      </div>
                      <span>{'412 Bull St, Savannah, GA'}</span>
                    </div>
                  </address>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Bottom Navigation */}
        <section aria-label="Page Navigation" className="bg-muted/30 py-16 md:py-20">
          <div className="max-w-3xl mx-auto px-6 animate-fade-in">
            <div className="rounded-2xl border border-border/50 bg-card shadow-sm p-8 md:p-10 text-center">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-3">
                Have More Questions?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg mx-auto">
                We&apos;re here to help. Explore our terms of service or head back to our homepage to learn more about what {'Ember & Oak Events'} can do for your special day.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-3 font-semibold">
                    Back to Home
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/terms">
                  <Button variant="outline" className="rounded-full px-8 py-3 font-semibold border-primary/30 hover:bg-primary/5">
                    Terms of Service
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
