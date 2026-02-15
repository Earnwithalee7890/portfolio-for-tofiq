
import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../profileData';
import { Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Hero = () => {
    const { personalInfo } = profileData;

    return (
        <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden pt-32 pb-20" id="home">
            {/* Static Background Pattern for Performance */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[100px]"></div>
            </div>

            <div className="container mx-auto px-6 z-10 flex flex-col md:flex-row items-center gap-12">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "out" }}
                    className="flex-1 text-center md:text-left"
                >
                    <div className="inline-block px-4 py-1.5 mb-4 border border-blue-500/30 rounded-full bg-blue-500/10 backdrop-blur-sm">
                        <h2 className="text-blue-400 font-semibold tracking-wider uppercase text-sm">Hello, I'm</h2>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                            {personalInfo.name}
                        </span>
                    </h1>

                    <div className="mb-8 p-6 bg-slate-800/40 backdrop-blur-md rounded-2xl border border-slate-700/50 shadow-xl">
                        <p className="text-2xl md:text-4xl font-bold mb-3 leading-tight">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                                {personalInfo.headline[0]}
                            </span>
                        </p>
                        <div className="h-1 w-24 bg-blue-500 rounded-full my-4 mx-auto md:mx-0"></div>
                        <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-light">
                            {personalInfo.headline.slice(1).map((item, index) => (
                                <span key={index}>
                                    {index > 0 && <span className="mx-2 text-slate-600">•</span>}
                                    <span className={index % 2 === 0 ? "text-indigo-300 font-medium" : "text-slate-300"}>
                                        {item}
                                    </span>
                                </span>
                            ))}
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 justify-center md:justify-start items-center text-slate-300 mb-10 text-sm md:text-base">
                        <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-lg">
                            <MapPin className="w-5 h-5 text-blue-400" />
                            <span>{personalInfo.location}</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-lg">
                            <Phone className="w-5 h-5 text-blue-400" />
                            <span>{personalInfo.phone}</span>
                        </div>
                    </div>

                    <div className="flex gap-4 justify-center md:justify-start">
                        <a
                            href="#contact"
                            className="px-8 py-3.5 border border-blue-500 text-blue-400 font-bold rounded-full relative overflow-hidden group shadow-lg hover:shadow-blue-500/20 transition-all"
                        >
                            <span className="relative z-10 group-hover:text-white transition-colors duration-300">Contact Me</span>
                            <div className="absolute inset-0 bg-blue-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
                        </a>

                        <a
                            href={personalInfo.socials.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3.5 border border-slate-600 text-slate-400 rounded-full relative overflow-hidden group hover:border-blue-500 transition-all"
                        >
                            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                                <Linkedin className="w-6 h-6" />
                            </span>
                            <div className="absolute inset-0 bg-blue-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
                        </a>

                        <a
                            href={`mailto:${personalInfo.email}`}
                            className="p-3.5 border border-slate-600 text-slate-400 rounded-full relative overflow-hidden group hover:border-blue-500 transition-all"
                        >
                            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                                <Mail className="w-6 h-6" />
                            </span>
                            <div className="absolute inset-0 bg-blue-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
                        </a>
                    </div>
                </motion.div>

                {/* Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex-1 relative"
                >
                    <div className="relative w-72 h-72 md:w-[450px] md:h-[450px] mx-auto">
                        {/* Animated border rings */}
                        <div className="absolute inset-[-10px] rounded-full border-2 border-blue-500/20 md:border-dashed"></div>
                        <div className="absolute inset-[-25px] rounded-full border border-indigo-500/10"></div>

                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-indigo-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                        <img
                            src={personalInfo.image}
                            alt={personalInfo.name}
                            className="relative w-full h-full object-cover rounded-full border-4 border-slate-800 shadow-2xl z-10"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = "https://ui-avatars.com/api/?name=Toufique+Ahmed&background=3b82f6&color=fff&size=512";
                            }}
                        />
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 10 }}
                transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500"
            >
                <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center p-1">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
