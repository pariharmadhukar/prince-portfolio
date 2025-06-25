import React from 'react';
import { Heart, ArrowUp, Mail, Phone, Linkedin, Github, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com/in/patel-prince', label: 'LinkedIn' },
    { icon: <Github className="w-5 h-5" />, href: 'https://github.com/patel-prince', label: 'GitHub' },
    { icon: <Twitter className="w-5 h-5" />, href: 'https://twitter.com/patel_prince', label: 'Twitter' }
  ];

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.02%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      
      <div className="relative">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-3xl font-bold mb-3">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-purple-400">
                    Prince Patel
                  </span>
                </h3>
                <p className="text-white/70 text-lg leading-relaxed max-w-md">
                  UI/UX Designer passionate about creating meaningful digital experiences that bridge business goals with user needs.
                </p>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-8">
                <a href="mailto:prince.patel@email.com" className="flex items-center text-white/60 hover:text-emerald-400 transition-colors group">
                  <Mail className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                  prince.patel@email.com
                </a>
                <a href="tel:+919876543210" className="flex items-center text-white/60 hover:text-emerald-400 transition-colors group">
                  <Phone className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                  +91 98765 43210
                </a>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-emerald-500/20 text-white/60 hover:text-emerald-400 p-3 rounded-2xl transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold text-white mb-6">Quick Links</h4>
              <nav className="space-y-3">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block text-white/60 hover:text-emerald-400 transition-colors hover:translate-x-1 duration-300"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xl font-bold text-white mb-6">Services</h4>
              <div className="space-y-3">
                <div className="text-white/60">UI/UX Design</div>
                <div className="text-white/60">User Research</div>
                <div className="text-white/60">Prototyping</div>
                <div className="text-white/60">Design Systems</div>
                <div className="text-white/60">Consultation</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-center md:text-left mb-6 md:mb-0">
                <div className="flex items-center justify-center md:justify-start text-white/60 mb-2">
                  <span className="mr-2">Made with</span>
                  <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
                  <span className="ml-2">and React.js</span>
                </div>
                <p className="text-white/40 text-sm">
                  © 2024 Patel Prince. All rights reserved. | Designed & Built with dedication to showcase my design journey.
                </p>
              </div>
              
              <button
                onClick={scrollToTop}
                className="group bg-gradient-to-r from-emerald-500 to-purple-500 hover:from-emerald-600 hover:to-purple-600 text-white p-4 rounded-2xl transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
                aria-label="Scroll to top"
              >
                <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;