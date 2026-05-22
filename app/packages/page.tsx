import { Metadata } from 'next'
import { Check, ArrowRight, Star, Shield, Users, Heart, Sparkles, Zap, Calendar, Phone, Mail, Award, Clock, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { ImageWithFallback } from '@/components/ui/image-with-fallback'

export const metadata: Metadata = {
  title: 'Ember & Oak Events — Wedding & Event Planning Packages | Savannah, GA',
  description: 'Explore luxury wedding and event planning packages from Ember & Oak Events in Savannah, GA. Day-of coordination, partial planning, and full-service options.',
  openGraph: {
    title: 'Ember & Oak Events — Wedding & Event Planning Packages',
    description: 'Explore luxury wedding and event planning packages from Ember & Oak Events in Savannah, GA. Day-of coordination, partial planning, and full-service options.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ember & Oak Events — Wedding & Event Planning Packages',
    description: 'Explore luxury wedding and event planning packages from Ember & Oak Events in Savannah, GA. Day-of coordination, partial planning, and full-service options.',
  },
}

const packages = [
  {
    name: 'Day-of Coordination',
    subtitle: 'The Finishing Touch',
    price: '$1,800',
    priceNote: 'starting at',
    description: 'You\'ve done the planning — now let us bring it all together seamlessly on your big day. Perfect for the organized couple who wants a stress-free celebration.',
    features: [
      'Dedicated lead coordinator & assistant',
      'Unlimited email communication (60 days prior)',
      'Two pre-event planning meetings',
      'Full vendor confirmation & timeline creation',
      'Ceremony rehearsal direction',
      'Up to 10 hours of day-of coverage',
      'Setup & breakdown oversight',
      'Emergency kit & on-site problem solving',
      'Guest management & vendor coordination',
    ],
    icon: Calendar,
    popular: false,
    cta: 'Get Started',
  },
  {
    name: 'Partial Planning',
    subtitle: 'The Perfect Balance',
    price: '$4,500',
    priceNote: 'starting at',
    description: 'Ideal for couples who have started planning but need expert guidance to refine their vision and manage the details that matter most.',
    features: [
      'Everything in Day-of Coordination',
      'Curated vendor recommendations & booking assistance',
      'Budget creation & management',
      'Design concept & mood board development',
      'Monthly planning check-ins',
      'Venue walk-through & layout planning',
      'Stationery & invitation guidance',
      'RSVP tracking & guest list management',
      'Personalized planning timeline',
      'Up to 12 hours of day-of coverage',
    ],
    icon: Heart,
    popular: true,
    cta: 'Most Popular Choice',
  },
  {
    name: 'Full Planning & Design',
    subtitle: 'The Complete Experience',
    price: '$8,000+',
    priceNote: 'starting at',
    description: 'The ultimate luxury experience. From the moment you say "yes" to the last dance, we handle every detail so you can savor every moment.',
    features: [
      'Everything in Partial Planning',
      'Comprehensive event design & styling',
      'Full vendor sourcing, negotiation & management',
      'Custom floral & décor design collaboration',
      'Unlimited planning meetings & communication',
      'Welcome party & farewell brunch coordination',
      'Guest welcome bags & hospitality management',
      'Rental & linen sourcing',
      'Transportation & accommodation coordination',
      'Up to 14 hours of day-of coverage with full team',
      'Post-event vendor wrap-up & returns',
    ],
    icon: Sparkles,
    popular: false,
    cta: 'Plan My Dream Event',
  },
]

const addOns = [
  { name: 'Rehearsal Dinner Planning', price: '$800+', icon: Users },
  { name: 'Welcome Party Coordination', price: '$600+', icon: Star },
  { name: 'Farewell Brunch Planning', price: '$500+', icon: Clock },
  { name: 'Destination Event Travel', price: 'Custom', icon: Zap },
  { name: 'Corporate Event Add-on', price: '$1,200+', icon: Award },
  { name: 'Holiday & Milestone Celebrations', price: '$900+', icon: Heart },
]

const faqs = [
  {
    question: 'What\'s included in Day- of Coordination ? ',
    answer: 'Our Day-of Coordination package includes a dedicated lead coordinator and assistant for up to 10 hours on your event day. We begin working with you 60 days prior to finalize your timeline, confirm all vendors, and direct your rehearsal. On the day itself, we manage every detail from setup to breakdown so you can be fully present.',
  },
  {
    question: 'How far in advance should I book?',
    answer: 'We recommend booking 10–14 months in advance for Full Planning & Design, 6–10 months for Partial Planning, and at least 3–4 months for Day-of Coordination. Savannah is a popular wedding destination, and our calendar fills quickly — especially for peak season dates from March through June and September through November.',
  },
  {
    question: 'Can I customize a package to fit my needs?',
    answer: 'Absolutely. Every event is unique, and we love tailoring our services to match your vision and budget. During our complimentary consultation, we\'ll discuss your needs and create a custom proposal.You can also add any of our à la carte services to any package.',
  },
  {
    question: 'Do you work with specific vendors?',
    answer: 'We have a curated network of Savannah\'s finest vendors — from florists and caterers to photographers and live musicians.While we\'re happy to work with any vendor you\'ve already chosen, our trusted partners share our commitment to excellence and often offer preferred pricing for our clients.',
  },
  {
    question: 'What is your payment structure?',
    answer: 'We require a 30% non-refundable retainer to secure your date, with the remaining balance due in installments leading up to your event. Full Planning clients enjoy a flexible monthly payment plan. We accept checks, bank transfers, and all major credit cards.',
  },
  {
    question: 'Do you plan events outside of Savannah?',
    answer: 'Yes! While Savannah is our home base, we coordinate events throughout the Lowcountry, including Hilton Head, Charleston, and Tybee Island. Destination events beyond the region are available with our Destination Event Travel add-on, which covers travel logistics and on-site coordination.',
  },
  {
    question: 'What happens if I need to reschedule?',
    answer: 'Life happens, and we understand. Your retainer is transferable to a new date within 18 months, subject to our availability. We\'ll work with you and your vendors to make the transition as smooth as possible.Full cancellation policies are outlined in our service agreement.',
  },
]

const testimonials = [
  {
    name: 'Sarah & James',
    event: 'Forsyth Park Wedding',
    quote: 'From our very first meeting, the team at Ember & Oak Events understood exactly what we envisioned. Our wedding was absolutely flawless — every single detail was perfect.',
    rating: 5,
  },
  {
    name: 'The Morrison Family',
    event: '50th Anniversary Celebration',
    quote: 'We chose the Full Planning package and it was worth every penny. They transformed the venue into something out of a magazine. Our family is still talking about it months later.',
    rating: 5,
  },
  {
    name: 'Rachel & David',
    event: 'Historic District Wedding',
    quote: 'The Partial Planning package was perfect for us. We had our venue and photographer, but needed help pulling everything together. They made it seamless and stress-free.',
    rating: 5,
  },
]

export default function PackagesPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Ember & Oak Events — Wedding & Event Planning Packages',
            description: 'Explore luxury wedding and event planning packages from Ember & Oak Events in Savannah, GA.',
            speakable: {
              '@type': 'SpeakableSpecification',
              cssSelector: ['.geo-paragraph', 'h1'],
            },
            mainEntity: {
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
              url: 'emberoakevents.com',
              openingHoursSpecification: { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], "opens": "09:00", "closes": "17:00" },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '32.0809',
                longitude: '-81.0912',
              },
              makesOffer: [
                {
                  '@type': 'Offer',
                  name: 'Day-of Coordination',
                  description: 'Dedicated coordinator for your event day with vendor management, timeline creation, and up to 10 hours of coverage.',
                  price: '1800',
                  priceCurrency: 'USD',
                  priceSpecification: {
                    '@type': 'PriceSpecification',
                    price: '1800',
                    priceCurrency: 'USD',
                    minPrice: '1800',
                  },
                  seller: { '@type': 'LocalBusiness', name: 'Ember & Oak Events' },
                },
                {
                  '@type': 'Offer',
                  name: 'Partial Planning',
                  description: 'Expert guidance with vendor recommendations, budget management, design concepts, and up to 12 hours of day-of coverage.',
                  price: '4500',
                  priceCurrency: 'USD',
                  priceSpecification: {
                    '@type': 'PriceSpecification',
                    price: '4500',
                    priceCurrency: 'USD',
                    minPrice: '4500',
                  },
                  seller: { '@type': 'LocalBusiness', name: 'Ember & Oak Events' },
                },
                {
                  '@type': 'Offer',
                  name: 'Full Planning & Design',
                  description: 'Complete luxury event planning from engagement to last dance with unlimited communication, full vendor management, and custom design.',
                  price: '8000',
                  priceCurrency: 'USD',
                  priceSpecification: {
                    '@type': 'PriceSpecification',
                    price: '8000',
                    priceCurrency: 'USD',
                    minPrice: '8000',
                  },
                  seller: { '@type': 'LocalBusiness', name: 'Ember & Oak Events' },
                },
              ],
            },
          }),
        }}
      />

      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
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

      {/* Hero Section */}
      <section aria-label="Packages hero" className="relative min-h-[80vh] flex items-center justify-center bg-hero overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1920"
            alt="Elegant wedding reception with golden lighting in Savannah"
            fallbackKeyword="luxury wedding reception gold"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
          <Badge className="mb-6 rounded-full bg-primary/20 text-primary border-primary/30 px-5 py-2 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 mr-2" />
            Tailored Event Packages
          </Badge>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            Packages by{' '}
            <span className="text-primary">{'Ember & Oak Events'}</span>
          </h1>

          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Every celebration deserves a plan as unique as the people behind it. Choose the level of support that fits your vision — from day-of perfection to full-service luxury.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-base font-semibold shadow-lg shadow-primary/25">
              <Phone className="w-4 h-4 mr-2" />
              Book a Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 py-6 text-base font-semibold border-white/30 text-white hover:bg-white/10 backdrop-blur-sm">
              Compare Packages
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>

        {/* Decorative bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Stats Bar */}
      <section aria-label="Achievements" className="relative z-10 -mt-16 pb-8 px-4">
        <div className="max-w-5xl mx-auto animate-slide-up">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: '200+', label: 'Events Planned' },
              { value: '5 Star', label: 'Average Rating' },
              { value: '50+', label: 'Trusted Vendors' },
              { value: '8+ Years', label: 'Experience' },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-card/95 backdrop-blur-md rounded-2xl border border-border/50 p-6 text-center shadow-lg"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <p className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section aria-label="Pricing packages" className="py-20 md:py-28 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">Our Packages</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Find Your Perfect Package
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Whether you need a guiding hand on the big day or a full creative partner from the start, {'Ember & Oak Events'} has a package designed for you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start">
            {packages.map((pkg, i) => {
              const Icon = pkg.icon
              return (
                <Card
                  key={i}
                  className={`relative rounded-2xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-slide-up ${pkg.popular
                    ? 'ring-2 ring-primary border-primary/50 shadow-lg shadow-primary/10 scale-[1.02] md:scale-105'
                    : 'border-border/50 bg-card shadow-sm'
                    }`}
                  style={{ animationDelay: `${i * 150}ms` }}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                      <Badge className="bg-primary text-primary-foreground rounded-full px-5 py-1.5 text-xs font-semibold uppercase tracking-wider shadow-lg">
                        <Star className="w-3.5 h-3.5 mr-1.5 fill-current" />
                        Most Popular
                      </Badge>
                    </div>
                  )}

                  <CardHeader className="text-center pt-10 pb-4">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 ${pkg.popular ? 'bg-primary text-primary-foreground' : 'bg-primary/10'}`}>
                      <Icon className={`w-7 h-7 ${pkg.popular ? '' : 'text-primary'}`} />
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">{pkg.subtitle}</p>
                    <CardTitle className="text-2xl font-bold tracking-tight">{pkg.name}</CardTitle>
                    <div className="mt-4">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">{pkg.priceNote}</p>
                      <p className="text-4xl font-bold text-primary mt-1">{pkg.price}</p>
                    </div>
                    <CardDescription className="mt-4 text-sm leading-relaxed">
                      {pkg.description}
                    </CardDescription>
                  </CardHeader>

                  <Separator className="mx-6" />

                  <CardContent className="pt-6 pb-8">
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-primary" />
                          </div>
                          <span className="text-sm text-muted-foreground leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      className={`w-full rounded-full py-6 text-base font-semibold transition-all duration-300 ${pkg.popular
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25'
                        : 'bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground'
                        }`}
                    >
                      {pkg.cta}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-10 animate-fade-in" style={{ animationDelay: '600ms' }}>
            All packages are customizable. Pricing may vary based on guest count, venue, and event complexity.
          </p>
        </div>
      </section>

      {/* À La Carte Add-ons */}
      <section aria-label="Add-on services" className="py-20 md:py-28 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">À La Carte</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Enhance Any Package
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Extend the celebration beyond the main event. These add-on services pair beautifully with any of our planning packages.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {addOns.map((addon, i) => {
              const Icon = addon.icon
              return (
                <Card
                  key={i}
                  className="rounded-2xl border border-border/50 bg-card shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-base">{addon.name}</h3>
                      <p className="text-sm text-primary font-bold mt-0.5">{addon.price}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* What's Included Comparison Image Section */}
      <section aria-label="Why choose us" className="py-20 md:py-28 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-slide-left">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=1200"
                    alt="Elegant wedding table setting with floral centerpiece in Savannah"
                    fallbackKeyword="wedding table centerpiece elegant"
                    className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl border border-border/50 shadow-xl p-5 animate-fade-in" style={{ animationDelay: '400ms' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-sm">Trusted by 200+ Couples</p>
                      <div className="flex gap-0.5 mt-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 text-primary fill-primary" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-slide-up">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">The {'Ember & Oak Events'} Difference</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Every Package Includes Our Signature Touch
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                No matter which package you choose, you'll receive the same level of care, creativity, and professionalism that has made {'Ember & Oak Events'} one of {'Savannah'}'s most sought-after planning teams.
              </p>

              <div className="space-y-5">
                {[
                  { icon: Heart, title: 'Personalized Attention', desc: 'We limit the number of events we take on each season to ensure every client receives our undivided focus.' },
                  { icon: Users, title: 'Curated Vendor Network', desc: 'Access our hand-picked roster of 50+ Savannah-area vendors who share our commitment to excellence.' },
                  { icon: Shield, title: 'Stress-Free Guarantee', desc: 'Our detailed planning process and day-of management means you can relax and enjoy every moment.' },
                  { icon: Award, title: 'Award-Winning Design', desc: 'Our events have been featured in regional publications for their thoughtful, elegant design aesthetic.' },
                ].map((item, i) => {
                  const Icon = item.icon
                  return (
                    <div key={i} className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section aria-label="Client testimonials" className="py-20 md:py-28 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">Love Letters</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              The greatest compliment we receive is the trust our couples place in us — and the joy they share after their celebration.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <Card
                key={i}
                className="rounded-2xl border border-border/50 bg-card shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(testimonial.rating)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed italic mb-6">
                    "{testimonial.quote}"
                  </p>
                  <Separator className="mb-4" />
                  <div>
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-primary">{testimonial.event}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section aria-label="Our process" className="py-20 md:py-28 px-4 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">How It Works</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              From Inquiry to Celebration
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Our streamlined process ensures a seamless journey from your first inquiry to the last dance.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Inquiry', desc: 'Reach out through our website, phone, or email to share your vision and event details.' },
              { step: '02', title: 'Consultation', desc: 'We meet (in-person or virtually) to discuss your style, budget, and dream celebration.' },
              { step: '03', title: 'Proposal', desc: 'Receive a custom proposal tailored to your specific needs, timeline, and venue.' },
              { step: '04', title: 'Celebrate', desc: 'Relax and enjoy every magical moment while we handle every detail behind the scenes.' },
            ].map((item, i) => (
              <div
                key={i}
                className="text-center animate-slide-up"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">{item.step}</span>
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section aria-label="Frequently asked questions" className="py-20 md:py-28 px-4 bg-muted/30">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">Questions & Answers</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Everything you need to know about working with {'Ember & Oak Events'}. Don't see your question? We'd love to hear from you.
            </p>
          </div>

          <div className="animate-slide-up">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="bg-card rounded-2xl border border-border/50 px-6 shadow-sm data-[state=open]:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left font-semibold py-5 hover:no-underline hover:text-primary transition-colors">
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

      {/* GEO Paragraph */}
      <section aria-label="About our location" className="py-16 px-4 bg-background">
        <div className="max-w-3xl mx-auto animate-fade-in">
          <p className="geo-paragraph text-muted-foreground leading-relaxed text-center">
            {'Ember & Oak Events'} is a premier wedding and event planning company proudly based in {'Savannah'}, {'GA'}. Savannah's historic squares, moss-draped oaks, and antebellum architecture provide an unparalleled backdrop for celebrations of every kind — from intimate garden weddings in Forsyth Park to grand receptions in restored historic venues along the riverfront. As one of the Southeast's most beloved wedding destinations, {'Savannah'} attracts couples and event hosts from across the country seeking a celebration infused with Southern charm and timeless elegance.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section aria-label="Call to action" className="relative py-24 md:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1920"
            alt="Beautiful wedding celebration with warm golden lighting"
            fallbackKeyword="wedding celebration golden hour"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/80" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center animate-fade-in">
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
            <Sparkles className="w-8 h-8 text-primary" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
            Let's Plan Something Unforgettable
          </h2>

          <p className="text-lg text-white/80 max-w-xl mx-auto mb-10 leading-relaxed">
            Your dream celebration is closer than you think. Schedule a complimentary consultation with {'Ember & Oak Events'} and let's start bringing your vision to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-10 py-6 text-base font-semibold shadow-lg shadow-primary/25">
              <Calendar className="w-5 h-5 mr-2" />
              Check Availability
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-10 py-6 text-base font-semibold border-white/30 text-white hover:bg-white/10 backdrop-blur-sm">
              <Phone className="w-4 h-4 mr-2" />
              {'(912) 555-0188'}
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10 text-sm text-white/60">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>{'hello@emberoakevents.com'}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{'Mon–Fri: 9:00 AM – 5:00 PM'}</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
