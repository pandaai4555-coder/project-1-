import React, { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Reveal } from './ui/Reveal';
import { TestimonialItem } from '../types';

const testimonials: TestimonialItem[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'Fashion Model',
    content: "Working with Lumina was an absolute dream. The lighting, the direction, and the final edits were beyond anything I expected. Truly world-class.",
    avatar: 'https://picsum.photos/100/100?random=30'
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Art Director',
    content: "I've worked with many studios, but Lumina's attention to detail is unmatched. They understand the vision instantly and elevate it.",
    avatar: 'https://picsum.photos/100/100?random=31'
  },
  {
    id: '3',
    name: 'Emily & James',
    role: 'Newlyweds',
    content: "They captured the raw emotion of our wedding day so perfectly. Looking at the photos feels like reliving the magic all over again.",
    avatar: 'https://picsum.photos/100/100?random=32'
  }
];

export const Testimonials: React.FC = () => {
  const [active, setActive] = useState(0);

  const next = () => setActive((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-gradient-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <Reveal className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold">Client Stories</h2>
        </Reveal>

        <div className="max-w-4xl mx-auto relative">
           <div className="overflow-hidden p-4">
             <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${active * 100}%)` }}
             >
               {testimonials.map((t) => (
                 <div key={t.id} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-2xl relative">
                       <Quote className="absolute top-6 left-6 text-brand-purple/30 w-12 h-12" />
                       <div className="flex flex-col items-center text-center">
                          <img 
                            src={t.avatar} 
                            alt={t.name} 
                            className="w-20 h-20 rounded-full border-2 border-brand-purple mb-6 object-cover"
                          />
                          <p className="text-xl lg:text-2xl text-gray-200 font-light italic mb-6 leading-relaxed relative z-10">
                            "{t.content}"
                          </p>
                          <div>
                            <h4 className="font-bold text-lg">{t.name}</h4>
                            <p className="text-brand-pink text-sm uppercase tracking-wide">{t.role}</p>
                          </div>
                       </div>
                    </div>
                 </div>
               ))}
             </div>
           </div>

           {/* Controls */}
           <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-12 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
              <ChevronLeft className="text-white" />
           </button>
           <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-12 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
              <ChevronRight className="text-white" />
           </button>
        </div>
      </div>
    </section>
  );
};