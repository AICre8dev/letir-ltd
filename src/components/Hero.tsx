import React from 'react';
import { ArrowRight, Zap, Clock, Star, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1920&q=80"
          alt="Electric vehicle charging"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/95 via-[#0a1628]/80 to-[#0a1628]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/60 via-transparent to-transparent" />
      </div>

      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-8 backdrop-blur-sm">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-blue-300">
              Letir LTD — Powering a Sustainable Tomorrow
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
            Powering the Future of{' '}
            <span className="text-blue-400">Electric</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl">
            Expert EV Charging, Solar & Electrical Solutions for homes and businesses across the UK.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-2xl shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1"
            >
              Get Free Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-2xl border border-white/20 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1"
            >
              Explore Services
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 bg-blue-500/20 rounded-xl border border-blue-500/30">
                <Zap className="w-6 h-6 text-blue-400" />
              </div>
              <p className="text-2xl font-bold text-white">500+</p>
              <p className="text-xs text-slate-400 mt-1">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 bg-blue-500/20 rounded-xl border border-blue-500/30">
                <Clock className="w-6 h-6 text-blue-400" />
              </div>
              <p className="text-2xl font-bold text-white">10+</p>
              <p className="text-xs text-slate-400 mt-1">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 bg-blue-500/20 rounded-xl border border-blue-500/30">
                <Star className="w-6 h-6 text-blue-400" />
              </div>
              <p className="text-2xl font-bold text-white">4.9</p>
              <p className="text-xs text-slate-400 mt-1">Star Rating</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 bg-blue-500/20 rounded-xl border border-blue-500/30">
                <Users className="w-6 h-6 text-blue-400" />
              </div>
              <p className="text-2xl font-bold text-white">50+</p>
              <p className="text-xs text-slate-400 mt-1">Certified Engineers</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-slate-400 tracking-widest uppercase">Scroll</span>
        <div className="w-6 h-10 border-2 border-slate-400/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-blue-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
