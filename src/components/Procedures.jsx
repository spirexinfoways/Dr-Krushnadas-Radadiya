import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { proceduresData } from '../data/procedures';
import { ProcedureIcon } from './icons/ProcedureIcons';

const Procedures = () => {
    const [selectedId, setSelectedId] = useState(null);

    // Apply scroll lock to body when modal is open to prevent background scrolling/glitches
    useEffect(() => {
        if (selectedId) {
            document.body.style.overflow = 'hidden';
            // Adjust body padding to prevent layout shift on scrollbar removal
            const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
            if (scrollbarWidth > 0) document.body.style.paddingRight = `${scrollbarWidth}px`;
        } else {
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
        }
        return () => {
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
        };
    }, [selectedId]);

    return (
        <section id="procedures" className="py-24 bg-[#f8f9fc] overflow-hidden w-full min-h-screen">
            <div className="container mx-auto px-6 md:px-12">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center mb-12 md:mb-16"
                >
                    <span className="inline-block px-5 py-1.5 border border-primary/30 rounded-full text-[10px] md:text-xs font-bold text-primary uppercase tracking-widest mb-4 md:mb-5 bg-primary/5">
                        Specializations
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black text-slate-900 leading-tight tracking-tight">
                        Interventional <span className="text-primary">Procedures</span>
                    </h2>
                    <p className="text-slate-500 mt-4 max-w-xl text-base md:text-lg font-medium">
                        State-of-the-art minimally invasive treatments across multiple specialties,
                        organized for clarity and ease of exploration.
                    </p>
                </motion.div>

                {/* Categories Grid */}
                <div className="relative">
                    <motion.div 
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
                    >
                        {proceduresData.map((category) => (
                            <motion.div
                                key={category.id}
                                onClick={() => setSelectedId(category.id)}
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                                className="group cursor-pointer bg-white rounded-3xl p-8 border border-slate-100 hover:border-primary/20 shadow-sm hover:shadow-xl transition-all duration-500 relative overflow-hidden"
                            >
                                {/* Background Accent */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                                
                                <div className="relative z-10">
                                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-500 shadow-sm">
                                        <ProcedureIcon name={category.icon} className="w-8 h-8" />
                                    </div>
                                    
                                    <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-primary transition-colors">
                                        {category.title}
                                    </h3>
                                    
                                    <p className="text-slate-500 font-medium leading-relaxed mb-6">
                                        {category.description}
                                    </p>
                                    
                                    <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider group-hover:gap-4 transition-all">
                                        View Details
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Expanded View Modal-like Overlay */}
                    <AnimatePresence>
                        {selectedId && (
                            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 pointer-events-none">
                                {/* Backdrop */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onClick={() => setSelectedId(null)}
                                    className="absolute inset-0 bg-slate-900/40 backdrop-blur-md pointer-events-auto"
                                />
                                
                                {/* Content Card */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                                    className="bg-white w-full max-w-4xl max-h-[95vh] md:max-h-[85vh] rounded-[30px] md:rounded-[40px] shadow-2xl relative overflow-hidden pointer-events-auto flex flex-col"
                                >
                                    {/* Header Section */}
                                    <div className="p-6 md:p-12 border-b border-slate-100 bg-primary/[0.02] flex items-start justify-between shrink-0">
                                        <div className="flex gap-4 md:gap-6 items-center">
                                            <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0 transition-transform duration-500">
                                                <ProcedureIcon name={proceduresData.find(c => c.id === selectedId).icon} className="w-6 h-6 md:w-8 md:h-8" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl md:text-3xl lg:text-4xl font-black text-slate-900 mb-1 md:mb-2">
                                                    {proceduresData.find(c => c.id === selectedId).title}
                                                </h3>
                                                <p className="text-slate-500 text-sm md:text-lg font-medium">
                                                    {proceduresData.find(c => c.id === selectedId).description}
                                                </p>
                                            </div>
                                        </div>
                                        <button 
                                            onClick={() => setSelectedId(null)}
                                            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-primary hover:text-white transition-all duration-300 group shrink-0"
                                        >
                                            <svg className="w-5 h-5 md:w-6 md:h-6 group-hover:rotate-90 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>

                                    {/* Procedures List */}
                                    <div className="p-6 md:p-12 overflow-y-auto custom-scrollbar">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 md:gap-y-6">
                                            {proceduresData.find(c => c.id === selectedId).items.map((item, idx) => (
                                                <motion.div 
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: idx * 0.05 }}
                                                    key={idx} 
                                                    className="flex items-start gap-3 md:gap-4 group/item"
                                                >
                                                    <div className="mt-1 w-5 h-5 md:w-6 md:h-6 rounded-full border-2 border-primary/20 flex-shrink-0 flex items-center justify-center group-hover/item:border-primary group-hover/item:bg-primary transition-all duration-300">
                                                        <svg className="w-2.5 h-2.5 md:w-3 md:h-3 text-transparent group-hover/item:text-white" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                        </svg>
                                                    </div>
                                                    <p className="text-slate-700 text-sm md:text-base font-semibold leading-relaxed group-hover/item:text-primary transition-colors">
                                                        {item}
                                                    </p>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Footer Enquiry */}
                                    <div className="p-6 md:p-10 border-t border-slate-100 bg-slate-50 flex flex-col md:flex-row items-center justify-between gap-6 shrink-0">
                                        <p className="text-slate-500 text-sm md:text-base font-medium md:max-w-md text-center md:text-left">
                                            Interested in learning more about these procedures?
                                        </p>
                                        <button
                                            onClick={() => {
                                                const title = proceduresData.find(c => c.id === selectedId).title;
                                                const msg = `I would like to enquire about: ${title}`;
                                                sessionStorage.setItem('enquiryMessage', msg);
                                                window.dispatchEvent(new CustomEvent('procedureEnquiry', { detail: { message: msg } }));
                                                setSelectedId(null);
                                                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                            }}
                                            className="w-full md:w-auto px-8 py-3.5 md:py-4 bg-primary text-white rounded-xl md:rounded-2xl font-bold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300"
                                        >
                                            Enquire Now
                                        </button>
                                    </div>
                                </motion.div>
                            </div>
                        )}
                    </AnimatePresence>
                </div>

            </div>
            
            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #e2e8f0;
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #cbd5e1;
                }
            `}</style>
        </section>
    );
};

export default Procedures;
