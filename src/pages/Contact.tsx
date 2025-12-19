import { useState } from 'react';
import { 
  MapPin, Phone, Mail, Clock, Send, ChevronDown, ChevronUp,
  Facebook, Twitter, Instagram, Linkedin, Calendar, User, ArrowRight
} from 'lucide-react';
import { faqs, agents } from '../data/mockData';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        message: '',
      });
    }, 3000);
  };

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Main Office',
      details: [
        '123 Real Estate Avenue',
        'New York, NY 10001',
      ],
    },
    {
      icon: Phone,
      title: 'Phone',
      details: [
        'Sales: +1 (555) 123-4567',
        'Support: +1 (555) 987-6543',
      ],
    },
    {
      icon: Mail,
      title: 'Email',
      details: [
        'hello@realestate.com',
        'support@realestate.com',
      ],
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: [
        'Mon - Fri: 9:00 AM - 6:00 PM',
        'Sat: 10:00 AM - 4:00 PM',
      ],
    },
  ];

  const subjects = [
    'General Inquiry',
    'Buying a Property',
    'Selling a Property',
    'Renting a Property',
    'Property Management',
    'Investment Consulting',
    'Partnership Opportunities',
    'Careers',
  ];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM',
  ];

  const socialLinks = [
    { icon: Facebook, name: 'Facebook', url: '#' },
    { icon: Twitter, name: 'Twitter', url: '#' },
    { icon: Instagram, name: 'Instagram', url: '#' },
    { icon: Linkedin, name: 'LinkedIn', url: '#' },
  ];

  return (
    <div className="min-h-screen pt-20 bg-cream">
      {/* Hero Section */}
      <section className="relative py-20 bg-charcoal text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
            alt="Contact us"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            We're here to help with all your real estate needs. Reach out and let's start a conversation.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-cream rounded-xl p-6">
                <div className="w-12 h-12 bg-charcoal rounded-lg flex items-center justify-center mb-4">
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display font-semibold text-lg text-charcoal mb-2">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-warmGray-600 text-sm">{detail}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-card">
              <h2 className="text-2xl font-display font-bold text-charcoal mb-6">
                Send Us a Message
              </h2>
              
              {formSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-charcoal mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-warmGray-600">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-warmGray-700 mb-2">Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-warmGray-200 focus:outline-none focus:ring-2 focus:ring-charcoal/20"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-warmGray-700 mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-warmGray-200 focus:outline-none focus:ring-2 focus:ring-charcoal/20"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-warmGray-700 mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-warmGray-200 focus:outline-none focus:ring-2 focus:ring-charcoal/20"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-warmGray-700 mb-2">Subject</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-warmGray-200 focus:outline-none focus:ring-2 focus:ring-charcoal/20"
                      >
                        {subjects.map((subject) => (
                          <option key={subject} value={subject}>{subject}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-warmGray-700 mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-warmGray-200 focus:outline-none focus:ring-2 focus:ring-charcoal/20 resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-charcoal text-white py-4 rounded-lg font-medium hover:bg-charcoal/90 transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Map */}
            <div className="space-y-6">
              <div className="bg-warmGray-200 rounded-2xl h-80 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-warmGray-400 mx-auto mb-3" />
                  <p className="text-warmGray-500 font-medium">Interactive Map</p>
                  <p className="text-warmGray-400 text-sm">123 Real Estate Ave, New York, NY</p>
                </div>
              </div>

              <button className="w-full bg-white py-4 rounded-lg font-medium text-charcoal hover:bg-warmGray-50 transition-colors flex items-center justify-center gap-2 shadow-card">
                <MapPin className="w-5 h-5" />
                Get Directions
              </button>

              {/* Social Links */}
              <div className="bg-white rounded-2xl p-6 shadow-card">
                <h3 className="font-display font-semibold text-lg text-charcoal mb-4">Connect With Us</h3>
                <p className="text-warmGray-600 text-sm mb-4">
                  Follow us for the latest listings and market insights.
                </p>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      className="w-10 h-10 rounded-lg bg-cream flex items-center justify-center hover:bg-charcoal hover:text-white transition-colors"
                      aria-label={social.name}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Appointment */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal mb-4">
              Schedule an Appointment
            </h2>
            <p className="text-warmGray-600">
              Book a consultation with one of our expert agents at your convenience.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-cream rounded-2xl p-8">
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              {/* Select Agent */}
              <div>
                <label className="block text-sm font-medium text-warmGray-700 mb-2">
                  <User className="w-4 h-4 inline mr-1" />
                  Select Agent
                </label>
                <select
                  value={selectedAgent}
                  onChange={(e) => setSelectedAgent(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-warmGray-200 bg-white focus:outline-none focus:ring-2 focus:ring-charcoal/20"
                >
                  <option value="">Any Available Agent</option>
                  {agents.map((agent) => (
                    <option key={agent.id} value={agent.id}>{agent.name}</option>
                  ))}
                </select>
              </div>

              {/* Select Date */}
              <div>
                <label className="block text-sm font-medium text-warmGray-700 mb-2">
                  <Calendar className="w-4 h-4 inline mr-1" />
                  Select Date
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 rounded-lg border border-warmGray-200 bg-white focus:outline-none focus:ring-2 focus:ring-charcoal/20"
                />
              </div>

              {/* Select Time */}
              <div>
                <label className="block text-sm font-medium text-warmGray-700 mb-2">
                  <Clock className="w-4 h-4 inline mr-1" />
                  Select Time
                </label>
                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-warmGray-200 bg-white focus:outline-none focus:ring-2 focus:ring-charcoal/20"
                >
                  <option value="">Choose a time</option>
                  {timeSlots.map((time) => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
              </div>
            </div>

            <button className="w-full bg-charcoal text-white py-4 rounded-lg font-medium hover:bg-charcoal/90 transition-colors flex items-center justify-center gap-2">
              Schedule Appointment
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-warmGray-600">
              Find quick answers to common questions about our services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="bg-white rounded-xl overflow-hidden shadow-card"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-medium text-charcoal pr-4">{faq.question}</span>
                  {openFaq === faq.id ? (
                    <ChevronUp className="w-5 h-5 text-warmGray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-warmGray-500 flex-shrink-0" />
                  )}
                </button>
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    openFaq === faq.id ? 'max-h-96 pb-6' : 'max-h-0'
                  }`}
                >
                  <p className="text-warmGray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Stay Updated
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            Subscribe to our newsletter for the latest listings, market trends, and real estate tips.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-white text-charcoal rounded-xl font-medium hover:bg-white/90 transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
