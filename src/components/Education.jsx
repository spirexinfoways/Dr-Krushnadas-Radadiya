import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { education } from '../data/education';
import { awards } from '../data/awards';
import { FaGraduationCap, FaTrophy, FaUniversity, FiAward } from './icons/Icons';

const Education = () => {
    const timelineRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: timelineRef,
        offset: ["start center", "end center"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section id="education" className="py-24 bg-[#f8f9fc] relative">

            {/* Background Decor - Subtle & Premium */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[600px] h-[600px] rounded-full bg-primary/[0.04] blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-[500px] h-[500px] rounded-full bg-slate-200/50 blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">

                {/* Section Header */}
                <div className="mb-16 md:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                        className="text-center md:text-left"
                    >
                        <span className="inline-block px-5 py-1.5 border border-primary/30 rounded-full text-[10px] md:text-xs font-bold text-primary uppercase tracking-widest mb-6 bg-primary/5">
                            Qualifications & Career
                        </span>
                        <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight">
                            Education & <span className="text-primary italic">Achievements</span>
                        </h2>
                    </motion.div>
                </div>

                <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-24 items-start">

                    {/* Education Column - The Scrolling Content */}
                    <div className="relative">
                        <div className="flex items-center gap-5 mb-12 relative">
                            <div className="w-14 h-14 rounded-2xl bg-white shadow-md border border-slate-100 text-primary flex items-center justify-center text-3xl shrink-0">
                                <FaGraduationCap />
                            </div>
                            <h4 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight relative">
                                Academic Journey
                                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full" />
                            </h4>
                        </div>

                        <div className="relative pl-0 md:pl-0" ref={timelineRef}>
                            {/* Static Background Line */}
                            <div className="absolute left-[20px] md:left-[35px] top-[40px] md:top-[48px] bottom-[40px] w-[2px] bg-slate-200/60 rounded-full origin-top" />
                            
                            {/* Animated Filling Line */}
                            <motion.div 
                                style={{ scaleY, originY: 0 }}
                                className="absolute left-[20px] md:left-[35px] top-[40px] md:top-[48px] bottom-[40px] w-[2px] bg-primary rounded-full z-10 origin-top"
                            />

                            <div className="space-y-8 md:space-y-10">
                                {education.map((item, index) => (
                                    <motion.div
                                        key={item.id}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        className="relative group pl-[48px] md:pl-[76px] pb-4"
                                    >
                                        {/* Timeline Dot */}
                                        <div className="absolute top-[40px] md:top-[48px] left-[13px] md:left-[28px] w-4 h-4 rounded-full bg-[#f8f9fc] border-[3px] border-slate-300 z-20 transition-all duration-300 group-hover:border-primary group-hover:scale-125 hover:shadow-md">
                                            <div className="absolute inset-[1px] rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        </div>

                                        <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 hover:border-primary/20 transition-all duration-500 relative overflow-hidden group">
                                            {/* Subtle Background Icon */}
                                            <FaUniversity className="absolute -right-4 -bottom-4 text-[120px] text-slate-50 rotate-[-15deg] pointer-events-none group-hover:text-primary/5 transition-colors duration-500" />

                                            <div className="relative z-10">
                                                <div className="flex flex-wrap items-center gap-3 mb-4">
                                                    <span className="px-3 py-1 rounded-lg bg-primary/10 text-primary text-[11px] font-black uppercase tracking-wider">
                                                        {item.year}
                                                    </span>
                                                </div>
                                                <h5 className="text-xl md:text-2xl font-black text-slate-900 mb-3 leading-snug group-hover:text-primary transition-colors">
                                                    {item.degree}
                                                </h5>
                                                <p className="text-slate-500 font-bold mb-4 flex items-center gap-2 text-sm md:text-base">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-primary block shadow-[0_0_8px_rgba(26,115,232,0.5)]"></span>
                                                    {item.institution}
                                                </p>
                                                <p className="text-slate-600 text-sm md:text-base font-medium leading-relaxed">
                                                    {item.details}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Awards Column - Sticky & Premium */}
                    <div className="lg:sticky lg:top-32 h-fit">
                        <div className="flex items-center gap-5 mb-12">
                            <div className="w-14 h-14 rounded-2xl bg-white shadow-md border border-slate-100 text-primary flex items-center justify-center text-3xl shrink-0">
                                <FaTrophy />
                            </div>
                            <h4 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight relative">
                                Awards
                                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full" />
                            </h4>
                        </div>

                        <div className="space-y-5">
                            {awards.map((award, index) => (
                                <motion.div
                                    key={award.id}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                                    className="flex items-center gap-5 p-6 bg-white rounded-[2rem] border border-slate-100 shadow-sm group hover:shadow-xl hover:border-primary/30 transition-all duration-500 overflow-hidden relative"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-primary text-2xl shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-500 shadow-inner">
                                        <FiAward />
                                    </div>
                                    <div className="flex-1">
                                        <h5 className="font-bold text-slate-900 text-lg md:text-xl leading-tight mb-2 group-hover:text-primary transition-colors">
                                            {award.title}
                                        </h5>
                                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs md:text-sm text-slate-500">
                                            <span className="font-semibold italic text-slate-400 leading-none">{award.organization}</span>
                                            <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                                            <span className="font-black text-primary/80 bg-primary/5 px-2 py-0.5 rounded text-[10px] uppercase tracking-wider">{award.year}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                        
                        {/* Summary Decoration */}
                        <div className="mt-12 p-8 rounded-[2rem] bg-slate-900 text-white relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-bl-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-700" />
                            <h6 className="text-lg font-bold mb-2 relative z-10">Commitment to Excellence</h6>
                            <p className="text-slate-400 text-sm leading-relaxed relative z-10">
                                Continuously evolving and contributing to the field of Interventional Radiology through research and clinical practice.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Education;
