import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import VasstrInfo from './pages/VasstrInfo';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Layout from './components/Layout';
import './index.css';

function App() {
  return (
    <Router basename="/vasstr/">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="vasstr-info" element={<VasstrInfo />} />
          <Route path="products" element={<Products />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
