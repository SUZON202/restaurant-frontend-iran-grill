import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase.config'; // আপনার পাথ ঠিক আছে কি না নিশ্চিত করুন

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setSuccess(true);
      
      // ২ সেকেন্ড পর অটোমেটিক ড্যাশবোর্ডে নিয়ে যাবে
      setTimeout(() => {
        navigate('/admin'); 
      }, 2000);
      
    } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        setError("এই ইমেইলটি অলরেডি রেজিস্টার করা আছে!");
      } else {
        setError("রেজিস্ট্রেশনে সমস্যা হয়েছে, আবার চেষ্টা করুন।");
      }
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
        
        {/* Background Glow */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-orange-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-amber-600/20 rounded-full blur-3xl"></div>

        <div className="relative z-10">
          {success ? (
            // Success Message (Awesome UI)
            <div className="text-center py-10">
              <div className="text-green-500 text-6xl mb-4">✅</div>
              <h2 className="text-3xl font-bold text-white mb-2">Awesome!</h2>
              <p className="text-gray-400">Account Created Successfully!</p>
            </div>
          ) : (
            // Registration Form
            <>
              <h2 className="text-3xl font-bold text-white text-center mb-2">Create Account</h2>
              <p className="text-gray-400 text-center mb-8 text-sm">Join <span className="text-orange-500 font-semibold">Iran Grill</span></p>

              {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

              <form onSubmit={handleRegister} className="space-y-5">
                <div>
                  <label className="text-gray-300 text-xs ml-1 mb-1 block">Email Address</label>
                  <input 
                    type="email" 
                    required
                    placeholder="example@gmail.com" 
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition"
                  />
                </div>

                <div>
                  <label className="text-gray-300 text-xs ml-1 mb-1 block">Password</label>
                  <input 
                    type="password" 
                    required
                    placeholder="••••••••" 
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition"
                  />
                </div>

                <button type="submit" className="w-full py-3 bg-gradient-to-r from-orange-500 to-amber-600 text-white font-bold rounded-xl shadow-lg hover:shadow-orange-500/30 transition">
                  Register Now
                </button>
              </form>

              <p className="text-center text-gray-400 mt-8 text-sm">
                Already have an account? <Link to="/login" className="text-orange-500 hover:underline font-medium">Login here</Link>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;