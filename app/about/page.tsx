import { Metadata } from 'next'
import { ImageWithFallback } from '@/components/ui/image-with-fallback'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import {
  Heart,
  Star,
  Users,
  Award,
  Shield,
  Sparkles,
  Target,
  ArrowRight,
  ChevronRight,
  Calendar,
  Globe,
  Phone,
  Mail,
  MapPin,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Ember & Oak Events | Unforgettable Events, Effortlessly Planned',
  description:
    'Learn about Ember & Oak Events, Savannah\'s premier wedding and event planning company. Luxury design, stress-free coordination, and unforgettable celebrations since day one.',
  openGraph: {
    title: 'About Ember & Oak Events | Luxury Event Planning in Savannah, GA',
    description:
      'Discover the story behind Ember & Oak Events — full-service wedding and event planning with luxury design and stress-free coordination in Savannah, Georgia.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Ember & Oak Events | Luxury Event Planning in Savannah, GA',
    description:
      'Discover the story behind Ember & Oak Events — full-service wedding and event planning with luxury design and stress-free coordination in Savannah, Georgia.',
  },
}

export default function AboutPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            name: 'About Ember & Oak Events',
            description:
              'Ember & Oak Events is a full-service wedding and event planning company based in Savannah, Georgia, specializing in luxury design and stress-free coordination.',
            mainEntity: {
              '@type': 'EventPlanningBusiness',
              name: 'Ember & Oak Events',
              description:
                'Full-service wedding and event planning in Savannah, Georgia. Luxury design and stress-free coordination.',
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
            },
            speakable: {
              '@type': 'SpeakableSpecification',
              cssSelector: ['.geo-paragraph', 'h1'],
            },
          }),
        }}
      />

      {/* ─── SECTION 1: Page Header Banner ─── */}
      <section
        aria-label="About page header"
        className="bg-hero relative min-h-[50vh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1920"
            alt="Elegant wedding celebration"
            fallbackKeyword="elegant wedding celebration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>

        <div className="relative z-10 text-center px-4 py-20 md:py-28 animate-fade-in">
          <Badge
            variant="outline"
            className="mb-6 border-white/30 text-white/90 rounded-full px-5 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm"
          >
            <Sparkles className="w-3.5 h-3.5 mr-2" />
            Our Story
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4">
            About {'Ember & Oak Events'}
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Where passion meets precision — crafting unforgettable celebrations
            in the heart of Savannah
          </p>

          <nav aria-label="Breadcrumb" className="mt-8">
            <ol className="flex items-center justify-center gap-2 text-sm text-white/60">
              <li>
                <a
                  href="/"
                  className="hover:text-white transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <ChevronRight className="w-4 h-4" />
              </li>
              <li className="text-white font-medium">About</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* ─── SECTION 2: Our Story ─── */}
      <section
        aria-label="Our story"
        className="py-20 md:py-28 bg-background"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="animate-slide-left">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                Our Journey
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-3 mb-6">
                A Legacy of Extraordinary{' '}
                <span className="text-primary italic">Celebrations</span>
              </h2>

              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  {'Ember & Oak Events'} was born from a deep love for
                  Savannah&apos;s timeless charm and a passion for bringing
                  people&apos;s most cherished visions to life. Founded with the
                  belief that every celebration deserves meticulous attention and
                  creative brilliance, we set out to redefine what luxury event
                  planning means in the Lowcountry. From intimate garden
                  ceremonies beneath centuries-old oaks to grand ballroom galas,
                  our story is woven into every event we touch.
                </p>
                <p>
                  What began as a small boutique planning studio has grown into
                  {'Savannah'}&apos;s most trusted name in full-service event
                  design and coordination. Our founder&apos;s background in
                  luxury hospitality and fine arts informs every decision — from
                  the curvature of a floral arch to the precise timing of a
                  sunset toast. We don&apos;t just plan events; we architect
                  experiences that resonate long after the last dance.
                </p>
                <p>
                  Today, {'Ember & Oak Events'} is proud to partner with
                  Savannah&apos;s finest venues, florists, caterers, and
                  artisans. Our trusted vendor network, cultivated over years of
                  collaboration, ensures that every element of your celebration
                  meets the exacting standards our clients have come to expect.
                  Whether it&apos;s a destination wedding, a milestone birthday,
                  or a corporate retreat, we pour our hearts into making it
                  absolutely unforgettable.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground rounded-full px-8 hover:opacity-90 transition-all duration-300"
                >
                  View Our Work
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 border-primary/30 hover:bg-primary/5 transition-all duration-300"
                >
                  Check Availability
                </Button>
              </div>
            </div>

            <div className="animate-slide-right relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200"
                  alt="Ember & Oak Events team planning an elegant wedding event"
                  fallbackKeyword="wedding event planning team"
                  className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-xl p-5 border border-border/50 animate-fade-in">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold tracking-tight">500+</p>
                    <p className="text-sm text-muted-foreground">
                      Events Planned
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-card rounded-2xl shadow-xl p-4 border border-border/50 animate-fade-in">
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-accent fill-accent"
                    />
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  5-Star Rated
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: Stats Section ─── */}
      <section aria-label="Our achievements" className="py-20 md:py-28 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              By The Numbers
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-3">
              A Track Record of{' '}
              <span className="text-primary italic">Excellence</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto leading-relaxed">
              Every number tells a story of dedication, creativity, and
              unforgettable moments crafted with care.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                number: '10+',
                label: 'Years of Experience',
                icon: Calendar,
                delay: '0s',
              },
              {
                number: '500+',
                label: 'Events Coordinated',
                icon: Sparkles,
                delay: '0.1s',
              },
              {
                number: '5.0',
                label: 'Average Rating',
                icon: Star,
                delay: '0.2s',
              },
              {
                number: '50+',
                label: 'Trusted Vendors',
                icon: Users,
                delay: '0.3s',
              },
            ].map((stat, index) => (
              <Card
                key={index}
                className="rounded-2xl border border-border/50 bg-card shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center animate-slide-up"
                style={{ animationDelay: stat.delay }}
              >
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                    <stat.icon className="w-7 h-7 text-primary" />
                  </div>
                  <p className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                    {stat.number}
                  </p>
                  <p className="text-sm text-muted-foreground mt-2 font-medium">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: Our Team / Mission ─── */}
      <section aria-label="Our mission and team" className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 animate-slide-left">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=600"
                    alt="Elegant wedding table setting with floral centerpiece"
                    fallbackKeyword="wedding table decor"
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg mt-8">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=600"
                    alt="Celebration party with elegant decorations"
                    fallbackKeyword="celebration party decorations"
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1478146059778-26028b07395a?auto=format&fit=crop&q=80&w=600"
                    alt="Corporate event with professional setup"
                    fallbackKeyword="corporate event setup"
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg mt-8">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=600"
                    alt="Wedding floral arrangement bouquet"
                    fallbackKeyword="wedding floral bouquet"
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 animate-slide-right">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                Our Mission
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-3 mb-6">
                Dedicated to Creating{' '}
                <span className="text-primary italic">Magic</span>
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-6">
                At {'Ember & Oak Events'}, our mission is simple yet profound: to
                transform your vision into a breathtaking reality while ensuring
                every moment of the journey is as enjoyable as the celebration
                itself. We believe that planning should be a joy, not a burden.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                Our team of seasoned planners, designers, and coordinators
                brings together decades of combined experience in luxury
                hospitality, floral design, and event production. Every member
                of the {'Ember & Oak Events'} family shares an unwavering
                commitment to excellence and a genuine love for what we do.
              </p>

              <div className="space-y-4">
                {[
                  'Certified Wedding & Event Planners',
                  'Exclusive Savannah Venue Partnerships',
                  'Personalized Design Consultations',
                  'Day-of Emergency Coordination Kit',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Award className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <span className="text-foreground font-medium text-sm">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 5: Values / Why Choose Us ─── */}
      <section
        aria-label="Why choose us"
        className="py-20 md:py-28 bg-muted/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-3">
              The {'Ember & Oak Events'}{' '}
              <span className="text-primary italic">Difference</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto leading-relaxed">
              We don&apos;t just plan events — we create experiences rooted in
              trust, creativity, and an obsessive attention to detail.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Heart,
                title: 'Passion-Driven Design',
                description:
                  'Every detail is thoughtfully curated to reflect your unique story. We pour our hearts into creating designs that feel authentically you.',
                delay: '0s',
              },
              {
                icon: Shield,
                title: 'Stress-Free Planning',
                description:
                  'From initial consultation to final farewell, we handle every logistic so you can be fully present and enjoy every magical moment.',
                delay: '0.1s',
              },
              {
                icon: Globe,
                title: 'Trusted Vendor Network',
                description:
                  'Our curated network of 50+ premium vendors in Savannah ensures the highest quality for catering, florals, photography, and more.',
                delay: '0.2s',
              },
              {
                icon: Target,
                title: 'Tailored Packages',
                description:
                  'From Day-of Coordination to Full Planning, our flexible packages are designed to meet your needs and budget without compromising on luxury.',
                delay: '0.3s',
              },
            ].map((value, index) => (
              <Card
                key={index}
                className="rounded-2xl border border-border/50 bg-card shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-slide-up group"
                style={{ animationDelay: value.delay }}
              >
                <CardContent className="p-7">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold tracking-tight mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 6: Our Process ─── */}
      <section aria-label="Our planning process" className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              How We Work
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-3">
              Our Planning{' '}
              <span className="text-primary italic">Process</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto leading-relaxed">
              A seamless journey from dream to reality, guided by expertise and
              genuine care at every step.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description:
                  'We begin with a complimentary consultation to understand your vision, style, and budget. This is where the magic starts.',
                delay: '0s',
              },
              {
                step: '02',
                title: 'Design',
                description:
                  'Our creative team develops a custom design concept, complete with mood boards, color palettes, and detailed floor plans.',
                delay: '0.15s',
              },
              {
                step: '03',
                title: 'Coordinate',
                description:
                  'We manage every vendor, timeline, and logistic with precision. You relax while we handle the details behind the scenes.',
                delay: '0.3s',
              },
              {
                step: '04',
                title: 'Celebrate',
                description:
                  'On the big day, our team is on-site ensuring flawless execution. Your only job? Enjoy every unforgettable moment.',
                delay: '0.45s',
              },
            ].map((process, index) => (
              <div
                key={index}
                className="text-center animate-slide-up"
                style={{ animationDelay: process.delay }}
              >
                <div className="relative mx-auto mb-6">
                  <span className="text-6xl font-bold text-primary/10 tracking-tighter">
                    {process.step}
                  </span>
                </div>
                <h3 className="text-xl font-bold tracking-tight mb-3">
                  {process.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 7: GEO Paragraph + CTA ─── */}
      <section
        aria-label="Location and contact"
        className="py-20 md:py-28 bg-muted/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <p className="geo-paragraph text-muted-foreground leading-relaxed mb-12 text-base">
              {'Ember & Oak Events'} is proudly based in {'Savannah'},{' '}
              {'GA'}, one of the most romantic and historically rich
              cities in the American South. Known for its cobblestone streets,
              majestic live oaks draped in Spanish moss, and stunning antebellum
              architecture, {'Savannah'} provides an unparalleled backdrop for
              weddings, celebrations, and corporate events. The city&apos;s
              vibrant culinary scene, world-class venues, and warm Southern
              hospitality make it one of the top event destinations in the
              Southeast, attracting couples and planners from across the country.
            </p>

            <Separator className="mb-12 max-w-xs mx-auto" />

            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              Ready to Begin?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-3 mb-4">
              Let&apos;s Plan Something{' '}
              <span className="text-primary italic">Unforgettable</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto mb-8">
              Your dream celebration is just a conversation away. Reach out to
              {'Ember & Oak Events'} today and let&apos;s create something truly
              extraordinary together.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground rounded-full px-10 hover:opacity-90 transition-all duration-300 shadow-lg"
              >
                Check Availability
                <Calendar className="w-4 h-4 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-10 border-primary/30 hover:bg-primary/5 transition-all duration-300"
              >
                <Phone className="w-4 h-4 mr-2" />
                {'(912) 555-0188'}
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>{'412 Bull St, Savannah, GA'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>{'hello@emberoakevents.com'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
