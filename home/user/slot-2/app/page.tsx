'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ImageWithFallback } from '@/components/ui/image-with-fallback';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { getBaseUrl } from '@/lib/utils';
import {
  Calendar, Star, Users, Award, Zap, Globe, ChevronRight,
  CheckCircle, ArrowRight, Quote, Sparkles, Music, Camera,
  Utensils, Mic, MapPin, Clock, TrendingUp, Heart, Plus, Minus
} from 'lucide-react';

const baseUrl = getBaseUrl();

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Event Studio — Premium Event Management Platform',
  url: baseUrl,
  description: 'Event Studio is a premier event management platform offering end-to-end planning, coordination, and execution services for corporate and social events worldwide.',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', '.geo-paragraph'],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What types of events does Event Studio manage?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Event Studio manages a comprehensive range of events including corporate conferences, product launches, galas, weddings, private parties, virtual events, and hybrid experiences. Our team of expert planners tailors every detail to match your vision, budget, and audience, ensuring a seamless and memorable experience from initial concept through post-event wrap-up.',
      },
    },
    {
      '@type': 'Question',
      name: 'How far in advance should I book Event Studio for my event?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We recommend booking Event Studio at least 3–6 months in advance for large-scale corporate events and galas, and 6–12 months for weddings and major conferences. However, our agile team can accommodate shorter timelines for smaller events. Early booking ensures access to our full vendor network, preferred venues, and the most competitive pricing for your event.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Event Studio handle virtual and hybrid events?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Event Studio specializes in virtual and hybrid event production. We provide end-to-end technical support including live streaming, interactive audience engagement tools, virtual networking platforms, and professional broadcast-quality production. Our hybrid event solutions seamlessly connect in-person and remote attendees for a unified, engaging experience regardless of location.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is included in Event Studio\'s full-service event management package?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our full-service package includes venue sourcing and negotiation, vendor management (catering, AV, décor, entertainment), budget planning and tracking, on-site coordination, guest management and RSVP systems, marketing and promotional materials, post-event analytics, and a dedicated event manager assigned to your project from start to finish. We handle every detail so you can focus on your guests.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Event Studio ensure events stay within budget?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Event Studio uses a transparent, itemized budgeting system from day one. We leverage our extensive vendor relationships to negotiate preferred rates, provide real-time budget tracking dashboards, and proactively flag any potential overruns before they occur. Our experienced planners have managed hundreds of events and know exactly where to optimize spend without compromising on quality or guest experience.',
      },
    },
  ],
};

const features = [
  { icon: Calendar, title: 'End-to-End Planning', desc: 'From concept to execution, we handle every detail with precision and care.' },
  { icon: Users, title: 'Guest Management', desc: 'Seamless RSVP, check-in, and attendee experience management at scale.' },
  { icon: Globe, title: 'Virtual & Hybrid', desc: 'World-class virtual and hybrid event production for global audiences.' },
  { icon: Zap, title: 'Real-Time Coordination', desc: 'Live dashboards and instant communication keep everything on track.' },
  { icon: Camera, title: 'Creative Production', desc: 'Stunning visuals, décor, and branded experiences that leave lasting impressions.' },
  { icon: TrendingUp, title: 'Post-Event Analytics', desc: 'Detailed insights and ROI reporting to measure your event\'s success.' },
];

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'VP Marketing, TechCorp',
    text: 'Event Studio transformed our annual conference into an extraordinary experience. Every detail was flawless, and our attendees were blown away.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
  },
  {
    name: 'James Okafor',
    role: 'CEO, Nexus Ventures',
    text: 'The team\'s professionalism and creativity exceeded all expectations. Our product launch was a massive success thanks to Event Studio.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
  },
  {
    name: 'Priya Sharma',
    role: 'Director of Events, GlobalBank',
    text: 'We\'ve worked with many event companies, but Event Studio stands apart. Their attention to detail and client service is unmatched.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150',
  },
];

const stats = [
  { value: '1,200+', label: 'Events Executed' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '50+', label: 'Cities Worldwide' },
  { value: '15+', label: 'Years Experience' },
];

const eventTypes = [
  { icon: Mic, label: 'Conferences', img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800' },
  { icon: Heart, label: 'Weddings & Galas', img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800' },
  { icon: Zap, label: 'Product Launches', img: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800' },
  { icon: Music, label: 'Private Parties', img: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=800' },
];

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section aria-label="Hero" className="relative hero-gradient min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-3xl" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/10 rounded-full blur-2xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 hover:bg-primary/30 px-4 py-1.5 text-sm font-medium">
              <Sparkles className="w-3.5 h-3.5 mr-1.5" />
              Premium Event Management
            </Badge>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-background leading-tight tracking-tight mb-6">
              Create Events That
              <span className="block gradient-text">Inspire & Amaze</span>
            </h1>

            <p className="geo-paragraph text-background/70 text-lg leading-relaxed mb-8 max-w-xl">
              Event Studio is a premier event management platform that specializes in designing, planning, and executing extraordinary corporate and social events. Founded by industry veterans, the studio combines creative vision with operational excellence to deliver seamless experiences for clients across the globe.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/services">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 hover:scale-105 active:scale-95 transition-all duration-200 shadow-xl shadow-primary/30 min-h-[52px] px-8 rounded-xl text-base font-semibold">
                  Explore Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-background/30 text-background hover:bg-background/10 min-h-[52px] px-8 rounded-xl text-base font-semibold backdrop-blur-sm">
                  Get a Quote
                </Button>
              </Link>
            </div>

            <div className="flex items-center gap-6 mt-10">
              <div className="flex -space-x-3">
                {['photo-1494790108377-be9c29b29330', 'photo-1507003211169-0a1dd7228f2d', 'photo-1438761681033-6461ffad8d80'].map((id, i) => (
                  <img
                    key={i}
                    src={`https://images.unsplash.com/${id}?auto=format&fit=crop&q=80&w=60`}
                    alt={`Happy client ${i + 1}`}
                    className="w-10 h-10 rounded-full border-2 border-background/20 object-cover"
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-background/60 text-sm">Trusted by 1,200+ clients</p>
              </div>
            </div>
          </div>

          <div className="relative animate-scale-in hidden lg:block">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/40">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=900"
                alt="Spectacular event managed by Event Studio"
                fallbackKeyword="luxury event gala"
                className="w-full h-[560px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-6 -left-6 glass-card rounded-2xl p-4 shadow-xl animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-foreground font-semibold text-sm">Event Confirmed</p>
                  <p className="text-muted-foreground text-xs">500 guests · Grand Ballroom</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 glass-card rounded-2xl p-4 shadow-xl">
              <div className="flex items-center gap-2 mb-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="font-bold text-foreground">4.9/5</span>
              </div>
              <p className="text-muted-foreground text-xs">Client Rating</p>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Statistics" className="bg-gradient-to-r from-primary to-accent py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-2">{stat.value}</p>
                <p className="text-primary-foreground/70 text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-label="Features" className="section-gradient py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Why Choose Us</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Everything You Need for a</h2>
            <p className="text-3xl lg:text-4xl font-bold gradient-text">Flawless Event</p>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
              Our comprehensive suite of event management tools and services ensures every moment is perfectly orchestrated.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <Card
                key={feature.title}
                className="group border-border/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 rounded-2xl bg-card"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <CardContent className="p-6 md:p-8">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mb-4 transition-colors duration-200">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section aria-label="Event Types" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">Our Specialties</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Events We Bring to Life</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventTypes.map((type) => (
              <div key={type.label} className="group relative rounded-2xl overflow-hidden cursor-pointer hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="aspect-[3/4] overflow-hidden">
                  <ImageWithFallback
                    src={type.img}
                    alt={`${type.label} event managed by Event Studio`}
                    fallbackKeyword={type.label.toLowerCase()}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <type.icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white font-semibold text-base">{type.label}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-label="Testimonials" className="py-24 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Client Stories</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">What Our Clients Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <Card key={t.name} className="rounded-2xl border-border/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-card">
                <CardContent className="p-6 md:p-8">
                  <Quote className="w-8 h-8 text-primary/30 mb-4" />
                  <p className="text-foreground/80 text-sm leading-relaxed mb-6">{t.text}</p>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                  </div>
                  <div className="flex items-center gap-3">
                    <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                    <div>
                      <p className="font-semibold text-foreground text-sm">{t.name}</p>
                      <p className="text-muted-foreground text-xs">{t.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section aria-label="Frequently Asked Questions" className="py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">FAQ</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Frequently Asked Questions</h2>
            <p className="text-muted-foreground text-lg mt-4">Everything you need to know about Event Studio.</p>
          </div>

          <div className="space-y-3">
            {faqJsonLd.mainEntity.map((faq, i) => (
              <div
                key={i}
                className="border border-border/60 rounded-2xl overflow-hidden hover:border-primary/30 transition-colors duration-200"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left bg-card hover:bg-muted/30 transition-colors duration-200 min-h-[64px]"
                  aria-expanded={openFaq === i}
                >
                  <span className="font-semibold text-foreground text-sm md:text-base pr-4">{faq.name}</span>
                  {openFaq === i
                    ? <Minus className="w-5 h-5 text-primary shrink-0" />
                    : <Plus className="w-5 h-5 text-muted-foreground shrink-0" />
                  }
                </button>
                {openFaq === i && (
                  <div className="px-5 md:px-6 pb-5 md:pb-6 bg-card">
                    <p className="text-muted-foreground text-sm leading-relaxed">{faq.acceptedAnswer.text}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-label="Call to Action" className="py-24 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">Ready to Begin?</Badge>
          <h2 className="text-4xl lg:text-6xl font-bold text-background mb-6">
            Let's Create Something
            <span className="block gradient-text">Extraordinary Together</span>
          </h2>
          <p className="text-background/70 text-lg mb-10 max-w-2xl mx-auto">
            From intimate gatherings to grand-scale productions, Event Studio brings your vision to life with unmatched expertise and passion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-xl min-h-[52px] px-10 rounded-xl text-base font-semibold">
                Start Planning Your Event
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="border-background/30 text-background hover:bg-background/10 min-h-[52px] px-10 rounded-xl text-base font-semibold">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
