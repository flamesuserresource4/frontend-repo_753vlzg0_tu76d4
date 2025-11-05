import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[80vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          src="https://videos.pexels.com/video-files/2796115/2796115-uhd_2560_1440_30fps.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/70" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center justify-center px-6 py-24 text-center md:py-32">
        <h1 className="mb-6 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
          Ogni forma racconta una storia
        </h1>
        <p className="mx-auto max-w-3xl text-base text-neutral-200 sm:text-lg">
          Ogni dettaglio è frutto di pazienza, calore e arte. Scopri le nostre creazioni uniche in ceramica realizzate interamente a mano.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href="#galleria" className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-neutral-200">
            Esplora la galleria
          </a>
          <a href="#laboratorio" className="rounded-full border border-white/70 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10">
            Guarda il laboratorio
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
