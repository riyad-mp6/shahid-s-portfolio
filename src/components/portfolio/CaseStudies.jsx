import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1];

const CASES = [
  { n: "01", client: "Align", industry: "Real Estate", value: "282", label: "Leads generated", live: true },
  { n: "02", client: "TrueStory", industry: "Real Estate", value: "310", label: "Leads generated", live: true },
  { n: "03", client: "Hape Holding", industry: "E-commerce", value: "4.67×", label: "Google Ads ROAS", live: true },
  { n: "04", client: "Hikoco", industry: "E-commerce", value: "7,000", label: "Store purchases", live: true },
  { n: "05", client: "Naturbummler", industry: "E-commerce", value: "€250K", label: "Ordered sales", live: true },
  { n: "06", client: "Nutracheck", industry: "Mobile App", value: "50K+", label: "App installs", live: true },
  { n: "07", client: "Action Roofing", industry: "Home Services", value: "756", label: "Leads generated", live: true },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="relative overflow-hidden py-16 sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/4 h-[28rem] w-[14rem] rounded-l-full bg-white/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="text-3xl font-bold uppercase tracking-[-0.02em] text-white sm:text-5xl"
        >
          Projects
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CASES.map((c, i) => (
            <motion.a
              key={c.n}
              href={c.live ? `/case-study/${c.n}` : "#case-studies"}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: EASE, delay: (i % 3) * 0.08 }}
              className="group relative flex min-h-[15rem] flex-col justify-between overflow-hidden rounded-2xl border border-white/15 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              {/* Corner glow */}
              <span
                aria-hidden
                className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
              />

              <div className="relative flex items-start justify-between">
                <span className="font-mono text-xs text-muted-foreground">{c.n}</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-white transition-all duration-300 group-hover:bg-white group-hover:text-black">
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </div>

              <div className="relative">
                <p className="text-5xl font-extrabold tracking-[-0.03em] text-white">
                  {c.value}
                </p>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  {c.label}
                </p>

                <div className="mt-5 flex items-center justify-between gap-3 border-t border-white/10 pt-4">
                  <span className="text-base font-bold uppercase tracking-[-0.01em] text-white">
                    {c.client}
                  </span>
                  <span className="shrink-0 rounded-full border border-white/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/70">
                    {c.industry}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-7xl px-5 sm:mt-24 sm:px-8">
        <div className="h-px w-full bg-border" />
      </div>
    </section>
  );
}