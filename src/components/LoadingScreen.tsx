import { useState, useEffect, useRef } from "react";

/* ── Fully CSS-driven loading screen — zero framer-motion ── */

export default function LoadingScreen({
  onComplete,
  onExpanding,
}: {
  onComplete: () => void;
  onExpanding?: () => void;
}) {
  const [phase, setPhase] = useState<
    "loading" | "welcome" | "expanding" | "fadeout" | "done"
  >("loading");
  const rafRef = useRef(0);
  const pctRef = useRef<HTMLSpanElement>(null);

  // Counter via RAF — direct DOM writes only, zero React re-renders
  useEffect(() => {
    let current = 0;
    let lastTime = 0;
    let startId: number;

    const tick = (time: number) => {
      if (!lastTime) lastTime = time;
      const delta = time - lastTime;

      if (delta > 45) {
        lastTime = time;
        const inc =
          current < 30 ? 2.5 : current < 70 ? 2 : current < 90 ? 1.2 : 0.6;
        current = Math.min(100, current + inc + Math.random() * 1.2);
        const val = Math.floor(current);

        // Direct DOM writes only — no setState
        if (pctRef.current) pctRef.current.textContent = `${val}`;
        document.documentElement.style.setProperty("--loading-pct", `${val}%`);

        if (current >= 100) {
          setTimeout(() => setPhase("welcome"), 400);
          return;
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    // Let first paint happen
    startId = requestAnimationFrame(() => {
      rafRef.current = requestAnimationFrame(tick);
    });

    return () => {
      cancelAnimationFrame(startId);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Phase machine
  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    switch (phase) {
      case "welcome":
        onExpanding?.();
        t = setTimeout(() => setPhase("expanding"), 1200);
        break;
      case "expanding":
        t = setTimeout(() => setPhase("fadeout"), 1400);
        break;
      case "fadeout":
        t = setTimeout(() => setPhase("done"), 600);
        break;
      case "done":
        onComplete();
        break;
    }
    return () => clearTimeout(t);
  }, [phase, onComplete, onExpanding]);

  if (phase === "done") return null;

  const scrollText1 = "A CREATIVE DEVELOPER  •  ".repeat(6);
  const scrollText2 = "A CREATIVE EDITOR  •  ".repeat(6);

  return (
    <div
      className={`loading-overlay ${phase === "fadeout" ? "loading-overlay-exit" : ""}`}
    >
      <div
        className={`loading-box ${phase === "expanding" || phase === "fadeout" ? "loading-box-expand" : ""}`}
      >
        {/* EmitB0i */}
        <div
          className={`loading-header-text ${
            phase === "expanding" || phase === "fadeout" ? "loading-fade-out" : ""
          }`}
        >
          EmitB0i
        </div>

        {/* Bird */}
        <div
          className={`loading-bird-wrapper ${
            phase === "expanding" || phase === "fadeout" ? "loading-fade-out" : ""
          }`}
        >
          <div className="loading-bird-float">
            <svg width="40" height="28" viewBox="0 0 40 28" fill="none" className="loading-bird-svg">
              <ellipse cx="20" cy="16" rx="8" ry="6" fill="#a78bfa" />
              <circle cx="28" cy="13" r="4.5" fill="#a78bfa" />
              <circle cx="29.5" cy="12" r="1.2" fill="#0c0c0f" />
              <circle cx="30" cy="11.5" r="0.5" fill="#fafafa" />
              <polygon points="32.5,13 36,14 32.5,15" fill="#34d399" />
              <polygon points="12,14 8,10 8,18" fill="#a78bfa" opacity="0.8" />
              <path className="loading-bird-wing" d="M16 16 Q14 6, 22 8 Q18 12, 20 16 Z" fill="#8b6ff0" />
            </svg>
          </div>
        </div>

        {/* Scrolling text */}
        <div
          className={`loading-scroll-area ${
            phase === "expanding" || phase === "fadeout" ? "loading-fade-out" : ""
          }`}
        >
          <div className="loading-scroll-wrapper">
            <div className="loading-scroll-track loading-scroll-forward">
              <span className="loading-scroll-text">{scrollText1}</span>
            </div>
          </div>
          <div className="loading-scroll-wrapper">
            <div className="loading-scroll-track loading-scroll-reverse">
              <span className="loading-scroll-text">{scrollText2}</span>
            </div>
          </div>
        </div>

        {/* Center content */}
        <div className="loading-center-content">
          {phase === "loading" && (
            <div className="loading-percentage loading-center-enter">
              <span className="loading-pct-label">LOADING</span>
              <span className="loading-pct-number">
                <span ref={pctRef}>0</span>
                <span className="loading-pct-symbol">%</span>
              </span>
            </div>
          )}
          {(phase === "welcome" || phase === "expanding" || phase === "fadeout") && (
            <div className="loading-welcome loading-center-enter">WELCOME</div>
          )}
        </div>

        {/* Progress bar */}
        <div
          className={`loading-progress-bar ${
            phase === "expanding" || phase === "fadeout" ? "loading-fade-out" : ""
          }`}
        >
          <div className="loading-progress-fill" />
        </div>
      </div>
    </div>
  );
}
