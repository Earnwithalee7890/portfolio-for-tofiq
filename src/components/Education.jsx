
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';
import { profileData } from '../profileData';

const Education = () => {
    const { education } = profileData;

    return (
        <section className="py-20 text-white relative" id="education">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold mb-16 text-center"
                >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">Education</span> & Internships
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-blue-500/40 transition-all hover:shadow-xl hover:shadow-blue-900/10 group relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                                <GraduationCap className="w-24 h-24 text-blue-500 transform rotate-12" />
                            </div>

                            <div className="flex items-start gap-5 relative z-10">
                                <div className="p-3 bg-slate-800 rounded-xl group-hover:bg-slate-700 group-hover:text-white transition-all duration-300">
                                    <GraduationCap className="w-6 h-6 text-blue-500 group-hover:text-white" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{edu.degree}</h3>
                                    <h4 className="text-slate-300 font-medium mb-2">{edu.school}</h4>
                                    <p className="text-sm text-slate-500 mb-4 font-mono">{edu.period}</p>

                                    {edu.grade && (
                                        <div className="flex items-center gap-2 mb-2 text-slate-300">
                                            <Award className="w-4 h-4 text-yellow-500" />
                                            <span>Grade: {edu.grade}</span>
                                        </div>
                                    )}

                                    {edu.details && (
                                        <p className="text-slate-300 text-sm mb-3 italic">
                                            "{edu.details}"
                                        </p>
                                    )}

                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {edu.skills.map((skill, i) => (
                                            <span key={i} className="text-xs px-2 py-1 rounded bg-slate-700 text-slate-300">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
