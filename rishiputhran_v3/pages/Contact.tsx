
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { SiteConfig } from '../types';

const ContactPage: React.FC<{ config: SiteConfig }> = ({ config }) => {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative py-48 overflow-hidden flex items-center justify-center text-center">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <img src={config.contactBannerImg} alt="Nature Background" className="w-full h-full object-cover brightness-50" />
        </div>
        <div className="container relative mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-cinzel font-bold mb-6 text-white uppercase">{config.contactTitle}</h1>
          <p className="text-amber-200 text-xl md:text-2xl font-playfair max-w-3xl mx-auto">{config.contactSubtitle}</p>
        </div>
      </section>

      <section className="py-32 bg-white relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            <div className="bg-white p-12 rounded-[2.5rem] shadow-xl border border-slate-100 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-amber-50 text-amber-600 rounded-[2rem] flex items-center justify-center mb-8 border border-amber-100"><Mail size={32} /></div>
              <h4 className="text-2xl font-cinzel font-bold text-slate-900 mb-4">Email us</h4>
              <p className="text-lg text-slate-600 font-playfair select-all">{config.contactEmail}</p>
            </div>
            <div className="bg-white p-12 rounded-[2.5rem] shadow-xl border border-slate-100 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-blue-50 text-blue-900 rounded-[2rem] flex items-center justify-center mb-8 border border-blue-100"><Phone size={32} /></div>
              <h4 className="text-2xl font-cinzel font-bold text-slate-900 mb-4">Call us</h4>
              <div className="text-lg text-slate-600 font-playfair">
                <p>{config.contactPhone1}</p>
                <p>{config.contactPhone2}</p>
              </div>
            </div>
            <div className="bg-white p-12 rounded-[2.5rem] shadow-xl border border-slate-100 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-green-50 text-green-600 rounded-[2rem] flex items-center justify-center mb-8 border border-green-100"><MapPin size={32} /></div>
              <h4 className="text-2xl font-cinzel font-bold text-slate-900 mb-4">Visit us</h4>
              <p className="text-lg text-slate-600 font-playfair leading-relaxed">{config.contactAddress}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="h-[500px] w-full bg-slate-100 grayscale hover:grayscale-0 transition-all duration-700">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.6041270258145!2d76.3475143!3d10.111002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080f3e2444b02d%3A0xc3f8e5b4c1969a5e!2sAluva%2C%20Kerala!5e0!3m2!1sen!2sin!4v1715858000000!5m2!1sen!2sin" 
          width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" title="Location"
        ></iframe>
      </section>
    </div>
  );
};

export default ContactPage;
