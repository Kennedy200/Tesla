import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import Product Images
import modelS from '/images/modelS.jpg';
import model3 from '/images/model3.jpg';
import modelX from '/images/modelX.jpg';
import modelY from '/images/modelY.jpg';
import cybertruck from '/images/cybertruck.jpg';
import semi from '/images/semi.jpg';
import solar from '/images/solar.jpg';

gsap.registerPlugin(ScrollTrigger);

const teslaProducts = [
  { image: modelS, name: 'Model S', description: 'The fastest Tesla with Plaid mode.' },
  { image: model3, name: 'Model 3', description: 'Affordable and efficient electric sedan.' },
  { image: modelX, name: 'Model X', description: 'Luxury SUV with falcon-wing doors.' },
  { image: modelY, name: 'Model Y', description: 'Compact SUV designed for versatility.' },
  { image: cybertruck, name: 'Cybertruck', description: 'Futuristic truck with extreme durability.' },
  { image: semi, name: 'Tesla Semi', description: 'Powerful electric truck for long hauls.' },
  { image: solar, name: 'Solar Roof', description: 'Sleek solar panels for clean energy at home.' },
];

export default function TeslaProductsSection() {
  const slideshowRef = useRef(null);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const animationRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Add resize listener
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (animationRef.current) {
      animationRef.current.kill();
    }

    // Different settings for mobile and desktop
    const settings = {
      mobile: {
        duration: 8,
        gap: 8,
        ease: 'none',
      },
      desktop: {
        duration: 30,
        gap: 16,
        ease: 'linear',
      }
    };

    const { duration, gap, ease } = isMobile ? settings.mobile : settings.desktop;

    // Create infinite scroll animation
    const createAnimation = () => {
      const items = slideshowRef.current.children;
      const totalWidth = Array.from(items).reduce((total, item) => {
        const style = window.getComputedStyle(item);
        return total + item.offsetWidth + parseFloat(style.marginRight);
      }, 0);

      animationRef.current = gsap.to(slideshowRef.current, {
        x: -totalWidth,
        duration: duration,
        ease: ease,
        repeat: -1,
        onRepeat: () => {
          gsap.set(slideshowRef.current, { x: 0 });
        }
      });
    };

    createAnimation();

    // Pause animation on hover for desktop
    if (!isMobile) {
      slideshowRef.current.addEventListener('mouseenter', () => animationRef.current.pause());
      slideshowRef.current.addEventListener('mouseleave', () => animationRef.current.resume());
    }

    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [isMobile]);

  const cardWidth = isMobile ? 'w-[300px]' : 'w-[400px] md:w-[500px]';
  const cardGap = isMobile ? 'gap-8' : 'gap-16';

  return (
    <section className="relative w-full bg-[#0D1117] py-12 md:py-20 overflow-hidden">
      <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-10 md:mb-14 px-4">
        Explore Tesla's Innovations
      </h2>

      <div className="relative overflow-hidden">
        <div
          ref={slideshowRef}
          className={`flex ${cardGap} items-center whitespace-nowrap`}
        >
          {/* Double the items for smooth infinite scroll */}
          {[...teslaProducts, ...teslaProducts].map((product, index) => (
            <div
              key={index}
              className={`flex-shrink-0 ${cardWidth} transform transition duration-200 ${!isMobile && 'hover:scale-105'} relative`}
              onMouseEnter={() => !isMobile && setHoverIndex(index)}
              onMouseLeave={() => !isMobile && setHoverIndex(null)}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto rounded-xl shadow-lg"
                loading="lazy"
              />

              {/* Show product info always on mobile, on hover for desktop */}
              {(isMobile || hoverIndex === index) && (
                <div className="absolute inset-0 bg-black bg-opacity-60 rounded-xl flex flex-col items-center justify-center text-white transition-opacity duration-200 p-4">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 text-center">{product.name}</h3>
                  <p className="text-base md:text-lg text-center">{product.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 w-32 h-full bg-gradient-to-r from-[#0D1117] to-transparent" />
        <div className="absolute right-0 w-32 h-full bg-gradient-to-l from-[#0D1117] to-transparent" />
      </div>
    </section>
  );
}