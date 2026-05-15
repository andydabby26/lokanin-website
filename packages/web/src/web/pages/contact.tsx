import { Layout } from "@/components/layout";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <Layout>
      <section className="min-h-[calc(100vh-5rem)] flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-4 sm:mb-6">Get in touch</p>
          <a
            href="mailto:lokaninfilms@gmail.com"
            className="font-serif text-lg sm:text-xl md:text-2xl text-muted-foreground hover:text-foreground transition-colors italic block break-words min-h-[44px] flex items-center justify-center"
          >
            lokaninfilms@gmail.com
          </a>
        </motion.div>
      </section>
    </Layout>
  );
}
