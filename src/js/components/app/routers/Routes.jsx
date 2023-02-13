import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Books from "../pages/Books";
import BookDetail from "../pages/BookDetail";
import Checkout from "../pages/Checkout";
import Contact from "../pages/Contact";

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Books />} />
            <Route path="/books/:id" element={<BookDetail />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    );
};

export default Routers;
