import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Menu = () => {
  const [activeTab, setActiveTab] = useState('Lunch');
  const [search, setSearch] = useState('');
  const { addToCart } = useContext(CartContext);
  const [popup, setPopup] = useState({ show: false, message: '' });

  const showSuccessPopup = (itemName) => {
    setPopup({ show: true, message: `${itemName} added to your cart!` });
    setTimeout(() => setPopup({ show: false, message: '' }), 2000);
  };

  const menuData = {
    Lunch: [
      { id: 1, name: "Saffron Rice with Chicken", price: "$18.00", image: "https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?w=600&auto=format&fit=crop", description: "Classic saffron-infused basmati rice served with tender grilled chicken breast." },
      { id: 2, name: "Beef Koobideh Wrap", price: "$12.50", image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600&auto=format&fit=crop", description: "Minced beef kebab wrapped in fresh flatbread with greens." },
      { id: 3, name: "Grilled Veggie Salad", price: "$10.00", image: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=600&auto=format&fit=crop", description: "Seasonal vegetables lightly charred, mixed with fresh greens." },
      { id: 4, name: "Joojeh Kebab Bowl", price: "$14.00", image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=600&auto=format&fit=crop", description: "Marinated chicken chunks grilled to perfection served over rice." },
      { id: 5, name: "Falafel & Hummus", price: "$11.00", image: "https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?w=600&auto=format&fit=crop", description: "Crispy homemade falafels served with creamy hummus." },
      { id: 6, name: "Persian Lentil Soup", price: "$8.50", image: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=600&auto=format&fit=crop", description: "Warm, comforting lentil soup with a blend of Persian herbs." },
      { id: 7, name: "Shish Taouk Wrap", price: "$12.00", image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600&auto=format&fit=crop", description: "Garlic marinated chicken skewers wrapped with lettuce." },
      { id: 8, name: "Lamb Gyro Sandwich", price: "$13.50", image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=600&auto=format&fit=crop", description: "Thin slices of spiced lamb served inside pita with sauce." },
      { id: 9, name: "Mediterranean Quinoa", price: "$11.50", image: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=600&auto=format&fit=crop", description: "Healthy quinoa mixed with cucumber, tomatoes, and feta." },
      { id: 10, name: "Chicken Shawarma", price: "$15.00", image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600&auto=format&fit=crop", description: "Slow-roasted chicken slices with garlic mayo and fries." },
      { id: 11, name: "Grilled Halloumi", price: "$12.00", image: "https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?w=600&auto=format&fit=crop", description: "Grilled squeaky cheese served on a bed of fresh greens." },
      { id: 12, name: "Beef Tikka Skewers", price: "$16.00", image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=600&auto=format&fit=crop", description: "Tender beef pieces marinated and grilled over charcoal." },
      { id: 13, name: "Spicy Chicken Wings", price: "$9.50", image: "https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?w=600&auto=format&fit=crop", description: "Flame-grilled wings tossed in our secret spicy sauce." },
      { id: 14, name: "Baba Ganoush & Pita", price: "$7.50", image: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=600&auto=format&fit=crop", description: "Smoky roasted eggplant dip served with fresh baked bread." },
      { id: 15, name: "Roasted Cauliflower", price: "$10.50", image: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=600&auto=format&fit=crop", description: "Whole roasted cauliflower with tahini drizzle." },
      { id: 16, name: "Saffron Couscous", price: "$8.00", image: "https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?w=600&auto=format&fit=crop", description: "Light fluffy couscous infused with premium Iranian saffron." },
      { id: 17, name: "Minced Lamb Skewers", price: "$15.50", image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=600&auto=format&fit=crop", description: "Juicy minced lamb seasoned with onions and sumac." },
      { id: 18, name: "Stuffed Grape Leaves", price: "$6.50", image: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=600&auto=format&fit=crop", description: "Dolma stuffed with rice, herbs, and lemon juice." },
      { id: 19, name: "Pomegranate Chicken", price: "$16.50", image: "https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?w=600&auto=format&fit=crop", description: "Grilled chicken glazed in a sweet and sour sauce." },
      { id: 20, name: "Garlic Butter Shrimp", price: "$17.00", image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=600&auto=format&fit=crop", description: "Charcoal-grilled shrimp skewers brushed with butter." },
      { id: 21, name: "Hummus Bowl", price: "$9.00", image: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=600&auto=format&fit=crop", description: "Classic creamy hummus topped with olive oil and pine nuts." },
      { id: 22, name: "Mediterranean Pizza", price: "$14.50", image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600&auto=format&fit=crop", description: "Flatbread topped with feta, olives, and cherry tomatoes." },
      { id: 23, name: "Grilled Salmon Salad", price: "$18.50", image: "https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?w=600&auto=format&fit=crop", description: "Fresh salmon filet served over a crisp Mediterranean salad." },
      { id: 24, name: "Lamb Kofta Plate", price: "$15.00", image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=600&auto=format&fit=crop", description: "Spiced lamb meatballs served with rice and tzatziki." },
      { id: 25, name: "Turkey Wrap", price: "$11.50", image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600&auto=format&fit=crop", description: "Roasted turkey slices with fresh greens and garlic sauce." }
    ],
    Dinner: [
      { id: 26, name: "Iran Grill Mix Platter", price: "$45.00", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop", description: "A grand mix of beef, lamb, and chicken grilled to perfection." },
      { id: 27, name: "Spicy Lamb Chops", price: "$28.50", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop", description: "Juicy lamb chops with our signature Persian spice rub." },
      { id: 28, name: "Grilled Sea Bass", price: "$32.00", image: "https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?w=600&auto=format&fit=crop", description: "Whole sea bass marinated in herbs and lemon." },
      { id: 29, name: "Ghormeh Sabzi", price: "$22.00", image: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=600&auto=format&fit=crop", description: "Traditional Persian herb stew cooked slowly with lamb." },
      { id: 30, name: "Royal Tenderloin", price: "$38.00", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop", description: "Premium beef tenderloin cooked to your liking." },
      { id: 31, name: "Chelo Kebab Barg", price: "$26.00", image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=600&auto=format&fit=crop", description: "Thinly sliced marinated lamb filet served with saffron rice." },
      { id: 32, name: "Zereshk Polo", price: "$20.00", image: "https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?w=600&auto=format&fit=crop", description: "Barberry rice served with a succulent braised chicken." },
      { id: 33, name: "Fesenjan Stew", price: "$24.00", image: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=600&auto=format&fit=crop", description: "Rich, tangy stew made from ground walnuts and pomegranate." },
      { id: 34, name: "Tomahawk Ribeye", price: "$65.00", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop", description: "Massive bone-in ribeye steak for the ultimate meat lover." },
      { id: 35, name: "Seafood Mix Grill", price: "$42.00", image: "https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?w=600&auto=format&fit=crop", description: "A luxurious selection of grilled fish, calamari, and prawns." },
      { id: 36, name: "Tandoori Style Chicken", price: "$21.00", image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=600&auto=format&fit=crop", description: "Half chicken marinated in yogurt and spices." },
      { id: 37, name: "Persian Lamb Shank", price: "$29.00", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop", description: "Slow-braised lamb shank that falls right off the bone." },
      { id: 38, name: "Grilled Lobster Tail", price: "$48.00", image: "https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?w=600&auto=format&fit=crop", description: "Premium lobster tail charcoal grilled with lemon butter." },
      { id: 39, name: "Eggplant Beef Stew", price: "$20.00", image: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=600&auto=format&fit=crop", description: "Split pea and beef stew topped with fried eggplant." },
      { id: 40, name: "Butter Filet Mignon", price: "$40.00", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop", description: "Melt-in-your-mouth filet mignon topped with saffron butter." },
      { id: 41, name: "Veggie Charcoal Platter", price: "$18.00", image: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=600&auto=format&fit=crop", description: "A feast of charcoal-grilled vegetables and halloumi." },
      { id: 42, name: "Crispy Duck Breast", price: "$34.00", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop", description: "Pan-seared and grilled duck breast served with cherry glaze." },
      { id: 43, name: "Stuffed Bell Peppers", price: "$16.00", image: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=600&auto=format&fit=crop", description: "Large peppers stuffed with seasoned ground beef and rice." },
      { id: 44, name: "Slow-Roasted Goat", price: "$35.00", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop", description: "Tender goat shoulder roasted slowly for 48 hours." },
      { id: 45, name: "Mahi Mahi Skewers", price: "$26.00", image: "https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?w=600&auto=format&fit=crop", description: "Fresh Mahi Mahi chunks grilled with pineapple." },
      { id: 46, name: "Beef Stroganoff", price: "$22.50", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop", description: "Tender beef strips in a creamy mushroom sauce." },
      { id: 47, name: "Lamb Moussaka", price: "$24.00", image: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=600&auto=format&fit=crop", description: "Baked eggplant and lamb casserole topped with bechamel." },
      { id: 48, name: "Grilled Tuna Steak", price: "$28.00", image: "https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?w=600&auto=format&fit=crop", description: "Perfectly seared tuna steak with Mediterranean spices." },
      { id: 49, name: "Persian Chicken Parmesan", price: "$21.00", image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=600&auto=format&fit=crop", description: "Crispy chicken breast topped with a rich tomato herb sauce." },
      { id: 50, name: "Braised Short Ribs", price: "$36.00", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop", description: "Bone-in short ribs slow-cooked until extremely tender." }
    ]
  };

  const filteredFoods = menuData[activeTab].filter(item => 
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="pt-32 pb-24 bg-[#0A0F1A] min-h-screen px-4 font-sans selection:bg-orange-500 selection:text-white relative">
      
      {popup.show && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 bg-green-500/20 backdrop-blur-md border border-green-500/50 px-6 py-3 rounded-xl shadow-lg flex items-center gap-3">
            <span className="text-white font-medium">{popup.message}</span>
        </div>
      )}

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-5xl md:text-6xl font-serif text-white mb-6 tracking-wide">Our Menu</h2>
        </div>

        {/* Search Bar */}
        <div className="flex justify-center mb-12">
            <input 
                type="text" 
                placeholder="Search your favorite food..." 
                className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white w-full max-w-lg outline-none focus:border-orange-500 transition shadow-sm"
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center items-center gap-12 mb-20">
          <button onClick={() => {setActiveTab('Lunch'); setSearch('')}} className={`pb-2 text-lg uppercase tracking-widest font-semibold ${activeTab === 'Lunch' ? 'text-orange-500' : 'text-gray-400'}`}>Lunch Menu</button>
          <button onClick={() => {setActiveTab('Dinner'); setSearch('')}} className={`pb-2 text-lg uppercase tracking-widest font-semibold ${activeTab === 'Dinner' ? 'text-orange-500' : 'text-gray-400'}`}>Dinner Menu</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredFoods.length > 0 ? (
            filteredFoods.map((item) => (
              <div key={item.id} className="bg-[#111827] border border-white/10 rounded-2xl overflow-hidden hover:border-orange-500/50 transition-all shadow-sm flex flex-col">
                <div className="h-48 overflow-hidden relative">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  <div className="absolute top-3 right-3 bg-gray-900/90 px-3 py-1 rounded-full shadow-sm"><span className="text-orange-500 font-bold text-sm">{item.price}</span></div>
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-white mb-2">{item.name}</h3>
                  <p className="text-gray-400 text-xs mb-4">{item.description}</p>
                  <button onClick={() => { addToCart(item); showSuccessPopup(item.name); }} className="w-full py-2.5 bg-orange-500 text-white rounded-lg hover:bg-[#E65C00] mt-auto font-medium">Order Now</button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center col-span-4">No food items found matching your search!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;