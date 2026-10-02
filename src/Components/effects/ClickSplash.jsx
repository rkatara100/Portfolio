import { useEffect } from "react";
import gsap from "gsap";
import { prefersReducedMotion } from "../../utils/smoothScroll";

const COLORS = ["#ff9f1c", "#9b59d0", "#ffffff", "#ffd166", "#6c3fb5"];

// Bursts colourful particles from the click point of any button or link.
const ClickSplash = () => {
  useEffect(() => {
    if (prefersReducedMotion()) return;
    const onClick = (e) => {
      if (!e.target.closest("button, a, .btn")) return;
      const ring = document.createElement("div");
      Object.assign(ring.style, {
        position: "fixed", left: e.clientX + "px", top: e.clientY + "px",
        width: "20px", height: "20px", marginLeft: "-10px", marginTop: "-10px",
        borderRadius: "50%", border: "2px solid #ff9f1c",
        pointerEvents: "none", zIndex: 10002,
      });
      document.body.appendChild(ring);
      gsap.to(ring, { scale: 5, opacity: 0, duration: 0.6, ease: "power2.out", onComplete: () => ring.remove() });

      for (let i = 0; i < 18; i++) {
        const dot = document.createElement("div");
        const size = 5 + Math.random() * 8;
        Object.assign(dot.style, {
          position: "fixed", left: e.clientX + "px", top: e.clientY + "px",
          width: size + "px", height: size + "px", marginLeft: -size / 2 + "px", marginTop: -size / 2 + "px",
          borderRadius: Math.random() > 0.5 ? "50%" : "2px",
          background: COLORS[i % COLORS.length], pointerEvents: "none", zIndex: 10002,
        });
        document.body.appendChild(dot);
        const angle = Math.random() * Math.PI * 2;
        const dist = 50 + Math.random() * 90;
        gsap.to(dot, {
          x: Math.cos(angle) * dist, y: Math.sin(angle) * dist + 20,
          rotation: Math.random() * 360, opacity: 0, scale: 0.2,
          duration: 0.7 + Math.random() * 0.4, ease: "power3.out",
          onComplete: () => dot.remove(),
        });
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
};

export default ClickSplash;
