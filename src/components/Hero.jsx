import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Hero() {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const subtitleRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 2, ease: 'power4.out' }
    );

    gsap.fromTo(
      textRef.current,
      { y: 200, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: 'power3.out', delay: 0.5 }
    );

    gsap.fromTo(
      subtitleRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'power2.out', delay: 0.8 }
    );

    gsap.fromTo(
      logoRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: 'power2.out' }
    );
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      {/* Background Image Container */}
      <div 
        className="absolute inset-0 bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/Tesla-Background.webp')`,
          backgroundSize: 'cover',
          '@media (max-width: 768px)': {
            backgroundPosition: 'center 20%'
          }
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />

      {/* Tesla Logo */}
      <div 
        ref={logoRef}
        className="absolute top-4 md:top-8 right-4 md:right-12 z-10"
      >
        <h1 className="text-white text-3xl md:text-5xl font-extrabold tracking-widest tesla-logo">
          TESLA
        </h1>
      </div>

      {/* Content Container */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-0">
        <h1 
          ref={textRef}
          className="text-white text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight max-w-5xl"
        >
          THE FUTURE IS NOW
        </h1>
        
        <p 
          ref={subtitleRef}
          className="mt-4 md:mt-6 text-xl sm:text-2xl md:text-3xl text-gray-200 max-w-2xl"
        >
          Experience the Unstoppable Power of the Cybertruck
        </p>

        {/* CTA Button */}
        <div className="mt-8 md:mt-10">
        <a 
    href="https://www.tesla.com/" 
    target="_blank" 
    rel="noopener noreferrer"
  >
          <button className="bg-white text-black px-8 md:px-12 py-3 md:py-4 text-base md:text-lg font-semibold uppercase rounded-full hover:bg-gray-300 transition-all duration-300">
            Reserve Yours
          </button>
          </a>
        </div>
      </div>
    </section>
  );
}