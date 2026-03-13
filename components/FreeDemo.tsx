import React from 'react';
import { Rocket, Check, ArrowRight, Shield } from 'lucide-react';

const FreeDemo: React.FC = () => {
    return (
        <section id="demo" className="py-24 bg-white relative overflow-hidden flex flex-col items-center justify-center font-sans">
            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                <div className="bg-[#9333ea] rounded-[3rem] p-10 md:p-16 shadow-2xl relative overflow-hidden text-center md:text-left flex flex-col md:flex-row items-center gap-12">
                    
                    {/* Decorative Background Elements */}
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 bg-purple-500 rounded-full blur-[100px] opacity-40"></div>
                    <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-teal-500 rounded-full blur-[90px] opacity-30"></div>

                    <div className="flex-1 relative z-10">
                        <div className="inline-flex items-center gap-2 bg-purple-500/30 text-purple-100 px-4 py-1.5 rounded-full text-xs font-bold uppercase mb-6 border border-purple-400/30 backdrop-blur-md">
                            🎁 14 Días de Prueba Sin Compromiso
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
                            Comienza tu Prueba Gratuita Hoy.
                        </h2>
                        <p className="text-lg text-purple-100 mb-8 max-w-xl leading-relaxed">
                            No pagues nada hasta que mires los resultados reales en tu WhatsApp. Te configuramos el bot, lo enlazamos a tus portales inmobiliarios y tienes 2 semanas totalmente gratis.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
                            <button onClick={() => window.open('https://wa.me/51995547575?text=Hola%20quiero%20solicitar%20mi%20Prueba%20Gratuita%20de%2014%20d%C3%ADas', '_blank')} className="w-full sm:w-auto bg-teal-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-teal-400 transition-all shadow-lg hover:shadow-teal-500/40 flex items-center justify-center gap-2 group">
                                <Rocket size={20} className="group-hover:-translate-y-1 transition-transform" />
                                Reclamar mis 14 Días
                            </button>
                            <span className="text-purple-200 text-sm font-medium flex items-center gap-2">
                                <Shield size={16} /> Alta en 48 hrs.
                            </span>
                        </div>
                    </div>
                    
                    <div className="w-full md:w-[40%] flex flex-col gap-4 relative z-10">
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                            <h4 className="text-white font-bold mb-4 flex items-center gap-2"><Check className="text-teal-400" size={20}/> Lo que incluye tu Demo:</h4>
                            <ul className="space-y-3 text-sm text-purple-100 font-medium">
                                <li className="flex items-center justify-between"><span>Implementación Full</span> <span className="text-teal-400">Gratis</span></li>
                                <li className="flex items-center justify-between"><span>Integración CRM Propio</span> <span className="text-teal-400">Gratis</span></li>
                                <li className="flex items-center justify-between"><span>Conexión a Urbania/Nexo</span> <span className="text-teal-400">Gratis</span></li>
                            </ul>
                        </div>
                        <p className="text-xs text-purple-300 text-center font-medium mt-2">
                            *Solo pagas el consumo mínimo de API Meta/AI.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FreeDemo;
