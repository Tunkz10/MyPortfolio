const groups = [
  {
    title: "Front-end",
    items: [
      "React",
      "Next.js",
      "Vue.js",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Handlebars",
      "GSAP",
    ],
  },
  {
    title: "Back-end & data",
    items: [
      "Node.js",
      "C#",
      "Python",
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "Supabase",
      "PL/pgSQL",
    ],
  },
  {
    title: "Design & creative",
    items: [
      "Figma",
      "Canva",
      "Adobe Photoshop",
      "Adobe Premiere",
      "UI/UX Prototyping",
    ],
  },
  {
    title: "Exploring",
    items: [
      "YOLO Object Detection",
      "Model Training",
      "Cardano",
      "Smart Contracts",
    ],
  },
];
function TechStack() {
  return (
    <section id="stack" className="section overflow-hidden bg-slate text-white">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="section-label" data-reveal>
          <span>04</span> Capabilities
        </div>
        <div className="grid gap-12 lg:grid-cols-[.75fr_1.5fr] lg:gap-24">
          <h2 className="display-title" data-reveal>
            Tools are
            <br />
            only as good as
            <br />
            <em>the idea.</em>
          </h2>
          <div className="divide-y divide-ink/20 border-t border-white/15">
            {groups.map((group, index) => (
              <div
                key={group.title}
                className="grid gap-5 py-8 sm:grid-cols-[9rem_1fr]"
                data-reveal
              >
                <div className="flex gap-3 text-sm font-semibold">
                  <span className="text-white/55">0{index + 1}</span>
                  {group.title}
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="skill-pill">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default TechStack;
