import { useEffect, useRef } from "react";
import gsap from "gsap";

function Hero() {
  const root = useRef(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const ctx = gsap.context(() => {
      if (reduceMotion) return;
      gsap.from(".hero-line > *", {
        yPercent: 115,
        duration: 1.1,
        stagger: 0.1,
        ease: "power4.out",
        delay: 0.15,
      });
      gsap.from(".hero-fade", {
        y: 28,
        opacity: 0,
        duration: 0.85,
        stagger: 0.1,
        delay: 0.55,
        ease: "power3.out",
      });
      gsap.from(".hero-rule", {
        scaleX: 0,
        duration: 1.2,
        delay: 0.9,
        transformOrigin: "left",
        ease: "power3.out",
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="home"
      className="hero relative min-h-[100svh] overflow-hidden"
    >
      <div className="hero-atmosphere absolute inset-0" aria-hidden="true" />
      <div className="hero-grid absolute inset-0" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-5 pb-10 pt-32 md:px-8 md:pb-12 md:pt-36">
        <div className="grid items-end gap-12 lg:grid-cols-[1.55fr_.65fr] lg:gap-20">
          <div>
            <p className="hero-fade mb-7 text-xs font-medium uppercase tracking-[.2em] text-accent">
              Full-stack developer
            </p>
            <h1 className="text-[clamp(4.6rem,10.5vw,9.4rem)] font-semibold uppercase leading-[.78] tracking-[-.065em] text-white">
              <span className="hero-line block overflow-hidden">
                <span className="block">Joshua</span>
              </span>
              <span className="hero-line block overflow-hidden">
                <span className="block text-outline">Mades</span>
              </span>
            </h1>
          </div>

          <aside className="hero-fade pb-1 lg:pb-3">
            <div className="hero-rule mb-7 h-px bg-white/20" />
            <p className="max-w-md text-base leading-7 text-white/64">
              I create fast, polished digital products - from interactive
              playable ads to secure full-stack business platforms.
            </p>
            <p className="mt-7 text-[10px] font-semibold uppercase leading-6 tracking-[.18em] text-white/55">
              React / Vue / Tailwind / GSAP
            </p>
            <a className="button-primary mt-7" href="#work">
              Explore my work <span className="cta-arrow" aria-hidden="true" />
            </a>
          </aside>
        </div>

        <div className="hero-fade mt-12 flex flex-col gap-4 border-t border-white/10 pt-5 text-[10px] uppercase tracking-[.2em] text-white/55 sm:flex-row sm:items-center sm:justify-between md:mt-16">
          <span>Based in Bulacan, Philippines</span>
          <span>
            Scroll to discover <span className="ml-2 text-accent">01</span>
          </span>
        </div>
      </div>
    </section>
  );
}
export default Hero;
