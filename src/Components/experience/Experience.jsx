import React from "react";
import { motion } from "framer-motion";
import "./Experience.scss";

const jobs = [
      {
            id: "udchalo",
            company: "udChalo",
            url: "https://www.udchalo.com/flights",
            sub: "Flight booking platform for defence personnel · Pune",
            role: "Software Engineer I",
            period: "Jul 2025 – Present",
            points: [
                  "Expanded revenue surface by shipping new fare types and ancillary services (seat, meal, baggage) into the booking pipeline, with a clean pre-launch and post-release record monitored via Kibana, recognised with the **Combat Readiness | Entire Quarter Award (Q1 FY26)**.",
                  "Broadened platform capability and booking flexibility by shipping **Pet Travel Booking** and **True Round Trip** support.",
                  "Architected reusable, **prop-driven React components** (search widgets, **Email Autocompletion**, booking forms) across the flight journey, cutting duplicate UI code and standardising design patterns.",
                  "Recognised with the **Spotlight Employee Award (Feb 2026)**. Engineered core flight booking journey modules: **EMI Pricing**, **Dynamic Fare Tags**, and **real-time Flight Status tracking**, directly impacting how defence personnel transact and navigate across the web app.",
                  "Led the Web revamp, migrating the platform from Angular 12 to Next.js 14 and integrating **Strapi CMS** for decoupled content management, boosting performance, SEO, and developer velocity.",
                  "Introduced **Guided Flow** by eliminating dead-click paths across the booking funnel, reducing significant drop-off.",
            ],
            tags: ["Next.js", "React", "Strapi CMS", "Kibana"],
      },
      {
            id: "wingify",
            bold: true,
            company: "Wingify / VWO",
            url: "https://wingify.com/",
            letter: "https://drive.google.com/file/d/12s4vPIIb8GzVDyTfRfM8MOQwrBNKEkHl/view?usp=sharing",
            sub: "Global B2B SaaS · Delhi",
            role: "Software Engineering Intern",
            period: "Apr 2025 – Jun 2025",
            points: [
                  "Engineered analytics report views for **click-event tracking and heatmap data** within VWO's Insights module, a **B2B SaaS** platform trusted by **6,000+ clients across 90+ countries**, including {{brands}}, using TypeScript and AngularJS in the app-v3 codebase.",
                  "Built a **report-mapping layer** that unified funnel drop-off and visitor segment data into structured, consistent report outputs for global enterprise teams across VWO's client base.",
                  "Contributed to the **A/B testing report pipeline**, connecting experiment variation data to the analytics dashboard so behavioural insights surface alongside test results for product teams worldwide.",
            ],
            tags: ["TypeScript", "AngularJS", "Analytics"],
      },
];

const brandNames = ["Microsoft", "Disney", "eBay"];

// **bold** segments become <strong>; {{brands}} becomes the coloured client names
const renderPoint = (text) =>
      text.split(/(\*\*[^*]+\*\*|\{\{brands\}\})/).map((part, i) => {
            if (part === "{{brands}}") {
                  return <span key={i}>{brandNames.map((b) => <span key={b} className={`brand ${b.toLowerCase()}`}>{b}</span>)}</span>;
            }
            if (part.startsWith("**")) return <strong key={i}>{part.slice(2, -2)}</strong>;
            return part;
      });

const stats = [
      ["1.5+", "Years in production"],
      ["50K+", "Daily users served"],
      ["90+", "Countries reached via VWO"],
];

const Experience = () => (
      <div className="experience">
            <div className="left">
                  <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                        <span className="chapter">01</span>
                        <h1>Experience</h1>
                        <p>Shipping features for real users, from defence travel to global SaaS.</p>
                        <div className="stats">
                              {stats.map(([n, l]) => (
                                    <div key={l}><b>{n}</b><span>{l}</span></div>
                              ))}
                        </div>
                  </motion.div>
            </div>

            <div className="right">
                  {jobs.map((job) => (
                        <motion.div className={`job ${job.bold ? "bold" : ""}`} key={job.id} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.7 }}>
                              <div className="jobTop">
                                    <h2><a href={job.url} target="_blank" rel="noreferrer">{job.company} <span className="arrow">↗</span></a></h2>
                                    <span className="period">{job.period}</span>
                              </div>
                              <span className="role">{job.role}</span>
                              <span className="sub">{job.sub}</span>

                              <ul>
                                    {job.points.map((p) => <li key={p}>{renderPoint(p)}</li>)}
                              </ul>

                              <div className="foot">
                                    <div className="tags">{job.tags.map((t) => <span key={t}>{t}</span>)}</div>
                                    {job.letter && <a className="letter" href={job.letter} target="_blank" rel="noreferrer">View experience letter ↗</a>}
                              </div>
                        </motion.div>
                  ))}
            </div>
      </div>
);

export default Experience;
