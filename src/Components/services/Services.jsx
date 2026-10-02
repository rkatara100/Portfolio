import React, { useState } from 'react';
import "./Services.scss";
import { motion, AnimatePresence } from "framer-motion";

const topics = [
      {
            label: "Performance",
            icon: <svg viewBox="0 0 24 24"><path d="M4 16a8 8 0 1 1 16 0" /><path d="M12 16l4-5" /><circle cx="12" cy="16" r="1" /></svg>,
            problem: "Pages feel slow, components re-render for no reason and users leave before the content shows up.",
            approach: "Measure first, then fix the real bottleneck: profile renders, split the bundle, lazy-load heavy parts and cache what doesn't change.",
            tags: ["React Profiler", "Code Splitting", "Caching", "Web Vitals"],
      },
      {
            label: "Security",
            icon: <svg viewBox="0 0 24 24"><path d="M12 3l8 3v6c0 4.5-3.2 7.8-8 9-4.8-1.2-8-4.5-8-9V6z" /><path d="M9 12l2 2 4-4" /></svg>,
            problem: "User data and APIs are exposed to bad input, stolen tokens and brute-force attempts.",
            approach: "Never trust input: validate on the server, hash passwords, use short-lived tokens with least privilege, rate-limit and lock down CORS and headers.",
            tags: ["JWT Auth", "Validation", "Rate Limiting", "OWASP"],
      },
      {
            label: "System Design",
            icon: <svg viewBox="0 0 24 24"><rect x="3" y="4" width="7" height="6" rx="1.5" /><rect x="14" y="4" width="7" height="6" rx="1.5" /><rect x="8.5" y="15" width="7" height="6" rx="1.5" /><path d="M6.5 10v2.5h11V10M12 12.5V15" /></svg>,
            problem: "Traffic grows, one server and one database start to buckle and a single failure takes everything down.",
            approach: "Split responsibilities into services, batch and queue heavy writes, keep hot data in Redis and keep the database as the source of truth.",
            tags: ["Redis", "Queues", "Microservices", "Postgres"],
      },
      {
            label: "Debugging",
            icon: <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="6" /><path d="M20 20l-4.2-4.2M8.5 11h5" /></svg>,
            problem: "Something breaks in production and nobody knows why. It only happens for some users.",
            approach: "Reproduce it, isolate the cause with logs and metrics, fix the root cause instead of the symptom and add a test so it stays fixed.",
            tags: ["Logging", "Monitoring", "Root Cause", "Testing"],
      },
];

// Interactive layout: pick a topic on the left, see problem -> approach on the right.
const Services = () => {
      const [active, setActive] = useState(0);
      const t = topics[active];

      return (
            <div className='services'>
                  <motion.div className="header" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.7 }}>
                        <span className="eyebrow">03 · How I think</span>
                        <h1>I solve <b>problems</b>,<br />not just build screens.</h1>
                  </motion.div>

                  <div className="stage">
                        <div className="tabs">
                              {topics.map((topic, i) => (
                                    <button key={topic.label} className={i === active ? "tab active" : "tab"} onClick={() => setActive(i)}>
                                          <span className="icon">{topic.icon}</span>
                                          <span className="name">{topic.label}</span>
                                          <span className="num">0{i + 1}</span>
                                    </button>
                              ))}
                        </div>

                        <div className="panel">
                              <AnimatePresence mode="wait">
                                    <motion.div key={t.label} className="flow" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.35 }}>
                                          <div className="step problem">
                                                <span className="tag">The Problem</span>
                                                <p>{t.problem}</p>
                                          </div>
                                          <div className="connector"><span /></div>
                                          <div className="step approach">
                                                <span className="tag">My Approach</span>
                                                <p>{t.approach}</p>
                                          </div>
                                          <div className="tags">{t.tags.map((x) => <span key={x}>{x}</span>)}</div>
                                    </motion.div>
                              </AnimatePresence>
                        </div>
                  </div>
            </div>
      );
};

export default Services;
