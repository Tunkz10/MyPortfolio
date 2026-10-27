import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import RecentWork from "./components/RecentWork";
import TechStack from "./components/TechStack";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      return undefined;
    const ctx = gsap.context(() => {
      gsap.utils.toArray("[data-reveal]").forEach((element) => {
        gsap.fromTo(
          element,
          { y: 48, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: { trigger: element, start: "top 84%", once: true },
          },
        );
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <Hero />
        <AboutMe />
        <Experience />
        <RecentWork />
        <TechStack />
      </main>
      <Footer />
    </div>
  );
}
export default App;
