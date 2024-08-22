import "./app.scss";
import Contact from "./Components/contact/Contact";
import Hero from "./Components/hero/Hero";
import Navbar from "./Components/navbar/Navbar";
import Parallax from "./Components/parallax/Parallax";
import Portfolio from "./Components/portfolio/Portfolio";
import Services from "./Components/services/Services";

const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar />
      <Hero />
    </section>
    <section ><Parallax type={"services"} /></section>
    <section id="Services"><Services /></section>
    <section id="About"><Parallax type={"planets"} /></section>
    <Portfolio id="Portfolio" />
    <section id="Contact"><Contact /></section>

  </div>;
};

export default App;
