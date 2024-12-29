import React, { useState, useEffect, useRef } from 'react';

export default function Promotion() {
  const [activeVideo, setActiveVideo] = useState(0);
  const videoRefs = useRef([]);
  const timeoutRef = useRef(null);
  const [progress, setProgress] = useState(0);
  
  const videos = [
    '/videos/combined.mp4',
    '/videos/video3.mp4',
    '/videos/video4.mp4',
    '/videos/video5.mp4',
  ];

  // Automatically play the next video when the current one ends
  const handleVideoEnd = () => {
    setActiveVideo((prev) => (prev + 1) % videos.length);
  };

  // Autoplay first video when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          videoRefs.current[0]?.play();
        }
      },
      { threshold: 0.6 }
    );
    observer.observe(videoRefs.current[0]);

    return () => observer.disconnect();
  }, []);

  // Handle auto-sequencing of videos
  useEffect(() => {
    const currentVideo = videoRefs.current[activeVideo];

    if (currentVideo) {
      currentVideo.play();
      const updateProgress = () => {
        const percentage = (currentVideo.currentTime / currentVideo.duration) * 100;
        setProgress(percentage);
      };

      currentVideo.addEventListener('timeupdate', updateProgress);
      currentVideo.addEventListener('ended', handleVideoEnd);

      return () => {
        currentVideo.removeEventListener('timeupdate', updateProgress);
        currentVideo.removeEventListener('ended', handleVideoEnd);
      };
    }
  }, [activeVideo]);

  return (
    <section className="bg-[#0D1117] text-white py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#111827] to-[#1f2937] animate-gradientBlur opacity-30 pointer-events-none"></div>

      <div className="text-center mb-16 relative z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-wider leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#D90429] to-[#EF233C]">
          We Are More Than Tesla, We Are The Future
        </h1>
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-20 relative z-10">
        {videos.map((video, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-xl shadow-xl cursor-pointer transform transition-all duration-500"
            onClick={() => setActiveVideo(index)}
          >
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              src={video}
              muted
              playsInline
              loop
              className={`w-full h-[250px] object-cover rounded-xl transition-all duration-300 ${
                index === activeVideo ? 'scale-105' : 'scale-95 group-hover:scale-105'
              }`}
              onMouseEnter={() => videoRefs.current[index].play()}
              onMouseLeave={() => videoRefs.current[index].pause()}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all">
              <span className="text-xl font-medium tracking-wide">
                {index === 0 ? 'The Vision' : `Promo ${index + 1}`}
              </span>
            </div>
            {/* Hover Glow */}
            <div className="absolute inset-0 rounded-xl shadow-2xl opacity-0 group-hover:opacity-100 transition duration-300 hover:shadow-[#D90429]"></div>
          </div>
        ))}
      </div>

      {/* Active Video Display */}
      <div className="mt-20 flex justify-center relative z-10">
        <div className="w-full md:w-2/3 relative rounded-xl overflow-hidden shadow-2xl">
          {/* Progress Bar */}
          <div
            className="absolute top-0 left-0 h-1 bg-[#D90429] transition-all"
            style={{ width: `${progress}%` }}
          ></div>

          <video
            src={videos[activeVideo]}
            controls
            autoPlay
            loop
            playsInline
            className="w-full h-auto rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
