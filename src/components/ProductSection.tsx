import hp from '../assets/hp.png';
import laptop from '../assets/laptop.png';
import tv from '../assets/tv.jpg';
import kamera from '../assets/camera.png';
import smartwatch from '../assets/smartwatch.jpg';
import earphone from '../assets/earphone.jpg';
import { Store } from 'lucide-react';

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
  {
    id: 7,
    name: 'Kamera Mirrorless 4K',
    price: 'Rp. 8.900.000',
    rating: 4.7,
    sold: '420',
    storeName: 'Lensa Kamera Official',
    image: kamera,
  },
  {
    id: 8,
    name: 'Smartwatch Sport AMOLED',
    price: 'Rp. 1.250.000',
    rating: 4.8,
    sold: '3.4K',
    storeName: 'Wearable Tech Store',
    image: smartwatch,
  },
  {
    id: 9,
    name: 'TWS Wireless Earphone ANC',
    price: 'Rp. 450.000',
    rating: 4.9,
    sold: '5.2K',
    storeName: 'Audio Prime Official',
    image: earphone,
  },
];

function ProductSection() {
  return (
    <section className="mx-3 mt-20">
      <h1 className="text-lg font-bold">Semua Produk</h1>
      <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-5 xl:gap-10">
        {prod.map((p) => (
          <div key={p.id} className="shrink-0 border rounded-lg p-2 bg-white shadow-sm">
            <div className="overflow-hidden rounded-md bg-gray-100">
              <img src={p.image} alt={p.name} className="object-cover" />
            </div>
            <p className="truncate mt-2 font-medium text-sm">{p.name}</p>
            <p className="text-sm font-bold mt-1">{p.price}</p>
            <p className="text-xs text-gray-600 mt-1">
              Terjual {p.sold} ⭐ {p.rating}
            </p>
            <p className="text-xs text-gray-500 truncate mt-1.5 flex gap-1 items-center">
              <Store /> <p>{p.storeName}</p>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductSection;
