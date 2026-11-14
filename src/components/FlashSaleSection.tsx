import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import hp from '../assets/hp.png';
import laptop from '../assets/laptop.png';
import tv from '../assets/tv.jpg';
import kamera from '../assets/camera.png';
import smartwatch from '../assets/smartwatch.jpg';
import earphone from '../assets/earphone.jpg';

interface ProductPromo {
  id: number;
  name: string;
  price: string;
  originalPrice: string;
  sold: string;
  image: string;
}

const products: ProductPromo[] = [
  {
    id: 1,
    name: 'Smartphone Android',
    price: 'Rp. 2.500.000',
    originalPrice: 'Rp. 3.200.000',
    sold: '2.1K',
    image: hp,
  },
  {
    id: 2,
    name: 'Laptop Ultrabook Pro 14',
    price: 'Rp. 12.500.000',
    originalPrice: 'Rp. 14.900.000',
    sold: '850',
    image: laptop,
  },
  {
    id: 3,
    name: 'Smart TV 4K UHD 50 Inch',
    price: 'Rp. 5.800.000',
    originalPrice: 'Rp. 7.200.000',
    sold: '1.3K',
    image: tv,
  },
  {
    id: 4,
    name: 'Kamera Mirrorless 4K',
    price: 'Rp. 8.900.000',
    originalPrice: 'Rp. 10.500.000',
    sold: '420',
    image: kamera,
  },
  {
    id: 5,
    name: 'Smartwatch Sport AMOLED',
    price: 'Rp. 1.250.000',
    originalPrice: 'Rp. 1.850.000',
    sold: '3.4K',
    image: smartwatch,
  },
  {
    id: 6,
    name: 'TWS Wireless Earphone ANC',
    price: 'Rp. 450.000',
    originalPrice: 'Rp. 790.000',
    sold: '5.2K',
    image: earphone,
  },
];

function FlashSaleSection() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const [timeLeft] = useState(() => Date.now() + 24 * 24 * 60 * 60 * 1000);

  const [remaining, setRemaining] = useState(6 * 60 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      const seconds = Math.max(0, Math.floor((timeLeft - Date.now()) / 1000));

      setRemaining(seconds);

      if (seconds <= 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const hours = Math.floor(remaining / 3600);
  const minutes = Math.floor((remaining % 3600) / 60);
  const seconds = remaining % 60;

  const formatTime = (value: number) => String(value).padStart(2, '0');

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -350,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: 350,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="mt-10 mx-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h1 className="text-lg font-bold">Flash Sale</h1>

          <div className="flex items-center gap-1">
            <span className="bg-zinc-900 text-white text-xs px-2 py-1 rounded-md tabular-nums">{formatTime(hours)}</span>
            <span className="text-sm font-bold">:</span>
            <span className="bg-zinc-900 text-white text-xs px-2 py-1 rounded-md tabular-nums">{formatTime(minutes)}</span>
            <span className="text-sm font-bold">:</span>
            <span className="bg-zinc-900 text-white text-xs px-2 py-1 rounded-md tabular-nums">{formatTime(seconds)}</span>
          </div>
        </div>

        <div className="flex gap-2">
          <button type="button" onClick={scrollLeft} aria-label="Scroll Left" className="p-1.5 rounded-md bg-zinc-100 hover:bg-zinc-200 border border-zinc-300 cursor-pointer transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button type="button" onClick={scrollRight} aria-label="Scroll Right" className="p-1.5 rounded-md bg-zinc-100 hover:bg-zinc-200 border border-zinc-300 cursor-pointer transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div ref={sliderRef} className="mt-5 flex overflow-x-auto gap-3 pb-3 scroll-smooth [&::-webkit-scrollbar]:hidden [scrollbar-width:none]">
        {products.map((product) => (
          <div key={product.id} className="w-fit shrink-0 border p-1 rounded-md">
            <div>
              <img src={product.image} alt={product.name} className="w-40 h-40 object-cover rounded-md" />
            </div>

            <div className="p-1">
              <p className="text-sm font-bold">{product.name}</p>
              <p className="text-sm mt-1">{product.price}</p>
              <p className="text-xs line-through mt-1">{product.originalPrice}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FlashSaleSection;
