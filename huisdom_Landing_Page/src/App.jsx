import Hero from "./Component/Hero";
import ElephantScene from "./Component/ElephantScene";
import Destinations from "./Component/Destinations";
import Gallery from "./Component/Gallery";
import Members from "./Component/Members";

function App() {
  return (
    <div className="overflow-x-hidden">

      {/* ── NAV ── */}
      <nav
        className="fixed top-0 left-0 w-full z-50"
        style={{ background: "linear-gradient(to bottom, rgba(14,32,25,0.88) 0%, transparent 100%)" }}
      >
        <div className="flex items-center justify-between px-5 sm:px-10 py-5 max-w-7xl mx-auto">
          <span className="font-display text-xl tracking-[0.18em] text-snow font-semibold uppercase">
            HUISDOM
          </span>
          <div className="flex items-center gap-6 sm:gap-8">
            <ul className="hidden md:flex gap-7 font-mono text-[11px] tracking-widest uppercase text-snow/65">
              {[["Treks", "#expeditions"], ["Gallery", "#gallery"], ["Tribe", "#tribe"]].map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="hover:text-dawn transition-colors duration-300">{label}</a>
                </li>
              ))}
            </ul>
            <a
              href="mailto:hello@huisdom.in"
              className="font-mono text-[11px] tracking-widest uppercase px-5 py-2.5
                         bg-dawn text-pine-dark font-medium hover:bg-dawn-light transition-colors duration-200"
            >
              Join Us
            </a>
          </div>
        </div>
      </nav>

      {/* ── SECTIONS ── */}
      <Hero />
      <ElephantScene />
      <Destinations />
      <Gallery />
      <Members />

      {/* ── FOOTER ── */}
      <footer id="contact" className="relative overflow-hidden bg-pine-dark">
        <img
          src="/assets/mountain.jpg" alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-15"
          style={{ filter: "brightness(0.5)" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, #0e2019 30%, rgba(14,32,25,0.7) 100%)" }}
        />
        <div className="relative z-10 text-center py-20 sm:py-28 px-5">
          <h2
            className="font-display font-semibold tracking-[0.22em] text-snow uppercase mb-3"
            style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)" }}
          >
            HUISDOM
          </h2>
          <p className="font-mono text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-dawn/60 mb-10">
            Mountain Travel Collective · Kolkata, India
          </p>
          <a
            href="mailto:hello@huisdom.in"
            className="clip-btn inline-flex items-center gap-3 px-10 py-4 bg-dawn text-pine-dark
                       font-mono text-xs tracking-widest uppercase font-medium
                       hover:bg-dawn-light transition-colors duration-300"
          >
            Get in Touch
          </a>
          <p className="font-mono text-[10px] tracking-widest text-snow/20 mt-14">
            © 2025 HUISDOM · All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;