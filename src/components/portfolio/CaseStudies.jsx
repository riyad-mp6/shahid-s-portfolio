import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const CASES = [
{ n: "01", title: "Real Estate Lead Engine", category: "Real Estate" },
{ n: "02", title: "Property Funnel System", category: "Real Estate" },
{ n: "03", title: "D2C Store Scale-Up", category: "E-commerce" },
{ n: "04", title: "Meta Ads ROAS Lift", category: "E-commerce" },
{ n: "05", title: "Shopping Feed Optimization", category: "E-commerce" },
{ n: "06", title: "B2B SaaS Pipeline Build", category: "SaaS" },
{ n: "07", title: "Local Service Lead Flow", category: "Home Services" }];


export default function CaseStudies() {
  return (
    <section id="case-studies" className="relative py-16 sm:py-24">
      {/* Floating blurred semicircle parallax flare */}
      <div
        className="pointer-events-none absolute right-0 top-1/4 h-[28rem] w-[14rem] rounded-l-full bg-white/10 blur-3xl"
        aria-hidden />
      

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl font-bold uppercase tracking-[-0.02em] text-white sm:text-5xl">
            
            Case Studies
          </motion.h2>
          


          
        </div>

        <div className="mt-10 flex flex-col divide-y divide-border border-y border-border">
          {CASES.map((c, i) =>
          <motion.a
            key={c.n}
            href={c.n === "01" ? "/case-study/01" : c.n === "02" ? "/case-study/02" : "#case-studies"}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.05 }}
            className="group relative flex items-center gap-5 py-6 transition-colors duration-300 hover:bg-white/[0.02] sm:gap-8 sm:py-8">
            
              {/* Number */}
              <span className="w-10 shrink-0 font-mono text-xs text-muted-foreground transition-colors duration-300 group-hover:text-white sm:w-12 sm:text-sm">
                {c.n}
              </span>

              {/* Title */}
              <span className="flex-1 font-semibold text-muted-foreground transition-colors duration-300 group-hover:text-white text-sm sm:text-sm lg:text-sm">
                {c.category}
              </span>

              <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.a>
          )}
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-7xl px-5 sm:px-8 sm:mt-24">
        <div className="h-px w-full bg-border" />
      </div>
    </section>);

}