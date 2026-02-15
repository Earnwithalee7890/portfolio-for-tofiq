
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Linkedin, Phone } from 'lucide-react';
import { profileData } from '../profileData';

const Contact = () => {
    const { personalInfo } = profileData;

    return (
        <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950" id="contact">
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">
                        Get In <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">Touch</span>
                    </h2>
                    <p className="text-slate-400 mb-12 text-lg max-w-2xl mx-auto">
                        I'm currently looking for new opportunities and collaborations in agricultural research and campaign activation. Feel free to reach out!
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-16">
                        <ContactCard
                            icon={<Linkedin className="w-6 h-6" />}
                            title="LinkedIn"
                            value="Toufique Ahmed"
                            link={personalInfo.socials.linkedin}
                            delay={0}
                        />
                        <ContactCard
                            icon={<Phone className="w-6 h-6" />}
                            title="Phone"
                            value={personalInfo.phone}
                            link={`tel:${personalInfo.phone}`}
                            delay={0.1}
                        />
                        <ContactCard
                            icon={<Mail className="w-6 h-6" />}
                            title="Email"
                            value={personalInfo.email}
                            link={`mailto:${personalInfo.email}`}
                            delay={0.2}
                        />
                        <ContactCard
                            icon={<MapPin className="w-6 h-6" />}
                            title="Address"
                            value={personalInfo.location}
                            delay={0.3}
                        />
                    </div>

                    <div className="pt-8 border-t border-slate-800 text-slate-500 text-sm">
                        <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const ContactCard = ({ icon, title, value, link, delay }) => (
    <motion.a
        href={link}
        target={link?.startsWith('http') ? '_blank' : undefined}
        rel={link?.startsWith('http') ? 'noopener noreferrer' : undefined}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay }}
        className={`flex items-center gap-4 p-6 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-blue-500/50 hover:bg-slate-800 transition-all group ${!link ? 'cursor-default' : 'cursor-pointer hover:-translate-y-1'}`}
    >
        <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
            {icon}
        </div>
        <div className="text-left">
            <h3 className="text-sm font-medium text-slate-400">{title}</h3>
            <p className="text-white font-medium break-all">{value}</p>
        </div>
    </motion.a>
);

export default Contact;
