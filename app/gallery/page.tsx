'use client'

import { useState } from 'react'
import { ImageWithFallback } from '@/components/ui/image-with-fallback'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { ArrowRight, Sparkles, Heart, Camera, Eye, Phone, Mail, Calendar, Star, Users, Award, MapPin } from 'lucide-react'

const galleryItems = [
  { id: 1, category: 'Weddings', title: 'Romantic Garden Ceremony', src: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800', fallback: 'wedding ceremony garden' },
  { id: 2, category: 'Weddings', title: 'Elegant Ballroom Reception', src: 'https://images.unsplash.com/photo-1478146059778-26028b07395a?auto=format&fit=crop&q=80&w=800', fallback: 'wedding reception ballroom' },
  { id: 3, category: 'Corporate', title: 'Executive Gala Evening', src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800', fallback: 'corporate gala event' },
  { id: 4, category: 'Celebrations', title: 'Golden Anniversary Dinner', src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=800', fallback: 'anniversary celebration dinner' },
  { id: 5, category: 'Weddings', title: 'Savannah Waterfront Vows', src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800', fallback: 'waterfront wedding savannah' },
  { id: 6, category: 'Decor', title: 'Floral Centerpiece Design', src: 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&q=80&w=800', fallback: 'wedding floral centerpiece' },
  { id: 7, category: 'Corporate', title: 'Product Launch Soirée', src: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&q=80&w=800', fallback: 'product launch event' },
  { id: 8, category: 'Weddings', title: 'Intimate Chapel Ceremony', src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=800', fallback: 'chapel wedding ceremony' },
  { id: 9, category: 'Celebrations', title: 'Milestone Birthday Bash', src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=800', fallback: 'birthday celebration party' },
  { id: 10, category: 'Decor', title: 'Candlelit Tablescape', src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800', fallback: 'candlelit table decoration' },
  { id: 11, category: 'Weddings', title: 'Bridal Party Portraits', src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&q=80&w=800', fallback: 'bridal party wedding' },
  { id: 12, category: 'Corporate', title: 'Charity Fundraiser Gala', src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800', fallback: 'charity gala fundraiser' },
  { id: 13, category: 'Celebrations', title: 'Baby Shower Garden Party', src: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=800', fallback: 'baby shower garden party' },
  { id: 14, category: 'Decor', title: 'Luxury Lounge Setup', src: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=800', fallback: 'luxury event lounge setup' },
  { id: 15, category: 'Weddings', title: 'First Dance Under Stars', src: 'https://images.unsplash.com/photo-1470290378698-263fa7ca60ab?auto=format&fit=crop&q=80&w=800', fallback: 'first dance wedding night' },
  { id: 16, category: 'Decor', title: 'Rustic Chic Arch Design', src: 'https://images.unsplash.com/photo-1464699908537-0954e50791ee?auto=format&fit=crop&q=80&w=800', fallback: 'rustic wedding arch flowers' },
]

const categories = ['All', 'Weddings', 'Corporate', 'Celebrations', 'Decor']

const stats = [
  { icon: Heart, value: '500+', label: 'Events Designed' },
  { icon: Camera, value: '10,000+', label: 'Moments Captured' },
  { icon: Star, value: '4.9', label: 'Average Rating' },
  { icon: Award, value: '12+', label: 'Years of Excellence' },
]

function GalleryFilterGrid() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const filtered = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory)

  return (
    <>
      <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold uppercase tracking-wider transition-all duration-300 border ${
              activeCategory === cat
                ? 'bg-primary text-primary-foreground border-primary shadow-lg'
                : 'bg-card text-muted-foreground border-border/50 hover:border-primary/50 hover:text-primary'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
        {filtered.map((item, index) => (
          <div
            key={item.id}
            className="break-inside-avoid animate-fade-in"
            style={{ animationDelay: `${index * 80}ms` }}
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="group relative overflow-hidden rounded-2xl border border-border/50 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer">
              <div className={`relative ${index % 3 === 0 ? 'aspect-[3/4]' : index % 3 === 1 ? 'aspect-square' : 'aspect-[4/3]'}`}>
                <ImageWithFallback
                  src={item.src}
                  alt={item.title}
                  fallbackKeyword={item.fallback}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-500 ${hoveredId === item.id ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="absolute bottom-0 left-0 right-0 p-5 transform transition-transform duration-500 translate-y-2 group-hover:translate-y-0">
                    <Badge className="mb-2 bg-primary/90 text-primary-foreground text-xs uppercase tracking-wider">
                      {item.category}
                    </Badge>
                    <h3 className="text-white font-bold text-lg tracking-tight">{item.title}</h3>
                    <div className="flex items-center gap-2 mt-2 text-white/80 text-sm">
                      <Eye className="w-4 h-4" />
                      <span>View Details</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '600ms' }}>
        <p className="text-muted-foreground mb-4">Showing {filtered.length} of our favorite moments</p>
      </div>
    </>
  )
}

function LightboxImage({ src, alt, fallback, className }: { src: string; alt: string; fallback: string; className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl group ${className || ''}`}>
      <ImageWithFallback
        src={src}
        alt={alt}
        fallbackKeyword={fallback}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
    </div>
  )
}

export default function GalleryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            "name": "Ember & Oak Events Event Gallery",
            "description": "Browse our curated gallery of luxury weddings, corporate events, and celebrations designed by Ember & Oak Events in Savannah, GA.",
            "url": "https://emberoakevents.com/gallery",
            "publisher": {
              "@type": "LocalBusiness",
              "name": "Ember & Oak Events",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "412 Bull St",
                "addressLocality": "Savannah",
                "addressRegion": "GA",
                "postalCode": ""
              },
              "telephone": "(912) 555-0188",
              "email": "hello@emberoakevents.com"
            },
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": [".geo-paragraph", "h1"]
            }
          })
        }}
      />

      <main>
        {/* Hero Section */}
        <section aria-label="Gallery Hero" className="relative min-h-[70vh] flex items-center justify-center bg-hero overflow-hidden">
          <div className="absolute inset-0">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1920"
              alt="Luxury wedding event by Ember & Oak Events"
              fallbackKeyword="luxury wedding event planning"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          </div>

          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
            <Badge className="mb-6 bg-primary/20 text-primary-foreground border border-primary/30 rounded-full px-5 py-1.5">
              <Sparkles className="w-3.5 h-3.5 mr-2 inline" />
              <span className="text-xs font-semibold uppercase tracking-widest">Our Portfolio</span>
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              A Gallery of Unforgettable{' '}
              <span className="text-primary italic">Moments</span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
              Every event tells a story. Browse the curated portfolio of {`Ember & Oak Events`} — from intimate Savannah weddings to grand corporate galas, each designed with intention and brought to life with flawless execution.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 shadow-lg">
                <Camera className="w-4 h-4 mr-2" />
                Explore Our Work
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-full px-8">
                <Calendar className="w-4 h-4 mr-2" />
                Check Availability
              </Button>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent h-24" />
        </section>

        {/* Stats Bar */}
        <section aria-label="Gallery Statistics" className="relative z-10 -mt-12 pb-8">
          <div className="max-w-5xl mx-auto px-4">
            <div className="bg-card rounded-2xl border border-border/50 shadow-xl p-6 md:p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="text-center animate-slide-up"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <stat.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Main Gallery Section */}
        <section aria-label="Event Gallery" className="py-20 md:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12 animate-fade-in">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">Curated Collection</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-3 mb-4">
                Every Detail, Designed to <span className="italic text-primary">Inspire</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Filter by event type to explore the breadth of our design capabilities. From romantic weddings beneath Savannah's live oaks to sophisticated corporate gatherings, each event reflects our commitment to luxury and personalization.
              </p>
            </div>

            <GalleryFilterGrid />
          </div>
        </section>

        {/* Featured Event Spotlight */}
        <section aria-label="Featured Event" className="py-20 md:py-28 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-14 animate-fade-in">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">Featured Event</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-3 mb-4">
                The Mitchell-Beaumont <span className="italic text-primary">Wedding</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                A breathtaking autumn celebration at one of Savannah's most iconic historic estates. Full planning by {`Ember & Oak Events`}, featuring 200 guests, custom floral installations, and a live jazz ensemble under the stars.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
              <div className="col-span-2 row-span-2 animate-slide-up" style={{ animationDelay: '100ms' }}>
                <LightboxImage
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200"
                  alt="Featured wedding ceremony"
                  fallback="luxury wedding ceremony savannah"
                  className="h-full"
                />
              </div>
              <div className="animate-slide-up" style={{ animationDelay: '200ms' }}>
                <LightboxImage
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600"
                  alt="Wedding table decor"
                  fallback="wedding table candlelit decor"
                  className="aspect-square"
                />
              </div>
              <div className="animate-slide-up" style={{ animationDelay: '300ms' }}>
                <LightboxImage
                  src="https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&q=80&w=600"
                  alt="Floral arrangement"
                  fallback="wedding floral arrangement"
                  className="aspect-square"
                />
              </div>
              <div className="animate-slide-up" style={{ animationDelay: '400ms' }}>
                <LightboxImage
                  src="https://images.unsplash.com/photo-1470290378698-263fa7ca60ab?auto=format&fit=crop&q=80&w=600"
                  alt="First dance"
                  fallback="wedding first dance"
                  className="aspect-square"
                />
              </div>
              <div className="animate-slide-up" style={{ animationDelay: '500ms' }}>
                <LightboxImage
                  src="https://images.unsplash.com/photo-1464699908537-0954e50791ee?auto=format&fit=crop&q=80&w=600"
                  alt="Wedding arch"
                  fallback="wedding arch floral"
                  className="aspect-square"
                />
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: '600ms' }}>
              {[
                { icon: Users, title: '200 Guests', desc: 'Intimate yet grand celebration' },
                { icon: Heart, title: 'Full Planning', desc: '14-month design journey' },
                { icon: Award, title: 'Best of 2026', desc: 'Featured in Southern Weddings' },
              ].map((item) => (
                <Card key={item.title} className="rounded-2xl border border-border/50 bg-card shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-bold tracking-tight">{item.title}</div>
                      <div className="text-sm text-muted-foreground">{item.desc}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials from Gallery Clients */}
        <section aria-label="Client Testimonials" className="py-20 md:py-28 bg-background">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-14 animate-fade-in">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">Client Love</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-3 mb-4">
                Words from Our <span className="italic text-primary">Couples & Clients</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  quote: "Ember & Oak Events transformed our vision into something even more magical than we imagined. Every detail was perfect — from the ceremony arch draped in jasmine to the candlelit reception. Truly unforgettable.",
                  name: "Sarah & James Mitchell",
                  event: "October Wedding, Forsyth Park",
                  stars: 5,
                },
                {
                  quote: "Our corporate gala was flawless. The team handled everything with such professionalism and creativity. Our CEO received compliments for months afterward. We've already booked them for next year.",
                  name: "Rebecca Torres",
                  event: "Annual Charity Gala",
                  stars: 5,
                },
                {
                  quote: "Planning our daughter's sweet sixteen from out of state seemed impossible until we found Ember & Oak Events. They made the entire process stress-free and the party was absolutely spectacular.",
                  name: "The Henderson Family",
                  event: "Sweet Sixteen Celebration",
                  stars: 5,
                },
              ].map((testimonial, index) => (
                <Card
                  key={testimonial.name}
                  className="rounded-2xl border border-border/50 bg-card shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-7">
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: testimonial.stars }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground leading-relaxed italic mb-6">"{testimonial.quote}"</p>
                    <Separator className="mb-4" />
                    <div>
                      <div className="font-bold tracking-tight text-sm">{testimonial.name}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{testimonial.event}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* GEO Paragraph + Info Section */}
        <section aria-label="About Our Location" className="py-20 md:py-28 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-10 animate-fade-in">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">Rooted in Savannah</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-3 mb-4">
                Designing Events in the <span className="italic text-primary">Hostess City</span>
              </h2>
            </div>

            <div className="bg-card rounded-2xl border border-border/50 shadow-sm p-8 md:p-10 animate-slide-up">
              <p className="geo-paragraph text-muted-foreground leading-relaxed text-lg mb-6">
                {`Ember & Oak Events`} is a premier full-service wedding and event planning company based in {`Savannah`}, {`GA`}. Savannah is renowned for its stunning historic squares, moss-draped oak trees, and antebellum architecture, making it one of the most sought-after event destinations in the American South. Our deep relationships with Savannah's finest venues, caterers, florists, and entertainers allow us to craft seamless, luxurious celebrations that honor this extraordinary city's timeless charm.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary shrink-0" />
                  <span>{`412 Bull St, Savannah, GA`}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  <span>{`(912) 555-0188`}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="w-5 h-5 text-primary shrink-0" />
                  <span>{`hello@emberoakevents.com`}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Calendar className="w-5 h-5 text-primary shrink-0" />
                  <span>{`Mon–Fri: 9:00 AM – 5:00 PM`}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section aria-label="Call to Action" className="py-20 md:py-28 bg-hero relative overflow-hidden">
          <div className="absolute inset-0">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1920"
              alt="Beautiful event by Ember & Oak Events"
              fallbackKeyword="luxury event celebration"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto px-4 text-center animate-fade-in">
            <Badge className="mb-6 bg-primary/20 text-primary-foreground border border-primary/30 rounded-full px-5 py-1.5">
              <Sparkles className="w-3.5 h-3.5 mr-2 inline" />
              <span className="text-xs font-semibold uppercase tracking-widest">Start Your Journey</span>
            </Badge>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
              Let's Plan Something{' '}
              <span className="italic text-primary">Unforgettable</span>
            </h2>

            <p className="text-lg text-white/80 max-w-xl mx-auto mb-8 leading-relaxed">
              Your celebration deserves the same artistry and attention you see in our gallery. Reach out to {`Ember & Oak Events`} today and let's begin designing your perfect event.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 shadow-lg text-base">
                <Calendar className="w-4 h-4 mr-2" />
                Check Availability
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-full px-8 text-base">
                <Phone className="w-4 h-4 mr-2" />
                {`(912) 555-0188`}
              </Button>
            </div>

            <p className="text-white/50 text-sm mt-6">Complimentary consultation · Packages starting at $1,800</p>
          </div>
        </section>
      </main>
    </>
  )
}
