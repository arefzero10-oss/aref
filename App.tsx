
import React, { useState, useEffect } from 'react';
import { Language } from './types';

const TRANSLATIONS = {
  ar: {
    title: "GOJO",
    subtitle: "مجتمع لعبة المحظور العالمي",
    devTitle: "رؤية المطور والمستقبل",
    devVision: "رؤيتنا هي خلق تجارب متعة اجتماعية تفاعلية مدعومة بالذكاء الاصطناعي، حيث لا تنتهي الكلمات أبداً وتتجدد التحديات باستمرار. نحن نبني مستقبلاً تكون فيه المتعة وسيلة للربط بين الشعوب واللغات.",
    telegram: "انضم لمجتمعنا على تليجرام",
    version: "الإصدار 2.0 • مستقبل المتعة الذكية",
  },
  en: {
    title: "GOJO",
    subtitle: "Global Forbidden Game Community",
    devTitle: "Developer & Future Vision",
    devVision: "Our vision is to create interactive social pleasure experiences powered by AI, where words never run out and challenges constantly evolve. We are building a future where fun bridges people and languages.",
    telegram: "Join our Telegram community",
    version: "v2.0 • The Future of AI Pleasure",
  },
  zh: {
    title: "GOJO",
    subtitle: "全球禁忌游戏社区",
    devTitle: "开发者与未来愿景",
    devVision: "我们的愿景是创造由人工智能驱动的互动社交乐趣体验，词汇永不枯竭，挑战不断进化。我们正在建立一个乐趣连接人与语言 flax 的未来。",
    telegram: "加入我们的 Telegram 社区",
    version: "v2.0 • 人工智能乐趣的未来",
  }
};

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('ar');
  const [isDark, setIsDark] = useState(true);
  
  const t = TRANSLATIONS[lang];
  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    document.documentElement.dir = dir;
    document.body.className = `lang-${lang} ${isDark ? 'bg-indigo-950 text-white' : 'bg-slate-50 text-slate-900'}`;
  }, [lang, isDark]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background Decoration */}
      <div className={`absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full blur-[120px] opacity-20 ${isDark ? 'bg-rose-500' : 'bg-rose-300'}`}></div>
      <div className={`absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full blur-[120px] opacity-20 ${isDark ? 'bg-blue-500' : 'bg-blue-300'}`}></div>

      {/* Header Controls */}
      <div className="fixed top-6 inset-x-6 flex justify-between items-center z-50">
        <button 
          onClick={() => setIsDark(!isDark)}
          className={`p-3 rounded-2xl shadow-xl transition-all hover:scale-110 active:scale-95 ${isDark ? 'bg-slate-800 text-yellow-400 border border-slate-700' : 'bg-white text-slate-800 border border-slate-200'}`}
        >
          {isDark ? '🌙' : '☀️'}
        </button>
        
        <div className="flex gap-1 bg-black/20 backdrop-blur-xl p-1.5 rounded-2xl border border-white/10 shadow-2xl">
          {(['ar', 'en', 'zh'] as Language[]).map(l => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`px-4 py-1.5 rounded-xl text-xs font-black transition-all ${lang === l ? 'bg-rose-500 text-white shadow-lg scale-105' : 'text-slate-400 hover:text-white'}`}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Card */}
      <main className="max-w-2xl w-full z-10 animate-float">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-pink-400 via-rose-500 to-amber-500 drop-shadow-sm">
            {t.title}
          </h1>
          <p className="text-slate-400 text-xl font-medium tracking-wide">
            {t.subtitle}
          </p>
        </div>

        <div className={`p-10 rounded-[40px] border transition-all duration-500 ${isDark ? 'bg-slate-900/80 border-slate-800 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.6)]' : 'bg-white/90 border-slate-100 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)]'} backdrop-blur-2xl`}>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-gradient-to-tr from-blue-500 to-emerald-400 rounded-2xl flex items-center justify-center text-2xl shadow-lg">
              🚀
            </div>
            <h2 className="text-3xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
              {t.devTitle}
            </h2>
          </div>

          <p className={`text-xl leading-relaxed mb-10 ${isDark ? 'text-slate-300' : 'text-slate-600'} ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
            {t.devVision}
          </p>

          <div className="space-y-6">
            <a 
              href="https://t.me/+P3AjXXVhu-I1MjY8" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center gap-4 py-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-[24px] font-black text-2xl shadow-[0_20px_40px_-10px_rgba(59,130,246,0.5)] transition-all hover:brightness-110 hover:-translate-y-1 active:scale-95 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="text-3xl">💬</span>
              {t.telegram}
            </a>
            
            <div className="text-center">
              <span className={`text-sm font-bold opacity-40 px-4 py-2 rounded-full border ${isDark ? 'border-white/10 text-white' : 'border-black/5 text-slate-900'}`}>
                {t.version}
              </span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Decoration */}
      <footer className="fixed bottom-8 text-slate-500 text-xs font-bold tracking-widest uppercase opacity-30">
        Handcrafted for the future of social interaction
      </footer>
    </div>
  );
};

export default App;
