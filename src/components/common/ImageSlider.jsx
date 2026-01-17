import { useEffect, useRef, useState } from "react";

const slides = [
  {
    img: "/Manisha/img1.jpg",
    text: "Tumhari ye muskaan hi mera sabse bada gift hai 💖",
  },
  {
    img: "/Manisha/img2.jpg",
    text: "Tum sirf meri mohabbat nahi, meri taqat ho ❤️",
  },
  {
    img: "/Manisha/img3.jpg",
    text: "Har rang tum pe jachta hai 💕",
  },
];

const ImageSlider = () => {
  const [index, setIndex] = useState(0);
  const startX = useRef(0);
  const endX = useRef(0);

  /* AUTO SLIDE */
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  /* SWIPE HANDLERS */
  const onTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const onTouchMove = (e) => {
    endX.current = e.touches[0].clientX;
  };

  const onTouchEnd = () => {
    const diff = startX.current - endX.current;

    if (diff > 50) {
      setIndex((prev) => (prev + 1) % slides.length);
    } else if (diff < -50) {
      setIndex((prev) => (prev - 1 + slides.length) % slides.length);
    }
  };

  return (
    <div className="relative w-full max-w-xl mx-auto mb-10">
      {/* SLIDER */}
      <div
        className="overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div key={i} className="min-w-full flex justify-center px-4">
              <div className="relative w-full max-w-[340px] rounded-[2rem] overflow-hidden shadow-2xl bg-black/40 backdrop-blur-lg border border-white/20 flex items-center justify-center h-[420px]">
                <img
                  src={slide.img}
                  alt="slide"
                  className="max-h-full max-w-full object-contain"
                />

                <div className="absolute bottom-0 w-full px-5 py-4 bg-gradient-to-t from-black/90 via-black/40 to-transparent text-white text-base text-center leading-relaxed">
                  {slide.text}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DOTS */}
      <div className="flex justify-center gap-2 mt-5">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`h-2 w-2 rounded-full transition ${
              index === i ? "bg-white scale-125" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
