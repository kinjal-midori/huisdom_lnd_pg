import { useEffect } from "react";

export default function ElephantScene() {

  useEffect(() => {
    // Dynamically inject the model-viewer script (CDN, ~50KB)
    if (!customElements.get("model-viewer")) {
      const script = document.createElement("script");
      script.type = "module";
      script.src = "https://ajax.googleapis.com/ajax/libs/model-viewer/3.4.0/model-viewer.min.js";
      document.head.appendChild(script);
    }
  }, []);

  return (
    <section className="relative w-full bg-[#f5f1eb] overflow-hidden">

      {/* ── Decorative oval plate behind elephant ── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="rounded-[50%]"
          style={{
            width: "min(68vw, 600px)",
            height: "min(40vw, 350px)",
            background: "radial-gradient(ellipse at center, rgba(200,223,240,0.6) 0%, rgba(240,248,255,0.3) 60%, transparent 100%)",
            boxShadow: "0 0 120px 40px rgba(200,223,240,0.35)",
          }}
        />
      </div>

      {/* ── Dawn glow ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 55% 45% at 50% 52%, rgba(232,185,106,0.14) 0%, transparent 70%)" }}
      />

      {/* ── HUISDOM watermark ── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span
          className="font-display font-bold uppercase tracking-[0.18em] text-black text-pine leading-none whitespace-nowrap"
          style={{ fontSize: "18vw", opacity: 0.035 }}
        >
          HUISDOM
        </span>
      </div>

      {/* ── model-viewer ──────────────────────────────────────────────
          - src: the compressed 12MB GLB (place in public/assets/)
          - auto-rotate: slow continuous spin
          - camera-controls: disabled (interaction-prompt="none")
          - camera-orbit: position camera so full elephant is visible
            The model nodes sit at Y≈4-6 in object space, so we set
            camera-target to the model centre and pull back far enough.
          - loading="eager" so it starts fetching immediately
      ─────────────────────────────────────────────────────────────── */}
      <div className="relative w-full" style={{ height: "clamp(400px, 72vw, 700px)" }}>
        {/* @ts-ignore */}
        <model-viewer
          src="/assets/Elephant_opt.glb"
          alt="HUISDOM elephant mascot"
          auto-rotate
          auto-rotate-delay="0"
          rotation-per-second="11deg"
          camera-controls="false"
          interaction-prompt="none"
          camera-orbit="0deg 75deg 105%"
          field-of-view="30deg"
          min-field-of-view="30deg"
          max-field-of-view="30deg"
          loading="eager"
          reveal="auto"
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "transparent",
            "--progress-bar-color": "transparent",
            "--progress-mask": "transparent",
          }}
        >
          {/* Loading slot */}
          <div slot="progress-bar" />
          <div slot="poster"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100%",
              background: "transparent",
            }}>
            <div style={{ textAlign: "center" }}>
              <div style={{
                width: 56, height: 56, borderRadius: "50%",
                border: "2px solid rgba(26,58,42,0.15)",
                borderTopColor: "rgba(26,58,42,0.5)",
                animation: "spin 1s linear infinite",
                margin: "0 auto 12px",
              }} />
              <p style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 11,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "rgba(61,74,62,0.4)",
              }}>Loading…</p>
            </div>
          </div>
        </model-viewer>
      </div>

      {/* ── Branding ── */}
      <div className="relative z-10 text-center pb-8 sm:pb-12 -mt-4">
        <h2
          className="font-display font-semibold text-pine uppercase text-amber-200"
          style={{ fontSize: "clamp(1.8rem, 5vw, 3.5rem)", letterSpacing: "0.28em" }}
        >
          HUISDOM
        </h2>
        <p className="font-mono text-[10px] sm:text-[11px] text-amber-900 uppercase text-stone/40 mt-2"
          style={{ letterSpacing: "0.3em" }}>
          Mountain Travel Collective
        </p>
      </div>

      {/* ── Wave ── */}
      <div className="w-full overflow-hidden leading-none -mb-px">
        <svg viewBox="0 0 1440 52" preserveAspectRatio="none"
          style={{ width: "100%", height: "clamp(24px, 4vw, 52px)", display: "block" }}
          fill="#1a3a2a">
          <path d="M0,26 C480,52 960,0 1440,26 L1440,52 L0,52 Z" />
        </svg>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        model-viewer { --poster-color: transparent; }
      `}</style>
    </section>
  );
}