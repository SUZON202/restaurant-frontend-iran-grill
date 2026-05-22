import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Routes'
import { CartProvider } from './context/CartContext' // 🌟 CartProvider ইমপোর্ট করা হলো

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 🌟 পুরো অ্যাপকে CartProvider দিয়ে মুড়ে দেওয়া হলো 🌟 */}
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>,
)