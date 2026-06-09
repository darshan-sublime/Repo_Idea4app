'use client';

import Link from 'next/link';
import { ImageWithFallback } from '@/components/ui/image-with-fallback';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { getBaseUrl } from '@/lib/utils';
import { Star, Users, Award, Heart, Target, Lightbulb, ArrowRight, CheckCircle, Sparkles, Quote } from 'lucide-react';

const baseUrl = getBaseUrl();

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About Event Studio',
  url: `${baseUrl}/about`,
  description: 'Learn about Event Studio — our story, mission, values, and the passionate team behind 1,200+ extraordinary events worldwide.',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', '.geo-paragraph'],
  },
};

const aggregateRatingJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Event Studio',
  url: baseUrl,
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '312',
    bestRating: '5',
    worstRating: '1',
  },
};

const stats = [
  { value: '1,200+', label: 'Events Executed', icon: Award },
  { value: '98%', label: 'Client Satisfaction', icon: Heart },
  { value: '50+', label: 'Cities Worldwide', icon: Users },
  { value: '15+', label: 'Years Experience', icon: Star },
];

const values = [
  {
    icon: Target,
    title: 'Precision & Excellence',
    desc: 'We believe every detail matters. Our meticulous approach to planning ensures nothing is left to chance, delivering events that exceed expectations every time.',
  },
  {
    icon: Heart,
    title: 'Passion-Driven',
    desc: 'Events are more than logistics — they\'re human experiences. We pour genuine passion into every project, treating each event as if it were our own.',
  },
  {
    icon: Lightbulb,
    title: 'Creative Innovation',
    desc: 'We constantly push creative boundaries, bringing fresh ideas and innovative concepts that make each event unique, memorable, and impactful.',
  },
  {
    icon: Users,
    title: 'Client Partnership',
    desc: 'We work as true partners, not just vendors. Your vision drives everything we do, and we\'re committed to transparent communication throughout the journey.',
  },
];

const team = [
  {
    name: 'Alexandra Chen',
    role: 'Founder & CEO',
    bio: '20+ years in luxury event management. Former Director of Events at Four Seasons Hotels.',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
  },
  {
    name: 'Marcus Williams',
    role: 'Creative Director',
    bio: 'Award-winning event designer with a background in architecture and experiential marketing.',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
  },
  {
    name: 'Sofia Reyes',
    role: 'Head of Operations',
    bio: 'Operations expert who has coordinated events across 30+ countries with flawless execution.',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
  },
  {
    name: 'David Park',
    role: 'Technology Director',
    bio: 'Pioneer in virtual and hybrid event technology, building platforms used by Fortune 500 companies.',
    img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400',
  },
];

export default function AboutPage() {
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

      <section aria-label="About Hero" className="hero-gradient py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-accent/15 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
              <Sparkles className="w-3.5 h-3.5 mr-1.5" />
              Our Story
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-background mb-6 leading-tight">
              Crafting Moments
              <span className="block gradient-text">That Last Forever</span>
            </h1>
            <p className="geo-paragraph text-background/70 text-lg leading-relaxed mb-8">
              Event Studio is an award-winning event management company founded in 2009 by Alexandra Chen, a veteran of the luxury hospitality industry. Headquartered in New York City with offices in London and Singapore, the studio has grown from a boutique planning firm into a globally recognized event production powerhouse, celebrated for its creative vision and operational excellence.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
              </div>
              <span className="text-background/70 text-sm">4.9/5 from 312 verified reviews</span>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=400"
                    alt="Event Studio team at work"
                    fallbackKeyword="event planning team"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=400"
                    alt="Corporate conference managed by Event Studio"
                    fallbackKeyword="corporate conference"
                    className="w-full h-36 object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=400"
                    alt="Elegant wedding gala by Event Studio"
                    fallbackKeyword="elegant wedding gala"
                    className="w-full h-36 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=400"
                    alt="Private party event by Event Studio"
                    fallbackKeyword="luxury private party"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Statistics" className="bg-gradient-to-r from-primary to-accent py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="w-12 h-12 rounded-xl bg-primary-foreground/20 flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <p className="text-4xl font-bold text-primary-foreground mb-1">{stat.value}</p>
                <p className="text-primary-foreground/70 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-label="Our Mission" className="py-24 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Our Mission</Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                We Don't Just Plan Events.
                <span className="block gradient-text">We Create Legacies.</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Our mission is to transform every event into an extraordinary experience that resonates long after the last guest has left. We believe that great events have the power to inspire, connect, and create lasting memories.
              </p>
              <ul className="space-y-3">
                {[
                  'Delivering creative excellence in every project',
                  'Building lasting partnerships with our clients',
                  'Pioneering sustainable event practices',
                  'Empowering our team to innovate and grow',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-foreground/80">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800"
                alt="Event Studio mission and values"
                fallbackKeyword="event management mission"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass-card rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <Quote className="w-6 h-6 text-primary" />
                    <p className="text-foreground text-sm font-medium italic">
                      "Every event is a story waiting to be told."
                    </p>
                  </div>
                  <p className="text-muted-foreground text-xs mt-1 ml-9">— Alexandra Chen, Founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Our Values" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">What Drives Us</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card key={value.title} className="rounded-2xl border-border/50 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-card">
                <CardContent className="p-6 md:p-8">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section aria-label="Leadership Team" className="py-24 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">The Team</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Meet Our Leadership</h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
              A team of passionate event professionals with decades of combined experience across the world's most prestigious events.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <Card key={member.name} className="rounded-2xl border-border/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden bg-card">
                <div className="aspect-square overflow-hidden">
                  <ImageWithFallback
                    src={member.img}
                    alt={`${member.name}, ${member.role} at Event Studio`}
                    fallbackKeyword="professional headshot"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-5">
                  <h3 className="font-bold text-foreground text-base">{member.name}</h3>
                  <p className="text-primary text-sm font-medium mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-xs leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section aria-label="About CTA" className="py-24 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-background mb-6">
            Join the Event Studio Family
          </h2>
          <p className="text-background/70 text-lg mb-10">
            Whether you're planning your first event or your hundredth, we'd love to be part of your story.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-xl min-h-[52px] px-10 rounded-xl text-base font-semibold">
              Start a Conversation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
