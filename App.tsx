
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Info, BookOpen, Image as ImageIcon, Phone, Mail, Settings } from 'lucide-react';
import { INITIAL_CONFIG } from './constants';
import HomePage from './pages/Home';
import AboutPage from './pages/AboutFounder';
import ServicesPage from './pages/Services';
import GalleryPage from './pages/Gallery';
import ContactPage from './pages/Contact';
import AdminPage from './pages/Admin';
import { SiteConfig } from './types';

// ScrollToTop component to ensure navigation always starts at the top
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/', icon: <Home size={18} /> },
    { name: 'About', path: '/aboutfounder', icon: <Info size={18} /> },
    { name: 'Services', path: '/services', icon: <BookOpen size={18} /> },
    { name: 'Gallery', path: '/gallery', icon: <ImageIcon size={18} /> },
    { name: 'Contact', path: '/contact', icon: <Phone size={18} /> },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Don't show standard header on admin page for a cleaner dashboard look
  if (location.pathname === '/admin') return null;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex flex-col">
            <span className="text-2xl font-cinzel font-bold text-blue-900 leading-tight">Rishiputhran</span>
            <span className="text-[10px] uppercase tracking-widest text-amber-600 font-semibold text-wrap">SSLC - Shraddha scientific learning center</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center space-x-2 text-sm font-semibold transition-colors ${
                  isActive(link.path) ? 'text-amber-600' : 'text-slate-600 hover:text-blue-900'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-slate-600" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 animate-in fade-in slide-in-from-top-4">
          <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center space-x-4 p-3 rounded-lg ${
                  isActive(link.path) ? 'bg-amber-50 text-amber-700' : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {link.icon}
                <span className="font-semibold">{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

const Footer = () => {
  const location = useLocation();
  if (location.pathname === '/admin') return null;

  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-cinzel font-bold text-white mb-6">Rishiputhran</h3>
            <p className="text-sm leading-relaxed mb-6">
              A holistic scientific learning center bridging Vedic wisdom with modern discovery for clarity, peace, and purpose.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-white mb-6 uppercase">Quick links</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/" className="hover:text-amber-500 transition-colors">Home</Link></li>
              <li><Link to="/aboutfounder" className="hover:text-amber-500 transition-colors">About founder</Link></li>
              <li><Link to="/services" className="hover:text-amber-500 transition-colors">Our services</Link></li>
              <li><Link to="/gallery" className="hover:text-amber-500 transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-amber-500 transition-colors">Contact us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6 uppercase">Contact info</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <Mail size={16} className="mt-1 text-amber-50" />
                <span>rishiputhran@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={16} className="mt-1 text-amber-500" />
                <div>
                  <p>+91 8921208533</p>
                  <p>+91 8129600303</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="text-amber-500 mt-1">📍</div>
                <span>Apsara apartments, Chembakassery, Aluva, Kerala - 683101</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Rishiputhran SSLC. All rights reserved. Built for holistic growth.</p>
          <Link to="/admin" className="mt-4 md:mt-0 flex items-center space-x-1 hover:text-white transition-colors">
            <Settings size={12} />
            <span>Staff portal</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [config, setConfig] = useState<SiteConfig>(() => {
    const saved = localStorage.getItem('siteConfig');
    if (saved) {
      try {
        return { ...INITIAL_CONFIG, ...JSON.parse(saved) };
      } catch (e) {
        return INITIAL_CONFIG;
      }
    }
    return INITIAL_CONFIG;
  });

  const updateConfig = (newConfig: SiteConfig) => {
    setConfig(newConfig);
    localStorage.setItem('siteConfig', JSON.stringify(newConfig));
  };

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-0 md:pt-20">
          <Routes>
            <Route path="/" element={<HomePage config={config} />} />
            <Route path="/aboutfounder" element={<AboutPage config={config} />} />
            <Route path="/services" element={<ServicesPage config={config} />} />
            <Route path="/gallery" element={<GalleryPage config={config} />} />
            <Route path="/contact" element={<ContactPage config={config} />} />
            <Route path="/admin" element={<AdminPage config={config} onUpdate={updateConfig} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}
