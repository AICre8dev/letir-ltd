import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Homeowner, Surrey',
    text: 'Letir LTD installed our EV charger and solar panels on the same visit. The team was professional, tidy, and explained everything clearly. Our energy bills have dropped by 60%!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80',
  },
  {
    name: 'James Crawford',
    role: 'Fleet Manager, London',
    text: 'We needed 12 commercial EV chargers installed across two sites. Letir LTD managed the entire project seamlessly — on time and on budget. Highly recommend their commercial services.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80',
  },
  {
    name: 'Emma Thompson',
    role: 'Business Owner, Bristol',
    text: 'The solar panel system Letir LTD installed on our warehouse has been generating more energy than we expected. The ROI has been fantastic and the maintenance support is excellent.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80',
  },
  {
    name: 'David Okonkwo',
    role: 'Property Developer, Manchester',
    text: "Letir LTD has been our go-to for all EV charging installations across our new-build developments. Their expertise and reliability are unmatched in the industry.",
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [autoPlay]);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
    setAutoPlay(false);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setAutoPlay(false);
  };

  return (
    <section id="testimonials" className="py-24 bg-white dark:bg-[#0a1628] relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-semibold rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            What Our <span className="text-blue-500">Clients Say</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Don't just take our word for it — hear from homeowners and businesses who trust Letir LTD.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-slate-50 dark:bg-slate-800/50 rounded-3xl p-8 sm:p-12 border border-slate-200 dark:border-slate-700/50 shadow-xl">
            <div className="absolute -top-5 left-10">
              <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                <Quote className="w-5 h-5 text-white" />
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <div className="relative">
                  <img
                    src={testimonials[current].image}
                    alt={testimonials[current].name}
                    className="w-20 h-20 rounded-2xl object-cover shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                    <Star className="w-4 h-4 text-white fill-white" />
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-blue-500 fill-blue-500" />
                  ))}
                </div>
                <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6 italic">
                  "{testimonials[current].text}"
                </p>
                <div>
                  <p className="font-bold text-slate-900 dark:text-white">{testimonials[current].name}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{testimonials[current].role}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-200 dark:border-slate-700/50">
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setCurrent(i);
                      setAutoPlay(false);
                    }}
                    className={`transition-all duration-300 rounded-full ${
                      i === current ? 'w-8 h-2 bg-blue-500' : 'w-2 h-2 bg-slate-300 dark:bg-slate-600 hover:bg-blue-300'
                    }`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-700 hover:bg-blue-100 dark:hover:bg-blue-500/20 flex items-center justify-center transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-slate-600 dark:text-slate-300" />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-700 hover:bg-blue-100 dark:hover:bg-blue-500/20 flex items-center justify-center transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-slate-600 dark:text-slate-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
