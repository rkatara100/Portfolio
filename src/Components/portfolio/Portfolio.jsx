import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { prefersReducedMotion } from '../../utils/smoothScroll';
import { useMagnetic } from '../../utils/useMagnetic';
import "./Portfolio.scss";

gsap.registerPlugin(ScrollTrigger);

const items = [
      {
            id: "1",
            category: "Developer Tools",
            title: "RenderLab",
            img: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=900",
            desc: "Detects unnecessary React re-renders and their root cause. Custom Profiler SDK, Fastify ingestion API and a Next.js dashboard with live render timelines and session replay.",
            stack: ["React", "TypeScript", "Fastify", "PostgreSQL", "Redis", "Next.js"],
            demo: "https://www.npmjs.com/package/@renderlab/sdk",
      },
      {
            id: "2",
            category: "Cloud & DevOps",
            title: "DeployFlow",
            img: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=900",
            desc: "Distributed deployment pipeline: a Redis queue decouples upload, build and serving into independent services. Async build workers use S3, and subdomain routing serves each site.",
            stack: ["Node.js", "TypeScript", "Express", "AWS S3", "Redis"],
            code: "https://github.com/rkatara100/DeployFlow",
      },
      {
            id: "3",
            category: "Healthcare",
            title: "DOCTO 24x7",
            img: "https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg",
            desc: "Online Doctor Consultation Platform.",
            demo: "https://docto-24x7.vercel.app/",
      },
      {
            id: "4",
            category: "Food Tech",
            title: "BHOOK",
            img: "https://media.istockphoto.com/id/1306458509/photo/indian-food-delivery-indian-cuisine-and-food-delivery-smartphone-apps-online.webp?a=1&b=1&s=612x612&w=0&k=20&c=HzQGbgrjq2jwpTKfl8goX-pdlSScNoXaeaGdk-GcALY=",
            desc: "Food Delivery Application",
            demo: "https://bhook-frontend.onrender.com/",
      },
      {
            id: "5",
            category: "Real-Time Social",
            title: "Fin-APP",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhNv1Y_V5Z-BPyEyphX-E3z2Ts3GZIywIxLg&s",
            desc: "Real-Time Social Media App with Video Room",
            code: "https://github.com/rkatara100/Fin_app",
      },
      {
            id: "6",
            category: "Multiplayer Game",
            title: "Typing Game",
            img: "https://media.istockphoto.com/id/1369199360/photo/portrait-of-a-handsome-young-businessman-working-in-office.jpg?s=612x612&w=0&k=20&c=ujyGdu8jKI2UB5515XZA33Tt4DBhDU19dKSTUTMZvrg=",
            desc: "Interactive typing game featuring multiplayer and single-player modes with real-time metrics.",
            code: "https://github.com/rkatara100/Typing-Socket.io",
      },
      {
            id: "7",
            category: "Creative Web",
            title: "GSAP & JS",
            img: "https://images.pexels.com/photos/50614/pexels-photo-50614.jpeg?auto=compress&cs=tinysrgb&w=900",
            desc: "Mesmerizing animated website that draws amazing attention.",
            demo: "https://rkatara100.github.io/DuoStudio/",
      },
]

const Row = ({ item, index }) => {
      const demoRef = useMagnetic(0.25);
      const num = String(index + 1).padStart(2, "0");

      return (
            <article className="row">
                  <span className="num">{num}</span>
                  <div className="imageContainer">
                        <img className="image" src={item.img} alt={item.title} loading="lazy" />
                  </div>
                  <div className="body">
                        <span className="category">{item.category}</span>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        {item.stack && <div className="stack">{item.stack.map((t) => <span key={t}>{t}</span>)}</div>}
                        <div className="actions">
                              {item.demo && <a ref={demoRef} className="btn btn-primary btn-sm" href={item.demo} target="_blank" rel="noreferrer">Live Demo</a>}
                              {item.code && <a className="btn btn-outline btn-sm" href={item.code} target="_blank" rel="noreferrer">Code</a>}
                        </div>
                  </div>
            </article>
      );
}

const Portfolio = () => {
      const root = useRef(null);

      useEffect(() => {
            if (prefersReducedMotion()) return;
            const ctx = gsap.context(() => {
                  gsap.from(".portfolioHeader > *", {
                        y: 40,
                        opacity: 0,
                        duration: 0.8,
                        stagger: 0.12,
                        scrollTrigger: { trigger: ".portfolioHeader", start: "top 85%" },
                  });
                  gsap.utils.toArray(".row").forEach((row) => {
                        const tl = gsap.timeline({ scrollTrigger: { trigger: row, start: "top 80%" } });
                        tl.from(row.querySelector(".imageContainer"), { clipPath: "inset(0 100% 0 0)", duration: 1, ease: "power3.inOut" })
                              .from(row.querySelector(".image"), { scale: 1.3, duration: 1.2, ease: "power3.out" }, 0)
                              .from(row.querySelectorAll(".body > *, .num"), { y: 30, opacity: 0, stagger: 0.08, duration: 0.6, ease: "power3.out" }, 0.3);
                  });
            }, root);
            return () => ctx.revert();
      }, []);

      return (
            <div className='portfolio' id='Portfolio' ref={root}>
                  <div className="portfolioHeader">
                        <span className="eyebrow">Selected Projects</span>
                        <h1 className="portfolioTitle">Featured Works</h1>
                  </div>
                  <div className="list">
                        {items.map((item, i) => (
                              <Row item={item} index={i} key={item.id} />
                        ))}
                  </div>
            </div>
      )
}

export default Portfolio
