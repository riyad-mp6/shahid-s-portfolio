import { motion } from "framer-motion";

const ITEMS = [
"Paid campaign management",
"Lead generation",
"Campaign optimization",
"Performance monitoring",
"Cost-per-lead analysis"];


export default function CaseWhatWeDid() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      {/* Floating blurred semicircle from far right margin */}
      <div
        className="pointer-events-none absolute right-0 top-1/3 h-[24rem] w-[12rem] rounded-l-full bg-white/10 blur-3xl"
        aria-hidden />
      

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs font-bold uppercase tracking-[0.18em] text-white sm:text-sm">
          
          What We Did
        </motion.h2>

        <ol className="mt-6 max-w-3xl">
          {ITEMS.map((item, i) =>
          <motion.li
            key={item}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.05 }}
            className="flex items-baseline gap-4 border-b border-border py-4 text-sm text-muted-foreground sm:text-base">
            
              <span className="w-6 shrink-0 font-mono text-xs text-white">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-xl">{item}</span>
            </motion.li>
          )}
        </ol>
      </div>

      <div className="mx-auto mt-16 max-w-7xl px-5 sm:px-8 sm:mt-24">
        <div className="h-px w-full bg-border" />
      </div>
    </section>);

}