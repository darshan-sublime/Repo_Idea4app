import { Metadata } from 'next'
import { Star, Quote, ArrowRight, Award, Users, Heart, Calendar, Sparkles, Phone, Mail, MapPin, TrendingUp, Shield, Check } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { ImageWithFallback } from '@/components/ui/image-with-fallback'

export const metadata: Metadata = {
  title: 'Ember & Oak Events — Client Testimonials & Reviews | Savannah Event Planning',
  description: 'Read heartfelt testimonials from couples and clients who trusted Ember & Oak Events for their weddings and events in Savannah, GA. 5-star luxury planning.',
  openGraph: {
    title: 'Ember & Oak Events — Client Testimonials & Reviews',
    description: 'Discover why couples and clients love working with Ember & Oak Events. Real reviews from real celebrations in Savannah, Georgia.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ember & Oak Events — Client Testimonials & Reviews',
    description: 'Discover why couples and clients love working with Ember & Oak Events. Real reviews from real celebrations in Savannah, Georgia.',
  },
}

const reviews = [
  {
    name: 'Sarah & Michael Thompson',
    date: 'October 2026',
    rating: 5,
    service: 'Full Wedding Planning',
    text: 'Working with Ember & Oak Events was the best decision we made for our wedding. From the very first consultation, we felt completely at ease. They transformed Forsyth Park into an absolute dream — every detail was meticulously planned, from the floral arrangements to the custom lighting. Our guests are still talking about how magical the evening was. Worth every penny and more.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=400',
    imageKeyword: 'wedding couple',
  },
  {
    name: 'Jennifer & David Chen',
    date: 'September 2026',
    rating: 5,
    service: 'Full Wedding Planning',
    text: 'We had a vision for a romantic garden wedding at one of Savannah\'s historic estates, and Ember & Oak Events brought it to life beyond our wildest imagination. The coordination was flawless — we didn\'t have to worry about a single thing on our wedding day. The vendor recommendations were incredible, and the timeline ran perfectly. Truly a stress-free experience.',
    image: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&q=80&w=400',
    imageKeyword: 'wedding celebration',
  },
  {
    name: 'Amanda Rodriguez',
    date: 'August 2026',
    rating: 5,
    service: 'Corporate Event Planning',
    text: 'Ember & Oak Events planned our company\'s annual gala at the Savannah Convention Center, and it was absolutely spectacular. The attention to detail in the branding, the seamless registration process, the incredible catering coordination — everything was handled with such professionalism. Our CEO personally asked me to book them again for next year.',
    image: 'https://images.unsplash.com/photo-1560439514-4e9645039924?auto=format&fit=crop&q=80&w=400',
    imageKeyword: 'corporate event',
  },
  {
    name: 'Lauren & James Mitchell',
    date: 'July 2026',
    rating: 5,
    service: 'Partial Planning',
    text: 'We had already started planning our wedding but quickly realized we were in over our heads. Ember & Oak Events stepped in with their partial planning package and everything clicked into place. They refined our vendor selections, created a detailed timeline, and managed everything on the day of. The rehearsal dinner coordination alone was worth the investment.',
    image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=400',
    imageKeyword: 'wedding reception',
  },
  {
    name: 'Patricia & Robert Williams',
    date: 'June 2026',
    rating: 5,
    service: 'Day-of Coordination',
    text: 'Even though we only booked day-of coordination, the team at Ember & Oak Events went above and beyond. They reviewed all our vendor contracts, created a master timeline, and managed every single detail on our wedding day. When a last-minute issue arose with our florist, they handled it so smoothly we didn\'t even know about it until after the honeymoon. Incredible.',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=400',
    imageKeyword: 'wedding flowers',
  },
  {
    name: 'Emily & Christopher Davis',
    date: 'May 2026',
    rating: 5,
    service: 'Full Wedding Planning',
    text: 'Our destination wedding in Savannah was a dream come true thanks to Ember & Oak Events. Planning from across the country could have been a nightmare, but their team made it effortless with virtual consultations, detailed mood boards, and constant communication. Every guest commented on how personal and beautiful the celebration felt. We couldn\'t be more grateful.',
    image: 'https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&q=80&w=400',
    imageKeyword: 'destination wedding',
  },
  {
    name: 'Nicole Foster',
    date: 'April 2026',
    rating: 5,
    service: 'Celebration Planning',
    text: 'I hired Ember & Oak Events to plan my parents\' 50th wedding anniversary celebration, and it was absolutely perfect. The team curated a gorgeous evening at a historic Savannah venue with gold and ivory décor, a live jazz band, and a photo timeline of my parents\' life together. There wasn\'t a dry eye in the house. Thank you for making this milestone so special.',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=400',
    imageKeyword: 'anniversary celebration',
  },
  {
    name: 'Brittany & Mark Johnson',
    date: 'March 2026',
    rating: 5,
    service: 'Full Wedding Planning',
    text: 'From our first meeting, Ember & Oak Events understood our vision for an intimate, elegant ceremony under the Spanish moss at Wormsloe Historic Site. They handled everything — the permits, the vendors, the logistics — with such grace and expertise. Our wedding photos look like they belong in a magazine. We\'ve already recommended them to three engaged friends.',
    image: 'https://images.unsplash.com/photo-1478146059778-26028b07395a?auto=format&fit=crop&q=80&w=400',
    imageKeyword: 'elegant wedding',
  },
  {
    name: 'Dr. Rachel Kim',
    date: 'February 2026',
    rating: 5,
    service: 'Corporate Event Planning',
    text: 'Our medical conference needed a planner who could handle complex logistics while maintaining an elevated aesthetic, and Ember & Oak Events delivered on both fronts. The breakout sessions ran on time, the networking reception was beautifully designed, and every attendee received a curated welcome package. Professional, creative, and incredibly organized.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=400',
    imageKeyword: 'conference event',
  },
  {
    name: 'Megan & Andrew Parker',
    date: 'January 2026',
    rating: 5,
    service: 'Partial Planning',
    text: 'We were so stressed trying to coordinate vendors for our winter wedding at the Cathedral of St. John the Baptist. Ember & Oak Events took over the partial planning and turned chaos into calm. Their vendor network is unmatched in Savannah — they connected us with the most talented florist, photographer, and caterer. Our wedding was pure magic.',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=400',
    imageKeyword: 'winter wedding',
  },
]

const stats = [
  { value: '5.0', label: 'Average Rating', icon: Star },
  { value: '200+', label: 'Events Planned', icon: Calendar },
  { value: '100%', label: 'Client Satisfaction', icon: Heart },
  { value: '50+', label: 'Trusted Vendors', icon: Users },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? 'fill-accent text-accent' : 'text-muted-foreground/30'}`}
        />
      ))}
    </div>
  )
}

export default function TestimonialsPage() {
  const reviewJsonLd = {
    '@context': 'https://schema.org',
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
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '10',
      bestRating: '5',
      worstRating: '5',
    },
    review: reviews.map((r) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: r.name,
      },
      datePublished: r.date,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: r.rating.toString(),
        bestRating: '5',
      },
      reviewBody: r.text,
    })),
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['.geo-paragraph', 'h1'],
    },
  }

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What do clients say about Ember & Oak Events?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ember & Oak Events consistently receives 5-star reviews from couples and corporate clients in Savannah, GA. Clients praise the meticulous attention to detail, stress-free coordination, and luxury design aesthetic.',
        },
      },
      {
        '@type': 'Question',
        name: 'How many events has Ember & Oak Events planned?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ember & Oak Events has planned over 200 weddings, corporate events, and celebrations across Savannah, Georgia and the surrounding Lowcountry region.',
        },
      },
    ],
  }

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewJsonLd) }}
        suppressHydrationWarning
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        suppressHydrationWarning
      />

      {/* Hero Section */}
      <section aria-label="Testimonials hero" className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1920"
            alt="Elegant wedding reception with warm lighting in Savannah"
            fallbackKeyword="wedding reception elegant"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-hero" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
          <Badge className="mb-6 rounded-full px-6 py-2 bg-accent/20 text-accent border-accent/30 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 mr-2" />
            Client Love Letters
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary-foreground mb-6">
            What Our Clients Say About{'\n'}
            <span className="italic text-accent">{'Ember & Oak Events'}</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Every celebration tells a story. Here are the heartfelt words from couples and clients 
            who entrusted us with their most cherished moments in Savannah.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section aria-label="Review statistics" className="relative z-20 -mt-16 px-4 animate-slide-up">
        <div className="max-w-5xl mx-auto">
          <Card className="rounded-2xl border border-border/50 bg-card shadow-xl">
            <CardContent className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center animate-fade-in" style={{ animationDelay: `${i * 150}ms` }}>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <stat.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-3xl font-bold tracking-tight text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Average Rating Summary */}
      <section aria-label="Overall rating summary" className="py-20 md:py-28 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Trusted Excellence</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-3 mb-4">
              A Perfect <span className="italic text-accent">5-Star</span> Rating
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Every single client has rated {'Ember & Oak Events'} with five stars. Our commitment to 
              luxury design and stress-free coordination speaks through their words.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 animate-slide-up" style={{ animationDelay: '200ms' }}>
            <Card className="rounded-2xl border border-accent/20 bg-card shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center p-8">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">Award-Winning Service</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Recognized as one of Savannah&apos;s top event planners by local publications and wedding directories.
              </p>
            </Card>

            <Card className="rounded-2xl border-2 border-accent bg-card shadow-xl text-center p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />
              <div className="flex justify-center gap-1 mb-4 mt-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-8 h-8 fill-accent text-accent" />
                ))}
              </div>
              <div className="text-5xl font-bold tracking-tight mb-2">5.0</div>
              <p className="text-muted-foreground text-sm">Based on 200+ verified reviews</p>
              <Separator className="my-4" />
              <p className="text-sm text-muted-foreground italic leading-relaxed">
                &ldquo;The most trusted name in Savannah event planning.&rdquo;
              </p>
            </Card>

            <Card className="rounded-2xl border border-accent/20 bg-card shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center p-8">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">100% Satisfaction</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Every client survey returned with complete satisfaction. Your celebration is our reputation.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section aria-label="Featured testimonials" className="py-20 md:py-28 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Love Letters</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-3 mb-4">
              Stories From Our <span className="italic text-accent">Cherished Clients</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Real words from real celebrations. Each review reflects the care, creativity, and 
              dedication that {'Ember & Oak Events'} brings to every event.
            </p>
          </div>

          {/* Featured Review - Large */}
          <div className="mb-12 animate-slide-up" style={{ animationDelay: '100ms' }}>
            <Card className="rounded-2xl border-2 border-accent/30 bg-card shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-5">
                  <div className="md:col-span-2 relative min-h-[300px] overflow-hidden">
                    <ImageWithFallback
                      src={reviews[0].image}
                      alt={reviews[0].name}
                      fallbackKeyword={reviews[0].imageKeyword}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <Badge className="bg-accent/90 text-primary-foreground rounded-full text-xs">
                        <Star className="w-3 h-3 mr-1 fill-current" /> Featured Review
                      </Badge>
                    </div>
                  </div>
                  <div className="md:col-span-3 p-8 md:p-10 flex flex-col justify-center">
                    <Quote className="w-10 h-10 text-accent/30 mb-4" />
                    <p className="text-foreground leading-relaxed text-lg mb-6 italic">
                      {reviews[0].text}
                    </p>
                    <div className="flex items-center gap-4">
                      <div>
                        <div className="font-bold text-foreground">{reviews[0].name}</div>
                        <div className="text-sm text-muted-foreground">{reviews[0].service} · {reviews[0].date}</div>
                        <StarRating rating={reviews[0].rating} />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Review Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.slice(1).map((review, i) => (
              <Card
                key={i}
                className="rounded-2xl border border-border/50 bg-card shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-slide-up overflow-hidden group"
                style={{ animationDelay: `${(i + 1) * 100}ms` }}
              >
                <CardContent className="p-0">
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={review.image}
                      alt={review.name}
                      fallbackKeyword={review.imageKeyword}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3">
                      <Badge variant="secondary" className="rounded-full text-xs bg-card/90 text-foreground">
                        {review.service}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <StarRating rating={review.rating} />
                      <span className="text-xs text-muted-foreground">{review.date}</span>
                    </div>
                    <Quote className="w-6 h-6 text-accent/20 mb-2" />
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-4">
                      {review.text}
                    </p>
                    <Separator className="mb-4" />
                    <div className="font-semibold text-foreground text-sm">{review.name}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Clients Choose Us */}
      <section aria-label="Why clients choose us" className="py-20 md:py-28 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-left">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">The Difference</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-3 mb-6">
                Why Savannah Chooses{' '}
                <span className="italic text-accent">{'Ember & Oak Events'}</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our clients consistently highlight the same qualities that set us apart — meticulous 
                attention to detail, genuine care for their vision, and the ability to transform 
                stress into celebration.
              </p>

              <div className="space-y-4">
                {[
                  { icon: Heart, title: 'Personal Connection', desc: 'We treat every client like family, understanding their unique story and vision.' },
                  { icon: Shield, title: 'Trusted Vendor Network', desc: 'Access to 50+ vetted Savannah vendors ensures the highest quality for every element.' },
                  { icon: TrendingUp, title: 'Flawless Execution', desc: 'Detailed timelines and backup plans mean your event runs seamlessly from start to finish.' },
                  { icon: Sparkles, title: 'Luxury Design Aesthetic', desc: 'Every detail is curated with an eye for elegance that reflects Savannah\'s timeless beauty.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start group">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-slide-up" style={{ animationDelay: '200ms' }}>
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=800"
                  alt="Beautifully decorated wedding venue in Savannah"
                  fallbackKeyword="wedding venue decoration"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-xl p-6 border border-accent/20 max-w-[260px]">
                <div className="flex gap-1 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm italic text-muted-foreground leading-relaxed">
                  &ldquo;The most magical day of our lives, all thanks to this incredible team.&rdquo;
                </p>
                <p className="text-xs font-semibold text-foreground mt-2">— Lauren & James M.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leave a Review CTA */}
      <section aria-label="Leave a review" className="py-20 md:py-28 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 text-center animate-fade-in">
          <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
            <Quote className="w-8 h-8 text-accent" />
          </div>
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">Share Your Experience</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-3 mb-4">
            We&apos;d Love to Hear <span className="italic text-accent">Your Story</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed mb-8">
            If {'Ember & Oak Events'} was part of your special celebration, we&apos;d be honored if you 
            shared your experience. Your words help future couples find their perfect planning partner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-full px-8 bg-primary hover:bg-primary/90 text-primary-foreground group">
              Leave a Google Review
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 border-accent text-accent hover:bg-accent/10">
              Review on The Knot
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* GEO Paragraph & Final CTA */}
      <section aria-label="Plan your event" className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&q=80&w=1920"
            alt="Savannah Georgia historic district"
            fallbackKeyword="savannah georgia historic"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-hero" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <p className="geo-paragraph text-primary-foreground/70 text-sm leading-relaxed mb-10 max-w-2xl mx-auto animate-fade-in">
            {'Ember & Oak Events'} is a premier full-service wedding and event planning company based in {'Savannah'}, {'GA'}. 
            Savannah is renowned for its cobblestone streets, historic squares, and Spanish moss-draped oaks — providing one of the 
            most romantic backdrops in the American South for weddings, galas, and celebrations of every kind.
          </p>

          <Badge className="mb-6 rounded-full px-6 py-2 bg-accent/20 text-accent border-accent/30 text-xs font-semibold uppercase tracking-wider animate-fade-in">
            <Heart className="w-3.5 h-3.5 mr-2" />
            Let&apos;s Create Magic Together
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-primary-foreground mb-6 animate-slide-up">
            Let&apos;s Plan Something{'\n'}
            <span className="italic text-accent">Unforgettable</span>
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto mb-8 leading-relaxed animate-slide-up" style={{ animationDelay: '100ms' }}>
            Join the hundreds of couples and clients who trusted {'Ember & Oak Events'} with their most 
            important celebrations. Your story deserves to be told beautifully.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '200ms' }}>
            <Button size="lg" className="rounded-full px-8 bg-accent hover:bg-accent/90 text-primary-foreground group">
              Check Availability
              <Calendar className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <Phone className="w-4 h-4 mr-2" />
              {'(912) 555-0188'}
            </Button>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-primary-foreground/60 text-sm animate-fade-in" style={{ animationDelay: '400ms' }}>
            <address className="not-italic flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              {'412 Bull St, Savannah, GA'}
            </address>
            <a href={`mailto:hello@emberoakevents.com`} className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail className="w-4 h-4" />
              {'hello@emberoakevents.com'}
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
