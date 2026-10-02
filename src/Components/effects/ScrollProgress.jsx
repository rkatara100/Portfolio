import { motion, useScroll, useSpring } from "framer-motion";
import "./Effects.scss";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return <motion.div className="scrollProgress" style={{ scaleX }} />;
};

export default ScrollProgress;
