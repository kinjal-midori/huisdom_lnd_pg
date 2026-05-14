import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const photos = [
  { src:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80", label:"Himalayan Dawn",  tall:true,  wide:false },
  { src:"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80", label:"Summit Ridge",    tall:false, wide:false },
  { src:"https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80", label:"Valley of Pines", tall:false, wide:false },
  { src:"https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80", label:"Mountain Road",   tall:false, wide:false },
  { src:"https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80",    label:"Frozen Trek",     tall:false, wide:false },
  { src:"https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80", label:"Lake Solitude",   tall:true,  wide:false },
];

export default function Gallery() {
  const sectionRef = useRef(null);

  useEffect(() => {
    sectionRef.current.querySelectorAll(".g-item").forEach(el => {
      gsap.fromTo(el,
        { opacity: 0, scale: 0.97 },
        { opacity: 1, scale: 1, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 92%" } }
      );
      const img = el.querySelector("img");
      el.addEventListener("mouseenter", () => gsap.to(img, { scale: 1.07, duration: 0.6, ease: "power2.out" }));
      el.addEventListener("mouseleave", () => gsap.to(img, { scale: 1,    duration: 0.6, ease: "power2.out" }));
    });
  }, []);

  return (
    <section ref={sectionRef} id="gallery" className="bg-mist py-20 sm:py-28 px-5 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-10 sm:mb-14">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-glacier/80 block mb-3">
            Moments
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-pine">
            Our Journeys
          </h2>
        </div>

        {/*
          Desktop: 3-col grid, 2 rows of 300px.
          Col 1: tall card spans 2 rows (rows 1+2)
          Col 2: two normal cards stacked
          Col 3: normal card on top, tall card spans 2 rows starts row 1
          => 6 photos, no orphans
        */}
        <div className="hidden lg:grid gap-4"
          style={{
            gridTemplateColumns: "1fr 1fr 1fr",
            gridTemplateRows: "300px 300px",
          }}>
          {/* 0 — tall left */}
          <div className="g-item relative overflow-hidden rounded-2xl cursor-pointer" style={{gridRow:"1 / 3"}}>
            <img src={photos[0].src} alt={photos[0].label} className="w-full h-full object-cover will-change-transform" />
            <div className="absolute inset-0" style={{background:"linear-gradient(to top,rgba(14,32,25,0.75) 0%,transparent 50%)"}}/>
            <span className="absolute bottom-5 left-5 font-display text-lg text-snow">{photos[0].label}</span>
          </div>
          {/* 1 — mid top */}
          <div className="g-item relative overflow-hidden rounded-2xl cursor-pointer">
            <img src={photos[1].src} alt={photos[1].label} className="w-full h-full object-cover will-change-transform" />
            <div className="absolute inset-0" style={{background:"linear-gradient(to top,rgba(14,32,25,0.75) 0%,transparent 55%)"}}/>
            <span className="absolute bottom-5 left-5 font-display text-lg text-snow">{photos[1].label}</span>
          </div>
          {/* 2 — mid bottom */}
          <div className="g-item relative overflow-hidden rounded-2xl cursor-pointer">
            <img src={photos[2].src} alt={photos[2].label} className="w-full h-full object-cover will-change-transform" />
            <div className="absolute inset-0" style={{background:"linear-gradient(to top,rgba(14,32,25,0.75) 0%,transparent 55%)"}}/>
            <span className="absolute bottom-5 left-5 font-display text-lg text-snow">{photos[2].label}</span>
          </div>
          {/* 3 — right top */}
          <div className="g-item relative overflow-hidden rounded-2xl cursor-pointer">
            <img src={photos[3].src} alt={photos[3].label} className="w-full h-full object-cover will-change-transform" />
            <div className="absolute inset-0" style={{background:"linear-gradient(to top,rgba(14,32,25,0.75) 0%,transparent 55%)"}}/>
            <span className="absolute bottom-5 left-5 font-display text-lg text-snow">{photos[3].label}</span>
          </div>
          {/* 4 — right middle */}
          <div className="g-item relative overflow-hidden rounded-2xl cursor-pointer" style={{gridColumn:"2 / 3", gridRow:"2 / 3"}}>
            <img src={photos[4].src} alt={photos[4].label} className="w-full h-full object-cover will-change-transform" />
            <div className="absolute inset-0" style={{background:"linear-gradient(to top,rgba(14,32,25,0.75) 0%,transparent 55%)"}}/>
            <span className="absolute bottom-5 left-5 font-display text-lg text-snow">{photos[4].label}</span>
          </div>
          {/* 5 — tall right spans both rows */}
          <div className="g-item relative overflow-hidden rounded-2xl cursor-pointer" style={{gridColumn:"3 / 4", gridRow:"1 / 3"}}>
            <img src={photos[5].src} alt={photos[5].label} className="w-full h-full object-cover will-change-transform" />
            <div className="absolute inset-0" style={{background:"linear-gradient(to top,rgba(14,32,25,0.75) 0%,transparent 50%)"}}/>
            <span className="absolute bottom-5 left-5 font-display text-lg text-snow">{photos[5].label}</span>
          </div>
        </div>

        {/* Mobile / tablet: simple 2-col equal grid */}
        <div className="lg:hidden grid grid-cols-2 gap-3">
          {photos.map((p, i) => (
            <div key={i} className="g-item relative overflow-hidden rounded-xl cursor-pointer" style={{height:"200px"}}>
              <img src={p.src} alt={p.label} loading="lazy" className="w-full h-full object-cover will-change-transform" />
              <div className="absolute inset-0" style={{background:"linear-gradient(to top,rgba(14,32,25,0.75) 0%,transparent 55%)"}}/>
              <span className="absolute bottom-3 left-3 font-display text-sm text-snow">{p.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}