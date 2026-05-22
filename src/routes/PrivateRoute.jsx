import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase.config'; // আপনার ফায়ারবেস কনফিগার ফাইলের সঠিক লোকেশন দিন

const PrivateRoute = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    // আপনার মেইন অ্যাডমিন ইমেইল
    const ADMIN_EMAIL = "shafiqsuzon507@gmail.com";

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    // ফায়ারবেস চেক করার সময় একটি লোডিং দেখাবে
    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-[#0A0F1A]">
                <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    // যদি ইউজার লগইন করা থাকে এবং সে যদি অ্যাডমিন হয়, তবেই পেজে ঢুকতে দেবে
    if (user && user.email.toLowerCase() === ADMIN_EMAIL.toLowerCase()) {
        return children;
    }

    // আর যদি লগইন না থাকে বা অ্যাডমিন না হয়, তাহলে তাকে Login পেজে পাঠিয়ে দেবে
    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;