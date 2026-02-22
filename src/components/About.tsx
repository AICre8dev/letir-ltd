import React from 'react';
import { Award, Users, Clock, Zap, CheckCircle2 } from 'lucide-react';

const values = [
  {
    icon: Award,
    title: 'Certified Excellence',
    description: 'NICEIC Approved Contractor and Gas Safe Registered. Fully accredited and certified.',
  },
  {
    icon: Users,
    title: 'Customer First',
    description: 'Dedicated project managers ensure a seamless experience from survey to switch-on.',
  },
  {
    icon: Clock,
    title: 'Rapid Turnaround',
    description: 'Most installations completed within 1-2 weeks of your initial consultation.',
  },
  {
    icon: Zap,
    title: 'Sustainability Driven',
    description: 'Every installation contributes to a cleaner future. We offset our own carbon footprint too.',
  },
];

const milestones = [
  'Founded with a mission to accelerate sustainable energy adoption across the UK',
  'Over 4,300 successful installations for homes and businesses',
  'Trusted by homeowners, landlords, and commercial clients nationwide',
  'Award-winning customer service with a 4.9★ average rating',
  'Partnerships with Tesla, Zappi, Easee, and leading solar brands',
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-[#060f1d] relative overflow-hidden">
      <div className="absolute top-1/2 -translate-y-1/2 -left-48 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80"
                alt="Letir LTD installation team at work"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-2xl border border-slate-100 dark:border-slate-700/50 max-w-[240px]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center">
                  <Zap className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900 dark:text-white">12,000+</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Tonnes CO₂ Saved</p>
                </div>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full w-4/5" />
              </div>
            </div>

            <div className="absolute -top-4 -left-4 w-24 h-24 grid grid-cols-4 gap-2 opacity-30">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="w-2 h-2 bg-blue-400 rounded-full" />
              ))}
            </div>
          </div>

          <div>
            <span className="inline-block px-4 py-1.5 bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-semibold rounded-full mb-4">
              About Letir LTD
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              Your Trusted Partner in{' '}
              <span className="text-blue-500">Sustainable Energy</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              Letir LTD has been at the forefront of the UK's sustainable energy transition, delivering expert EV
              charger installations and solar panel systems to homes and businesses. Our team of certified electricians
              and energy consultants are passionate about helping you make the switch to cleaner power — saving you money
              while protecting the planet.
            </p>

            <ul className="space-y-4 mb-10">
              {milestones.map((milestone) => (
                <li key={milestone} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 dark:text-slate-300">{milestone}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-2xl shadow-lg shadow-blue-500/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              Work With Us
            </a>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-24">
          {values.map((value) => (
            <div
              key={value.title}
              className="group p-6 bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700/50 hover:border-blue-200 dark:hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{value.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-16 border-t border-slate-200 dark:border-slate-700/50">
          <p className="text-center text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-8">
            Certified & Accredited
          </p>
          <div className="flex items-center justify-center">
            <img
              src="/niceic-gas-safe.png"
              alt="NICEIC Approved Contractor and Gas Safe Register"
              className="h-24 sm:h-28 w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
