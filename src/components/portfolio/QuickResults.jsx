import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

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
  "Mobile Apps",
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
          className="mt-8 flex flex-wrap items-center gap-2.5"
        >
          <span className="mr-2 text-[11px] font-bold uppercase tracking-[0.16em] text-white">
            Industries
          </span>
          {INDUSTRIES.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/20 bg-white/[0.02] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white hover:text-black"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>

      <div className="mx-auto mt-16 max-w-7xl px-5 sm:mt-24 sm:px-8">
        <div className="h-px w-full bg-border" />
      </div>
    </section>
  );
}