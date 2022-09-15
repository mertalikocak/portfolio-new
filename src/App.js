import { useEffect } from "react";
import About from "./components/About";
import Card from "./components/Card";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({
      once: true,
    });
  });

  return (
    <div className="min-h-screen pt-10 pb-4 px-3 sm:px-5 bg-gray-100">
      <div data-aos="fade-down" data-aos-duration="800">
        <Card />
      </div>
      <div data-aos="fade-up" data-aos-duration="800">
        <About />
      </div>
      <div data-aos="zoom-up" data-aos-duration="800">
        <Skills />
      </div>
      <div data-aos="zoom-out" data-aos-duration="3000">
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
