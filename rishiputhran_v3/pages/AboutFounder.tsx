
import React from 'react';
import { 
  Quote, Heart, GraduationCap, Stethoscope, Package, 
  Scissors, Umbrella, Activity, Award, Cat, Backpack, 
  Baby, Plane, MapPin, Sparkles, Tv, Utensils, 
  Flower2, Home, Cross, Scale, Sprout
} from 'lucide-react';
import { SiteConfig } from '../types';

const AboutFounderPage: React.FC<{ config: SiteConfig }> = ({ config }) => {
  const events = [
    {
      id: 1,
      title: config.ap1Title,
      date: config.ap1Date,
      location: config.ap1Location,
      purpose: config.ap1Purpose,
      image: config.ap1Img,
      categories: [
        {
          name: "Student's educational support",
          items: [
            { text: "Gold rings for two newborns", icon: <Sparkles className="text-amber-400" size={14} /> },
            { text: "Education assistance for deserving students", icon: <GraduationCap className="text-blue-500" size={14} /> },
            { text: "Dresses and usability items for disordered girls", icon: <Heart className="text-pink-400" size={14} /> },
            { text: "65 kits (umbrellas, bags, geometry boxes)", icon: <Umbrella className="text-blue-600" size={14} /> },
            { text: "Uniforms and notebooks for 18 students", icon: <Backpack className="text-blue-400" size={14} /> }
          ]
        },
        {
          name: "Women empowerment & others",
          items: [
            { text: "Milk powder and pressure cooker donation", icon: <Utensils className="text-slate-400" size={14} /> },
            { text: "Sewing machines for 4 destitute women", icon: <Scissors className="text-slate-500" size={14} /> },
            { text: "Sarees for social welfare groups", icon: <Flower2 className="text-pink-500" size={14} /> },
            { text: "Swarna thaalis for underprivileged marriages", icon: <Award className="text-amber-500" size={14} /> },
            { text: "Groceries for physically challenged families", icon: <Package className="text-amber-700" size={14} /> }
          ]
        },
        {
          name: "Old age & healthcare support",
          items: [
            { text: "Rice bags (75kg) for multiple centers", icon: <Package className="text-amber-800" size={14} /> },
            { text: "25 bed sheets for old age home", icon: <Home className="text-blue-400" size={14} /> },
            { text: "Television for leprosy hospital", icon: <Tv className="text-slate-600" size={14} /> },
            { text: "Water beds for bedridden patients", icon: <Stethoscope className="text-emerald-500" size={14} /> },
            { text: "Uroclick bags for cancer patients", icon: <Activity className="text-red-500" size={14} /> }
          ]
        }
      ]
    },
    {
      id: 2,
      title: config.ap2Title,
      date: config.ap2Date,
      location: config.ap2Location,
      purpose: config.ap2Purpose,
      image: config.ap2Img,
      categories: [
        {
          name: "Student's educational support",
          items: [
            { text: "35 school bags for primary children", icon: <Backpack className="text-blue-500" size={14} /> },
            { text: "Educational kits for 68 female students", icon: <GraduationCap className="text-blue-600" size={14} /> },
            { text: "Dresses and aid for orphanage", icon: <Heart className="text-rose-400" size={14} /> },
            { text: "Gold ear rings for parentless children", icon: <Sparkles className="text-amber-400" size={14} /> }
          ]
        },
        {
          name: "Women empowerment",
          items: [
            { text: "Milk powder donation", icon: <Utensils className="text-slate-400" size={14} /> },
            { text: "Sarees, dhotis and shirts for 25+ widows", icon: <Flower2 className="text-pink-500" size={14} /> },
            { text: "3-month advance aid for helpless families", icon: <Heart className="text-red-500" size={14} /> },
            { text: "Rice bags (50kg) for 5 welfare centers", icon: <Package className="text-amber-700" size={14} /> },
            { text: "Gold thaalis for 3 major temples", icon: <Award className="text-amber-500" size={14} /> },
            { text: "Education aid for 48 widow families in crisis areas", icon: <Scale className="text-blue-400" size={14} /> }
          ]
        },
        {
          name: "Old age & healthcare support",
          items: [
            { text: "Medicines and walker for old people", icon: <Stethoscope className="text-emerald-500" size={14} /> },
            { text: "Free dialysis for 20+ patients", icon: <Activity className="text-red-500" size={14} /> },
            { text: "NICU micro trip sets and canulas", icon: <Baby className="text-blue-400" size={14} /> },
            { text: "Diapers and napkins for labour ward", icon: <Heart className="text-rose-500" size={14} /> },
            { text: "Optical surgery support", icon: <Activity className="text-blue-600" size={14} /> },
            { text: "Infant heart surgery contributions", icon: <Heart className="text-red-600" size={14} /> },
            { text: "30 bed spreads for palliative care", icon: <Home className="text-slate-400" size={14} /> },
            { text: "Agriculture seeds for hospital campus", icon: <Sprout className="text-green-600" size={14} /> },
            { text: "Funeral assistance for unknown/orphan bodies", icon: <Cross className="text-slate-400" size={14} /> }
          ]
        }
      ]
    },
    {
      id: 3,
      title: config.ap3Title,
      date: config.ap3Date,
      location: config.ap3Location,
      purpose: config.ap3Purpose,
      image: config.ap3Img,
      categories: [
        {
          name: "Women & children empowerment",
          items: [
            { text: "Saree, blouse and 5kg rice for 80 widows", icon: <Package className="text-amber-700" size={14} /> },
            { text: "Churidhars for students in need", icon: <Scissors className="text-slate-400" size={14} /> },
            { text: "Marriage assistance for fatherless girls", icon: <Heart className="text-rose-400" size={14} /> },
            { text: "3-month advance monthly family aid", icon: <Heart className="text-red-500" size={14} /> },
            { text: "College education for fatherless girl", icon: <GraduationCap className="text-blue-600" size={14} /> },
            { text: "13 gold thaalis for community marriages", icon: <Award className="text-amber-500" size={14} /> }
          ]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-[400px] overflow-hidden flex items-center justify-center text-center">
        <div className="absolute inset-0">
          <img src={config.aboutBannerImg} alt="Founder Banner" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-blue-900/60 backdrop-blur-[2px]"></div>
        </div>
        <div className="container relative mx-auto px-4 z-10">
          <h1 className="text-5xl md:text-7xl font-cinzel font-bold mb-4 text-white uppercase">{config.aboutTitle}</h1>
          <p className="text-amber-400 font-semibold tracking-widest uppercase text-sm">{config.aboutSubtitle}</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-20 items-start">
            <div className="w-full lg:w-1/3">
              <div className="sticky top-24">
                <div className="relative p-2 bg-white shadow-2xl rounded-2xl overflow-hidden border border-slate-100 max-w-xs mx-auto">
                  <img src={config.aboutProfileImg} alt="Acharya Rishiputhran Shri Balanji" className="w-full h-auto rounded-xl" />
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-2/3">
              <div className="prose prose-lg text-slate-700 max-w-none font-playfair">
                <h2 className="text-4xl font-cinzel font-bold text-slate-900 mb-8 border-b border-slate-100 pb-4 uppercase">Journey from corporate to spiritual</h2>
                <p className="text-xl leading-relaxed mb-8">{config.aboutBio1}</p>
                <p className="text-xl leading-relaxed mb-8">{config.aboutBio2}</p>
                <div className="bg-amber-50/50 p-10 rounded-3xl border-l-8 border-amber-500 mb-12 shadow-sm">
                  <Quote className="text-amber-500 mb-4" size={40} />
                  <p className="text-2xl text-slate-800 leading-relaxed font-serif italic">"{config.aboutQuote}"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-bold tracking-widest uppercase text-xs">A legacy of service</span>
            <h2 className="text-5xl font-cinzel font-bold text-blue-900 mt-2 uppercase">Ammaicku pranamam series</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mt-6"></div>
          </div>

          <div className="space-y-24">
            {events.map((event) => (
              <div key={event.id} className="flex flex-col lg:flex-row items-stretch gap-8 bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 transition-all hover:shadow-2xl">
                <div className="w-full lg:w-[30%] min-h-[400px]">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                </div>
                <div className="w-full lg:w-[70%] p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center justify-between mb-2 gap-4">
                    <h3 className="text-3xl font-cinzel font-bold text-blue-900">{event.title}</h3>
                    <span className="bg-amber-100 text-amber-700 text-xs font-bold px-4 py-2 rounded-full shadow-sm">{event.date}</span>
                  </div>
                  <p className="text-amber-600 font-bold text-sm tracking-wide mb-6 uppercase">{event.location}</p>
                  <p className="text-slate-600 mb-10 font-playfair italic leading-relaxed border-l-2 border-amber-200 pl-4">{event.purpose}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {event.categories.map((cat, cIdx) => (
                      <div key={cIdx} className="space-y-4">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-blue-900 border-b border-slate-100 pb-2">{cat.name}</h4>
                        <div className="grid grid-cols-1 gap-3">
                          {cat.items.map((item, iIdx) => (
                            <div key={iIdx} className="flex items-center space-x-3 group">
                              <div className="shrink-0 bg-slate-50 p-1.5 rounded-lg group-hover:bg-amber-50 transition-colors">{item.icon}</div>
                              <span className="text-slate-700 text-[11px] font-medium leading-tight group-hover:text-amber-900 transition-colors">{item.text}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutFounderPage;
