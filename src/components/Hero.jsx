import React, { useState } from 'react';

const menuItems = [
  { name: "Signature Beef Steak", price: "$25.99", desc: "Premium beef steak grilled to perfection with our secret spices.", img: "https://images.unsplash.com/photo-1546964124-0cce460f38ef?w=600&auto=format&fit=crop" },
  { name: "Spicy Grilled Chicken", price: "$18.50", desc: "Tender chicken breasts marinated in fiery spices and grilled.", img: "https://images.unsplash.com/photo-1598103442097-8b74394b95c8?w=600&auto=format&fit=crop" },
  { name: "BBQ Lamb Chops", price: "$30.00", desc: "Juicy lamb chops slow-cooked over a wood fire with BBQ glaze.", img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop" },
  { name: "Grilled Salmon", price: "$22.99", desc: "Fresh Atlantic salmon grilled with a hint of lemon and herbs.", img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&auto=format&fit=crop" },
  { name: "Shish Kebab Platter", price: "$19.99", desc: "Seasoned minced meat skewers grilled over charcoal fire.", img: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=600&auto=format&fit=crop" },
  { name: "Mixed Grill Combo", price: "$35.00", desc: "A royal platter of chicken, beef, and lamb with sides.", img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&auto=format&fit=crop" },
  { name: "Grilled Sea Bass", price: "$27.00", desc: "Whole sea bass marinated in herbs, grilled to crispy perfection.", img: "https://images.unsplash.com/photo-1534482421-64566f976cfa?w=600&auto=format&fit=crop" },
  { name: "Garlic Butter Prawns", price: "$23.50", desc: "Jumbo prawns tossed in garlic butter sauce and flame-grilled.", img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&auto=format&fit=crop" },
];

const galleryImages = [
  { img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&auto=format&fit=crop", label: "Fine Dining" },
  { img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&auto=format&fit=crop", label: "Our Ambiance" },
  { img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&auto=format&fit=crop", label: "Open Kitchen" },
  { img: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=600&auto=format&fit=crop", label: "Private Dining" },
];

const testimonials = [
  { name: "Sarah M.", review: "Best grilled food I've ever tasted! The lamb chops were absolutely divine.", stars: 5 },
  { name: "James K.", review: "Amazing atmosphere and even better food. The mixed grill combo is a must-try!", stars: 5 },
  { name: "Priya R.", review: "Fantastic service and incredible flavors. Iran Grill is now our go-to restaurant.", stars: 5 },
];

export default function HomePage() {
  const [activeNav, setActiveNav] = useState('Home');
  const navLinks = ['Home', 'About', 'Service Area', 'Menu', 'Open Table Reservations', 'Contact', 'More'];

  return (
    <div className="bg-gray-900 text-white font-sans">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <span className="text-xl font-bold text-white">Iran Grill</span>
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map(link => (
              <button key={link} onClick={() => setActiveNav(link)}
                className={`text-sm transition ${activeNav === link ? 'text-orange-400' : 'text-gray-300 hover:text-white'}`}>
                {link}
              </button>
            ))}
          </div>
          <div className="flex gap-3">
            <button className="text-sm text-gray-300 hover:text-white transition">Register</button>
            <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2 rounded-full transition">Login</button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <div className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1918&auto=format&fit=crop')] bg-cover bg-center opacity-40"></div>
        <div className="relative z-10 text-center px-4 mt-16">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 md:p-16 rounded-3xl shadow-2xl max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
              Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-600">Iran Grill</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 font-light">
              Experience the finest grilling and a premium dining environment. Your perfect table is waiting.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <button className="bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 w-full sm:w-auto">
                View Our Menu
              </button>
              <button className="bg-white/5 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-gray-900 font-semibold py-3 px-8 rounded-full transition duration-300 w-full sm:w-auto">
                Reserve a Table
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="bg-orange-500 py-10">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center px-4">
          {[["500+", "Menu Items"], ["15K+", "Happy Guests"], ["20+", "Expert Chefs"], ["10+", "Years of Excellence"]].map(([num, label]) => (
            <div key={label}>
              <div className="text-3xl font-extrabold text-white">{num}</div>
              <div className="text-sm text-orange-100 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* SPECIAL MENU */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">Our Special <span className="text-orange-400">Menu</span></h2>
          <p className="text-gray-400 mt-3">Discover our most popular dishes, crafted with passion and the finest ingredients.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {menuItems.map((item) => (
            <div key={item.name} className="bg-gray-800 rounded-2xl overflow-hidden hover:scale-105 transition duration-300 shadow-lg">
              <img src={item.img} alt={item.name} className="w-full h-48 object-cover" />
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-white font-bold text-base leading-tight">{item.name}</h3>
                  <span className="text-orange-400 font-bold ml-2 whitespace-nowrap">{item.price}</span>
                </div>
                <p className="text-gray-400 text-sm mb-4">{item.desc}</p>
                <button className="w-full border border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white py-2 rounded-full text-sm font-semibold transition duration-300">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ABOUT / WHY CHOOSE US */}
      <div className="bg-gray-800 py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop"
              alt="Chef grilling" className="rounded-3xl w-full h-96 object-cover shadow-2xl" />
          </div>
          <div>
            <h2 className="text-4xl font-extrabold text-white mb-6">Why Choose <span className="text-orange-400">Iran Grill?</span></h2>
            <p className="text-gray-400 mb-8 leading-relaxed">We bring the authentic taste of Persian grilling tradition to your table. Every dish is crafted with premium ingredients and cooked over real charcoal for that unbeatable smoky flavor.</p>
            <div className="grid grid-cols-1 gap-4">
              {[
                ["🔥", "Charcoal Grilled", "Authentic charcoal grilling for the best smoky flavor."],
                ["🌿", "Fresh Ingredients", "Only the freshest, locally sourced ingredients every day."],
                ["👨‍🍳", "Expert Chefs", "20+ experienced chefs with decades of culinary mastery."],
                ["⭐", "5-Star Experience", "Award-winning service and unforgettable dining atmosphere."],
              ].map(([icon, title, desc]) => (
                <div key={title} className="flex gap-4 items-start bg-gray-700/50 rounded-xl p-4">
                  <span className="text-2xl">{icon}</span>
                  <div>
                    <div className="text-white font-semibold">{title}</div>
                    <div className="text-gray-400 text-sm">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* GALLERY */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white">Our <span className="text-orange-400">Gallery</span></h2>
          <p className="text-gray-400 mt-3">A glimpse into our world of flavor, fire, and fine dining.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((g) => (
            <div key={g.label} className="relative group overflow-hidden rounded-2xl">
              <img src={g.img} alt={g.label} className="w-full h-56 object-cover group-hover:scale-110 transition duration-500" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
                <span className="text-white font-semibold text-sm">{g.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div className="bg-gray-800 py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-white">What Our <span className="text-orange-400">Guests Say</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-gray-700/60 rounded-2xl p-6">
                <div className="text-orange-400 text-lg mb-3">{"★".repeat(t.stars)}</div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">"{t.review}"</p>
                <div className="text-white font-semibold text-sm">— {t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RESERVATION CTA */}
      <div className="relative py-24 px-4">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Reserve Your <span className="text-orange-400">Table Today</span></h2>
          <p className="text-gray-300 mb-10">Join us for an unforgettable dining experience. Book your table now and enjoy the finest grilled cuisine.</p>
          <button className="bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-semibold py-4 px-12 rounded-full text-lg shadow-lg transition duration-300">
            Book a Table
          </button>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-gray-950 py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="text-xl font-bold text-white mb-3">Iran Grill</div>
            <p className="text-gray-400 text-sm leading-relaxed">Authentic Persian grilling experience with the finest ingredients and expert chefs.</p>
          </div>
          <div>
            <div className="text-white font-semibold mb-3">Quick Links</div>
            <div className="flex flex-col gap-2">
              {['Home', 'Menu', 'About', 'Contact', 'Reservations'].map(link => (
                <span key={link} className="text-gray-400 text-sm hover:text-orange-400 cursor-pointer transition">{link}</span>
              ))}
            </div>
          </div>
          <div>
            <div className="text-white font-semibold mb-3">Contact Us</div>
            <div className="text-gray-400 text-sm flex flex-col gap-2">
              <span>📍 123 Grill Street, Food City</span>
              <span>📞 +1 (555) 123-4567</span>
              <span>✉️ info@irangrill.com</span>
              <span>🕐 Open: 11AM – 11PM Daily</span>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 mt-10 pt-6 text-center text-gray-500 text-sm">
          © 2025 Iran Grill. All rights reserved.
        </div>
      </footer>

    </div>
  );
}