import React from 'react';
import "./Parallax.scss";
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react';

const Parallax = ({ type }) => {

      const ref = useRef();

      const { scrollYProgress } = useScroll({
            target: ref,
            offset: ["start start", "end start"]
      })

      const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
      const textBg = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);


      return (
            <motion.div ref={ref} className="parallax" style={{ background: type === "services" ? "linear-gradient(180deg,#111132,#0c0c1d)" : "linear-gradient(180deg,#111132,#505064" }} >
                  <motion.h1 style={{ y: textBg }}>{type === "services" ? "What I do?" : "What I did?"}</motion.h1>
                  <motion.div className="mountains"></motion.div>
                  <motion.div style={{ y: textBg, backgroundImage: `url(${type === "services" ? "/planets.png" : "/sun.png"})` }} className="planets"></motion.div>
                  <motion.div style={{ x: yBg }} className="stars"></motion.div>
            </motion.div>
      )
}

export default Parallax
