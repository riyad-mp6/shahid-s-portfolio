import { motion } from "framer-motion";

export default function CaseConclusion({
  title = "Conclusion",
  children,
}) {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="text-xs font-bold uppercase tracking-[0.18em] text-white sm:text-sm"
        >
          {title}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.6,
            delay: 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-5 max-w-3xl text-sm leading-7 text-neutral-400 sm:text-base"
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}