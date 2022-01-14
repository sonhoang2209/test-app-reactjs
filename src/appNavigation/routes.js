import React from 'react'
import {
    Routes,
    Route
} from "react-router-dom";

import Home from '../pages/Home';
import About from '../pages/About';
import Service from '../pages/Service';
import Technical from '../pages/Technical';
import Team from '../pages/Team';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';

export default function Routers() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Service />} />
                <Route path="/technical" element={<Technical />} />
                <Route path="/team" element={<Team />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    )
}
