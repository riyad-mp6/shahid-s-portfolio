import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1];

const STATS = [
  { to: 2.5, decimals: 1, suffix: "+", label: "Years Experience" },
  { to: 7, decimals: 0, suffix: "", label: "Client Projects" },
  { to: 4.67, decimals: 2, suffix: "×", label: "Peak ROAS" },
  { to: 1, decimals: 0, prefix: "$", suffix: "M+", label: "Revenue Impact" },
];

const INDUSTRIES = [
  "Real Estate",
  "E-commerce",
  "SAAS",
  "Home Services",
];

function CountUp({ to, decimals = 0, prefix = "", suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(reduce ? to : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    let raf;
    const start = performance.now();
    const duration = 1600;
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(to * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduce, to]);

  return (
    <span ref={ref}>
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export default function QuickResults() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-[40rem] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.05] blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-xs font-bold uppercase tracking-[0.18em] text-white sm:text-sm"
        >
          Quick Results
        </motion.p>

        <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: EASE, delay: i * 0.08 }}
              className="group relative bg-background p-6 transition-colors duration-500 hover:bg-white/[0.04] sm:p-8"
            >
              <p className="text-4xl font-extrabold tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
                <CountUp {...s} />
              </p>
              <span className="mt-4 block h-px w-8 bg-white/40 transition-all duration-500 group-hover:w-16 group-hover:bg-white" />
              <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
          className="mt-14"
        >
          {/* Hub */}
          <div className="flex justify-center">
            <span className="rounded-full bg-white px-6 py-2.5 text-[11px] font-bold uppercase tracking-[0.18em] text-black shadow-[0_0_40px_rgba(255,255,255,0.15)]">
              Industries
            </span>
          </div>

          {/* Mobile: single vertical connector */}
          <div className="mx-auto h-8 w-px bg-gradient-to-b from-white/60 to-white/10 md:hidden" />

          {/* Desktop: four curved lines from the hub */}
          <svg
            aria-hidden
            viewBox="0 0 100 20"
            preserveAspectRatio="none"
            className="hidden h-16 w-full md:block"
          >
            {[12.5, 37.5, 62.5, 87.5].map((x, i) => (
              <motion.path
                key={x}
                d={`M50 0 C50 12, ${x} 8, ${x} 20`}
                fill="none"
                stroke="rgba(255,255,255,0.45)"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: EASE, delay: 0.3 + i * 0.12 }}
              />
            ))}
          </svg>

          {/* Industries */}
          <div className="grid grid-cols-2 md:grid-cols-4">
            {INDUSTRIES.map((tag, i) => (
              <motion.div
                key={tag}
                initial={{ opacity: 0, y: -8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: EASE, delay: 0.6 + i * 0.12 }}
                className="flex flex-col items-center px-1.5 pt-3 md:pt-0"
              >
                <ArrowDown className="-mt-1.5 mb-1.5 hidden h-4 w-4 text-white/70 md:block" />
                <span className="w-full rounded-full border border-white/20 bg-white/[0.03] px-3 py-2 text-center text-[11px] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white hover:text-black">
                  {tag}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="mx-auto mt-16 max-w-7xl px-5 sm:px-8 sm:mt-24">
        <div className="h-px w-full bg-border" />
      </div>
    </section>
  );
}