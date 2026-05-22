import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import ServiceArea from "../pages/ServiceArea";
import Menu from "../pages/Menu";
import Reservations from "../pages/Reservations";
import Contact from "../pages/Contact";
import Blog from "../pages/Blog"; 
import OnlineOrders from "../pages/OnlineOrders";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AdminDashboard from "../pages/AdminDashboard";
import AdminRoute from "../routes/AdminRoute"; 
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout"; // 🌟 Checkout পেজ ইমপোর্ট করা হলো

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/service-area", element: <ServiceArea /> },
      { path: "/menu", element: <Menu /> },
      { path: "/reservations", element: <Reservations /> },
      { path: "/contact", element: <Contact /> },
      { path: "/blog", element: <Blog /> },
      { path: "/online-orders", element: <OnlineOrders /> },
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
      
      // Cart রাউট
      { path: "/cart", element: <Cart /> },
      
      // 🌟 Checkout রাউট যুক্ত করা হলো 🌟
      { path: "/checkout", element: <Checkout /> },
      
      // Admin Dashboard সম্পূর্ণ সুরক্ষিত (Protected)
      { 
        path: "/dashboard",
        element: (
          <AdminRoute>
            <AdminDashboard />
          </AdminRoute>
        ) 
      },
    ],
  },
]);