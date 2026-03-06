import React from 'react';
import { motion } from 'framer-motion';
import { FaHeartbeat, FaUserMd } from './icons/Icons';
import doctorImg from '../assets/Dr Krushnadas.png';

const Hero = () => {
    return (
        <section id="home" className="relative bg-[#eef5fa] min-h-screen pt-28 pb-16 overflow-hidden flex items-center">
            {/* The reference GIF has a very light blue/gray background, let's keep the user's #eef5fa or the global #f8f9fc */}
            <div className="absolute inset-0 bg-[#f8f9fc] z-0"></div>

            <div className="container mx-auto px-6 relative z-10 h-full flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">

                {/* LEFT CONTENT */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="lg:w-[50%] flex flex-col justify-center text-center lg:text-left z-20 pt-10 lg:pt-0"
                >
                    <h1 className="text-5xl md:text-6xl lg:text-[70px] font-black text-[#1e293b] leading-[1.1] tracking-tight mb-6">
                        Consult a doctor<br />
                        anytime, anywhere<br />
                        by <span className="text-primary">Medical Expert</span>
                    </h1>

                    <p className="text-base md:text-lg text-slate-500 font-medium leading-relaxed max-w-lg mb-10 mx-auto lg:mx-0">
                        Our skilled doctors have tremendous experience with a wide range of diseases to serve the needs of our patients with state-of-the-art minimally invasive treatments.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                        <a
                            href="#contact"
                            className="w-full sm:w-auto px-8 py-3.5 bg-primary text-white font-bold rounded-full shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center text-sm"
                        >
                            Book Consultation
                        </a>
                        <a
                            href="#procedures"
                            className="w-full sm:w-auto px-8 py-3.5 bg-primary text-white font-bold rounded-full shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center text-sm"
                        >
                            View All Services
                        </a>
                    </div>
                </motion.div>

                {/* RIGHT IMAGE ASSEMBLY */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="lg:w-[50%] w-full relative z-10 flex justify-center items-end h-[500px] md:h-[600px] lg:h-[650px]"
                >

                    {/* The Large Circular Background directly behind the doctor */}
                    {/* The GIF shows a large light blue circle. We use a light red (primary/10) to match theme, or we can use the same light blue if strict to the GIF, but user requested THEIR color theme. */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px] bg-primary/10 rounded-full z-0 overflow-hidden">
                        {/* Main Image */}
                        <img
                            src={doctorImg}
                            alt="Dr Krushnadas Radadiya"
                            className="absolute bottom-0 left-1/2 -translate-x-1/2 h-full w-auto object-contain object-bottom"
                        />
                    </div>

                    {/* Additional right side decorative arc/circle part missing from GIF but implied */}
                    <div className="absolute top-0 right-[-10%] w-[400px] h-[400px] bg-primary/5 rounded-full z-[1] blur-3xl pointer-events-none"></div>

                    {/* Floating Element 1 - Heart Circle (Left side of doctor) */}
                    <motion.div
                        initial={{ y: 0 }}
                        animate={{ y: [-15, 15, -15] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        className="absolute top-[25%] left-[5%] md:left-[10%] lg:left-[5%] w-14 h-14 md:w-16 md:h-16 rounded-full border-[3px] border-white shadow-xl bg-primary flex items-center justify-center text-white z-20"
                    >
                        <FaHeartbeat className="w-6 h-6 md:w-7 md:h-7" />
                    </motion.div>

                    {/* Floating Element 2 - Stat Card (Right side of doctor) */}
                    <motion.div
                        initial={{ y: 0 }}
                        animate={{ y: [10, -10, 10] }}
                        transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 1 }}
                        className="absolute top-[18%] right-[0%] md:right-[5%] lg:right-[-5%] bg-white py-2 px-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3 z-20"
                    >
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                            <FaUserMd className="w-5 h-5" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm font-black text-slate-800 leading-tight">10000+</span>
                            <span className="text-[10px] font-bold text-slate-500 uppercase">Happy Patients</span>
                        </div>
                    </motion.div>

                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
