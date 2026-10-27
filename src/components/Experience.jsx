import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const roles = [
  {
    period: "Dec 2025 - Present",
    company: "HPL Game Design Corporation",
    role: "Junior Front-end Web Developer",
    location: "Remote",
    bullets: [
      "Design and develop high-performance interactive playable ads from concept to deployment using React and Tailwind CSS.",
      "Handle same-day turnaround requests through rapid UI prototyping and responsive layout iteration.",
      "Partner with creative and marketing teams to improve ad performance using real-time data and A/B testing.",
    ],
  },
  {
    period: "May 2025 - Present",
    company: "Freelance / Contract-based",
    role: "Full Stack Developer",
    location: "Remote",
    bullets: [
      "Built a B2B rental platform with Vue and Supabase, including RLS security, PL/pgSQL triggers, inventory tracking, document storage, and financial reporting.",
      "Developed Cardano smart contract experiences with wallet connectivity, token transfers, and secure on-chain interactions.",
      "Created responsive landing pages for creative portfolios and cryptocurrency campaigns with a strong focus on trust and brand appeal.",
    ],
  },
  {
    period: "Feb 2025 - Jul 2025",
    company: "UPmeWorks",
    role: "Developer Intern",
    location: "Hybrid",
    bullets: [
      "Built the frontend and GUI of a sales and distribution desktop ERP in C# with Visual Studio, covering order entry and billing, receivables, payables, inventory, and purchasing.",
      "Developed an executive dashboard, module hubs, searchable master tables, and tabbed record forms such as the customer profile with billing, delivery, and credit terms.",
      "Designed the screens and a consistent form, table, and dialog system in Figma before implementing them in the desktop app.",
    ],
  },
];

function Experience() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      return undefined;

    const ctx = gsap.context(() => {
      gsap.utils.toArray(".experience-row").forEach((row) => {
        gsap.fromTo(
          row.querySelectorAll(".experience-animate"),
          { x: 110, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: row,
              start: "top 82%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="section overflow-hidden bg-ink text-white"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="section-label section-label-dark" data-reveal>
          <span>02</span> Experience
        </div>
        <div className="grid gap-12 lg:grid-cols-[.7fr_1.5fr] lg:gap-24">
          <div>
            <h2 data-reveal className="display-title sticky top-28">
              Building at
              <br />
              startup <em>speed.</em>
            </h2>
          </div>
          <div className="divide-y divide-white/15 border-t border-white/15">
            {roles.map((item, index) => (
              <article
                key={item.company}
                className="experience-row py-9 md:py-11"
              >
                <div className="experience-animate mb-5 flex items-center justify-between text-xs uppercase tracking-[.14em] text-white/55">
                  <span>{item.period}</span>
                  <span>{item.location}</span>
                </div>
                <span className="experience-animate mb-3 block text-xs text-accent">
                  0{index + 1}
                </span>
                <h3 className="experience-animate text-2xl font-semibold tracking-tight md:text-4xl">
                  {item.role}
                </h3>
                <p className="experience-animate mt-2 text-base text-white/55">
                  {item.company}
                </p>
                <ul className="mt-7 space-y-3 text-sm leading-6 text-white/65 md:text-base">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="experience-animate flex gap-3">
                      <span
                        className="bullet-arrow text-accent"
                        aria-hidden="true"
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
