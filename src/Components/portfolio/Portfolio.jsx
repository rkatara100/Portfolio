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
            title: "BHOOK",
            img: "https://media.istockphoto.com/id/1306458509/photo/indian-food-delivery-indian-cuisine-and-food-delivery-smartphone-apps-online.webp?a=1&b=1&s=612x612&w=0&k=20&c=HzQGbgrjq2jwpTKfl8goX-pdlSScNoXaeaGdk-GcALY=",
            desc: "Food Delivery Application",
            link: "https://bhook-cyan.vercel.app/",
      },
      {
            id: "3",
            title: "Fin-APP",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhNv1Y_V5Z-BPyEyphX-E3z2Ts3GZIywIxLg&s",
            desc: "Real-Time Social Media App with Video Room",
            link: "https://github.com/rkatara100/Fin_app",
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
