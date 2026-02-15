
import React from 'react';
import { motion } from 'framer-motion';

const ButtonShowcase = () => {
    const bgStyle = "p-8 rounded-xl bg-slate-800/50 border border-slate-700 flex flex-col items-center justify-center gap-4 relative overflow-hidden";

    return (
        <section className="py-20 bg-slate-900 relative z-50">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-white mb-12 text-center">
                    Choose Your Header Button Style
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {/* Option 1: The "Neon Cyber" */}
                    <div className={bgStyle}>
                        <span className="text-slate-400 text-sm font-mono">Option 1: Neon Cyber</span>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 bg-transparent border border-blue-500 text-blue-400 font-bold rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_rgba(59,130,246,0.8)] hover:bg-blue-500 hover:text-white transition-all duration-300"
                        >
                            Hire Me
                        </motion.button>
                    </div>

                    {/* Option 2: The "Gradient Pill" (Refined) */}
                    <div className={bgStyle}>
                        <span className="text-slate-400 text-sm font-mono">Option 2: Gradient Pill</span>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-full shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
                        >
                            Hire Me
                        </motion.button>
                    </div>

                    {/* Option 3: The "Glassmorphism" */}
                    <div className={bgStyle}>
                        <span className="text-slate-400 text-sm font-mono">Option 3: Frosted Glass</span>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-full hover:bg-white/20 transition-all duration-300"
                        >
                            Hire Me
                        </motion.button>
                    </div>

                    {/* Option 4: The "Underline Slide" */}
                    <div className={bgStyle}>
                        <span className="text-slate-400 text-sm font-mono">Option 4: Minimal Slide</span>
                        <motion.button
                            className="px-8 py-3 text-white font-bold relative group overflow-hidden"
                        >
                            <span className="relative z-10">Hire Me</span>
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                        </motion.button>
                    </div>

                    {/* Option 5: The "Liquid Fill" */}
                    <div className={bgStyle}>
                        <span className="text-slate-400 text-sm font-mono">Option 5: Liquid Fill</span>
                        <motion.button
                            className="px-8 py-3 border border-blue-500 text-blue-400 font-bold rounded-full relative overflow-hidden group"
                        >
                            <span className="relative z-10 group-hover:text-white transition-colors duration-300">Hire Me</span>
                            <div className="absolute inset-0 bg-blue-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
                        </motion.button>
                    </div>

                    {/* Option 6: The "Glowing Outline" */}
                    <div className={bgStyle}>
                        <span className="text-slate-400 text-sm font-mono">Option 6: Glowing Outline</span>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="px-8 py-3 bg-transparent border-2 border-indigo-500 text-white font-bold rounded-full hover:shadow-[0_0_20px_rgba(99,102,241,0.6)] hover:border-indigo-400 transition-all duration-300"
                        >
                            Hire Me
                        </motion.button>
                    </div>

                    {/* Option 7: The "Soft 3D" */}
                    <div className={bgStyle}>
                        <span className="text-slate-400 text-sm font-mono">Option 7: Soft 3D</span>
                        <motion.button
                            whileHover={{ y: -2 }}
                            whileTap={{ y: 0 }}
                            className="px-8 py-3 bg-blue-600 text-white font-bold rounded-xl shadow-[0_4px_0_rgb(30,58,138)] hover:shadow-[0_6px_0_rgb(30,58,138)] hover:bg-blue-500 transition-all duration-150"
                        >
                            Hire Me
                        </motion.button>
                    </div>

                    {/* Option 8: The "Pulse Ring" */}
                    <div className={bgStyle}>
                        <span className="text-slate-400 text-sm font-mono">Option 8: Pulse Ring</span>
                        <div className="relative">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                className="px-8 py-3 bg-indigo-600 text-white font-bold rounded-full relative z-10"
                            >
                                Hire Me
                            </motion.button>
                            <div className="absolute inset-0 bg-indigo-600 rounded-full animate-ping opacity-75"></div>
                        </div>
                    </div>

                    {/* Option 9: The "Double Border" */}
                    <div className={bgStyle}>
                        <span className="text-slate-400 text-sm font-mono">Option 9: Double Border</span>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="px-8 py-3 bg-slate-900 border-4 border-double border-blue-500 text-white font-bold rounded-full hover:bg-slate-800 transition-colors"
                        >
                            Hire Me
                        </motion.button>
                    </div>

                    {/* Option 10: The "Spotlight" */}
                    <div className={bgStyle}>
                        <span className="text-slate-400 text-sm font-mono">Option 10: Shine Spotlight</span>
                        <motion.button
                            className="px-8 py-3 bg-slate-800 text-white font-bold rounded-full relative overflow-hidden group border border-slate-600"
                        >
                            <span className="relative z-10">Hire Me</span>
                            <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                        </motion.button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ButtonShowcase;
