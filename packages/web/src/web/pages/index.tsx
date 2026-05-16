import { Layout } from "@/components/layout";
import { motion } from "framer-motion";
import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/project-card";

export default function Index() {
  const featuredProject = projects[0];

  return (
    <Layout>
      <section className="relative min-h-[92svh] sm:min-h-[100svh] flex flex-col items-center justify-center px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-background z-10" />
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat animate-slow-zoom"
            style={{ 
              backgroundImage: `url('/images/hero-lokaninfilms-cinema.jpg')`,
              filter: 'grayscale(0) brightness(0.35)'
            }} 
          />
          <style>{`@media (max-width: 639px) { .animate-slow-zoom { transform: none !important; background-size: contain !important; } }`}</style>
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>

        <div className="relative z-30 max-w-screen-2xl w-full text-center pt-24 sm:pt-16 md:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 
              className="font-display text-[clamp(2.5rem,14vw,10rem)] sm:text-[clamp(3rem,11vw,11rem)] font-bold tracking-tighter leading-[0.82] uppercase break-words px-2"
              style={{ textShadow: '0 0 70px rgba(255,255,255,0.35), 0 0 25px rgba(255,255,255,0.18)' }}
            >
              Lokanin<wbr />Films
            </h1>
            <p className="mt-4 sm:mt-6 max-w-xl mx-auto font-sans text-[10px] sm:text-xs md:text-sm tracking-[0.28em] uppercase text-white/70 px-4">
              Film production in Stockholm
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 z-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <a href="#works" className="flex flex-col items-center gap-2 sm:gap-3 group cursor-pointer min-h-[44px]">
            <span className="font-sans text-[9px] sm:text-[10px] tracking-widest uppercase opacity-60">Scroll</span>
            <div className="w-[1px] h-8 sm:h-10 bg-white/30 group-hover:h-12 sm:group-hover:h-14 transition-all duration-500" />
          </a>
        </motion.div>
      </section>

      <section id="works" className="py-14 sm:py-18 md:py-24 px-4 sm:px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-3 mb-8 sm:mb-10 md:mb-12">
            <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Featured Work</span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold tracking-tighter uppercase">Selected Project</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-14 items-start">
            <ProjectCard project={featuredProject} index={0} />

            <div className="space-y-6 sm:space-y-8 md:space-y-10 lg:pt-2">
              <div className="space-y-4 sm:space-y-5">
                <h3 className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Recognition & Accolades</h3>
                <div className="space-y-4 sm:space-y-5 md:space-y-6">
                  {[
                    { festival: "Stockholm Filmfestival Junior", year: "2025", award: "Winner (1 minute film)" },
                    { festival: "First Time Filmmaker Awards", year: "2025", award: "Nominated" },
                    { festival: "Lesfest Peru Lesbian FilmFestival", year: "2026", award: "Nominated" },
                  ].map((item, i) => (
                    <div key={i} className="border-b border-white/5 pb-3 last:border-0">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 mb-1">
                        <span className="text-sm font-medium tracking-tight font-sans">{item.festival}</span>
                        <span className="text-[10px] tracking-widest text-muted-foreground uppercase">{item.year}</span>
                      </div>
                      <span className="block text-[10px] text-muted-foreground/60 uppercase tracking-widest">{item.award}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-18 md:py-24 px-4 sm:px-6 border-t border-white/5 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-5 sm:mb-6">lets create something together</p>
          <a href="/contact" className="font-display text-3xl sm:text-4xl md:text-6xl font-bold tracking-tighter uppercase hover:italic transition-all">Get in touch</a>
        </motion.div>
      </section>
    </Layout>
  );
}
