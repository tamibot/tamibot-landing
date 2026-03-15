import React, { useState, useEffect, useRef } from 'react';
import { Globe, Search, MessageCircle, BarChart3, ShieldCheck, Zap, Settings, Bell, ChevronRight, Inbox, Eye, Target, ArrowUpRight, CheckCircle2, MoreHorizontal, Send } from 'lucide-react';

const Ecosystem: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'inbox' | 'supervisor' | 'kpi'>('inbox');
    const containerRef = useRef<HTMLDivElement>(null);

    const features = [
        {
            id: 'inbox',
            icon: "💬",
            title: "CRM Omnicanal en una Sola Pantalla",
            desc: "WhatsApp, Instagram, Meta Ads, Tokko y Urbania integrados al 100%.",
            detail: "Visualiza instantáneamente de dónde viene cada cliente. Gestiona conversaciones de 5 plataformas diferentes sin cambiar de pestaña, con etiquetas automáticas de origen.",
        },
        {
            id: 'supervisor',
            icon: "🕵️‍♂️",
            title: "Supervisa e Intervén Chats",
            desc: "Toma el control de la calidad. Mira cómo atienden tus asesores e intervén cuando sea necesario.",
            detail: "Audita conversaciones en tiempo real. Si un asesor se traba o hay una objeción compleja sobre un crédito, puedes entrar al chat instantáneamente para asegurar el cierre.",
        },
        {
            id: 'kpi',
            icon: "📊",
            title: "Embudo de Ventas y KPIs",
            desc: "Visualiza el pulso de tu inmobiliaria con reportes inteligentes y ROI en tiempo real.",
            detail: "Transformamos tus datos en tableros visuales. Muestra tu flujo de ingresos, la efectividad de tus canales (ej. Meta vs Tokko) y toma decisiones basadas en hechos.",
        }
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            const viewHeight = window.innerHeight;

            const scrollDistance = -rect.top + viewHeight * 0.35; // Offset — anchor higher so mockup is fully visible
            const totalScrollable = containerRef.current.offsetHeight - viewHeight;
            const progress = Math.max(0, Math.min(1, scrollDistance / totalScrollable));

            if (progress < 0.33) setActiveTab('inbox');
            else if (progress < 0.66) setActiveTab('supervisor');
            else setActiveTab('kpi');
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleTabClick = (index: number) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const absoluteTop = window.scrollY + rect.top;
        const viewHeight = window.innerHeight;
        const totalScrollable = containerRef.current.offsetHeight - viewHeight;

        const targetScroll = absoluteTop + (index / (features.length - 1)) * totalScrollable;

        window.scrollTo({
            top: targetScroll,
            behavior: 'smooth'
        });
    };

    return (
        <section
            id="ecosystem"
            ref={containerRef}
            className="relative h-auto md:h-[300vh] bg-white pt-24 md:pt-16 pb-32 md:pb-12"
        >
            <div className="sticky top-8 h-auto md:min-h-[100vh] w-full flex flex-col items-center justify-start overflow-hidden pt-16 pb-32 md:pt-20 md:pb-24 px-4 md:px-6">

                {/* Header Section */}
                <div className="max-w-4xl w-full text-center mb-6 md:mb-10">
                    <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">
                        Automatiza tu CRM con <span className="text-purple-600">Inteligencia Artificial.</span>
                    </h2>
                    <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto mt-4 leading-relaxed">
                        Conecta un agente de IA a tu WhatsApp que califica leads, agenda visitas y gestiona tu pipeline de ventas sin intervención humana. Tú supervisas, la IA ejecuta.
                    </p>
                </div>

                <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row items-center gap-8 lg:gap-16">

                    {/* Left: Mac Mockup */}
                    <div className="w-full lg:w-[60%] perspective-1000 order-2 lg:order-1">
                        <div className="relative group transition-all duration-700 hover:-translate-y-1">
                            {/* Decorative Glow */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/10 to-teal-500/10 blur-3xl opacity-50 transition-opacity group-hover:opacity-80"></div>

                            {/* Mac Window */}
                            <div className="relative w-full rounded-[1.5rem] bg-gray-900 p-2 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] ring-1 ring-white/10">
                                <div className="aspect-[16/10] sm:aspect-[4/3] md:aspect-[16/10] w-full overflow-hidden rounded-[1rem] bg-white relative flex flex-col">

                                    {/* Mac Top Bar */}
                                    <div className="h-10 bg-[#f6f6f6] border-b border-gray-200 flex items-center px-4 justify-between shrink-0">
                                        <div className="flex gap-1.5 w-20">
                                            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                                            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                                            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                                        </div>
                                        <div className="flex-1 max-w-sm h-6 bg-white rounded-md border border-gray-200 flex items-center justify-center gap-2 shadow-sm font-sans">
                                            <Globe size={12} className="text-gray-400" />
                                            <span className="text-[10px] text-gray-500 font-medium tracking-wide">hub.tamibot.com</span>
                                        </div>
                                        <div className="w-20 flex justify-end">
                                            <div className="w-6 h-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-[10px] font-bold">A</div>
                                        </div>
                                    </div>

                                    {/* CRM CONTENT AREA */}
                                    <div className="flex-1 bg-white relative overflow-hidden font-sans">

                                        {/* TAB 1: OMNICHANNEL INBOX */}
                                        <div className={`absolute inset-0 transition-opacity duration-500 flex bg-white ${activeTab === 'inbox' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                                            {/* Left Column: Chat List */}
                                            <div className="w-[35%] md:w-[30%] border-r border-gray-100 flex flex-col bg-[#fdfdfd]">
                                                <div className="p-3 border-b border-gray-100 flex items-center justify-between">
                                                    <span className="text-[10px] md:text-sm font-black text-gray-800 tracking-tight flex items-center gap-1.5"><Inbox className="w-4 h-4 text-purple-600"/> Bandeja</span>
                                                    <Search className="w-3 h-3 text-gray-400" />
                                                </div>
                                                <div className="flex-1 overflow-y-auto p-2 space-y-1.5 scrollbar-hide">
                                                    {/* Chat Item 1 (Active) */}
                                                    <div className="p-2.5 rounded-lg bg-purple-50 border border-purple-100 shadow-sm cursor-pointer relative overflow-hidden">
                                                        <div className="absolute top-0 right-0 w-1 h-full bg-purple-600"></div>
                                                        <div className="flex items-center gap-2.5 mb-1.5">
                                                            <div className="w-8 h-8 rounded-full bg-blue-100 flex shadow-sm items-center justify-center text-blue-600 font-bold text-xs relative shrink-0">
                                                                FT
                                                                <div className="absolute -bottom-0.5 -right-0.5 bg-blue-600 text-white text-[7px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-black">f</div>
                                                            </div>
                                                            <div className="flex-1 min-w-0">
                                                                <div className="flex justify-between items-center">
                                                                    <p className="text-[10px] md:text-xs font-bold text-gray-900 truncate">Familia Torres</p>
                                                                    <span className="text-[8px] text-purple-600 font-bold">10:42 AM</span>
                                                                </div>
                                                                <p className="text-[9px] text-purple-700 truncate font-medium mt-0.5">¿Tienen depas 3 habs?</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex gap-1 pl-10.5">
                                                            <span className="text-[7px] font-bold bg-white text-gray-600 px-1.5 py-0.5 rounded border border-gray-200 uppercase">Facebook Ads</span>
                                                            <span className="text-[7px] font-bold bg-purple-100 text-purple-700 px-1.5 py-0.5 rounded border border-purple-200 uppercase">Nuevo Lead</span>
                                                        </div>
                                                    </div>

                                                    {/* Chat Item 2 */}
                                                    <div className="p-2.5 rounded-lg hover:bg-gray-50 border border-transparent transition-colors cursor-pointer opacity-60">
                                                        <div className="flex items-center gap-2.5 mb-1.5">
                                                            <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-xs relative shrink-0 shadow-sm">
                                                                W
                                                                <div className="absolute -bottom-0.5 -right-0.5 bg-emerald-500 text-white text-[7px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-black">w</div>
                                                            </div>
                                                            <div className="flex-1 min-w-0">
                                                                <div className="flex justify-between items-center">
                                                                    <p className="text-[10px] md:text-xs font-bold text-gray-900 truncate">Andrea Gomez</p>
                                                                    <span className="text-[8px] text-gray-400">09:15 AM</span>
                                                                </div>
                                                                <p className="text-[9px] text-gray-500 truncate mt-0.5">Vengo del portal web...</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex gap-1 pl-10.5">
                                                            <span className="text-[7px] font-bold bg-yellow-100 text-yellow-700 px-1.5 py-0.5 rounded uppercase">Urbania</span>
                                                        </div>
                                                    </div>

                                                    {/* Chat Item 3 */}
                                                    <div className="p-2.5 rounded-lg hover:bg-gray-50 border border-transparent transition-colors cursor-pointer opacity-40">
                                                        <div className="flex items-center gap-2.5 mb-1.5">
                                                            <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 font-bold text-xs relative shrink-0 shadow-sm">
                                                                I
                                                                <div className="absolute -bottom-0.5 -right-0.5 bg-rose-500 text-white text-[7px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-black">ig</div>
                                                            </div>
                                                            <div className="flex-1 min-w-0">
                                                                <div className="flex justify-between items-center">
                                                                    <p className="text-[10px] md:text-xs font-bold text-gray-900 truncate">Inversiones MR</p>
                                                                    <span className="text-[8px] text-gray-400">Ayer</span>
                                                                </div>
                                                                <p className="text-[9px] text-gray-500 truncate mt-0.5">Precio de preventa?</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Right Column: Chat View */}
                                            <div className="w-[65%] md:w-[70%] flex flex-col bg-[#f4f5f7]">
                                                {/* Header */}
                                                <div className="bg-white p-3 border-b border-gray-100 flex items-center justify-between shadow-sm z-10">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-md">FT</div>
                                                        <div>
                                                            <p className="text-xs font-black text-gray-900">Familia Torres</p>
                                                            <div className="flex items-center gap-1.5 mt-0.5">
                                                                <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                                                <p className="text-[9px] text-gray-500 font-medium">Asignado a: <span className="text-gray-900 font-bold">Bot Inmobiliario</span></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="hidden md:flex gap-2">
                                                        <div className="bg-gray-100 text-gray-600 px-2.5 py-1 text-[9px] font-bold rounded-lg uppercase cursor-pointer hover:bg-gray-200">Asignar Manual</div>
                                                        <div className="bg-purple-100 text-purple-700 px-2.5 py-1 text-[9px] font-bold rounded-lg uppercase cursor-pointer border border-purple-200 hover:bg-purple-200">Ficha CRM</div>
                                                    </div>
                                                </div>

                                                {/* Messages */}
                                                <div className="flex-1 p-4 flex flex-col gap-4 overflow-y-auto">
                                                    <div className="flex justify-center my-2"><div className="bg-gray-200/60 text-gray-500 text-[8px] font-bold px-2 py-0.5 rounded-md">HOY</div></div>
                                                    
                                                    <div className="flex gap-2">
                                                        <div className="w-6 h-6 rounded-full bg-blue-100 shrink-0 text-blue-600 text-[9px] flex items-center justify-center font-bold">FT</div>
                                                        <div className="max-w-[75%] bg-white p-3 rounded-2xl border border-gray-100 rounded-tl-sm text-xs text-gray-700 shadow-sm relative">
                                                            "Hola, vi su anuncio en Facebook sobre el proyecto en San Isidro. Quisiera saber si tienen depas de 3 habitaciones disponibles."
                                                            <span className="text-[7px] text-gray-400 absolute -bottom-3 left-1">10:41 AM</span>
                                                        </div>
                                                    </div>

                                                    <div className="flex gap-2 justify-end mt-2">
                                                        <div className="max-w-[80%] bg-purple-600 p-3 rounded-2xl rounded-tr-sm text-xs text-white shadow-md relative">
                                                            <p className="mb-2">"¡Hola Familia Torres! 👋 TamiBot aquí.</p>
                                                            <p>Sí, contamos con hermosos departamentos de 3 habitaciones con balcón y vista al parque desde $150,000.</p>
                                                            <p className="font-bold mt-2">¿En qué rango de fechas les gustaría agendar una visita a nuestro piloto?"</p>
                                                            <span className="text-[7px] text-purple-200 absolute -bottom-3 right-1">10:42 AM</span>
                                                        </div>
                                                        <div className="w-6 h-6 rounded-full bg-purple-100 shrink-0 text-purple-600 text-[9px] flex items-center justify-center font-bold">T</div>
                                                    </div>
                                                </div>

                                                {/* Input Bar */}
                                                <div className="p-3 bg-white border-t border-gray-100 flex items-center gap-3">
                                                    <div className="flex-1 bg-[#f4f5f7] rounded-full h-10 px-4 flex items-center text-xs text-gray-400 border border-gray-200">
                                                        Escribe un mensaje interno o responde...
                                                    </div>
                                                    <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white shadow-md cursor-pointer hover:scale-105 transition-transform"><Send size={14} className="ml-1" /></div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* TAB 2: SUPERVISOR VIEW */}
                                        <div className={`absolute inset-0 transition-opacity duration-500 bg-[#f8fafc] ${activeTab === 'supervisor' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                                            <div className="h-full flex flex-col p-4 md:p-6 lg:p-8 max-w-2xl mx-auto">
                                                {/* Status Bar */}
                                                <div className="flex items-center justify-between bg-white p-3 rounded-xl border border-gray-200 shadow-sm mb-6">
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.6)]"></div>
                                                        <span className="text-[10px] md:text-xs font-black tracking-widest text-gray-800 uppercase">Supervisor en Vivo</span>
                                                    </div>
                                                    <div className="flex gap-2">
                                                        <div className="bg-gray-100 px-3 py-1 rounded-md text-[9px] font-bold text-gray-600">Soporte A</div>
                                                        <div className="bg-purple-100 px-3 py-1 rounded-md text-[9px] font-bold text-purple-700 border border-purple-200">Ventas B</div>
                                                    </div>
                                                </div>

                                                {/* Chat Context Card */}
                                                <div className="bg-white rounded-t-2xl border border-gray-200 border-b-0 p-4 shrink-0 relative overflow-hidden">
                                                    <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-amber-50 to-transparent"></div>
                                                    <div className="flex justify-between items-center relative z-10">
                                                        <div className="flex items-center gap-3">
                                                            <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-700 font-bold flex items-center justify-center text-lg border-2 border-white shadow-sm ring-1 ring-amber-200">CI</div>
                                                            <div>
                                                                <p className="text-sm font-black text-gray-900 leading-tight">Carlos Inversor</p>
                                                                <div className="flex items-center gap-1.5 mt-1">
                                                                    <span className="bg-amber-100 text-amber-800 text-[8px] font-bold px-1.5 py-0.5 rounded uppercase">Alta Intención</span>
                                                                    <span className="text-[9px] text-gray-400">Cotización #402</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="text-right">
                                                            <p className="text-[8px] uppercase font-bold text-gray-400 mb-0.5">Atendido Por</p>
                                                            <p className="text-[11px] font-black text-purple-700 bg-purple-50 px-2 py-1 rounded-md border border-purple-100">DANIEL (Asesor 3)</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Active Chat Viewer */}
                                                <div className="bg-[#f1f3f5] p-5 border border-gray-200 flex-1 overflow-y-auto space-y-4 shadow-inner relative">
                                                    {/* Alert Overlay */}
                                                    <div className="absolute top-2 right-4 bg-white px-3 py-1.5 rounded-full shadow-md text-[9px] font-bold text-red-500 border border-red-100 flex items-center gap-1.5 animate-bounce z-20">
                                                        <Zap size={10} className="fill-red-500"/> ALERTA: DUDA DE PAGO
                                                    </div>

                                                    <div className="flex gap-2">
                                                        <div className="w-6 h-6 rounded-full bg-amber-200 shrink-0 text-amber-800 text-[9px] flex items-center justify-center font-bold mt-1">CI</div>
                                                        <div className="bg-white p-3 rounded-2xl rounded-tl-sm text-xs text-gray-800 shadow-sm border border-gray-100 max-w-[85%]">
                                                            "Me interesa mucho separar el departamento Premium, pero resido en España. ¿Tienen alguna cuenta SWIFT o aceptan pago con tarjeta en euros para congelar el precio hoy mismo?"
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="flex gap-2 justify-end">
                                                        <div className="bg-gray-200 p-3 rounded-2xl rounded-tr-sm text-xs text-gray-600 shadow-sm max-w-[85%] italic">
                                                            "Hola Carlos, un momento por favor. Le pregunto a mi gerente si tenemos plataformas habilitadas para recepción en euros..."
                                                        </div>
                                                        <div className="w-6 h-6 rounded-full bg-gray-300 shrink-0 text-gray-700 text-[9px] flex items-center justify-center font-bold mt-1">D</div>
                                                    </div>

                                                    <div className="flex items-center justify-center py-2 opacity-80">
                                                        <div className="h-px bg-purple-300 flex-1"></div>
                                                        <div className="bg-purple-100 text-purple-700 text-[9px] font-black uppercase px-3 py-1 rounded-full border border-purple-300 mx-3 flex items-center gap-1 shadow-sm">
                                                            <ShieldCheck size={12} /> Entraste al Chat Privado
                                                        </div>
                                                        <div className="h-px bg-purple-300 flex-1"></div>
                                                    </div>

                                                    <div className="flex gap-2 justify-end animate-fade-in-up">
                                                        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-3.5 rounded-2xl rounded-tr-sm text-xs text-white shadow-xl max-w-[85%] border border-purple-500 relative">
                                                            <div className="absolute -top-2.5 right-4 bg-yellow-400 text-yellow-900 text-[7px] font-black px-1.5 py-0.5 rounded shadow-sm">GERENTE</div>
                                                            "¡Hola Carlos! Soy Martín, el Director Comercial. Sí aceptamos pagos internacionales. Te estoy generando un link de **Stripe** en este instante para que reserves con total seguridad. ¡Bienvenido al proyecto! 🚀"
                                                        </div>
                                                        <div className="w-6 h-6 rounded-full bg-purple-200 shrink-0 text-purple-800 text-[9px] flex items-center justify-center font-black shadow-md mt-1">M</div>
                                                    </div>
                                                </div>

                                                {/* Supervisor Actions (Bottom Bar) */}
                                                <div className="bg-white rounded-b-2xl border border-gray-200 border-t-0 p-4 shrink-0 flex gap-3 shadow-sm">
                                                    <div className="flex-1 bg-gray-50 border border-gray-200 text-gray-500 font-bold text-[10px] md:text-xs py-2.5 rounded-xl flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer uppercase tracking-wide">
                                                        <Eye size={14} className="mr-2" /> Salir de Observación
                                                    </div>
                                                    <div className="flex-1 bg-teal-600 text-white font-bold text-[10px] md:text-xs py-2.5 rounded-xl flex items-center justify-center hover:bg-teal-700 transition-colors shadow-lg shadow-teal-500/30 cursor-pointer uppercase tracking-wide">
                                                        <MoreHorizontal size={14} className="mr-2" /> Menú de Cierre Mágico
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* TAB 3: KPI DASHBOARD */}
                                        <div className={`absolute inset-0 transition-opacity duration-500 bg-[#f4f7fa] ${activeTab === 'kpi' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                                            <div className="h-full p-4 md:p-6 lg:p-8 flex flex-col overflow-y-auto">
                                                {/* Header Dashboard */}
                                                <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-6 md:mb-8">
                                                    <div>
                                                        <h4 className="text-xl font-black text-gray-900 tracking-tight">Reporte Inmobiliario</h4>
                                                        <p className="text-[10px] text-gray-500 font-bold uppercase mt-1">Proyecto Vista del Mar • Este Mes</p>
                                                    </div>
                                                    <div className="bg-white border border-gray-200 text-gray-700 text-[10px] font-bold px-3 py-1.5 rounded-lg flex items-center gap-2 shadow-sm w-fit">
                                                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Sistema Operativo Inteligente
                                                    </div>
                                                </div>

                                                {/* Top Metrics Cards */}
                                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-6 md:mb-8">
                                                    <div className="bg-white p-4 rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-gray-100 relative overflow-hidden group">
                                                        <div className="absolute top-0 right-0 p-3"><div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 group-hover:scale-110 transition-transform"><Target size={14}/></div></div>
                                                        <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1">Volumen Separado</p>
                                                        <p className="text-xl md:text-2xl font-black text-gray-900">$450k</p>
                                                        <div className="mt-3 flex items-center gap-1.5">
                                                            <div className="bg-emerald-100 text-emerald-700 text-[8px] font-bold px-1.5 py-0.5 rounded flex items-center"><ArrowUpRight size={8} className="mr-0.5"/> 32%</div>
                                                            <p className="text-[8px] text-gray-400">vs Mes Anterior</p>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="bg-gradient-to-br from-teal-500 to-teal-700 p-4 rounded-2xl shadow-[0_10px_20px_-5px_rgba(20,184,166,0.3)] border border-teal-600 relative overflow-hidden group">
                                                         <div className="absolute -right-4 -top-4 w-20 h-20 bg-teal-400 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700"></div>
                                                        <p className="text-[9px] font-bold text-teal-100 uppercase tracking-widest mb-1 relative z-10">Tasa de Cierre</p>
                                                        <p className="text-xl md:text-2xl font-black text-white relative z-10">8.5%</p>
                                                        <div className="mt-3 flex items-center gap-1.5 relative z-10">
                                                            <div className="bg-teal-800 text-teal-100 text-[8px] font-bold px-1.5 py-0.5 rounded flex items-center">Alta Eficiencia</div>
                                                        </div>
                                                    </div>

                                                    <div className="bg-white p-4 rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-gray-100 hidden lg:block">
                                                        <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1">Visitas Físicas</p>
                                                        <p className="text-xl md:text-2xl font-black text-gray-900">142</p>
                                                        <div className="mt-3 w-full bg-gray-100 h-1 rounded-full overflow-hidden"><div className="bg-purple-600 h-full w-[60%]"></div></div>
                                                    </div>

                                                    <div className="bg-white p-4 rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-gray-100 hidden lg:block">
                                                        <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1">Costo Adquisición</p>
                                                        <p className="text-xl md:text-2xl font-black text-gray-900">$18<span className="text-sm text-gray-400">/lead</span></p>
                                                        <div className="mt-3 w-full bg-gray-100 h-1 rounded-full overflow-hidden"><div className="bg-emerald-500 h-full w-[35%]"></div></div>
                                                    </div>
                                                </div>

                                                {/* Funnel Chart Area */}
                                                <div className="bg-white p-5 md:p-6 rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-gray-100 flex-1">
                                                    <div className="flex justify-between items-center mb-6">
                                                        <h5 className="text-xs md:text-sm font-black text-gray-900 uppercase">Embudo Comercial TamiBot</h5>
                                                        <span className="text-[9px] font-bold bg-purple-50 text-purple-700 px-2 py-0.5 rounded border border-purple-100">Live</span>
                                                    </div>

                                                    <div className="space-y-4 md:space-y-6">
                                                        {/* Level 1 */}
                                                        <div className="relative">
                                                            <div className="flex justify-between items-end mb-1.5">
                                                                <span className="text-[9px] md:text-xs font-bold text-gray-500">1. Nuevos Leads (Ads + Portales)</span>
                                                                <span className="text-[10px] md:text-xs font-black text-gray-900">1,240</span>
                                                            </div>
                                                            <div className="w-full h-3 md:h-4 bg-gray-100 rounded-r-lg overflow-hidden border-l-4 border-gray-300">
                                                                <div className="bg-gray-300 h-full w-full"></div>
                                                            </div>
                                                        </div>

                                                        {/* Level 2 */}
                                                        <div className="relative">
                                                            <div className="flex justify-between items-end mb-1.5 ml-2">
                                                                <span className="text-[9px] md:text-xs font-bold text-purple-500">2. Leads Calificados por Tami</span>
                                                                <span className="text-[10px] md:text-xs font-black text-gray-900">842</span>
                                                            </div>
                                                            <div className="w-[68%] h-3 md:h-4 bg-purple-100 rounded-r-lg overflow-hidden ml-2 border-l-4 border-purple-400">
                                                                <div className="bg-gradient-to-r from-purple-400 to-purple-500 h-full w-full transition-all duration-1000"></div>
                                                            </div>
                                                        </div>

                                                        {/* Level 3 */}
                                                        <div className="relative">
                                                            <div className="flex justify-between items-end mb-1.5 ml-4">
                                                                <span className="text-[9px] md:text-xs font-bold text-purple-700">3. Visitas Agendadas a Piloto</span>
                                                                <span className="text-[10px] md:text-xs font-black text-gray-900">310</span>
                                                            </div>
                                                            <div className="w-[25%] h-3 md:h-4 bg-purple-200 rounded-r-lg overflow-hidden ml-4 border-l-4 border-purple-600">
                                                                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 h-full w-full shadow-[0_0_10px_rgba(147,51,234,0.4)]"></div>
                                                            </div>
                                                        </div>

                                                        {/* Level 4 */}
                                                        <div className="relative">
                                                            <div className="flex justify-between items-end mb-1.5 ml-6">
                                                                <span className="text-[9px] md:text-xs font-black text-teal-600 flex items-center gap-1"><Zap size={10}/> 4. Separaciones Pagadas</span>
                                                                <span className="text-[10px] md:text-xs font-black text-teal-600">105</span>
                                                            </div>
                                                            <div className="w-[8%] min-w-[30px] h-3 md:h-4 bg-teal-100 rounded-r-lg overflow-hidden ml-6 border-l-4 border-teal-500">
                                                                <div className="bg-teal-500 h-full w-full shadow-[0_0_12px_rgba(20,184,166,0.6)] animate-pulse"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Feature Tabs (Scrollable) */}
                    <div className="w-full lg:w-[40%] flex flex-col gap-3 py-4 lg:py-0 order-1 lg:order-2">
                        {features.map((feature, idx) => {
                            const isActive = activeTab === feature.id;
                            return (
                                <div
                                    key={feature.id}
                                    onClick={() => handleTabClick(idx)}
                                    className={`relative p-4 lg:p-5 rounded-2xl cursor-pointer transition-all duration-300 border ${isActive
                                        ? 'bg-white border-purple-200 shadow-xl shadow-purple-900/5 ring-1 ring-purple-50 z-10'
                                        : 'bg-transparent border-transparent opacity-60 hover:opacity-100'}`}
                                >
                                    <div className="flex items-start gap-4">
                                        <div className={`w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-xl transition-all duration-300 shrink-0 text-xl lg:text-2xl ${isActive ? 'bg-purple-100 scale-110 shadow-inner' : 'bg-gray-100 grayscale opacity-60'}`}>
                                            {feature.icon}
                                        </div>
                                        <div>
                                            <h3 className={`text-base md:text-lg font-bold mb-1 transition-colors ${isActive ? 'text-gray-900' : 'text-gray-400'}`}>
                                                {feature.title}
                                            </h3>
                                            <p className={`text-sm leading-relaxed transition-colors ${isActive ? 'text-gray-500' : 'text-gray-400'}`}>
                                                {feature.desc}
                                            </p>

                                            {/* Expandable Detail */}
                                            <div className={`overflow-hidden transition-all duration-500 ${isActive ? 'max-h-32 opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
                                                <div className="bg-gradient-to-r from-purple-50 to-transparent p-3 rounded-xl border-l-2 border-purple-400">
                                                    <p className="text-xs text-purple-900 font-medium leading-relaxed">
                                                        <span className="text-purple-600 mr-1">🚀</span> {feature.detail}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

// Quick stub for Orbit icon missing in imports
const Orbit = ({size}: {size: number}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.1 19.1a10 10 0 1 0-14.2 0"/><path d="M16 16l-4-4"/></svg>
);

export default Ecosystem;
