'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface Artwork {
  name: string;
  path: string;
  image: string;
}

const artworks: Artwork[] = [
  { name: 'Agua', path: '/obras/agua', image: '/images/agua.png' },
  { name: 'Bicho', path: '/obras/bicho', image: '/images/bicho.jpg' },
  { name: 'Chiri', path: '/obras/chiri', image: '/images/chiri.jpg' },
  { name: 'Contemplation', path: '/obras/contemplation', image: '/images/contemplation.png' },
  { name: 'Pixelverse', path: '/obras/pixelverse', image: '/images/pixelverse.png' },
  { name: 'Planta', path: '/obras/planta', image: '/images/planta.png' },
  { name: 'Sachi', path: '/obras/sachi', image: '/images/sachi.png' },
  { name: 'Turtle', path: '/obras/turtle', image: '/images/turtle.png' },
];

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (path: string) => {
    setIsOpen(false);
    // For obra pages, use full page reload to avoid WebGL context issues
    // For home page, use router navigation
    if (path.startsWith('/obras/')) {
      // Full page reload for obra pages to ensure clean WebGL context
      setTimeout(() => {
        window.location.href = path;
      }, 150);
    } else {
      // Normal navigation for other pages
      setTimeout(() => {
        router.push(path);
      }, 100);
    }
  };

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="fixed top-4 right-4 z-50 p-2 bg-white rounded-lg shadow-lg hover:bg-gray-100 transition-colors"
        aria-label="Toggle menu"
      >
        <div className="w-6 h-5 flex flex-col justify-between">
          <span
            className={`block h-0.5 bg-gray-800 transition-all duration-300 ${
              isOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          ></span>
          <span
            className={`block h-0.5 bg-gray-800 transition-all duration-300 ${
              isOpen ? 'opacity-0' : ''
            }`}
          ></span>
          <span
            className={`block h-0.5 bg-gray-800 transition-all duration-300 ${
              isOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          ></span>
        </div>
      </button>

      {/* Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMenu}
      ></div>

      {/* Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-40 transform transition-transform duration-300 overflow-y-auto ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Artworks</h2>

          <div className="grid grid-cols-2 gap-4">
            {artworks.map((artwork) => (
              <button
                key={artwork.name}
                onClick={() => handleNavigation(artwork.path)}
                className="group block text-left"
              >
                <div className="relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src={artwork.image}
                    alt={artwork.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 150px"
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-2">
                      <p className="text-white text-sm font-medium text-center">
                        {artwork.name}
                      </p>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Home Link */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <button
              onClick={() => handleNavigation('/')}
              className="block w-full py-3 px-4 text-center bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300"
            >
              Home
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
