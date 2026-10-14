import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1];

export default function HapeProcess({ title = "Process", steps = [], text }) {
  if (steps.length === 0) return null;

  return (
    <section className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-xs font-bold uppercase tracking-[0.18em] text-white sm:text-sm"
        >
          {title}
        </motion.h2>

        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => (
            <motion.li
              key={step.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: EASE, delay: i * 0.06 }}
              className="rounded-xl border border-border bg-card p-6"
            >
              <span className="font-mono text-xs text-white">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-base font-semibold uppercase tracking-[0.08em] text-white">
                {step.title}
              </h3>
              {step.text && (
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.text}
                </p>
              )}
            </motion.li>
          ))}
        </ol>

        {text && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
            className="mt-8 max-w-3xl text-xl leading-relaxed text-muted-foreground sm:text-2xl"
          >
            {text}
          </motion.p>
        )}
      </div>
    </section>
  );
}