import hp from "../assets/hp.png"
import laptop from "../assets/laptop.png"
import tv from "../assets/tv.jpg"
import camera from "../assets/camera.png"
import smartwatch from "../assets/smartwatch.jpg"
import earphone from "../assets/earphone.jpg"

interface TypeCategory {
    id: number
    image: string
    title: string
}

const category: TypeCategory[] = [
  {
    id: 1,
    image: hp,
    title: 'Handphone',
  },
  {
    id: 2,
    image: laptop,
    title: 'Laptop',
  },
  {
    id: 3,
    image: tv,
    title: 'TV',
  },
  {
    id: 4,
    image: camera,
    title: 'Kamera',
  },
  {
    id: 5,
    image: smartwatch,
    title: 'Smartwatch',
  },
  {
    id: 6,
    image: earphone,
    title: 'Earphone',
  },
];

function CategorySection() {
  return (
    <section className="mx-2 mt-10">
      <h1 className="mb-3 text-xl font-bold">Kategori</h1>
      <div className="grid grid-cols-4 sm:grid-cols-6 gap-3 p-2">
        {category.map((c) => (
          <div key={c.id} className="text-center p-2.5 border rounded-md w-full">
            <img src={c.image} alt="" className="w-20 text-center mx-auto" />
            <p className="text-sm mt-1.5 text-stone-800">{c.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategorySection;
