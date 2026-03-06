import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheckCircle, FiStar, FiActivity, FiLayers, FiTarget } from './icons/Icons';
import doctorImg from '../assets/Doc1.png';

const About = () => {
    return (
        <section id="about" className="relative bg-[#f8f9fc] min-h-screen py-24 overflow-hidden flex items-center">

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">

                    {/* LEFT IMAGE ASSEMBLY */}
                    <div className="lg:w-[45%] w-full relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative w-full aspect-[4/5] max-w-[450px] lg:max-w-[500px] mx-auto z-10"
                        >
                            {/* Main Image Container */}
                            <div className="w-full h-full rounded-[3rem] overflow-hidden border-[8px] border-white shadow-[0_30px_60px_-15px_rgba(242,92,92,0.2)] relative bg-primary/5">
                                {/* Doctor Image Tag */}
                                <img src={doctorImg} alt="Dr Krushnadas Radadiya" className="w-full h-full object-cover object-bottom" />
                                {/* Bottom gradient inner shadow so photo fades nicely at very bottom if needed */}
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-60 mix-blend-multiply"></div>
                            </div>

                            {/* Floating Glassmorphism Card 1 (Top Left) */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.7 }}
                                className="absolute top-10 -left-4 md:-left-10 bg-white/90 backdrop-blur-xl p-4 md:p-5 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] border border-white flex flex-col gap-2 z-20"
                            >
                                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xl">
                                    <FiCheckCircle />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs md:text-sm font-bold text-slate-800">Minimally Invasive</span>
                                    <span className="text-[10px] md:text-xs text-slate-500 font-medium">Faster recovery time</span>
                                </div>
                            </motion.div>

                            {/* Floating Glassmorphism Card 2 (Bottom Right) */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.9 }}
                                className="absolute bottom-12 -right-4 md:-right-12 bg-white/90 backdrop-blur-xl p-3 md:p-4 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] border border-white flex items-center gap-3 md:gap-4 z-20"
                            >
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex flex-col items-center justify-center text-primary">
                                    <span className="text-xs md:text-sm font-black text-primary leading-none">24</span>
                                    <span className="text-[8px] md:text-[9px] font-bold tracking-widest uppercase">Hrs</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs md:text-sm font-bold text-slate-800">Quick Discharge</span>
                                    <span className="text-[10px] md:text-xs text-slate-500 font-medium">For most treatments</span>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="lg:w-[55%] flex flex-col justify-center text-center lg:text-left pt-10 lg:pt-0 lg:pl-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm w-max mb-6 mx-auto lg:mx-0"
                        >
                            <span className="flex h-2 w-2 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">About Us</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.05] tracking-tight mb-8"
                        >
                            Dedicated to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#ff6b6b]">Advanced</span><br />
                            Medical Interventions.
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="text-lg text-slate-600 font-medium leading-relaxed mb-10 mx-auto lg:mx-0 pr-0 lg:pr-8"
                        >
                            Dr. Krushnadas Radadiya is a highly skilled Consultant Interventional Radiologist. With extensive training and experience, he is dedicated to providing state-of-the-art, minimally invasive treatments for a wide range of complex medical conditions.
                        </motion.p>

                        {/* Feature Grid */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 text-left"
                        >
                            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl flex-shrink-0">
                                    <FiActivity />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800 mb-1">Expert Care</h4>
                                    <p className="text-xs font-medium text-slate-500">Mastery in minimally invasive procedures.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl flex-shrink-0">
                                    <FiTarget />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800 mb-1">Specialized</h4>
                                    <p className="text-xs font-medium text-slate-500">Leader in Interventional Radiology.</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* CTA and Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 lg:gap-10"
                        >
                            <a href="#procedures" className="px-8 py-4 bg-primary text-white font-bold rounded-2xl shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
                                Explore Treatments <FiArrowRight />
                            </a>

                            <div className="flex items-center gap-12">
                                <div className="flex flex-col items-center lg:items-start">
                                    <div className="flex items-center text-yellow-400 text-lg mb-1">
                                        <FiStar fill="currentColor" />
                                        <FiStar fill="currentColor" />
                                        <FiStar fill="currentColor" />
                                        <FiStar fill="currentColor" />
                                        <FiStar fill="currentColor" />
                                    </div>
                                    <span className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest">Patient Rating</span>
                                </div>
                            </div>
                        </motion.div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
