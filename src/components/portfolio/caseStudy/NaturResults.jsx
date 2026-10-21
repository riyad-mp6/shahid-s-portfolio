import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1];

export default function NaturResults({
  title = "Results",
  stats = [],
  image,
  imageAlt = "",
}) {
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

        {stats.length > 0 && (
          <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-3">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, ease: EASE, delay: i * 0.06 }}
                className="rounded-xl border border-border bg-card p-5 sm:p-6"
              >
                <p className="text-2xl font-bold tracking-[-0.02em] text-white sm:text-4xl">
                  {s.value}
                </p>
                <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        )}

        {image && (
          <motion.img
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: EASE }}
            src={image}
            alt={imageAlt}
            loading="lazy"
            className="mt-8 block h-auto w-full"
          />
        )}
      </div>
    </section>
  );
}