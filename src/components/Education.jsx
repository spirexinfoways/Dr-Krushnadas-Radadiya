import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../data/education';
import { awards } from '../data/awards';
import { FaGraduationCap, FaTrophy, FaUniversity, FiAward } from './icons/Icons';

const Education = () => {
    return (
        <section id="education" className="py-24 bg-[#f8f9fc] relative overflow-hidden">

            {/* Background Decor */}
            <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[600px] h-[600px] rounded-full bg-primary/[0.03] blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-[500px] h-[500px] rounded-full bg-slate-200/40 blur-3xl pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-block px-5 py-1.5 border border-primary/30 rounded-full text-xs font-bold text-primary uppercase tracking-widest mb-5 bg-primary/5">
                            Qualifications
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tight">
                            Education &<br />
                            <span className="text-primary">Achievements</span>
                        </h2>
                    </motion.div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

                    {/* Education Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="flex items-center gap-4 mb-10 pb-4 border-b-2 border-slate-200/60">
                            <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-100 text-primary flex items-center justify-center text-2xl">
                                <FaGraduationCap />
                            </div>
                            <h4 className="text-3xl font-black text-slate-900 tracking-tight">Academic Journey</h4>
                        </div>

                        <div className="space-y-6 relative before:absolute before:inset-0 before:ml-7 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary/50 before:via-slate-200 before:to-transparent pl-16">
                            {education.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
                                    className="relative group"
                                >
                                    {/* Timeline Dot */}
                                    <div className="absolute top-6 -left-16 w-3 h-3 rounded-full bg-primary border-4 border-[#f8f9fc] shadow-sm transform -translate-x-1.5 group-hover:scale-150 group-hover:bg-white group-hover:border-primary transition-all duration-300"></div>

                                    <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 hover:border-primary/20 transition-all duration-300 relative overflow-hidden">

                                        {/* Subtle background icon */}
                                        <FaUniversity className="absolute -right-4 -bottom-4 text-[100px] text-slate-50 rotate-[-15deg] pointer-events-none group-hover:text-primary/5 transition-colors duration-500" />

                                        <div className="relative z-10">
                                            <span className="inline-block px-3 py-1 rounded-lg bg-primary/10 text-primary text-xs font-black mb-4 uppercase tracking-wider">{item.year}</span>
                                            <h5 className="text-xl md:text-2xl font-black text-slate-900 mb-2 leading-snug group-hover:text-primary transition-colors">{item.degree}</h5>
                                            <p className="text-slate-500 font-bold mb-4 flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-slate-300 block"></span>
                                                {item.institution}
                                            </p>
                                            <p className="text-slate-600 text-sm md:text-base font-medium leading-relaxed">{item.details}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Awards Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <div className="flex items-center gap-4 mb-10 pb-4 border-b-2 border-slate-200/60">
                            <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-100 text-primary flex items-center justify-center text-2xl">
                                <FaTrophy />
                            </div>
                            <h4 className="text-3xl font-black text-slate-900 tracking-tight">Awards & Recognition</h4>
                        </div>

                        <div className="space-y-4">
                            {awards.map((award, index) => (
                                <motion.div
                                    key={award.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.5 + (index * 0.1) }}
                                    className="flex items-center gap-5 p-5 bg-white rounded-[1.5rem] border border-slate-100 shadow-sm group hover:shadow-lg hover:border-primary/30 transition-all duration-300 overflow-hidden relative cursor-default"
                                >
                                    {/* Hover sweep effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/[0.03] to-primary/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                                    <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-primary text-xl flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                        <FiAward />
                                    </div>
                                    <div className="flex-1 relative z-10">
                                        <h5 className="font-bold text-slate-900 text-lg md:text-xl leading-tight mb-1 group-hover:text-primary transition-colors">{award.title}</h5>
                                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm md:text-[15px] text-slate-600">
                                            <span className="font-medium italic">{award.organization}</span>
                                            <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                                            <span className="font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md text-[11px] uppercase tracking-wider">{award.year}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Education;
