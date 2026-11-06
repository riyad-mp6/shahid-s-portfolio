import { useEffect, useState } from "react";
import { scrollToId } from "@/lib/scroll";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [inContact, setInContact] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const section = document.getElementById("contact");
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInContact(entry.isIntersecting),
      { threshold: 0.35 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-black/60 py-3 backdrop-blur-md"
          : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group rounded text-left leading-[0.95] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            <span className="block text-[13px] font-bold tracking-[0.18em] text-white">
              SHAHIDUL
            </span>
            <span className="block text-xs font-normal tracking-[0.18em] text-white [font-family:'Architects_Daughter',_system-ui]">
              portfolio
            </span>
          </button>

          <button
            onClick={() => scrollToId("contact")}
            aria-hidden={inContact}
            tabIndex={inContact ? -1 : 0}
            className={`rounded-full border border-white/30 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
              inContact
                ? "pointer-events-none translate-y-1 opacity-0"
                : "translate-y-0 opacity-100"
            }`}
          >
            Contact Me
          </button>
        </div>
      </div>
    </header>
  );
}