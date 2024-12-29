import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function RobotSection() {
  const robotRef = useRef(null);
  const textRef = useRef(null);
  const containerRef = useRef(null);
  const subtextRef = useRef(null);

  useEffect(() => {
    // Initial animations
    gsap.fromTo(
      robotRef.current,
      { x: 200, opacity: 0, scale: 0.85 },
      { x: 0, opacity: 1, scale: 1, duration: 2, ease: 'power4.out' }
    );

    gsap.fromTo(
      textRef.current,
      { x: -200, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.8, ease: 'power3.out', delay: 0.4 }
    );

    // Staggered text animation
    gsap.fromTo(
      subtextRef.current.children,
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1.2,
        stagger: 0.2,
        ease: 'power3.out',
        delay: 0.8
      }
    );

    // Background color transition
    gsap.fromTo(
      containerRef.current,
      { backgroundColor: '#000000' },
      {
        backgroundColor: '#080808',
        duration: 2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen flex items-center justify-center bg-black overflow-hidden px-4 sm:px-8 md:px-16"
    >
      {/* Futuristic Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[linear-gradient(90deg,rgba(255,255,255,.1)_1px,transparent_1px),linear-gradient(rgba(255,255,255,.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-16 max-w-7xl mx-auto">
        {/* Text Section */}
        <div ref={textRef} className="space-y-12 text-white z-10">
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-wider leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-300">
            Meet Tesla's Future
          </h2>
          
          <div 
            ref={subtextRef}
            className="space-y-6"
          >
            <p className="text-2xl md:text-4xl font-light tracking-wide text-blue-100 leading-relaxed">
              Tesla's Robot is a glimpse into tomorrow.
            </p>
            <p className="text-xl md:text-3xl font-light tracking-wider text-blue-200 leading-relaxed">
              A human-like machine designed
            </p>
            <div className="flex flex-col space-y-2">
              <span className="text-2xl md:text-4xl font-medium tracking-widest text-blue-300">
                to make life <span className="text-blue-400 font-bold">safer</span>
              </span>
              <span className="text-2xl md:text-4xl font-medium tracking-widest text-blue-300">
                and more <span className="text-blue-400 font-bold">efficient</span>
              </span>
            </div>
          </div>
        </div>

        {/* Robot Image Section */}
        <div ref={robotRef} className="relative flex justify-center">
          <div className="relative w-full max-w-lg xl:max-w-xl">
            <img
              src="/Tesla-Robot.jpg"
              alt="Tesla Robot"
              className="object-cover w-full h-auto rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-700"
            />
            {/* Advanced Glowing Effect */}
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-blue-500/20 to-indigo-500/20 blur-2xl" />
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-400/10 to-indigo-400/10 blur-md" />
          </div>
        </div>
      </div>

      {/* Animated Corner Accents */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-blue-400/30" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-blue-400/30" />
    </section>
  );
}