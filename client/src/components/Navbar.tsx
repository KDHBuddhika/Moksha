import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Flower2, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-black/20 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center">
            <Flower2 className={`h-8 w-8 ${isScrolled ? 'text-amber-500' : 'text-amber-400'}`} />
            <span className={`ml-2 text-xl font-semibold ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Spiritual Journey
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" isScrolled={isScrolled}>Home</NavLink>
            <NavLink to="/about" isScrolled={isScrolled}>About</NavLink>
            <NavLink to="/services" isScrolled={isScrolled}>Services</NavLink>
            <NavLink to="/blog" isScrolled={isScrolled}>Blog</NavLink>
            <NavLink to="/packages" isScrolled={isScrolled}>Packages</NavLink>
            <NavLink to="/contact" isScrolled={isScrolled}>Contact</NavLink>
            <button 
              onClick={() => navigate('/signin')}
              className="bg-amber-500 text-white px-6 py-2.5 rounded-full hover:bg-amber-600 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md"
            >
              Join Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg ${
                isScrolled ? 'text-gray-600' : 'text-white'
              }`}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden bg-white shadow-lg`}>
        <div className="px-4 pt-2 pb-6 space-y-3">
          <MobileNavLink to="/">Home</MobileNavLink>
          <MobileNavLink to="/about">About</MobileNavLink>
          <MobileNavLink to="/services">Services</MobileNavLink>
          <MobileNavLink to="/blog">Blog</MobileNavLink>
          <MobileNavLink to="/packages">Packages</MobileNavLink>
          <MobileNavLink to="/contact">Contact</MobileNavLink>
          <button 
            onClick={() => navigate('/signin')}
            className="w-full bg-amber-500 text-white px-6 py-2.5 rounded-full hover:bg-amber-600 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md"
          >
            Join Now
          </button>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, children, isScrolled }: { to: string; children: React.ReactNode; isScrolled: boolean }) => (
  <Link
    to={to}
    className={`relative font-medium transition-colors duration-300 ${
      isScrolled ? 'text-gray-700 hover:text-amber-500' : 'text-white hover:text-amber-400'
    } after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-amber-500 after:transition-all after:duration-300 hover:after:w-full`}
  >
    {children}
  </Link>
);

const MobileNavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link
    to={to}
    className="block px-4 py-2 text-gray-700 hover:text-amber-500 transition-colors duration-300 rounded-lg hover:bg-gray-50"
  >
    {children}
  </Link>
);

export default Navbar;