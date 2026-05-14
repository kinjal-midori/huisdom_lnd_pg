import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import members from "../data/members.json";

gsap.registerPlugin(ScrollTrigger);

export default function Members() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current.querySelectorAll(".member-card"),
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.09, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 78%" } }
    );
  }, []);

  return (
    <section ref={sectionRef} id="tribe" className="bg-snow py-20 sm:py-28 px-5 sm:px-10 lg:px-16">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-12 sm:mb-16">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-glacier/80 block mb-3">
            The Group
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-pine">
            HUISDOM
          </h2>
          <p className="font-body text-stone/50 mt-3 text-sm sm:text-base">
            A small group. A big love for the mountains.
          </p>
        </div>

        {/* 3 cols on mobile, 6 on lg — all 6 members always visible */}
        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5 mb-14">
          {members.map((m, i) => (
            <div key={i} className="member-card group flex flex-col items-center gap-3">
              {/* portrait aspect ratio */}
              <div className="relative overflow-hidden rounded-2xl w-full" style={{ aspectRatio:"3/4" }}>
                <img
                  src={m.img} alt={m.name}
                  className="w-full h-full object-cover object-top
                             grayscale-[60%] group-hover:grayscale-0
                             group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0"
                  style={{background:"linear-gradient(to top, rgba(14,32,25,0.5) 0%, transparent 50%)"}}/>
              </div>
              <p className="font-display text-[13px] sm:text-sm text-center text-pine/75 leading-snug">
                {m.name}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center border-t border-pine/10 pt-12">
          <p className="font-display italic text-xl sm:text-2xl text-stone/55 mb-6">
            Want to join the next expedition?
          </p>
          <a href="mailto:hello@huisdom.in"
            className="clip-btn inline-flex items-center gap-2 px-8 py-4
                       bg-pine text-snow font-mono text-xs tracking-widest uppercase
                       hover:bg-pine-light transition-colors duration-300">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}