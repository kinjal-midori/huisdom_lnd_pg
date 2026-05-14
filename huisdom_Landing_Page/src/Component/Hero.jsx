import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      contentRef.current.children,
      { opacity: 0, y: 28 },
      { opacity: 1, y: 0, duration: 1.1, stagger: 0.16, ease: "power3.out", delay: 0.2 }
    );
  }, []);

  return (
    <div className="relative w-full overflow-hidden" style={{ minHeight: "100vh" }}>

      {/* BG image */}
      <img
        src="/assets/mountain.jpg" alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ filter: "brightness(0.45) saturate(0.8)" }}
      />

      {/* Strong dark overlay so text is always readable */}
      <div className="absolute inset-0" style={{background:"linear-gradient(to bottom, rgba(14,32,25,0.55) 0%, rgba(14,32,25,0.35) 40%, rgba(14,32,25,0.75) 85%, #0e2019 100%)"}} />

      {/* Content — centred */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-5 sm:px-10"
        style={{ minHeight: "100vh", paddingTop: "80px", paddingBottom: "80px" }}>

        <div ref={contentRef} className="max-w-2xl flex flex-col items-center gap-5">

          <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-dawn/80">
            Independent Mountain Group · Kolkata
          </span>

          <h1 className="font-display font-semibold text-snow leading-[1.08]"
            style={{ fontSize: "clamp(2.8rem, 8vw, 5.5rem)" }}>
            The Mountains<br />
            <em className="text-dawn">Are Waiting.</em>
          </h1>

          <p className="font-body text-snow/60 leading-relaxed max-w-md"
            style={{ fontSize: "clamp(0.95rem, 2vw, 1.15rem)" }}>
            We are HUISDOM — a tight-knit group of mountain lovers who believe the
            best experiences happen off the beaten path.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <a href="#expeditions"
              className="clip-btn inline-flex items-center justify-center px-8 py-4
                         bg-dawn text-pine-dark font-mono text-xs tracking-widest uppercase font-medium
                         hover:bg-dawn-light transition-colors duration-300">
              See Our Treks
            </a>
            <a href="#tribe"
              className="inline-flex items-center justify-center px-8 py-4
                         border border-snow/30 text-snow/80 font-mono text-xs tracking-widest uppercase
                         hover:border-dawn hover:text-dawn transition-all duration-300">
              Meet the Group
            </a>
          </div>
        </div>
      </div>

      {/* Scroll nudge */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-40">
        <span className="font-mono text-[9px] tracking-widest uppercase text-snow">Scroll</span>
        <svg className="w-4 h-4 text-snow animate-bounce" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="1.5">
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
      </div>
    </div>
  );
}