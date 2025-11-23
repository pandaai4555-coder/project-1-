import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { PortfolioItem } from '../types';
import { Reveal } from './ui/Reveal';

const portfolioData: PortfolioItem[] = [
  { id: '1', title: 'Ethereal Dreams', category: 'Fashion', imageUrl: 'https://picsum.photos/600/800?random=20', size: 'large' },
  { id: '2', title: 'Urban Solitude', category: 'Portrait', imageUrl: 'https://picsum.photos/600/600?random=21', size: 'medium' },
  { id: '3', title: 'Golden Hour', category: 'Wedding', imageUrl: 'https://picsum.photos/600/900?random=22', size: 'large' },
  { id: '4', title: 'Product Launch', category: 'Product', imageUrl: 'https://picsum.photos/600/500?random=23', size: 'small' },
  { id: '5', title: 'Neon Nights', category: 'Events', imageUrl: 'https://picsum.photos/600/700?random=24', size: 'medium' },
  { id: '6', title: 'Innocence', category: 'Baby', imageUrl: 'https://picsum.photos/600/600?random=25', size: 'small' },
  { id: '7', title: 'Vogue Cover', category: 'Fashion', imageUrl: 'https://picsum.photos/600/850?random=26', size: 'large' },
  { id: '8', title: 'Love Story', category: 'Wedding', imageUrl: 'https://picsum.photos/600/650?random=27', size: 'medium' },
];

export const Portfolio: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<PortfolioItem | null>(null);

  return (
    <section id="portfolio" className="py-24 bg-[#0B1120]">
      <div className="container mx-auto px-6">
        <Reveal className="mb-12 flex flex-col md:flex-row justify-between items-end">
          <div>
            <h2 className="text-4xl font-serif font-bold mb-2">Featured Work</h2>
            <p className="text-gray-400">A curated selection of our finest captures.</p>
          </div>
          <button className="hidden md:block px-6 py-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all">
            View All Projects
          </button>
        </Reveal>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {portfolioData.map((item, index) => (
            <Reveal key={item.id} delay={index * 50} direction="up">
              <div 
                className="group relative rounded-xl overflow-hidden cursor-pointer break-inside-avoid"
                onClick={() => setSelectedImage(item)}
              >
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <p className="text-brand-pink text-xs font-bold tracking-widest uppercase mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {item.category}
                  </p>
                  <h3 className="text-xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                    {item.title}
                  </h3>
                  <div className="absolute top-4 right-4 bg-white/10 p-2 rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:text-black">
                     <ZoomIn size={20} />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-brand-pink transition-colors z-50"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>

          <div 
            className="relative max-w-5xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage.imageUrl} 
              alt={selectedImage.title} 
              className="w-full h-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="absolute bottom-[-3rem] left-0 text-white">
              <h3 className="text-2xl font-serif">{selectedImage.title}</h3>
              <p className="text-gray-400">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};