import React from 'react';

const Menu = () => {
  // ডামি ডেটা (পরে আপনি চাইলে ডেটাবেস থেকে আনতে পারবেন)
  const menuItems = [
    {
      id: 1,
      name: "Signature Beef Steak",
      description: "Premium beef steak grilled to perfection with our secret spices.",
      price: "$25.99",
      image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=1740&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Spicy Grilled Chicken",
      description: "Tender chicken breasts marinated in fiery spices and grilled.",
      price: "$18.50",
      image: "https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?q=80&w=1740&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "BBQ Lamb Chops",
      description: "Juicy lamb chops slow-cooked over a wood fire with BBQ glaze.",
      price: "$30.00",
      image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?q=80&w=1738&auto=format&fit=crop"
    },
    {
      id: 4,
      name: "Grilled Salmon",
      description: "Fresh Atlantic salmon grilled with a hint of lemon and herbs.",
      price: "$22.99",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=1740&auto=format&fit=crop"
    }
  ];

  return (
    <div className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Our Special <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-600">Menu</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Discover our most popular dishes, crafted with passion and the finest ingredients.
          </p>
        </div>

        {/* Grid Layout for Food Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((item) => (
            <div key={item.id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:transform hover:-translate-y-2 transition duration-300 shadow-xl group">
              {/* Food Image */}
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500" 
                />
              </div>
              
              {/* Card Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-white leading-tight">{item.name}</h3>
                  <span className="text-orange-500 font-bold text-xl ml-2">{item.price}</span>
                </div>
                <p className="text-gray-400 text-sm mb-6">{item.description}</p>
                <button className="w-full py-2.5 bg-transparent border border-orange-500 text-orange-500 hover:bg-gradient-to-r hover:from-orange-500 hover:to-amber-600 hover:text-white hover:border-transparent rounded-full transition duration-300 font-semibold shadow-lg">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Menu;