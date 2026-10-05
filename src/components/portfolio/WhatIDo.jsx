import { motion } from "framer-motion";

const SERVICES = [
  {
    title: "Paid Advertising",
    sub: "Google Ads · Meta Ads · Campaign Management",
  },
  {
    title: "Customer Acquisition",
    sub: "Lead Generation · Sales Funnels · Conversion Optimization",
  },
  {
    title: "Organic Growth",
    sub: "SEO · GEO · Content Marketing",
  },
  {
    title: "Analytics & Strategy",
    sub: "Analytics · Performance Reporting · Market Research",
  },
];

export default function WhatIDo() {
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
          What I Do
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
              className="group bg-background p-7 transition-colors duration-300 hover:bg-white/[0.03] sm:p-8"
            >
              <span className="font-mono text-xs text-muted-foreground">
                0{i + 1}
              </span>
              <h3 className="mt-6 text-sm font-bold uppercase tracking-[0.08em] text-white">
                {s.title}
              </h3>
              <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground">
                {s.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-7xl px-5 sm:px-8 sm:mt-24">
        <div className="h-px w-full bg-border" />
      </div>
    </section>
  );
}