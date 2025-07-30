import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { footerLinks, contactInfo } from './navigation';
import { useScroll } from '../context/ScrollContext';

const Footer = () => {
  const { lenis } = useScroll();
  
  const handleNavClick = (e, href) => {
    e.preventDefault();
    if (href.startsWith('#')) {
      const target = document.querySelector(href);
      if (target) {
        lenis.scrollTo(target, {
          offset: -100,
          duration: 1.5,
        });
      }
    } else {
      window.location.href = href;
    }
  };

  const socialIcons = {
    Facebook: <Facebook className="w-5 h-5" />,
    Twitter: <Twitter className="w-5 h-5" />,
    Linkedin: <Linkedin className="w-5 h-5" />,
    Instagram: <Instagram className="w-5 h-5" />,
  };

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <img 
              src="/prep-urology-logo.svg" 
              alt="Prep Urology" 
              className="h-12 mb-6"
            />
            <p className="text-gray-600 text-sm mb-6 max-w-sm">
              Revolutionizing patient care through intelligent follow-up management and preventive healthcare solutions.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              {contactInfo.social.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.href}
                  className="text-gray-400 hover:text-[#4A9B8E] transition-colors"
                  aria-label={platform.name}
                >
                  {socialIcons[platform.icon]}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-black font-semibold mb-4 capitalize">
                {category === 'product' ? 'Quick Links' : category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-gray-600 text-sm hover:text-[#4A9B8E] transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info and Copyright */}
        <div className="pt-8 border-t border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="flex items-center text-gray-600">
              <Mail className="w-5 h-5 mr-3 text-[#4A9B8E]" />
              <a href={`mailto:${contactInfo.email}`} className="text-sm hover:text-[#4A9B8E] transition-colors">
                {contactInfo.email}
              </a>
            </div>
            <div className="flex items-center text-gray-600">
              <Phone className="w-5 h-5 mr-3 text-[#4A9B8E]" />
              <a href={`tel:${contactInfo.phone}`} className="text-sm hover:text-[#4A9B8E] transition-colors">
                {contactInfo.phone}
              </a>
            </div>
            <div className="flex items-center text-gray-600">
              <MapPin className="w-5 h-5 mr-3 text-[#4A9B8E]" />
              <span className="text-sm">
                {contactInfo.address.line1}, {contactInfo.address.line2}
              </span>
            </div>
          </div>
          <div className="text-center text-gray-600 text-sm">
            © {new Date().getFullYear()} Prep Urology. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;