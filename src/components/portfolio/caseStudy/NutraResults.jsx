import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1];

export default function NutraResults({
  title = "Results",
  stats = [],
  platformsTitle = "Platform Performance",
  platforms = [],
}) {
  if (stats.length === 0 && platforms.length === 0) return null;

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
          <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
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

        {platforms.length > 0 && (
          <>
            <motion.h3
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: EASE }}
              className="mt-14 text-[11px] font-bold uppercase tracking-[0.18em] text-white"
            >
              {platformsTitle}
            </motion.h3>

            {platforms.map((p, i) => (
              <div
                key={p.name}
                className={
                  i < platforms.length - 1
                    ? "mt-6 border-b border-border pb-10"
                    : "mt-6"
                }
              >
                <span className="text-sm font-bold uppercase tracking-[0.1em] text-white">
                  {p.name}
                </span>

                <div className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
                  {p.metrics.map((m, j) => (
                    <motion.div
                      key={m.label}
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.4, ease: EASE, delay: j * 0.05 }}
                      className="rounded-lg border border-border bg-card px-5 py-4"
                    >
                      <p className="text-xl font-bold text-white">{m.value}</p>
                      <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                        {m.label}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {p.image && (
                  <motion.img
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.7, ease: EASE }}
                    src={p.image}
                    alt={p.imageAlt || `${p.name} performance`}
                    loading="lazy"
                    className="mt-5 block h-auto w-full"
                  />
                )}
              </div>
            ))}
          </>
        )}
      </div>
    </section>
  );
}