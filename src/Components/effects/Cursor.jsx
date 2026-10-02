import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Effects.scss";

const Cursor = () => {
  const ref = useRef(null);
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const el = ref.current;
    const x = gsap.quickTo(el, "x", { duration: 0.25, ease: "power3.out" });
    const y = gsap.quickTo(el, "y", { duration: 0.25, ease: "power3.out" });
    const move = (e) => { x(e.clientX); y(e.clientY); el.style.opacity = 1; };
    const over = (e) =>
      el.classList.toggle("active", !!e.target.closest("a, button, .card, input, textarea"));
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);
  return <div ref={ref} className="cursor" />;
};

export default Cursor;
