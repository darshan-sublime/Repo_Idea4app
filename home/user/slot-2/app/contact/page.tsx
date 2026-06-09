'use client';

import { ImageWithFallback } from '@/components/ui/image-with-fallback';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { getBaseUrl } from '@/lib/utils';
import { MapPin, Phone, Mail, Clock, Sparkles, Globe, MessageCircle, Calendar } from 'lucide-react';

const baseUrl = getBaseUrl();

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Event Studio',
  url: `${baseUrl}/contact`,
  description: 'Get in touch with Event Studio for event management inquiries, consultations, and bookings.',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', '.geo-paragraph'],
  },
};

const contactPointJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Event Studio',
  url: baseUrl,
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+1-555-123-4567',
      email: 'hello@eventstudio.com',
      contactType: 'customer service',
      areaServed: 'Worldwide',
      availableLanguage: ['English'],
    },
    {
      '@type': 'ContactPoint',
      telephone: '+1-555-987-6543',
      contactType: 'sales',
      areaServed: 'US',
    },
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Event Plaza, Suite 400',
    addressLocality: 'New York',
    addressRegion: 'NY',
    postalCode: '10001',
    addressCountry: 'US',
  },
};

const offices = [
  {
    city: 'New York',
    flag: '🇺🇸',
    address: '123 Event Plaza, Suite 400\nNew York, NY 10001',
    phone: '+1 (555) 123-4567',
    email: 'newyork@eventstudio.com',
    hours: 'Mon–Fri: 9:00 AM – 6:00 PM EST',
    img: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=600',
    primary: true,
  },
  {
    city: 'London',
    flag: '🇬🇧',
    address: '45 Mayfair Square, Floor 3\nLondon, W1K 2TH',
    phone: '+44 20 7946 0958',
    email: 'london@eventstudio.com',
    hours: 'Mon–Fri: 9:00 AM – 6:00 PM GMT',
    img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=600',
    primary: false,
  },
  {
    city: 'Singapore',
    flag: '🇸🇬',
    address: '8 Marina Boulevard, #22-01\nSingapore 018981',
    phone: '+65 6123 4567',
    email: 'singapore@eventstudio.com',
    hours: 'Mon–Fri: 9:00 AM – 6:00 PM SGT',
    img: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&q=80&w=600',
    primary: false,
  },
];

const contactMethods = [
  {
    icon: Phone,
    title: 'Call Us',
    desc: 'Speak directly with an event specialist',
    value: '+1 (555) 123-4567',
    link: 'tel:+15551234567',
    cta: 'Call Now',
  },
  {
    icon: Mail,
    title: 'Email Us',
    desc: 'We respond within 2 business hours',
    value: 'hello@eventstudio.com',
    link: 'mailto:hello@eventstudio.com',
    cta: 'Send Email',
  },
  {
    icon: MessageCircle,
    title: 'Live Chat',
    desc: 'Chat with our team in real time',
    value: 'Available Mon–Fri, 9AM–6PM',
    link: '#',
    cta: 'Start Chat',
  },
  {
    icon: Calendar,
    title: 'Book a Consultation',
    desc: 'Schedule a free 30-minute call',
    value: 'Free discovery session',
    link: 'tel:+15551234567',
    cta: 'Book Now',
  },
];

const businessHours = [
  { day: 'Monday – Friday', hours: '9:00 AM – 6:00 PM' },
  { day: 'Saturday', hours: '10:00 AM – 4:00 PM' },
  { day: 'Sunday', hours: 'Closed' },
  { day: 'Public Holidays', hours: 'Emergency line only' },
];

export default function ContactPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPointJsonLd) }}
      />

      <section aria-label="Contact Hero" className="hero-gradient py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-accent/15 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
            <Sparkles className="w-3.5 h-3.5 mr-1.5" />
            Get In Touch
          </Badge>
          <h1 className="text-5xl lg:text-7xl font-bold text-background mb-6 leading-tight">
            Let's Plan Your
            <span className="block gradient-text">Next Event</span>
          </h1>
          <p className="geo-paragraph text-background/70 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Event Studio's team of dedicated event specialists is available across three global offices to assist with inquiries, consultations, and bookings. Whether you're planning a corporate conference, a private celebration, or a large-scale production, our experts are ready to bring your vision to life with personalized attention and world-class service.
          </p>
        </div>
      </section>

      <section aria-label="Contact Methods" className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactMethods.map((method) => (
              <Card key={method.title} className="rounded-2xl border-border/50 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-card group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mb-4 transition-colors duration-200">
                    <method.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground text-base mb-1">{method.title}</h3>
                  <p className="text-muted-foreground text-xs mb-3">{method.desc}</p>
                  <p className="text-foreground font-medium text-sm mb-4">{method.value}</p>
                  <a
                    href={method.link}
                    className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold hover:underline min-h-[44px]"
                  >
                    {method.cta}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section aria-label="Global Offices" className="py-24 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              <Globe className="w-3.5 h-3.5 mr-1.5" />
              Global Presence
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Our Offices</h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
              With offices in New York, London, and Singapore, we're positioned to serve clients across every time zone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offices.map((office) => (
              <Card
                key={office.city}
                className={`rounded-2xl overflow-hidden border-border/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 bg-card ${office.primary ? 'ring-2 ring-primary/30' : ''}`}
              >
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={office.img}
                    alt={`Event Studio ${office.city} office`}
                    fallbackKeyword={`${office.city} cityscape`}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                  />
                  {office.primary && (
                    <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground border-0">
                      Headquarters
                    </Badge>
                  )}
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl">{office.flag}</span>
                    <h3 className="text-xl font-bold text-foreground">{office.city}</h3>
                  </div>
                  <address className="not-italic space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-muted-foreground text-sm whitespace-pre-line">{office.address}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-primary shrink-0" />
                      <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="text-foreground text-sm hover:text-primary transition-colors min-h-[44px] flex items-center">
                        {office.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-primary shrink-0" />
                      <a href={`mailto:${office.email}`} className="text-foreground text-sm hover:text-primary transition-colors min-h-[44px] flex items-center">
                        {office.email}
                      </a>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-muted-foreground text-sm">{office.hours}</span>
                    </div>
                  </address>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section aria-label="Business Hours" className="py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
              <Clock className="w-3.5 h-3.5 mr-1.5" />
              Business Hours
            </Badge>
            <h2 className="text-4xl font-bold text-foreground">When We're Available</h2>
            <p className="text-muted-foreground text-lg mt-4">
              Our team is available during the following hours. For urgent event-day support, we provide 24/7 on-site coordination.
            </p>
          </div>

          <Card className="rounded-2xl border-border/50 shadow-lg bg-card overflow-hidden">
            <div className="bg-gradient-to-r from-primary to-accent p-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary-foreground/20 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-primary-foreground font-bold text-lg">Office Hours</h3>
                  <p className="text-primary-foreground/70 text-sm">All times in local office timezone</p>
                </div>
              </div>
            </div>
            <CardContent className="p-0">
              {businessHours.map((item, i) => (
                <div
                  key={item.day}
                  className={`flex items-center justify-between px-6 py-4 ${i < businessHours.length - 1 ? 'border-b border-border/50' : ''} hover:bg-muted/30 transition-colors`}
                >
                  <span className="font-medium text-foreground text-sm">{item.day}</span>
                  <span className={`text-sm font-semibold ${item.hours === 'Closed' ? 'text-destructive' : 'text-primary'}`}>
                    {item.hours}
                  </span>
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="mt-8 p-6 rounded-2xl bg-primary/5 border border-primary/20">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">Emergency Event Support</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  For active events requiring immediate assistance, our 24/7 emergency line is available to all clients with active event contracts.
                </p>
                <a href="tel:+15559876543" className="text-primary font-semibold text-sm hover:underline">
                  +1 (555) 987-6543 — Emergency Line
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Map" className="py-0">
        <div className="relative h-80 overflow-hidden" style={{ clipPath: 'inset(0 0 20px 0)' }}>
          <iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=-74.0060%2C40.7128%2C-73.9860%2C40.7228&layer=mapnik"
            className="w-full h-full border-0"
            title="Event Studio New York Office Location"
            loading="lazy"
          />
        </div>
      </section>
    </>
  );
}
