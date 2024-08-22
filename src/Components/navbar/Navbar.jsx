import React from 'react'
import "./Navbar.scss";
import { motion } from "framer-motion";
import Sidebar from '../sidebar/Sidebar';
const Navbar = () => {
      return (
            <div className='navbar'>
                  {/* {sidebar} */}
                  <Sidebar />
                  <div className="wrapper">
                        <motion.span initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}> R.K</motion.span>
                        <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="social">
                              <a href='https://github.com/rkatara100' target='blank'><img src='github.png'></img></a>
                              <a href='https://www.linkedin.com/in/rohit-katara12/' target='blank'><img src='linkedin.png' ></img></a>
                              <a href='https://linktr.ee/rkatara100' target='blank'><img src='linkedtree.png'></img></a>
                        </motion.div>
                  </div>
            </div>
      )
}

export default Navbar
