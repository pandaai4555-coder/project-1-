import React from 'react';
import { TiltCard } from './ui/TiltCard';
import { Reveal } from './ui/Reveal';
import { Aperture, Award, Users } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative bg-brand-dark/50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <div className="order-2 lg:order-1">
             <div className="grid grid-cols-2 gap-4">
               <Reveal direction="right" delay={200}>
                  <TiltCard className="mt-12">
                    <img 
                      src="https://picsum.photos/400/600?random=2" 
                      alt="Studio Shot" 
                      className="rounded-lg shadow-lg object-cover w-full h-64 lg:h-80"
                    />
                  </TiltCard>
               </Reveal>
               <Reveal direction="up" delay={400}>
                  <TiltCard>
                    <img 
                      src="https://picsum.photos/400/600?random=3" 
                      alt="Photographer" 
                      className="rounded-lg shadow-lg object-cover w-full h-64 lg:h-80"
                    />
                  </TiltCard>
               </Reveal>
             </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <Reveal>
              <h2 className="text-4xl font-serif font-bold mb-6">
                We Tell Stories Through <br />
                <span className="text-brand-purple">Light & Shadow</span>
              </h2>
            </Reveal>
            
            <Reveal delay={200}>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Founded in 2015, Lumina Studios started with a simple mission: to freeze time in the most beautiful way possible. What began as a small passion project has grown into a premier photography destination.
              </p>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Our team comprises award-winning artists who specialize in manipulating natural light and studio ambience to create visuals that are not just seen, but felt.
              </p>
            </Reveal>

            <Reveal delay={400}>
              <div className="grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
                <div className="text-center lg:text-left">
                  <div className="flex justify-center lg:justify-start items-center gap-2 mb-2 text-brand-blue">
                    <Aperture size={20} />
                    <span className="font-bold text-2xl text-white">500+</span>
                  </div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Shoots Done</p>
                </div>
                <div className="text-center lg:text-left">
                  <div className="flex justify-center lg:justify-start items-center gap-2 mb-2 text-brand-pink">
                    <Users size={20} />
                    <span className="font-bold text-2xl text-white">10k+</span>
                  </div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Happy Clients</p>
                </div>
                <div className="text-center lg:text-left">
                  <div className="flex justify-center lg:justify-start items-center gap-2 mb-2 text-brand-purple">
                    <Award size={20} />
                    <span className="font-bold text-2xl text-white">15</span>
                  </div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Awards Won</p>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};