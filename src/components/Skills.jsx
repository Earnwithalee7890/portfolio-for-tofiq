
import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../profileData';

const Skills = () => {
    const { skills } = profileData;
    const categories = Object.keys(skills);

    return (
        <section className="py-20 text-white relative" id="skills">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold mb-16 text-center"
                >
                    Skills & <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">Expertise</span>
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-slate-600 transition-colors relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>

                            <h3 className="text-xl font-bold text-white mb-6 border-b border-slate-800 pb-4 flex items-center gap-2">
                                <div className="w-2 h-8 bg-blue-500 rounded-full mr-2"></div>
                                {category.replace(/([A-Z])/g, ' $1').trim()}
                            </h3>

                            <div className="flex flex-wrap gap-2">
                                {skills[category].map((skill, i) => (
                                    <motion.span
                                        key={i}
                                        whileHover={{ scale: 1.05, backgroundColor: "#3b82f6", color: "#ffffff", borderColor: "#3b82f6" }}
                                        className="px-4 py-2 bg-slate-800 text-slate-300 rounded-lg text-sm border border-slate-700 transition-all cursor-default font-medium"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
