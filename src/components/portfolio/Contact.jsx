import { motion } from "framer-motion";
import { Linkedin, Facebook, Mail, ArrowUpRight } from "lucide-react";

const WHATSAPP_URL = "https://wa.link/g3utcg";
const LINKEDIN_URL = "https://www.linkedin.com/in/shahidul-islam-3325b4319/";
const FACEBOOK_URL = "https://www.facebook.com/shahidul.islam.072";
const EMAIL = "zii.shahidulislam@gmail.com";
const MAIL_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`;

const iconLink =
  "inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition-colors duration-300 hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black";

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start gap-6"
        >
          <h2 className="text-4xl font-bold uppercase tracking-[-0.02em] text-white sm:text-6xl lg:text-7xl">
            Contact Me
          </h2>
          <p className="max-w-md text-base leading-relaxed text-muted-foreground">
            Let's talk about your next growth campaign.
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-xs font-bold uppercase tracking-[0.12em] text-black transition-transform duration-300 hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            Get In Touch
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>

          <div className="mt-2 flex items-center gap-3">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={iconLink}
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className={iconLink}
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href={MAIL_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
              className={iconLink}
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          <p className="text-sm text-muted-foreground">{EMAIL}</p>
        </motion.div>
      </div>
    </section>
  );
}