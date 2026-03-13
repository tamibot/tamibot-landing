import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="text-white border-t border-white/10 pt-12" style={{ backgroundColor: 'var(--color-primary)' }}>
      {/* Final CTA */}
      <div className="py-16 md:py-24 text-center">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
            ¿Lista para dejar de perder ventas? 🚀
          </h2>
          <p className="text-xl text-purple-100 mb-10 max-w-xl mx-auto">
            Activa tu Agente Tami hoy mismo. Tu primera venta automática podría ser esta misma semana.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => window.open('https://wa.me/51995547575?text=Hola%20quisiera%20mas%20informaci%C3%B3n%20de%20Tami%20Bot', '_blank')}
              className="bg-white text-purple-900 font-bold text-lg px-8 py-4 rounded-full shadow-xl hover:shadow-white/20 hover:-translate-y-1 transition-all flex items-center gap-2"
            >
              <Zap size={20} className="fill-purple-600 text-purple-600" /> Contratar a Tami <ArrowRight size={20} />
            </button>
            <button
              onClick={() => window.open('https://wa.me/51995547575?text=Hola%20quisiera%20mas%20informaci%C3%B3n%20de%20Tami%20Bot', '_blank')}
              className="border-2 border-white/20 hover:bg-white/10 text-white font-bold text-lg px-8 py-4 rounded-full transition-colors flex items-center gap-2"
            >
              💬 Hablar con Ventas
            </button>
          </div>
        </div>
      </div>

      {/* Footer links */}
      <div className="border-t border-purple-800 py-12 bg-purple-950">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12">

            {/* Logo & Contact (Left) */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white font-black text-lg">T</div>
                <span className="text-xl font-bold tracking-tight text-white">Tami<span className="text-purple-400">Bot</span></span>
              </div>
              <div className="flex flex-col gap-1 text-purple-300 text-sm font-medium">
                <a href="https://wa.me/51995547575" target="_blank" className="hover:text-white transition-colors flex items-center gap-2 justify-center md:justify-start">
                  📱 +51 995 547 575
                </a>
                <a href="mailto:mvelasco9757@gmail.com" className="hover:text-white transition-colors flex items-center gap-2 justify-center md:justify-start">
                  ✉️ mvelasco9757@gmail.com
                </a>
              </div>
            </div>

            {/* Links (Right) */}
            <div className="flex flex-wrap justify-center md:justify-end gap-6 md:gap-8 text-sm font-medium text-purple-300">
              <a href="#producto" className="hover:text-white transition-colors">Producto</a>
              <a href="#herramientas" className="hover:text-white transition-colors">Herramientas</a>
              <a href="#proceso" className="hover:text-white transition-colors">Proceso</a>
              <a href="#precios" className="hover:text-white transition-colors">Precios</a>
              <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            </div>

          </div>

          {/* Copyright */}
          <div className="border-t border-purple-900 mt-10 pt-8 text-center text-xs font-medium text-purple-500/60">
            © {new Date().getFullYear()} TamiBot. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
