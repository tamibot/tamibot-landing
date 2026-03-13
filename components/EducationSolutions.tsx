import React from 'react';

const EducationSolutions: React.FC = () => {
    const metrics = [
        {
            value: "+3.5M",
            label: "Leads Gestionados",
            desc: "Procesamos volúmenes masivos de consultas inmobiliarias 24/7 sin tiempo de espera.",
            gradient: "from-purple-600 to-purple-800"
        },
        {
            value: "+40%",
            label: "Tasa de Interacción",
            desc: "Los prospectos confían y conversan fluidamente con nuestra IA gracias a su perfilamiento humano.",
            gradient: "from-purple-600 to-purple-700"
        },
        {
            value: "+20%",
            label: "Aumento en Citas",
            desc: "Derivamos únicamente prospectos pre-calificados directamente a la agenda de tus asesores.",
            gradient: "from-purple-500 to-purple-800"
        },
        {
            value: "10x",
            label: "Capacidad de Atención",
            desc: "Multiplica la velocidad de respuesta y atención simultánea sin necesidad de contratar más personal.",
            gradient: "from-purple-700 to-indigo-800"
        }
    ];

    return (
        <section id="resultados" className="py-24 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">

                <div className="text-center mb-16 md:mb-20">
                    <span className="text-purple-600 font-bold tracking-wider uppercase text-sm mb-4 block">El Impacto de TamiBot</span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 tracking-tight leading-tight">
                        Nuestros Resultados <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Hablan por Sí Solos.</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
                        No importa si eres corredor independiente o una gran desarrolladora. Tami está entrenada para adaptarse a tu inventario y escalar tus cierres.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {metrics.map((metric, i) => (
                        <div key={i} className="group relative bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col items-center text-center">
                            
                            {/* Decorative background gradient */}
                            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r opacity-50 group-hover:opacity-100 transition-opacity duration-500 ${metric.gradient}"></div>
                            <div className={`absolute -inset-24 bg-gradient-to-br ${metric.gradient} opacity-0 group-hover:opacity-5 blur-3xl rounded-full transition-opacity duration-500`}></div>

                            <h3 className={`text-5xl md:text-6xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-br ${metric.gradient} drop-shadow-sm`}>
                                {metric.value}
                            </h3>
                            <h4 className="text-lg font-bold text-gray-900 mb-3 tracking-tight">{metric.label}</h4>
                            <p className="text-sm text-gray-500 leading-relaxed font-medium">
                                {metric.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default EducationSolutions;
