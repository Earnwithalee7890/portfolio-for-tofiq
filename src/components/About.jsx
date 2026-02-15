
import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../profileData';

const About = () => {
    return (
        <section className="py-20 relative overflow-hidden" id="about">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl font-bold mb-8 text-center">
                        <span className="text-blue-400">About</span> Me
                    </h2>

                    <div className="bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 shadow-xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative z-10 text-slate-300 space-y-4 text-lg leading-relaxed whitespace-pre-line">
                            <p>
                                I have worked as a <span className="text-blue-400 font-semibold">Plant Breeder</span> on several crops, including wheat, rice, maize, cotton, and more.
                                My main goal is to develop <span className="text-indigo-400 font-semibold">improved crop varieties</span> that grow well, adapt to climate challenges, and support sustainable farming.
                            </p>
                            <p>
                                Currently, I serve as a <span className="text-cyan-400 font-semibold">Campaign Activation Coordinator</span> at Bayer, where I connect research with real-world agricultural practices.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
