import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const STEPS = [
"Research",
"Campaign Setup",
"Launch",
"Monitor",
"Optimize",
"Measure Results"];


export default function CaseProcess() {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs font-bold uppercase tracking-[0.18em] text-white sm:text-sm">
          
          Process
        </motion.h2>

        <div className="mt-8 flex flex-col gap-3 lg:flex-row lg:items-stretch">
          {STEPS.map((step, i) =>
          <div key={step} className="flex flex-1 flex-col items-stretch lg:flex-row">
              <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
              className="flex flex-1 items-center justify-center rounded-xl border border-border bg-card px-3 py-4 text-center">
              
                <span className="font-semibold uppercase tracking-[0.1em] text-white text-lg sm:text-lg">
                  {step}
                </span>
              </motion.div>
              {i < STEPS.length - 1 &&
            <div className="flex items-center justify-center px-0 py-1 lg:px-1">
                  <ArrowRight className="h-4 w-4 rotate-90 text-muted-foreground lg:rotate-0" />
                </div>
            }
            </div>
          )}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="mt-6 max-w-3xl leading-relaxed text-muted-foreground text-2xl">
          
          The campaigns were monitored throughout the 3-month period and
          performance was evaluated based on lead volume, cost per lead,
          qualified leads, and sales.
        </motion.p>
      </div>

      <div className="mx-auto mt-16 max-w-7xl px-5 sm:px-8 sm:mt-24">
        <div className="h-px w-full bg-border" />
      </div>
    </section>);

}