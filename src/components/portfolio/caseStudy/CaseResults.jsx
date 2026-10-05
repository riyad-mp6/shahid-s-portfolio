import { motion } from "framer-motion";
import { Image } from "@/components/ui/image";

const DEFAULT_GOOGLE_IMG =
"https://media.base44.com/images/public/6ac0f28ee3aa9759639a8f64/e76b1f6c8_Gemini_Generated_Image_cmdo9ycmdo9ycmdo.jpg";
const DEFAULT_META_IMG =
"https://media.base44.com/images/public/6ac0f28ee3aa9759639a8f64/13032ac09_Gemini_Generated_Image_fvttkufvttkufvtt.jpg";

const DEFAULT_STATS = [
{ value: "$4,583", label: "Total Ad Spend" },
{ value: "282", label: "Total Leads" },
{ value: "$16.25", label: "Average CPL" },
{ value: "38", label: "Qualified Leads" },
{ value: "12", label: "Sales" }];

export default function CaseResults({
  stats = DEFAULT_STATS,
  google = { leads: "193", cpl: "$12.60", image: DEFAULT_GOOGLE_IMG },
  meta = { leads: "89", cpl: "$24.20", image: DEFAULT_META_IMG }
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
          
          Results
        </motion.h2>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {stats.map((s, i) =>
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.06 }}
            className="rounded-xl border border-border bg-card p-5">
            
              <p className="text-2xl font-bold tracking-[-0.02em] text-white sm:text-3xl">
                {s.value}
              </p>
              <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                {s.label}
              </p>
            </motion.div>
          )}
        </div>

        <motion.h3
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 text-[11px] font-bold uppercase tracking-[0.18em] text-white">
          
          Platform Performance
        </motion.h3>

        {/* Google Ads */}
        <div className="mt-6 border-b border-border pb-10">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <span className="text-sm font-bold uppercase tracking-[0.1em] text-white">
              Google Ads
            </span>
            <span className="text-sm text-muted-foreground">— {google.leads} Leads · {google.cpl} CPL</span>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 aspect-[16/10] w-full overflow-hidden border border-white/15 bg-card rounded-2xl">
            
            <Image src="https://media.base44.com/images/public/6ac0f28ee3aa9759639a8f64/0a846d8d4_Gemini_Generated_Image_vywhamvywhamvywh.jpg" alt="Google Ads dashboard performance" fittingType="fit" className="h-full w-full" />
          </motion.div>
        </div>

        {/* Meta Ads */}
        <div className="mt-10">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <span className="text-sm font-bold uppercase tracking-[0.1em] text-white">
              Meta Ads
            </span>
            <span className="text-sm text-muted-foreground">— {meta.leads} Leads · {meta.cpl} CPL</span>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/15 bg-card">
            
            <Image src="https://media.base44.com/images/public/6ac0f28ee3aa9759639a8f64/b6faf7435_Gemini_Generated_Image_r50osir50osir50o.jpg" alt="Meta Ads dashboard performance" fittingType="fit" className="h-full w-full" />
          </motion.div>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-7xl px-5 sm:px-8 sm:mt-24">
        <div className="h-px w-full bg-border" />
      </div>
    </section>);

}