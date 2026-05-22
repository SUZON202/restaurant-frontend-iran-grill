import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const { cart, clearCart } = useContext(CartContext);
    const navigate = useNavigate();
    const [popup, setPopup] = useState(false);
    
    // 🌟 ফর্মের ডাটা ধরে রাখার জন্য স্টেট 🌟
    const [orderInfo, setOrderInfo] = useState({
        name: '',
        phone: '',
        address: ''
    });

    const totalPrice = cart.reduce((total, item) => {
        const priceNumber = parseFloat(item.price.replace('$', ''));
        return total + priceNumber;
    }, 0);

    // 🌟 অর্ডার প্লেস করার ফাংশন 🌟
    const handlePlaceOrder = async (e) => {
        e.preventDefault();

        const finalOrder = {
            customerName: orderInfo.name,
            phone: orderInfo.phone,
            address: orderInfo.address,
            items: cart,
            totalAmount: totalPrice,
            status: "Pending",
            orderDate: new Date().toISOString()
        };

        try {
            const response = await fetch('http://localhost:5000/api/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(finalOrder)
            });

            if (response.ok) {
                setPopup(true); // কনফার্মেশন মোডাল দেখাবে

                // ৩ সেকেন্ড পর কার্ট খালি করে হোম পেজে পাঠিয়ে দেবে
                setTimeout(() => {
                    clearCart();
                    navigate('/');
                }, 3000);
            }
        } catch (error) {
            console.error("Order placed error:", error);
            alert("Something went wrong! Please try again.");
        }
    };

    if (cart.length === 0 && !popup) {
        navigate('/menu');
        return null;
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setOrderInfo(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="pt-32 pb-24 bg-[#0A0F1A] min-h-screen px-4 font-sans text-white relative">
            
            {/* 🌟 অর্ডার সাকসেস মোডাল (যা আগে মিসিং ছিল) 🌟 */}
            {popup && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm transition-all duration-300">
                    <div className="bg-[#1E293B] p-10 rounded-3xl shadow-2xl flex flex-col items-center border border-orange-500/30 transform scale-105 transition-transform max-w-md w-full mx-4 text-center">
                        <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mb-6 border border-green-500/50">
                            <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-3">Order Confirmed!</h3>
                        <p className="text-gray-400 font-medium mb-6">Thank you for your order. We are preparing your delicious food.</p>
                        <div className="text-sm text-orange-400 animate-pulse">Redirecting to Home...</div>
                    </div>
                </div>
            )}

            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
                
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-xl">
                    <h2 className="text-3xl font-bold text-white mb-8 border-b border-white/10 pb-4">Delivery Details</h2>
                    
                    <form onSubmit={handlePlaceOrder} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-gray-400 text-sm font-medium mb-2">Full Name *</label>
                                <input 
                                    type="text" 
                                    name="name"
                                    value={orderInfo.name}
                                    onChange={handleInputChange}
                                    required 
                                    placeholder="John Doe" 
                                    className="w-full bg-gray-900/50 border border-white/10 rounded-xl py-3 px-4 text-white focus:border-orange-500 outline-none transition-colors" 
                                />
                            </div>
                            <div>
                                <label className="block text-gray-400 text-sm font-medium mb-2">Phone Number *</label>
                                <input 
                                    type="tel" 
                                    name="phone"
                                    value={orderInfo.phone}
                                    onChange={handleInputChange}
                                    required 
                                    placeholder="+880 1..." 
                                    className="w-full bg-gray-900/50 border border-white/10 rounded-xl py-3 px-4 text-white focus:border-orange-500 outline-none transition-colors" 
                                />
                            </div>
                        </div>
                        
                        <div>
                            <label className="block text-gray-400 text-sm font-medium mb-2">Delivery Address *</label>
                            <textarea 
                                name="address"
                                value={orderInfo.address}
                                onChange={handleInputChange}
                                required 
                                rows="3" 
                                placeholder="Enter your full address..." 
                                className="w-full bg-gray-900/50 border border-white/10 rounded-xl py-3 px-4 text-white focus:border-orange-500 outline-none transition-colors resize-none"
                            ></textarea>
                        </div>

                        <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-4 flex items-center gap-3">
                            <input type="radio" checked readOnly className="w-5 h-5 accent-orange-500" />
                            <span className="text-white font-medium">Cash on Delivery (COD)</span>
                        </div>

                        <button type="submit" className="w-full bg-orange-500 hover:bg-[#E65C00] text-white font-bold py-4 rounded-xl transition duration-300 shadow-lg shadow-orange-500/30 uppercase tracking-wider mt-4">
                            Confirm Order
                        </button>
                    </form>
                </div>

                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-xl h-fit">
                    <h2 className="text-3xl font-bold text-white mb-8 border-b border-white/10 pb-4">Your Order</h2>
                    
                    <div className="space-y-4 mb-6 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                        {cart.map((item, index) => (
                            <div key={index} className="flex justify-between items-center bg-gray-900/40 p-3 rounded-xl border border-white/5">
                                <div className="flex items-center gap-3">
                                    <img src={item.img || item.image} alt={item.name} className="w-12 h-12 rounded-lg object-cover" />
                                    <span className="text-gray-300 font-medium text-sm md:text-base">{item.name}</span>
                                </div>
                                <span className="text-orange-400 font-bold">{item.price}</span>
                            </div>
                        ))}
                    </div>

                    <div className="border-t border-white/10 pt-6 space-y-3 text-gray-300 font-medium">
                        <div className="flex justify-between">
                            <span>Subtotal ({cart.length} items)</span>
                            <span>${totalPrice.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Delivery Fee</span>
                            <span className="text-green-400">Free</span>
                        </div>
                        <div className="flex justify-between text-2xl font-bold text-white pt-4 border-t border-white/10 mt-4">
                            <span>Total</span>
                            <span className="text-orange-500">${totalPrice.toFixed(2)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;