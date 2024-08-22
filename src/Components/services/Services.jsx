import React from 'react';
import "./Services.scss";
import { animate, motion, useInView } from "framer-motion";
import { transition } from 'd3';
import { useRef } from 'react';

const variants = {
      initial: {
            x: -500,
            y: 100,
            opacity: 0,
      },
      animate: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                  duration: 1,
                  staggerChildren: 0.1
            }

      }
}

const Services = () => {
      const ref = useRef();

      const isInView = useInView(ref, { margin: "-100px" });

      // whileInView={"animate"}
      return (
            <motion.div className='services' variants={variants} initial="initial" ref={ref} animate={"animate"}>
                  <motion.div className="textContainer" variants={variants} >
                        <p>I focus on helping your brand <br />
                              Grow  as a Developer</p>
                        <hr />
                  </motion.div>
                  <motion.div className="titleContainer" variants={variants}>
                        <div className="title">
                              <img src="/people.webp" alt="people_img" />
                              <h1><motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas</h1>
                        </div>
                        <div className="title" >
                              <h1><motion.b whileHover={{ color: "orange" }}>For Your </motion.b>Business.</h1>
                              <button>What I do?</button>
                        </div>

                  </motion.div>

                  <motion.div className="listContainer" variants={variants}>
                        <motion.div className="box" whileHover={{ backgroundColor: "gray", color: "black" }}>
                              <h1>Frontend Development</h1>
                              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut pariatur a nostrum fugit, quidem possimus facilis placeat sit tempora quas!</p>
                              <button>Go</button>
                        </motion.div>
                        <motion.div className="box" whileHover={{ backgroundColor: "gray", color: "black" }}>
                              <h1>Backend Development</h1>
                              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut pariatur a nostrum fugit, quidem possimus facilis placeat sit tempora quas!</p>
                              <button>Go</button>
                        </motion.div>
                        <motion.div className="box" whileHover={{ backgroundColor: "gray", color: "black" }}>
                              <h1>End to End Application</h1>
                              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut pariatur a nostrum fugit, quidem possimus facilis placeat sit tempora quas!</p>
                              <button>Go</button>
                        </motion.div>
                        <motion.div className="box" whileHover={{ backgroundColor: "gray", color: "black" }}>
                              <h1>Other Support</h1>
                              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut pariatur a nostrum fugit, quidem possimus facilis placeat sit tempora quas!</p>
                              <button>Go</button>
                        </motion.div>
                  </motion.div>
            </motion.div >
      )
}

export default Services
