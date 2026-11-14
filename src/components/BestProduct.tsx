import { useRef } from 'react';
import hp from '../assets/hp.png';
import laptop from '../assets/laptop.png';
import tv from '../assets/tv.jpg';
import kamera from '../assets/camera.png';
import smartwatch from '../assets/smartwatch.jpg';
import earphone from '../assets/earphone.jpg';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TypeProd {
  id: number;
  name: string;
  price: string;
  rating: number;
  sold: string;
  storeName: string;
  image: string;
}

const prod: TypeProd[] = [
  {
    id: 1,
    name: 'Smartphone Android',
    price: 'Rp. 2.500.000',
    rating: 4.9,
    sold: '2.1K',
    storeName: 'TechStore Official',
    image: hp,
  },
  {
    id: 2,
    name: 'Laptop Ultrabook Pro 14',
    price: 'Rp. 12.500.000',
    rating: 4.8,
    sold: '850',
    storeName: 'Nusantara Gadget',
    image: laptop,
  },
  {
    id: 3,
    name: 'Smart TV 4K UHD 50 Inch',
    price: 'Rp. 5.800.000',
    rating: 4.9,
    sold: '1.3K',
    storeName: 'Elektronik Jaya ID',
    image: tv,
  },
  {
    id: 4,
    name: 'Kamera Mirrorless 4K',
    price: 'Rp. 8.900.000',
    rating: 4.7,
    sold: '420',
    storeName: 'Lensa Kamera Official',
    image: kamera,
  },
  {
    id: 5,
    name: 'Smartwatch Sport AMOLED',
    price: 'Rp. 1.250.000',
    rating: 4.8,
    sold: '3.4K',
    storeName: 'Wearable Tech Store',
    image: smartwatch,
  },
  {
    id: 6,
    name: 'TWS Wireless Earphone ANC',
    price: 'Rp. 450.000',
    rating: 4.9,
    sold: '5.2K',
    storeName: 'Audio Prime Official',
    image: earphone,
  },
];

function BestProductSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 250;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="mx-2 mt-10 relative">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-bold">Produk Terlaris</h1>

        <div className="flex gap-2">
          <button onClick={() => handleScroll('left')} className="p-1.5 border rounded-md bg-zinc-100 hover:bg-gray-100 text-sm font-bold shadow-sm" aria-label="Scroll Kiri">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={() => handleScroll('right')} className="p-1.5 border rounded-md bg-zinc-100 hover:bg-gray-100 text-sm font-bold shadow-sm" aria-label="Scroll Kanan">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div ref={scrollRef} className="mt-3 flex gap-3 overflow-x-auto pb-3 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {prod.map((p) => (
          <div key={p.id} className="w-40 sm:w-48 shrink-0 border rounded-lg p-2 bg-white shadow-sm">
            <div className="w-full h-36 overflow-hidden rounded-md bg-gray-100">
              <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
            </div>
            <p className="truncate mt-2 font-medium text-sm">{p.name}</p>
            <p className="text-sm font-bold mt-1">{p.price}</p>
            <p className="text-xs text-gray-600 mt-1">
              Terjual {p.sold} ⭐ {p.rating}
            </p>
            <p className="text-xs text-gray-500 truncate mt-1">{p.storeName}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BestProductSection;
