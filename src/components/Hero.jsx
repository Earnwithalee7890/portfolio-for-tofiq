import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../profileData';
import { MapPin, Phone } from 'lucide-react';

const Hero = () => {
    const { personalInfo } = profileData;

    return (
        <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-32 pb-20" id="home">
            {/* Background Plus Pattern Overlay */}
            <div
                className="absolute inset-0 z-0 pointer-events-none opacity-[0.15]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M29 29V0h2v29h29v2H31v29h-2V31H0v-2h29z' fill='%2338bdf8' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                    backgroundSize: '60px 60px'
                }}
            ></div>

            <div className="container mx-auto px-6 z-10 flex flex-col xl:flex-row items-center justify-between gap-12 lg:gap-20">

                {/* Left Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex-1 flex flex-col justify-center items-start text-left w-full mt-10 md:mt-0"
                >
                    {/* Greeting Badge */}
                    <div className="inline-flex items-center px-5 py-1.5 rounded-full bg-[#1e3a8a]/40 border border-[#3b82f6]/50 shadow-[0_0_15px_rgba(59,130,246,0.3)] mb-8">
                        <span className="text-[#60a5fa] text-xs md:text-sm font-bold uppercase tracking-[0.2em] leading-none py-1">
                            HELLO, I'M
                        </span>
                    </div>

                    {/* Name */}
                    <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black text-slate-100 tracking-tight mb-8 leading-none drop-shadow-lg">
                        {personalInfo.name}
                    </h1>

                    {/* Info Card */}
                    <div className="bg-[#0f172a]/70 backdrop-blur-xl rounded-[2rem] p-8 md:p-10 border border-slate-700/60 shadow-[0_10px_40px_rgba(0,0,0,0.5)] mb-8 w-full max-w-3xl relative overflow-hidden group">

                        {/* Subtle inner highlight */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                        <h2 className="text-3xl md:text-[2.5rem] font-bold text-[#38bdf8] mb-6 leading-tight">
                            {personalInfo.headline[0]}
                        </h2>

                        <div className="h-1.5 w-24 bg-[#3b82f6] shadow-[0_0_10px_rgba(59,130,246,0.8)] rounded-full mb-8 relative"></div>

                        <p className="text-base md:text-xl font-medium flex flex-wrap items-center gap-y-3">
                            {personalInfo.headline.slice(1).map((item, index) => (
                                <React.Fragment key={index}>
                                    {index > 0 && <span className="mx-3 md:mx-4 text-slate-600 text-sm md:text-base">•</span>}
                                    <span className={index % 2 === 0 ? "text-[#a5b4fc]" : "text-slate-300"}>
                                        {item}
                                    </span>
                                </React.Fragment>
                            ))}
                        </p>
                    </div>

                    {/* Contact Pills */}
                    <div className="flex flex-col sm:flex-row gap-4 w-full max-w-3xl">
                        <div className="flex-[3] flex items-center gap-4 bg-[#0f172a]/60 backdrop-blur-md border border-slate-800 rounded-2xl p-4 shadow-lg hover:border-slate-600 transition-colors">
                            <div className="bg-[#1e293b] p-2 rounded-full">
                                <MapPin className="text-[#38bdf8] w-5 h-5 shrink-0" />
                            </div>
                            <span className="text-slate-300 text-sm md:text-base">{personalInfo.location}</span>
                        </div>
                        <div className="flex-[2] flex items-center gap-4 bg-[#0f172a]/60 backdrop-blur-md border border-slate-800 rounded-2xl p-4 shadow-lg hover:border-slate-600 transition-colors">
                            <div className="bg-[#1e293b] p-2 rounded-full">
                                <Phone className="text-[#38bdf8] w-5 h-5 shrink-0" />
                            </div>
                            <span className="text-slate-300 text-sm md:text-base">{personalInfo.phone}</span>
                        </div>
                    </div>
                </motion.div>

                {/* Right Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="flex-shrink-0 relative mt-12 md:mt-16 xl:mt-0 z-10 w-full xl:w-auto flex justify-center"
                >
                    <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[420px] md:h-[420px] lg:w-[500px] lg:h-[500px] mx-auto group">

                        {/* Huge glow behind image */}
                        <div className="absolute inset-0 bg-blue-600/30 blur-[60px] md:blur-[100px] rounded-full mix-blend-screen pointer-events-none transition-all duration-700 group-hover:bg-blue-500/40 group-hover:blur-[80px] md:group-hover:blur-[120px]"></div>

                        {/* Complex outer border layers matching the design */}
                        <div className="absolute inset-[-4px] rounded-full bg-gradient-to-tr from-[#3b82f6] via-[#10b981] to-[#3b82f6] shadow-[0_0_20px_rgba(59,130,246,0.3)] md:shadow-[0_0_40px_rgba(59,130,246,0.3)] animate-[spin_10s_linear_infinite]"></div>

                        {/* Container that actually holds the image, with its own border */}
                        <div className="absolute inset-[3px] rounded-full bg-[#0f172a] overflow-hidden border-4 border-[#1e293b]">
                            <img
                                src={personalInfo.image}
                                alt={personalInfo.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                style={{ objectPosition: "center top" }}
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "https://ui-avatars.com/api/?name=Toufique+Ahmed&background=1e3a8a&color=fff&size=512";
                                }}
                            />
                        </div>
                    </div>
                </motion.div>
            </div>

        </section>
    );
};

export default Hero;
