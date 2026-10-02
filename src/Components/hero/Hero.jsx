import React, { Suspense, lazy } from 'react'
import "./Hero.scss";
import { motion } from "framer-motion";
import { scrollToId, prefersReducedMotion } from '../../utils/smoothScroll';
import { useMagnetic } from '../../utils/useMagnetic';

const Hero3D = lazy(() => import('./Hero3D'));

const Hero = () => {
      const TextVariants = {

            initial: {
                  x: -500,
                  opacity: 0
            },
            animate: {
                  x: 0,
                  opacity: 1,
                  transition: {
                        duration: 1,
                        staggerChildren: 0.1,
                  }
            },
            ScrollButton: {
                  y: 10,
                  opacity: 0,
                  transition: {
                        duration: 2,
                        repeat: Infinity,
                  }
            }
      };
      const SliderVariants = {
            animate: {
                  x: "-250%",
                  transition: {
                        repeat: Infinity,
                        repeateType: "mirror",
                        duration: 20,
                  }
            },
            ScrollButton: {
                  y: 10,
                  opacity: 0,
                  transition: {
                        duration: 2,
                        repeat: Infinity,
                  }
            }
      }
      const worksRef = useMagnetic();
      const contactRef = useMagnetic();
      const resumeRef = useMagnetic();
      const show3D = !prefersReducedMotion() && !window.matchMedia("(max-width: 738px)").matches;

      return (
            <div className='hero'>
                  {show3D && (
                        <div className="canvasBg">
                              <Suspense fallback={null}><Hero3D /></Suspense>
                        </div>
                  )}
                  <div className="wrapper">
                        <motion.div className="textContainer" variants={TextVariants} animate="animate" initial="initial">
                              <motion.h2 variants={TextVariants}>ROHIT KATARA</motion.h2>
                              <motion.h1 variants={TextVariants}> Software Engineer</motion.h1>
                              <motion.div className="buttons" variants={TextVariants}>
                                    <motion.button ref={worksRef} className="btn btn-primary" variants={TextVariants} onClick={() => scrollToId("Portfolio")}>See the latest works</motion.button>
                                    <motion.button ref={contactRef} className="btn btn-light" variants={TextVariants} onClick={() => scrollToId("Contact")}>Contact Me</motion.button>
                                    <motion.a ref={resumeRef} className="btn btn-outline" variants={TextVariants} href="/Rohit_Katara_Resume.pdf" target="_blank" rel="noreferrer">Resume</motion.a>
                              </motion.div>
                              <motion.div className="stats" variants={TextVariants}>
                                    <div><b>1.5+</b><span>Years in production</span></div>
                                    <div><b>50K+</b><span>Daily users served</span></div>
                                    <div><b>2</b><span>Company awards</span></div>
                              </motion.div>
                              <motion.img variants={TextVariants} animate="ScrollButton" src="/scroll.png" alt='scroll-png'></motion.img>
                        </motion.div>

                        <motion.div className="TextSlidingContainer" animate="animate" initial="initial" variants={SliderVariants}>
                              Technical Developer
                        </motion.div>
                  </div>
                  <div className="imageContainer">
                        <img src='/my.png'></img>
                  </div>
            </div>
      )
}

export default Hero
