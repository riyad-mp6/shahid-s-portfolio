import { motion } from "framer-motion";

export default function CaseConclusion({
  text =
  <>
      Over a 3-month paid advertising campaign, we generated 282 leads from
      Google Ads and Meta Ads, including 38 qualified leads and 12 sales,
      with a total advertising spend of $4,583.
    </>

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
          
          Conclusion
        </motion.h2>
        







        
      </div>
    </section>);

}