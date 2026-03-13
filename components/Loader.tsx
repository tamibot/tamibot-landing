
import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[100] bg-[#F9FAFB] flex flex-col items-center justify-center transition-opacity duration-700">
      {/* iOS Emoji Style Stack: Red (Bottom), Green (Middle), Blue (Top) */}
      <div className="relative w-32 h-32 mb-6 flex items-end justify-center perspective-500">

        {/* Book 1 (Bottom - Dark Purple) */}
        <div className="absolute bottom-0 w-24 h-7 bg-[#7e22ce] rounded-r-sm rounded-l-lg shadow-[0_1px_2px_rgba(0,0,0,0.1),_inset_4px_0_8px_rgba(0,0,0,0.1)] animate-stack-1 z-10 origin-bottom flex items-center overflow-hidden">
          {/* Spine Highlight */}
          <div className="absolute left-0 top-0 bottom-0 w-2 bg-white/10"></div>
          {/* Pages visual */}
          <div className="absolute top-[3px] bottom-[3px] right-0 w-[82%] bg-[#FDFDFD] rounded-r-sm border-l border-gray-200 shadow-inner"></div>
        </div>

        {/* Book 2 (Middle - Purple) */}
        <div className="absolute bottom-7 w-24 h-7 bg-[#9333ea] rounded-r-sm rounded-l-lg shadow-[0_1px_2px_rgba(0,0,0,0.1),_inset_4px_0_8px_rgba(0,0,0,0.1)] animate-stack-2 z-20 origin-bottom flex items-center overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-2 bg-white/10"></div>
          <div className="absolute top-[3px] bottom-[3px] right-0 w-[82%] bg-[#FDFDFD] rounded-r-sm border-l border-gray-200 shadow-inner"></div>
        </div>

        {/* Book 3 (Top - Teal) */}
        <div className="absolute bottom-14 w-24 h-7 bg-[#14b8a6] rounded-r-sm rounded-l-lg shadow-[0_4px_12px_rgba(0,0,0,0.15),_inset_4px_0_8px_rgba(0,0,0,0.1)] animate-stack-3 z-30 origin-bottom flex items-center overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-2 bg-white/10"></div>
          <div className="absolute top-[3px] bottom-[3px] right-0 w-[82%] bg-[#FDFDFD] rounded-r-sm border-l border-gray-200 shadow-inner"></div>
        </div>

      </div>

      <div className="text-center px-4">
        <h2 className="text-2xl font-bold text-gray-900 tracking-tight mb-1 font-sans">TamiBot</h2>
        <p className="text-gray-400 font-medium text-xs animate-pulse uppercase tracking-widest">Cargando...</p>
      </div>

      <style>{`
        @keyframes stack-1 {
          0% { transform: translateY(0) scale(1); }
          50% { transform: translateY(2px) scale(0.98); }
          100% { transform: translateY(0) scale(1); }
        }
        @keyframes stack-2 {
          0% { transform: translateY(-40px) rotate(-5deg); opacity: 0; }
          20% { transform: translateY(0) rotate(0); opacity: 1; }
          25% { transform: translateY(2px) rotate(0); }
          30% { transform: translateY(0) rotate(0); }
          100% { transform: translateY(0) rotate(0); opacity: 1; }
        }
        @keyframes stack-3 {
          0% { opacity: 0; }
          15% { opacity: 0; transform: translateY(-40px) rotate(5deg); }
          35% { transform: translateY(0) rotate(0); opacity: 1; }
          40% { transform: translateY(2px) rotate(0); }
          45% { transform: translateY(0) rotate(0); }
          100% { transform: translateY(0) rotate(0); opacity: 1; }
        }
        .animate-stack-1 { animation: stack-1 2s infinite ease-in-out; }
        .animate-stack-2 { animation: stack-2 2s infinite cubic-bezier(0.25, 1, 0.5, 1); }
        .animate-stack-3 { animation: stack-3 2s infinite cubic-bezier(0.25, 1, 0.5, 1); }
        .perspective-500 { perspective: 500px; }
      `}</style>
    </div>
  );
};

export default Loader;
