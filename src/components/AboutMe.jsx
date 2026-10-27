const stats = [
  ["2025", "Started professionally"],
  ["5+", "Product experiences"],
  ["Remote", "Collaboration ready"],
];
function AboutMe() {
  return (
    <section id="about" className="section bg-paper text-white">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="section-label" data-reveal>
          <span>01</span> About
        </div>
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.6fr] lg:gap-24">
          <h2 data-reveal className="display-title">
            I build the
            <br />
            useful and
            <br />
            <em>unexpected.</em>
          </h2>
          <div>
            <p data-reveal className="lead-copy">
              I'm a fast-learning developer who turns ideas into responsive,
              user-friendly products. My work spans interactive advertising,
              full-stack business platforms, blockchain experiences, and
              interface design.
            </p>
            <p
              data-reveal
              className="mt-7 max-w-2xl text-base leading-7 text-white/60"
            >
              I enjoy the space where engineering meets visual craft - working
              closely with creative, marketing, and product teams to ship
              quickly, learn from real data, and keep improving the experience.
            </p>
            <div className="mt-14 grid grid-cols-3 gap-4 border-t border-white/15 pt-7">
              {stats.map(([value, label]) => (
                <div key={label} data-reveal>
                  <strong className="block text-xl md:text-3xl">{value}</strong>
                  <span className="mt-2 block text-xs leading-5 text-white/50">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default AboutMe;
