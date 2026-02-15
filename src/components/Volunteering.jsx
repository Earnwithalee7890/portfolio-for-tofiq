
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, HeartHandshake } from 'lucide-react';
import { profileData } from '../profileData';

const Volunteering = () => {
    const { volunteering } = profileData;

    return (
        <section className="py-20 text-white" id="volunteering">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold mb-16 text-center"
                >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">Volunteering</span> & Impact
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {volunteering.map((vol, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all hover:-translate-y-1 hover:shadow-xl group"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-slate-900 rounded-lg group-hover:scale-110 transition-transform duration-300">
                                    <HeartHandshake className="w-6 h-6 text-blue-500" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white text-lg group-hover:text-blue-400 transition-colors">{vol.role}</h3>
                                    <p className="text-sm text-slate-400 font-medium">{vol.company}</p>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <div className="flex justify-between text-sm text-slate-400">
                                    <span>{vol.period}</span>
                                </div>

                                <div className="inline-block px-3 py-1 bg-slate-700/50 rounded-full text-xs text-slate-300 border border-slate-600">
                                    Cause: {vol.cause}
                                </div>

                                <p className="text-slate-300 text-sm leading-relaxed">
                                    {vol.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Volunteering;
