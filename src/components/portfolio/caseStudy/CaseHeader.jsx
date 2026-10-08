import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function CaseHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-5">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="group text-left leading-[0.95] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded"
          >
            <span className="block text-[13px] font-bold tracking-[0.18em] text-white">
              SHAHIDUL
            </span>
            <span className="block tracking-[0.18em] text-white text-xs font-normal [font-family:'Architects_Daughter',_system-ui]">
              portfolio
            </span>
          </Link>

          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Home
          </Link>
        </div>
      </div>
    </header>
  );
}