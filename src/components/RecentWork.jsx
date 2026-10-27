import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import CaseStudyModal from "./CaseStudyModal";

const projects = [
  {
    number: "01",
    title: "Rental Management System",
    type: "B2B Full-stack Platform",
    description:
      "A secure, real-time rental operations platform spanning inventory, document storage, customer records, and automated financial reporting.",
    tags: ["Vue.js", "Supabase", "PostgreSQL", "RLS"],
    preview: "/rentayo/rentayo2.webp",
    galleryAspect: "1071 / 726",
    gallery: [1, 2, 3, 4, 5, 6, 7, 8].map((n) => `/rentayo/rentayo${n}.webp`),
    caseStudy: {
      subtitle:
        "Streamlining heavy-equipment rental operations with a secure, all-in-one management hub.",
      meta: [
        ["Role", "Full-stack Developer"],
        ["Timeline", "3 months"],
        ["Client", "B2B Equipment Rental"],
        ["Status", "In Production"],
      ],
      overview:
        "A growing equipment rental business needed to move away from spreadsheets and manual tracking. The platform had to handle inventory lifecycles, customer contracts, document storage, and financial reporting — all while maintaining strict data isolation between staff roles.",
      challenge:
        "The client relied on scattered spreadsheets and email chains to track hundreds of assets across multiple locations. There was no single source of truth for availability, maintenance schedules, or customer billing history. Security was also critical — staff members needed scoped access so they couldn't see or modify data outside their role.",
      solution:
        "I designed and built a full-stack platform using Vue.js and Supabase with PostgreSQL as the data layer. Row-Level Security policies enforce role-based access at the database level, while PL/pgSQL triggers handle automated workflows like inventory status changes and billing cycle generation.",
      features: [
        "Real-time inventory dashboard with status tracking and maintenance alerts",
        "Role-based access control using Supabase RLS policies",
        "Automated financial reporting with PL/pgSQL triggers",
        "Secure document storage for contracts and certificates",
        "Customer relationship management with rental history",
      ],
      results: [
        ["70%", "Reduction in manual data entry"],
        ["100%", "Role-based data isolation"],
        ["Real-time", "Inventory visibility"],
        ["Automated", "Monthly financial reports"],
      ],
    },
  },
  {
    number: "02",
    title: "Interactive Playable Ads",
    type: "Performance Creative",
    description:
      "High-performance mobile ad experiences built for fast deployment, responsive interaction, and continuous improvement through campaign data and A/B testing.",
    tags: ["React", "Tailwind CSS", "GSAP", "A/B Testing"],
    preview: "/previews/playable-ads.webp",
    playableDemos: [
      {
        id: "sorting-vending",
        title: "Sorting Vending Machine",
        badge: "Puzzle / Casual",
        file: "/playable-ads/Sorting_VendingMachine.html",
        description: "Organize items into proper slots within the time limit. Features drag-and-drop mechanics and custom feedback.",
      },
      {
        id: "drink-lovin",
        title: "Drink Lovin",
        badge: "Interactive Story",
        file: "/playable-ads/DrinkLovin.html",
        description: "Engaging story-driven minigame with decision branches and custom animations.",
      },
      {
        id: "spin-wheel",
        title: "Spin Wheel Minigame",
        badge: "Gamified CTA",
        file: "/playable-ads/SpinWheel.html",
        description: "Physics-inspired spin wheel designed for high user interaction and conversion.",
      },
      {
        id: "yin-yang",
        title: "Yin Yang Bottle Fill Up",
        badge: "Liquid Sort Puzzle",
        file: "/playable-ads/YinYangBottle_FillUp.html",
        description: "Color-matching liquid puzzle with fluid dynamics and multi-stage levels.",
      },
      {
        id: "binance",
        title: "Binance Crypto Ad",
        badge: "Fintech Motion",
        file: "/playable-ads/binance_mip3.html",
        description: "High-energy brand campaign with animated crypto mechanics and interactive CTA.",
      },
      {
        id: "indeed",
        title: "Indeed Job Search",
        badge: "Brand Campaign",
        file: "/playable-ads/Indeed.html",
        description: "Interactive career search simulation connecting users to opportunities with live filters.",
      },
      {
        id: "berry-path",
        title: "Berry Path Puzzle",
        badge: "Path Drawing",
        file: "/playable-ads/BerryPath.html",
        description: "Draw a single path to collect every berry while avoiding the stones. Tap-and-hold tracing with level progression.",
      },
    ],
    caseStudy: {
      subtitle:
        "Crafting interactive mobile ad experiences that drive engagement and measurable campaign performance.",
      meta: [
        ["Role", "Front-end Developer"],
        ["Timeline", "Ongoing"],
        ["Company", "HPL Game Design Corp"],
        ["Status", "Active Production"],
      ],
      overview:
        "As part of a creative team at HPL Game Design Corporation, I design and develop interactive playable ads — mini game-like experiences embedded directly into mobile ad networks. These ads need to load instantly, run smoothly across devices, and convert users into app installs.",
      challenge:
        "Playable ads live in constrained environments — strict file size limits, inconsistent WebView performance across Android and iOS, and zero tolerance for load delays. The creative team also needs same-day turnaround on new ad variants, making rapid prototyping essential. Every campaign relies on data-driven iteration through A/B testing.",
      solution:
        "I built a reusable component system in React with Tailwind CSS for rapid styling and GSAP for performant, timeline-driven animations. The architecture supports quick variant creation — swapping visuals, interactions, and CTAs without rebuilding from scratch. Each variant is instrumented for event tracking to feed A/B test analysis.",
      features: [
        "Sub-2-second load times across mobile WebViews",
        "Reusable component library for rapid ad variant creation",
        "GSAP-powered animations with frame-accurate timeline control",
        "A/B testing instrumentation for creative performance analysis",
        "Same-day turnaround workflow for campaign requests",
      ],
      results: [
        ["< 2s", "Average load time"],
        ["Same-day", "Turnaround on variants"],
        ["Data-driven", "Creative optimization"],
        ["Cross-platform", "Android & iOS support"],
      ],
    },
  },
  {
    number: "03",
    title: "Cardano Web3 Game dApp",
    type: "Web3 Game",
    description:
      "A mobile-first cup-shuffle game on Cardano, combining wallet connection, difficulty-based rounds, and in-game ADA transfers.",
    tags: ["Cardano", "Web3 Game", "Smart Contracts", "Wallet API", "React"],
    preview: "/cardano/02-main-menu.webp",
    previewPosition: "center 38%",
    galleryLayout: "portrait",
    gallery: [
      "01-loading",
      "02-main-menu",
      "03-connect-wallet",
      "06-how-to-play",
      "07-difficulty-easy",
      "13-pick-a-cup",
      "14-win",
      "22-transfer-empty",
      "23-transfer-invalid-address",
      "24-transfer-filled",
      "25-transfer-insufficient",
      "26-transfer-review",
      "27-transfer-sending",
      "28-transfer-success",
    ].map((name) => `/cardano/${name}.webp`),
    caseStudy: {
      subtitle:
        "A casual cup-shuffle game with real wallet and ADA transfer features on the Cardano blockchain.",
      meta: [
        ["Role", "Full-stack Developer"],
        ["Timeline", "2 months"],
        ["Type", "Freelance / Contract"],
        ["Status", "Delivered"],
      ],
      overview:
        "A Web3 project needed a game that felt as approachable as any casual mobile title while running real blockchain interactions underneath. Players connect a Cardano wallet, pick a difficulty, follow the shuffled cups, and can send ADA to friends — all through a responsive interface that hides blockchain complexity.",
      challenge:
        "Blending a game with a dApp means two sets of expectations: gameplay has to feel instant and fun, while wallet flows are asynchronous, vary by provider, and can't be reversed once sent. The interface needed smooth game feedback, clear onboarding for new players, and transfer screens that catch mistakes before they reach the chain.",
      solution:
        "I developed a React-based game frontend integrated with the Cardano Wallet API, supporting multiple wallet providers. The game loop covers onboarding, difficulty selection, the cup shuffle, and win states, while the transfer flow validates addresses and balances, shows a fee-inclusive review step, and tracks each transaction from sending to success. Smart contract interactions are wrapped in a service layer that handles serialization and validation before submission.",
      features: [
        "Cup-shuffle gameplay with difficulty levels, how-to-play onboarding, and win states",
        "Multi-provider wallet connection (Lace, VESPR)",
        "ADA transfer flow with address and balance validation plus a fee-inclusive review",
        "Token transfer interface with real-time balance updates",
        "Transaction status tracking with confirmation feedback",
        "Responsive design optimized for desktop and mobile",
      ],
      results: [
        ["2", "Wallet providers supported"],
        ["Secure", "On-chain interactions"],
        ["Real-time", "Transaction tracking"],
        ["Responsive", "Cross-device interface"],
      ],
    },
  },
  {
    number: "04",
    title: "Sales & Distribution Desktop ERP",
    type: "Desktop Business App",
    description:
      "A C# desktop system for sales and distribution teams, covering order entry and billing, receivables, purchasing, inventory, and executive reporting.",
    tags: ["C#", "Visual Studio", "Desktop GUI", "Figma"],
    preview: "/upme/Desktop - 4.webp",
    galleryAspect: "1440 / 774",
    gallery: [5, 4, 8, 9, 10, 11, 12, 13, 14, 16, 23, 39, 44, 86].map(
      (n) => `/upme/Desktop - ${n}.webp`,
    ),
    caseStudy: {
      subtitle:
        "Building the frontend and GUI of a desktop ERP that keeps sales, billing, and inventory work in one place.",
      meta: [
        ["Role", "Frontend & GUI Developer (Intern)"],
        ["Timeline", "6 months"],
        ["Company", "UPmeWorks"],
        ["Status", "Completed"],
      ],
      overview:
        "During my internship at UPmeWorks, I worked on the desktop client of a sales and distribution ERP used by back-office staff. The app brings an executive dashboard together with modules for order entry and billing, service management, accounts receivable and payable, inventory control, purchasing, reports, and masterfile setup.",
      challenge:
        "ERP users spend the whole day in data-heavy screens, so every form, table, and dialog has to stay clear and consistent across dozens of workflows. Customer profiles alone span billing details, delivery addresses, credit limits and terms, tax information, and price lists, and the purchasing flow runs from purchase requests through approvals to PO closeout. The GUI needed to make all of this fast to navigate for non-technical staff.",
      solution:
        "I designed the screens in Figma, then built the frontend and GUI in C# with Visual Studio. A persistent sidebar gives one-click access to every module, each module opens on a tile hub of its workflows, and records are managed in searchable master tables that launch detailed entry dialogs. Shared layouts for forms, tabs, and tables keep the whole system consistent and make new screens quicker to build.",
      features: [
        "Executive dashboard with order, sales, receivable, and payable metrics plus sales charts",
        "Module hubs for Accounts Receivable, Purchasing, Masterfiles, and more",
        "Searchable customer master table with add, view, and delete actions",
        "Tabbed customer profile form covering billing, delivery, credit terms, and price lists",
        "Purchasing workflow from purchase request and approval to PO entry and closeout",
      ],
      results: [
        ["9", "Core modules in one app"],
        ["Figma → C#", "Design-to-desktop workflow"],
        ["Consistent", "Forms, tables, and dialogs"],
        ["6 months", "Internship delivery"],
      ],
    },
  },
  {
    number: "05",
    title: "Campaign Landing Pages",
    type: "Frontend & Brand",
    description:
      "Conversion-minded landing experiences for creative portfolios and cryptocurrency campaigns, balancing visual character with trust and clarity.",
    tags: ["Responsive UI", "Branding", "Motion", "Figma"],
    preview: "/samples/Screenshot_27-10-2026_84716_www.devwithopiu.site.webp",
    liveUrl: "https://www.devwithopiu.site/",
    galleryAspect: "2 / 1",
    gallery: ["84716", "84734", "84751", "84817", "84839", "84857", "84910"].map(
      (id) => `/samples/Screenshot_27-10-2026_${id}_www.devwithopiu.site.webp`,
    ),
    caseStudy: {
      subtitle:
        "Designing and developing conversion-focused landing pages that balance bold visuals with user trust.",
      meta: [
        ["Role", "Frontend Developer"],
        ["Timeline", "Ongoing"],
        ["Type", "Freelance / Contract"],
        ["Status", "Multiple Delivered"],
      ],
      overview:
        "Multiple clients needed high-impact landing pages for creative portfolios and cryptocurrency campaigns. Each project required a unique visual identity while following conversion best practices — clear value propositions, trust signals, and strong calls to action.",
      challenge:
        "Crypto and creative campaigns demand bold, eye-catching design that can also establish trust with skeptical audiences. Pages need to load fast, look sharp on every device, and guide visitors toward a specific action — whether it's signing up, connecting a wallet, or exploring a portfolio.",
      solution:
        "I designed each landing page in Figma first, then built them with responsive-first HTML/CSS and subtle motion effects. The pages use modern techniques like glassmorphism, gradient overlays, and scroll-triggered animations to create visual depth. Every design decision is grounded in conversion principles — above-the-fold CTAs, social proof sections, and logical content hierarchy.",
      features: [
        "Figma-to-code workflow with pixel-perfect implementation",
        "Scroll-triggered animations and micro-interactions",
        "Mobile-first responsive layouts",
        "Trust-building sections: testimonials, stats, partner logos",
        "Performance-optimized with fast load times",
      ],
      results: [
        ["Multiple", "Campaigns delivered"],
        ["Mobile-first", "Responsive design"],
        ["Conversion", "Optimized layouts"],
        ["Brand-aligned", "Visual identity"],
      ],
    },
  },
];

function RecentWork() {
  const section = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!matchMedia("(prefers-reduced-motion: reduce)").matches)
        gsap.utils
          .toArray(".work-row")
          .forEach((row) =>
            gsap.from(row, {
              y: 40,
              opacity: 0,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: { trigger: row, start: "top 88%" },
            }),
          );
    }, section);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <section ref={section} id="work" className="section bg-paper text-white">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="section-label" data-reveal>
            <span>03</span> Selected work
          </div>
          <div className="mb-16 grid items-end gap-8 md:grid-cols-2">
            <h2 className="display-title" data-reveal>
              Projects with
              <br />
              <em>real purpose.</em>
            </h2>
            <p
              className="max-w-lg text-base leading-7 text-white/60 md:justify-self-end"
              data-reveal
            >
              A selection of product work across business systems, interactive
              advertising, Web3, and branded frontends.
            </p>
          </div>

          <div className="work-list">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className={`work-row ${hoveredIndex === index ? "is-active" : ""}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setActiveProject(project)}
              >
                {/* Background preview image */}
                <div className="work-row-bg">
                  <img
                    src={project.preview}
                    style={{ objectPosition: project.previewPosition }}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                  />
                </div>
                <div className="work-row-overlay" />

                {/* Row content */}
                <div className="work-row-inner">
                  <span className="work-row-number">{project.number}</span>

                  <div className="work-row-info">
                    <h3 className="work-row-title">{project.title}</h3>
                    <div className="work-row-tags">
                      {project.tags.map((tag, i) => (
                        <span key={tag}>
                          {tag}
                          {i < project.tags.length - 1 && (
                            <span className="work-row-dot"> · </span>
                          )}
                        </span>
                      ))}
                      {project.playableDemos && (
                        <span className="work-row-playable-badge">
                          🎮 7 Playable Games
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="work-row-desc">{project.description}</p>

                  <span className="work-row-arrow" aria-hidden="true" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {activeProject && (
        <CaseStudyModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </>
  );
}

export default RecentWork;
