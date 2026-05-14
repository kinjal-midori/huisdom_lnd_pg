import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const treks = [
  { id:"01", name:"Kedarkantha",       tag:"Winter Trek",   alt:"12,500 ft", days:"6 Days",
    img:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80" },
  { id:"02", name:"Spiti Valley",      tag:"High Altitude", alt:"15,000 ft", days:"10 Days",
    img:"https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80" },
  { id:"03", name:"Roopkund Trek",     tag:"Mystery Lake",  alt:"16,500 ft", days:"8 Days",
    img:"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80" },
  { id:"04", name:"Chadar Trek",       tag:"Frozen River",  alt:"10,800 ft", days:"9 Days",
    img:"https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&q=80" },
];

export default function Destinations() {
  const sectionRef = useRef(null);

  useEffect(() => {
    sectionRef.current.querySelectorAll(".trek-card").forEach((card, i) => {
      gsap.fromTo(card,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 90%" },
          delay: i * 0.08 }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} id="expeditions" className="bg-pine-dark py-20 sm:py-28 px-5 sm:px-10 lg:px-16">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12 sm:mb-16">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-glacier/80 block mb-3">
            Our Expeditions
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-snow">
            Where We've Been
          </h2>
        </div>

        {/* Cards — 1 col mobile, 2 col sm, 4 col lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {treks.map(t => (
            <div key={t.id} className="trek-card group relative overflow-hidden rounded-2xl"
              style={{ height: "clamp(260px, 38vw, 380px)" }}>

              <img src={t.img} alt={t.name} loading="lazy"
                className="absolute inset-0 w-full h-full object-cover brightness-75 saturate-90
                           group-hover:scale-105 transition-transform duration-700 ease-out" />

              <div className="absolute inset-0"
                style={{background:"linear-gradient(to top, rgba(14,32,25,0.95) 0%, rgba(14,32,25,0.2) 55%, transparent 100%)"}} />

              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="font-mono text-[9px] tracking-widest uppercase text-dawn/80 block mb-1.5">
                  {t.tag}
                </span>
                <h3 className="font-display text-xl text-snow mb-3 leading-tight">{t.name}</h3>
                <div className="flex gap-4">
                  <span className="font-mono text-[9px] text-snow/45">▲ {t.alt}</span>
                  <span className="font-mono text-[9px] text-snow/45">◷ {t.days}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="mailto:hello@huisdom.in"
            className="inline-flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase
                       text-dawn border-b border-dawn/40 pb-0.5 hover:border-dawn transition-colors">
            Plan a Trek with Us →
          </a>
        </div>
      </div>
    </section>
  );
}