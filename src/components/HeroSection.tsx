import { useEffect, useRef, useState } from 'react';
import banner from '../assets/banner.png';
import banner2 from '../assets/banner2.png';

function HeroSection() {
  const heroImages = [
    banner,
    banner2,
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const scroll = (direction: 'left' | 'right') => {
    const { current } = scrollRef;
    if (current) {
      const { scrollLeft, clientWidth, scrollWidth } = current;
      const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 10;

      if (direction === 'right') {
        if (isAtEnd) {
          current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          current.scrollBy({ left: clientWidth, behavior: 'smooth' });
        }
      } else {
        current.scrollBy({ left: -clientWidth, behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      scroll('right');
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div className="relative mx-2 my-2 group" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
      <button
        onClick={() => scroll('left')}
        aria-label="Geser ke kiri"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white p-3 md:p-5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer text-lg"
      >
        ❮
      </button>

      <div ref={scrollRef} className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [scrollbar-width:none] rounded-md gap-2">
        {heroImages.map((imgUrl, index) => (
          <img key={index} src={imgUrl} alt={`Banner Hero ${index + 1}`} className="  flex-shrink-0 snap-center rounded-lg" />
        ))}
      </div>

      <button
        onClick={() => scroll('right')}
        aria-label="Geser ke kanan"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white p-3 md:p-5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer text-lg"
      >
        ❯
      </button>
    </div>
  );
}

export default HeroSection;
