import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowLeft, FiArrowRight, FiStar } from './icons/Icons';

const testimonialsData = [
    {
        id: 1,
        text: "Dr. Krushnadas has made it possible for me to recover quickly and seamlessly. Outstanding care and true professionalism throughout my entire treatment journey.",
        name: "Rahul Sharma",
        role: "Business Owner",
        rating: 5,
        isActive: false // We'll use index for active state
    },
    {
        id: 2,
        text: "I've been looking for the right specialist for a year now, and finding this clinic made all the difference. The minimally invasive procedure was painless.",
        name: "Priya Patel",
        role: "Teacher",
        rating: 5,
        isActive: true
    },
    {
        id: 3,
        text: "Dr. Radadiya stands out as the most empathetic and effective interventional radiologist I've ever met. The 24-hour discharge was exactly as promised.",
        name: "Amit Desai",
        role: "Software Engineer",
        rating: 5,
        isActive: false
    },
    {
        id: 4,
        text: "The precision and care taken during my surgery were phenomenal. I highly recommend Dr. Krushnadas to anyone seeking advanced minimally invasive treatments.",
        name: "Neha Gupta",
        role: "Architect",
        rating: 5,
        isActive: false
    }
];

const Testimonials = () => {
    // Current starting index of the 3 visible cards
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex + 1) % testimonialsData.length
        );
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
        );
    };

    // Calculate which 3 cards to show based on currentIndex
    const getVisibleCards = () => {
        const visible = [];
        for (let i = 0; i < 3; i++) {
            const index = (currentIndex + i) % testimonialsData.length;
            visible.push({ ...testimonialsData[index], isCenter: i === 1 });
        }
        return visible;
    };

    const visibleCards = getVisibleCards();

    return (
        <section id="testimonials" className="py-24 bg-[#f8f9fc] relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">

                {/* Header Area */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-block px-5 py-1.5 border border-primary/30 rounded-full text-xs font-bold text-primary uppercase tracking-widest mb-5 bg-primary/5">
                            Reviews
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
                            Patient <span className="text-primary">Testimonials</span>
                        </h2>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-slate-500 text-lg font-medium"
                    >
                        We provide all the advantage that can simplify your treatment and recovery without any further issues.
                    </motion.p>
                </div>

                {/* Cards Container */}
                <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 mb-16 relative min-h-[250px]">
                    <AnimatePresence mode="popLayout">
                        {visibleCards.map((testimonial, idx) => (
                            <motion.div
                                key={`${testimonial.id}-${currentIndex}`} // Force re-render for animation
                                initial={{ opacity: 0, scale: 0.9, x: idx === 0 ? -50 : idx === 2 ? 50 : 0 }}
                                animate={{ opacity: 1, scale: 1, x: 0 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className={`flex-1 p-8 rounded-2xl flex flex-col justify-between transition-colors duration-300 ${testimonial.isCenter
                                    ? 'bg-[#f4f7ff] border-transparent shadow-sm' // Blue-ish tint for center card
                                    : 'bg-[#fafafa] border border-slate-100 shadow-sm' // Light gray for side cards
                                    }`}
                            >
                                <p className="text-slate-600 font-medium leading-relaxed mb-8">
                                    "{testimonial.text}"
                                </p>

                                <div className="flex items-center justify-between mt-auto">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-lg border border-primary/30">
                                            {testimonial.name.charAt(0)}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-sm leading-tight">{testimonial.name}</h4>
                                            <p className={`text-[11px] font-medium ${testimonial.isCenter ? 'text-blue-500' : 'text-primary'}`}>
                                                {testimonial.role}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center text-yellow-500 text-sm gap-0.5">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <FiStar key={i} fill="currentColor" />
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-center items-center gap-4">
                    <button
                        onClick={handlePrev}
                        className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                        aria-label="Previous testimonial"
                    >
                        <FiArrowLeft className="w-5 h-5" />
                    </button>
                    <button
                        onClick={handleNext}
                        className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white hover:bg-[#e04b4b] shadow-lg shadow-primary/30 transition-all hover:scale-105"
                        aria-label="Next testimonial"
                    >
                        <FiArrowRight className="w-5 h-5" />
                    </button>
                </div>

            </div>
        </section>
    );
};

export default Testimonials;
