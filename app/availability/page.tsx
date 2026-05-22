'use client'

import { useState } from 'react'
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
  Calendar,
  Heart,
  Sparkles,
  Clock,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Shield,
  Users,
  Zap
} from 'lucide-react'

const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
]

const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

type DateStatus = 'available' | 'limited' | 'booked' | 'past'

interface DayInfo {
  day: number
  status: DateStatus
}

function getCalendarDays(year: number, month: number): DayInfo[] {
  const today = new Date()
  const firstDay = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()

  const bookedDays = [3, 7, 10, 14, 17, 21, 24, 28]
  const limitedDays = [4, 8, 11, 15, 18, 22, 25]

  const days: DayInfo[] = []

  for (let i = 0; i < firstDay; i++) {
    days.push({ day: 0, status: 'past' })
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const currentDate = new Date(year, month, d)
    let status: DateStatus = 'available'

    if (currentDate < new Date(today.getFullYear(), today.getMonth(), today.getDate())) {
      status = 'past'
    } else if (bookedDays.includes(d)) {
      status = 'booked'
    } else if (limitedDays.includes(d)) {
      status = 'limited'
    }

    days.push({ day: d, status })
  }

  return days
}

function CalendarWidget() {
  const today = new Date()
  const [currentMonth, setCurrentMonth] = useState(today.getMonth())
  const [currentYear, setCurrentYear] = useState(today.getFullYear())
  const [selectedDay, setSelectedDay] = useState<number | null>(null)

  const days = getCalendarDays(currentYear, currentMonth)

  const goToPrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11)
      setCurrentYear(currentYear - 1)
    } else {
      setCurrentMonth(currentMonth - 1)
    }
    setSelectedDay(null)
  }

  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0)
      setCurrentYear(currentYear + 1)
    } else {
      setCurrentMonth(currentMonth + 1)
    }
    setSelectedDay(null)
  }

  const statusColors: Record<DateStatus, string> = {
    available: 'bg-emerald-500/20 text-emerald-700 border-emerald-500/30 hover:bg-emerald-500/30 cursor-pointer',
    limited: 'bg-amber-500/20 text-amber-700 border-amber-500/30 hover:bg-amber-500/30 cursor-pointer',
    booked: 'bg-red-500/10 text-red-400 border-red-500/20 cursor-not-allowed line-through opacity-50',
    past: 'text-muted-foreground/30 cursor-default'
  }

  return (
    <div className="rounded-2xl border border-border/50 bg-card shadow-lg overflow-hidden">
      <div className="bg-primary/5 border-b border-border/50 p-6">
        <div className="flex items-center justify-between">
          <button
            onClick={goToPrevMonth}
            className="w-10 h-10 rounded-xl bg-background border border-border/50 flex items-center justify-center hover:bg-muted transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <h3 className="text-xl font-bold tracking-tight text-foreground">
            {monthNames[currentMonth]} {currentYear}
          </h3>
          <button
            onClick={goToNextMonth}
            className="w-10 h-10 rounded-xl bg-background border border-border/50 flex items-center justify-center hover:bg-muted transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>
        </div>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-7 gap-1 mb-3">
          {dayNames.map((name) => (
            <div key={name} className="text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground py-2">
              {name}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">
          {days.map((dayInfo, index) => (
            <div key={index} className="aspect-square flex items-center justify-center">
              {dayInfo.day === 0 ? (
                <span />
              ) : (
                <button
                  onClick={() => {
                    if (dayInfo.status === 'available' || dayInfo.status === 'limited') {
                      setSelectedDay(dayInfo.day)
                    }
                  }}
                  disabled={dayInfo.status === 'booked' || dayInfo.status === 'past'}
                  className={`w-full h-full rounded-lg text-sm font-medium border transition-all duration-200 flex items-center justify-center ${statusColors[dayInfo.status]} ${selectedDay === dayInfo.day ? 'ring-2 ring-primary ring-offset-2 ring-offset-card scale-110' : ''}`}
                >
                  {dayInfo.day}
                </button>
              )}
            </div>
          ))}
        </div>

        <Separator className="my-5" />

        <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-500/40 border border-emerald-500/50" />
            <span className="text-muted-foreground">Available</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-amber-500/40 border border-amber-500/50" />
            <span className="text-muted-foreground">Limited</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/30" />
            <span className="text-muted-foreground">Booked</span>
          </div>
        </div>

        {selectedDay && (
          <div className="mt-5 p-4 rounded-xl bg-primary/5 border border-primary/20 animate-fade-in">
            <p className="text-sm font-medium text-foreground">
              <Calendar className="w-4 h-4 inline mr-2 text-primary" />
              {monthNames[currentMonth]} {selectedDay}, {currentYear} — {' '}
              {days.find(d => d.day === selectedDay)?.status === 'limited'
                ? 'Limited availability. Contact us soon!'
                : 'This date is available!'}
            </p>
            <a href={`tel:(912) 555-0188`}>
              <Button className="mt-3 w-full" size="sm">
                <Phone className="w-4 h-4 mr-2" />
                Reserve This Date
              </Button>
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

function SeasonalAvailability() {
  const seasons = [
    {
      season: 'Spring 2025',
      months: 'March – May',
      status: 'limited' as const,
      weddings: 8,
      remaining: 3,
      icon: <Sparkles className="w-5 h-5" />,
      note: 'Peak azalea season in Savannah — high demand'
    },
    {
      season: 'Summer 2025',
      months: 'June – August',
      status: 'available' as const,
      weddings: 4,
      remaining: 8,
      icon: <Star className="w-5 h-5" />,
      note: 'Intimate summer celebrations with golden hour magic'
    },
    {
      season: 'Fall 2025',
      months: 'September – November',
      status: 'limited' as const,
      weddings: 10,
      remaining: 2,
      icon: <Heart className="w-5 h-5" />,
      note: 'Our most requested season — book early'
    },
    {
      season: 'Winter 2025/26',
      months: 'December – February',
      status: 'available' as const,
      weddings: 3,
      remaining: 9,
      icon: <Zap className="w-5 h-5" />,
      note: 'Holiday elegance and off-season pricing available'
    }
  ]

  const statusConfig = {
    available: { label: 'Open', color: 'bg-emerald-500/10 text-emerald-700 border-emerald-500/30' },
    limited: { label: 'Filling Fast', color: 'bg-amber-500/10 text-amber-700 border-amber-500/30' },
    booked: { label: 'Full', color: 'bg-red-500/10 text-red-500 border-red-500/30' }
  }

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {seasons.map((s, i) => (
        <Card
          key={s.season}
          className="rounded-2xl border border-border/50 bg-card shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-slide-up"
          style={{ animationDelay: `${i * 150}ms` }}
        >
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  {s.icon}
                </div>
                <div>
                  <CardTitle className="text-lg">{s.season}</CardTitle>
                  <CardDescription>{s.months}</CardDescription>
                </div>
              </div>
              <Badge variant="outline" className={`${statusConfig[s.status].color} text-xs font-semibold`}>
                {statusConfig[s.status].label}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="mb-3">
              <div className="flex justify-between text-sm mb-1.5">
                <span className="text-muted-foreground">Capacity</span>
                <span className="font-medium text-foreground">{s.weddings} of {s.weddings + s.remaining} booked</span>
              </div>
              <div className="w-full h-2 rounded-full bg-muted overflow-hidden">
                <div
                  className="h-full rounded-full bg-primary transition-all duration-700"
                  style={{ width: `${(s.weddings / (s.weddings + s.remaining)) * 100}%` }}
                />
              </div>
            </div>
            <p className="text-sm text-muted-foreground italic">{s.note}</p>
            <p className="text-sm font-semibold text-primary mt-2">{s.remaining} dates remaining</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default function AvailabilityPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Ember & Oak Events',
    description: 'Full-service wedding and event planning in Savannah, Georgia. Luxury design and stress-free coordination.',
    url: 'https://emberoakevents.com/availability',
    telephone: '(912) 555-0188',
    email: 'hello@emberoakevents.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '412 Bull St',
      addressLocality: 'Savannah',
      addressRegion: 'GA',
      postalCode: ''
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '32.0809',
      longitude: '-81.0912'
    },
    openingHoursSpecification: '{}',
    makesOffer: [
      {
        '@type': 'Offer',
        name: 'Day-of Coordination',
        price: '1800',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock'
      },
      {
        '@type': 'Offer',
        name: 'Partial Planning',
        price: '4500',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock'
      },
      {
        '@type': 'Offer',
        name: 'Full Planning',
        price: '8000',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock'
      }
    ],
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['.geo-paragraph', 'h1']
    }
  }

  const popularDates = [
    { date: 'March 15, 2025', event: 'Spring Garden Wedding', status: 'booked' },
    { date: 'April 5, 2025', event: 'Forsyth Park Ceremony', status: 'booked' },
    { date: 'May 10, 2025', event: 'Mother\'s Day Weekend', status: 'limited' },
    { date: 'June 21, 2025', event: 'Summer Solstice Celebration', status: 'available' },
    { date: 'October 18, 2025', event: 'Fall Harvest Gala', status: 'limited' },
    { date: 'December 31, 2025', event: 'New Year\'s Eve Soirée', status: 'available' }
  ]

  const statusBadge = (status: string) => {
    const config: Record<string, { label: string; className: string }> = {
      available: { label: 'Available', className: 'bg-emerald-500/10 text-emerald-700 border-emerald-500/30' },
      limited: { label: 'Limited', className: 'bg-amber-500/10 text-amber-700 border-amber-500/30' },
      booked: { label: 'Booked', className: 'bg-red-500/10 text-red-400 border-red-500/30' }
    }
    const c = config[status] || config.available
    return <Badge variant="outline" className={`${c.className} text-xs font-semibold`}>{c.label}</Badge>
  }

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main>
        {/* Hero Section */}
        <section aria-label="Availability hero" className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-hero">
          <div className="absolute inset-0">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1920"
              alt="Elegant wedding venue in Savannah"
              fallbackKeyword="wedding venue savannah"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
          </div>

          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
            <Badge variant="outline" className="mb-6 rounded-full border-white/30 text-white/90 bg-white/10 backdrop-blur-sm px-5 py-2 text-xs font-semibold uppercase tracking-wider">
              <Calendar className="w-3.5 h-3.5 mr-2" />
              Check Date Availability
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Reserve Your Date with{'\n'}
              <span className="text-primary">{'Ember & Oak Events'}</span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
              Our calendar fills quickly — especially during peak season in {'Savannah'}.
              Browse availability below and secure your dream date before it&apos;s taken.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:(912) 555-0188`}>
                <Button size="lg" className="text-base px-8 py-6 rounded-full shadow-lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Call to Reserve
                </Button>
              </a>
              <a href={`mailto:hello@emberoakevents.com`}>
                <Button size="lg" variant="outline" className="text-base px-8 py-6 rounded-full border-white/30 text-white hover:bg-white/10 bg-white/5 backdrop-blur-sm">
                  <Mail className="w-5 h-5 mr-2" />
                  Email Inquiry
                </Button>
              </a>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-8 animate-slide-up" style={{ animationDelay: '300ms' }}>
              {[
                { value: '200+', label: 'Events Planned' },
                { value: '98%', label: 'Client Satisfaction' },
                { value: '12', label: 'Months Ahead Booking' }
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl font-bold text-white">{stat.value}</p>
                  <p className="text-sm text-white/60 uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Calendar Section */}
        <section aria-label="Calendar availability" className="py-20 md:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">Real-Time Availability</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
                Browse Our Calendar
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Select a date to check availability for your wedding, corporate event, or celebration.
                Green dates are open, amber means limited spots remain.
              </p>
            </div>

            <div className="grid lg:grid-cols-5 gap-10 items-start">
              <div className="lg:col-span-3 animate-slide-up">
                <CalendarWidget />
              </div>

              <div className="lg:col-span-2 space-y-6 animate-slide-up" style={{ animationDelay: '200ms' }}>
                <Card className="rounded-2xl border border-border/50 bg-card shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Clock className="w-5 h-5 text-primary" />
                      Business Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{'Mon–Fri: 9:00 AM – 5:00 PM'}</p>
                    <Separator className="my-4" />
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-sm">
                        <Phone className="w-4 h-4 text-primary" />
                        <a href={`tel:(912) 555-0188`} className="text-foreground hover:text-primary transition-colors">{'(912) 555-0188'}</a>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Mail className="w-4 h-4 text-primary" />
                        <a href={`mailto:hello@emberoakevents.com`} className="text-foreground hover:text-primary transition-colors">{'hello@emberoakevents.com'}</a>
                      </div>
                      <div className="flex items-start gap-3 text-sm">
                        <MapPin className="w-4 h-4 text-primary mt-0.5" />
                        <span className="text-muted-foreground">{'412 Bull St, Savannah, GA'}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="rounded-2xl border border-accent/30 bg-accent/5 shadow-sm">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Shield className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Booking Guarantee</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Once you secure your date with {'Ember & Oak Events'}, it&apos;s exclusively yours.
                          We limit our bookings to ensure every event receives our full attention and dedication.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="rounded-2xl border border-primary/30 bg-primary/5 shadow-sm">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Sparkles className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Peak Season Alert</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Spring and fall dates in {'Savannah'} book 6–12 months in advance.
                          We recommend reaching out early to secure your preferred date.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Seasonal Availability Section */}
        <section aria-label="Seasonal availability" className="py-20 md:py-28 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">Seasonal Overview</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
                Availability by Season
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Each season in {'Savannah'} brings its own magic. Here&apos;s a snapshot of our current booking status
                to help you plan your perfect event.
              </p>
            </div>

            <SeasonalAvailability />
          </div>
        </section>

        {/* Popular Dates Section */}
        <section aria-label="Popular dates" className="py-20 md:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-slide-up">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">Trending Dates</p>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
                  Most Requested Dates
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  These are the dates our clients ask about most. If you have your heart set on one of these,
                  don&apos;t wait — reach out to {'Ember & Oak Events'} today to secure your spot.
                </p>

                <div className="space-y-3">
                  {popularDates.map((item, i) => (
                    <div
                      key={item.date}
                      className="flex items-center justify-between p-4 rounded-xl border border-border/50 bg-card hover:shadow-md transition-all duration-300 animate-slide-up"
                      style={{ animationDelay: `${i * 100}ms` }}
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                          <Calendar className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground text-sm">{item.date}</p>
                          <p className="text-xs text-muted-foreground">{item.event}</p>
                        </div>
                      </div>
                      {statusBadge(item.status)}
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative animate-slide-up" style={{ animationDelay: '200ms' }}>
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=1200"
                    alt="Romantic wedding ceremony in Savannah garden"
                    fallbackKeyword="savannah wedding ceremony garden"
                    className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-5 shadow-xl border border-border/50 animate-fade-in" style={{ animationDelay: '500ms' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Heart className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-foreground text-lg">200+</p>
                      <p className="text-xs text-muted-foreground">Unforgettable Events</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Packages Quick Reference */}
        <section aria-label="Packages overview" className="py-20 md:py-28 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">Our Packages</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
                Choose Your Planning Experience
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Every package includes access to our trusted vendor network and the signature {'Ember & Oak Events'} touch.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Day-of Coordination',
                  price: '$1,800',
                  description: 'Perfect for couples who have planned everything but need a professional to execute flawlessly on the big day.',
                  features: [
                    'Full day-of management',
                    'Vendor coordination',
                    'Timeline creation & execution',
                    'Emergency kit on-site',
                    'Up to 8 hours of coverage'
                  ],
                  popular: false
                },
                {
                  name: 'Partial Planning',
                  price: '$4,500',
                  description: 'Ideal when you need expert guidance on key decisions while maintaining creative control over your vision.',
                  features: [
                    'Everything in Day-of',
                    'Vendor recommendations & booking',
                    'Design consultation',
                    'Budget management',
                    'Monthly planning meetings',
                    'Rehearsal coordination'
                  ],
                  popular: true
                },
                {
                  name: 'Full Planning',
                  price: '$8,000+',
                  description: 'The ultimate luxury experience — we handle every detail from engagement to send-off so you can simply enjoy.',
                  features: [
                    'Everything in Partial',
                    'Complete design & styling',
                    'Venue scouting & selection',
                    'Custom stationery design',
                    'Guest experience management',
                    'Welcome event planning',
                    'Honeymoon coordination'
                  ],
                  popular: false
                }
              ].map((pkg, i) => (
                <Card
                  key={pkg.name}
                  className={`rounded-2xl border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-slide-up relative overflow-hidden ${pkg.popular ? 'border-primary/50 bg-card ring-1 ring-primary/20' : 'border-border/50 bg-card'}`}
                  style={{ animationDelay: `${i * 150}ms` }}
                >
                  {pkg.popular && (
                    <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-wider px-4 py-1.5 rounded-bl-xl">
                      Most Popular
                    </div>
                  )}
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl">{pkg.name}</CardTitle>
                    <div className="flex items-baseline gap-1 mt-2">
                      <span className="text-3xl font-bold text-foreground">{pkg.price}</span>
                    </div>
                    <CardDescription className="mt-2">{pkg.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-sm">
                          <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a href={`tel:(912) 555-0188`}>
                      <Button className={`w-full mt-6 rounded-full ${pkg.popular ? '' : 'variant-outline'}`} variant={pkg.popular ? 'default' : 'outline'}>
                        Check Availability
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Process Section */}
        <section aria-label="Booking process" className="py-20 md:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">How It Works</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
                Securing Your Date Is Simple
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                From inquiry to confirmation, our streamlined process ensures your special date is reserved quickly and effortlessly.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Inquire',
                  description: 'Reach out via phone, email, or our contact form with your preferred date and event details.',
                  icon: <Mail className="w-6 h-6" />
                },
                {
                  step: '02',
                  title: 'Consultation',
                  description: 'We schedule a complimentary consultation to discuss your vision, style, and planning needs.',
                  icon: <Users className="w-6 h-6" />
                },
                {
                  step: '03',
                  title: 'Proposal',
                  description: 'Receive a customized proposal with package recommendations tailored to your event.',
                  icon: <Sparkles className="w-6 h-6" />
                },
                {
                  step: '04',
                  title: 'Reserve',
                  description: 'Sign your agreement and secure your date with a retainer — it\'s officially yours!',
                  icon: <Check className="w-6 h-6" />
                }
              ].map((item, i) => (
                <div
                  key={item.step}
                  className="text-center group animate-slide-up"
                  style={{ animationDelay: `${i * 150}ms` }}
                >
                  <div className="relative mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      {item.icon}
                    </div>
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent/20 text-accent text-xs font-bold flex items-center justify-center border border-accent/30">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GEO Paragraph & Testimonial */}
        <section aria-label="About our location" className="py-20 md:py-28 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-slide-up">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">Why {'Savannah'}</p>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
                  The Perfect Backdrop for Your Event
                </h2>
                <p className="geo-paragraph text-muted-foreground leading-relaxed mb-6">
                  {'Ember & Oak Events'} is proudly based in {'Savannah'}, {'GA'} — one of the most romantic and
                  historically rich cities in the American South. Known for its iconic cobblestone streets, magnificent
                  oak-lined squares draped in Spanish moss, and stunning antebellum architecture, {'Savannah'} provides
                  an unparalleled setting for weddings, corporate galas, and milestone celebrations. The city&apos;s
                  vibrant arts scene, world-class dining, and year-round temperate climate make it a premier destination
                  for events of every scale and style.
                </p>

                <div className="p-6 rounded-2xl bg-card border border-border/50 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground italic mt-3 leading-relaxed">
                    &ldquo;We booked {'Ember & Oak Events'} for our October wedding and it was the best decision we made.
                    They handled everything with such grace — from coordinating with our venue at Forsyth Park to managing
                    our 200+ guest list. Our date was secured within 48 hours of our first call.&rdquo;
                  </p>
                  <p className="text-sm font-semibold text-foreground mt-3">— Sarah & Michael T.</p>
                  <p className="text-xs text-muted-foreground">Fall 2026 Wedding</p>
                </div>
              </div>

              <div className="relative animate-slide-up" style={{ animationDelay: '200ms' }}>
                <div className="rounded-2xl overflow-hidden shadow-xl" style={{ height: '450px' }}>
                  <iframe
                    src={`https://www.openstreetmap.org/export/embed.html?bbox=${parseFloat('-81.0912') - 0.01}%2C${parseFloat('32.0809') - 0.008}%2C${parseFloat('-81.0912') + 0.01}%2C${parseFloat('32.0809') + 0.008}&layer=mapnik&marker=32.0809%2C-81.0912`}
                    className="w-full border-0"
                    style={{ height: 'calc(100% + 40px)' }}
                    loading="lazy"
                    title={`Ember & Oak Events location in Savannah, GA`}
                  />
                </div>
                <div className="absolute -top-4 -right-4 bg-card rounded-2xl p-4 shadow-xl border border-border/50">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">{'Savannah'}, {'GA'}</p>
                      <p className="text-xs text-muted-foreground">{'412 Bull St'}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section aria-label="Contact call to action" className="py-20 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1920"
              alt="Elegant wedding reception table setting"
              fallbackKeyword="luxury wedding reception decor"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/75 to-black/85" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center animate-fade-in">
            <Badge variant="outline" className="mb-6 rounded-full border-white/30 text-white/90 bg-white/10 backdrop-blur-sm px-5 py-2 text-xs font-semibold uppercase tracking-wider">
              <Heart className="w-3.5 h-3.5 mr-2" />
              Let&apos;s Create Something Beautiful
            </Badge>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
              Let&apos;s Plan Something{' '}
              <span className="text-primary">Unforgettable</span>
            </h2>

            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
              Your perfect date won&apos;t wait forever. Contact {'Ember & Oak Events'} today to check availability
              and begin planning the event of your dreams in beautiful {'Savannah'}, {'GA'}.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:(912) 555-0188`}>
                <Button size="lg" className="text-base px-10 py-6 rounded-full shadow-lg">
                  <Phone className="w-5 h-5 mr-2" />
                  {'(912) 555-0188'}
                </Button>
              </a>
              <a href={`mailto:hello@emberoakevents.com`}>
                <Button size="lg" variant="outline" className="text-base px-10 py-6 rounded-full border-white/30 text-white hover:bg-white/10 bg-white/5 backdrop-blur-sm">
                  <Mail className="w-5 h-5 mr-2" />
                  {'hello@emberoakevents.com'}
                </Button>
              </a>
            </div>

            <p className="text-white/50 text-sm mt-8">
              {'Mon–Fri: 9:00 AM – 5:00 PM'} · {'412 Bull St, Savannah, GA'}
            </p>
          </div>
        </section>
      </main>
    </>
  )
}
