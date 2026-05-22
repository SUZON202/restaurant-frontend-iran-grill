import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header'; // 🌟 Navbar এর বদলে Header ইমপোর্ট করা হলো

const MainLayout = () => {
    return (
        <div>
            {/* ওয়েবসাইটের একদম উপরে Header থাকবে */}
            <Header />
            
            {/* Outlet এর মাধ্যমে Home, Menu, Cart ইত্যাদি পেজগুলো হেডারের নিচে শো করবে */}
            <div className="min-h-screen bg-[#0A0F1A]">
                <Outlet />
            </div>
            
            {/* আপনার যদি কোনো Footer থাকে, তাহলে এখানে <Footer /> বসাতে পারেন */}
        </div>
    );
};

export default MainLayout;