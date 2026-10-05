import { motion } from "framer-motion";

export default function CaseObjective({
  text = "The main objective was to generate qualified real-estate leads in the Florida market through paid advertising on Google Ads and Meta Ads."
}) {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs font-bold uppercase tracking-[0.18em] text-white sm:text-sm">
          
          Objective
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="mt-5 max-w-3xl leading-relaxed text-muted-foreground text-2xl sm:text-2xl">
          
          {text}
        </motion.p>
      </div>

      <div className="mx-auto mt-16 max-w-7xl px-5 sm:px-8 sm:mt-24">
        <div className="h-px w-full bg-border" />
      </div>
    </section>);

}