import React from 'react';
import { Rocket, Check, Shield, Sparkles } from 'lucide-react';

const FreeDemo: React.FC = () => {
    return (
        <section id="demo" className="py-24 bg-white relative overflow-hidden flex flex-col items-center justify-center font-sans">
            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                <div className="bg-gradient-to-br from-[#7e22ce] via-[#9333ea] to-[#6d28d9] rounded-[3rem] p-10 md:p-16 shadow-2xl relative overflow-hidden">

                    {/* Decorative Background Elements */}
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 bg-purple-400 rounded-full blur-[120px] opacity-30"></div>
                    <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-teal-400 rounded-full blur-[100px] opacity-20"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-300 rounded-full blur-[150px] opacity-10"></div>

                    {/* Top Badge - centered */}
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center gap-2 bg-white/15 text-white px-5 py-2 rounded-full text-sm font-bold uppercase border border-white/20 backdrop-blur-md">
                            <Sparkles size={16} className="text-teal-300" />
                            14 Dias de Prueba Sin Compromiso
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-12">

                        <div className="flex-1 relative z-10 text-center md:text-left">
                            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
                                Comienza tu Prueba<br />
                                <span className="text-teal-300">Gratuita Hoy.</span>
                            </h2>
                            <p className="text-base md:text-lg text-purple-100/90 mb-8 max-w-xl leading-relaxed">
                                No pagues nada hasta ver resultados reales en tu WhatsApp. Configuramos tu agente de IA, lo conectamos a tus portales inmobiliarios y tienes <span className="text-white font-semibold">2 semanas totalmente gratis</span>.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center gap-4">
                                <button onClick={() => window.open('https://wa.me/51995547575?text=Hola%20quiero%20mas%20informacion%20de%20TamiBot', '_blank')} className="w-full sm:w-auto bg-teal-500 hover:bg-teal-400 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-teal-500/30 hover:shadow-teal-400/40 hover:scale-[1.02] flex items-center justify-center gap-2 group">
                                    <Rocket size={20} className="group-hover:-translate-y-1 transition-transform" />
                                    Reclamar mis 14 Dias
                                </button>
                                <span className="text-purple-200/80 text-sm font-medium flex items-center gap-2">
                                    <Shield size={16} className="text-purple-300" /> Alta en 48 hrs.
                                </span>
                            </div>
                        </div>

                        <div className="w-full md:w-[40%] flex flex-col gap-4 relative z-10">
                            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-7 border border-white/15 shadow-xl">
                                <h4 className="text-white font-bold text-lg mb-5 flex items-center gap-2">
                                    <div className="w-7 h-7 bg-teal-500/30 rounded-lg flex items-center justify-center">
                                        <Check className="text-teal-300" size={18}/>
                                    </div>
                                    Lo que incluye tu Demo:
                                </h4>
                                <ul className="space-y-4 text-sm">
                                    <li className="flex items-center justify-between border-b border-white/10 pb-3">
                                        <span className="text-white font-medium">Implementacion Full</span>
                                        <span className="text-teal-300 font-bold bg-teal-500/15 px-3 py-1 rounded-full text-xs">Gratis</span>
                                    </li>
                                    <li className="flex items-center justify-between border-b border-white/10 pb-3">
                                        <span className="text-white font-medium">Integracion CRM Propio</span>
                                        <span className="text-teal-300 font-bold bg-teal-500/15 px-3 py-1 rounded-full text-xs">Gratis</span>
                                    </li>
                                    <li className="flex items-center justify-between">
                                        <span className="text-white font-medium">Conexion a Urbania/Nexo</span>
                                        <span className="text-teal-300 font-bold bg-teal-500/15 px-3 py-1 rounded-full text-xs">Gratis</span>
                                    </li>
                                </ul>
                            </div>
                            <p className="text-xs text-purple-300/70 text-center font-medium">
                                *Solo pagas el consumo minimo de API Meta/AI.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default FreeDemo;
