import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wwxxlyjgerdomxaziutk.supabase.co';
const supabaseKey = 'sb_publishable_8uyzmszlOPGo-WzfcRZ78w_rEKqk6Au';

export const supabase = createClient(supabaseUrl, supabaseKey);

export const loginAdmin = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });
    if (error) throw new Error(error.message);
    return true;
};

export const logoutAdmin = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw new Error(error.message);
};

export const checkAuthStatus = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    return !!session;
};

export const getActivities = async () => {
    const { data, error } = await supabase
        .from('activities')
        .select('*')
        .order('date', { ascending: false });

    if (error) {
        console.error("Error fetching activities:", error);
        return [];
    }
    return data || [];
};

export const addActivity = async (activityData, images) => {
    // 1. Upload images to Supabase Storage bucket named 'activities'
    const uploadedImageUrls = await Promise.all(
        images.map(async (file, index) => {
            const fileName = `${Date.now()}_${index}_${file.name.replace(/[^a-zA-Z0-9.\-]/g, '')}`;
            const { data, error } = await supabase.storage
                .from('activities')
                .upload(fileName, file);

            if (error) throw new Error(`Upload failed: ${error.message}`);

            // Get public URL
            const { data: { publicUrl } } = supabase.storage
                .from('activities')
                .getPublicUrl(fileName);

            return publicUrl;
        })
    );

    // 2. Insert record into Supabase Database table named 'activities'
    const newActivity = {
        title: activityData.title,
        date: activityData.date,
        description: activityData.description,
        tags: activityData.tags,
        images: uploadedImageUrls,
        createdAt: new Date().toISOString()
    };

    const { data, error } = await supabase
        .from('activities')
        .insert([newActivity])
        .select();

    if (error) throw new Error(`Database insert failed: ${error.message}`);
    return data[0];
};

export const deleteActivity = async (id) => {
    const { error } = await supabase
        .from('activities')
        .delete()
        .eq('id', id);

    if (error) throw new Error(error.message);
};
