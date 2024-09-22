import React from 'react'
import "./Hero.scss";
import { animate, motion } from "framer-motion";
import { Link as ScrollLink } from 'react-scroll';


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
      return (
            <div className='hero'>
                  <div className="wrapper">
                        <motion.div className="textContainer" variants={TextVariants} animate="animate" initial="initial">
                              <motion.h2 variants={TextVariants}>ROHIT KATARA</motion.h2>
                              <motion.h1 variants={TextVariants}> Fullstack Web Developer</motion.h1>
                              <motion.div className="buttons" variants={TextVariants}>
                                    <motion.button variants={TextVariants}>See the latest works</motion.button>
                                    <motion.button as={ScrollLink}
                                          to="Contact"
                                          smooth={true} variants={TextVariants} style={{ backgroundColor: "white", color: "black", }} whileHover={{ scale: "1.1" }} >Contact Me</motion.button>
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
