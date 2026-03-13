import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "🤖 ¿Qué diferencia a TamiBot de un chatbot convencional?",
      a: "Tami no es un simple bot de respuestas rápidas, es un Agente Vendedor. Mientras un chatbot normal te pide marcar '1' o '2', Tami pre-califica al prospecto (presupuesto, zona, tipo de crédito), perfila si es para inversión o vivienda, y agenda la visita directamente con tus asesores."
    },
    {
      q: "🛠️ ¿Necesito cambiar mi CRM actual (Sperant, Evolta, TokkoBroker)?",
      a: "¡Para nada! TamiBot es principalmente un Asistente Conversacional por WhatsApp. Aunque te entregamos una vista de CRM complementaria, nos integramos directamente con los CRMs inmobiliarios más usados de Lima (como Sperant, Evolta y TokkoBroker). Tami lee tu inventario y envía los leads directo a tu sistema actual sin que dupliques trabajo."
    },
    {
      q: "🏢 ¿Sirve para venta de Lotes o solo para Departamentos?",
      a: "Funciona perfectamente para ambas y más. Tami puede enviar brochures interactivos para Proyectos Nuevos, cotizar cuotas de financiamiento para Lotes, o mostrar opciones de Alquiler y Reventa basándose en los filtros precisos que pide el prospecto."
    },
    {
      q: "💸 ¿Qué pasa si el cliente quiere hablar con un humano?",
      a: "Tami sabe cuándo 'dar un paso al costado'. Si el prospecto ya está perfilado y listo para visitar, o si detecta que la negociación requiere tacto humano, Tami transfiere el chat al instante a tu equipo de ventas y te notifica por WhatsApp para que cierres el trato."
    },
    {
      q: "⚡ ¿Realmente puedo empezar en 14 días gratis?",
      a: "Sí. Te activamos una Prueba Gratuita de 2 semanas sin compromiso mercantil. Nuestro equipo sube tus primeras 10 propiedades o tu 'Proyecto Estrella', conecta el bot a tu WhatsApp, y tú mismo ves los resultados y citas generadas antes de pagar tu primer mes."
    },
    {
      q: "💰 ¿Tami cobra comisiones por mis ventas o cierres?",
      a: "Cero. 0%. Nada. Tú cobras el 100% de tus comisiones. TamiBot cobra una suscripción mensual fija como tu herramienta tecnológica, garantizándote rentabilidad por cada lead cerrado."
    },
    {
      q: "📞 ¿Cómo funciona el cobro de WhatsApp (API Oficial)?",
      a: "Trabajamos con total transparencia. El costo de nuestro software es cerrado, pero tú conectas tu tarjeta directamente a Meta (Facebook) para pagar los micro-centavos que cobra WhatsApp por conversación. Un cliente promedio invierte entre $15 y $30 extras al mes directo a Meta."
    },
    {
      q: "♾️ ¿Qué incluye el Plan de 'Desarrollo y Escala'?",
      a: "Está diseñado para lanzamientos e inmobiliarias masivas. Te libera de cualquier límite: leads ilimitados, propiedades ilimitadas, capacidad de subir docenas de 'Proyectos Nuevos', y un panel multi-usuario para decenas de asesores operando en simultáneo."
    }
  ];

  return (
    <div className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">

        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-600 px-4 py-2 rounded-full text-xs font-bold uppercase mb-6 tracking-wide">
            <HelpCircle size={14} /> Dudas Frecuentes
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
            Todo lo que necesitas saber
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Resolvemos tus dudas sobre costos, implementación y tecnología.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border rounded-2xl transition-all duration-300 overflow-hidden ${openIndex === i ? 'border-purple-500 ring-4 ring-purple-50 bg-white shadow-lg' : 'border-gray-200 hover:border-purple-200 hover:bg-gray-50'}`}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className={`font-bold text-lg ${openIndex === i ? 'text-purple-700' : 'text-gray-900'}`}>
                  {faq.q}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === i ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-400'}`}>
                  {openIndex === i ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 pb-6 text-gray-600 leading-relaxed text-sm md:text-base">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-6 font-medium">¿Tienes una duda específica?</p>
          <button onClick={() => window.open('https://wa.me/51995547575?text=Hola%20quiero%20mas%20informacion%20de%20TamiBot', '_blank')} className="bg-[#9333ea] text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl shadow-purple-200 hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto">
            <span>Hablar con un Experto</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </button>
        </div>

      </div>
    </div>
  );
};

export default FAQ;
