import { Metadata } from 'next'
import { ImageWithFallback } from '@/components/ui/image-with-fallback'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import {
  ArrowRight,
  Check,
  Star,
  Phone,
  Mail,
  Heart,
  Sparkles,
  Zap,
  Target,
  Users,
  Calendar,
  Shield,
  Award,
  Clock,
  Globe,
  ChevronRight,
  MapPin,
  TrendingUp,
  Eye,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Ember & Oak Events — Wedding & Event Planning Services in Savannah, GA',
  description:
    'Explore luxury wedding and event planning services by Ember & Oak Events in Savannah, GA. Day-of coordination, partial planning, and full-service packages.',
  openGraph: {
    title: 'Ember & Oak Events — Wedding & Event Planning Services',
    description:
      'Full-service wedding and event planning in Savannah, GA. Luxury design and stress-free coordination from Ember & Oak Events.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ember & Oak Events — Services',
    description:
      'Luxury wedding and event planning services in Savannah, GA. Discover our packages and let us plan something unforgettable.',
  },
}

const services = [
  {
    icon: Heart,
    name: 'Wedding Planning',
    description:
      'From intimate elopements to grand celebrations, we craft every detail of your dream wedding. Venue selection, vendor coordination, design, and flawless execution — all handled with grace.',
    price: 'From $4,500',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800',
    fallback: 'wedding planning',
    features: ['Venue scouting & booking', 'Custom design & décor', 'Vendor management', 'Timeline creation', 'Rehearsal coordination'],
  },
  {
    icon: Sparkles,
    name: 'Day-of Coordination',
    description:
      'You\'ve done the planning — now let us handle the execution. Our day-of coordination ensures your wedding day unfolds seamlessly while you savor every moment.',
    price: '$1,800',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800',
    fallback: 'day-of wedding coordination',
    features: ['Detailed timeline management', 'Vendor confirmations', 'On-site coordination', 'Emergency kit on hand', 'Setup & breakdown oversight'],
  },
  {
    icon: Target,
    name: 'Full-Service Planning',
    description:
      'The ultimate luxury experience. From the first concept sketch to the last dance, we manage every aspect of your event with meticulous attention and creative vision.',
    price: '$8,000+',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=800',
    fallback: 'luxury event planning',
    features: ['Complete design concept', 'Budget management', 'All vendor sourcing', 'Guest experience design', 'Post-event wrap-up'],
  },
  {
    icon: Users,
    name: 'Corporate Events',
    description:
      'Elevate your brand with sophisticated corporate gatherings, galas, product launches, and team celebrations that leave lasting impressions on every attendee.',
    price: 'Custom Quote',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800',
    fallback: 'corporate event planning',
    features: ['Brand-aligned design', 'AV & tech coordination', 'Catering management', 'Guest registration', 'Post-event analytics'],
  },
  {
    icon: Calendar,
    name: 'Social Celebrations',
    description:
      'Milestone birthdays, anniversaries, baby showers, and engagement parties — we create bespoke celebrations that honor life\'s most meaningful moments.',
    price: 'From $2,500',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=800',
    fallback: 'celebration party planning',
    features: ['Theme development', 'Custom invitations', 'Entertainment booking', 'Floral & décor design', 'Photography coordination'],
  },
  {
    icon: Globe,
    name: 'Destination Events',
    description:
      'Dreaming of a destination celebration? We specialize in planning unforgettable events across the Southeast, with deep roots in Savannah\'s most stunning venues.',
    price: 'Custom Quote',
    image: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&q=80&w=800',
    fallback: 'destination wedding Savannah',
    features: ['Travel logistics', 'Welcome events', 'Local vendor curation', 'Guest accommodations', 'Multi-day itineraries'],
  },
]

const whyChooseUs = [
  {
    icon: Award,
    title: 'Award-Winning Design',
    description: 'Our events have been featured in top publications and recognized for exceptional design and creativity.',
  },
  {
    icon: Shield,
    title: 'Stress-Free Experience',
    description: 'We handle every detail so you can be fully present. Our proven process eliminates overwhelm and uncertainty.',
  },
  {
    icon: Users,
    title: 'Trusted Vendor Network',
    description: 'Access our curated network of Savannah\'s finest caterers, florists, photographers, and entertainers.',
  },
  {
    icon: TrendingUp,
    title: '200+ Events Planned',
    description: 'With hundreds of successful events under our belt, we bring unmatched experience and expertise to every celebration.',
  },
  {
    icon: Eye,
    title: 'Exquisite Attention to Detail',
    description: 'From hand-calligraphed place cards to perfectly timed lighting cues, no detail is too small for our team.',
  },
  {
    icon: Heart,
    title: 'Personalized Approach',
    description: 'Every event is as unique as you are. We listen deeply and design experiences that reflect your personality and vision.',
  },
]

const packages = [
  {
    name: 'Day-of Coordination',
    price: '$1,800',
    description: 'Perfect for couples who love planning but want a professional to execute their vision flawlessly on the big day.',
    popular: false,
    inclusions: [
      'Unlimited email support (final 6 weeks)',
      'Vendor confirmation & timeline distribution',
      'Ceremony & reception coordination',
      'Up to 10 hours of on-site coverage',
      'Lead coordinator + assistant',
      'Emergency kit & supplies',
    ],
  },
  {
    name: 'Partial Planning',
    price: '$4,500',
    description: 'Ideal for those who want expert guidance on key decisions while maintaining creative control over their event.',
    popular: true,
    inclusions: [
      'Everything in Day-of Coordination',
      'Vendor recommendations & booking assistance',
      'Design concept & mood board creation',
      'Budget tracking & management',
      'Monthly planning meetings',
      'Rehearsal coordination',
      'Up to 12 hours on-site coverage',
    ],
  },
  {
    name: 'Full Planning & Design',
    price: '$8,000+',
    description: 'The complete luxury experience. We manage every element from the first vision to the final farewell.',
    popular: false,
    inclusions: [
      'Everything in Partial Planning',
      'Complete vendor sourcing & management',
      'Custom design & styling',
      'Invitation suite guidance',
      'Guest experience curation',
      'Welcome event coordination',
      'Unlimited planning meetings',
      'Up to 14 hours on-site coverage',
      'Post-event wrap-up & returns',
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Ember & Oak Events — Wedding & Event Planning Services',
            provider: {
              '@type': 'LocalBusiness',
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
              openingHoursSpecification: {},
            },
            areaServed: {
              '@type': 'City',
              name: 'Savannah',
            },
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Event Planning Services',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Day-of Coordination',
                    description: 'Professional on-site coordination for your wedding or event day.',
                  },
                  price: '1800',
                  priceCurrency: 'USD',
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Partial Planning',
                    description: 'Expert guidance on key decisions with design concept and vendor assistance.',
                  },
                  price: '4500',
                  priceCurrency: 'USD',
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Full Planning & Design',
                    description: 'Complete luxury event planning from concept to execution.',
                  },
                  price: '8000',
                  priceCurrency: 'USD',
                },
              ],
            },
            speakable: {
              '@type': 'SpeakableSpecification',
              cssSelector: ['.geo-paragraph', 'h1'],
            },
          }),
        }}
      />

      <main>
        {/* ===== HERO SECTION ===== */}
        <section aria-label="Services Hero" className="relative min-h-[80vh] flex items-center justify-center bg-hero overflow-hidden">
          <div className="absolute inset-0">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1478146059778-26028b07395a?auto=format&fit=crop&q=80&w=1920"
              alt="Elegant event table setting"
              fallbackKeyword="luxury wedding table setting"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
          </div>

          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-32 h-32 border border-white/10 rounded-full animate-fade-in" style={{ animationDelay: '0.8s' }} />
          <div className="absolute bottom-32 right-16 w-20 h-20 border border-white/10 rounded-full animate-fade-in" style={{ animationDelay: '1s' }} />

          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <Badge className="animate-fade-in mb-6 rounded-full bg-white/10 backdrop-blur-sm border-white/20 text-white px-6 py-2 text-xs font-semibold uppercase tracking-[0.2em]">
              <Sparkles className="w-3.5 h-3.5 mr-2" />
              Unforgettable Events, Effortlessly Planned
            </Badge>

            <h1 className="animate-slide-up text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
              Our Services
            </h1>

            <p className="animate-slide-up text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed" style={{ animationDelay: '0.2s' }}>
              From intimate gatherings to grand celebrations, Ember & Oak Events brings your vision to life with luxury design, seamless coordination, and heartfelt attention to every detail.
            </p>

            <div className="animate-slide-up flex flex-col sm:flex-row gap-4 justify-center" style={{ animationDelay: '0.4s' }}>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-base font-semibold shadow-lg shadow-primary/25">
                <Calendar className="w-5 h-5 mr-2" />
                Check Availability
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 py-6 text-base font-semibold border-white/30 text-white hover:bg-white/10 backdrop-blur-sm">
                <Phone className="w-5 h-5 mr-2" />
                Call (912) 555-0188
              </Button>
            </div>

            {/* Stats Bar */}
            <div className="animate-fade-in mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8" style={{ animationDelay: '0.6s' }}>
              {[
                { value: '200+', label: 'Events Planned' },
                { value: '5★', label: 'Client Rating' },
                { value: '50+', label: 'Trusted Vendors' },
                { value: '8+', label: 'Years Experience' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs uppercase tracking-wider text-white/60 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SERVICES OVERVIEW ===== */}
        <section aria-label="Our Services" className="py-20 md:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">What We Offer</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mt-3 mb-4">
                Tailored Event Experiences
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                Every celebration deserves to be extraordinary. Explore our full range of services designed to make your event unforgettable.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <Card
                    key={index}
                    className="animate-slide-up group rounded-2xl border border-border/50 bg-card shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="relative h-52 overflow-hidden">
                      <ImageWithFallback
                        src={service.image}
                        alt={service.name}
                        fallbackKeyword={service.fallback}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <Badge className="absolute top-4 right-4 bg-primary/90 text-primary-foreground rounded-full text-xs font-semibold px-3 py-1">
                        {service.price}
                      </Badge>
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <CardTitle className="text-xl font-bold tracking-tight">{service.name}</CardTitle>
                      </div>
                      <CardDescription className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, fi) => (
                          <li key={fi} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Check className="w-4 h-4 text-primary flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button variant="outline" className="w-full rounded-full border-primary/30 text-primary hover:bg-primary/5 group/btn">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* ===== PACKAGES / PRICING ===== */}
        <section aria-label="Packages and Pricing" className="py-20 md:py-28 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Packages & Pricing</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mt-3 mb-4">
                Choose Your Perfect Package
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                Whether you need day-of support or a fully managed experience, Ember & Oak Events has a package crafted for you.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 items-stretch">
              {packages.map((pkg, index) => (
                <Card
                  key={index}
                  className={`animate-slide-up rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative ${
                    pkg.popular
                      ? 'border-2 border-primary shadow-lg shadow-primary/10 scale-[1.02]'
                      : 'border border-border/50 bg-card shadow-sm'
                  }`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {pkg.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-center py-2 text-xs font-semibold uppercase tracking-wider">
                      <Star className="w-3.5 h-3.5 inline mr-1" />
                      Most Popular
                    </div>
                  )}
                  <CardHeader className={`text-center ${pkg.popular ? 'pt-14' : 'pt-8'} pb-4`}>
                    <CardTitle className="text-2xl font-bold tracking-tight">{pkg.name}</CardTitle>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                    </div>
                    <CardDescription className="mt-3 text-muted-foreground leading-relaxed text-sm">
                      {pkg.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pb-8">
                    <Separator className="mb-6" />
                    <ul className="space-y-3 mb-8">
                      {pkg.inclusions.map((item, ii) => (
                        <li key={ii} className="flex items-start gap-3 text-sm">
                          <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-primary" />
                          </div>
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full rounded-full py-6 font-semibold ${
                        pkg.popular
                          ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25'
                          : 'bg-primary/10 text-primary hover:bg-primary/20'
                      }`}
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <p className="text-center text-sm text-muted-foreground mt-10 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              All packages are customizable. Contact us for a personalized quote tailored to your unique celebration.
            </p>
          </div>
        </section>

        {/* ===== WHY CHOOSE US ===== */}
        <section aria-label="Why Choose Us" className="py-20 md:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-slide-left">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Why Choose Us</span>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mt-3 mb-6">
                  Why Ember & Oak Events Is Savannah&apos;s Trusted Event Partner
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Planning an event should be joyful, not stressful. Our team combines creative vision with meticulous organization to deliver celebrations that exceed every expectation. With deep roots in Savannah&apos;s event community, we bring unparalleled local expertise and a passion for perfection.
                </p>

                <div className="grid sm:grid-cols-2 gap-6">
                  {whyChooseUs.map((item, index) => {
                    const Icon = item.icon
                    return (
                      <div key={index} className="flex gap-4 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="animate-slide-up relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800"
                    alt="Beautiful wedding reception by Ember & Oak Events"
                    fallbackKeyword="luxury wedding reception decor"
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                </div>
                {/* Floating testimonial card */}
                <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-xl border border-border/50 p-6 max-w-[280px] animate-fade-in" style={{ animationDelay: '0.6s' }}>
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground italic leading-relaxed">
                    &ldquo;They made our wedding absolutely magical. Every detail was perfection.&rdquo;
                  </p>
                  <p className="text-xs font-semibold text-foreground mt-2">— Sarah & James, 2026</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== PROCESS SECTION ===== */}
        <section aria-label="Our Process" className="py-20 md:py-28 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">How It Works</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mt-3 mb-4">
                Your Journey With Us
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                From first consultation to final farewell, here&apos;s how we bring your dream event to life.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  icon: Phone,
                  title: 'Discovery Call',
                  description: 'We start with a complimentary consultation to understand your vision, style, and budget.',
                },
                {
                  step: '02',
                  icon: Eye,
                  title: 'Design & Plan',
                  description: 'Our team creates a custom design concept, curates vendors, and builds your detailed timeline.',
                },
                {
                  step: '03',
                  icon: Zap,
                  title: 'Coordinate & Refine',
                  description: 'We manage all logistics, handle vendor communications, and fine-tune every detail.',
                },
                {
                  step: '04',
                  icon: Sparkles,
                  title: 'Celebrate',
                  description: 'On the big day, we handle everything so you can be fully present and enjoy every moment.',
                },
              ].map((item, index) => {
                const Icon = item.icon
                return (
                  <div
                    key={index}
                    className="animate-slide-up text-center relative"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    {index < 3 && (
                      <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary/30 to-transparent" />
                    )}
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 relative">
                      <Icon className="w-8 h-8 text-primary" />
                      <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center shadow-lg">
                        {item.step}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ===== VENDOR NETWORK ===== */}
        <section aria-label="Vendor Network" className="py-20 md:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Our Network</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mt-3 mb-4">
                Savannah&apos;s Finest Vendor Partners
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                We&apos;ve cultivated relationships with the best vendors in Savannah and the surrounding region to ensure every element of your event is exceptional.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {[
                { label: 'Venues', icon: MapPin, count: '15+' },
                { label: 'Caterers', icon: Zap, count: '12+' },
                { label: 'Florists', icon: Heart, count: '8+' },
                { label: 'Photographers', icon: Eye, count: '10+' },
                { label: 'Musicians', icon: Sparkles, count: '7+' },
                { label: 'Rentals', icon: Globe, count: '6+' },
              ].map((vendor, index) => {
                const Icon = vendor.icon
                return (
                  <div
                    key={index}
                    className="animate-fade-in text-center p-6 rounded-2xl border border-border/50 bg-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-foreground">{vendor.count}</div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{vendor.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ===== GEO PARAGRAPH ===== */}
        <section aria-label="About Our Location" className="py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="geo-paragraph text-muted-foreground leading-relaxed text-center animate-fade-in">
              Ember & Oak Events is proud to serve Savannah, GA, one of the most romantic and historically rich cities in the American South. Known for its cobblestone streets, moss-draped oaks, and stunning antebellum architecture, Savannah provides an unparalleled backdrop for weddings, corporate events, and milestone celebrations. Our deep knowledge of Savannah&apos;s premier venues, from waterfront estates to intimate garden courtyards, ensures every event captures the charm and elegance this beloved city is known for.
            </p>
          </div>
        </section>

        {/* ===== CTA SECTION ===== */}
        <section aria-label="Get Started" className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=1920"
              alt="Romantic wedding celebration"
              fallbackKeyword="romantic wedding celebration"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/70" />
            <div className="absolute inset-0 bg-primary/10" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="animate-fade-in">
              <Sparkles className="w-10 h-10 text-accent mx-auto mb-6" />
            </div>
            <h2 className="animate-slide-up text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
              Let&apos;s Plan Something Unforgettable
            </h2>
            <p className="animate-slide-up text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed" style={{ animationDelay: '0.15s' }}>
              Your dream event starts with a conversation. Reach out to Ember & Oak Events today and let&apos;s begin creating something truly extraordinary together.
            </p>

            <div className="animate-slide-up flex flex-col sm:flex-row gap-4 justify-center" style={{ animationDelay: '0.3s' }}>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-10 py-6 text-base font-semibold shadow-lg shadow-primary/25">
                <Calendar className="w-5 h-5 mr-2" />
                Check Availability
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-10 py-6 text-base font-semibold border-white/30 text-white hover:bg-white/10 backdrop-blur-sm">
                <Mail className="w-5 h-5 mr-2" />
                hello@emberoakevents.com
              </Button>
            </div>

            <div className="animate-fade-in mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-white/60 text-sm" style={{ animationDelay: '0.5s' }}>
              <span className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                (912) 555-0188
              </span>
              <span className="hidden sm:inline">·</span>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                412 Bull St, Savannah, GA
              </span>
              <span className="hidden sm:inline">·</span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Mon–Fri: 9:00 AM – 5:00 PM
              </span>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
