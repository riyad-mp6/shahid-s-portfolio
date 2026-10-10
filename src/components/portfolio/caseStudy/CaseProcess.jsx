import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1];

export default function CaseProcess({ title = "Process", steps = [], text }) {
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

        <ol className="mt-8 flex flex-col gap-3 lg:flex-row lg:items-stretch">
          {steps.map((step, i) => (
            <li key={step} className="flex flex-1 flex-col items-stretch lg:flex-row">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, ease: EASE, delay: i * 0.08 }}
                className="flex flex-1 items-center justify-center rounded-xl border border-border bg-card px-3 py-4 text-center"
              >
                <span className="text-lg font-semibold uppercase tracking-[0.1em] text-white">
                  {step}
                </span>
              </motion.div>

              {i < steps.length - 1 && (
                <div
                  className="flex items-center justify-center px-0 py-1 lg:px-1"
                  aria-hidden
                >
                  <ArrowRight className="h-4 w-4 rotate-90 text-muted-foreground lg:rotate-0" />
                </div>
              )}
            </li>
          ))}
        </ol>

        {text && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
            className="mt-6 max-w-3xl text-2xl leading-relaxed