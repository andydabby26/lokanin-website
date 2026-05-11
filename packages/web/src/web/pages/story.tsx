import { Layout } from "@/components/layout";
import { motion } from "framer-motion";

export default function Story() {
  return (
    <Layout>
      <section className="pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-12 sm:space-y-14 md:space-y-16"
          >
            <div className="space-y-5 sm:space-y-6">
              <h1 className="font-display text-[clamp(2.25rem,9vw,5.5rem)] font-bold tracking-tighter uppercase leading-[0.85] break-words">
                Lokanin's <br /> Story
              </h1>
              <p className="font-sans text-[10px] sm:text-xs md:text-sm tracking-[0.2em] uppercase text-muted-foreground border-l border-white/20 pl-3 sm:pl-4 py-1">
                A Film Group with great goals
              </p>
            </div>

            <div className="max-w-2xl">
              <div className="space-y-4 sm:space-y-5">
                <h2 className="font-sans text-[10px] tracking-[0.4em] uppercase text-muted-foreground">The Mission</h2>
                <p className="font-serif text-lg sm:text-xl md:text-3xl leading-tight">
                  "We want to make movies to get people to feel and get inspired."
                </p>
              </div>
            </div>

            <div className="space-y-10 sm:space-y-12 md:space-y-14 border-t border-white/5 pt-8 sm:pt-10 md:pt-12">
              <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 sm:gap-6 md:gap-10">
                <h3 className="font-sans text-[12px] tracking-[0.35em] uppercase text-muted-foreground">Who we are</h3>
                <div className="space-y-4 sm:space-y-5 font-serif text-base sm:text-lg md:text-xl leading-relaxed text-foreground/90">
                  <p>
                    Lokanin is a team of young Swedish filmmakers based in Stockholm. The group is run by 16 year olds with real festival experience and a clear vision. The founder, Andreas Daban Elvesund, won Stockholm Film Festival Junior 2025 with Lokanin's short film Golden Hours.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 sm:gap-6 md:gap-10">
                <h3 className="font-sans text-[12px] tracking-[0.35em] uppercase text-muted-foreground">What we do</h3>
                <div className="space-y-4 sm:space-y-5 font-serif text-base sm:text-lg md:text-xl leading-relaxed text-foreground/90">
                  <p>
                    We create short films and movies in both Swedish and English. Our stories deal with real emotions and real problems. We aim to make films that feel honest, relevant, and strong enough to stay with the audience after the screen goes dark.
                  </p>
                  <div className="space-y-2 text-foreground/90 not-prose">
                    <p>• Write and develop original stories</p>
                    <p>• Produce and direct short films</p>
                    <p>• Work with young actors</p>
                    <p>• Build projects from idea to finished film</p>
                    <p>• Share work online to grow an audience</p>
                    <p className="pt-2 sm:pt-3">We are not waiting for permission. We create opportunities. We build experience early. We learn by doing.</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 sm:gap-6 md:gap-10">
                <h3 className="font-sans text-[12px] tracking-[0.35em] uppercase text-muted-foreground">Our FUTURE</h3>
                <div className="space-y-4 sm:space-y-5 font-serif text-base sm:text-lg md:text-xl leading-relaxed text-foreground/90">
                  <div className="space-y-2 text-foreground/90 not-prose">
                    <p>• Produce bigger and more ambitious short films</p>
                    <p>• Reach international festivals</p>
                    <p>• Grow a strong creative team in Stockholm</p>
                    <p>• Collaborate with actors, writers, and filmmakers</p>
                    <p>• Turn Lokanin into a long term production company</p>
                  </div>
                  <p>
                    If you live in Stockholm, Sweden and want to act or work on our films with us. Please get in touch.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 sm:pt-8 text-center">
              <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-6 sm:mb-8">lets create something together</p>
              <div className="flex justify-center gap-8 sm:gap-12" style={{ fontFamily: 'Arial' }}>
                 <a href="mailto:lokaninfilms@gmail.com" className="text-2xl hover:italic transition-all"></a>
                 <a href="/contact" className="text-2xl hover:italic transition-all"></a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
