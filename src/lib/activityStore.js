// Fake asynchronous database service using localStorage for immediate demo purposes.
// Once you create your Firebase project, you will replace these functions with Firebase calls.

const DELAY = 500; // simulate network latency

// Helper to simulate network
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const loginAdmin = async (email, password) => {
    await wait(DELAY);
    // Hardcoded demo credentials
    if (email === 'tofiquetofiquekhoso@gmail.com' && password === '627420') {
        localStorage.setItem('admin_token', 'true');
        return true;
    }
    throw new Error('Invalid credentials. Use tofiquetofiquekhoso@gmail.com / 627420');
};

export const logoutAdmin = () => {
    localStorage.removeItem('admin_token');
};

export const isAdminLoggedIn = () => {
    return localStorage.getItem('admin_token') === 'true';
};

export const getActivities = async () => {
    await wait(DELAY);
    const data = localStorage.getItem('portfolio_activities');
    if (!data) return [];

    // Sort by date (newest first)
    const activities = JSON.parse(data);
    return activities.sort((a, b) => new Date(b.date) - new Date(a.date));
};

export const addActivity = async (activityData, images) => {
    await wait(DELAY);

    // In a real app (Firebase), you would upload images to Storage first, get their URLs, then save to DB.
    // For this demo, we convert images to base64 strings to store in localStorage.
    const base64Images = await Promise.all(
        images.map((file) => {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => resolve(reader.result);
                reader.onerror = (error) => reject(error);
            });
        })
    );

    const newActivity = {
        id: Date.now().toString(),
        ...activityData,
        images: base64Images,
        createdAt: new Date().toISOString()
    };

    const existing = await getActivities();
    const updated = [newActivity, ...existing];
    localStorage.setItem('portfolio_activities', JSON.stringify(updated));

    return newActivity;
};

export const deleteActivity = async (id) => {
    await wait(DELAY);
    const existing = await getActivities();
    const filtered = existing.filter(act => act.id !== id);
    localStorage.setItem('portfolio_activities', JSON.stringify(filtered));
};
