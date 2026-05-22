import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase.config';

const AdminRoute = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    
    // আপনার মেইন অ্যাডমিন ইমেইল
    const adminEmail = "shafiqsuzon507@gmail.com"; 

    if (loading) return <div className="text-center text-white mt-20">Loading...</div>;

    // যদি ইউজার লগইন না করা থাকে, তাহলে লগইন পেজে পাঠাবে
    if (!user) {
        return <Navigate to="/login" replace />;
    }

    // যদি ইউজার লগইন থাকে এবং ইমেইল অ্যাডমিনের হয়, তাহলে ড্যাশবোর্ড দেখাবে
    if (user.email.toLowerCase().trim() === adminEmail.toLowerCase().trim()) {
        return children;
    }

    // যদি ইউজার লগইন থাকে কিন্তু ইমেইল অ্যাডমিনের না হয়, তাহলে হোম পেজে পাঠাবে
    return <Navigate to="/" replace />;
};

export default AdminRoute;