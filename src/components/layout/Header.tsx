import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, ChevronDown } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Buy', path: '/buy' },
  { name: 'Rent', path: '/rent' },
  { name: 'Sell', path: '/sell' },
  { name: 'Services', path: '/services' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact Us', path: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-charcoal rounded-lg flex items-center justify-center group-hover:bg-charcoal/90 transition-colors">
              <Home className="w-5 h-5 text-white" />
            </div>
            <span className="font-display font-bold text-xl text-charcoal">
              Real Estate
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? 'bg-charcoal text-white'
                    : 'text-charcoal hover:bg-charcoal/10'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/contact"
              className="flex items-center gap-2 bg-charcoal text-white px-6 py-2.5 rounded-full font-medium text-sm hover:bg-charcoal/90 transition-colors"
            >
              Get Started
              <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-charcoal/10 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-charcoal" />
            ) : (
              <Menu className="w-6 h-6 text-charcoal" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-[400px] pb-6' : 'max-h-0'
          }`}
        >
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? 'bg-charcoal text-white'
                    : 'text-charcoal hover:bg-charcoal/10'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-2 flex items-center justify-center gap-2 bg-charcoal text-white px-6 py-3 rounded-lg font-medium text-sm hover:bg-charcoal/90 transition-colors"
            >
              Get Started
              <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
