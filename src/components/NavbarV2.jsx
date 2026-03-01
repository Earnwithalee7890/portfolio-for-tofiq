
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const NavbarV2 = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Activities', href: '#activities' },
        { name: 'Education', href: '#education' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <div className="text-xl font-bold text-white tracking-widest uppercase flex items-center">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
                        Toufique
                    </span>
                    <Link to="/admin" className="ml-3 text-slate-600 hover:text-slate-300 transition-colors" title="Admin Login">
                        <Lock className="w-4 h-4" />
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="px-5 py-2 relative overflow-hidden group rounded-lg transition-all"
                        >
                            <span className="relative z-10 text-slate-300 group-hover:text-white font-medium text-sm tracking-wide uppercase transition-colors duration-300">
                                {link.name}
                            </span>
                            {/* Liquid Fill Effect for Links as well (Option 5) */}
                            <div className="absolute inset-0 bg-white/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out rounded-lg"></div>
                        </a>
                    ))}

                    {/* Hire Me Button - Pulse Ring (Option 8) */}
                    <div className="relative ml-4">
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-bold transition-all shadow-lg z-10 block"
                        >
                            Hire Me
                        </motion.a>
                        <div className="absolute inset-0 bg-indigo-600 rounded-full animate-ping opacity-30"></div>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-slate-300 hover:text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-slate-900 border-t border-slate-800 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-slate-300 hover:text-blue-400 text-lg font-medium"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default NavbarV2;
