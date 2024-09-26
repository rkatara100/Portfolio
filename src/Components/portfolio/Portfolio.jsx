import { useScroll, useSpring, motion, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
import "./Portfolio.scss";


const items = [

      {
            id: "1",
            title: "DOCTO 24x7",
            img: "https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg",
            desc: "Online Doctor Consultation Platform.",
            link: "https://docto-24x7.vercel.app/",
      },
      {
            id: "2",
            title: "Fin-APP",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhNv1Y_V5Z-BPyEyphX-E3z2Ts3GZIywIxLg&s",
            desc: "Real-Time Social Media App with Video Room",
            link: "https://github.com/rkatara100/Fin_app",
      },

      {
            id: "3",
            title: "Portfolio",
            img: "data:image/png;base64,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",
            desc: "Porfolio",
            link: "https://portfolio-1-vivh.onrender.com/",

      },
      {
            id: "4",
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
