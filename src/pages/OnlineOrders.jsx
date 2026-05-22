import React, { useState } from 'react';

const OnlineOrders = () => {
  const [orderType, setOrderType] = useState('Pickup');

  return (
    <div className="pt-20 pb-24 bg-[#0A0F1A] min-h-screen font-sans selection:bg-orange-500 selection:text-white">
      
      {/* Top Banner Image */}
      <div className="w-full h-64 md:h-96 relative">
        <img 
          src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2000&auto=format&fit=crop" 
          alt="Online Ordering Banner" 
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A0F1A]"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 -mt-10 relative z-10">
        
        {/* Title & Subtitle */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-6xl font-serif italic text-white mb-4">
            Online Ordering
          </h1>
          <p className="text-gray-300 text-lg">
            You can order online! Browse our menu items and choose what you'd like to order from us.
          </p>
        </div>

        {/* Accepting Orders Status Badge */}
        <div className="inline-flex items-center gap-2 border border-white/20 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full mb-10 shadow-lg">
          <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
          <span className="text-white text-sm font-medium">Accepting Orders</span>
        </div>

        {/* Pickup / Delivery Toggle */}
        <div className="flex border border-white/20 rounded-lg max-w-md overflow-hidden mb-8 shadow-lg">
          <button 
            onClick={() => setOrderType('Pickup')}
            className={`flex-1 py-3 text-sm font-bold tracking-wider transition-colors ${
              orderType === 'Pickup' 
                ? 'bg-orange-500/20 text-orange-400 border-b-2 border-orange-500' 
                : 'text-gray-400 hover:bg-white/5 hover:text-white'
            }`}
          >
            Pickup
          </button>
          <div className="w-px bg-white/20"></div>
          <button 
            onClick={() => setOrderType('Delivery')}
            className={`flex-1 py-3 text-sm font-bold tracking-wider transition-colors ${
              orderType === 'Delivery' 
                ? 'bg-orange-500/20 text-orange-400 border-b-2 border-orange-500' 
                : 'text-gray-400 hover:bg-white/5 hover:text-white'
            }`}
          >
            Delivery
          </button>
        </div>

        {/* Info based on selection */}
        <div className="flex flex-col md:flex-row gap-6 text-gray-400 text-sm border-t border-white/10 pt-6">
          {orderType === 'Pickup' ? (
            <>
              <div className="flex items-center gap-2">
                <span>🕒 Pickup time: Up to 30 minutes</span>
                <button className="text-orange-400 hover:underline ml-2">Change</button>
              </div>
              <div className="flex items-center gap-2">
                <span>📍 Pickup Address: Rajshahi City Center, Rajshahi, Bangladesh</span>
              </div>
            </>
          ) : (
            <div className="flex items-center gap-2">
              <span>🛵 Delivery time: 45 - 60 minutes</span>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default OnlineOrders;