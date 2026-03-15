
import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[100] bg-[#F9FAFB] flex flex-col items-center justify-center transition-opacity duration-700">
      {/* Building Construction Animation */}
      <div className="relative w-36 h-40 mb-6 flex items-end justify-center">

        {/* Ground / Base */}
        <div className="absolute bottom-0 w-full h-1 bg-gray-200 rounded-full"></div>

        {/* Building Frame */}
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex flex-col items-center">

          {/* Floor 3 (Top - animates in last) */}
          <div className="animate-build-3 w-20 h-8 bg-gradient-to-r from-[#14b8a6] to-[#0d9488] rounded-t-lg mb-0.5 relative overflow-hidden opacity-0">
            <div className="absolute inset-x-0 top-0 h-1 bg-white/20"></div>
            <div className="flex justify-center gap-2 mt-2">
              <div className="w-3 h-3 bg-white/30 rounded-sm"></div>
              <div className="w-3 h-3 bg-white/30 rounded-sm"></div>
              <div className="w-3 h-3 bg-white/30 rounded-sm"></div>
            </div>
            {/* Antenna */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-0.5 h-3 bg-[#14b8a6]"></div>
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#14b8a6] rounded-full animate-pulse"></div>
          </div>

          {/* Floor 2 (Middle - animates second) */}
          <div className="animate-build-2 w-24 h-10 bg-gradient-to-r from-[#9333ea] to-[#7e22ce] mb-0.5 relative overflow-hidden opacity-0">
            <div className="absolute inset-x-0 top-0 h-0.5 bg-white/15"></div>
            <div className="flex justify-center gap-2 mt-2.5">
              <div className="w-3.5 h-4 bg-white/25 rounded-sm"></div>
              <div className="w-3.5 h-4 bg-purple-300/40 rounded-sm"></div>
              <div className="w-3.5 h-4 bg-white/25 rounded-sm"></div>
            </div>
          </div>

          {/* Floor 1 (Base - animates first) */}
          <div className="animate-build-1 w-28 h-12 bg-gradient-to-r from-[#7e22ce] to-[#6b21a8] relative overflow-hidden opacity-0">
            <div className="absolute inset-x-0 top-0 h-0.5 bg-white/15"></div>
            <div className="flex justify-center gap-2.5 mt-3">
              <div className="w-4 h-5 bg-white/20 rounded-sm"></div>
              <div className="w-6 h-6 bg-[#14b8a6]/40 rounded-t-md border-t-2 border-x-2 border-[#14b8a6]/50 mt-1"></div>
              <div className="w-4 h-5 bg-white/20 rounded-sm"></div>
            </div>
          </div>
        </div>

        {/* Crane arm (decorative) */}
        <div className="absolute top-2 right-4 animate-crane opacity-60">
          <div className="w-0.5 h-16 bg-gray-300 absolute bottom-0 right-0"></div>
          <div className="w-12 h-0.5 bg-gray-300 absolute top-0 right-0"></div>
          <div className="w-0.5 h-4 bg-gray-400 absolute top-0 right-0"></div>
          <div className="w-1 h-1 bg-[#14b8a6] rounded-full absolute top-4 right-0 animate-pulse"></div>
        </div>

        {/* "SOLD" floating badge */}
        <div className="absolute -top-1 -left-1 animate-float-badge opacity-0">
          <div className="bg-[#14b8a6] text-white text-[7px] font-black px-2 py-1 rounded-md shadow-lg uppercase tracking-wider">
            Vendido
          </div>
        </div>

      </div>

      <div className="text-center px-4">
        <h2 className="text-2xl font-bold text-gray-900 tracking-tight mb-1 font-sans">TamiBot</h2>
        <p className="text-gray-400 font-medium text-xs animate-pulse uppercase tracking-widest">Cargando...</p>
      </div>

      <style>{`
        @keyframes build-1 {
          0% { transform: translateY(20px) scaleY(0); opacity: 0; }
          30% { transform: translateY(0) scaleY(1); opacity: 1; }
          100% { transform: translateY(0) scaleY(1); opacity: 1; }
        }
        @keyframes build-2 {
          0%, 25% { transform: translateY(15px) scaleY(0); opacity: 0; }
          55% { transform: translateY(0) scaleY(1); opacity: 1; }
          100% { transform: translateY(0) scaleY(1); opacity: 1; }
        }
        @keyframes build-3 {
          0%, 50% { transform: translateY(10px) scaleY(0); opacity: 0; }
          80% { transform: translateY(0) scaleY(1); opacity: 1; }
          100% { transform: translateY(0) scaleY(1); opacity: 1; }
        }
        @keyframes crane-swing {
          0%, 100% { transform: rotate(-2deg); }
          50% { transform: rotate(2deg); }
        }
        @keyframes float-badge {
          0%, 70% { opacity: 0; transform: translateY(5px) scale(0.8); }
          85% { opacity: 1; transform: translateY(0) scale(1.05); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-build-1 { animation: build-1 2.5s ease-out infinite; transform-origin: bottom; }
        .animate-build-2 { animation: build-2 2.5s ease-out infinite; transform-origin: bottom; }
        .animate-build-3 { animation: build-3 2.5s ease-out infinite; transform-origin: bottom; }
        .animate-crane { animation: crane-swing 3s ease-in-out infinite; transform-origin: bottom right; }
        .animate-float-badge { animation: float-badge 2.5s ease-out infinite; }
      `}</style>
    </div>
  );
};

export default Loader;
