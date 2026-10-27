function Footer() {
  return (
    <footer
      id="contact"
      className="bg-ink px-5 pb-8 pt-24 text-white md:px-8 md:pt-32"
    >
      <div className="mx-auto max-w-7xl">
        <p
          className="mb-6 text-xs uppercase tracking-[.2em] text-accent"
          data-reveal
        >
          Ready to build? Let's talk.
        </p>
        <a href="mailto:joshmad3s@gmail.com" className="footer-cta" data-reveal>
          Let's make
          <br />
          <span>something great.</span>
        </a>
        <div className="mt-20 flex flex-col gap-6 border-t border-white/15 pt-7 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>San Jose del Monte, Bulacan, Philippines</p>
          <div className="flex gap-6">
            <a
              className="footer-link"
              href="https://github.com/TungsX"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="footer-link"
              href="https://www.linkedin.com/in/joshua-mades-497552303/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a className="footer-link" href="mailto:joshmad3s@gmail.com">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
