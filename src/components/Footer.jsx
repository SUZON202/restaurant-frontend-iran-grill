import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-950 py-12 px-4 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="text-xl font-bold text-white mb-3">Iran Grill</div>
          <p className="text-gray-400 text-sm leading-relaxed">Authentic Persian grilling experience with the finest ingredients and expert chefs.</p>
        </div>
        <div>
          <div className="text-white font-semibold mb-3">Quick Links</div>
          <div className="flex flex-col gap-2">
            <Link to="/" className="text-gray-400 text-sm hover:text-orange-400 transition">Home</Link>
            <Link to="/menu" className="text-gray-400 text-sm hover:text-orange-400 transition">Menu</Link>
            <Link to="/about" className="text-gray-400 text-sm hover:text-orange-400 transition">About</Link>
            <Link to="/contact" className="text-gray-400 text-sm hover:text-orange-400 transition">Contact</Link>
            <Link to="/reservations" className="text-gray-400 text-sm hover:text-orange-400 transition">Reservations</Link>
          </div>
        </div>
        <div>
          <div className="text-white font-semibold mb-3">Contact Us</div>
          <div className="text-gray-400 text-sm flex flex-col gap-2">
            <span>📍 Rajshahi City, Bangladesh</span>
            <span>📞 +880 17XX XXXXXX</span>
            <span>✉️ info@irangrill.com</span>
            <span>🕐 Open: 11AM – 11PM Daily</span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 mt-10 pt-6 text-center text-gray-500 text-sm">
        © 2026 Iran Grill. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;