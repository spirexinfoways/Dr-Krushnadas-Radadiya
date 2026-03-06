import React from 'react';
import { motion } from 'framer-motion';
import { procedures } from '../data/procedures';
import { ProcedureIcon } from './icons/ProcedureIcons';

const Procedures = () => {
    return (
        <section id="procedures" className="py-24 bg-[#f8f9fc] overflow-hidden w-full">
            <div className="container mx-auto px-6 md:px-12">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center mb-20"
                >
                    <span className="inline-block px-5 py-1.5 border border-primary/30 rounded-full text-xs font-bold text-primary uppercase tracking-widest mb-5 bg-primary/5">
                        Specializations
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tight">
                        Interventional <span className="text-primary">Procedures</span>
                    </h2>
                    <p className="text-slate-500 mt-4 max-w-xl text-lg font-medium">
                        Offering state-of-the-art minimally invasive treatments for a variety of conditions,
                        ensuring faster recovery and better patient outcomes.
                    </p>
                </motion.div>

                {/* Circles Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-8 xl:gap-6 w-full place-items-center">
                    {procedures.map((proc, i) => (
                        <motion.div
                            key={proc.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="flex flex-col items-center text-center group w-full"
                        >
                            {/* Outer dashed ring */}
                            <div className="relative mb-5 w-44 h-44 xl:w-48 xl:h-48 2xl:w-52 2xl:h-52 flex-shrink-0">
                                <div className="w-full h-full rounded-full border-2 border-dashed border-primary/30 group-hover:border-primary/70 transition-colors duration-300 flex items-center justify-center p-3">
                                    {/* Inner solid circle */}
                                    <div className="w-full h-full rounded-full bg-white shadow-[0_10px_40px_-12px_rgba(242,92,92,0.15)] group-hover:shadow-[0_14px_50px_-12px_rgba(242,92,92,0.3)] transition-shadow duration-300 flex flex-col items-center justify-center gap-2 relative px-5">

                                        {/* Icon */}
                                        <div className="text-primary mb-1 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                                            <ProcedureIcon name={proc.icon} className="w-8 h-8" />
                                        </div>

                                        {/* Title */}
                                        <p className="text-[11px] xl:text-[12px] font-bold text-slate-800 leading-snug line-clamp-3 text-center w-full">
                                            {proc.title}
                                        </p>

                                        {/* Number badge */}
                                        <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-11 h-11 bg-primary rounded-full shadow-lg shadow-primary/30 flex items-center justify-center z-10 group-hover:scale-110 transition-transform duration-300">
                                            <span className="text-white text-sm font-black">0{proc.id}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-xs xl:text-sm text-slate-500 leading-relaxed font-medium max-w-[170px]">
                                {proc.description}
                            </p>

                            <button
                                type="button"
                                onClick={() => {
                                    const msg = `I would like to enquire about: ${proc.title}`;
                                    sessionStorage.setItem('enquiryMessage', msg);
                                    window.dispatchEvent(new CustomEvent('procedureEnquiry', { detail: { message: msg } }));
                                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="mt-3 text-[10px] xl:text-xs font-bold text-primary hover:text-slate-800 uppercase tracking-widest transition-colors flex items-center gap-1 cursor-pointer group/btn"
                            >
                                Enquire
                                <svg className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Procedures;
