import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const STEPS = [
  "Research",
  "Strategy",
  "Campaign Setup",
  "Optimization",
  "Measure & Improve",
];

export default function Workflow() {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl font-bold uppercase tracking-[-0.02em] text-white sm:text-5xl"
        >
          My 5-Step Workflow
        </motion.h2>

        <div className="mt-10 flex flex-col gap-4 lg:flex-row lg:items-stretch">
          {STEPS.map((step, i) => (
            <div key={step} className="flex flex-1 flex-col items-stretch lg:flex-row">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
                className="relative flex flex-1 flex-col justify-between rounded-2xl border border-border bg-card p-6"
              >
                <span className="font-mono text-xs text-muted-foreground">
                  Step 0{i + 1}
                </span>
                <h3 className="mt-8 text-base font-bold uppercase tracking-[0.04em] text-white sm:text-lg">
                  {step}
                </h3>
                <div className="mt-6 h-1 w-full overflow-hidden rounded-full bg-border">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 + i * 0.1 }}
                    className="h-full bg-white"
                  />
                </div>
              </motion.div>

              {i < STEPS.length - 1 && (
                <div className="flex items-center justify-center px-0 py-2 lg:px-1">
                  <ArrowRight className="h-5 w-5 rotate-90 text-muted-foreground lg:rotate-0" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-7xl px-5 sm:px-8 sm:mt-24">
        <div className="h-px w-full bg-border" />
      </div>
    </section>
  );
}