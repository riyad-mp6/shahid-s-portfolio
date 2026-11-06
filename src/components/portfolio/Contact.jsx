import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";

const EMAIL = "zii.shahidulislam@gmail.com";
const MAIL_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`;
const COMPANY_NAME = "Rapid Digital Growth";
const COMPANY_URL = "https://www.rapiddigitalgrowth.com/";

const EASE = [0.16, 1, 0.3, 1];

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-20 sm:py-32">
      {/* Soft background glows */}
      <div
        className="pointer-events-none absolute -left-20 top-1/3 h-72 w-72 rounded-full bg-white/[0.06] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-0 top-10 h-[22rem] w-[11rem] rounded-l-full bg-white/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground sm:text-sm">
            
          </p>
          <h2 className="mt-3 text-4xl font-bold uppercase leading-[0.98] tracking-[-0.02em] text-white sm:text-6xl lg:text-7xl">
            Contact Me
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* Left: email card */}
            <motion.a
              href={MAIL_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
              className={`group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-white/15 bg-white/[0.03] p-5 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/[0.07] sm:p-6 ${focusRing}`}
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/25 text-white transition-colors duration-300 group-hover:bg-white group-hover:text-black">
                <Mail className="h-5 w-5" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Email
                </span>
                <span className="mt-1 block truncate text-sm font-medium text-white sm:text-base">
                  {EMAIL}
                </span>
              </span>
              <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
            </motion.a>

            {/* Right: current employer card */}
            <motion.a
              href={COMPANY_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
              className={`group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-white/15 bg-white/[0.03] p-5 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/[0.07] sm:p-6 ${focusRing}`}
            >
              <span className="min-w-0 flex-1">
                <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Current employee at
                </span>
                <span className="mt-1 block truncate text-sm font-medium text-white sm:text-base">
                  {COMPANY_NAME}
                </span>
              </span>
              <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}