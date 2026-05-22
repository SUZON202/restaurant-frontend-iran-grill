import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../firebase.config';
import { CartContext } from '../context/CartContext'; 

const Header = () => {
    const [user, setUser] = useState(null);
    const { cart } = useContext(CartContext); 
    
    // মোবাইল মেনু ওপেন/ক্লোজ করার স্টেট
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    const handleLogOut = () => {
        signOut(auth)
            .then(() => {
                alert("লগআউট সফল হয়েছে! ✅");
            })
            .catch((error) => console.log(error));
    };

    // লিংকে ক্লিক করার পর মোবাইল মেনু বন্ধ করার ফাংশন
    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <header className="bg-[#0a0a0a] border-b border-white/5 py-4 px-6 md:px-12 sticky top-0 z-50">
            <div className="flex justify-between items-center">
                
                {/* Left Side: Website Logo/Name */}
                <div>
                    <Link to="/" className="text-2xl md:text-3xl font-bold italic text-white tracking-widest">
                        Iran Grill
                    </Link>
                </div>

                {/* Middle: Desktop Menu Links (Hidden on small screens) */}
                <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-300">
                    <Link to="/" className="hover:text-[#FF6600] transition-colors">Home</Link>
                    <Link to="/about" className="hover:text-[#FF6600] transition-colors">About</Link>
                    <Link to="/service-area" className="hover:text-[#FF6600] transition-colors">Service Area</Link>
                    <Link to="/menu" className="hover:text-[#FF6600] transition-colors">Menu</Link>
                    <Link to="/reservations" className="hover:text-[#FF6600] transition-colors">Open Table Reservations</Link>
                    <Link to="/contact" className="hover:text-[#FF6600] transition-colors">Contact</Link>
                    <Link to="/register" className="hover:text-[#FF6600] transition-colors">Register</Link>
                    
                    {/* More Dropdown Menu */}
                    <div className="relative group cursor-pointer">
                        <button className="flex items-center gap-1 hover:text-[#FF6600] transition-colors focus:outline-none">
                            More
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </button>
                        
                        <div className="absolute top-full right-0 pt-6 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                            <div className="bg-[#0a0a0a] border border-white/10 rounded-xl shadow-2xl flex flex-col py-2 overflow-hidden backdrop-blur-md">
                                <Link to="/blog" className="px-4 py-2 hover:text-[#FF6600] hover:bg-white/5 transition-colors">
                                    Blog
                                </Link>
                                <Link to="/online-orders" className="px-4 py-2 text-white font-bold hover:text-[#FF6600] hover:bg-white/5 transition-colors">
                                    Online Orders (New)
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Dynamic Auth Button, Cart & Hamburger */}
                <div className="flex items-center gap-4 lg:gap-6">
                    
                    {/* Cart Icon */}
                    <Link to="/cart" className="relative cursor-pointer text-gray-300 hover:text-[#FF6600] transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                        <span className="absolute -top-2 -right-2 bg-[#FF6600] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                            {cart?.length || 0}
                        </span>
                    </Link>

                    {/* Conditional Authentication Button (Hidden on mobile, shown in mobile menu instead) */}
                    <div className="hidden sm:block">
                        {user ? (
                            <button 
                                onClick={handleLogOut}
                                className="flex items-center gap-2 text-sm font-bold text-gray-300 hover:text-[#FF6600] transition-colors uppercase tracking-wider"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                                </svg>
                                LOG OUT
                            </button>
                        ) : (
                            <Link 
                                to="/login" 
                                className="flex items-center gap-2 text-sm font-bold text-gray-300 hover:text-[#FF6600] transition-colors uppercase tracking-wider"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                </svg>
                                LOG IN
                            </Link>
                        )}
                    </div>

                    {/* Hamburger Menu Toggle Button (Visible only on mobile/tablet) */}
                    <button 
                        className="lg:hidden text-gray-300 hover:text-[#FF6600] transition-colors focus:outline-none"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu Container */}
            <div 
                className={`lg:hidden absolute left-0 w-full bg-[#0a0a0a] border-b border-white/10 transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen ? 'top-[70px] opacity-100 visible' : 'top-[50px] opacity-0 invisible'
                }`}
            >
                <div className="flex flex-col px-6 py-4 space-y-4 shadow-2xl">
                    <Link to="/" onClick={closeMobileMenu} className="text-gray-300 hover:text-[#FF6600] font-medium border-b border-white/5 pb-2">Home</Link>
                    <Link to="/about" onClick={closeMobileMenu} className="text-gray-300 hover:text-[#FF6600] font-medium border-b border-white/5 pb-2">About</Link>
                    <Link to="/service-area" onClick={closeMobileMenu} className="text-gray-300 hover:text-[#FF6600] font-medium border-b border-white/5 pb-2">Service Area</Link>
                    <Link to="/menu" onClick={closeMobileMenu} className="text-gray-300 hover:text-[#FF6600] font-medium border-b border-white/5 pb-2">Menu</Link>
                    <Link to="/reservations" onClick={closeMobileMenu} className="text-gray-300 hover:text-[#FF6600] font-medium border-b border-white/5 pb-2">Open Table Reservations</Link>
                    <Link to="/contact" onClick={closeMobileMenu} className="text-gray-300 hover:text-[#FF6600] font-medium border-b border-white/5 pb-2">Contact</Link>
                    <Link to="/register" onClick={closeMobileMenu} className="text-gray-300 hover:text-[#FF6600] font-medium border-b border-white/5 pb-2">Register</Link>
                    <Link to="/blog" onClick={closeMobileMenu} className="text-gray-300 hover:text-[#FF6600] font-medium border-b border-white/5 pb-2">Blog</Link>
                    <Link to="/online-orders" onClick={closeMobileMenu} className="text-[#FF6600] font-bold border-b border-white/5 pb-2">Online Orders (New)</Link>
                    
                    {/* Mobile Auth Button */}
                    <div className="pt-2 sm:hidden">
                        {user ? (
                            <button 
                                onClick={() => { handleLogOut(); closeMobileMenu(); }}
                                className="flex items-center gap-2 text-sm font-bold text-gray-300 hover:text-[#FF6600] uppercase"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                                </svg>
                                LOG OUT
                            </button>
                        ) : (
                            <Link 
                                to="/login" 
                                onClick={closeMobileMenu}
                                className="flex items-center gap-2 text-sm font-bold text-gray-300 hover:text-[#FF6600] uppercase"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                </svg>
                                LOG IN
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;