import React from 'react';
import LayoutNavbar from './components/LayoutNavbar';
import HeroSection from './components/HeroSection';
import TestimonialsSection from './components/TestimonialsSection';
import GallerySection from './components/GallerySection';
import LayoutFooter from './components/LayoutFooter';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Productos from './pages/Productos'; // tu vista CRUD

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <LayoutNavbar />
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <TestimonialsSection />
                  <GallerySection />
                </>
              }
            />
            <Route path="/productos" element={<Productos />} />
          </Routes>
        </main>
        <LayoutFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
