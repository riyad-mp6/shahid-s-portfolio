import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1];

const STEPS = [
  { title: "Research", note: "Audience, market, competitors" },
  { title: "Strategy", note: "Channels, budget, goals" },
  { title: "Campaign Setup", note: "Structure, tracking, creative" },
  { title: "Optimization", note: "Test, refine, scale" },
  { title: "Measure & Improve", note: "Report, learn, repeat" },
];

const R = 46;
const CIRC = 2 * Math.PI * R;

export default function Workflow() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-[44rem] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.05] blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="text-3xl font-bold uppercase tracking-[-0.02em] text-white sm:text-5xl"
        >
          My 5-Step Workflow
        </motion.h2>

        <div className="relative mt-16">
          {/* Connecting line (desktop) */}
          <motion.div
            aria-hidden
            initial={{ scaleX: reduce ? 1 : 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1.4, ease: EASE }}
            className="absolute left-[10%] right-[10%] top-[4.5rem] hidden h-px origin-left bg-gradient-to-r from-white/10 via-white/40 to-white/10 lg:block"
          />

          <ol className="relative grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-4">
            {STEPS.map((s, i) => (
              <motion.li
                key={s.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: EASE, delay: i * 0.12 }}
                className="group flex flex-row items-center gap-6 lg:flex-col lg:gap-0 lg:text-center"
              >
                {/* Circle */}
                <div className="relative h-36 w-36 shrink-0 transition-transform duration-500 group-hover:scale-105">
                  <svg viewBox="0 0 100 100" className="absolute inset-0 -rotate-90">
                    <circle
                      cx="50"
                      cy="50"
                      r={R}
                      fill="none"
                      stroke="rgba(255,255,255,0.12)"
                      strokeWidth="1"
                    />
                    <motion.circle
                      cx="50"
                      cy="50"
                      r={R}
                      fill="none"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeDasharray={CIRC}
                      initial={{ strokeDashoffset: reduce ? 0 : CIRC }}
                      whileInView={{ strokeDashoffset: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 1.3, ease: EASE, delay: 0.2 + i * 0.12 }}
                    />
                  </svg>

                  <div className="absolute inset-3 flex items-center justify-center rounded-full bg-white/[0.04] backdrop-blur-sm transition-colors duration-500 group-hover:bg-white">
                    <span className="text-4xl font-extrabold tracking-[-0.04em] text-white transition-colors duration-500 group-hover:text-black">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* Text */}
                <div className="lg:mt-6">
                  <h3 className="text-base font-bold uppercase tracking-[0.06em] text-white sm:text-lg">
                    {s.title}
                  </h3>
                  <p className="mt-2 max-w-[14rem] text-xs leading-relaxed text-muted-foreground sm:text-sm lg:mx-auto">
                    {s.note}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-7xl px-5 sm:mt-24 sm:px-8">
        <div className="h-px w-full bg-border" />
      </div>
    </section>
  );
}