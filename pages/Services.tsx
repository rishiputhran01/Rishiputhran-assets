
import React from 'react';
import { SiteConfig } from '../types';

const ServicesPage: React.FC<{ config: SiteConfig }> = ({ config }) => {
  const serviceItems = [
    { title: config.s1Title, desc: config.s1Desc, ext: config.s1Ext, img: config.s1Img, who: "Intellectual seekers" },
    { title: config.s2Title, desc: config.s2Desc, ext: config.s2Ext, img: config.s2Img, who: "Students" },
    { title: config.s3Title, desc: config.s3Desc, ext: config.s3Ext, img: config.s3Img, who: "Families" },
    { title: config.s4Title, desc: config.s4Desc, ext: config.s4Ext, img: config.s4Img, who: "Senior citizens" },
    { title: config.s5Title, desc: config.s5Desc, ext: config.s5Ext, img: config.s5Img, who: "Corporate professionals" },
    { title: config.s6Title, desc: config.s6Desc, ext: config.s6Ext, img: config.s6Img, who: "Society" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-[400px] overflow-hidden flex items-center justify-center text-center">
        <div className="absolute inset-0">
          <img src={config.servicesBannerImg} alt="Services Banner" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-amber-600/70 backdrop-blur-[1px]"></div>
        </div>
        <div className="container relative mx-auto px-4 z-10">
          <h1 className="text-5xl md:text-7xl font-cinzel font-bold mb-4 text-white uppercase">{config.servicesTitle}</h1>
          <p className="text-amber-50 max-w-3xl mx-auto text-xl font-playfair italic">"{config.servicesSubtitle}"</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 space-y-24">
          {serviceItems.map((service, idx) => (
            <div key={idx} className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start border-b border-slate-50 pb-20 last:border-0 last:pb-0">
              <div className="w-full lg:w-[30%]">
                <div className="relative group overflow-hidden rounded-2xl shadow-xl">
                  <img src={service.img} alt={service.title} className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors"></div>
                </div>
              </div>
              <div className="w-full lg:w-[70%]">
                <div className="mb-4">
                   <span className="bg-blue-50 text-blue-900 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest border border-blue-100">
                     Target: {service.who}
                   </span>
                </div>
                <h3 className="text-3xl font-cinzel font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-lg text-slate-600 font-playfair italic mb-4 leading-relaxed border-l-4 border-amber-500 pl-4">{service.desc}</p>
                <p className="text-base text-slate-700 mb-6 leading-relaxed">{service.ext}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-blue-950 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-cinzel font-bold mb-8 uppercase">{config.servicesCtaTitle}</h2>
          <p className="text-xl text-blue-100/70 max-w-3xl mx-auto mb-12 font-playfair italic">{config.servicesCtaDesc}</p>
          <a href="#/contact" className="bg-amber-600 hover:bg-amber-700 text-white px-12 py-4 rounded-full font-bold transition-all inline-block shadow-lg">Get in touch</a>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
