import React from 'react';
import { ArrowRight } from 'lucide-react';
import { TiltCard } from './ui/TiltCard';
import { Reveal } from './ui/Reveal';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-purple/20 rounded-full blur-[128px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-blue/20 rounded-full blur-[128px]" />
      
      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="text-center lg:text-left">
          <Reveal delay={200}>
             <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-brand-pink text-xs font-bold tracking-widest mb-6 uppercase">
               Premium Studio
             </span>
          </Reveal>
          
          <Reveal delay={400}>
            <h1 className="text-5xl lg:text-7xl font-serif font-bold leading-tight mb-6">
              Capture Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-main">
                Perfect Moment
              </span>
            </h1>
          </Reveal>

          <Reveal delay={600}>
            <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto lg:mx-0 font-light">
              We don't just take pictures; we craft visual legacies. Experience photography that transcends time with cinematic quality and artistic vision.
            </p>
          </Reveal>

          <Reveal delay={800}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#contact" className="px-8 py-4 rounded-full bg-white text-brand-dark font-bold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 group">
                Book a Session
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#portfolio" className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/5 transition-colors text-white backdrop-blur-sm">
                View Portfolio
              </a>
            </div>
          </Reveal>
        </div>

        {/* 3D Image Showcase */}
        <Reveal direction="left" delay={600} className="relative hidden lg:block">
           <TiltCard className="relative z-20" maxRotation={10} perspective={2000}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-brand-purple/20 border border-white/10 aspect-[4/5]">
                <img 
                  src="https://picsum.photos/800/1000?random=1" 
                  alt="Fashion Model" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-60" />
                
                {/* Floating Elements */}
                <div className="absolute bottom-8 left-8 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl">
                  <p className="text-white text-sm font-bold">Latest Work</p>
                  <p className="text-gray-300 text-xs">Editorial Collection '24</p>
                </div>
              </div>
           </TiltCard>
           
           {/* Decorative Elements behind image */}
           <div className="absolute -z-10 top-10 -right-10 w-full h-full border border-brand-pink/30 rounded-2xl" />
           <div className="absolute -z-10 -top-10 -left-10 w-full h-full border border-brand-blue/30 rounded-2xl" />
        </Reveal>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
};