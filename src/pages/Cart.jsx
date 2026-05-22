import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, removeFromCart } = useContext(CartContext);

    const totalPrice = cart.reduce((total, item) => {
        const priceNumber = parseFloat(item.price.replace('$', ''));
        return total + priceNumber;
    }, 0);

    return (
        <div className="pt-32 pb-24 bg-[#0A0F1A] min-h-screen px-4 font-sans text-white">
            <div className="max-w-5xl mx-auto">
                
                <h2 className="text-4xl md:text-5xl font-serif text-white mb-10 text-center tracking-wide">
                    Your <span className="text-orange-500">Cart</span>
                </h2>

                {cart.length === 0 ? (
                    <div className="text-center bg-white/5 backdrop-blur-md border border-white/10 p-16 rounded-3xl shadow-xl">
                        <svg className="w-20 h-20 mx-auto text-gray-500 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                        <h3 className="text-2xl font-bold text-gray-300 mb-6">Your cart is currently empty!</h3>
                        <Link to="/menu" className="inline-block bg-orange-500 hover:bg-[#E65C00] text-white font-bold py-3 px-8 rounded-full transition duration-300 shadow-lg shadow-orange-500/20">
                            Browse Menu
                        </Link>
                    </div>
                ) : (
                    <div className="flex flex-col lg:flex-row gap-8">
                        
                        {/* Cart Items List */}
                        <div className="flex-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 shadow-xl h-fit">
                            <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">Selected Items</h3>
                            <div className="space-y-4">
                                {cart.map((item, index) => (
                                    <div key={index} className="flex items-center gap-5 bg-gray-900/50 p-4 rounded-2xl border border-white/5 hover:border-orange-500/30 transition-all duration-300 group">
                                        <img src={item.img || item.image} alt={item.name} className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-xl" />
                                        <div className="flex-1">
                                            <h4 className="text-base md:text-lg font-bold text-white">{item.name}</h4>
                                            <p className="text-orange-400 font-bold mt-1">{item.price}</p>
                                        </div>
                                        
                                        {/* Delete/Remove Button */}
                                        <button 
                                            onClick={() => removeFromCart(index)}
                                            className="p-3 text-gray-500 hover:text-red-500 hover:bg-red-500/10 rounded-xl transition-all duration-300"
                                            title="Remove item"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                            </svg>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Order Summary Box */}
                        <div className="lg:w-1/3 h-fit bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-xl sticky top-32">
                            <h3 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4">Order Summary</h3>
                            
                            <div className="flex justify-between text-gray-300 mb-4 font-medium">
                                <span>Total Items:</span>
                                <span>{cart.length}</span>
                            </div>
                            
                            <div className="flex justify-between text-gray-300 mb-6 font-medium">
                                <span>Delivery Fee:</span>
                                <span className="text-green-400">Free</span>
                            </div>
                            
                            <div className="flex justify-between text-2xl font-bold text-white mb-8 border-t border-white/10 pt-6">
                                <span>Total:</span>
                                <span className="text-orange-500">${totalPrice.toFixed(2)}</span>
                            </div>
                            
                            {/* 🌟 এখানে button এর বদলে Link বসানো হয়েছে 🌟 */}
                            <Link to="/checkout" className="block text-center w-full bg-orange-500 hover:bg-[#E65C00] text-white font-bold py-4 rounded-xl transition duration-300 shadow-lg shadow-orange-500/30 uppercase tracking-wider text-sm">
                                Proceed to Checkout
                            </Link>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default Cart;