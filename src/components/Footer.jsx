import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowUp } from './icons/Icons';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true }) + ' GMT+5:30');
        };
        updateTime();
        const interval = setInterval(updateTime, 60000);
        return () => clearInterval(interval);
    }, []);

    const linkHoverVariants = {
        initial: { y: 0 },
        hover: { y: "-50%" }
    };

    return (
        <footer className="bg-slate-50 relative overflow-hidden pt-32 pb-12 rounded-t-[3rem] -mt-10 z-20">
            {/* Background large circle */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full bg-accent/40 -z-10"
            ></motion.div>

            <div className="container mx-auto px-4 md:px-8 relative z-10">

                <div className="text-center mb-16 md:mb-24">
                    <p className="text-primary font-bold mb-6 uppercase tracking-widest text-sm md:text-base">
                        Ready to start your treatment?
                    </p>

                    <div className="flex justify-center items-center text-[13vw] md:text-[150px] font-black text-slate-900 leading-none tracking-tighter">
                        <motion.span
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                        >GET IN T</motion.span>

                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 150, damping: 15, delay: 0.4 }}
                            className="w-[10vw] h-[10vw] md:w-[110px] md:h-[110px] rounded-full bg-primary mx-1 md:mx-4 transform translate-y-2 md:translate-y-3 shadow-inner"
                        ></motion.div>

                        <motion.span
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                        >UCH</motion.span>
                    </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 border-t border-slate-200 pt-12 pb-16 lg:pb-32">

                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
                        <h4 className="text-slate-900 font-bold mb-6 uppercase tracking-widest text-[13px]">Navigation</h4>
                        <ul className="space-y-3">
                            {['Home', 'About', 'Procedures', 'Education', 'Contact'].map((item) => (
                                <li key={item}>
                                    <motion.a
                                        href={`#${item.toLowerCase()}`}
                                        className="text-slate-600 font-medium block overflow-hidden relative h-6"
                                        initial="initial"
                                        whileHover="hover"
                                    >
                                        <motion.div
                                            variants={linkHoverVariants}
                                            transition={{ duration: 0.3 }}
                                            className="flex flex-col"
                                        >
                                            <span className="h-6 leading-6">{item}</span>
                                            <span className="h-6 leading-6 text-primary">{item}</span>
                                        </motion.div>
                                    </motion.a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}>
                        <h4 className="text-slate-900 font-bold mb-6 uppercase tracking-widest text-[13px]">Contact Info</h4>
                        <ul className="space-y-3 font-medium text-slate-600">
                            <li>
                                <motion.a href="mailto:contact@drradadiya.com" className="block overflow-hidden relative h-6" initial="initial" whileHover="hover">
                                    <motion.div variants={linkHoverVariants} transition={{ duration: 0.3 }} className="flex flex-col">
                                        <span className="h-6 leading-6">contact@drradadiya.com</span>
                                        <span className="h-6 leading-6 text-primary">contact@drradadiya.com</span>
                                    </motion.div>
                                </motion.a>
                            </li>
                            <li>
                                <motion.a href="tel:+919876543210" className="block overflow-hidden relative h-6" initial="initial" whileHover="hover">
                                    <motion.div variants={linkHoverVariants} transition={{ duration: 0.3 }} className="flex flex-col">
                                        <span className="h-6 leading-6">+91 98765 43210</span>
                                        <span className="h-6 leading-6 text-primary">+91 98765 43210</span>
                                    </motion.div>
                                </motion.a>
                            </li>
                            <li className="pt-2 text-[15px] leading-relaxed">Health Care Hospital,<br /> Rajkot, Gujarat</li>
                        </ul>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }}>
                        <h4 className="text-slate-900 font-bold mb-6 uppercase tracking-widest text-[13px]">Socials</h4>
                        <ul className="space-y-3">
                            {['LinkedIn', 'Twitter', 'Instagram'].map((item) => (
                                <li key={item}>
                                    <motion.a
                                        href="#"
                                        className="text-slate-600 font-medium block overflow-hidden relative h-6"
                                        initial="initial"
                                        whileHover="hover"
                                    >
                                        <motion.div
                                            variants={linkHoverVariants}
                                            transition={{ duration: 0.3 }}
                                            className="flex flex-col"
                                        >
                                            <span className="h-6 leading-6">{item}</span>
                                            <span className="h-6 leading-6 text-primary">{item}</span>
                                        </motion.div>
                                    </motion.a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.6 }}>
                        <h4 className="text-slate-900 font-bold mb-6 uppercase tracking-widest text-[13px]">Legal</h4>
                        <ul className="space-y-3">
                            {['Privacy Policy', 'Terms of Service'].map((item) => (
                                <li key={item}>
                                    <motion.a
                                        href="#"
                                        className="text-slate-600 font-medium block overflow-hidden relative h-6"
                                        initial="initial"
                                        whileHover="hover"
                                    >
                                        <motion.div
                                            variants={linkHoverVariants}
                                            transition={{ duration: 0.3 }}
                                            className="flex flex-col"
                                        >
                                            <span className="h-6 leading-6">{item}</span>
                                            <span className="h-6 leading-6 text-primary">{item}</span>
                                        </motion.div>
                                    </motion.a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                </div>

                <div className="flex flex-col lg:flex-row justify-between items-end gap-10 pt-8 mt-10 lg:mt-0">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="w-full lg:w-auto text-left"
                    >
                        <p className="text-2xl font-black text-slate-800 tracking-tight leading-none mb-1">© {currentYear}</p>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tighter uppercase leading-[0.9]">
                            Krushnadas<br />Radadiya
                        </h1>
                    </motion.div>

                    <div className="w-full lg:w-auto flex justify-between items-end lg:gap-32">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="text-left"
                        >
                            <p className="text-[12px] font-bold text-slate-900 uppercase tracking-widest mb-1.5">Local Time</p>
                            <p className="text-slate-600 font-medium text-[15px]">{time}</p>
                        </motion.div>

                        <motion.button
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05, backgroundColor: "#F25C5C", color: "white" }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-accent text-primary hover:text-white flex items-center justify-center transition-colors mb-2 mr-2 shadow-sm"
                            aria-label="Scroll to top"
                        >
                            <FiArrowUp className="w-5 h-5 md:w-6 md:h-6" />
                        </motion.button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
