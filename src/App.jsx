import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import TickerStrip from "./components/TickerStrip";
import Preloader from "./components/Preloader";
import ScrollProgress from "./components/ScrollProgress";
import CustomCursor from "./components/CustomCursor";

function App() {
  const [booted, setBooted] = useState(false);

  return (
    <>
      <AnimatePresence>{!booted && <Preloader onDone={() => setBooted(true)} />}</AnimatePresence>

      {booted && (
        <>
          <ScrollProgress />
          <CustomCursor />
          <Nav />
          <main className="pt-14 md:pt-0 md:pl-56">
            <Hero />
            <TickerStrip />
            <Projects />
            <Experience />
            <About />
            <Skills />
            <Education />
            <Contact />
            <Footer />
          </main>
        </>
      )}
    </>
  );
}

export default App;
