import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginAdmin, logoutAdmin, isAdminLoggedIn, addActivity, deleteActivity, getActivities } from '../lib/activityStore';
import { Plus, Image as ImageIcon, X, Loader2, LogOut, Trash2 } from 'lucide-react';

const AdminPanel = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    // Login State
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');

    // Activity State
    const [activities, setActivities] = useState([]);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Form State
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [tagsInput, setTagsInput] = useState('');
    const [selectedFiles, setSelectedFiles] = useState([]);

    useEffect(() => {
        const checkAuth = async () => {
            const status = isAdminLoggedIn();
            setIsLoggedIn(status);
            if (status) {
                const data = await getActivities();
                setActivities(data);
            }
            setLoading(false);
        };
        checkAuth();
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setLoginError('');
        try {
            await loginAdmin(email, password);
            setIsLoggedIn(true);
            const data = await getActivities();
            setActivities(data);
        } catch (err) {
            setLoginError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = () => {
        logoutAdmin();
        setIsLoggedIn(false);
        navigate('/');
    };

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        if (files.length + selectedFiles.length > 5) {
            alert('You can only upload up to 5 images per activity.');
            return;
        }
        setSelectedFiles(prev => [...prev, ...files].slice(0, 5));
    };

    const removeFile = (index) => {
        setSelectedFiles(prev => prev.filter((_, i) => i !== index));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (selectedFiles.length === 0) {
            alert('Please add at least one image.');
            return;
        }

        setIsSubmitting(true);
        const tags = tagsInput.split(',').map(tag => tag.trim()).filter(Boolean);

        try {
            await addActivity({ title, date, description, tags }, selectedFiles);

            // Reset Form
            setTitle('');
            setDate('');
            setDescription('');
            setTagsInput('');
            setSelectedFiles([]);

            // Refresh
            const data = await getActivities();
            setActivities(data);
        } catch (err) {
            alert('Failed to save activity: ' + err.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm("Delete this activity?")) return;
        await deleteActivity(id);
        setActivities(activities.filter(a => a.id !== id));
    };

    if (loading) return <div className="min-h-screen flex text-white justify-center items-center bg-slate-950">Loading...</div>;

    if (!isLoggedIn) return (
        <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4">
            <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl">
                <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400 mb-6 text-center">
                    Admin Portal
                </h1>
                {loginError && <div className="bg-red-500/10 text-red-400 p-3 rounded-lg mb-4 text-sm">{loginError}</div>}
                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="text-sm text-slate-400 mb-1 block">Email</label>
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)} required className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-white focus:border-blue-500 outline-none" />
                    </div>
                    <div>
                        <label className="text-sm text-slate-400 mb-1 block">Password</label>
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} required className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-white focus:border-blue-500 outline-none" />
                    </div>
                    <button type="submit" disabled={loading} className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition">
                        {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                        Login to Dashboard
                    </button>
                    <button type="button" onClick={() => navigate('/')} className="w-full text-slate-500 text-sm mt-4 hover:text-white transition">
                        &larr; Back to Portfolio
                    </button>
                </form>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200">
            {/* Nav */}
            <div className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <button onClick={() => navigate('/')} className="text-slate-400 hover:text-white transition">&larr; Public Site</button>
                        <h1 className="text-xl font-bold text-blue-400 border-l border-slate-700 pl-4">Activity Dashboard</h1>
                    </div>
                    <button onClick={handleLogout} className="flex items-center gap-2 text-red-400 hover:text-red-300 bg-red-400/10 px-4 py-2 rounded-lg transition">
                        <LogOut className="w-4 h-4" /> Sign Out
                    </button>
                </div>
            </div>

            <div className="container mx-auto px-6 py-12 flex flex-col lg:flex-row gap-12">

                {/* Publish Form */}
                <div className="flex-1">
                    <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 lg:p-8 shadow-xl">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <Plus className="text-blue-500" /> New Activity Progress
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-6">

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="text-sm text-slate-400 mb-1 block">Activity Title *</label>
                                    <input type="text" value={title} onChange={e => setTitle(e.target.value)} required className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-white focus:border-blue-500 outline-none" placeholder="e.g., Field Trial Day 1" />
                                </div>
                                <div>
                                    <label className="text-sm text-slate-400 mb-1 block">Date *</label>
                                    <input type="date" value={date} onChange={e => setDate(e.target.value)} required className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-white focus:border-blue-500 outline-none" />
                                </div>
                            </div>

                            <div>
                                <label className="text-sm text-slate-400 mb-1 block">Description *</label>
                                <textarea value={description} onChange={e => setDescription(e.target.value)} required rows="4" className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-white focus:border-blue-500 outline-none resize-none" placeholder="Describe the activity, findings, or progress..."></textarea>
                            </div>

                            <div>
                                <label className="text-sm text-slate-400 mb-1 block">Tags (Comma separated)</label>
                                <input type="text" value={tagsInput} onChange={e => setTagsInput(e.target.value)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-white focus:border-blue-500 outline-none" placeholder="e.g., Field Work, Research, Wheat" />
                            </div>

                            {/* Image Uploader */}
                            <div className="border-2 border-dashed border-slate-700 rounded-xl p-6 text-center hover:border-blue-500/50 transition bg-slate-950/50">
                                <label className="cursor-pointer flex flex-col items-center">
                                    <ImageIcon className="w-8 h-8 text-slate-500 mb-2" />
                                    <span className="text-sm text-slate-400 mb-1">Click to upload images (Max 5)</span>
                                    <span className="text-xs text-slate-600">JPEG, PNG, JPG accepted</span>
                                    <input type="file" multiple accept="image/*" onChange={handleFileChange} className="hidden" />
                                </label>
                            </div>

                            {/* Image Previews */}
                            {selectedFiles.length > 0 && (
                                <div className="grid grid-cols-5 gap-3">
                                    {selectedFiles.map((file, i) => (
                                        <div key={i} className="relative aspect-square rounded-lg overflow-hidden group">
                                            <img src={URL.createObjectURL(file)} alt="" className="w-full h-full object-cover" />
                                            <button type="button" onClick={() => removeFile(i)} className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition z-10 shadow-lg">
                                                <X className="w-3 h-3" />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}

                            <button type="submit" disabled={isSubmitting || selectedFiles.length === 0} className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/20 disabled:opacity-50 flex justify-center items-center gap-2 transition">
                                {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <Plus className="w-5 h-5" />}
                                Publish Activity Update
                            </button>
                        </form>
                    </div>
                </div>

                {/* Published List Sidebar */}
                <div className="w-full lg:w-96">
                    <h3 className="text-xl font-semibold mb-6">Published Activities</h3>
                    <div className="space-y-4">
                        {activities.length === 0 && (
                            <div className="text-slate-500 text-center py-12 border border-slate-800 rounded-2xl bg-slate-900/30">
                                No activities published yet.
                            </div>
                        )}
                        {activities.map(act => (
                            <div key={act.id} className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex gap-4 group">
                                <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 bg-slate-800">
                                    {act.images && act.images.length > 0 && (
                                        <img src={act.images[0]} alt="" className="w-full h-full object-cover" />
                                    )}
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-medium text-slate-200 line-clamp-1">{act.title}</h4>
                                    <p className="text-xs text-slate-500 mb-2">{act.date}</p>
                                    <button onClick={() => handleDelete(act.id)} className="text-xs text-red-500 hover:text-red-400 flex items-center gap-1 opacity-100 lg:opacity-0 group-hover:opacity-100 transition">
                                        <Trash2 className="w-3 h-3" /> Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AdminPanel;
