import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

// Gallery tiles load the 1000px WebP from a sibling thumbs/ folder; the lightbox uses the original.
const thumbFor = (src) => src.replace(/\/([^/]+)\.webp$/i, "/thumbs/$1.webp");

function CaseStudyModal({ project, onClose }) {
  const overlayRef = useRef(null);
  const panelRef = useRef(null);
  const [selectedDemoIndex, setSelectedDemoIndex] = useState(0);
  const [reloadKey, setReloadKey] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const galleryLength = project.gallery ? project.gallery.length : 0;
  const scrollRef = useRef(null);
  const phoneRef = useRef(null);
  const [demoInView, setDemoInView] = useState(true);

  // Pause the playable when the phone frame scrolls out of view: a display:none
  // iframe stops rendering and its rAF loop, but keeps its game state.
  useEffect(() => {
    const phone = phoneRef.current;
    if (!phone) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => setDemoInView(entry.isIntersecting),
      { root: scrollRef.current, rootMargin: "120px 0px" },
    );
    observer.observe(phone);
    return () => observer.disconnect();
  }, []);

  // Body content is hidden behind the modal, so drop the page's fixed grain layer.
  useEffect(() => {
    document.body.classList.add("cs-open");
    return () => document.body.classList.remove("cs-open");
  }, []);

  const showPrev = () =>
    setLightboxIndex((i) => (i - 1 + galleryLength) % galleryLength);
  const showNext = () => setLightboxIndex((i) => (i + 1) % galleryLength);

  // While the lightbox is open, it owns Escape/arrow keys. Capture phase +
  // stopImmediatePropagation keeps Escape from also closing the case study.
  useEffect(() => {
    if (lightboxIndex === null) return undefined;
    const handleKey = (e) => {
      if (e.key === "Escape") setLightboxIndex(null);
      else if (e.key === "ArrowLeft")
        setLightboxIndex((i) => (i - 1 + galleryLength) % galleryLength);
      else if (e.key === "ArrowRight")
        setLightboxIndex((i) => (i + 1) % galleryLength);
      else return;
      e.stopImmediatePropagation();
    };
    window.addEventListener("keydown", handleKey, true);
    return () => window.removeEventListener("keydown", handleKey, true);
  }, [lightboxIndex, galleryLength]);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const ctx = gsap.context(() => {
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.35, ease: "power2.out" },
      );
      gsap.fromTo(
        panelRef.current,
        { y: "100%" },
        { y: "0%", duration: 0.55, ease: "power3.out", delay: 0.08 },
      );
    });

    const handleEsc = (e) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
      ctx.revert();
    };
  }, []);

  const handleClose = () => {
    gsap.to(panelRef.current, {
      y: "100%",
      duration: 0.4,
      ease: "power3.in",
    });
    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.3,
      delay: 0.1,
      onComplete: () => {
        document.body.style.overflow = "";
        onClose();
      },
    });
  };

  const cs = project.caseStudy;
  const hasPlayableDemos = project.playableDemos && project.playableDemos.length > 0;
  const currentDemo = hasPlayableDemos ? project.playableDemos[selectedDemoIndex] : null;

  return (
    <div className="cs-root">
      <div ref={overlayRef} className="cs-overlay" onClick={handleClose} />
      <div ref={panelRef} className="cs-panel">
        {/* Header bar */}
        <div className="cs-header">
          <div className="cs-header-left">
            <span className="cs-header-number">{project.number}</span>
            <span className="cs-header-type">{project.type}</span>
          </div>
          <button className="cs-close" onClick={handleClose} aria-label="Close">
            <span /><span />
          </button>
        </div>

        {/* Scrollable content */}
        <div ref={scrollRef} className="cs-scroll">
          {/* Hero */}
          <div className="cs-hero">
            <div className="cs-hero-text">
              <h2 className="cs-title">{project.title}</h2>
              <p className="cs-subtitle">{cs.subtitle}</p>

              {hasPlayableDemos && (
                <div className="cs-hero-actions">
                  <button
                    type="button"
                    className="cs-cta-play-btn"
                    onClick={() => {
                      const el = document.getElementById("cs-gameplay-simulator");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    Play Live Demos ({project.playableDemos.length} Games)
                  </button>
                </div>
              )}

              {project.liveUrl && (
                <div className="cs-hero-actions">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cs-cta-play-btn"
                  >
                    Visit Live Site
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17 17 7M8 7h9v9" />
                    </svg>
                  </a>
                </div>
              )}
            </div>
            <div className="cs-hero-image">
              <img
                src={project.preview}
                style={{ objectPosition: project.previewPosition }}
                alt={project.title}
              />
            </div>
          </div>

          {/* Meta strip */}
          <div className="cs-meta">
            {cs.meta.map(([label, value]) => (
              <div key={label} className="cs-meta-item">
                <span className="cs-meta-label">{label}</span>
                <span className="cs-meta-value">{value}</span>
              </div>
            ))}
          </div>

          {/* Overview */}
          <section className="cs-section">
            <div className="cs-section-grid">
              <h3 className="cs-section-title">Overview</h3>
              <div>
                <p className="cs-body">{cs.overview}</p>
              </div>
            </div>
          </section>

          {/* Live Playable Gameplay Simulator (if project has demos) */}
          {hasPlayableDemos && (
            <section id="cs-gameplay-simulator" className="cs-section cs-gameplay-section">
              <div className="cs-gameplay-header">
                <div className="cs-gameplay-badge">
                  <span className="cs-live-dot" /> LIVE INTERACTIVE GAMEPLAY
                </div>
                <h3 className="cs-gameplay-heading">
                  Play the Ad Demos Directly
                </h3>
                <p className="cs-gameplay-sub">
                  Real single-file HTML playable ads built for mobile ad networks (MRAID &amp; mobile WebViews). Select any game to test touch interactions, animations, and game logic right inside the simulator.
                </p>
              </div>

              <div className="cs-gameplay-container">
                {/* Left: Game selector & Controls */}
                <div className="cs-gameplay-sidebar">
                  <div className="cs-gameplay-list">
                    {project.playableDemos.map((demo, idx) => (
                      <button
                        key={demo.id}
                        type="button"
                        className={`cs-game-item ${selectedDemoIndex === idx ? "is-active" : ""}`}
                        onClick={() => {
                          setSelectedDemoIndex(idx);
                          setReloadKey((k) => k + 1);
                        }}
                      >
                        <div className="cs-game-item-top">
                          <span className="cs-game-item-title">{demo.title}</span>
                          <span className="cs-game-item-badge">{demo.badge}</span>
                        </div>
                        <p className="cs-game-item-desc">{demo.description}</p>
                      </button>
                    ))}
                  </div>

                  <div className="cs-game-controls">
                    <button
                      type="button"
                      className="cs-ctrl-btn"
                      onClick={() => setReloadKey((k) => k + 1)}
                      title="Restart gameplay"
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
                      </svg>
                      Restart Game
                    </button>
                    <a
                      href={currentDemo.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cs-ctrl-btn cs-ctrl-btn-primary"
                      title="Open game in full screen tab"
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                      Open in New Tab
                    </a>
                  </div>

                  <div className="cs-gameplay-tip">
                    <span>💡</span>
                    <span>
                      <strong>Interactive Preview:</strong> Click and drag inside the screen below to trigger physics, drag items, and complete mini-games.
                    </span>
                  </div>
                </div>

                {/* Right: Phone Simulator */}
                <div className="cs-gameplay-preview-col">
                  <div ref={phoneRef} className="cs-phone-frame">
                    <div className="cs-phone-notch">
                      <span className="cs-phone-speaker" />
                      <span className="cs-phone-lens" />
                    </div>
                    <iframe
                      key={`${currentDemo.file}-${reloadKey}`}
                      src={currentDemo.file}
                      title={currentDemo.title}
                      className="cs-phone-iframe"
                      style={demoInView ? undefined : { display: "none" }}
                      allow="autoplay; fullscreen"
                      sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                    />
                    <div className="cs-phone-bar" />
                  </div>
                  <div className="cs-phone-caption">
                    <span>Active: <strong>{currentDemo.title}</strong></span>
                    <span className="cs-phone-caption-sep">·</span>
                    <span>Single-file MRAID</span>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Challenge */}
          <section className="cs-section">
            <div className="cs-section-grid">
              <h3 className="cs-section-title">The Challenge</h3>
              <div>
                <p className="cs-body">{cs.challenge}</p>
              </div>
            </div>
          </section>

          {/* Solution */}
          <section className="cs-section">
            <div className="cs-section-grid">
              <h3 className="cs-section-title">The Solution</h3>
              <div>
                <p className="cs-body">{cs.solution}</p>
                {cs.features && (
                  <ul className="cs-features">
                    {cs.features.map((f) => (
                      <li key={f}>
                        <span className="cs-feature-icon" aria-hidden="true" />
                        {f}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </section>

          {/* Screens */}
          {project.gallery && (
            <section className="cs-section">
              <div className="cs-section-grid">
                <h3 className="cs-section-title">Screens</h3>
                <div
                  className={`cs-gallery ${project.galleryLayout === "portrait" ? "cs-gallery-portrait" : ""}`}
                  style={
                    project.galleryAspect
                      ? { "--gallery-aspect": project.galleryAspect }
                      : undefined
                  }
                >
                  {project.gallery.map((src, i) => (
                    <button
                      key={src}
                      type="button"
                      className="cs-gallery-item"
                      onClick={() => setLightboxIndex(i)}
                      aria-label={`View ${project.title} screen ${i + 1}`}
                    >
                      <img
                        src={thumbFor(src)}
                        alt={`${project.title} screen ${i + 1}`}
                        loading="lazy"
                        decoding="async"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Results */}
          {cs.results && (
            <section className="cs-section">
              <div className="cs-section-grid">
                <h3 className="cs-section-title">Results</h3>
                <div className="cs-results-grid">
                  {cs.results.map(([stat, label]) => (
                    <div key={label} className="cs-result-card">
                      <strong className="cs-result-stat">{stat}</strong>
                      <span className="cs-result-label">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Tech stack */}
          <section className="cs-section cs-section-last">
            <div className="cs-section-grid">
              <h3 className="cs-section-title">Tech Stack</h3>
              <div className="cs-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="cs-tag">{tag}</span>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Screenshot lightbox */}
      {lightboxIndex !== null && (
        <div
          className="cs-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} screen ${lightboxIndex + 1} of ${galleryLength}`}
          onClick={() => setLightboxIndex(null)}
        >
          <button
            type="button"
            className="cs-close cs-lightbox-close"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close image"
          >
            <span /><span />
          </button>

          {galleryLength > 1 && (
            <button
              type="button"
              className="cs-lightbox-nav cs-lightbox-prev"
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              aria-label="Previous image"
            >
              ‹
            </button>
          )}

          <img
            src={project.gallery[lightboxIndex]}
            alt={`${project.title} screen ${lightboxIndex + 1}`}
            className="cs-lightbox-img"
            decoding="async"
            onClick={(e) => e.stopPropagation()}
          />

          {galleryLength > 1 && (
            <button
              type="button"
              className="cs-lightbox-nav cs-lightbox-next"
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              aria-label="Next image"
            >
              ›
            </button>
          )}

          <span className="cs-lightbox-count">
            {lightboxIndex + 1} / {galleryLength}
          </span>
        </div>
      )}
    </div>
  );
}

export default CaseStudyModal;
