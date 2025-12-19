import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, Home, DollarSign, Camera, Megaphone, FileCheck, Key, 
  Star, TrendingUp, Clock, Award, ArrowRight, CheckCircle, Users
} from 'lucide-react';
import TestimonialCard from '../components/common/TestimonialCard';
import AgentCard from '../components/common/AgentCard';
import { testimonials, agents } from '../data/mockData';

export default function SellPage() {
  const [address, setAddress] = useState('');
  const [propertyType, setPropertyType] = useState('house');
  const [bedrooms, setBedrooms] = useState(3);
  const [bathrooms, setBathrooms] = useState(2);
  const [sqft, setSqft] = useState(2000);
  const [showEstimate, setShowEstimate] = useState(false);

  const estimatedValue = Math.round((sqft * 350 + bedrooms * 25000 + bathrooms * 15000) / 1000) * 1000;

  const sellingSteps = [
    {
      step: 1,
      icon: DollarSign,
      title: 'Free Home Valuation',
      description: 'Get an accurate estimate of your home\'s worth with our AI-powered valuation tool.',
    },
    {
      step: 2,
      icon: Home,
      title: 'Prepare Your Home',
      description: 'Our experts will guide you on staging and improvements to maximize value.',
    },
    {
      step: 3,
      icon: Camera,
      title: 'Professional Photography',
      description: 'Stunning photos and 3D virtual tours to showcase your property.',
    },
    {
      step: 4,
      icon: Megaphone,
      title: 'List & Market',
      description: 'Maximum exposure on all major platforms and social media.',
    },
    {
      step: 5,
      icon: FileCheck,
      title: 'Review Offers',
      description: 'We negotiate on your behalf to get you the best possible price.',
    },
    {
      step: 6,
      icon: Key,
      title: 'Close the Sale',
      description: 'Smooth closing process with our experienced transaction team.',
    },
  ];

  const stats = [
    { icon: Clock, value: '21', label: 'Average Days on Market' },
    { icon: TrendingUp, value: '102%', label: 'Average Sale vs List Price' },
    { icon: Star, value: '4.9', label: 'Client Satisfaction' },
    { icon: Award, value: '500+', label: 'Homes Sold This Year' },
  ];

  const marketingFeatures = [
    'Professional HDR Photography',
    '3D Virtual Tour & Floor Plans',
    'Drone Aerial Photography',
    'Targeted Social Media Campaigns',
    'Featured on Top Real Estate Sites',
    'Open House Coordination',
    'Print Marketing Materials',
    'Email Marketing to Qualified Buyers',
  ];

  const handleGetEstimate = () => {
    if (address) {
      setShowEstimate(true);
    }
  };

  const sellerTestimonials = testimonials.filter((t) => t.type === 'seller');

  return (
    <div className="min-h-screen pt-20 bg-cream">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-charcoal text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
            alt="Sold homes"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Sell Your Home with Confidence
              </h1>
              <p className="text-xl text-white/80 mb-8">
                Get the best price with our expert guidance. We've helped thousands of homeowners sell quickly and for top dollar.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#valuation"
                  className="inline-flex items-center gap-2 bg-white text-charcoal px-8 py-4 rounded-xl font-medium hover:bg-white/90 transition-colors"
                >
                  <DollarSign className="w-5 h-5" />
                  Get Free Home Valuation
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-medium hover:bg-white/10 transition-colors"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center"
                  >
                    <stat.icon className="w-8 h-8 mx-auto mb-3 text-white/80" />
                    <p className="text-3xl font-display font-bold">{stat.value}</p>
                    <p className="text-sm text-white/70 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Home Valuation Tool */}
      <section id="valuation" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-sm font-medium text-warmGray-500 uppercase tracking-wide">Instant Estimate</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal mt-2 mb-4">
                What's Your Home Worth?
              </h2>
              <p className="text-warmGray-600 mb-8">
                Get a free, instant estimate of your home's value. Our AI-powered valuation tool analyzes thousands of recent sales to give you an accurate price range.
              </p>
              
              {/* Valuation Form */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-warmGray-700 mb-2">Property Address</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-warmGray-400" />
                    <input
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Enter your property address"
                      className="w-full pl-12 pr-4 py-4 rounded-xl border border-warmGray-200 focus:outline-none focus:ring-2 focus:ring-charcoal/20"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-warmGray-700 mb-2">Property Type</label>
                    <select
                      value={propertyType}
                      onChange={(e) => setPropertyType(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-warmGray-200 focus:outline-none focus:ring-2 focus:ring-charcoal/20"
                    >
                      <option value="house">House</option>
                      <option value="condo">Condo</option>
                      <option value="townhouse">Townhouse</option>
                      <option value="apartment">Apartment</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-warmGray-700 mb-2">Square Footage</label>
                    <input
                      type="number"
                      value={sqft}
                      onChange={(e) => setSqft(Number(e.target.value))}
                      placeholder="2000"
                      className="w-full px-4 py-3 rounded-xl border border-warmGray-200 focus:outline-none focus:ring-2 focus:ring-charcoal/20"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-warmGray-700 mb-2">Bedrooms</label>
                    <select
                      value={bedrooms}
                      onChange={(e) => setBedrooms(Number(e.target.value))}
                      className="w-full px-4 py-3 rounded-xl border border-warmGray-200 focus:outline-none focus:ring-2 focus:ring-charcoal/20"
                    >
                      {[1, 2, 3, 4, 5, 6].map((num) => (
                        <option key={num} value={num}>{num}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-warmGray-700 mb-2">Bathrooms</label>
                    <select
                      value={bathrooms}
                      onChange={(e) => setBathrooms(Number(e.target.value))}
                      className="w-full px-4 py-3 rounded-xl border border-warmGray-200 focus:outline-none focus:ring-2 focus:ring-charcoal/20"
                    >
                      {[1, 2, 3, 4, 5].map((num) => (
                        <option key={num} value={num}>{num}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <button
                  onClick={handleGetEstimate}
                  className="w-full bg-charcoal text-white py-4 rounded-xl font-medium hover:bg-charcoal/90 transition-colors flex items-center justify-center gap-2"
                >
                  Get Instant Estimate
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Estimate Result */}
            <div className="bg-cream rounded-2xl p-8">
              {showEstimate ? (
                <div className="text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-charcoal mb-2">
                    Your Estimated Home Value
                  </h3>
                  <p className="text-4xl md:text-5xl font-display font-bold text-charcoal mb-2">
                    ${estimatedValue.toLocaleString()}
                  </p>
                  <p className="text-warmGray-500 mb-8">
                    Range: ${(estimatedValue * 0.9).toLocaleString()} - ${(estimatedValue * 1.1).toLocaleString()}
                  </p>
                  <div className="space-y-4">
                    <Link
                      to="/contact"
                      className="block w-full bg-charcoal text-white py-3 rounded-xl font-medium hover:bg-charcoal/90 transition-colors"
                    >
                      Schedule Professional Appraisal
                    </Link>
                    <button
                      onClick={() => setShowEstimate(false)}
                      className="block w-full border-2 border-charcoal text-charcoal py-3 rounded-xl font-medium hover:bg-charcoal/5 transition-colors"
                    >
                      Get Another Estimate
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <Home className="w-16 h-16 text-warmGray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-display font-semibold text-charcoal mb-2">
                    Enter Your Property Details
                  </h3>
                  <p className="text-warmGray-500">
                    Fill out the form to get an instant estimate of your home's value.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Selling Process Timeline */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal mb-4">
              Our Proven Selling Process
            </h2>
            <p className="text-warmGray-600">
              We guide you through every step, from valuation to closing, ensuring a smooth and profitable sale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sellingSteps.map((step) => (
              <div
                key={step.step}
                className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow relative"
              >
                <div className="absolute -top-3 -left-3 w-10 h-10 bg-charcoal text-white rounded-full flex items-center justify-center font-bold">
                  {step.step}
                </div>
                <div className="w-14 h-14 bg-cream rounded-xl flex items-center justify-center mb-4 mt-2">
                  <step.icon className="w-7 h-7 text-charcoal" />
                </div>
                <h3 className="font-display font-semibold text-lg text-charcoal mb-2">
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

      {/* Why Sell With Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal mb-6">
                Why Sell With Real Estate?
              </h2>
              <p className="text-warmGray-600 mb-8">
                We combine cutting-edge technology with personalized service to help you sell your home faster and for more money.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-cream rounded-xl p-4">
                    <p className="text-2xl font-display font-bold text-charcoal">{stat.value}</p>
                    <p className="text-sm text-warmGray-500">{stat.label}</p>
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-charcoal text-white px-8 py-4 rounded-xl font-medium hover:bg-charcoal/90 transition-colors"
              >
                Start Selling Today
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Marketing Package */}
            <div className="bg-cream rounded-2xl p-8">
              <h3 className="font-display font-semibold text-xl text-charcoal mb-6 flex items-center gap-2">
                <Megaphone className="w-6 h-6" />
                Premium Marketing Package
              </h3>
              <p className="text-warmGray-600 mb-6">
                Every listing includes our comprehensive marketing package designed to get your home maximum exposure.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {marketingFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-warmGray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal mb-4">
              Success Stories from Our Sellers
            </h2>
            <p className="text-warmGray-600">
              Hear from homeowners who trusted us with their most important asset.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {(sellerTestimonials.length > 0 ? sellerTestimonials : testimonials.slice(0, 3)).map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Listing Agents */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal mb-4">
              Meet Our Listing Agents
            </h2>
            <p className="text-warmGray-600">
              Our experienced agents specialize in selling homes quickly and for top dollar.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {agents.slice(0, 3).map((agent) => (
              <AgentCard key={agent.id} agent={agent} />
            ))}
          </div>
        </div>
      </section>

      {/* Get Started CTA */}
      <section className="py-20 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Ready to List Your Property?
              </h2>
              <p className="text-white/80 text-lg mb-8">
                Get started with a free consultation. Our team will create a customized selling strategy for your home.
              </p>
              <div className="flex items-center gap-4 text-white/70">
                <Users className="w-5 h-5" />
                <span>Over 10,000 homes sold nationwide</span>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8">
              <h3 className="font-display font-semibold text-xl text-charcoal mb-6">
                Schedule Your Free Consultation
              </h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg border border-warmGray-200 focus:outline-none focus:ring-2 focus:ring-charcoal/20"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-lg border border-warmGray-200 focus:outline-none focus:ring-2 focus:ring-charcoal/20"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-lg border border-warmGray-200 focus:outline-none focus:ring-2 focus:ring-charcoal/20"
                />
                <input
                  type="text"
                  placeholder="Property Address"
                  className="w-full px-4 py-3 rounded-lg border border-warmGray-200 focus:outline-none focus:ring-2 focus:ring-charcoal/20"
                />
                <button
                  type="submit"
                  className="w-full bg-charcoal text-white py-4 rounded-lg font-medium hover:bg-charcoal/90 transition-colors"
                >
                  Schedule Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
