import React from 'react';
import { Instagram, Facebook, Youtube, Mail } from 'lucide-react';

const InfoSection = () => {
  return (
    <section id="contatti" className="bg-white">
      {/* Chi Siamo */}
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Chi Siamo</h2>
            <p className="mt-4 text-neutral-700">
              “Da generazioni trasformiamo la terra in bellezza. Nel nostro laboratorio artigianale la ceramica è più
              di un mestiere: è una forma d’espressione che unisce tradizione e innovazione.”
            </p>
          </div>
          <div className="rounded-xl bg-neutral-100 p-6">
            <h3 className="text-lg font-medium">Contatti / Ordini personalizzati</h3>
            <p className="mt-2 text-neutral-700">
              “Desideri una creazione unica? Contattaci per statue, decorazioni o idee personalizzate. Saremo felici di
              dare forma ai tuoi desideri.”
            </p>

            <form className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Nome"
                className="w-full rounded-md border border-neutral-300 bg-white px-4 py-3 text-sm outline-none focus:border-black"
                aria-label="Nome"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-md border border-neutral-300 bg-white px-4 py-3 text-sm outline-none focus:border-black"
                aria-label="Email"
              />
              <input
                type="text"
                placeholder="Oggetto"
                className="w-full rounded-md border border-neutral-300 bg-white px-4 py-3 text-sm outline-none focus:border-black sm:col-span-2"
                aria-label="Oggetto"
              />
              <textarea
                placeholder="Descrivi la tua richiesta..."
                className="w-full rounded-md border border-neutral-300 bg-white px-4 py-3 text-sm outline-none focus:border-black sm:col-span-2"
                rows={5}
                aria-label="Messaggio"
              />
              <div className="sm:col-span-2">
                <button type="button" className="w-full rounded-md bg-black px-5 py-3 text-sm font-medium text-white transition hover:bg-neutral-800">
                  Invia richiesta
                </button>
              </div>
            </form>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-neutral-700">
              <Mail className="h-4 w-4" />
              <a href="mailto:info@ceramichedarte.it" className="underline">
                info@ceramichedarte.it
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
          <p className="text-sm text-neutral-700">© 2025 Ceramiche d’Arte – Tutti i diritti riservati</p>
          <div className="flex items-center gap-5">
            <a
              href="#"
              aria-label="Instagram"
              className="flex items-center gap-2 text-sm text-neutral-800 transition hover:text-black"
            >
              <Instagram className="h-5 w-5" /> <span className="hidden sm:inline">Instagram</span>
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="flex items-center gap-2 text-sm text-neutral-800 transition hover:text-black"
            >
              <Facebook className="h-5 w-5" /> <span className="hidden sm:inline">Facebook</span>
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="flex items-center gap-2 text-sm text-neutral-800 transition hover:text-black"
            >
              <Youtube className="h-5 w-5" /> <span className="hidden sm:inline">YouTube</span>
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default InfoSection;
