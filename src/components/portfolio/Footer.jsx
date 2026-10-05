import { ArrowUp } from "lucide-react";
import { scrollToTop } from "@/lib/scroll";

export default function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-10 py-12 sm:flex-row sm:items-end">
          <div>
            <p className="font-extrabold tracking-[-0.04em] text-white lg:leading-[0.85] text-xl sm:text-xl lg:text-xl">
              © 2026
            </p>
            <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Shahidul — Digital &amp; Performance Marketer
            </p>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="group inline-flex h-14 w-14 flex-col items-center justify-center gap-0.5 rounded-full border border-white/25 text-white transition-colors duration-300 hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black">
            
            <ArrowUp className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
            <span className="text-[9px] font-bold uppercase tracking-[0.16em]">
              Up
            </span>
          </button>
        </div>
      </div>
    </footer>);

}