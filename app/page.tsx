import { Metadata } from 'next'
import { ArrowRight, Check, Star, Phone, Mail, MapPin, Clock, Quote, Shield, Award, Users, Calendar, Heart, Sparkles, Zap, Target, ChevronRight, Globe, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import { Separator } from '@/components/ui/separator'
import { ImageWithFallback } from '@/components/ui/image-with-fallback'

export const metadata: Metadata = {
  title: 'Ember & Oak Events | Full-Service Wedding & Event Planning in Savannah, GA',
  description: 'Ember & Oak Events offers luxury wedding and event planning in Savannah, Georgia. Full-service coordination, elegant design, and stress-free celebrations.',
  openGraph: {
    title: 'Ember & Oak Events | Full-Service Wedding & Event Planning in Savannah, GA',
    description: 'Ember & Oak Events offers luxury wedding and event planning in Savannah, Georgia. Full-service coordination, elegant design, and stress-free celebrations.',
    type: 'website',
    url: 'https://emberoakevents.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ember & Oak Events | Full-Service Wedding & Event Planning in Savannah, GA',
    description: 'Ember & Oak Events offers luxury wedding and event planning in Savannah, Georgia. Full-service coordination, elegant design, and stress-free celebrations.',
  },
}

const faqData = [
  {
    question: 'What areas does Ember & Oak Events serve for event planning?',
    answer: 'We proudly serve Savannah, the Georgia coast, Hilton Head Island, and the greater Lowcountry region. We also travel for destination weddings and events throughout the Southeast.',
  },
  {
    question: 'How far in advance should I book my wedding planner?',
    answer: 'We recommend booking 12-18 months in advance for full planning services, and at least 6-8 months for partial planning. Day-of coordination can sometimes be arranged with as little as 3 months notice, depending on availability.',
  },
  {
    question: 'What is included in your Full Planning package?',
    answer: 'Our Full Planning package ($8,000+) includes unlimited consultations, venue selection assistance, complete vendor management, design and styling, timeline creation, budget management, rehearsal coordination, and full day-of execution with our lead planner and assistant.',
  },
  {
    question: 'Do you work with a preferred vendor network?',
    answer: 'Yes! We have cultivated relationships with over 50 trusted vendors in the Savannah area, including florists, photographers, caterers, DJs, and rental companies. We are happy to recommend vendors that match your style and budget.',
  },
  {
    question: 'Can you plan corporate events and celebrations beyond weddings?',
    answer: 'Absolutely. We plan corporate galas, fundraisers, milestone birthdays, anniversary celebrations, rehearsal dinners, and more. Our expertise extends to any event where elegant design and seamless execution matter.',
  },
]

export default function HomePage() {
  return (
    <main>
      {/* Page-level JSON-LD */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Ember & Oak Events — Full-Service Wedding & Event Planning',
            description: 'Ember & Oak Events offers luxury wedding and event planning in Savannah, Georgia. Full-service coordination, elegant design, and stress-free celebrations.',
            url: 'https://emberoakevents.com',
            speakable: {
              '@type': 'SpeakableSpecification',
              cssSelector: ['.geo-paragraph', 'h1'],
            },
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
              url: 'https://emberoakevents.com',
              openingHoursSpecification: {},
            },
          }),
        }}
      />

      {/* FAQ JSON-LD */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqData.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      {/* ===================== HERO SECTION ===================== */}
      <section aria-label="Hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1920)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#2C1810]/80 via-[#4A3020]/70 to-[#2C1810]/80" />
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white/90 mb-8">
              <Sparkles className="w-4 h-4 text-accent" />
              {'Unforgettable Events, Effortlessly Planned'}
            </span>
          </div>

          <h1 className="animate-slide-up text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight whitespace-pre-line mt-4 leading-tight" style={{ animationDelay: '0.1s' }}>
            {'Unforgettable Events,\nEffortlessly Planned'}
          </h1>

          <p className="animate-slide-up text-lg md:text-xl text-white/80 max-w-2xl mx-auto mt-6 leading-relaxed" style={{ animationDelay: '0.2s' }}>
            Weddings, corporate events, and celebrations. Full-service planning in historic Savannah and the Georgia coast.
          </p>

          <div className="animate-slide-up flex flex-col sm:flex-row items-center justify-center gap-4 mt-10" style={{ animationDelay: '0.3s' }}>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              View Our Work
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 px-8 py-6 text-base rounded-full backdrop-blur-sm transition-all duration-300">
              Check Availability
              <Calendar className="ml-2 w-5 h-5" />
            </Button>
          </div>

          <div className="animate-slide-up flex items-center justify-center gap-2 mt-8 text-white/60 text-sm" style={{ animationDelay: '0.4s' }}>
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-accent/30 border-2 border-white/20 backdrop-blur-sm" />
              ))}
            </div>
            <span className="ml-2">Trusted by 200+ couples in Savannah</span>
          </div>
        </div>

        {/* Decorative scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1">
            <div className="w-1.5 h-3 rounded-full bg-white/50 animate-pulse" />
          </div>
        </div>
      </section>

      {/* ===================== STATS / TRUST BAR ===================== */}
      <section aria-label="Trust statistics" className="relative z-10 -mt-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="animate-fade-in bg-card rounded-2xl shadow-xl border border-border/50 p-8 md:p-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
              {[
                { number: '8+', label: 'Years of Experience', icon: Award },
                { number: '200+', label: 'Events Planned', icon: Calendar },
                { number: '50+', label: 'Trusted Vendors', icon: Users },
                { number: '5.0', label: 'Average Rating', icon: Star },
              ].map((stat, i) => (
                <div key={i} className="text-center group">
                  <div className="flex justify-center mb-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <stat.icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">{stat.number}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== SERVICES SECTION ===================== */}
      <section aria-label="Our services" className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">What We Offer</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mt-3">
              Full-Service Event Planning
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4 leading-relaxed">
              From intimate gatherings to grand celebrations, {'Ember & Oak Events'} brings your vision to life with meticulous attention to every detail.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Heart,
                title: 'Wedding Planning',
                description: 'From proposal to "I do," we craft every moment of your dream wedding with elegance and precision in Savannah\'s most stunning venues.',
              },
              {
                icon: Zap,
                title: 'Corporate Events',
                description: 'Elevate your brand with impeccably planned corporate galas, product launches, team retreats, and networking events that leave lasting impressions.',
              },
              {
                icon: Sparkles,
                title: 'Milestone Celebrations',
                description: 'Birthdays, anniversaries, and special occasions deserve extraordinary moments. We design celebrations as unique as your story.',
              },
              {
                icon: Target,
                title: 'Design & Styling',
                description: 'Our creative team transforms spaces with bespoke floral arrangements, lighting design, tablescapes, and curated décor that captivates.',
              },
              {
                icon: Shield,
                title: 'Vendor Management',
                description: 'Leverage our trusted network of 50+ premium vendors. We handle all contracts, communications, and logistics seamlessly on your behalf.',
              },
              {
                icon: Globe,
                title: 'Destination Events',
                description: 'Planning from afar? We specialize in destination events across the Georgia coast, Hilton Head, and throughout the Southeast.',
              },
            ].map((service, i) => (
              <Card
                key={i}
                className="animate-slide-up rounded-2xl border border-border/50 bg-card shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold tracking-tight">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed text-sm">
                    {service.description}
                  </CardDescription>
                  <div className="mt-4 flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all duration-300">
                    Learn More <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== ABOUT / STORY SECTION ===================== */}
      <section aria-label="About us" className="py-20 md:py-28 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-slide-left">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mt-3">
                Where Elegance Meets Effortless Planning
              </h2>
              <p className="text-muted-foreground leading-relaxed mt-6">
                {'Ember & Oak Events'} was born from a passion for creating extraordinary moments in one of America&apos;s most beautiful cities. Founded in Savannah&apos;s historic district, we believe every celebration deserves the same care and artistry that defines this enchanting city — from its cobblestone streets to its moss-draped squares.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Our team combines Southern hospitality with world-class event design. We handle every detail — from sourcing the perfect venue to coordinating the final send-off — so you can be fully present for the moments that matter most. Whether it&apos;s an intimate garden wedding or a grand ballroom gala, we pour our hearts into making your vision a reality.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                With deep roots in the Savannah community and relationships with the region&apos;s finest vendors, {'Ember & Oak Events'} delivers a planning experience that is as seamless as it is unforgettable.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <a href="/about" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300">
                  Learn More About Us <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="animate-slide-up relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800"
                  alt="Elegant wedding reception setup by Ember & Oak Events in Savannah"
                  className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                  fallbackKeyword="elegant wedding reception savannah"
                />
              </div>
              {/* Decorative accent card */}
              <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-5 shadow-xl border border-border/50 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground">Best of Savannah</div>
                    <div className="text-sm text-muted-foreground">Event Planner 2026</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== GALLERY SECTION ===================== */}
      <section aria-label="Event gallery" className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Our Portfolio</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mt-3">
              Moments We&apos;ve Created
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4 leading-relaxed">
              A glimpse into the weddings, celebrations, and events we&apos;ve had the honor of bringing to life.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=600', keyword: 'wedding ceremony outdoor', label: 'Wedding', tall: true },
              { src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=600', keyword: 'celebration party decor', label: 'Celebration' },
              { src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=600', keyword: 'corporate event gala', label: 'Corporate' },
              { src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=600', keyword: 'wedding floral arrangement', label: 'Wedding' },
              { src: 'https://images.unsplash.com/photo-1478146059778-26028b07395a?auto=format&fit=crop&q=80&w=600', keyword: 'wedding reception table', label: 'Wedding', tall: true },
              { src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=600', keyword: 'party celebration lights', label: 'Celebration' },
            ].map((img, i) => (
              <div
                key={i}
                className={`animate-slide-up relative rounded-2xl overflow-hidden group cursor-pointer ${img.tall ? 'row-span-2' : ''}`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <ImageWithFallback
                  src={img.src}
                  alt={`${img.label} event by Ember & Oak Events`}
                  className={`w-full ${img.tall ? 'h-full min-h-[400px]' : 'h-[250px] md:h-[280px]'} object-cover group-hover:scale-110 transition-transform duration-700`}
                  fallbackKeyword={img.keyword}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
                  <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30">{img.label}</Badge>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in">
            <Button variant="outline" size="lg" className="rounded-full px-8 border-primary/30 text-primary hover:bg-primary/5">
              View Full Gallery <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* ===================== PACKAGES SECTION ===================== */}
      <section aria-label="Planning packages" className="py-20 md:py-28 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Our Packages</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mt-3">
              Planning Tailored to You
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4 leading-relaxed">
              Choose the level of support that fits your vision. Every package includes our signature attention to detail and Savannah expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Day-of Coordination',
                price: '$1,800',
                description: 'Perfect for couples who love planning but want a professional to execute flawlessly on the big day.',
                features: [
                  'Unlimited email support (final 8 weeks)',
                  'Detailed timeline creation',
                  'Vendor confirmation & management',
                  'Rehearsal coordination',
                  'Full day-of execution (up to 10 hours)',
                  'Setup & breakdown oversight',
                ],
                popular: false,
              },
              {
                name: 'Partial Planning',
                price: '$4,500',
                description: 'Ideal for couples who want guidance on key decisions while handling some details independently.',
                features: [
                  'Everything in Day-of Coordination',
                  'Vendor recommendations & booking assistance',
                  'Design & styling consultation',
                  'Budget management',
                  'Monthly planning meetings',
                  'Lead planner + assistant on event day',
                  'Guest management support',
                ],
                popular: true,
              },
              {
                name: 'Full Planning',
                price: '$8,000+',
                description: 'The ultimate stress-free experience. We handle every detail from start to finish so you can simply enjoy.',
                features: [
                  'Everything in Partial Planning',
                  'Venue selection & site visits',
                  'Complete vendor sourcing & management',
                  'Custom design concept & mood boards',
                  'Invitation & stationery guidance',
                  'Welcome event & farewell brunch planning',
                  'Unlimited consultations',
                  'Priority vendor access',
                ],
                popular: false,
              },
            ].map((pkg, i) => (
              <Card
                key={i}
                className={`animate-slide-up rounded-2xl border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative ${
                  pkg.popular
                    ? 'border-primary shadow-lg scale-[1.02]'
                    : 'border-border/50 shadow-sm'
                }`}
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1 text-xs uppercase tracking-wider shadow-md">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4 pt-8">
                  <CardTitle className="text-2xl font-bold tracking-tight">{pkg.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-foreground">{pkg.price}</span>
                  </div>
                  <CardDescription className="mt-3 leading-relaxed">{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Separator className="mb-6" />
                  <ul className="space-y-3">
                    {pkg.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm">
                        <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full mt-8 rounded-full py-5 transition-all duration-300 ${
                      pkg.popular
                        ? 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-md'
                        : 'bg-muted hover:bg-muted/80 text-foreground'
                    }`}
                  >
                    Check Availability
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== VENDOR NETWORK ===================== */}
      <section aria-label="Vendor network" className="py-16 md:py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Trusted Partners</span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mt-3">
              Our Curated Vendor Network
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mt-3">
              We partner with Savannah&apos;s finest professionals to ensure every aspect of your event exceeds expectations.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-slide-up">
            {[
              { label: 'Premium Florists', count: '12+' },
              { label: 'Photographers', count: '8+' },
              { label: 'Caterers & Bakers', count: '15+' },
              { label: 'Venues & Rentals', count: '20+' },
            ].map((vendor, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-muted/30 border border-border/50 hover:shadow-md transition-all duration-300">
                <div className="text-2xl font-bold text-primary">{vendor.count}</div>
                <div className="text-sm text-muted-foreground mt-1">{vendor.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== TESTIMONIALS SECTION ===================== */}
      <section aria-label="Client testimonials" className="py-20 md:py-28 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Love Letters</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mt-3">
              Words From Our Couples
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4 leading-relaxed">
              The greatest compliment is the trust our clients place in us to create their most cherished memories.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: 'Working with Ember & Oak Events was the best decision we made for our wedding. They transformed the Savannah Historic District venue into something out of a fairy tale. Every single detail was perfect.',
                name: 'Sarah & James Mitchell',
                role: 'Spring Wedding, Forsyth Park',
                rating: 5,
              },
              {
                quote: 'From our first consultation to the last dance, the team was incredible. They managed 150 guests, 12 vendors, and a surprise thunderstorm — all without breaking a sweat. Truly stress-free planning.',
                name: 'Amanda & David Chen',
                role: 'Fall Wedding, Tybee Island',
                rating: 5,
              },
              {
                quote: 'We hired them for our corporate gala and were blown away. The design was sophisticated, the timeline was flawless, and our guests are still talking about it months later. Already planning next year!',
                name: 'Rebecca Thornton',
                role: 'Annual Corporate Gala',
                rating: 5,
              },
            ].map((testimonial, i) => (
              <Card
                key={i}
                className="animate-slide-up rounded-2xl border border-border/50 bg-card shadow-sm hover:shadow-xl transition-all duration-300"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <CardContent className="pt-8 pb-6 px-6">
                  <div className="flex items-center gap-1 mb-4">
                    <Quote className="w-8 h-8 text-primary/30" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed italic text-sm">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-0.5 mt-5">
                    {Array.from({ length: testimonial.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <Separator className="my-4" />
                  <div>
                    <div className="font-semibold text-foreground text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== LOGATION / MAP SECTION ===================== */}
      <section aria-label="Our location" className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Visit Us</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mt-3">
              Located in the Heart of Savannah
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4 leading-relaxed">
              Our studio is nestled in Savannah&apos;s historic district. Schedule a consultation and let&apos;s start planning your dream event.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div className="animate-slide-left space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Address</h3>
                  <p className="text-muted-foreground mt-1">{'412 Bull St, Savannah, GA'}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Studio Hours</h3>
                  <p className="text-muted-foreground mt-1">{'Mon–Fri: 9:00 AM – 5:00 PM'}</p>
                  <p className="text-sm text-muted-foreground mt-1">Consultations available by appointment</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Contact</h3>
                  <p className="text-muted-foreground mt-1">{'(912) 555-0188'}</p>
                  <p className="text-muted-foreground">{'hello@emberoakevents.com'}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Parking</h3>
                  <p className="text-muted-foreground mt-1">Free street parking available on Bull Street. Metered parking in nearby Oglethorpe Square garage.</p>
                </div>
              </div>
            </div>

            <div className="animate-slide-up">
              <div className="relative w-full h-[450px] overflow-hidden rounded-2xl border border-border/50 shadow-sm">
                <iframe
                  width="100%"
                  height="100%"
                  style={{ border: 0, height: 'calc(100% + 40px)', width: '100%' }}
                  src={`https://www.openstreetmap.org/export/embed.html?bbox=${-81.0912 - 0.01}%2C${32.0809 - 0.01}%2C${-81.0912 + 0.01}%2C${32.0809 + 0.01}&layer=mapnik&marker=32.0809%2C-81.0912`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FAQ SECTION ===================== */}
      <section aria-label="Frequently asked questions" className="py-20 md:py-28 bg-muted/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Common Questions</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mt-3">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mt-4 leading-relaxed">
              Everything you need to know about working with {'Ember & Oak Events'}.
            </p>
          </div>

          <div className="animate-slide-up">
            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="rounded-2xl border border-border/50 bg-card px-6 shadow-sm data-[state=open]:shadow-md transition-shadow duration-300"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary transition-colors py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* ===================== BOTTOM CTA SECTION ===================== */}
      <section aria-label="Call to action" className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2C1810] via-[#4A3020] to-[#2C1810]" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center opacity-10" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <Sparkles className="w-10 h-10 text-accent mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Let&apos;s Plan Something Unforgettable
            </h2>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mt-6 leading-relaxed">
              Your dream event is closer than you think. Schedule a complimentary consultation with {'Ember & Oak Events'} and let&apos;s bring your vision to life in beautiful Savannah.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-10 py-6 text-base rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-glow">
                Check Availability
                <Calendar className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-base rounded-full transition-all duration-300">
                Call {'(912) 555-0188'}
                <Phone className="ml-2 w-5 h-5" />
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 mt-12 text-white/70 text-sm">
              {[
                'Complimentary Consultation',
                'No Obligation',
                'Trusted by 200+ Couples',
                'Award-Winning Team',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-accent" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== GEO PARAGRAPH ===================== */}
      <section aria-label="About our location" className="py-12 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="geo-paragraph text-sm text-muted-foreground leading-relaxed">
            {'Ember & Oak Events'} is a full-service wedding and event planning company based in {'Savannah'}, {'GA'}, serving the greater Savannah metropolitan area, the Georgia coast, and the Lowcountry region. Savannah is renowned for its stunning historic architecture, moss-draped squares, and Southern charm, making it one of the most sought-after wedding and event destinations in the Southeast United States. Our team specializes in luxury event design and stress-free coordination, leveraging deep local expertise and a curated network of over 50 premium vendors to create unforgettable celebrations in this iconic coastal city.
          </p>
        </div>
      </section>
    </main>
  )
}
