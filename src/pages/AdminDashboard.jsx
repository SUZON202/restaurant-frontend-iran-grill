import React, { useEffect, useState } from 'react';
import AddFood from './AddFood';

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState('manageFoods');
    const [messages, setMessages] = useState([]);
    const [users, setUsers] = useState([]); 
    const [orders, setOrders] = useState([]); 
    const [foods, setFoods] = useState([]); 
    
    // 🌟 শুধু এই এডিট স্টেটগুলো যুক্ত করা হয়েছে 🌟
    const [editingFood, setEditingFood] = useState(null);
    const [editFormData, setEditFormData] = useState({ name: '', category: '', price: '', description: '', image: '' });
    
    const [loadingMessages, setLoadingMessages] = useState(true);
    const [loadingUsers, setLoadingUsers] = useState(true);
    const [loadingOrders, setLoadingOrders] = useState(true);
    const [loadingFoods, setLoadingFoods] = useState(true);

    const token = localStorage.getItem('access-token');

    // Messages Fetch
    useEffect(() => {
        fetch('http://localhost:5000/api/contacts', {
            headers: { authorization: `Bearer ${token}` }
        })
            .then(res => res.json())
            .then(data => {
                if(!data.error) setMessages(data);
                setLoadingMessages(false);
            })
            .catch(err => {
                console.error(err);
                setLoadingMessages(false);
            });
    }, [token]);

    // Users Fetch
    useEffect(() => {
        fetch('http://localhost:5000/api/users', {
             headers: { authorization: `Bearer ${token}` }
        })
            .then(res => res.json())
            .then(data => {
                if(!data.error) setUsers(data);
                setLoadingUsers(false);
            })
            .catch(err => {
                console.error(err);
                setLoadingUsers(false);
            });
    }, [token]);

    // Orders Fetch
    useEffect(() => {
        fetch('http://localhost:5000/api/orders', {
             headers: { authorization: `Bearer ${token}` }
        })
            .then(res => res.json())
            .then(data => {
                if(!data.error) setOrders(data);
                setLoadingOrders(false);
            })
            .catch(err => {
                console.error(err);
                setLoadingOrders(false);
            });
    }, [token]);

    // Foods Fetch
    useEffect(() => {
        fetch('http://localhost:5000/api/foods')
            .then(res => res.json())
            .then(data => {
                if(!data.error) setFoods(data);
                setLoadingFoods(false);
            })
            .catch(err => {
                console.error(err);
                setLoadingFoods(false);
            });
    }, []);

    // Message Delete
    const handleDeleteMessage = async (id) => {
        const confirmDelete = window.confirm("আপনি কি সত্যিই এই মেসেজটি ডিলিট করতে চান?");
        if (!confirmDelete) return;

        try {
            const response = await fetch(`http://localhost:5000/api/contacts/${id}`, {
                method: 'DELETE',
                headers: { authorization: `Bearer ${token}` }
            });
            if (response.ok) {
                setMessages(messages.filter((msg) => msg._id !== id));
                alert("মেসেজটি ডিলিট হয়েছে!");
            }
        } catch (err) {
            alert("ডিলিট করতে সমস্যা হয়েছে!");
        }
    };

    // Order Status Update
    const handleStatusChange = async (id, newStatus) => {
        try {
            const response = await fetch(`http://localhost:5000/api/orders/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${token}`
                },
                body: JSON.stringify({ status: newStatus })
            });

            if (response.ok) {
                setOrders(orders.map(order => order._id === id ? { ...order, status: newStatus } : order));
                alert(`Order status updated to ${newStatus}!`);
            }
        } catch (error) {
            alert("Failed to update status.");
        }
    };

    // Order Delete
    const handleDeleteOrder = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this order?");
        if (!confirmDelete) return;

        try {
            const response = await fetch(`http://localhost:5000/api/orders/${id}`, {
                method: 'DELETE',
                headers: { authorization: `Bearer ${token}` }
            });
            
            if (response.ok) {
                setOrders(orders.filter((order) => order._id !== id));
                alert("Order deleted successfully!");
            }
        } catch (err) {
            alert("Failed to delete order.");
        }
    };

    // User Delete
    const handleDeleteUser = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this user?");
        if (!confirmDelete) return;

        try {
            const response = await fetch(`http://localhost:5000/api/users/${id}`, {
                method: 'DELETE',
                headers: { authorization: `Bearer ${token}` }
            });
            
            if (response.ok) {
                setUsers(users.filter((user) => user._id !== id));
                alert("User deleted successfully!");
            }
        } catch (err) {
            alert("Failed to delete user.");
        }
    };

    // Food Delete Function
    const handleDeleteFood = async (id) => {
        const confirmDelete = window.confirm("আপনি কি সত্যিই এই খাবারটি মেনু থেকে ডিলিট করতে চান?");
        if (!confirmDelete) return;

        try {
            const response = await fetch(`http://localhost:5000/api/foods/${id}`, {
                method: 'DELETE',
                headers: { authorization: `Bearer ${token}` }
            });
            
            if (response.ok) {
                setFoods(foods.filter((food) => food._id !== id));
                alert("খাবারটি সফলভাবে ডিলিট হয়েছে!");
            }
        } catch (err) {
            alert("খাবার ডিলিট করতে সমস্যা হয়েছে!");
        }
    };

    // 🌟 এডিট ফাংশনসমূহ (নতুন যুক্ত) 🌟
    const handleEditClick = (food) => {
        setEditingFood(food);
        setEditFormData({ name: food.name, category: food.category, price: food.price, description: food.description, image: food.image });
    };

    const handleUpdateFood = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/api/foods/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json', authorization: `Bearer ${token}` },
                body: JSON.stringify(editFormData)
            });
            if (response.ok) {
                setFoods(foods.map(f => f._id === id ? { ...f, ...editFormData } : f));
                setEditingFood(null);
                alert("আপডেট হয়েছে!");
            }
        } catch (err) { alert("আপডেট করতে সমস্যা হয়েছে!"); }
    };

    return (
        <div className="min-h-screen bg-slate-950 p-6 md:p-12 text-white font-sans selection:bg-orange-500 selection:text-white">
            
            <div className="mb-8">
                <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-600">
                    Admin Overview
                </h1>
                <p className="text-gray-400 mt-2">Manage your website inquiries, users, orders and food menu from here.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="p-6 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-2xl">
                    <h2 className="text-gray-400 text-sm uppercase tracking-widest">Total Messages</h2>
                    <p className="text-4xl font-bold mt-2 text-white">{messages.length}</p>
                </div>
                <div className="p-6 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-2xl">
                    <h2 className="text-gray-400 text-sm uppercase tracking-widest">Total Users</h2>
                    <p className="text-4xl font-bold mt-2 text-white">{users.length}</p>
                </div>
                <div className="p-6 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-2xl">
                    <h2 className="text-gray-400 text-sm uppercase tracking-widest">Total Orders</h2>
                    <p className="text-4xl font-bold mt-2 text-orange-500">{orders.length}</p>
                </div>
                <div className="p-6 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-2xl">
                    <h2 className="text-gray-400 text-sm uppercase tracking-widest">Menu Items</h2>
                    <p className="text-4xl font-bold mt-2 text-green-400">{foods.length}</p>
                </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-6">
                <button onClick={() => setActiveTab('orders')} className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${activeTab === 'orders' ? 'bg-orange-500 text-white shadow-lg' : 'bg-white/10 text-gray-400 hover:bg-white/20'}`}>Customer Orders</button>
                <button onClick={() => setActiveTab('messages')} className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${activeTab === 'messages' ? 'bg-orange-500 text-white shadow-lg' : 'bg-white/10 text-gray-400 hover:bg-white/20'}`}>Contact Messages</button>
                <button onClick={() => setActiveTab('users')} className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${activeTab === 'users' ? 'bg-orange-500 text-white shadow-lg' : 'bg-white/10 text-gray-400 hover:bg-white/20'}`}>User List</button>
                <button onClick={() => setActiveTab('manageFoods')} className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${activeTab === 'manageFoods' ? 'bg-orange-500 text-white shadow-lg' : 'bg-white/10 text-gray-400 hover:bg-white/20'}`}>Manage Foods</button>
                <button onClick={() => setActiveTab('addFood')} className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${activeTab === 'addFood' ? 'bg-orange-500 text-white shadow-lg' : 'bg-white/10 text-gray-400 hover:bg-white/20'}`}>Add Food</button>
            </div>

            <div className="overflow-x-auto rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl p-6 transition-all">
                
                {activeTab === 'manageFoods' && (
                    <div className="animate-fade-in">
                        <h3 className="text-lg font-bold text-gray-300 mb-4 px-2">Manage Food Menu</h3>
                        
                        {loadingFoods ? (
                            <div className="text-center py-10 text-orange-500 font-bold animate-pulse">Loading Menu Items...</div>
                        ) : (
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="border-b border-white/10 text-orange-400 text-left">
                                        <th className="p-4 uppercase text-xs">Image</th>
                                        <th className="p-4 uppercase text-xs">Food Name</th>
                                        <th className="p-4 uppercase text-xs">Category</th>
                                        <th className="p-4 uppercase text-xs">Price</th>
                                        <th className="p-4 uppercase text-xs">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {foods.map((item, index) => (
                                        <tr key={item._id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                            <td className="p-4">
                                                <div className="w-16 h-12 rounded-lg overflow-hidden">
                                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                                </div>
                                            </td>
                                            <td className="p-4 font-medium text-gray-200">
                                                {item.name}
                                                <span className="ml-2 text-xs text-gray-500">#{index + 1}</span> 
                                            </td>
                                            <td className="p-4 text-gray-400 capitalize">{item.category}</td>
                                            <td className="p-4 text-orange-400 font-bold">${item.price.toFixed(2)}</td>
                                            <td className="p-4 flex gap-2">
                                                <button onClick={() => handleEditClick(item)} className="px-4 py-1.5 bg-blue-500/20 text-blue-400 text-sm font-bold rounded-lg hover:bg-blue-500/40 transition">Edit</button>
                                                <button onClick={() => handleDeleteFood(item._id)} className="px-4 py-1.5 bg-red-500/20 text-red-400 text-sm font-bold rounded-lg hover:bg-red-500/40 transition">Delete</button>
                                            </td>
                                        </tr>
                                    ))}
                                    {foods.length === 0 && (
                                        <tr><td colSpan="5" className="text-center p-8 text-gray-500">No foods found in the database.</td></tr>
                                    )}
                                </tbody>
                            </table>
                        )}
                    </div>
                )}

                {activeTab === 'orders' && (
                    <div className="animate-fade-in">
                        <h3 className="text-lg font-bold text-gray-300 mb-4 px-2">Recent Orders</h3>
                        {loadingOrders ? (
                            <div className="text-center py-10 text-orange-500 font-bold animate-pulse">Loading Orders...</div>
                        ) : (
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="border-b border-white/10 text-orange-400 text-left">
                                        <th className="p-4 uppercase text-xs">Customer Name</th>
                                        <th className="p-4 uppercase text-xs">Contact Details</th>
                                        <th className="p-4 uppercase text-xs">Items</th>
                                        <th className="p-4 uppercase text-xs">Total Amount</th>
                                        <th className="p-4 uppercase text-xs">Status Update</th>
                                        <th className="p-4 uppercase text-xs">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orders.map((order) => (
                                        <tr key={order._id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                            <td className="p-4 font-medium">{order.customerName}</td>
                                            <td className="p-4 text-gray-300 text-sm">
                                                <p>{order.phone}</p>
                                                <p className="text-xs text-gray-500">{order.address}</p>
                                            </td>
                                            <td className="p-4 text-gray-300">{order.items?.length || 0} Items</td>
                                            <td className="p-4 text-orange-400 font-bold">${order.totalAmount}</td>
                                            <td className="p-4">
                                                <select 
                                                    value={order.status}
                                                    onChange={(e) => handleStatusChange(order._id, e.target.value)}
                                                    className={`px-3 py-1.5 text-xs rounded-lg font-bold outline-none cursor-pointer border bg-slate-900 ${
                                                        order.status === 'Pending' ? 'text-yellow-500 border-yellow-500/30' : 
                                                        order.status === 'Preparing' ? 'text-blue-400 border-blue-500/30' : 
                                                        'text-green-400 border-green-500/30'
                                                    }`}
                                                >
                                                    <option value="Pending">Pending</option>
                                                    <option value="Preparing">Preparing</option>
                                                    <option value="Delivered">Delivered</option>
                                                </select>
                                            </td>
                                            <td className="p-4 flex gap-2">
                                                <button onClick={() => handleDeleteOrder(order._id)} className="px-3 py-1.5 bg-red-500/20 text-red-400 text-xs font-bold rounded-lg hover:bg-red-500/40 transition">Delete</button>
                                            </td>
                                        </tr>
                                    ))}
                                    {orders.length === 0 && (
                                        <tr><td colSpan="6" className="text-center p-8 text-gray-500">No orders found.</td></tr>
                                    )}
                                </tbody>
                            </table>
                        )}
                    </div>
                )}

                {activeTab === 'messages' && (
                    <div className="animate-fade-in">
                        <h3 className="text-lg font-bold text-gray-300 mb-4 px-2">Contact Messages</h3>
                        {loadingMessages ? (
                            <div className="text-center py-10 text-orange-500 font-bold animate-pulse">Loading Messages...</div>
                        ) : (
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="border-b border-white/10 text-orange-400 text-left">
                                        <th className="p-4 uppercase text-xs">Name</th>
                                        <th className="p-4 uppercase text-xs">Email</th>
                                        <th className="p-4 uppercase text-xs">Phone</th>
                                        <th className="p-4 uppercase text-xs">Message</th>
                                        <th className="p-4 uppercase text-xs">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {messages.map((msg) => (
                                        <tr key={msg._id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                            <td className="p-4 font-medium">{msg.name}</td>
                                            <td className="p-4 text-gray-300">{msg.email}</td>
                                            <td className="p-4 text-gray-300">{msg.phone}</td>
                                            <td className="p-4 text-gray-400 italic">"{msg.message}"</td>
                                            <td className="p-4">
                                                <button onClick={() => handleDeleteMessage(msg._id)} className="px-4 py-1.5 bg-red-500/20 text-red-400 text-sm font-bold rounded-lg hover:bg-red-500/40 transition">Delete</button>
                                            </td>
                                        </tr>
                                    ))}
                                    {messages.length === 0 && (
                                        <tr><td colSpan="5" className="text-center p-8 text-gray-500">No messages found.</td></tr>
                                    )}
                                </tbody>
                            </table>
                        )}
                    </div>
                )}

                {activeTab === 'users' && (
                    <div className="animate-fade-in">
                         <div className="mb-8 p-6 rounded-2xl bg-gradient-to-r from-orange-500/10 to-rose-500/10 border border-orange-500/30 flex flex-col md:flex-row items-center justify-between gap-4">
                            <div className="flex items-center space-x-5">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-orange-500 to-rose-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg">S</div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">Shafiq Suzon</h3>
                                    <p className="text-orange-400 font-medium text-sm">shafiqsuzon507@gmail.com</p>
                                </div>
                            </div>
                            <div className="text-center md:text-right">
                                <span className="inline-block px-4 py-1.5 bg-orange-500 text-white text-xs font-bold rounded-full uppercase tracking-wider shadow-lg shadow-orange-500/30">Main Admin</span>
                            </div>
                        </div>
                        <h3 className="text-lg font-bold text-gray-300 mb-4 px-2">Registered Users</h3>
                        
                        {loadingUsers ? (
                            <div className="text-center py-10 text-orange-500 font-bold animate-pulse">Loading Users...</div>
                        ) : (
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="border-b border-white/10 text-orange-400 text-left">
                                        <th className="p-4 uppercase text-xs">User Name</th>
                                        <th className="p-4 uppercase text-xs">Email Address</th>
                                        <th className="p-4 uppercase text-xs">Role</th>
                                        <th className="p-4 uppercase text-xs">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((user) => (
                                        <tr key={user._id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                            <td className="p-4 font-medium">{user.name}</td>
                                            <td className="p-4 text-gray-300">{user.email}</td>
                                            <td className="p-4"><span className="px-3 py-1 bg-gray-500/20 text-gray-400 text-xs rounded-full">{user.role}</span></td>
                                            <td className="p-4">
                                                <button onClick={() => handleDeleteUser(user._id)} className="px-4 py-1.5 bg-red-500/20 text-red-400 text-sm font-bold rounded-lg hover:bg-red-500/40 transition">Delete</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                )}
                
                {activeTab === 'addFood' && <AddFood />}
            </div>

            {/* এডিট মডাল (এটি সবশেষের নিচে) */}
            {editingFood && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
                    <div className="bg-slate-900 p-8 rounded-2xl w-full max-w-md border border-white/10">
                        <h2 className="text-xl font-bold mb-4 text-white">Edit Food</h2>
                        <input type="text" value={editFormData.name} onChange={(e) => setEditFormData({...editFormData, name: e.target.value})} className="w-full bg-white/10 p-3 mb-4 rounded text-white" placeholder="Name" />
                        <input type="number" value={editFormData.price} onChange={(e) => setEditFormData({...editFormData, price: e.target.value})} className="w-full bg-white/10 p-3 mb-4 rounded text-white" placeholder="Price" />
                        <button onClick={() => handleUpdateFood(editingFood._id)} className="w-full bg-orange-500 py-3 rounded font-bold text-white hover:bg-orange-600">Save Changes</button>
                        <button onClick={() => setEditingFood(null)} className="w-full mt-2 text-gray-500">Cancel</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminDashboard;