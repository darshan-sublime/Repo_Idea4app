'use client';

import Link from 'next/link';
import { ImageWithFallback } from '@/components/ui/image-with-fallback';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { getBaseUrl } from '@/lib/utils';
import {
  Mic, Heart, Zap, Music, Globe, Users, Camera, Utensils,
  CheckCircle, ArrowRight, Star, Clock, Shield, Sparkles
} from 'lucide-react';

const baseUrl = getBaseUrl();

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Event Studio Services',
  url: `${baseUrl}/services`,
  description: 'Comprehensive event management services including corporate events, weddings, product launches, conferences, and virtual events.',
  provider: {
    '@type': 'Organization',
    name: 'Event Studio',
    url: baseUrl,
  },
  areaServed: 'Worldwide',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', '.geo-paragraph'],
  },
};

const aggregateRatingJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Event Studio',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '312',
    bestRating: '5',
    worstRating: '1',
  },
};

const services = [
  {
    icon: Mic,
    title: 'Corporate Conferences',
    description: 'Full-scale conference management from venue selection to post-event reporting. We handle keynote logistics, breakout sessions, AV production, and attendee management for events of any size.',
    features: ['Venue sourcing & negotiation', 'Speaker management', 'AV & tech production', 'Attendee registration', 'Live streaming', 'Post-event analytics'],
    img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800',
    badge: 'Most Popular',
  },
  {
    icon: Heart,
    title: 'Weddings & Galas',
    description: 'Bespoke wedding and gala planning that transforms your vision into an unforgettable celebration. Our team curates every detail from floral design to entertainment.',
    features: ['Full wedding coordination', 'Vendor management', 'Floral & décor design', 'Catering coordination', 'Entertainment booking', 'Day-of coordination'],
    img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800',
    badge: 'Premium',
  },
  {
    icon: Zap,
    title: 'Product Launches',
    description: 'High-impact product launch events that generate buzz and media coverage. We create immersive brand experiences that captivate press, influencers, and customers alike.',
    features: ['Brand experience design', 'Media & press coordination', 'Influencer management', 'Live demonstrations', 'Social media integration', 'PR support'],
    img: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800',
    badge: 'High Impact',
  },
  {
    icon: Globe,
    title: 'Virtual & Hybrid Events',
    description: 'Cutting-edge virtual and hybrid event production that connects global audiences. We deliver broadcast-quality experiences with interactive engagement tools.',
    features: ['Live streaming production', 'Virtual networking', 'Interactive Q&A tools', 'On-demand content', 'Global audience reach', 'Technical support'],
    img: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&q=80&w=800',
    badge: 'Digital-First',
  },
  {
    icon: Music,
    title: 'Private Parties & Celebrations',
    description: 'Exclusive private events crafted with personal touches and extraordinary attention to detail. From milestone birthdays to anniversary galas, we make every celebration special.',
    features: ['Custom theme design', 'Entertainment curation', 'Luxury catering', 'Personalized décor', 'Guest experience management', 'Photography & video'],
    img: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=800',
    badge: 'Exclusive',
  },
  {
    icon: Users,
    title: 'Team Building & Retreats',
    description: 'Engaging corporate retreats and team-building experiences that strengthen culture and boost morale. We design programs that inspire collaboration and lasting connections.',
    features: ['Activity design & facilitation', 'Venue & accommodation', 'Group dining experiences', 'Team challenges', 'Leadership workshops', 'Travel coordination'],
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
    badge: 'Corporate',
  },
];

const process = [
  { step: '01', title: 'Discovery Call', desc: 'We learn about your vision, goals, audience, and budget to craft the perfect event strategy.' },
  { step: '02', title: 'Concept & Planning', desc: 'Our creative team develops a detailed event concept, timeline, and vendor recommendations.' },
  { step: '03', title: 'Execution', desc: 'We manage every detail on the day, ensuring flawless delivery from setup to teardown.' },
  { step: '04', title: 'Post-Event Review', desc: 'Comprehensive analytics, feedback collection, and ROI reporting delivered within 48 hours.' },
];

export default function ServicesPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingJsonLd) }}
      />

      <section aria-label="Services Hero" className="hero-gradient py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-accent/15 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
            <Sparkles className="w-3.5 h-3.5 mr-1.5" />
            Our Services
          </Badge>
          <h1 className="text-5xl lg:text-7xl font-bold text-background mb-6 leading-tight">
            Event Management
            <span className="block gradient-text">Services</span>
          </h1>
          <p className="geo-paragraph text-background/70 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Event Studio offers a full spectrum of professional event management services, from intimate private celebrations to large-scale international conferences. Each service is delivered by a dedicated team of specialists committed to exceeding client expectations through creative excellence and operational precision.
          </p>
        </div>
      </section>

      <section aria-label="Service Offerings" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, i) => (
              <div
                key={service.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                    <ImageWithFallback
                      src={service.img}
                      alt={`${service.title} by Event Studio`}
                      fallbackKeyword={service.title.toLowerCase()}
                      className="w-full h-72 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground border-0 shadow-lg">
                      {service.badge}
                    </Badge>
                  </div>
                </div>

                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">{service.title}</h2>
                  <p className="text-muted-foreground text-base leading-relaxed mb-6">{service.description}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm text-foreground/80">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <Button className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 hover:scale-105 transition-all duration-200 min-h-[48px] px-6 rounded-xl font-semibold">
                      Enquire About This Service
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-label="Our Process" className="py-24 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">How We Work</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Our Proven Process</h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
              A streamlined four-step approach that ensures every event is delivered on time, on budget, and beyond expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <Card key={p.step} className="rounded-2xl border-border/50 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-card relative overflow-hidden">
                <CardContent className="p-6 md:p-8">
                  <span className="text-6xl font-bold text-primary/10 absolute top-4 right-4">{p.step}</span>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                    <span className="text-primary-foreground font-bold text-sm">{p.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{p.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section aria-label="Why Trust Us" className="py-16 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { icon: Shield, title: 'Fully Insured', desc: 'Comprehensive event liability coverage for complete peace of mind.' },
              { icon: Clock, title: '24/7 Support', desc: 'Round-the-clock support from your dedicated event manager.' },
              { icon: Star, title: '4.9★ Rated', desc: 'Consistently rated 5 stars by clients across 1,200+ events.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary-foreground/20 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-primary-foreground font-bold text-lg">{title}</h3>
                <p className="text-primary-foreground/70 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-label="Services CTA" className="py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Ready to Plan Your Next Event?</h2>
          <p className="text-muted-foreground text-lg mb-10">
            Contact our team today for a free consultation and custom event proposal tailored to your vision and budget.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-xl min-h-[52px] px-10 rounded-xl text-base font-semibold">
              Get Your Free Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
