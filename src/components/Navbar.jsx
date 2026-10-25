import React, { useState, useEffect } from 'react';
import { Terminal, Moon, Sun, ArrowUpRight, Menu, X, CircleDot } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Overview", href: "#hero" },
    { name: "Systems", href: "#philosophy" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Logs", href: "#logs" },
    { name: "Experience", href: "#experience" },
    { name: "Connect", href: "#connect" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#0a0a0c]/85 dark:bg-[#0a0a0c]/85 light:bg-[#fbfbfb]/85 backdrop-blur-md border-b border-neutral-800/80 light:border-neutral-200' 
        : 'bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-sm bg-neutral-900 border border-neutral-700 flex items-center justify-center font-mono font-bold text-sm tracking-wider text-neutral-100 group-hover:border-neutral-400 transition-colors">
            LK
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-xs tracking-wider uppercase font-semibold text-neutral-200 light:text-neutral-900 flex items-center gap-1.5">
              lokeshkumar.tech
              <span className="w-1.5 h-1.5 rounded-full bg-[#ea384c] animate-pulse"></span>
            </span>
            <span className="font-mono text-[10px] text-neutral-500 light:text-neutral-600">
              BUILD_REF: v2.6.0
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-mono tracking-wide text-neutral-400 hover:text-white light:text-neutral-600 light:hover:text-neutral-950 transition-colors uppercase"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Controls & CTA */}
        <div className="flex items-center gap-3">
          {/* Status Badge */}
          <div className="hidden lg:flex items-center gap-2 px-2.5 py-1 rounded border border-neutral-800 light:border-neutral-300 bg-neutral-900/60 light:bg-neutral-100 text-[11px] font-mono text-neutral-300 light:text-neutral-800">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>OPEN_TO_WORK</span>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle Theme"
            className="p-2 rounded border border-neutral-800 light:border-neutral-300 hover:border-neutral-600 light:hover:border-neutral-400 bg-neutral-900/50 light:bg-neutral-200/50 text-neutral-400 hover:text-neutral-100 light:text-neutral-700 light:hover:text-neutral-950 transition-colors cursor-pointer"
          >
            {darkMode ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          {/* Quick Terminal Link */}
          <a
            href="#terminal"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-neutral-700 hover:border-neutral-400 bg-neutral-800/80 light:bg-neutral-900 light:hover:bg-neutral-800 text-neutral-200 light:text-neutral-100 text-xs font-mono tracking-wide transition-all shadow-xs"
          >
            <Terminal size={13} />
            <span>CLI</span>
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded border border-neutral-800 light:border-neutral-300 text-neutral-400"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-neutral-800 bg-[#0a0a0c] light:bg-[#fbfbfb] px-6 py-4 space-y-3 font-mono text-xs">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 text-neutral-400 hover:text-white uppercase"
            >
              {`> ${link.name}`}
            </a>
          ))}
          <div className="pt-2 border-t border-neutral-800 flex items-center justify-between text-[11px] text-neutral-400">
            <span>STATUS: ACTIVE</span>
            <span className="text-[#ea384c]">lokeshkumar.tech</span>
          </div>
        </div>
      )}
    </header>
  );
}
