import React from 'react';
import { Check, X, Rocket, ShieldCheck, ArrowRight } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <div className="py-24 bg-white font-sans" id="precios">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">

        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase mb-6 shadow-sm border border-teal-200">
            🎁 14 Días de Demo Gratuita
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
            Escala tus ventas sin riesgo. <br />
            <span className="text-purple-600">Prueba TamiBot Hoy.</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            Implementamos tu asistente Inmobiliario con IA, lo conectamos a tus portales y te damos 2 semanas para que veas los resultados antes de pagar tu primera cuota.
          </p>
          
          <button onClick={() => window.open('https://wa.me/51995547575?text=Hola%20quiero%20mas%20informacion%20de%20TamiBot', '_blank')} className="bg-purple-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-purple-700 transition-all shadow-xl hover:shadow-purple-500/30 flex items-center gap-3 mx-auto group">
            <Rocket size={24} className="group-hover:-translate-y-1 transition-transform" />
            Solicitar Mi Demo Gratuita de 2 Semanas
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto mt-20 items-stretch">

          {/* Tier 1: Agente Inmobiliario */}
          <div className="bg-white p-8 lg:p-12 rounded-[2.5rem] border border-gray-200 shadow-xl relative flex flex-col group hover:border-teal-300 transition-colors duration-300">
            <div className="mb-6 flex flex-col items-center md:items-start text-center md:text-left">
              <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center mb-6 text-4xl group-hover:scale-110 transition-transform duration-300">
                🤝
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-2">Agente Inmobiliario</h3>
              <p className="text-gray-500 text-sm font-medium">Ideal para agentes independientes y portafolios medianos.</p>
            </div>

            <div className="mb-8 pb-8 border-b border-gray-100 flex justify-center md:justify-start">
              <div className="flex items-end gap-2 text-center md:text-left">
                <span className="text-5xl font-black text-gray-900">$350</span>
                <span className="text-gray-400 font-medium mb-1">USD / mes</span>
              </div>
            </div>

            <ul className="space-y-4 text-sm font-semibold text-gray-700 flex-1 mb-8">
              <li className="flex items-start gap-3"><Check size={20} className="text-teal-500 shrink-0 mt-0.5" /> <span className="flex-1">Hasta <b>1,500 leads</b> gestionados por mes</span></li>
              <li className="flex items-start gap-3"><Check size={20} className="text-teal-500 shrink-0 mt-0.5" /> <span className="flex-1">Máximo <b>10 propiedades</b> en cartera</span></li>
              <li className="flex items-start gap-3"><Check size={20} className="text-teal-500 shrink-0 mt-0.5" /> <span className="flex-1">Sincronización con <b>Urbania, Adondevivir y Nexo</b></span></li>
              <li className="flex items-start gap-3"><Check size={20} className="text-teal-500 shrink-0 mt-0.5" /> <span className="flex-1">Integración con tu <b>CRM propio</b> (Sperant, Tokko, Evolta)</span></li>
              <li className="flex items-start gap-3"><Check size={20} className="text-teal-500 shrink-0 mt-0.5" /> <span className="flex-1">Panel Omnicanal Básico</span></li>
              <li className="flex items-start gap-3 text-gray-400"><X size={20} className="shrink-0 mt-0.5" /> <span className="flex-1 line-through">Soporte para Proyectos Nuevos</span></li>
            </ul>

            <button onClick={() => window.open('https://wa.me/51995547575?text=Hola%20quiero%20mas%20informacion%20de%20TamiBot', '_blank')} className="w-full py-4 rounded-full font-bold text-lg transition-all duration-300 bg-teal-50 text-teal-700 hover:bg-teal-100 mt-auto border border-teal-100">
              Comenzar con Demo Gratis
            </button>
          </div>

          {/* Tier 2: Desarrollo y Escala */}
          <div className="bg-white p-8 lg:p-12 rounded-[2.5rem] border-2 border-purple-600 shadow-2xl relative flex flex-col transform md:-translate-y-4 z-10">
            <div className="absolute top-0 right-0 bg-purple-100 text-purple-700 text-xs font-bold px-6 py-2 rounded-bl-2xl rounded-tr-[2.2rem] shadow-sm uppercase tracking-wider">
              Más Solicitado
            </div>

            <div className="mb-6 flex flex-col items-center md:items-start text-center md:text-left mt-4 md:mt-0">
              <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 text-4xl shadow-inner">
                🏢
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-2">Desarrollo y Escala</h3>
              <p className="text-gray-500 text-sm font-medium">Potencia masiva para constructoras y lanzamientos.</p>
            </div>

            <div className="mb-8 pb-8 border-b border-gray-100 flex justify-center md:justify-start">
              <div className="flex items-end gap-2 text-center md:text-left">
                <span className="text-5xl font-black text-gray-900">$500</span>
                <span className="text-gray-400 font-medium mb-1">USD / mes</span>
              </div>
            </div>

            <ul className="space-y-4 text-sm font-semibold text-gray-700 flex-1 mb-8">
              <li className="flex items-start gap-3 p-2 bg-purple-50 rounded-xl mb-6"><ShieldCheck size={24} className="text-purple-600 shrink-0" /> <span className="flex-1 text-purple-900 font-bold">Todo del plan Agente, más:</span></li>
              <li className="flex items-start gap-3"><Check size={20} className="text-purple-600 shrink-0 mt-0.5" /> <span className="flex-1"><b>Leads Ilimitados</b> gestionados por mes</span></li>
              <li className="flex items-start gap-3"><Check size={20} className="text-purple-600 shrink-0 mt-0.5" /> <span className="flex-1"><b>Propiedades Ilimitadas</b> en stock</span></li>
              <li className="flex items-start gap-3"><Check size={20} className="text-purple-600 shrink-0 mt-0.5" /> <span className="flex-1"><b>Módulo Proyectos Nuevos</b> (Brochures, lotes)</span></li>
              <li className="flex items-start gap-3"><Check size={20} className="text-purple-600 shrink-0 mt-0.5" /> <span className="flex-1">Reglas de Asignación Avanzadas</span></li>
              <li className="flex items-start gap-3"><Check size={20} className="text-purple-600 shrink-0 mt-0.5" /> <span className="flex-1">Panel Supervisor Multiusuario</span></li>
            </ul>

            <button onClick={() => window.open('https://wa.me/51995547575?text=Hola%20quiero%20mas%20informacion%20de%20TamiBot', '_blank')} className="w-full py-4 rounded-full font-bold text-lg transition-all duration-300 bg-purple-600 text-white hover:bg-purple-700 shadow-lg hover:shadow-purple-500/30 mt-auto">
              Comenzar con Demo Gratis
            </button>
          </div>

        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm bg-white inline-block px-8 py-4 rounded-2xl border border-gray-200 shadow-sm">
            ⚠️ <b>Nota:</b> Los costos directos de la <span className="text-gray-700 font-bold">API de WhatsApp</span> (Meta) y el consumo de <span className="text-gray-700 font-bold">tokens de IA</span> no están incluidos y se pagan según facturación del proveedor.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Pricing;
