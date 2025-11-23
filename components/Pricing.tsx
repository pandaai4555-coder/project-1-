import React from 'react';
import { Check } from 'lucide-react';
import { TiltCard } from './ui/TiltCard';
import { Reveal } from './ui/Reveal';
import { PricingPlan } from '../types';

const plans: PricingPlan[] = [
  {
    id: '1',
    name: 'Essential',
    price: '$299',
    features: ['1 Hour Session', '10 Retouched Photos', 'Online Gallery', '1 Location', 'Print Release'],
  },
  {
    id: '2',
    name: 'Premium',
    price: '$599',
    features: ['3 Hour Session', '30 Retouched Photos', 'Online Gallery', '2 Locations', 'Print Release', 'Photo Album'],
    recommended: true,
  },
  {
    id: '3',
    name: 'Luxury',
    price: '$999',
    features: ['Full Day Coverage', 'Unlimited Photos', 'Online Gallery', 'Multiple Locations', 'Print Release', 'Premium Album', 'Drone Shots'],
  },
];

export const Pricing: React.FC = () => {
  return (
    <section className="py-24 bg-brand-dark relative">
      <div className="container mx-auto px-6">
        <Reveal className="text-center mb-16">
           <h2 className="text-4xl font-serif font-bold mb-4">Investment</h2>
           <p className="text-gray-400">Transparent pricing for unforgettable memories.</p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <Reveal key={plan.id} delay={index * 150} className={plan.recommended ? 'relative z-10' : ''}>
              <TiltCard perspective={2000} scale={1.02}>
                <div 
                  className={`relative p-8 rounded-2xl border transition-all duration-300 ${
                    plan.recommended 
                      ? 'bg-gradient-to-b from-white/10 to-white/5 border-brand-purple/50 shadow-2xl shadow-brand-purple/20' 
                      : 'bg-white/5 border-white/5 hover:bg-white/10'
                  }`}
                >
                  {plan.recommended && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-main text-white px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
                      Most Popular
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-xl font-medium mb-2">{plan.name}</h3>
                    <div className="text-5xl font-serif font-bold text-white mb-2">{plan.price}</div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                        <span className="p-1 rounded-full bg-brand-purple/20 text-brand-purple">
                          <Check size={12} />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button 
                    className={`w-full py-3 rounded-full font-bold transition-all ${
                      plan.recommended 
                        ? 'bg-white text-brand-dark hover:bg-gray-100' 
                        : 'border border-white/20 hover:bg-white/10'
                    }`}
                  >
                    Choose Plan
                  </button>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};