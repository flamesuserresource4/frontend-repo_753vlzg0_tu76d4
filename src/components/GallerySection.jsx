import React from 'react';

const items = [
  {
    title: 'Statua Classica',
    src: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1600&auto=format&fit=crop',
    category: 'Statue',
  },
  {
    title: 'Vaso Smaltato',
    src: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&w=1600&auto=format&fit=crop',
    category: 'Vasi',
  },
  {
    title: 'Figura Sacra',
    src: 'https://images.unsplash.com/photo-1628103343862-4ab1cb900224?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxGaWd1cmElMjBTYWNyYXxlbnwwfDB8fHwxNzYyMzI0Nzg5fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    category: 'Figure Sacre',
  },
  {
    title: 'Decorazione da Parete',
    src: 'https://images.unsplash.com/photo-1567793750641-17951da21da0?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxEZWNvcmF6aW9uZSUyMGRhJTIwUGFyZXRlfGVufDB8MHx8fDE3NjIzMjQ3ODl8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    category: 'Decorazioni',
  },
  {
    title: 'Vaso Raku',
    src: 'https://images.unsplash.com/photo-1600490036275-35f68c0b1ea7?q=80&w=1600&auto=format&fit=crop',
    category: 'Vasi',
  },
  {
    title: 'Bassorilievo',
    src: 'https://images.unsplash.com/photo-1729887063282-76ed1fbd2f3b?ixid=M3w3OTkxMTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjIzMjQ3OTF8&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    category: 'Decorazioni',
  },
];

const GalleryCard = ({ item }) => (
  <div className="group relative overflow-hidden rounded-xl bg-neutral-100 shadow-sm transition hover:shadow-md">
    <img
      src={item.src}
      alt={item.title}
      className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
      <span className="mb-1 inline-block rounded-full bg-white/10 px-3 py-1 text-xs tracking-wide">
        {item.category}
      </span>
      <h3 className="text-lg font-medium">{item.title}</h3>
    </div>
  </div>
);

const GallerySection = () => {
  return (
    <section id="galleria" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:mb-14 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Galleria / Collezioni</h2>
            <p className="mt-3 max-w-2xl text-neutral-600">
              “Sfoglia la nostra galleria e lasciati ispirare dalle nostre statue in ceramica: opere che fondono
              estetica e tradizione. Ogni pezzo è unico e porta con sé la firma autentica dell’artigianato italiano.”
            </p>
          </div>
          <a href="#contatti" className="shrink-0 rounded-full border border-neutral-300 px-5 py-2 text-sm font-medium text-neutral-800 hover:bg-neutral-50">
            Richiedi un pezzo su misura
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, idx) => (
            <GalleryCard key={idx} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
