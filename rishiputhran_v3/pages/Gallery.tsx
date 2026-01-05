
import React, { useState } from 'react';
import { SiteConfig } from '../types';

const GalleryPage: React.FC<{ config: SiteConfig }> = ({ config }) => {
  const albums = [
    { id: 'childhood', title: 'The seeds of childhood', desc: 'Early years of wonder and the beginning of a lifelong curiosity.', links: config.galleryChildhoodLinks },
    { id: 'work', title: 'Corporate excellence', desc: 'Navigating the world of professional duty and corporate leadership.', links: config.galleryWorkLinks },
    { id: 'vedic', title: 'The Vedic call', desc: 'Gurukul training and the disciplined pursuit of spiritual mastery.', links: config.galleryVedicLinks },
    { id: 'community', title: 'Service & compassion', desc: 'Lifting lives through donation drives and community support.', links: config.galleryCommunityLinks }
  ];

  const [selectedAlbumId, setSelectedAlbumId] = useState<string | null>(null);

  const getAlbumImages = (linksString: string) => {
    return linksString
      .split('\n')
      .map(line => line.trim())
      .filter(line => line.length > 0);
  };

  const selectedAlbum = albums.find(a => a.id === selectedAlbumId);
  const selectedImages = selectedAlbum ? getAlbumImages(selectedAlbum.links) : [];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Dynamic Gallery Banner */}
      <section className="relative py-40 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <img 
            src={config.galleryBannerImg} 
            alt="Life Cycle" 
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="container relative mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-cinzel font-bold mb-6 text-white">{config.galleryTitle}</h1>
          <p className="text-slate-200 max-w-4xl mx-auto text-xl font-playfair italic leading-relaxed">
            {config.galleryDescription}
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          {!selectedAlbumId ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {albums.map((album) => {
                const images = getAlbumImages(album.links);
                const previewImg = images[0] || "https://via.placeholder.com/800x600?text=Empty+album";
                return (
                  <div 
                    key={album.id}
                    onClick={() => setSelectedAlbumId(album.id)}
                    className="group cursor-pointer bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col md:flex-row h-full"
                  >
                    <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
                      <img 
                        src={previewImg} 
                        alt={album.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                      />
                    </div>
                    <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
                      <h3 className="text-2xl font-cinzel font-bold text-slate-900 mb-4">{album.title}</h3>
                      <p className="text-slate-600 mb-6 font-playfair leading-relaxed">{album.desc}</p>
                      <span className="text-amber-600 font-bold uppercase tracking-widest text-xs flex items-center group-hover:translate-x-2 transition-transform">
                        Explore album ({images.length} photos) &rarr;
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="space-y-12 animate-in fade-in duration-500">
              <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-200 pb-8 gap-6">
                <div>
                  <h2 className="text-4xl font-cinzel font-bold text-blue-900 mb-2">
                    {selectedAlbum?.title}
                  </h2>
                  <p className="text-slate-500 font-playfair italic text-lg">
                    {selectedAlbum?.desc}
                  </p>
                </div>
                <button 
                  onClick={() => setSelectedAlbumId(null)}
                  className="px-8 py-3 bg-blue-900 text-white rounded-full font-bold text-sm hover:bg-blue-950 transition-colors shadow-lg self-start"
                >
                  &larr; Back to albums
                </button>
              </div>

              {selectedImages.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {selectedImages.map((url, idx) => (
                    <div key={idx} className="relative group overflow-hidden rounded-[2rem] shadow-lg aspect-square bg-slate-200">
                      <img 
                        src={url} 
                        alt={`Gallery ${idx}`} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/800x800?text=Invalid+link')}
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="text-white font-cinzel font-bold tracking-widest border border-white/40 px-6 py-2 rounded-full backdrop-blur-sm">View image</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="py-20 text-center">
                  <p className="text-slate-400 font-playfair italic text-xl">This album is currently empty. Add photos in the staff portal.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
