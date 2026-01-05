
import React, { useState } from 'react';
import { Settings, Image as ImageIcon, Palette, Save, CheckCircle2, Globe, LayoutList, User, Shield, LogOut, Lock, BookOpen } from 'lucide-react';
import { SiteConfig } from '../types';

interface AdminProps {
  config: SiteConfig;
  onUpdate: (newConfig: SiteConfig) => void;
}

const AdminPage: React.FC<AdminProps> = ({ config, onUpdate }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState<'home' | 'about' | 'services' | 'gallery' | 'contact' | 'branding'>('home');
  const [formConfig, setFormConfig] = useState<SiteConfig>({ ...config });
  const [isSaved, setIsSaved] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') { setIsAuthenticated(true); setError(''); }
    else { setError('Invalid password.'); }
  };

  const handleSave = () => { onUpdate(formConfig); setIsSaved(true); setTimeout(() => setIsSaved(false), 3000); };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormConfig(prev => ({ ...prev, [name]: value }));
  };

  const renderInput = (label: string, name: keyof SiteConfig, type: 'text' | 'textarea' | 'image' = 'text') => {
    const value = formConfig[name] as string;
    return (
      <div className="space-y-1">
        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{label}</label>
        {type === 'textarea' ? (
          <textarea name={name} value={value} onChange={handleChange} rows={4} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-amber-500 outline-none transition-all text-sm font-sans" />
        ) : (
          <div className="flex space-x-2">
            <input name={name} value={value} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-amber-500 outline-none text-sm" />
            {type === 'image' && (
              <div className="w-12 h-12 rounded-xl border border-slate-200 overflow-hidden shrink-0 bg-slate-100">
                <img src={value} alt="Preview" className="w-full h-full object-cover" onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/100?text=Err')} />
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-[2.5rem] p-10 shadow-2xl">
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-3xl flex items-center justify-center mx-auto mb-6"><Lock size={32} /></div>
            <h1 className="text-2xl font-cinzel font-bold text-slate-900">Staff portal</h1>
          </div>
          <form onSubmit={handleLogin} className="space-y-6">
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200" placeholder="Password..." autoFocus />
            {error && <p className="text-red-500 text-xs font-semibold">{error}</p>}
            <button type="submit" className="w-full bg-blue-900 text-white py-4 rounded-2xl font-bold shadow-lg">Verify identity</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row">
      <div className="w-full md:w-72 bg-white border-r border-slate-200 sticky top-0 md:h-screen z-30 flex flex-col">
        <div className="p-8 border-b border-slate-100"><h2 className="text-xl font-cinzel font-bold text-blue-900 flex items-center"><Shield className="mr-3 text-amber-600" size={24} /> Admin</h2></div>
        <nav className="p-4 space-y-1 flex-grow">
          {['home', 'about', 'services', 'gallery', 'contact'].map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab as any)} className={`w-full text-left px-5 py-4 rounded-xl flex items-center space-x-4 transition-all capitalize ${activeTab === tab ? 'bg-amber-600 text-white shadow-lg' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Settings size={18} /> <span className="text-sm font-semibold">{tab} Page</span>
            </button>
          ))}
        </nav>
        <div className="p-6 border-t border-slate-100"><button onClick={() => setIsAuthenticated(false)} className="w-full flex items-center space-x-3 text-slate-400 hover:text-red-600"><LogOut size={18} /> <span className="text-sm">Sign out</span></button></div>
      </div>

      <div className="flex-grow p-6 md:p-12 overflow-y-auto">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h1 className="text-3xl font-cinzel font-bold text-slate-900 capitalize">{activeTab} management</h1>
            <button onClick={handleSave} className={`px-8 py-3 rounded-xl font-bold flex items-center shadow-lg transition-all ${isSaved ? 'bg-green-500 text-white' : 'bg-blue-900 text-white'}`}>
              {isSaved ? <CheckCircle2 className="mr-2" size={18} /> : <Save className="mr-2" size={18} />} Save changes
            </button>
          </div>

          <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-200 space-y-10">
            {activeTab === 'home' && (
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {renderInput('Hero Title', 'heroTitle')}
                  {renderInput('Hero Subtitle', 'heroSubtitle')}
                  {renderInput('Hero Background', 'homeHeroBg', 'image')}
                  {renderInput('Founder Preview Image', 'homeVisionaryImg', 'image')}
                </div>
                {renderInput('Intro Quote', 'homeIntroText', 'textarea')}
                {renderInput('Visionary Biography', 'homeVisionaryText', 'textarea')}
                <div className="border-t pt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                  {renderInput('Service 1 Image', 's1Img', 'image')}
                  {renderInput('Service 2 Image', 's2Img', 'image')}
                  {renderInput('Service 3 Image', 's3Img', 'image')}
                </div>
                <div className="border-t pt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
                  {renderInput('Album 1 Preview', 'homeAlbumImg1', 'image')}
                  {renderInput('Album 2 Preview', 'homeAlbumImg2', 'image')}
                  {renderInput('Album 3 Preview', 'homeAlbumImg3', 'image')}
                  {renderInput('Album 4 Preview', 'homeAlbumImg4', 'image')}
                </div>
              </div>
            )}

            {activeTab === 'about' && (
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {renderInput('Page Banner', 'aboutBannerImg', 'image')}
                  {renderInput('Profile Photo', 'aboutProfileImg', 'image')}
                </div>
                {renderInput('Mission statement', 'aboutQuote', 'textarea')}
                <div className="border-t pt-8 space-y-8">
                  <h3 className="font-cinzel font-bold text-blue-900">Ammaicku Pranamam series</h3>
                  {[1,2,3].map(n => (
                    <div key={n} className="p-6 bg-slate-50 rounded-2xl space-y-4">
                      {renderInput(`Event ${n} Title`, `ap${n}Title` as any)}
                      {renderInput(`Event ${n} Image`, `ap${n}Img` as any, 'image')}
                      {renderInput(`Event ${n} Purpose`, `ap${n}Purpose` as any, 'textarea')}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'services' && (
              <div className="space-y-8">
                {renderInput('Page Banner', 'servicesBannerImg', 'image')}
                {[1,2,3,4,5,6].map(n => (
                  <div key={n} className="p-6 bg-slate-50 rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2 font-bold text-blue-900">Service {n}</div>
                    {renderInput(`S${n} Title`, `s${n}Title` as any)}
                    {renderInput(`S${n} Image`, `s${n}Img` as any, 'image')}
                    <div className="md:col-span-2">{renderInput(`S${n} Short Description`, `s${n}Desc` as any, 'textarea')}</div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'gallery' && (
              <div className="space-y-8">
                {renderInput('Page Banner', 'galleryBannerImg', 'image')}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {renderInput('Childhood Links (one per line)', 'galleryChildhoodLinks', 'textarea')}
                  {renderInput('Corporate Links', 'galleryWorkLinks', 'textarea')}
                  {renderInput('Vedic Journey Links', 'galleryVedicLinks', 'textarea')}
                  {renderInput('Community Links', 'galleryCommunityLinks', 'textarea')}
                </div>
              </div>
            )}

            {activeTab === 'contact' && (
              <div className="space-y-8">
                {renderInput('Page Banner', 'contactBannerImg', 'image')}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {renderInput('Email address', 'contactEmail')}
                  {renderInput('Address line', 'contactAddress')}
                  {renderInput('Phone 1', 'contactPhone1')}
                  {renderInput('Phone 2', 'contactPhone2')}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
