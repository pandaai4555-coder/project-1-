import React from 'react';
import { Camera, Heart, Baby, ShoppingBag, User, Sparkles } from 'lucide-react';
import { TiltCard } from './ui/TiltCard';
import { ServiceItem } from '../types';
import { Reveal } from './ui/Reveal';

const services: ServiceItem[] = [
  { id: '1', title: 'Weddings', description: 'Cinematic love stories captured in real-time.', icon: Heart, image: 'https://picsum.photos/400/300?random=10' },
  { id: '2', title: 'Fashion', description: 'High-end editorial and runway photography.', icon: Camera, image: 'https://picsum.photos/400/300?random=11' },
  { id: '3', title: 'Baby Shoots', description: 'Precious moments of your little ones.', icon: Baby, image: 'https://picsum.photos/400/300?random=12' },
  { id: '4', title: 'Product', description: 'Commercial imagery that sells.', icon: ShoppingBag, image: 'https://picsum.photos/400/300?random=13' },
  { id: '5', title: 'Portraits', description: 'Professional headshots and artistic portraits.', icon: User, image: 'https://picsum.photos/400/300?random=14' },
  { id: '6', title: 'Events', description: 'Corporate and private event coverage.', icon: Sparkles, image: 'https://picsum.photos/400/300?random=15' },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-brand-dark relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/5 rounded-full blur-[100px]" />

        <div className="container mx-auto px-6 relative z-10">
            <Reveal className="text-center mb-16">
                <h2 className="text-4xl font-serif font-bold mb-4">Our Services</h2>
                <div className="w-24 h-1 bg-gradient-main mx-auto rounded-full" />
                <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                    We offer a comprehensive range of photography services tailored to meet your unique needs with style and precision.
                </p>
            </Reveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <Reveal key={service.id} delay={index * 100}>
                        <TiltCard className="h-full">
                            <div className="group relative h-full bg-white/5 backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:bg-white/10 transition-colors overflow-hidden">
                                {/* Hover Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/20 to-brand-pink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                
                                <div className="relative z-10">
                                    <div className="w-14 h-14 bg-gradient-to-br from-gray-800 to-black rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 border border-white/10">
                                        <service.icon className="text-white w-7 h-7" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 group-hover:text-brand-pink transition-colors">{service.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                        {service.description}
                                    </p>
                                    <span className="text-xs font-bold uppercase tracking-widest text-white/50 group-hover:text-white transition-colors flex items-center gap-2">
                                        Learn More <span className="text-brand-pink">&rarr;</span>
                                    </span>
                                </div>
                            </div>
                        </TiltCard>
                    </Reveal>
                ))}
            </div>
        </div>
    </section>
  );
};