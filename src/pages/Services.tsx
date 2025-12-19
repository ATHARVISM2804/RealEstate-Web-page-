import { Link } from 'react-router-dom';
import { 
  Home, Key, DollarSign, Building2, TrendingUp, Plane, 
  Landmark, Shield, Scale, Sparkles, Truck, ClipboardCheck,
  ArrowRight, CheckCircle, MapPin, Users, Phone
} from 'lucide-react';

export default function ServicesPage() {
  const mainServices = [
    {
      icon: Home,
      title: 'Property Buying',
      description: 'Find your perfect home with our expert guidance. We help you navigate the buying process from search to closing.',
      features: ['Personalized property search', 'Neighborhood insights', 'Offer negotiation', 'Closing coordination'],
      link: '/buy',
    },
    {
      icon: DollarSign,
      title: 'Property Selling',
      description: 'Sell your home quickly and for top dollar with our proven marketing strategies and expert pricing.',
      features: ['Free home valuation', 'Professional photography', 'Maximum exposure marketing', 'Skilled negotiation'],
      link: '/sell',
    },
    {
      icon: Key,
      title: 'Rental Services',
      description: 'Whether you\'re looking to rent or have a property to rent out, we provide comprehensive rental solutions.',
      features: ['Tenant screening', 'Lease preparation', 'Rent collection', 'Maintenance coordination'],
      link: '/rent',
    },
    {
      icon: Building2,
      title: 'Property Management',
      description: 'Let us handle the day-to-day operations of your rental properties while you focus on what matters most.',
      features: ['24/7 maintenance support', 'Financial reporting', 'Tenant relations', 'Property inspections'],
      link: '/contact',
    },
    {
      icon: TrendingUp,
      title: 'Investment Consulting',
      description: 'Maximize your real estate investment returns with our data-driven analysis and market expertise.',
      features: ['Market analysis', 'ROI projections', 'Portfolio management', 'Investment opportunities'],
      link: '/contact',
    },
    {
      icon: Plane,
      title: 'Relocation Services',
      description: 'Moving to a new city? We\'ll help you find the perfect neighborhood and home to match your lifestyle.',
      features: ['Area orientation tours', 'School district info', 'Local amenities guide', 'Temporary housing assistance'],
      link: '/contact',
    },
  ];

  const additionalServices = [
    {
      icon: Landmark,
      title: 'Mortgage & Financing',
      description: 'Connect with trusted lenders and get pre-approved quickly.',
    },
    {
      icon: Shield,
      title: 'Home Insurance',
      description: 'Find the right coverage to protect your investment.',
    },
    {
      icon: Scale,
      title: 'Legal Services',
      description: 'Access our network of real estate attorneys.',
    },
    {
      icon: Sparkles,
      title: 'Home Staging',
      description: 'Professional staging to showcase your home\'s potential.',
    },
    {
      icon: Truck,
      title: 'Moving Services',
      description: 'Trusted moving partners for a stress-free relocation.',
    },
    {
      icon: ClipboardCheck,
      title: 'Home Inspection',
      description: 'Thorough inspections by certified professionals.',
    },
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Consultation',
      description: 'Tell us about your real estate needs and goals.',
    },
    {
      step: 2,
      title: 'Customized Plan',
      description: 'We create a tailored strategy for your situation.',
    },
    {
      step: 3,
      title: 'Expert Execution',
      description: 'Our team handles every detail with precision.',
    },
    {
      step: 4,
      title: 'Successful Outcome',
      description: 'Achieve your real estate goals with confidence.',
    },
  ];

  const serviceAreas = [
    { name: 'New York Metro', properties: 1250, agents: 45 },
    { name: 'Los Angeles', properties: 980, agents: 38 },
    { name: 'Miami', properties: 720, agents: 28 },
    { name: 'Chicago', properties: 650, agents: 25 },
    { name: 'San Francisco', properties: 540, agents: 22 },
    { name: 'Boston', properties: 480, agents: 18 },
  ];

  return (
    <div className="min-h-screen pt-20 bg-cream">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-charcoal text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80"
            alt="Real estate services"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Comprehensive Real Estate Services
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Everything you need for your property journey. From buying to selling, renting to investing — we've got you covered.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-charcoal px-8 py-4 rounded-xl font-medium hover:bg-white/90 transition-colors"
          >
            Get Started Today
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal mb-4">
              Our Core Services
            </h2>
            <p className="text-warmGray-600">
              Professional real estate services tailored to your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-cream rounded-xl flex items-center justify-center mb-6 group-hover:bg-charcoal group-hover:text-white transition-colors">
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="font-display font-semibold text-xl text-charcoal mb-3">
                  {service.title}
                </h3>
                <p className="text-warmGray-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-warmGray-600">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.link}
                  className="inline-flex items-center gap-1 text-charcoal font-medium hover:underline"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal mb-4">
              Additional Services
            </h2>
            <p className="text-warmGray-600">
              We've partnered with trusted professionals to offer you a complete range of services.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-cream rounded-xl hover:bg-warmGray-100 transition-colors"
              >
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                  <service.icon className="w-6 h-6 text-charcoal" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg text-charcoal mb-1">
                    {service.title}
                  </h3>
                  <p className="text-warmGray-600 text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal mb-4">
              How It Works
            </h2>
            <p className="text-warmGray-600">
              Simple, transparent, and designed around your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.step} className="text-center relative">
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-warmGray-200" />
                )}
                <div className="relative z-10 w-20 h-20 bg-charcoal text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
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

          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-charcoal text-white px-8 py-4 rounded-xl font-medium hover:bg-charcoal/90 transition-colors"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Service Area Map */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal mb-4">
                Areas We Serve
              </h2>
              <p className="text-warmGray-600 mb-8">
                With offices across major metropolitan areas, we're ready to assist you wherever you are.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {serviceAreas.map((area, index) => (
                  <div key={index} className="bg-cream rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-5 h-5 text-charcoal" />
                      <h3 className="font-semibold text-charcoal">{area.name}</h3>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-warmGray-500">
                      <span className="flex items-center gap-1">
                        <Home className="w-4 h-4" />
                        {area.properties} properties
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {area.agents} agents
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-cream rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-warmGray-300 mx-auto mb-4" />
                <p className="text-warmGray-500">
                  Interactive service area map
                </p>
                <p className="text-sm text-warmGray-400">
                  We serve all major metropolitan areas nationwide
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-white/80 text-lg mb-8">
                Contact us today to discuss your real estate needs. Our team of experts is ready to help you achieve your goals.
              </p>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60">Call us at</p>
                    <p className="font-semibold">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-charcoal px-8 py-4 rounded-xl font-medium hover:bg-white/90 transition-colors"
              >
                Schedule Consultation
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
        </div>
      </section>
    </div>
  );
}
