import React from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Twitter, Facebook } from 'lucide-react';
import { TiltCard } from './ui/TiltCard';
import { Reveal } from './ui/Reveal';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative pt-24 pb-12 bg-black overflow-hidden">
      {/* Background Decor */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-brand-purple/20 to-transparent blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          
          {/* Info */}
          <Reveal>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">Let's Create <br/> Magic Together</h2>
            <p className="text-gray-400 mb-12 max-w-md">
              Ready to book your session? Have a question? Drop us a message and we'll get back to you within 24 hours.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-purple transition-colors">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Call Us</p>
                  <p className="font-medium">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-blue transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email Us</p>
                  <p className="font-medium">hello@luminastudios.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-pink transition-colors">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Visit Us</p>
                  <p className="font-medium">123 Creative Ave, NY 10012</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2s123%20William%20St%2C%20New%20York%2C%20NY%2010038!5e0!3m2!1sen!2sus!4v1635798752123!5m2!1sen!2sus" 
                 width="100%" 
                 height="200" 
                 style={{ border: 0, borderRadius: '12px', opacity: 0.7 }} 
                 loading="lazy"
               ></iframe>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={200}>
            <TiltCard perspective={2000} maxRotation={5}>
              <form className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">First Name</label>
                      <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-brand-purple transition-colors" placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Last Name</label>
                      <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-brand-purple transition-colors" placeholder="Doe" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Email</label>
                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-brand-purple transition-colors" placeholder="john@example.com" />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Service Type</label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-brand-purple transition-colors [&>option]:text-black">
                      <option>Wedding Photography</option>
                      <option>Fashion Shoot</option>
                      <option>Portrait Session</option>
                      <option>Product Photography</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Message</label>
                    <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-brand-purple transition-colors" placeholder="Tell us about your project..."></textarea>
                  </div>

                  <button type="submit" className="w-full bg-gradient-main text-white font-bold py-4 rounded-lg hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all transform hover:-translate-y-1 flex justify-center items-center gap-2">
                    Send Message
                    <Send size={18} />
                  </button>
                </div>
              </form>
            </TiltCard>
          </Reveal>

        </div>

        {/* Footer */}
        <div className="border-t border-white/10 pt-12 text-center text-gray-500 pb-8">
          <div className="flex justify-center gap-6 mb-8">
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 hover:text-brand-purple transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 hover:text-brand-blue transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 hover:text-brand-pink transition-colors">
              <Facebook size={20} />
            </a>
          </div>
          <p className="text-sm">© 2024 Lumina Studios. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};