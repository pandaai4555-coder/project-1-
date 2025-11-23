import React, { useState, useEffect } from 'react';
import { Camera, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-dark/80 backdrop-blur-md py-4 shadow-lg border-b border-white/5' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <div className="relative">
             <Camera className="w-8 h-8 text-white group-hover:text-brand-purple transition-colors duration-300" />
             <div className="absolute inset-0 bg-brand-pink blur-lg opacity-20 group-hover:opacity-40 transition-opacity" />
          </div>
          <span className="text-2xl font-serif font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 group-hover:from-brand-purple group-hover:to-brand-pink transition-all duration-300">
            Lumina
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium tracking-wider text-gray-300 hover:text-white relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-gradient-main after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.name.toUpperCase()}
            </a>
          ))}
          <a
            href="#contact"
            className="px-6 py-2 rounded-full bg-gradient-main text-white font-medium text-sm hover:shadow-[0_0_20px_rgba(236,72,153,0.4)] transition-shadow duration-300 transform hover:-translate-y-0.5"
          >
            BOOK NOW
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white hover:text-brand-pink transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-brand-dark/95 backdrop-blur-xl z-40 md:hidden transition-transform duration-500 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-serif text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-main transition-all"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};