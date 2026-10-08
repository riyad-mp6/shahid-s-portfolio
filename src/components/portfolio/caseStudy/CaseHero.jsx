import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Image } from "@/components/ui/image";

const DEFAULT_HERO_IMG =
"https://media.base44.com/images/public/6ac0f28ee3aa9759639a8f64/784ec9b5d_Screenshot2026-10-02183352.png";

const DEFAULT_DETAILS = [
{ label: "Client", value: "Align Real Estate" },
{ label: "Role", value: "Paid Ads Manager" },
{ label: "Market", value: "Florida, United States" },
{ label: "Duration", value: "3 Months" },
{ label: "Platforms", value: "Google Ads & Meta Ads" },
{ label: "Year", value: "2026" }];


const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }
  })
};

export default function CaseHero({
  title =
  <>
      Real Estate Lead
      <br />
      Generation
    </>,

  subtitle = "Align Real Estate",
  image = DEFAULT_HERO_IMG,
  imageAlt = "Align Real Estate website screenshot",
  details = DEFAULT_DETAILS,
  websiteUrl = "https://alignagents.com/",
  websiteLabel = "Visit Website"
}) {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
      {/* Floating blurred 3D cubes, far right edge */}
      <div className="pointer-events-none absolute -right-10 top-24 h-40 w-40 rotate-12 rounded-2xl bg-white/10 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute right-8 top-72 h-24 w-24 rounded-full bg-white/[0.07] blur-2xl" aria-hidden />
      <div className="pointer-events-none absolute -right-4 bottom-10 h-32 w-32 rotate-45 rounded-md bg-white/[0.05] blur-3xl" aria-hidden />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-4xl font-bold uppercase leading-[0.98] tracking-[-0.02em] text-white sm:text-6xl lg:text-7xl">
          
          {title}
        </motion.h1>
        <motion.p
          variants={fadeUp}
          custom={1}
          initial="hidden"
          animate="show"
          className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground sm:text-sm">
          
          {subtitle}
        </motion.p>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}>
            
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-white/15 bg-card">
              <Image src="https://media.base44.com/images/public/6ac0f28ee3aa9759639a8f64/618618983_Screenshot_2026-10-03_194733.png"

              alt={imageAlt}
              fittingType="fit"
              className="h-full w-full" />
              
            </div>
          </motion.div>

          <motion.div variants={fadeUp} custom={2} initial="hidden" animate="show">
            <dl className="divide-y divide-border border-y border-border">
              {details.map((d) =>
              <div key={d.label} className="flex items-center justify-between py-3.5">
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    {d.label}
                  </dt>
                  <dd className="text-sm font-normal text-white">{d.value}</dd>
                </div>
              )}
            </dl>

            <a
              href={websiteUrl || undefined}
              target={websiteUrl ? "_blank" : undefined}
              rel="noopener noreferrer"
              onClick={(e) => {if (!websiteUrl) e.preventDefault();}}
              className="group mt-8 inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-xs font-bold uppercase tracking-[0.12em] text-black transition-transform duration-300 hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black">
              
              {websiteLabel}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </motion.div>
        </div>
      </div>

      <Divider />
    </section>);

}

function Divider() {
  return (
    <div className="mx-auto mt-16 max-w-7xl px-5 sm:px-8 sm:mt-24">
      <div className="h-px w-full bg-border" />
    </div>);

}