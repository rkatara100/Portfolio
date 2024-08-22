import { useScroll, useSpring, motion, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
import "./Portfolio.scss";


const items = [
      {
            id: "1",
            title: "GameOn APP",
            img: "https://images.pexels.com/photos/50614/pexels-photo-50614.jpeg?auto=compress&cs=tinysrgb&w=600",
            desc: "Modern web application that combines the power of React.js, Chakra UI.",
            link: "https://new1on.netlify.app/",
      },
      {
            id: "2",
            title: "TECHNO",
            img: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, iure!",
            link: "https://techno12.netlify.app/",

      },
      {
            id: "3",
            title: "GSAP & JS",
            img: "https://images.pexels.com/photos/50614/pexels-photo-50614.jpeg?auto=compress&cs=tinysrgb&w=600",
            desc: "Mesmerizing animated website that draw amazing attention.",
            link: "https://rkatara100.github.io/DuoStudio/",

      },
]

const Single = ({ item }) => {
      const ref = useRef(null);
      const { scrollYProgress } = useScroll({
            target: ref,
            // offset: ["start start", "end start"]
      });
      const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);


      return <section >
            <div className="container" >
                  <div className="wrapper">
                        <div className="imageContainer" ref={{ ref }} >
                              <img src={item.img} />
                        </div>
                        <motion.div className="textContainer" style={{ y }}>
                              <h2>{item.title}</h2>
                              <p>{item.desc}</p>
                              <button ><a href={item.link} target='_blank'>see demo</a></button>
                        </motion.div>
                  </div>
            </div>

      </section >;

}
const Portfolio = () => {
      const ref = useRef(null);

      const { scrollYProgress } = useScroll({
            target: ref,
            offset: ["end end", "start start"]
      });

      const scaleX = useSpring(scrollYProgress, {
            stiffness: 100,
            damping: 30,
      })

      return (
            <div className='portfolio' ref={ref}>
                  <div className="progress">
                        <h1>Featured Works</h1>
                        <motion.div className="progressBar" style={{ scaleX }}>

                        </motion.div>
                  </div>
                  {
                        items.map((item) => (
                              <Single item={item} key={item.id} />
                        ))
                  }

            </div>
      )
}

export default Portfolio