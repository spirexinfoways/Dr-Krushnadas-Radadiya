import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiTwitter, FiInstagram, FiFacebook, FiLinkedin } from './icons/Icons';
import logoImg from '../assets/logo.png';

const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Procedures', href: '#procedures' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [menuOpen]);

    return (
        <>
            <header
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-400 shadow-md ${scrolled
                    ? 'bg-[#f8f9fc] backdrop-blur-md border-b border-slate-200'
                    : 'bg-[#f8f9fc] border-b border-slate-100'
                    }`}
            >
                <div className="w-full px-6 md:px-10 h-[72px] flex items-center justify-between gap-6">

                    {/* LEFT: Logo */}
                    <a href="#home" className="flex items-center flex-shrink-0">
                        <img src={logoImg} alt="Dr Krushnadas Radadiya Logo" className="h-16 md:h-17 w-auto object-contain scale-[1.3] md:scale-[1.5] origin-left" />
                    </a>

                    {/* CENTER: Nav Links (desktop) */}
                    <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="relative text-[13.5px] font-semibold text-slate-600 hover:text-primary transition-colors group"
                            >
                                {link.label}
                                {/* Animated underline */}
                                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary rounded-full group-hover:w-full transition-all duration-300" />
                            </a>
                        ))}
                    </nav>

                    {/* RIGHT: Social Icons + CTA */}
                    <div className="hidden lg:flex items-center gap-5 flex-shrink-0">
                        {/* Social Icons */}
                        <div className="flex items-center gap-3 border-r border-slate-200 pr-5">
                            {[
                                { Icon: FiFacebook, href: '#' },
                                { Icon: FiTwitter, href: '#' },
                                { Icon: FiInstagram, href: '#' },
                                { Icon: FiLinkedin, href: '#' },
                            ].map(({ Icon, href }, i) => (
                                <a
                                    key={i}
                                    href={href}
                                    className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-primary hover:bg-primary/10 transition-all duration-200"
                                >
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <a
                            href="#contact"
                            className="px-6 py-2.5 bg-primary hover:bg-slate-900 text-white text-[13px] font-bold rounded-md uppercase tracking-wider transition-all duration-300 shadow-md shadow-primary/20 hover:shadow-lg"
                        >
                            Book Now
                        </a>
                    </div>

                    {/* Mobile: Hamburger */}
                    <button
                        className="lg:hidden text-slate-700 hover:text-primary transition-colors p-1"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
                    </button>

                </div>
            </header>

            {/* Mobile Menu Drawer */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: "-100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-100%" }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed top-0 left-0 w-full h-[100dvh] bg-[#f8f9fc] z-40 pt-[72px] lg:hidden flex flex-col items-center justify-center gap-8 overflow-hidden"
                    >
                        {navLinks.map((link, i) => (
                            <motion.a
                                key={link.label}
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 30 }}
                                transition={{ duration: 0.4, delay: 0.1 + (i * 0.1) }}
                                className="text-4xl md:text-5xl font-black text-slate-900 hover:text-primary transition-colors"
                            >
                                {link.label}
                            </motion.a>
                        ))}
                        <motion.a
                            href="#contact"
                            onClick={() => setMenuOpen(false)}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.4, delay: 0.1 + (navLinks.length * 0.1) }}
                            className="mt-6 px-10 py-4 bg-primary text-white font-bold rounded-full uppercase tracking-widest text-sm shadow-xl shadow-primary/30 active:scale-95 transition-transform"
                        >
                            Book Consultation
                        </motion.a>

                        {/* Mobile Socials */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4, delay: 0.6 }}
                            className="flex items-center gap-6 mt-10"
                        >
                            {[FiFacebook, FiTwitter, FiInstagram, FiLinkedin].map((Icon, i) => (
                                <a key={i} href="#" className="text-slate-400 hover:text-primary text-2xl transition-colors">
                                    <Icon />
                                </a>
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
