import React from 'react';
import { motion } from 'framer-motion';
import { memberships } from '../data/memberships';

const Memberships = () => {
    return (
        <section id="memberships" className="py-24 bg-white relative overflow-hidden">

            {/* Background Decor */}
            <div className="absolute top-0 left-0 -ml-32 -mt-32 w-[600px] h-[600px] rounded-full bg-primary/[0.03] blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 -mr-32 -mb-32 w-[500px] h-[500px] rounded-full bg-slate-100/60 blur-3xl pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <span className="inline-block px-5 py-1.5 border border-primary/30 rounded-full text-xs font-bold text-primary uppercase tracking-widest mb-5 bg-primary/5">
                        Professional Affiliations
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tight">
                        Memberships &<br />
                        <span className="text-primary">Associations</span>
                    </h2>
                </motion.div>

                {/* Memberships Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
                    {memberships.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                            className="group flex items-center gap-5 p-7 bg-[#f8f9fc] rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-primary/20 transition-all duration-300 relative overflow-hidden"
                        >
                            {/* Hover sweep */}
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/[0.04] to-primary/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>

                            {/* Icon Badge */}
                            <div className="w-14 h-14 flex-shrink-0 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>

                            {/* Text */}
                            <div className="relative z-10">
                                <h5 className="font-black text-slate-900 text-lg leading-snug mb-1 group-hover:text-primary transition-colors duration-300">
                                    {item.organization}
                                </h5>
                                <span className="inline-block px-3 py-1 rounded-lg bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                                    {item.role}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Memberships;
