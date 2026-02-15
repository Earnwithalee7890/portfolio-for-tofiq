
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { profileData } from '../profileData';

const Experience = () => {
    const { experience } = profileData;

    return (
        <section className="py-20 text-white relative" id="experience">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold mb-16 text-center"
                >
                    Work <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">Experience</span>
                </motion.h2>

                <div className="space-y-12 max-w-4xl mx-auto">
                    {experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-8 border-l-2 border-blue-500/30 last:border-0"
                        >
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50"></div>

                            <div className="bg-slate-800/80 backdrop-blur-sm p-6 rounded-xl border border-slate-700 shadow-lg hover:shadow-blue-500/10 transition-all duration-300 group">
                                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                                    <div>
                                        <h3 className="text-xl font-bold text-white flex items-center gap-2 group-hover:text-blue-400 transition-colors">
                                            <Briefcase className="w-5 h-5 text-blue-500" />
                                            {exp.title}
                                        </h3>
                                        <h4 className="text-lg text-slate-300 font-medium mt-1">{exp.company}</h4>
                                    </div>
                                    <div className="text-sm text-slate-400 flex flex-col items-start md:items-end gap-1">
                                        <span className="flex items-center gap-1 bg-slate-900/50 px-3 py-1 rounded-full border border-slate-700/50">
                                            <Calendar className="w-3.5 h-3.5" />
                                            {exp.period}
                                        </span>
                                        <span className="text-xs text-slate-500 px-2">
                                            {exp.duration}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <MapPin className="w-3.5 h-3.5" />
                                            {exp.location}
                                        </span>
                                    </div>
                                </div>

                                <ul className="list-disc list-inside text-slate-400 space-y-2 mb-4 ml-2 marker:text-blue-500">
                                    {exp.description.map((desc, i) => (
                                        <li key={i}>{desc}</li>
                                    ))}
                                </ul>

                                {exp.skills && (
                                    <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-700/50">
                                        {exp.skills.map((skill, i) => (
                                            <span key={i} className="text-xs px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
