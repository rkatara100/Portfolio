import React from "react";
import { motion } from "framer-motion";
import "./Highlights.scss";

// Podium order: the centre card is raised.
const awards = [
      { tier: "Q1 FY26", big: "Combat Ready", label: "Entire Quarter Award", note: "Driving revenue growth and product reach with new fare types and ancillary services.", org: "udChalo", link: "https://drive.google.com/file/d/1KGjBHwbpwGop-m5kcdlow0X6MsbAJAtw/view?usp=sharing", kind: "shield" },
      { tier: "Feb 2026", big: "Spotlight", label: "Employee Award", note: "Awarded by the CEO for ownership and independent delivery of EMI Pricing and Dynamic Fare Tags.", org: "udChalo", link: "https://drive.google.com/file/d/1iCCKix3_e-W7sEGuUDpFGvWBVgq_4cCW/view", kind: "star", featured: true },
      { tier: "2024", big: "Semi-Finalist", label: "Tally Code Brewers", note: "National hackathon by Tally and Unstop.", org: "Tally × Unstop", link: "https://unstop.com/awards/u/rohit-katara-2585186/2024", kind: "bolt" },
];

const icons = {
      star: <svg viewBox="0 0 24 24"><path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z" /></svg>,
      shield: <svg viewBox="0 0 24 24"><path d="M12 3l8 3v6c0 4.5-3.2 7.8-8 9-4.8-1.2-8-4.5-8-9V6z" /><path d="M9 12l2 2 4-4" /></svg>,
      bolt: <svg viewBox="0 0 24 24"><path d="M13 2L5 14h6l-1 8 8-12h-6z" /></svg>,
};

const AwardCard = ({ a, i }) => {
      // cursor-following spotlight
      const onMove = (e) => {
            const r = e.currentTarget.getBoundingClientRect();
            e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
            e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
      };
      return (
            <motion.a className={`award ${a.featured ? "featured" : ""}`} href={a.link} target="_blank" rel="noreferrer" onMouseMove={onMove}
                  initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, delay: i * 0.15 }}>
                  <span className="glow" />
                  <span className="medal">{icons[a.kind]}</span>
                  <span className="tier">{a.tier}</span>
                  <strong>{a.big}</strong>
                  <span className="label">{a.label}</span>
                  <p>{a.note}</p>
                  <span className="foot"><em>{a.org}</em><span className="view">View certificate ↗</span></span>
            </motion.a>
      );
};

const rowOne = ["JavaScript", "TypeScript", "Python", "SQL", "React.js", "Next.js", "Redux", "SCSS", "GraphQL", "Core Web Vitals"];
const rowTwo = ["Node.js", "Express.js", "REST APIs", "WebSockets", "PostgreSQL", "MySQL", "MongoDB", "DynamoDB", "Redis", "AWS", "Docker", "Grafana", "Kibana", "Git"];

const Marquee = ({ items, reverse }) => (
      <div className="marquee">
            <div className={`track ${reverse ? "reverse" : ""}`}>
                  {[...items, ...items].map((s, i) => <span key={i}>{s}</span>)}
            </div>
      </div>
);


const Highlights = () => (
      <div className="highlights">
            <div className="skillsHead">
                  <span className="ghost">SKILLS</span>
                  <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                        <span className="chapter">02</span> Skills
                  </motion.h2>
            </div>

            <Marquee items={rowOne} />
            <Marquee items={rowTwo} reverse />

            <div className="awardsWrap" id="Achievements">
            <motion.h3 className="awardsTitle" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>Achievements</motion.h3>
            <div className="awards">
                  {awards.map((a, i) => <AwardCard a={a} i={i} key={a.label} />)}
            </div>
            </div>
      </div>
);

export default Highlights;
