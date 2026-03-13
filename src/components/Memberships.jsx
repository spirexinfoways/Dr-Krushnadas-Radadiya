import React from 'react';
import { motion } from 'framer-motion';
import { memberships } from '../data/memberships';

// Premium SVG Icons for different roles
const OrganizationIcon = ({ index }) => {
    const icons = [
        <svg key="1" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
        <svg key="2" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>,
        <svg key="3" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
        <svg key="4" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
    ];
    return icons[index % icons.length];
};

const Memberships = () => {
    return (
        <section id="memberships" className="py-24 md:py-32 bg-[#f8f9fc] relative overflow-hidden">

            {/* Premium Abstract Background (Light Theme) */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-primary/[0.03] rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/3"></div>
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/[0.03] rounded-full blur-[100px] translate-y-1/3 translate-x-1/4"></div>
                
                {/* Subtle Grid Pattern Overlay */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djI2aDJWMzRoMjZ2LTJoLTI2VjBoLTJ2MjZIMHYyaDI2djZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">

                {/* Section Header */}
                <div className="flex flex-col items-center text-center mb-20 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                    >
                        <span className="inline-block px-6 py-2 border border-primary/20 rounded-full text-xs font-bold text-primary uppercase tracking-[0.2em] mb-6 md:mb-8 bg-white shadow-sm">
                            Global Affiliations
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight">
                            Memberships &<br />
                            <span className="text-primary italic">Associations</span>
                        </h2>
                    </motion.div>
                </div>

                {/* Bento Grid Layout (Light Theme) */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[200px] md:auto-rows-[240px]">
                    {memberships.map((item, index) => {
                        // Create a staggered masonry/bento layout pattern
                        let gridClass = "md:col-span-12"; // Default
                        if (index === 0) gridClass = "md:col-span-7 md:row-span-1";
                        if (index === 1) gridClass = "md:col-span-5 md:row-span-1";
                        if (index === 2) gridClass = "md:col-span-5 md:row-span-1";
                        if (index === 3) gridClass = "md:col-span-7 md:row-span-1";

                        return (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ 
                                    duration: 0.7, 
                                    delay: index * 0.15,
                                    ease: [0.23, 1, 0.32, 1] 
                                }}
                                className={`group relative rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between overflow-hidden cursor-default border border-slate-100/50 hover:-translate-y-1 transition-transform duration-500 shadow-sm hover:shadow-xl ${gridClass}`}
                            >
                                {/* White Glass Background */}
                                <div className="absolute inset-0 bg-white/80 backdrop-blur-xl border border-slate-100 rounded-[2.5rem] transition-all duration-500 group-hover:bg-white group-hover:border-primary/20 z-0"></div>
                                
                                {/* Animated Glow Effect */}
                                <div className="absolute -inset-[100px] bg-gradient-to-r from-primary/0 via-primary/[0.03] to-primary/0 opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-1000 ease-out z-0 pointer-events-none transform -skew-x-12"></div>

                                {/* Top Section: Icon & Role */}
                                <div className="relative z-10 flex items-start justify-between">
                                    <div className="w-16 h-16 rounded-[1.25rem] bg-[#f8f9fc] border border-slate-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_10px_30px_rgba(242,92,92,0.3)] transition-all duration-500">
                                        <OrganizationIcon index={index} />
                                    </div>
                                    <div className="hidden md:block">
                                        <span className="inline-block px-4 py-1.5 rounded-full bg-slate-50 text-slate-500 text-xs font-bold uppercase tracking-widest border border-slate-100 group-hover:border-primary/20 group-hover:text-primary transition-colors duration-300">
                                            {item.role}
                                        </span>
                                    </div>
                                </div>

                                {/* Bottom Section: Title */}
                                <div className="relative z-10 mt-auto">
                                    <div className="md:hidden mb-4">
                                        <span className="inline-block px-3 py-1 rounded-full bg-slate-50 text-slate-500 text-[10px] font-bold uppercase tracking-widest border border-slate-100">
                                            {item.role}
                                        </span>
                                    </div>
                                    <h5 className="font-black text-slate-900 text-2xl md:text-3xl lg:text-4xl leading-[1.2] group-hover:text-primary transition-colors duration-300 max-w-[90%]">
                                        {item.organization}
                                    </h5>
                                </div>
                                
                                {/* Subtle large background number */}
                                <div className="absolute right-6 bottom-4 text-[120px] font-black leading-none text-slate-900/[0.02] group-hover:text-primary/[0.04] transition-colors duration-500 pointer-events-none select-none z-0">
                                    0{index + 1}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Memberships;
