import { motion } from "framer-motion";
import { Megaphone, Target, Search, BarChart3 } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1];

const SERVICES = [
  {
    title: "Paid Advertising",
    icon: Megaphone,
    sub: "Google Ads · Meta Ads · Campaign Management",
  },
  {
    title: "Customer Acquisition",
    icon: Target,
    sub: "Lead Generation · Sales Funnels · Conversion Optimization",
  },
  {
    title: "Organic Growth",
    icon: Search,
    sub: "SEO · Content Marketing",
  },
  {
    title: "Analytics & Strategy",
    icon: BarChart3,
    sub: "Analytics · Reporting · Market Research",
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
          transition={{ duration: 0.7, ease: EASE }}
          className="text-3xl font-bold uppercase tracking-[-0.02em] text-white sm:text-5xl"
        >
          What I Do
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: EASE, delay: i * 0.07 }}
                className="group rounded-xl border border-white/10 bg-white/[0.02] p-5 transition-colors duration-300 hover:border-white/25 hover:bg-white/[0.04]"
              >
                <Icon
                  className="h-5 w-5 text-white/50 transition-colors duration-300 group-hover:text-white"
                  strokeWidth={1.5}
                />
                <h3 className="mt-5 text-sm font-semibold text-white">
                  {s.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {s.sub}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-7xl px-5 sm:mt-24 sm:px-8">
        <div className="h-px w-full bg-border" />
      </div>
    </section>
  );
}