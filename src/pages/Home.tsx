import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Home, Key, DollarSign, Search, Calendar, CheckCircle, FileText } from 'lucide-react';
import SearchBar from '../components/common/SearchBar';
import PropertyCard from '../components/common/PropertyCard';
import AgentCard from '../components/common/AgentCard';
import { properties, agents } from '../data/mockData';

export default function HomePage() {
  const [activePropertyTab, setActivePropertyTab] = useState<'buy' | 'sell' | 'rent'>('buy');

  const filteredProperties = properties
    .filter((p) => {
      if (activePropertyTab === 'buy') return p.listingType === 'buy';
      if (activePropertyTab === 'rent') return p.listingType === 'rent';
      return p.featured;
    })
    .slice(0, 4);

  const services = [
    {
      icon: Home,
      title: 'Buy Home',
      description: 'With over 1 million homes for sale, find the perfect match for your lifestyle.',
    },
    {
      icon: Key,
      title: 'Rent a home',
      description: 'Browse through thousands of rental options to suit every budget and need.',
    },
    {
      icon: DollarSign,
      title: 'See Home Prices',
      description: 'List your property in minutes and reach millions of serious buyers instantly.',
    },
  ];

  const steps = [
    {
      number: 1,
      icon: Search,
      title: 'Search & Discover',
      description: 'Browse thousands of listings to find your perfect property.',
    },
    {
      number: 2,
      icon: Calendar,
      title: 'Schedule Visit',
      description: 'Book a viewing at your convenience with our agents.',
    },
    {
      number: 3,
      icon: CheckCircle,
      title: 'Get Pre-Approved',
      description: 'Secure your financing with our mortgage partners.',
    },
    {
      number: 4,
      icon: FileText,
      title: 'Close the Deal',
      description: 'Complete the paperwork and get your keys.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
            alt="Modern luxury home"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
          <div className="max-w-xl lg:max-w-2xl">
            <span className="inline-block text-white/90 text-sm md:text-base font-medium tracking-widest uppercase mb-4">
              Welcome to Real Estate
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white leading-[1.1] mb-6">
              Find a home
              <br />
              <span className="text-white/90">just right for you</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/70 mb-12 leading-relaxed max-w-lg">
              Discover the power of AI-powered property matching. Simplify and enhance your home buying experience.
            </p>
          </div>

          {/* Search Bar */}
          <div className="mt-4">
            <SearchBar variant="hero" />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal mb-3">
                Featured Properties
              </h2>
              <p className="text-warmGray-600">
                Discover our handpicked selection of premium properties.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex gap-2">
              {(['buy', 'sell', 'rent'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActivePropertyTab(tab)}
                  className={`px-5 py-2 rounded-full font-medium text-sm capitalize transition-all ${
                    activePropertyTab === tab
                      ? 'bg-charcoal text-white'
                      : 'bg-white text-warmGray-600 hover:bg-warmGray-100 border border-warmGray-200'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Properties Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} variant="compact" />
            ))}
          </div>

          {/* See More Button */}
          <div className="text-center mt-12">
            <Link
              to={activePropertyTab === 'buy' ? '/buy' : activePropertyTab === 'rent' ? '/rent' : '/sell'}
              className="inline-flex items-center gap-2 bg-charcoal text-white px-8 py-3.5 rounded-lg font-medium hover:bg-charcoal/90 transition-colors"
            >
              See More Properties
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal mb-4">
              See how Real Estate can help
            </h2>
            <p className="text-warmGray-600 text-lg">
              We Do the Heavy Lifting — Making Your Experience Effortless and Enjoyable.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-cream rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 mx-auto bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                  <service.icon className="w-8 h-8 text-charcoal" />
                </div>
                <h3 className="text-xl font-display font-semibold text-charcoal mb-3">
                  {service.title}
                </h3>
                <p className="text-warmGray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal mb-4">
              Peace of mind at every step of your journey home
            </h2>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto bg-white rounded-2xl flex items-center justify-center shadow-card group-hover:shadow-card-hover transition-shadow">
                    <step.icon className="w-8 h-8 text-charcoal" />
                  </div>
                  <div className="absolute -top-2 -left-2 w-8 h-8 bg-charcoal text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-lg font-display font-semibold text-charcoal mb-2">
                  {step.title}
                </h3>
                <p className="text-warmGray-600 text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agents Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal mb-4">
              Start Your Journey With Our Amazing Agents
            </h2>
            <p className="text-warmGray-600">
              Our experienced agents are ready to help you find your dream home.
            </p>
          </div>

          {/* Agents Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {agents.slice(0, 3).map((agent) => (
              <AgentCard key={agent.id} agent={agent} />
            ))}
          </div>

          {/* View All Link */}
          <div className="text-center mt-10">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-charcoal font-medium hover:underline"
            >
              Meet All Our Agents
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Ready to Find Your Dream Home?
              </h2>
              <p className="text-white/70 text-lg max-w-xl">
                Get started today with a free consultation. Our experts are here to guide you through every step.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/buy"
                className="inline-flex items-center justify-center gap-2 bg-white text-charcoal px-8 py-3.5 rounded-lg font-medium hover:bg-white/90 transition-colors"
              >
                Browse Properties
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-3.5 rounded-lg font-medium hover:bg-white/10 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
