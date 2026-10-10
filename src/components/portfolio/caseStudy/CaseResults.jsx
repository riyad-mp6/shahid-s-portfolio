import { motion } from "framer-motion";
import { Image } from "@/components/ui/image";

const EASE = [0.16, 1, 0.3, 1];

export default function CaseResults({
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
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, ease: EASE, delay: i * 0.06 }}
                className="rounded-xl border border-border bg-card p-5"
              >
                <p className="text-2xl font-bold tracking-[-0.02em] text-white sm:text-3xl">
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
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="text-sm font-bold uppercase tracking-[0.1em] text-white">
                    {p.name}
                  </span>
                  {p.summary && (
                    <span className="text-sm text-muted-foreground">— {p.summary}</span>
                  )}
                </div>

                {p.image && (
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.7, ease: EASE }}
                    className="mt-5 aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/15 bg-card"
                  >
                    <Image
                      src={p.image}
                      alt={p.imageAlt || `${p.name} performance`}
                      fittingType="fit"
                      className="h-full w-full"
                    />
                  </motion.div>
                )}
              </div>
            ))}
          </>
        )}
      </div>
    </section>
  );
}