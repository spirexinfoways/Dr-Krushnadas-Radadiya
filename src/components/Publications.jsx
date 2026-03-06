import React from 'react';
import { motion } from 'framer-motion';
import { publications } from '../data/publications';
import { FiArrowUpRight, HiOutlineDocumentText } from './icons/Icons';

const Publications = () => {
    return (
        <section id="publications" className="py-24 bg-[#f8f9fc] overflow-hidden">
            <div className="container mx-auto px-6">

                {/* Header Row — title left, count right */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-block px-5 py-1.5 border border-primary/30 rounded-full text-xs font-bold text-primary uppercase tracking-widest mb-5 bg-primary/5">
                            Research
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tight">
                            Publications &<br />
                            <span className="text-primary">Academic Work</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex items-center gap-4 pb-2 flex-shrink-0"
                    >
                        <div className="text-right">
                            <p className="text-6xl font-black text-slate-100 leading-none">{String(publications.length).padStart(2, '0')}</p>
                            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest -mt-2">Total Papers</p>
                        </div>
                    </motion.div>
                </div>

                {/* Publication Cards */}
                <div className="flex flex-col gap-5">
                    {publications.map((pub, index) => (
                        <motion.a
                            key={pub.id}
                            href={pub.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.12 }}
                            className="group relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 p-7 md:p-10 rounded-3xl border border-slate-100 bg-white hover:bg-slate-900 hover:border-slate-900 transition-all duration-400 shadow-sm hover:shadow-2xl overflow-hidden cursor-pointer"
                        >
                            {/* Subtle background number */}
                            <span className="absolute right-8 top-1/2 -translate-y-1/2 text-[120px] font-black text-slate-50 group-hover:text-white/5 leading-none select-none transition-colors duration-400 pointer-events-none">
                                {String(index + 1).padStart(2, '0')}
                            </span>

                            {/* Icon */}
                            <div className="w-16 h-16 rounded-2xl bg-primary/10 group-hover:bg-primary flex items-center justify-center text-primary group-hover:text-white transition-all duration-300 flex-shrink-0 text-2xl shadow-sm">
                                <HiOutlineDocumentText />
                            </div>

                            {/* Content */}
                            <div className="flex-1 relative z-10">
                                <h3 className="text-lg md:text-xl lg:text-2xl font-black text-slate-900 group-hover:text-white mb-3 leading-snug transition-colors duration-300">
                                    {pub.title}
                                </h3>
                                <div className="flex flex-wrap items-center gap-3">
                                    <span className="text-sm font-semibold text-slate-500 group-hover:text-white/60 italic transition-colors duration-300">
                                        {pub.journal}
                                    </span>
                                    <span className="w-1 h-1 rounded-full bg-slate-300 group-hover:bg-white/30 flex-shrink-0 transition-colors duration-300" />
                                    <span className="px-3 py-1 rounded-full bg-primary/10 group-hover:bg-white/10 text-primary group-hover:text-white text-xs font-black uppercase tracking-widest transition-all duration-300">
                                        {pub.year}
                                    </span>
                                </div>
                            </div>

                        </motion.a>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Publications;
