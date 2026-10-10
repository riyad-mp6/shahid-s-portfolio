import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1];

const reveal = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

export default function CaseObjective({ title = "Objective", text }) {
  if (!text) return null;

  return (
    <section className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.h2
          {...reveal}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-xs font-bold uppercase tracking-[0.18em] text-white sm:text-sm"
        >
          {title}
        </motion.h2>

        <motion.p
          {...reveal}
          transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
          className="mt-5 max-w-3xl text-2xl leading-relaxed text-muted-foreground"
        >
          {text}
        </motion.p>
      </div>

      <div className="mx-auto mt-16 max-w-7xl px-5 sm:mt-24 sm:px-8">
        <div className="h-px w-full bg-border" />
      </div>
    </section>
  );
}