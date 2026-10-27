import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
const links = [
  ["About", "#about"],
  ["Experience", "#experience"],
  ["Work", "#work"],
  ["Contact", "#contact"],
];
function Navbar() {
  const navRef = useRef(null);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, delay: 0.25 },
    );
  }, []);
  return (
    <header ref={navRef} className="fixed left-0 right-0 top-0 z-50 px-4 pt-4">
      <nav className="nav-glass mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
        <a
          href="#home"
          className="flex items-center gap-3"
          aria-label="Joshua Mades, home"
        >
          <span className="grid h-9 w-9 place-items-center rounded-full bg-accent text-sm font-bold text-navy">
            JM
          </span>
          <span className="text-sm font-semibold tracking-tight text-white">
            Joshua Mades
          </span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map(([label, href]) => (
            <a key={label} href={href} className="nav-link">
              {label}
            </a>
          ))}
        </div>
        <button
          className={`menu-toggle md:hidden ${open ? "is-open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
      {open && (
        <div className="mobile-menu mx-auto mt-2 flex max-w-7xl flex-col p-2 md:hidden">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="mobile-menu-link"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
export default Navbar;
