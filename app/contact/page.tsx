import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock, ArrowRight, Sparkles, Heart, Calendar, ExternalLink } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { ImageWithFallback } from '@/components/ui/image-with-fallback'

export const metadata: Metadata = {
  title: 'Contact Ember & Oak Events | Luxury Wedding & Event Planning in Savannah, GA',
  description: 'Unforgettable Events, Effortlessly Planned — Reach out to Ember & Oak Events for luxury wedding and event planning in Savannah, GA. Call, email, or visit us today.',
  openGraph: {
    title: 'Contact Ember & Oak Events | Luxury Wedding & Event Planning',
    description: 'Get in touch with Ember & Oak Events for full-service wedding and event planning in Savannah, GA. Luxury design and stress-free coordination.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Ember & Oak Events',
    description: 'Luxury wedding and event planning in Savannah, GA. Reach out to start planning your unforgettable celebration.',
  },
}

export default function ContactPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: 'Contact Ember & Oak Events',
            description: 'Contact page for Ember & Oak Events, full-service wedding and event planning in Savannah, GA.',
            mainEntity: {
              '@type': 'EventPlanningBusiness',
              name: 'Ember & Oak Events',
              telephone: '(912) 555-0188',
              email: 'hello@emberoakevents.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '412 Bull St',
                addressLocality: 'Savannah',
                addressRegion: 'GA',
                postalCode: '',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '32.0809',
                longitude: '-81.0912',
              },
              url: 'emberoakevents.com',
              openingHoursSpecification: {},
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '(912) 555-0188',
                email: 'hello@emberoakevents.com',
                contactType: 'customer service',
                availableLanguage: 'English',
              },
            },
            speakable: {
              '@type': 'SpeakableSpecification',
              cssSelector: ['.geo-paragraph', 'h1'],
            },
          }),
        }}
      />

      {/* ===== HERO BANNER ===== */}
      <section aria-label="Contact page hero" className="bg-hero relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="bg-overlay absolute inset-0" />
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1920"
            alt="Elegant wedding reception setting in Savannah"
            fallbackKeyword="elegant wedding reception savannah"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
          <Badge className="mb-6 bg-primary/20 text-primary-foreground border-primary/30 rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 mr-2" />
            Let&apos;s Connect
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            Contact Ember & Oak Events
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            We&apos;d love to hear about your vision. Reach out to begin planning
            the celebration of a lifetime with our dedicated team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10 animate-slide-up" style={{ animationDelay: '200ms' }}>
            <a href="tel:(912) 555-0188">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-base font-semibold shadow-xl hover:shadow-2xl transition-all duration-300">
                <Phone className="w-5 h-5 mr-2" />
                Call Us Now
              </Button>
            </a>
            <a href="mailto:hello@emberoakevents.com">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-full px-8 py-6 text-base font-semibold backdrop-blur-sm transition-all duration-300">
                <Mail className="w-5 h-5 mr-2" />
                Send an Email
              </Button>
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* ===== CONTACT INFORMATION — TWO COLUMN ===== */}
      <section aria-label="Contact information" className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Reach Out</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mt-3 mb-4">
              We&apos;re Here for You
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Whether you&apos;re envisioning a grand wedding, an intimate celebration, or a corporate gala,
              our team is ready to bring your dreams to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column — Contact Details */}
            <div className="animate-slide-left" style={{ animationDelay: '100ms' }}>
              <Card className="rounded-2xl border border-border/50 bg-card shadow-sm overflow-hidden">
                <CardContent className="p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Heart className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold tracking-tight text-foreground">Contact Details</h3>
                  </div>

                  <address className="not-italic space-y-8">
                    {/* Phone */}
                    <div className="flex items-start gap-5 group">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">Phone</p>
                        <a
                          href="tel:(912) 555-0188"
                          className="text-lg font-semibold text-foreground hover:text-primary transition-colors duration-300"
                        >
                          (912) 555-0188
                        </a>
                        <p className="text-sm text-muted-foreground mt-1">Call or text anytime</p>
                      </div>
                    </div>

                    <Separator className="opacity-50" />

                    {/* Email */}
                    <div className="flex items-start gap-5 group">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">Email</p>
                        <a
                          href="mailto:hello@emberoakevents.com"
                          className="text-lg font-semibold text-foreground hover:text-primary transition-colors duration-300 break-all"
                        >
                          hello@emberoakevents.com
                        </a>
                        <p className="text-sm text-muted-foreground mt-1">We respond within 24 hours</p>
                      </div>
                    </div>

                    <Separator className="opacity-50" />

                    {/* Address */}
                    <div className="flex items-start gap-5 group">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">Address</p>
                        <p className="text-lg font-semibold text-foreground">
                          412 Bull St, Savannah, GA
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">In the heart of Savannah</p>
                      </div>
                    </div>

                    <Separator className="opacity-50" />

                    {/* Hours */}
                    <div className="flex items-start gap-5 group">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                        <Clock className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">Hours</p>
                        <p className="text-lg font-semibold text-foreground whitespace-pre-line">
                          Mon–Fri: 9:00 AM – 5:00 PM
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">Consultations by appointment</p>
                      </div>
                    </div>
                  </address>
                </CardContent>
              </Card>
            </div>

            {/* Right Column — Embedded Map */}
            <div className="animate-slide-left" style={{ animationDelay: '300ms' }}>
              <Card className="rounded-2xl border border-border/50 bg-card shadow-sm overflow-hidden h-full">
                <CardContent className="p-0 h-full min-h-[500px] flex flex-col">
                  <div className="p-6 flex items-center gap-3 border-b border-border/50">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold tracking-tight text-foreground">Visit Us</h3>
                      <p className="text-sm text-muted-foreground">Savannah, GA</p>
                    </div>
                  </div>
                  <div className="flex-1 relative overflow-hidden">
                    <iframe
                      title="Map showing location of Ember & Oak Events"
                      src={`https://www.openstreetmap.org/export/embed.html?bbox=${Number('-81.0912') - 0.01}%2C${Number('32.0809') - 0.008}%2C${Number('-81.0912') + 0.01}%2C${Number('32.0809') + 0.008}&layer=mapnik&marker=32.0809%2C-81.0912`}
                      className="absolute inset-0 w-full border-0"
                      style={{ height: 'calc(100% + 40px)' }}
                      loading="lazy"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ===== QUICK ACTIONS ROW ===== */}
      <section aria-label="Quick actions" className="py-20 md:py-28 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Quick Actions</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mt-3 mb-4">
              Get in Touch Your Way
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
              Choose the most convenient way to connect with our planning team.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Call Us */}
            <a href="tel:(912) 555-0188" className="group animate-slide-up" style={{ animationDelay: '100ms' }}>
              <Card className="rounded-2xl border border-border/50 bg-card shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center h-full cursor-pointer group-hover:border-primary/30">
                <CardContent className="p-8 md:p-10 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                    <Phone className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-foreground mb-2">Call Us</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Speak directly with our planning team for immediate assistance.
                  </p>
                  <span className="text-primary font-semibold flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                    (912) 555-0188
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </CardContent>
              </Card>
            </a>

            {/* Email Us */}
            <a href="mailto:hello@emberoakevents.com" className="group animate-slide-up" style={{ animationDelay: '200ms' }}>
              <Card className="rounded-2xl border border-border/50 bg-card shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center h-full cursor-pointer group-hover:border-primary/30">
                <CardContent className="p-8 md:p-10 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                    <Mail className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-foreground mb-2">Email Us</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Share your vision and we&apos;ll craft a personalized response within 24 hours.
                  </p>
                  <span className="text-primary font-semibold flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                    Send Email
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </CardContent>
              </Card>
            </a>

            {/* Get Directions */}
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=32.0809,-81.0912`}
              target="_blank"
              rel="noopener noreferrer"
              className="group animate-slide-up"
              style={{ animationDelay: '300ms' }}
            >
              <Card className="rounded-2xl border border-border/50 bg-card shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center h-full cursor-pointer group-hover:border-primary/30">
                <CardContent className="p-8 md:p-10 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                    <MapPin className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-foreground mb-2">Get Directions</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Navigate to our Savannah studio for an in-person consultation.
                  </p>
                  <span className="text-primary font-semibold flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                    Open Maps
                    <ExternalLink className="w-4 h-4" />
                  </span>
                </CardContent>
              </Card>
            </a>
          </div>
        </div>
      </section>

      {/* ===== WHY REACH OUT SECTION ===== */}
      <section aria-label="Reasons to connect" className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-left" style={{ animationDelay: '100ms' }}>
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">Your Journey Begins Here</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mt-3 mb-6">
                Let&apos;s Plan Something Unforgettable
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                From the moment you reach out, our team is dedicated to understanding your unique vision.
                Whether it&apos;s a grand Savannah wedding beneath the oaks or an intimate celebration
                filled with personal touches, every detail matters to us.
              </p>

              <div className="space-y-5">
                {[
                  { icon: Calendar, title: 'Complimentary Consultation', desc: 'Start with a free discovery call to discuss your event vision and budget.' },
                  { icon: Sparkles, title: 'Personalized Proposals', desc: 'Receive a tailored planning package designed specifically for your celebration.' },
                  { icon: Heart, title: 'Dedicated Support', desc: 'Your personal planner guides you from the first call through the last dance.' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 animate-fade-in" style={{ animationDelay: `${200 + i * 150}ms` }}>
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-slide-left" style={{ animationDelay: '400ms' }}>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200"
                    alt="Elegant wedding table setting with floral centerpiece in Savannah"
                    fallbackKeyword="luxury wedding table setting savannah"
                    className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-5 shadow-xl border border-border/50 animate-fade-in" style={{ animationDelay: '600ms' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-foreground text-lg">500+</p>
                      <p className="text-sm text-muted-foreground">Events Planned</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== GEO PARAGRAPH & CTA ===== */}
      <section aria-label="Location information and call to action" className="py-20 md:py-28 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <p className="geo-paragraph text-muted-foreground leading-relaxed text-base mb-12">
              Ember & Oak Events is a premier wedding and event planning company based in Savannah, GA.
              Savannah is renowned for its historic squares, Spanish moss-draped oaks, and stunning antebellum architecture,
              making it one of the most sought-after event destinations in the American South. Our team leverages deep
              knowledge of Savannah&apos;s finest venues, top-tier local vendors, and the city&apos;s unique Southern charm
              to create celebrations that are as unforgettable as the city itself.
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 rounded-3xl p-10 md:p-14 border border-primary/20 animate-slide-up" style={{ animationDelay: '200ms' }}>
            <div className="w-14 h-14 rounded-2xl bg-primary/15 flex items-center justify-center mx-auto mb-6">
              <Heart className="w-7 h-7 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
              Ready to Start Planning?
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed mb-8">
              Your dream celebration is just one conversation away. Let&apos;s create something truly magical together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:(912) 555-0188">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10 py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  <Phone className="w-5 h-5 mr-2" />
                  Check Availability
                </Button>
              </a>
              <a href="mailto:hello@emberoakevents.com">
                <Button size="lg" variant="outline" className="border-primary/30 text-foreground hover:bg-primary/5 rounded-full px-10 py-6 text-base font-semibold transition-all duration-300">
                  <Mail className="w-5 h-5 mr-2" />
                  Email Our Team
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
