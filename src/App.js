import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About.js';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/about' element={<About />} />
                    <Route path='/' element={<Home />} />
                    <Route path='*' element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;