import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const photos = [
  { src:"https://scontent.fccu5-1.fna.fbcdn.net/v/t39.30808-6/502938230_10227935922639788_8670203345200743514_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=f727a1&_nc_ohc=2GXAoePJWCwQ7kNvwElDV1u&_nc_oc=AdpAlCW2TrEnd1b7k7ZleyZGZ77GJZtzS6alTOywr_kboAxfnSJ6OrXbsbgWq_YsPKk&_nc_zt=23&_nc_ht=scontent.fccu5-1.fna&_nc_gid=_J9wllW7aclqauzW4ud7eA&_nc_ss=7b2a8&oh=00_Af7kusbmwKBheIDeJP8zY6Bsi_-MNZ9NIJIsC67WAf_6uw&oe=6A0DFE2A", label:"Himalayan Dawn",  tall:true,  wide:false },
  { src:"https://scontent.fccu5-1.fna.fbcdn.net/v/t39.30808-6/499929955_10227880668338465_9153681225068585817_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=f727a1&_nc_ohc=HsRCi4rzZ1sQ7kNvwEgyBwp&_nc_oc=AdpaTpTgCU0wbLO9i4YFL_R7wcMDsF61qfVLM9yXWMlmJO6GombgN6MlvVdgTBYYeOM&_nc_zt=23&_nc_ht=scontent.fccu5-1.fna&_nc_gid=1CpUvhx-URzlZ-PQ34ZttA&_nc_ss=7b2a8&oh=00_Af78bqI-EmoAjC3BMIJCcynGW0SduA9DMjZadN4qiMOD5w&oe=6A0DEC0E", label:"Depressive Fun",    tall:false, wide:false },
  { src:"https://scontent.fccu5-1.fna.fbcdn.net/v/t39.30808-6/504848086_10228007831557466_7738979614360878376_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=f727a1&_nc_ohc=_ymvUyokAAYQ7kNvwFJT5sN&_nc_oc=AdpAm_0e0reNicERCaotJRJcYyROFCR9yndz60FK4yC6WY-0LsCzpQkEDAfXgC0nvRY&_nc_zt=23&_nc_ht=scontent.fccu5-1.fna&_nc_gid=v4G_CgK9gjwwdbw6kv7LEw&_nc_ss=7b2a8&oh=00_Af6tMIMO9mARhcI3-dQO2i8yiRff7gqUERIiX9xCWV32rg&oe=6A0E12F6", label:"Valley of Pines", tall:false, wide:false },
  { src:"https://scontent.fccu5-1.fna.fbcdn.net/v/t39.30808-6/503761378_10228019575051046_1749921463030578483_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=f727a1&_nc_ohc=QXLYdLPm00wQ7kNvwHjkmn5&_nc_oc=AdqRcnCjK_2C6BxE9UfloVRjw6w4lcFLBOLD_3vp-w_SkhFrkKfrhJ4wdJBmfJSyVDw&_nc_zt=23&_nc_ht=scontent.fccu5-1.fna&_nc_gid=6Z91MgTfBZ9Eu69EDqVmJQ&_nc_ss=7b2a8&oh=00_Af7U54KGuKr16MY9kDKjtv7aVKCBCXhIJ09xN25ibYIxHQ&oe=6A0E0BB5", label:"The Jaggers",   tall:false, wide:false },
  { src:"https://scontent.fccu5-1.fna.fbcdn.net/v/t39.30808-6/504531183_10228079443827728_7243771781699375645_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=f727a1&_nc_ohc=LZd9yGhJjF4Q7kNvwGVxwWb&_nc_oc=AdqoPWQFVPx4ffzARAxzy2KbjwOL5jGk1tujJC6-_9k4YSaQqj6aSS3orhhxF2NCP8Y&_nc_zt=23&_nc_ht=scontent.fccu5-1.fna&_nc_gid=8ft2Y2AurrphUgF1YT2QZQ&_nc_ss=7b2a8&oh=00_Af5tcS5U71e2ONqubHK_dvh069uIyw1kP0pYrrr1AsLx7Q&oe=6A0E00BB", label:"Golden Peaks",     tall:false, wide:false },
  { src:"https://scontent.fccu5-1.fna.fbcdn.net/v/t39.30808-6/513221960_10228323795816375_5786642185920897172_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=f727a1&_nc_ohc=n3daJH_EST4Q7kNvwENySmm&_nc_oc=Adrzr90Pw16G5RXfo8axGbDL-BUG8El8W66CCtS5dq92vkyjqxXqO0kMVZ7DTJtNB04&_nc_zt=23&_nc_ht=scontent.fccu5-1.fna&_nc_gid=LHm5Enan4j8txPowScHy6A&_nc_ss=7b2a8&oh=00_Af6ucnZlE5WGKopfxCMx2a19MnKXbZv44p-zssrVUvbQsQ&oe=6A0DFC81", label:"The Tamers",   tall:true,  wide:false },
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