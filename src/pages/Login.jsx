import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    updateProfile,
    GoogleAuthProvider,
    signInWithPopup
} from "firebase/auth";
import { auth } from '../firebase.config'; 
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Auth = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const [loading, setLoading] = useState(false);
    
    const navigate = useNavigate();

    // আপনার মেইন অ্যাডমিন ইমেইল
    const ADMIN_EMAIL = "shafiqsuzon507@gmail.com";

    const [popup, setPopup] = useState({ show: false, message: '', type: '' });

    const showPopup = (message, type) => {
        setPopup({ show: true, message, type });
        setTimeout(() => {
            setPopup({ show: false, message: '', type: '' });
        }, 3000); 
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // ==========================================
    // 🌟 JWT Token Generator Function 🌟
    // ==========================================
    const generateToken = async (email) => {
        try {
            const res = await fetch('https://iran-grill-backend.vercel.app/api/jwt', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ email: email })
            });
            const data = await res.json();
            if(data.token){
                localStorage.setItem('access-token', data.token);
            }
        } catch (error) {
            console.error("Token generation failed:", error);
        }
    };

    const handleRegister = async () => {
        const { name, email, password } = formData;
        if (!name || !email || !password) {
            return showPopup("Please type manually in all fields!", "error");
        }
        if (password.length < 6) {
            return showPopup("Password must be at least 6 characters!", "error");
        }
        
        setLoading(true);
        try {
            const result = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(result.user, { displayName: name });
            
            // রেজিস্ট্রেশনের পর সাথে সাথে টোকেন তৈরি করা হচ্ছে
            await generateToken(email);

            showPopup("Account Created Successfully! ✅", "success");
            setTimeout(() => navigate('/'), 2000); 
        } catch (err) {
            showPopup(err.message.replace("Firebase:", ""), "error");
        }
        setLoading(false);
    };

    const handleLogin = async () => {
        const { email, password } = formData;
        if (!email || !password) {
            return showPopup("Please enter email and password!", "error");
        }

        setLoading(true);
        try {
            await signInWithEmailAndPassword(auth, email, password);
            
            // লগইনের পর টোকেন তৈরি করা হচ্ছে
            await generateToken(email);

            showPopup("Login Successful! ✅", "success");
            
            if (email.toLowerCase().trim() === ADMIN_EMAIL.toLowerCase().trim()) {
                setTimeout(() => navigate('/dashboard'), 2000); 
            } else {
                setTimeout(() => navigate('/'), 2000); 
            }
        } catch (err) {
            showPopup("Invalid Email or Password! ❌", "error");
        }
        setLoading(false);
    };

    const handleGoogleLogin = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            const userEmail = result.user.email;

            // গুগল লগইনের পর টোকেন তৈরি করা হচ্ছে
            await generateToken(userEmail);

            showPopup("Google Login Successful! ✅", "success");
            
            if (userEmail.toLowerCase().trim() === ADMIN_EMAIL.toLowerCase().trim()) {
                setTimeout(() => navigate('/dashboard'), 2000); 
            } else {
                setTimeout(() => navigate('/'), 2000); 
            }
        } catch (err) {
            showPopup("Google Login Failed! ❌", "error");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        isLogin ? handleLogin() : handleRegister();
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-6 py-12 bg-[#0F172A] relative">
            
            {/* Custom Popup Modal */}
            {popup.show && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm transition-all duration-300">
                    <div className="bg-[#1E293B] p-8 rounded-2xl shadow-2xl flex flex-col items-center border border-gray-700 transform scale-105 transition-transform min-w-[300px] mx-4">
                        {popup.type === 'success' ? (
                            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-5 border border-green-500/50">
                                <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                        ) : (
                            <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mb-5 border border-red-500/50">
                                <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </div>
                        )}
                        <h3 className={`text-2xl font-bold mb-2 ${popup.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                            {popup.type === 'success' ? 'Awesome!' : 'Oops!'}
                        </h3>
                        <p className="text-gray-300 text-center font-medium">{popup.message}</p>
                    </div>
                </div>
            )}

            <div className="w-full max-w-[480px] bg-[#1E293B] p-10 rounded-[2rem] border border-white/5 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6600] opacity-10 blur-[80px] rounded-full pointer-events-none"></div>

                <div className="text-center mb-8 relative z-10">
                    <h2 className="text-3xl font-bold text-white mb-2">
                        {isLogin ? 'Welcome Back' : 'Create Account'}
                    </h2>
                    <p className="text-gray-400 text-sm">
                        {isLogin ? 'Log in to your ' : 'Sign up for '} 
                        <span className="text-[#FF6600] font-semibold">Iran Grill</span> account.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                    {!isLogin && (
                        <div>
                            <label className="block text-gray-300 text-xs font-medium mb-2">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                placeholder="Shafiq Suzon"
                                className="w-full bg-[#0F172A] border border-gray-700 rounded-xl py-3 px-4 text-white focus:border-[#FF6600] outline-none transition-colors"
                                onChange={handleChange}
                                autoComplete="off"
                            />
                        </div>
                    )}

                    <div>
                        <label className="block text-gray-300 text-xs font-medium mb-2">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            placeholder="example@gmail.com"
                            className="w-full bg-[#0F172A] border border-gray-700 rounded-xl py-3 px-4 text-white focus:border-[#FF6600] outline-none transition-colors"
                            onChange={handleChange}
                            autoComplete="off"
                        />
                    </div>

                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <label className="text-gray-300 text-xs font-medium">Password</label>
                            {isLogin && (
                                <button type="button" className="text-[#FF6600] text-xs hover:underline">
                                    Forgot Password?
                                </button>
                            )}
                        </div>
                        <div className="relative flex items-center">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={formData.password}
                                placeholder="••••••••"
                                className="w-full bg-[#0F172A] border border-gray-700 rounded-xl py-3 pl-4 pr-12 text-white focus:border-[#FF6600] outline-none transition-colors"
                                onChange={handleChange}
                                autoComplete="new-password"
                            />
                            <button
                                type="button"
                                className="absolute right-4 text-gray-400 hover:text-white"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
                            </button>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#FF6600] hover:bg-[#E65C00] text-white font-bold py-3.5 rounded-xl transition-colors mt-4 flex justify-center items-center"
                    >
                        {loading ? 'Processing...' : (isLogin ? 'Sign In' : 'Sign Up')}
                    </button>
                </form>

                <div className="mt-8 relative z-10">
                    <div className="relative flex items-center justify-center">
                        <div className="absolute w-full border-t border-gray-700"></div>
                        <span className="bg-[#1E293B] px-4 text-xs text-gray-500 relative">Or continue with</span>
                    </div>

                    <button
                        type="button"
                        onClick={handleGoogleLogin}
                        className="mt-6 w-full bg-[#0F172A] border border-gray-700 hover:border-gray-500 rounded-xl py-3 flex items-center justify-center gap-3 transition-colors"
                    >
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                        </svg>
                        <span className="text-white font-medium text-sm">Google</span>
                    </button>
                </div>

                <div className="mt-6 text-center relative z-10">
                    <p className="text-gray-400 text-sm">
                        {isLogin ? "Don't have an account?" : "Already have an account?"}
                        <button
                            type="button"
                            onClick={() => { setIsLogin(!isLogin); setFormData({name: '', email: '', password: ''}); }}
                            className="ml-2 text-[#FF6600] font-semibold hover:underline"
                        >
                            {isLogin ? 'Create one' : 'Sign in'}
                        </button>
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Auth;