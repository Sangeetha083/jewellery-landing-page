import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import ProductShow from './components/ProductShow.jsx';
import Allproducts from './components/Allproducts.jsx';
import Cratsman from './components/Cratsman.jsx';
import Testimonials from './components/Testimonials.jsx';
import Trust from './components/Trust.jsx';
import Footer from "./components/Footer.jsx";
import Rings from './components/Rings.jsx';
import Necklace from './components/Necklace.jsx';
import Bracelets from './components/Bracelets.jsx';
import Bangles from './components/Bangles.jsx';
import Earrings from './components/Earrings.jsx';
import Book from './components/Book.jsx';
import Contact from './components/Contact.jsx';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <ProductShow />
              <Cratsman />
              <Testimonials />
              <Trust />
              <Footer />
            </>
          }
        />

        {/* Products Page */}
        <Route path="/allproducts" element={<Allproducts />} />
        <Route path="/rings" element={<Rings />} />
        <Route path="/necklaces" element={<Necklace />} />
        <Route path="/earrings" element={<Earrings />} />
        <Route path="/bangles" element={<Bangles />} />
        <Route path="/bracelets" element={<Bracelets />} />
        <Route path="/book-consultation" element={<Book />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;