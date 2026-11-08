import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Save your collage as: public/image/profile/collage.png             */
/*  Each card below shows one quarter of that single file.             */
/* ------------------------------------------------------------------ */
const COLLAGE = "/image/profile/collage.png";

/*
  col / row pick the quarter of the collage: 0 = left / top, 1 = right / bottom.
  Reorder, remove or edit these to change what the strip shows.
*/
const PHOTOS = [
  { id: "kurta", label: "Shahidul in a red kurta", col: 0, row: 0 },
  { id: "sunset", label: "Shahidul at sunset by the sea", col: 1, row: 0 },
  { id: "park", label: "Shahidul standing in a park", col: 0, row: 1 },
  { id: "selfie", label: "Shahidul mirror selfie", col: 1, row: 1 },
];

/* Collage geometry (measured from your 1333 x 1999 image) */
const QUAD_W = 660; // width of one photo
const QUAD_H = 990; // height of one photo
const COL_START = [0, 673]; // x where each column begins
const ROW_START = [0, 1005]; // y where each row begins
const FULL_W = 1333;

const SKILLS = ["Paid Ads", "SEO / GEO", "Sales Funnels", "Content", "Analytics"];

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
    <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
      {/* Soft light behind the strip */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[55%] h-[28rem] w-[60rem] max-w-full -translate-x-1/2 rounded-full bg-white/[0.04] blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* ---------- Top: name on the left, intro on the right ---------- */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.25fr_1fr] lg:items-end lg:gap-14">
          <motion.h1 {...rise(0)} className="text-white">
            <span className="block text-base font-medium text-white/60 sm:text-lg">
              Hi, I’m
            </span>
            <span className="mt-2 block text-6xl font-bold uppercase leading-[0.92] tracking-[-0.04em] sm:text-8xl lg:text-[7.5rem]">
              Shahidul
            </span>
            <span className="mt-5 block text-lg font-medium tracking-normal text-white/90 sm:text-xl">
              Digital &amp; Performance Marketer
            </span>
          </motion.h1>

          <div>
            <motion.p
              {...rise(1)}
              className="max-w-md text-[15px] leading-relaxed text-muted-foreground sm:text-base"
            >
              I help businesses generate leads, sales, and measurable growth
              through paid advertising, SEO/GEO, sales funnels, content, and
              marketing analytics.
            </motion.p>

            <motion.ul {...rise(2)} className="mt-5 flex max-w-md flex-wrap gap-2">
              {SKILLS.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-white/15 bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium text-white/70 backdrop-blur-sm"
                >
                  {skill}
                </li>
              ))}
            </motion.ul>

            <motion.div
              {...rise(3)}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4"
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
        </div>

        {/* ---------- Portrait strip ---------- */}
        {/* Mobile: swipe sideways. Desktop: four staggered columns. */}
        <div
          className="-mx-5 mt-14 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:-mx-8 sm:px-8 lg:mx-0 lg:mt-20 lg:grid lg:grid-cols-4 lg:gap-5 lg:overflow-visible lg:px-0 lg:pb-14 [&::-webkit-scrollbar]:hidden"
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

                {/* Bottom shade so the card edge feels soft against the page */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent"
                />
              </motion.button>
            );
          })}
        </div>
      </div>

      <Divider />
    </section>
  );
}

function Divider() {
  return (
    <div className="relative mx-auto mt-6 max-w-7xl px-5 sm:px-8 lg:mt-10">
      <div className="h-px w-full bg-border" />
    </div>
  );
}