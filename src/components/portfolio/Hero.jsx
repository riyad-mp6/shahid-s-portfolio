import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";

/* Save your collage as: public/image/profile/collage.png */
const COLLAGE = "/image/profile/collage.png";

/* col / row pick the quarter of the collage: 0 = left / top, 1 = right / bottom */
const PHOTOS = [
  { id: "kurta", label: "Shahidul in a red kurta", col: 0, row: 0 },
  { id: "sunset", label: "Shahidul at sunset by the sea", col: 1, row: 0 },
  { id: "park", label: "Shahidul standing in a park", col: 0, row: 1 },
  { id: "selfie", label: "Shahidul mirror selfie", col: 1, row: 1 },
];

/* Collage geometry (measured from your 1333 x 1999 image) */
const QUAD_W = 660;
const QUAD_H = 990;
const COL_START = [0, 673];
const ROW_START = [0, 1005];
const FULL_W = 1333;

const ease = [0.16, 1, 0.3, 1];

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

/* Shows exactly one quarter of the collage inside a 2:3 card */
function Quarter({ col, row, alt }) {
  return (
    <img
      src={COLLAGE}
      alt={alt}
      draggable={false}
      className="pointer-events-none absolute max-w-none select-none"
      style={{
        width: `${(FULL_W / QUAD_W) * 100}%`,
        left: `${-(COL_START[col] / QUAD_W) * 100}%`,
        top: `${-(ROW_START[row] / QUAD_H) * 100}%`,
      }}
    />
  );
}

export default function Hero() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();

  const rise = (i = 0) => ({
    initial: { opacity: 0, y: reduce ? 0 : 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay: i * 0.12, ease },
  });

  return (
    <section className="relative overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-24">
      {/* Soft light behind the strip */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[55%] h-[28rem] w-[60rem] max-w-full -translate-x-1/2 rounded-full bg-white/[0.04] blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* ---------- Top: intro on the left, buttons on the far right ---------- */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          {/* Left: intro */}
          <div className="min-w-0 flex-1">
            <motion.h1
              {...rise(0)}
              className="text-4xl font-bold uppercase leading-none tracking-[-0.03em] text-white sm:text-6xl lg:whitespace-nowrap lg:text-[4.5rem] xl:text-[5.5rem]"
            >
              Hi, I’m Shahidul
            </motion.h1>

            <motion.p
              {...rise(1)}
              className="mt-3 text-base font-semibold uppercase tracking-[0.18em] text-white/80 sm:text-lg"
            >
              Digital &amp; Performance Marketer
            </motion.p>

            <motion.p
              {...rise(2)}
              className="mt-6 max-w-2xl text-[15px] leading-relaxed text-muted-foreground sm:text-base"
            >
              specializing in paid search, paid social, and conversion optimization. 7 projects across 4 industries, with $1M+ in tracked and estimated revenue impact.
            </motion.p>
          </div>

          {/* Right: buttons */}
          <motion.div
            {...rise(3)}
            className="flex shrink-0 flex-col gap-3 sm:flex-row sm:gap-4"
          >
            <button
              onClick={() => scrollToId("case-studies")}
              className="group inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-xs font-bold uppercase tracking-[0.12em] text-black transition-transform duration-300 hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              View My Work
              <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </button>

            <a
              href="/cv-shahidul.pdf"
              download
              className="group inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Download CV
              <Download className="h-4 w-4" />
            </a>
          </motion.div>
        </div>

        {/* ---------- Portrait strip ---------- */}
        <div
          className="-mx-5 mt-12 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:-mx-8 sm:px-8 lg:mx-0 lg:mt-16 lg:grid lg:grid-cols-4 lg:gap-5 lg:overflow-visible lg:px-0 lg:pb-14 [&::-webkit-scrollbar]:hidden"
          onMouseLeave={() => setActive(0)}
        >
          {PHOTOS.map((photo, i) => {
            const isActive = i === active;
            return (
              <motion.button
                key={photo.id}
                type="button"
                aria-pressed={isActive}
                aria-label={photo.label}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                initial={{ opacity: 0, y: reduce ? 0 : 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.5 + i * 0.12, ease }}
                className={[
                  "relative aspect-[2/3] w-[62%] flex-none snap-center overflow-hidden rounded-[1.75rem] bg-neutral-900 sm:w-[44%] lg:w-auto",
                  "ring-1 transition-[box-shadow,transform] duration-700",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white",
                  i % 2 === 1 ? "lg:mt-14" : "",
                  isActive ? "ring-white/60" : "ring-white/15",
                ].join(" ")}
              >
                <div
                  className={[
                    "absolute inset-0 transition-[filter,transform] duration-700 ease-out",
                    isActive ? "scale-[1.06] grayscale-0" : "scale-[1.02] grayscale",
                  ].join(" ")}
                >
                  <Quarter col={photo.col} row={photo.row} alt={photo.label} />
                </div>

                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent"
                />
              </motion.button>
            );
          })}
        </div>

        {/* ---------- Story under the photos ---------- */}
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease }}
          className="mt-16 max-w-3xl sm:mt-20"
        >
          <h2 className="text-3xl font-bold uppercase leading-[0.98] tracking-[-0.02em] text-white sm:text-4xl lg:text-5xl">
            A College Dropout.
          </h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground sm:text-base">
            <p>
              Yes, I dropped out of college in 2025, but I never stopped
              learning. I educate myself by reading books and studying how big
              businesses grow.
            </p>
            <p>
              I believe companies need people who are genuinely dedicated to
              growing their business, more than they need a degree holder. What
              the real world teaches can’t be learned in any classroom.
            </p>
          </div>
        </motion.div>
      </div>

      <Divider />
    </section>
  );
}

function Divider() {
  return (
    <div className="relative mx-auto mt-16 max-w-7xl px-5 sm:mt-24 sm:px-8">
      <div className="h-px w-full bg-border" />
    </div>
  );
}