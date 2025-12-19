import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, Users, Award, Clock, Star, Heart, Lightbulb, Shield, 
  ChevronLeft, ChevronRight, ArrowRight, Target, Leaf
} from 'lucide-react';
import TestimonialCard from '../components/common/TestimonialCard';
import AgentCard from '../components/common/AgentCard';
import { testimonials, agents } from '../data/mockData';

export default function AboutPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const stats = [
    { icon: Home, value: '10,000+', label: 'Properties Sold' },
    { icon: Users, value: '8,500+', label: 'Happy Clients' },
    { icon: Award, value: '150+', label: 'Expert Agents' },
    { icon: Clock, value: '25+', label: 'Years of Experience' },
  ];

  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We believe in honest, transparent communication with every client.',
    },
    {
      icon: Star,
      title: 'Excellence',
      description: 'We strive for excellence in every transaction and interaction.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We embrace technology to provide better service and results.',
    },
    {
      icon: Heart,
      title: 'Community',
      description: "We're committed to giving back to the communities we serve.",
    },
  ];

  const leadership = [
    {
      name: 'Michael Roberts',
      title: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
      bio: '30+ years of real estate experience. Founded Real Estate with a vision of client-first service.',
    },
    {
      name: 'Sarah Mitchell',
      title: 'Chief Operations Officer',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
      bio: 'Former Fortune 500 executive bringing operational excellence to real estate.',
    },
    {
      name: 'David Chen',
      title: 'Head of Technology',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
      bio: 'Leading our AI-powered property matching and digital transformation initiatives.',
    },
  ];

  const awards = [
    { year: '2024', title: 'Best Real Estate Company', org: 'National Real Estate Awards' },
    { year: '2023', title: 'Customer Service Excellence', org: 'Real Estate Excellence Awards' },
    { year: '2023', title: 'Top 100 Brokerages', org: 'Real Estate Magazine' },
    { year: '2022', title: 'Innovation in PropTech', org: 'Tech Innovation Summit' },
  ];

  const communityInitiatives = [
    {
      icon: Home,
      title: 'Habitat for Humanity',
      description: "We've helped build 50+ homes for families in need.",
    },
    {
      icon: Target,
      title: 'First-Time Buyer Program',
      description: 'Free workshops and resources for new homebuyers.',
    },
    {
      icon: Leaf,
      title: 'Green Building Initiative',
      description: 'Promoting sustainable and eco-friendly construction.',
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen pt-20 bg-cream">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-charcoal text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
            alt="Our team"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
            About Real Estate
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Your Trusted Partner in Real Estate Since 1999. Helping families find their dream homes for over 25 years.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-cream rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-charcoal" />
                </div>
                <p className="text-3xl md:text-4xl font-display font-bold text-charcoal">{stat.value}</p>
                <p className="text-warmGray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-medium text-warmGray-500 uppercase tracking-wide">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal mt-2 mb-6">
                Building Dreams, One Home at a Time
              </h2>
              <div className="space-y-4 text-warmGray-600">
                <p>
                  Real Estate was founded in 1999 with a simple mission: to help families find their perfect home while providing exceptional service every step of the way.
                </p>
                <p>
                  What started as a small office with just three agents has grown into one of the nation's most trusted real estate companies, with over 150 agents serving communities across the country.
                </p>
                <p>
                  Our success is built on a foundation of integrity, expertise, and genuine care for our clients. We believe that buying or selling a home is one of life's most significant moments, and we're honored to be part of that journey.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                alt="Our team at work"
                className="rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-charcoal text-white rounded-xl p-6 shadow-lg">
                <p className="text-3xl font-display font-bold">25+</p>
                <p className="text-white/70">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-cream rounded-2xl p-8">
              <h3 className="text-2xl font-display font-bold text-charcoal mb-4">Our Mission</h3>
              <p className="text-warmGray-600 leading-relaxed">
                To provide exceptional real estate services that empower our clients to make confident decisions. We're committed to integrity, innovation, and creating lasting relationships built on trust.
              </p>
            </div>
            <div className="bg-charcoal rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-display font-bold mb-4">Our Vision</h3>
              <p className="text-white/80 leading-relaxed">
                To be the most trusted name in real estate, known for transforming the home buying and selling experience through technology, expertise, and genuine care for every client we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal mb-4">
              Our Core Values
            </h2>
            <p className="text-warmGray-600">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-card">
                <div className="w-14 h-14 bg-cream rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-charcoal" />
                </div>
                <h3 className="font-display font-semibold text-lg text-charcoal mb-2">
                  {value.title}
                </h3>
                <p className="text-warmGray-600 text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal mb-4">
              Leadership Team
            </h2>
            <p className="text-warmGray-600">
              Meet the visionaries leading Real Estate into the future.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="bg-cream rounded-2xl overflow-hidden group">
                <div className="h-64 overflow-hidden">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display font-semibold text-xl text-charcoal">{leader.name}</h3>
                  <p className="text-warmGray-500 text-sm mb-3">{leader.title}</p>
                  <p className="text-warmGray-600 text-sm">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Agents */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal mb-2">
                Our Amazing Agents
              </h2>
              <p className="text-warmGray-600">
                Expert agents ready to help you achieve your real estate goals.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-charcoal text-white px-6 py-3 rounded-lg font-medium hover:bg-charcoal/90 transition-colors"
            >
              Meet All Agents
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agents.slice(0, 6).map((agent) => (
              <AgentCard key={agent.id} agent={agent} />
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal mb-4">
              Awards & Recognition
            </h2>
            <p className="text-warmGray-600">
              We're honored to be recognized for our commitment to excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award, index) => (
              <div key={index} className="bg-cream rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-charcoal rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm text-warmGray-500 mb-1">{award.year}</p>
                <h3 className="font-display font-semibold text-charcoal mb-1">{award.title}</h3>
                <p className="text-sm text-warmGray-500">{award.org}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal mb-4">
              What Our Clients Say
            </h2>
            <p className="text-warmGray-600">
              Real stories from real clients who trusted us with their real estate journey.
            </p>
          </div>

          <div className="relative max-w-3xl mx-auto">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <TestimonialCard testimonial={testimonial} />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-white shadow-card flex items-center justify-center hover:bg-warmGray-50 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-charcoal" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      currentTestimonial === index ? 'bg-charcoal' : 'bg-warmGray-300'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-white shadow-card flex items-center justify-center hover:bg-warmGray-50 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-charcoal" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Community Involvement */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-medium text-warmGray-500 uppercase tracking-wide">Giving Back</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal mt-2 mb-6">
                Community Involvement
              </h2>
              <p className="text-warmGray-600 mb-8">
                We believe in being more than just a real estate company. We're committed to making a positive impact in the communities we serve.
              </p>
              
              <div className="space-y-6">
                {communityInitiatives.map((initiative, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-cream rounded-lg flex items-center justify-center flex-shrink-0">
                      <initiative.icon className="w-6 h-6 text-charcoal" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-charcoal mb-1">{initiative.title}</h3>
                      <p className="text-warmGray-600 text-sm">{initiative.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80"
                alt="Community involvement"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            Whether you're buying, selling, or renting, our team is here to help you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-charcoal px-8 py-4 rounded-xl font-medium hover:bg-white/90 transition-colors"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/buy"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-medium hover:bg-white/10 transition-colors"
            >
              Browse Properties
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
