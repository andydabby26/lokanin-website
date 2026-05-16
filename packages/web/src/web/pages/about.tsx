import { Layout } from "@/components/layout";
import { motion } from "framer-motion";
import { PhotoManager } from "@/components/photo-manager";

export default function About() {
  return (
    <Layout>
      <section className="hidden md:block pt-24 md:pt-28 pb-14 md:pb-20 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[170px_1fr_220px] gap-8 lg:gap-12 items-start">
              <div className="space-y-8 order-2 md:order-1 lg:order-1">
                <div className="space-y-6 text-lg font-medium">
                  <div className="space-y-2">
                    <h3 className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Contact</h3>
                    <div className="flex flex-col gap-1">
                      <a href="mailto:lokaninfilms@gmail.com" className="font-sans text-sm hover:text-muted-foreground transition-colors min-h-[28px] flex items-center">lokaninfilms@gmail.com</a>
                    </div>
                    <div className="pt-1">
                      <a href="tel:+46704691414" className="font-sans text-sm hover:text-muted-foreground transition-colors min-h-[28px] flex items-center">(+46) 704691414</a>
                      <p className="font-sans text-[11px] uppercase tracking-tighter text-muted-foreground/50">Texting only</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Social</h3>
                    <div className="flex flex-col gap-1">
                      <a href="https://www.youtube.com/channel/UCmJYcx0T8qrgVDWnfIsYsHg" target="_blank" rel="noopener noreferrer" className="font-sans text-[15px] hover:opacity-50 transition-opacity min-h-[28px] flex items-center">YouTube LokaninFilms</a>
                      <a href="https://www.instagram.com/andreas.daban/" target="_blank" rel="noopener noreferrer" className="font-sans text-[15px] hover:opacity-50 transition-opacity min-h-[28px] flex items-center">Insta @andreas.daban</a>
                      <a href="https://www.instagram.com/lokaninfilms/" target="_blank" rel="noopener noreferrer" className="font-sans text-[15px] hover:opacity-50 transition-opacity min-h-[28px] flex items-center">Insta @lokaninfilms</a>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Location</h3>
                    <p className="font-sans text-sm">Sweden</p>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-1">
                      <h3 className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Film</h3>
                      <p className="font-sans text-xs text-muted-foreground leading-relaxed">Directing, Editing, Screenwriting</p>
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Music</h3>
                      <p className="font-sans text-xs text-muted-foreground leading-relaxed">Playing the piano</p>
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Other</h3>
                      <p className="font-sans text-xs text-muted-foreground leading-relaxed">Photography</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-10 md:border-l lg:border-x border-white/5 px-0 md:pl-8 lg:pl-10 lg:pr-12 order-1 md:order-2 lg:order-2">
                <div className="space-y-5">
                  <h1 className="font-display text-[clamp(2.3rem,6vw,4.2rem)] font-bold tracking-tighter uppercase leading-[0.88] break-words">Andreas daban elvesund</h1>
                  <p className="font-sans text-[11px] md:text-xs tracking-[0.15em] uppercase text-muted-foreground">Filmmaker, director, editor, piano Player and photographer.</p>
                  <div className="space-y-4 font-serif text-[17px] md:text-[18px] leading-relaxed text-foreground/80 max-w-2xl">
                    <p>I make short films that explore the space between what we show the world and what we truly feel. My work is often focused on the lives of young people, capturing those quiet, formative moments of transition. I believe in natural performances and a calm, observational pace that allows the story to breathe.</p>
                    <p>Dialogue is often a last resort; I prefer to let silence, framing, and sound design carry the emotional weight. For me, music and color are not just decorative—they are essential narrative tools that shape the atmosphere.</p>
                    <p>My stories often have open endings because life doesn't always provide clean resolutions. At its core, my philosophy is one of observation and honesty, seeking to capture the raw, unvarnished reality of human experience.</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="font-sans text-[10px] tracking-[0.4em] uppercase text-muted-foreground border-b border-white/10 pb-3">Recognition</h3>
                  <div className="space-y-4">
                    {[
                      { festival: "Stockholm Filmfestival Junior", year: "2025", award: "Winner (1 minute film)" },
                      { festival: "First Time Filmmaker Awards", year: "2025", award: "Nominated" },
                    ].map((item, i) => (
                      <div key={i} className="flex justify-between items-baseline gap-4">
                        <div className="space-y-0.5">
                          <p className="font-sans text-sm font-medium">{item.festival}</p>
                          <p className="text-[10px] text-muted-foreground uppercase tracking-widest">{item.award}</p>
                        </div>
                        <span className="text-[10px] tracking-widest text-muted-foreground uppercase whitespace-nowrap">{item.year}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="font-sans text-[10px] tracking-[0.4em] uppercase text-muted-foreground border-b border-white/10 pb-3">Filmography</h3>
                  <div className="space-y-8">
                    <div className="space-y-5">
                      <h4 className="font-sans text-[9px] tracking-[0.2em] uppercase text-muted-foreground/50">Selected Work</h4>
                      {[
                        { title: "Golden Hours", year: "2025", role: "Director", type: "Short film" },
                      ].map((item, i) => (
                        <div key={i} className="grid grid-cols-[1fr_auto] gap-4">
                          <div className="space-y-1">
                            <h4 className="font-sans text-sm font-bold uppercase tracking-wider">{item.title}</h4>
                            <p className="text-[10px] text-muted-foreground uppercase tracking-widest">{item.role}</p>
                          </div>
                          <div className="text-right">
                            <span className="text-[10px] tracking-widest text-muted-foreground uppercase">{item.year}</span>
                            <p className="text-[10px] text-muted-foreground/40 uppercase tracking-widest mt-1">{item.type}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-5 pb-2">
                      <h4 className="font-sans text-[9px] tracking-[0.2em] uppercase text-muted-foreground/50">Early Works</h4>
                      {[
                        { title: "The deaf kid and the murderer", year: "2022", role: "Director", type: "Short film" },
                        { title: "Instagram", year: "2022", role: "Director", type: "Short film" },
                        { title: "Thomas Terror", year: "2020", role: "Director", type: "Short film" },
                      ].map((item, i) => (
                        <div key={i} className="grid grid-cols-[1fr_auto] gap-4">
                          <div className="space-y-1">
                            <h4 className="font-sans text-sm font-bold uppercase tracking-wider">{item.title}</h4>
                            <p className="text-[10px] text-muted-foreground uppercase tracking-widest">{item.role}</p>
                          </div>
                          <div className="text-right">
                            <span className="text-[10px] tracking-widest text-muted-foreground uppercase">{item.year}</span>
                            <p className="text-[10px] text-muted-foreground/40 uppercase tracking-widest mt-1">{item.type}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6 order-3 md:col-span-2 lg:col-span-1">
                <div className="lg:sticky lg:top-24"><PhotoManager /></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="block md:hidden pt-20 sm:pt-24 pb-14 sm:pb-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
            <div className="grid grid-cols-1 gap-8 sm:gap-10">
              <div className="space-y-5 sm:space-y-6">
                <h1 className="font-display text-[clamp(2.25rem,8vw,4.5rem)] font-bold tracking-tighter uppercase leading-[0.9] break-words">Andreas Daban Elvesund</h1>
                <p className="font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground">Filmmaker, director, editor, piano player and photographer.</p>
                <div className="space-y-4 sm:space-y-5 font-serif text-base sm:text-lg leading-relaxed text-foreground/80 max-w-2xl">
                  <p>I make short films that explore the space between what we show the world and what we truly feel. My work is often focused on the lives of young people, capturing those quiet, formative moments of transition. I believe in natural performances and a calm, observational pace that allows the story to breathe.</p>
                  <p>Dialogue is often a last resort; I prefer to let silence, framing, and sound design carry the emotional weight. For me, music and color are not just decorative—they are essential narrative tools that shape the atmosphere.</p>
                  <p>My stories often have open endings because life doesn't always provide clean resolutions. At its core, my philosophy is one of observation and honesty, seeking to capture the raw, unvarnished reality of human experience.</p>
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
                      <div className="space-y-1"><p className="font-sans text-sm font-medium">{item.festival}</p><p className="text-[10px] text-muted-foreground uppercase tracking-widest">{item.award}</p></div>
                      <span className="text-[10px] tracking-widest text-muted-foreground uppercase whitespace-nowrap">{item.year}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-6 text-lg font-medium">
                <div className="space-y-2">
                  <h3 className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Contact</h3>
                  <div className="flex flex-col gap-1">
                    <a href="mailto:lokaninfilms@gmail.com" className="font-sans text-sm hover:text-muted-foreground transition-colors min-h-[32px] flex items-center">lokaninfilms@gmail.com</a>
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
          </motion.div>
        </div>
      </section>

      <section className="block md:hidden px-4 sm:px-6 pb-14 sm:pb-16">
        <div className="max-w-7xl mx-auto">
          <PhotoManager />
        </div>
      </section>
    </Layout>
  );
}
