
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SiteConfig } from '../types';

const NatureBackground: React.FC<{ imageUrl: string }> = ({ imageUrl }) => {
  return (
    <div className="fixed inset-0 -z-10 h-screen w-full overflow-hidden pointer-events-none">
      <img src={imageUrl} alt="Nature Background" className="w-full h-full object-cover scale-105 brightness-[0.4] contrast-[1.1]" />
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bird-container" style={{ top: `${20 + Math.random() * 30}%`, animationDuration: `${15 + Math.random() * 10}s`, animationDelay: `${i * 2}s` }}>
            <div className="bird"></div>
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-transparent to-black/40"></div>
      <style>{`.bird-container { position: absolute; left: -10%; animation: fly-right 20s linear infinite; opacity: 0.6; } .bird { background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/174479/bird-cells-new.svg'); background-size: auto 100%; width: 88px; height: 125px; animation: bird-flap 1s steps(10) infinite; } @keyframes fly-right { from { left: -10%; } to { left: 110%; } } @keyframes bird-flap { 0% { background-position: 0 0; } 100% { background-position: -900px 0; } }`}</style>
    </div>
  );
};

const HomePage: React.FC<{ config: SiteConfig }> = ({ config }) => {
  const servicePreviews = [
    { title: config.s1Title, desc: config.s1Desc, img: config.s1Img },
    { title: config.s2Title, desc: config.s2Desc, img: config.s2Img },
    { title: config.s3Title, desc: config.s3Desc, img: config.s3Img },
  ];

  const galleryCategories = [
    { id: 'childhood', title: 'Childhood', img: config.homeAlbumImg1 },
    { id: 'work', title: 'Corporate career', img: config.homeAlbumImg2 },
    { id: 'vedic', title: 'Vedic school journey', img: config.homeAlbumImg3 },
    { id: 'community', title: 'Community service', img: config.homeAlbumImg4 }
  ];

  return (
    <div className="overflow-x-hidden">
      <NatureBackground imageUrl={config.homeHeroBg} />
      <section className="relative h-[60vh] flex items-center justify-center text-white">
        <div className="container relative mx-auto px-4 text-center z-10">
          <h1 className="text-5xl md:text-8xl font-cinzel font-bold mb-4 drop-shadow-xl">{config.heroTitle}</h1>
          <h2 className="text-xl md:text-2xl font-semibold tracking-[0.2em] text-amber-400 drop-shadow-md uppercase">{config.heroSubtitle}</h2>
        </div>
      </section>

      <section className="pb-24 pt-0 relative text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-black/60 backdrop-blur-xl p-10 md:p-14 rounded-[3rem] border border-white/20 -mt-16 md:-mt-20 shadow-2xl">
            <p className="text-xl md:text-3xl leading-relaxed font-playfair italic">"{config.homeIntroText}"</p>
            <div className="mt-8 h-1 w-20 bg-amber-500 mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-amber-50/70 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-bold tracking-widest uppercase text-xs">Our offerings</span>
            <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-blue-900 mt-2 mb-6">{config.homeServicesTitle}</h2>
            <p className="max-w-2xl mx-auto text-slate-600 text-lg font-playfair">{config.homeServicesDesc}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            {servicePreviews.map((service, idx) => (
              <div key={idx} className="bg-white rounded-[2rem] shadow-sm border border-amber-100 hover:shadow-2xl transition-all group overflow-hidden flex flex-col">
                <div className="h-64 overflow-hidden relative">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div className="p-10 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-4 text-slate-900 font-cinzel">{service.title}</h3>
                  <p className="text-slate-600 mb-8 leading-relaxed font-playfair">{service.desc}</p>
                  <div className="mt-auto">
                    <Link to="/services" className="text-amber-600 font-bold flex items-center hover:underline group/link">Explore path <ArrowRight className="ml-2 group-hover/link:translate-x-1 transition-transform" size={16} /></Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/services" className="inline-block bg-amber-600 text-white px-10 py-4 rounded-full font-bold transition-all hover:bg-amber-700 shadow-xl">Discover all services</Link>
          </div>
        </div>
      </section>

      <section className="py-32 bg-white relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full md:w-5/12 lg:w-4/12 relative">
              <div className="absolute -inset-4 bg-amber-100 rounded-[2.5rem] -rotate-3 -z-10"></div>
              <img src={config.homeVisionaryImg} alt={config.homeVisionaryTitle} className="w-full rounded-[2rem] shadow-2xl object-cover h-[500px]" />
            </div>
            <div className="w-full md:w-7/12 lg:w-8/12">
              <span className="text-amber-600 font-bold tracking-widest uppercase text-xs">The visionary</span>
              <h2 className="text-4xl lg:text-5xl font-cinzel font-bold text-blue-900 mt-2 mb-8">{config.homeVisionaryTitle}</h2>
              <p className="text-lg lg:text-xl text-slate-700 leading-relaxed font-playfair mb-10 italic">{config.homeVisionaryText}</p>
              <Link to="/aboutfounder" className="bg-blue-900 text-white px-10 py-4 rounded-full font-bold hover:bg-blue-950 transition-all inline-block shadow-lg">Learn about the founder</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-slate-900 text-white relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-16">
            <h2 className="text-5xl font-cinzel font-bold mb-6">{config.homeGalleryTitle}</h2>
            <p className="text-slate-400 text-xl leading-relaxed font-playfair">{config.homeGalleryDesc}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {galleryCategories.map((cat) => (
              <Link to="/gallery" key={cat.id} className="group relative overflow-hidden rounded-[2rem] aspect-[4/5] block">
                <img src={cat.img} alt={cat.title} className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-end p-8">
                  <h4 className="text-2xl font-cinzel font-bold text-amber-500">{cat.title}</h4>
                  <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity">Explore album &rarr;</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-amber-600 text-white text-center relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-cinzel font-bold mb-8 uppercase">Connect with wisdom</h2>
          <p className="text-xl mb-12 text-amber-50 opacity-90 max-w-2xl mx-auto font-playfair italic">Reach out to us today to learn more about our courses and community programs.</p>
          <Link to="/contact" className="bg-white text-amber-600 px-12 py-5 rounded-full font-bold text-xl hover:bg-slate-50 transition-all shadow-2xl inline-block">Contact us</Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
