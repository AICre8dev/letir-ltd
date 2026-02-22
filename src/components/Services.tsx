import React, { useState } from 'react';
import { BatteryCharging, Sun, Wrench, Gauge, Home, Building2, ArrowRight, Check } from 'lucide-react';

const services = [
  {
    icon: BatteryCharging,
    title: 'EV Charger Installation',
    description:
      'Professional home and workplace EV charging solutions. From 7kW home chargers to 22kW commercial units, Letir LTD handles everything from survey to switch-on.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80',
    features: ['All major brands supported', 'Smart charging capability', 'OZEV grant assistance', 'Same-week installation'],
  },
  {
    icon: Sun,
    title: 'Solar Panel Systems',
    description:
      "Harness the power of the sun with Letir LTD's premium solar panel installations. Reduce your energy bills by up to 70% and earn from excess generation.",
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
    features: ['Tier-1 panel brands', 'Battery storage options', '25-year panel warranty', 'Free energy assessment'],
  },
  {
    icon: Gauge,
    title: 'Battery Storage',
    description:
      'Store excess solar energy for use when you need it most. Our battery solutions maximise your energy independence and savings.',
    image: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=800&q=80',
    features: ['Tesla Powerwall certified', 'Smart energy management', 'Backup power capability', 'Grid export ready'],
  },
  {
    icon: Wrench,
    title: 'Maintenance & Support',
    description:
      "Keep your systems running at peak performance with Letir LTD's comprehensive maintenance packages and rapid-response support team.",
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80',
    features: ['Annual health checks', '24/7 support line', 'Remote diagnostics', 'Performance monitoring'],
  },
];

const clientTypes = [
  {
    icon: Home,
    title: 'Residential',
    description: 'Complete home energy solutions tailored to your lifestyle and budget by Letir LTD.',
    stats: '1,500+ homes powered',
  },
  {
    icon: Building2,
    title: 'Commercial',
    description: 'Scalable energy infrastructure for businesses of all sizes, delivered by our expert team.',
    stats: '300+ businesses served',
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState(0);

  return (
    <section id="services" className="py-24 bg-white dark:bg-[#0a1628] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50/50 dark:from-blue-950/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-semibold rounded-full mb-4">
            Our Services
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Complete Energy <span className="text-blue-500">Solutions</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            From EV charging to solar power, Letir LTD provides end-to-end sustainable energy solutions designed for the modern world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {clientTypes.map((type) => (
            <div
              key={type.title}
              className="group relative p-8 bg-slate-50 dark:bg-slate-800/50 rounded-3xl border border-slate-200 dark:border-slate-700/50 hover:border-blue-300 dark:hover:border-blue-500/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <type.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{type.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-3">{type.description}</p>
                  <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">{type.stats}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            {services.map((service, index) => (
              <button
                key={service.title}
                onClick={() => setActiveService(index)}
                className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 ${
                  activeService === index
                    ? 'bg-slate-50 dark:bg-slate-800 border-blue-300 dark:border-blue-500/30 shadow-lg shadow-blue-500/10'
                    : 'bg-transparent border-slate-200 dark:border-slate-700/50 hover:bg-slate-50/50 dark:hover:bg-slate-800/30'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                      activeService === index ? 'bg-blue-500' : 'bg-slate-100 dark:bg-slate-700'
                    }`}
                  >
                    <service.icon
                      className={`w-6 h-6 ${activeService === index ? 'text-white' : 'text-slate-500 dark:text-slate-400'}`}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{service.title}</h3>
                    <p
                      className={`text-sm text-slate-500 dark:text-slate-400 transition-all duration-300 ${
                        activeService === index ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                      }`}
                    >
                      {service.description}
                    </p>
                  </div>
                  <ArrowRight
                    className={`w-5 h-5 flex-shrink-0 mt-1 transition-all duration-300 ${
                      activeService === index ? 'text-blue-500 translate-x-1' : 'text-slate-300 dark:text-slate-600'
                    }`}
                  />
                </div>
              </button>
            ))}
          </div>

          <div className="relative">
            <div className="sticky top-28 rounded-3xl overflow-hidden bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/50 shadow-xl">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={services[activeService].image}
                  alt={services[activeService].title}
                  className="w-full h-full object-cover transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-6 left-6 text-2xl font-bold text-white">
                  {services[activeService].title}
                </h3>
              </div>
              <div className="p-8">
                <p className="text-slate-600 dark:text-slate-400 mb-6">{services[activeService].description}</p>
                <ul className="space-y-3 mb-8">
                  {services[activeService].features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-blue-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5 text-blue-500" />
                      </div>
                      <span className="text-sm text-slate-700 dark:text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/25 transition-all duration-300 hover:-translate-y-0.5"
                >
                  Request a Quote
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
