
import React from 'react';
import { TabooCard } from '../types';

interface CardProps {
  card: TabooCard;
  onCorrect: () => void;
  onTaboo: () => void;
}

const Card: React.FC<CardProps> = ({ card, onCorrect, onTaboo }) => {
  return (
    <div className="w-full max-w-sm mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden text-slate-800 animate-float">
      <div className="bg-gradient-to-r from-pink-500 to-rose-500 p-8 text-center">
        <h2 className="text-3xl font-black text-white tracking-wider">{card.target}</h2>
      </div>
      
      <div className="p-8 space-y-4">
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest text-center border-b pb-2">
          الكلمات المحظورة
        </p>
        <ul className="space-y-3">
          {card.forbidden.map((word, index) => (
            <li 
              key={index} 
              className="text-xl font-bold text-center py-2 bg-slate-50 rounded-xl border border-slate-100 transition-all hover:bg-rose-50 hover:text-rose-600"
            >
              {word}
            </li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-2 gap-4 p-6 bg-slate-50">
        <button 
          onClick={onTaboo}
          className="py-4 px-6 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl font-bold transition-all transform active:scale-95 shadow-lg flex items-center justify-center gap-2"
        >
          <span>⚠️</span>
          <span>محظور!</span>
        </button>
        <button 
          onClick={onCorrect}
          className="py-4 px-6 bg-emerald-500 hover:bg-emerald-600 text-white rounded-2xl font-bold transition-all transform active:scale-95 shadow-lg flex items-center justify-center gap-2"
        >
          <span>✅</span>
          <span>صحيح</span>
        </button>
      </div>
    </div>
  );
};

export default Card;
