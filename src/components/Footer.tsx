import React from 'react';
import { Facebook, Instagram, Linkedin, Sun, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-solar-dark text-white pt-24 pb-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-solar-yellow/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-solar-orange/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/10">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-solar-yellow to-solar-orange p-2 rounded-lg">
                <Sun className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold tracking-tight">
                VRS <span className="text-solar-orange">Power</span>
              </span>
            </div>
            <p className="text-white/60 leading-relaxed text-sm">
              Empowering homes and businesses with clean, sustainable, and affordable solar energy solutions since 2016.
            </p>
            <div className="flex space-x-5">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="bg-white/5 p-3 rounded-xl hover:bg-solar-orange transition-all duration-300 hover:scale-110"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'Services', 'About', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`} 
                    className="text-white/60 hover:text-solar-orange transition-colors flex items-center space-x-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-solar-orange rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span>{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold">Our Services</h3>
            <ul className="space-y-4">
              {['Residential Solar', 'Commercial Solar', 'Industrial Solar', 'Solar Maintenance'].map((service) => (
                <li key={service}>
                  <a 
                    href="#services" 
                    className="text-white/60 hover:text-solar-orange transition-colors flex items-center space-x-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-solar-orange rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span>{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold">Contact Info</h3>
            <ul className="space-y-6">
              <li className="flex items-center space-x-4">
                <div className="bg-white/5 p-3 rounded-xl text-solar-orange">
                  <Phone size={20} />
                </div>
                <a href="tel:+917000553257" className="text-white/60 hover:text-white transition-colors">
                  +91 7000553257
                </a>
              </li>
              <li className="flex items-center space-x-4">
                <div className="bg-white/5 p-3 rounded-xl text-solar-orange">
                  <Mail size={20} />
                </div>
                <a href="mailto:vrspower@gmail.com" className="text-white/60 hover:text-white transition-colors">
                  vrspower@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-4">
                <div className="bg-white/5 p-3 rounded-xl text-solar-orange">
                  <MapPin size={20} />
                </div>
                <span className="text-white/60">
                  Raipur, Chhattisgarh, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 text-center text-white/40 text-sm">
          <p>© 2026 VRS Power. All Rights Reserved. Designed for premium solar experiences.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
