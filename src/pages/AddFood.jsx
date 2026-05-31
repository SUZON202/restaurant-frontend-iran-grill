import React from 'react';

const AddFood = () => {
    const handleAddFood = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const price = form.price.value;
        const category = form.category.value;
        const image = form.image.value;
        const description = form.description.value;

        const newFood = { name, price, category, image, description };
        
        const token = localStorage.getItem('access-token');

        fetch('https://iran-grill-backend.onrender.com/api/foods', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${token}`
            },
            body: JSON.stringify(newFood)
        })
        .then(res => res.json())
        .then(data => {
            if(data.success) {
                alert("খাবারটি ডাটাবেসে সফলভাবে যোগ করা হয়েছে! 🎉");
                form.reset();
            } else {
                alert(data.error || "কিছু একটা সমস্যা হয়েছে!");
            }
        })
        .catch(err => {
            console.error("Error adding food:", err);
            alert("সার্ভারে কানেক্ট করতে সমস্যা হচ্ছে!");
        });
    };

    return (
        <div className="w-full max-w-4xl mx-auto mt-10 p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl">
            <h2 className="text-3xl font-semibold text-white mb-8 text-center border-b border-gray-700 pb-4">
                Add New Food Item
            </h2>

            <form onSubmit={handleAddFood} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-gray-300 text-sm font-medium mb-2">Food Name</label>
                        <input 
                            type="text" 
                            name="name"
                            placeholder="e.g. Beef Koobideh Wrap" 
                            className="w-full bg-black/30 text-white border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-orange-500 transition-colors"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-300 text-sm font-medium mb-2">Price ($)</label>
                        <input 
                            type="number" 
                            name="price"
                            step="0.01"
                            placeholder="e.g. 12.50" 
                            className="w-full bg-black/30 text-white border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-orange-500 transition-colors"
                            required
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-gray-300 text-sm font-medium mb-2">Category</label>
                        <select 
                            name="category"
                            className="w-full bg-black/30 text-gray-300 border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-orange-500 transition-colors appearance-none"
                            required
                        >
                            <option value="lunch">Lunch Menu</option>
                            <option value="dinner">Dinner Menu</option>
                            <option value="drinks">Drinks & Beverages</option>
                            <option value="dessert">Desserts</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-gray-300 text-sm font-medium mb-2">Image URL</label>
                        <input 
                            type="url" 
                            name="image"
                            placeholder="https://example.com/image.jpg" 
                            className="w-full bg-black/30 text-white border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-orange-500 transition-colors"
                            required
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Description</label>
                    <textarea 
                        name="description"
                        rows="4"
                        placeholder="Short description of the food..." 
                        className="w-full bg-black/30 text-white border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-orange-500 transition-colors resize-none"
                        required
                    ></textarea>
                </div>

                <div className="mt-8">
                    <button 
                        type="submit" 
                        className="w-full bg-[#f97316] hover:bg-[#ea580c] text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 shadow-[0_0_15px_rgba(249,115,22,0.4)] hover:shadow-[0_0_25px_rgba(249,115,22,0.6)]"
                    >
                        Add Item to Menu
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddFood;