import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const trips = [
  { id:"01", name:"Dhotrey, West Bengal",       tag:"Monsoon Trek",   alt:"8,500 ft", days:"4 Days",
    img:"https://scontent.fccu5-1.fna.fbcdn.net/v/t39.30808-6/684833173_10231989034925062_2525718205942597068_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=f727a1&_nc_ohc=yLLsihwkRmgQ7kNvwH_Xd0m&_nc_oc=Adr3GU7fbCim0h0gzKnQjBQC7g0o7Pm_xj04EQSIh44BsIzGPNTOKriYMH75xZ-rJOo&_nc_zt=23&_nc_ht=scontent.fccu5-1.fna&_nc_gid=ePrymTGsWSiRtspMPvMvXA&_nc_ss=7b289&oh=00_Af662JWaScpt47D-PC-eqnHISOq-_XbJEqEdB9Auli63lw&oe=6A0E0FC5" },
  { id:"02", name:"Rinchenpong, Sikkim",      tag:"High Altitude", alt:"5,576 ft", days:"2 Days",
    img:"https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80" },
  { id:"03", name:"Okhrey, Sikkim",     tag:"Mystery Lake",  alt:"7,600 ft", days:"3 Days",
    img:"https://scontent.fccu5-1.fna.fbcdn.net/v/t39.30808-6/504090389_10228003947340363_8591400950702602430_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=f727a1&_nc_ohc=kZvldC3xia0Q7kNvwGd9QGY&_nc_oc=AdpE5vznPN1CjyF2oApre-5C4PXMBeBlklEqB6VdB4029YX_dvPWMoD0-c1z8DrfcMA&_nc_zt=23&_nc_ht=scontent.fccu5-1.fna&_nc_gid=Sjgd2b5SMG5awZDdobrHkw&_nc_ss=7b289&oh=00_Af4Gf3JGFUPwX7IMhR2O523-IQ43XCkyWHCdITTWCNfvKQ&oe=6A0DF610" },
  { id:"04", name:"Shrikhola, West Bengal",       tag:"Waterfall River",  alt:"6,900 ft", days:"4 Days",
    img:"https://scontent.fccu5-1.fna.fbcdn.net/v/t39.30808-6/503368457_10227939363725813_6615998869442624963_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=f727a1&_nc_ohc=WfWwQ-nIcPIQ7kNvwEOrfak&_nc_oc=Adq72t6FkDGhWZc2zNx2qu9gE_RlYTBRaD6MT4cRcenntUv2G8DXaqBYOdDi-sD_UWI&_nc_zt=23&_nc_ht=scontent.fccu5-1.fna&_nc_gid=F9K8u5NuS7aYobaT6a2AWQ&_nc_ss=7b289&oh=00_Af5DTfv4-6xPhpy6pEDxlIvaSxW8nEtpDsY2UO3gHTamXA&oe=6A0DFF96" },
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
          {trips.map(t => (
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