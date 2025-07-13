import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import HomePage from './landing_page/home/HomePage';
import Signup from "./landing_page/signup/Signup";
import About from "./landing_page/about/AboutPage";
import Product from "./landing_page/products/ProductPage";
import Pricing from "./landing_page/pricing/PricingPage";
import Support from "./landing_page/support/SupportPage";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import Notfound from "./landing_page/Notfound";
import Login from "./landing_page/login/Login";
import { CookiesProvider } from "react-cookie";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CookiesProvider>
    <BrowserRouter>
      <Navbar />
      <main>
      <Routes>
        <Route  path="/" element={<HomePage/>}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/pricing" element={<Pricing />}></Route>
        <Route path="/support" element={<Support />}></Route>
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  </CookiesProvider>
);
