import { motion } from "framer-motion";

const INDUSTRIES = ["Real Estate", "E-commerce", "SaaS", "Home Services"];

export default function QuickResults() {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Stat */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <h2 className="text-6xl font-extrabold tracking-[-0.03em] text-white sm:text-7xl lg:text-8xl">
              2+ Years
            </h2>
            <p className="mt-3 text-sm uppercase tracking-[0.16em] text-muted-foreground">
              Marketing Experience
            </p>
          </motion.div>

          {/* Industry tags */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="flex flex-col justify-end"
          >
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-white">
              Industry Experience
            </h3>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {INDUSTRIES.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/20 bg-white/[0.02] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-7xl px-5 sm:px-8 sm:mt-24">
        <div className="h-px w-full bg-border" />
      </div>
    </section>
  );
}