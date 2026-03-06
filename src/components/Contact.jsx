import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiPhone, FiArrowRight, FiCheck } from './icons/Icons';

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [message, setMessage] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    // Doctor's WhatsApp number (replace with actual number, digits only, with country code)
    const WHATSAPP_NUMBER = '919876543210';

    // Read pre-filled message from Procedures "Enquire" click
    useEffect(() => {
        const stored = sessionStorage.getItem('enquiryMessage');
        if (stored) setMessage(stored);

        const handler = (e) => {
            setMessage(e.detail.message);
        };
        window.addEventListener('procedureEnquiry', handler);
        return () => window.removeEventListener('procedureEnquiry', handler);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSubmitting || isSuccess) return;

        setIsSubmitting(true);

        // Build WhatsApp message
        const wpText = [
            `👋 *New Enquiry from Website*`,
            ``,
            `*Name:* ${name}`,
            `*Phone:* ${phone}`,
            `*Email:* ${email}`,
            ``,
            `*Message:*`,
            message,
        ].join('\n');

        const wpUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(wpText)}`;

        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            // Open WhatsApp
            window.open(wpUrl, '_blank', 'noopener,noreferrer');
            // Clear session storage
            sessionStorage.removeItem('enquiryMessage');

            // Reset after 5 seconds
            setTimeout(() => {
                setIsSuccess(false);
                setName(''); setPhone(''); setEmail(''); setMessage('');
            }, 5000);
        }, 800);
    };

    return (
        <section id="contact" className="py-24 bg-[#f8f9fc] relative flex items-center justify-center min-h-screen overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/30 -skew-x-12 translate-x-32 -z-10"></div>
            <div className="absolute top-40 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>

            <div className="container mx-auto px-4 md:px-8">

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Column: Text & Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col pr-0 lg:pr-10"
                    >
                        <h4 className="text-sm font-bold text-primary uppercase tracking-widest mb-4 flex items-center gap-3">
                            <span className="w-8 h-px bg-primary"></span>
                            We're Here To Help
                        </h4>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-800 leading-[1.15] mb-6">
                            Discuss Your<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                                Healthcare
                            </span><br />
                            Treatment Needs
                        </h2>
                        <p className="text-slate-600 mb-12 max-w-md text-base md:text-lg leading-relaxed">
                            Are you looking for top-quality, minimally invasive medical solutions tailored to your condition? Reach out to us for a consultation.
                        </p>

                        <div className="flex flex-col gap-8 lg:gap-10">
                            {/* Email */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="flex items-center gap-6 group"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center text-primary text-2xl group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                                    <FiMail />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm text-slate-400 font-semibold mb-1 tracking-wide uppercase">E-mail</span>
                                    <a href="mailto:contact@drradadiya.com" className="text-slate-800 text-lg font-bold hover:text-primary transition-colors">
                                        contact@drradadiya.com
                                    </a>
                                </div>
                            </motion.div>

                            {/* Phone */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="flex items-center gap-6 group"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center text-primary text-2xl group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                                    <FiPhone />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm text-slate-400 font-semibold mb-1 tracking-wide uppercase">Phone number</span>
                                    <a href="tel:+919876543210" className="text-slate-800 text-lg font-bold hover:text-primary transition-colors">
                                        +91 98765 43210
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right Column: Contact Form Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-100 w-full relative z-10"
                    >
                        <form className="space-y-6 flex flex-col" onSubmit={handleSubmit}>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Name */}
                                <div className="space-y-2 relative">
                                    <label className="block text-sm font-semibold text-slate-600 pl-1">Name</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all font-medium"
                                        placeholder="Jane Smith"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>

                                {/* Phone */}
                                <div className="space-y-2 relative">
                                    <label className="block text-sm font-semibold text-slate-600 pl-1">Phone</label>
                                    <input
                                        type="tel"
                                        required
                                        className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all font-medium"
                                        placeholder="+91 00000 00000"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div className="space-y-2 relative">
                                <label className="block text-sm font-semibold text-slate-600 pl-1">Email</label>
                                <input
                                    type="email"
                                    required
                                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all font-medium"
                                    placeholder="jane@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            {/* Message */}
                            <div className="space-y-2 relative flex-grow">
                                <label className="block text-sm font-semibold text-slate-600 pl-1">Message</label>
                                {message && (
                                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-primary bg-primary/8 border border-primary/20 rounded-full px-3 py-1 mb-1">
                                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                                        Auto-filled from procedure selection
                                    </span>
                                )}
                                <textarea
                                    rows="4"
                                    required
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all font-medium resize-none"
                                    placeholder="Briefly describe your condition..."
                                ></textarea>
                            </div>

                            {/* Animated Submit Button */}
                            <div className="pt-4">
                                <button
                                    type="submit"
                                    disabled={isSubmitting || isSuccess}
                                    className={`relative flex items-center h-16 rounded-full w-full max-w-[280px] overflow-hidden transition-all duration-300 shadow-xl ${isSuccess ? 'bg-emerald-500 shadow-emerald-500/20' : 'bg-primary hover:bg-slate-800 shadow-primary/20 hover:shadow-slate-800/20 hover:-translate-y-1'
                                        }`}
                                >
                                    {/* Text Container */}
                                    <div className="absolute inset-0 flex items-center w-full">
                                        <AnimatePresence mode="wait">
                                            {!isSuccess ? (
                                                <motion.span
                                                    key="default-text"
                                                    initial={{ opacity: 0, x: 20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    exit={{ opacity: 0, x: -20 }}
                                                    className="w-full text-center pl-2 font-bold text-[15px] tracking-wide text-white"
                                                >
                                                    {isSubmitting ? 'Sending...' : 'Book Consultation'}
                                                </motion.span>
                                            ) : (
                                                <motion.span
                                                    key="success-text"
                                                    initial={{ opacity: 0, x: -30 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    className="w-full text-center pr-8 font-bold text-[15px] tracking-wide text-white"
                                                >
                                                    Successful!
                                                </motion.span>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    {/* Icon Container - Starts left, moves right on success */}
                                    <motion.div
                                        animate={{
                                            left: isSuccess ? 'calc(100% - 56px)' : '8px',
                                            rotate: isSubmitting ? 360 : 0
                                        }}
                                        transition={{
                                            left: { type: "spring", stiffness: 300, damping: 30 },
                                            rotate: { duration: 1, repeat: isSubmitting ? Infinity : 0, ease: "linear" }
                                        }}
                                        className={`absolute w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md z-10 ${isSuccess ? 'text-emerald-500' : 'text-primary'
                                            }`}
                                    >
                                        <AnimatePresence mode="wait">
                                            {isSuccess ? (
                                                <motion.div
                                                    key="check"
                                                    initial={{ scale: 0, rotate: -90 }}
                                                    animate={{ scale: 1, rotate: 0 }}
                                                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                                                >
                                                    <FiCheck className="w-5 h-5 stroke-[3]" />
                                                </motion.div>
                                            ) : (
                                                <motion.div
                                                    key="arrow"
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                >
                                                    {isSubmitting ? (
                                                        <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                                                    ) : (
                                                        <FiArrowRight className="w-5 h-5" />
                                                    )}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                </button>
                            </div>

                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
