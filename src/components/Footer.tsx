import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const footerLinks = {
    Services: [
      { label: 'EV Charger Installation', href: '#services' },
      { label: 'Solar Panel Systems', href: '#services' },
      { label: 'Battery Storage', href: '#services' },
      { label: 'Maintenance & Support', href: '#services' },
    ],
    Company: [
      { label: 'About Us', href: '#about' },
      { label: 'Testimonials', href: '#testimonials' },
      { label: 'Careers', href: '#' },
      { label: 'Blog', href: '#' },
    ],
    Support: [
      { label: 'Contact Us', href: '#contact' },
      { label: 'FAQs', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
    ],
  };

  return (
    <footer className="bg-slate-900 dark:bg-[#060f1d] text-white relative">
      <div className="relative -top-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-500 rounded-3xl p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl shadow-blue-500/20">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Ready to save on energy?</h3>
            <p className="text-blue-100">Get a free consultation and personalised quote from Letir LTD today.</p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 px-8 py-4 bg-white text-blue-600 font-bold rounded-2xl hover:bg-blue-50 transition-colors shadow-lg"
          >
            Get Started
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="Letir LTD" className="h-12 w-auto object-contain brightness-0 invert" />
            </a>
            <p className="text-slate-400 leading-relaxed mb-6 max-w-sm">
              Letir LTD is leading the UK's transition to sustainable energy with expert EV charging and solar panel
              installations. Trusted by homeowners and businesses alike.
            </p>
            <div className="flex items-center gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 bg-slate-800 hover:bg-blue-500/20 rounded-xl flex items-center justify-center transition-colors group"
                >
                  <Icon className="w-4 h-4 text-slate-400 group-hover:text-blue-400 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-white mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-slate-400 hover:text-blue-400 transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} Letir LTD. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-slate-800 hover:bg-blue-500/20 rounded-xl flex items-center justify-center transition-colors group"
          >
            <ArrowUp className="w-4 h-4 text-slate-400 group-hover:text-blue-400 transition-colors" />
          </button>
        </div>
      </div>
    </footer>
  );
}
