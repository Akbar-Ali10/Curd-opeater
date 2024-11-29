import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../Home';
import About from '../About';
import ContactUs from '../Contact-Us';
import Services from '../Services';
import Books from '../Book';

function Routers() {
    return (
        <>
        
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact-Us" element={<ContactUs />} />
                <Route path="/services" element={<Services />} />
                <Route path="/books" element={<Books />} />
                <Route path="/books/edit/:id" element={<Home />} />
            </Routes>
        </>
    )
}

export default Routers;