import React from 'react';
import HeroSection from './components/HeroSection.jsx';
import GallerySection from './components/GallerySection.jsx';
import VideoWorkshop from './components/VideoWorkshop.jsx';
import InfoSection from './components/InfoSection.jsx';

function App() {
  return (
    <div className="min-h-screen scroll-smooth antialiased">
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 text-white">
          <a href="#home" className="text-sm font-semibold tracking-wide">Ceramiche d’Arte</a>
          <nav className="hidden items-center gap-6 text-sm sm:flex">
            <a href="#galleria" className="text-white/80 hover:text-white">Galleria</a>
            <a href="#laboratorio" className="text-white/80 hover:text-white">Laboratorio</a>
            <a href="#contatti" className="text-white/80 hover:text-white">Contatti</a>
          </nav>
        </div>
      </header>

      <main>
        <HeroSection />
        <GallerySection />
        <VideoWorkshop />
        <InfoSection />
      </main>
    </div>
  );
}

export default App;
