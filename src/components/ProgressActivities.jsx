import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getActivities } from '../lib/activityStore';
import { CalendarDays, Tag, Image as ImageIcon, ChevronRight, ChevronLeft, X } from 'lucide-react';

const ProgressActivities = () => {
    const [activities, setActivities] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        const fetchActivities = async () => {
            const data = await getActivities();
            setActivities(data);
            setLoading(false);
        };
        fetchActivities();
    }, []);

    if (loading) return (
        <div className="py-20 text-center text-slate-400">Loading progress updates...</div>
    );

    if (activities.length === 0) return null; // Don't show the section if no activities

    return (
        <section className="py-24 relative" id="activities">
            <div className="container mx-auto px-6">

                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
                        Recent Progress
                    </span>
                </h2>

                <div className="max-w-4xl mx-auto">
                    <div className="relative border-l-2 border-slate-800/80 ml-4 md:ml-8 pb-12">

                        {activities.map((activity, index) => (
                            <motion.div
                                key={activity.id}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="mb-16 relative pl-10 md:pl-14"
                            >
                                {/* Timeline Dot */}
                                <div className="absolute w-6 h-6 bg-slate-900 border-4 border-blue-500 rounded-full -left-[13px] top-1.5 shadow-[0_0_15px_rgba(59,130,246,0.6)]"></div>

                                {/* Content Card */}
                                <div className="bg-[#0f172a]/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 md:p-8 hover:border-blue-500/30 transition-colors shadow-xl">

                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                        <h3 className="text-2xl font-bold text-slate-100">{activity.title}</h3>
                                        <div className="flex items-center gap-2 text-blue-400 text-sm font-medium bg-blue-500/10 px-3 py-1.5 rounded-full w-max">
                                            <CalendarDays className="w-4 h-4" />
                                            {new Date(activity.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                                        </div>
                                    </div>

                                    <p className="text-slate-300 leading-relaxed mb-6 whitespace-pre-line">
                                        {activity.description}
                                    </p>

                                    {/* Image Gallery Grid */}
                                    {activity.images && activity.images.length > 0 && (
                                        <div className={`grid gap-3 mb-6 ${activity.images.length === 1 ? 'grid-cols-1 md:w-2/3' :
                                                activity.images.length === 2 ? 'grid-cols-2' :
                                                    activity.images.length === 3 ? 'grid-cols-2 md:grid-cols-3' :
                                                        'grid-cols-2 md:grid-cols-4'
                                            }`}>
                                            {activity.images.map((img, i) => (
                                                <div
                                                    key={i}
                                                    onClick={() => setSelectedImage(img)}
                                                    className={`relative rounded-xl overflow-hidden cursor-pointer group bg-slate-900 ${activity.images.length === 3 && i === 2 ? 'col-span-2 md:col-span-1' : ''
                                                        } ${activity.images.length === 1 ? 'aspect-video' : 'aspect-square'}`}
                                                >
                                                    <img
                                                        src={img}
                                                        alt="Progress"
                                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                    />
                                                    <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/20 transition-all flex items-center justify-center">
                                                        <ImageIcon className="text-white opacity-0 group-hover:opacity-100 h-8 w-8 drop-shadow-lg scale-50 group-hover:scale-100 transition-all" />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {/* Tags */}
                                    {activity.tags && activity.tags.length > 0 && (
                                        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-800/60">
                                            {activity.tags.map(tag => (
                                                <span key={tag} className="flex items-center gap-1 text-xs text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded-md">
                                                    <Tag className="w-3 h-3" /> {tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                </div>
                            </motion.div>
                        ))}

                    </div>
                </div>
            </div>

            {/* Fullscreen Image Modal Overlay */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-slate-950/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-12 cursor-pointer"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-6 right-6 text-white/50 hover:text-white bg-slate-900/50 hover:bg-slate-800 rounded-full p-2 transition-all p-2"
                            onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
                        >
                            <X className="w-6 h-6" />
                        </button>
                        <motion.img
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            src={selectedImage}
                            alt="Fullscreen"
                            className="max-w-full max-h-full rounded-2xl shadow-2xl cursor-default"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>

        </section>
    );
};

export default ProgressActivities;
