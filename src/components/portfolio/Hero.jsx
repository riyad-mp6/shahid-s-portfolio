import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { scrollToId } from "@/lib/scroll";
import { Image } from "@/components/ui/image";

const PROFILE_IMG =
  "https://media.base44.com/images/public/user_6ab7ecf034aadfd5ab878f7f/e0f4895a3_photo_2026-08-28_12-12-49-removebg-preview.png";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Hero() {
  return (
    <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left: Typography wall */}
          <div className="order-2 lg:order-1">
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="text-4xl font-bold uppercase leading-[0.98] tracking-[-0.02em] text-white sm:text-6xl lg:text-7xl"
            >
              Hi, I'm
              <br />
              Shahidul
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={1}
              initial="hidden"
              animate="show"
              className="mt-5 text-lg font-medium text-white/90 sm:text-xl"
            >
              Digital &amp; Performance Marketer
            </motion.p>

            <motion.p
              variants={fadeUp}
              custom={2}
              initial="hidden"
              animate="show"
              className="mt-5 max-w-md text-[15px] leading-relaxed text-muted-foreground sm:text-base"
            >
              I help businesses generate leads, sales, and measurable growth
              through paid advertising, SEO/GEO, sales funnels, content, and
              marketing analytics.
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={3}
              initial="hidden"
              animate="show"
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4"
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

          {/* Right: Dual-orbit profile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="order-1 flex justify-center lg:order-2 lg:justify-end"
          >
            <div className="relative aspect-square w-64 sm:w-80 lg:w-[26rem]">
              {/* Outer rotating orbit ring */}
              <div
                className="absolute inset-0 rounded-full border border-white/20"
                style={{ animation: "spin-slow 40s linear infinite" }}
              />
              {/* Inner ring */}
              <div className="absolute inset-3 rounded-full border border-white/15" />
              {/* Subtle haze glow */}
              <div className="absolute inset-6 rounded-full bg-white/[0.03] blur-2xl" />
              {/* Photo */}
              <div className="absolute inset-5 overflow-hidden rounded-full ring-1 ring-white/25">
                <Image
                  src={PROFILE_IMG}
                  alt="Shahidul — Digital & Performance Marketer"
                  fittingType="cover"
                  className="h-full w-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Divider />
    </section>
  );
}

function Divider() {
  return (
    <div className="mx-auto mt-16 max-w-7xl px-5 sm:px-8 sm:mt-24">
      <div className="h-px w-full bg-border" />
    </div>
  );
}