import { Layout } from "@/components/layout";
import { motion } from "framer-motion";
import { PhotoManager } from "@/components/photo-manager";

export default function About() {
  return (
    <Layout>
      <section className="pt-20 sm:pt-24 md:pt-32 pb-14 sm:pb-16 md:pb-20 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-[180px_1fr_280px] gap-8 sm:gap-10 md:gap-12 lg:gap-16">
              <div className="space-y-10 sm:space-y-12 order-2 lg:order-1">
                <div className="space-y-6 text-lg font-medium">
                  <div className="space-y-2">
                    <h3 className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Contact</h3>
                    <div className="flex flex-col gap-1">
                      <a href="mailto:lokaninfilms@gmail.com" className="font-sans text-sm hover:text-muted-foreground transition-colors min-h-[32px] flex items-center">lokaninfilms@gmail.com</a>
                      <a href="mailto:andydabby@gmail.com" className="font-sans text-sm hover:text-muted-foreground transition-colors min-h-[32px] flex items-center">andydabby@gmail.com</a>
                    </div>
                    <div className="pt-1">
                      <a href="tel:+46704691414" className="font-sans text-sm hover:text-muted-foreground transition-colors min-h-[32px] flex items-center">(+46) 704691414</a>
                      <p className="font-sans text-[11px] uppercase tracking-tighter text-muted-foreground/50">Texting only</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Social</h3>
                    <div className="flex flex-col gap-1">
                      <a href="https://www.youtube.com/channel/UCmJYcx0T8qrgVDWnfIsYsHg" target="_blank" rel="noopener noreferrer" className="font-sans text-[16px] hover:opacity-50 transition-opacity min-h-[32px] flex items-center">YouTube LokaninFilms</a>
                      <a href="https://www.instagram.com/andreas.daban/" target="_blank" rel="noopener noreferrer" className="font-sans text-[16px] hover:opacity-50 transition-opacity min-h-[32px] flex items-center">Insta @andreas.daban</a>
                      <a href="https://www.instagram.com/lokaninfilms/" target="_blank" rel="noopener noreferrer" className="font-sans text-[16px] hover:opacity-50 transition-opacity min-h-[32px] flex items-center">Insta @lokaninfilms</a>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Location</h3>
                    <p className="font-sans text-sm">Sweden</p>
                  </div>
                </div>
              </div>

              <div className="space-y-10 sm:space-y-12 md:space-y-14 order-1 lg:order-2 lg:px-6 xl:px-10 lg:border-x border-white/5">
                <div className="space-y-5 sm:space-y-6">
                  <h1 className="font-display text-[clamp(2.25rem,8vw,4.5rem)] font-bold tracking-tighter uppercase leading-[0.9] break-words">Andreas Daban Elvesund</h1>
                  <p className="font-sans text-xs md:text-sm tracking-[0.15em] uppercase text-muted-foreground">Filmmaker, director, editor, piano player and photographer.</p>
                  <div className="space-y-4 sm:space-y-5 font-serif text-base sm:text-lg md:text-xl leading-relaxed text-foreground/80 max-w-2xl">
                    <p>
                      I make short films that explore the space between what we show the world and what we truly feel. My work is often focused on the lives of young people, capturing those quiet, formative moments of transition. I believe in natural performances and a calm, observational pace that allows the story to breathe.
                    </p>
                    <p>
                      Dialogue is often a last resort; I prefer to let silence, framing, and sound design carry the emotional weight. For me, music and color are not just decorative—they are essential narrative tools that shape the atmosphere.
                    </p>
                    <p>
                      My stories often have open endings because life doesn't always provide clean resolutions. At its core, my philosophy is one of observation and honesty, seeking to capture the raw, unvarnished reality of human experience.
                    </p>
                  </div>
                </div>

                <div className="space-y-8">
                  <h3 className="font-sans text-[10px] tracking-[0.4em] uppercase text-muted-foreground border-b border-white/10 pb-4">Recognition</h3>
                  <div className="space-y-5">
                    {[
                      { festival: "Stockholm Filmfestival Junior", year: "2025", award: "Winner (1 minute film)" },
                      { festival: "First Time Filmmaker Awards", year: "2025", award: "Nominated" },
                      { festival: "Lesfest Peru Lesbian FilmFestival", year: "2026", award: "Nominated" },
                    ].map((item, i) => (
                      <div key={i} className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2 sm:gap-4">
                        <div className="space-y-1">
                          <p className="font-sans text-sm font-medium">{item.festival}</p>
                          <p className="text-[10px] text-muted-foreground uppercase tracking-widest">{item.award}</p>
                        </div>
                        <span className="text-[10px] tracking-widest text-muted-foreground uppercase whitespace-nowrap">{item.year}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6 order-3 lg:order-3">
                <div className="lg:sticky lg:top-28">
                  <PhotoManager />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
