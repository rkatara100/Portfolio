import { useEffect } from "react";
import "./app.scss";
import Contact from "./Components/contact/Contact";
import Hero from "./Components/hero/Hero";
import Navbar from "./Components/navbar/Navbar";
import Parallax from "./Components/parallax/Parallax";
import Portfolio from "./Components/portfolio/Portfolio";
import Experience from "./Components/experience/Experience";
import Highlights from "./Components/experience/Highlights";
import Services from "./Components/services/Services";
import Cursor from "./Components/effects/Cursor";
import ClickSplash from "./Components/effects/ClickSplash";
import ScrollProgress from "./Components/effects/ScrollProgress";
import { initSmoothScroll } from "./utils/smoothScroll";

const App = () => {
  useEffect(() => initSmoothScroll(), []);

  return <div>
    <ScrollProgress />
    <Cursor />
    <ClickSplash />
    <section id="Homepage">
      <Navbar />
      <Hero />
    </section>
    <section id="Experience" className="auto"><Experience /></section>
    <section id="Skills" className="auto"><Highlights /></section>
    <section><Parallax type={"services"} /></section>
    <section id="Services"><Services /></section>
    <section id="About"><Parallax type={"planets"} /></section>
    <Portfolio />
    <section id="Contact"><Contact /></section>

  </div>;
};

export default App;
