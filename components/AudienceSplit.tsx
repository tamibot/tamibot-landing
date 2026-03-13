import React from 'react';
import { ArrowRight } from 'lucide-react';

const AudienceSplit: React.FC = () => {
    return (
        <div className="py-20 bg-white border-t border-gray-100 font-sans">
            <div className="container mx-auto px-6 md:px-12 max-w-6xl">

                <div className="text-center mb-16">
                    <span className="text-purple-600 font-bold tracking-wider uppercase text-sm mb-4 block">Flexibilidad Absoluta</span>
                    <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight leading-tight">
                        Diseñada para tu <span className="text-purple-600">Modelo de Negocio.</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
                        Soluciones específicas y entrenadas para cada tipo de inventario inmobiliario.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

                    {/* DESARROLLADORAS CARD */}
                    <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-lg border border-gray-100 relative overflow-hidden group hover:border-purple-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center">

                        <div className="relative z-10 flex flex-col items-center h-full w-full">
                            <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                                <span className="text-6xl">🏗️</span>
                            </div>

                            <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-700 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase mb-6 tracking-wide border border-purple-100">
                                PARA GRANDES VOLÚMENES
                            </div>

                            <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">Desarrolladoras e Inmobiliarias.</h3>
                            <p className="text-gray-500 mb-8 text-base leading-relaxed font-medium">
                                Gestiona miles de leads de tus lanzamientos. Tami cualifica el tráfico en verde/blanco y agenda citas para tu equipo de sala de ventas.
                            </p>

                            <ul className="space-y-5 mb-10 text-left w-full max-w-xs mx-auto">
                                <li className="flex items-center gap-4">
                                    <div className="flex justify-center shrink-0 w-8 text-2xl">🏢</div>
                                    <span className="font-bold text-gray-700 text-sm">Proyectos Nuevos (Vertical)</span>
                                </li>
                                <li className="flex items-center gap-4">
                                    <div className="flex justify-center shrink-0 w-8 text-2xl">📍</div>
                                    <span className="font-bold text-gray-700 text-sm">Venta de Lotes y Terrenos</span>
                                </li>
                                <li className="flex items-center gap-4">
                                    <div className="flex justify-center shrink-0 w-8 text-2xl">👥</div>
                                    <span className="font-bold text-gray-700 text-sm">Volumen de leads ilimitado</span>
                                </li>
                            </ul>

                            <button onClick={() => window.open('https://wa.me/51995547575?text=Hola%20quiero%20mas%20informacion%20de%20TamiBot', '_blank')} className="w-full bg-purple-600 text-white px-6 py-4 rounded-full font-bold text-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2 mt-auto">
                                Ver Solución para Proyectos <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>

                    {/* AGENTES CARD */}
                    <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-lg border border-gray-100 relative overflow-hidden group hover:border-teal-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center">

                        <div className="relative z-10 flex flex-col items-center h-full w-full">
                            <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                                <span className="text-6xl">🤝</span>
                            </div>

                            <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase mb-6 tracking-wide border border-teal-100">
                                PARA EQUIPOS ÁGILES
                            </div>

                            <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">Agentes y Agencias.</h3>
                            <p className="text-gray-500 mb-8 text-base leading-relaxed font-medium">
                                Tu asistente 24/7. Muestra tu inventario variado, agenda visitas y perfíla a propietarios que buscan vender su inmueble.
                            </p>

                            <ul className="space-y-5 mb-10 text-left w-full max-w-xs mx-auto">
                                <li className="flex items-center gap-4">
                                    <div className="flex justify-center shrink-0 w-8 text-2xl">🏡</div>
                                    <span className="font-bold text-gray-700 text-sm">Reventa (Segunda Mano)</span>
                                </li>
                                <li className="flex items-center gap-4">
                                    <div className="flex justify-center shrink-0 w-8 text-2xl">🔑</div>
                                    <span className="font-bold text-gray-700 text-sm">Alquileres Automáticos</span>
                                </li>
                                <li className="flex items-center gap-4">
                                    <div className="flex justify-center shrink-0 w-8 text-2xl">🤝</div>
                                    <span className="font-bold text-gray-700 text-sm">Captación de Propiedades</span>
                                </li>
                            </ul>

                            <button onClick={() => window.open('https://wa.me/51995547575?text=Hola%20quiero%20mas%20informacion%20de%20TamiBot', '_blank')} className="w-full bg-teal-500 text-white px-6 py-4 rounded-full font-bold text-lg hover:bg-teal-600 transition-colors flex items-center justify-center gap-2 mt-auto">
                                Ver Solución para Agentes <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AudienceSplit;
