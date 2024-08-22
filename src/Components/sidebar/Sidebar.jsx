import { useState } from "react";
import "./sidebar.scss";
import Links from "./links/Links";
import ToggleButton from "./button/ToggleButton";
import { delay, motion, transform } from "framer-motion";
import { transition } from "d3";
const Sidebar = () => {

      const [open, setOpen] = useState(false);

      const variants = {
            open: {
                  clipPath: "circle(1150px at 50px 50px)",
                  transition: {
                        type: "spring",
                        stiffness: 20,

                  }

            },
            closed: {
                  clipPath: "circle(30px at 50px 50px)", //circle shape parameters are radius, y-axis ,x-axis se duri 
                  transition: {
                        delay: 0.2,
                        stiffness: 400,
                        type: "spring",
                        damping: 40,
                  }


            }
      }


      return (
            <motion.div className='sidebar' animate={open ? "open" : "closed"} >

                  <motion.div className="bg" variants={variants}>
                        <Links />
                  </motion.div>
                  <ToggleButton setOpen={setOpen} />

            </motion.div>
      )
}

export default Sidebar
