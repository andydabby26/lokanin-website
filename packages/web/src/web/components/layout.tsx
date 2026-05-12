import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Navbar({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void }) {
  const [location] = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location, setIsOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference text-white">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 py-3 sm:py-5 flex justify-between items-center">
        <Link href="/" className="font-display text-base sm:text-lg md:text-xl font-bold tracking-tighter hover:opacity-70 transition-opacity z-50 flex items-center gap-3">
          <span>LokaninFilms</span>
        </Link>

        <button 
          className="z-50 p-2 -mr-2 hover:opacity-70 transition-opacity"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6 md:w-7 md:h-7" /> : <Menu className="w-6 h-6 md:w-7 md:h-7" />}
        </button>
      </div>

      <div className={`fixed inset-0 bg-background/96 backdrop-blur-2xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col items-center justify-center gap-4 sm:gap-6 md:gap-10 px-6 overflow-y-auto ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none translate-y-4'}`}>
        <Link href="/" className="font-display text-3xl sm:text-4xl md:text-6xl uppercase tracking-tighter font-bold hover:italic transition-all duration-300 text-center">Home</Link>
        <Link href="/projects/golden-hours" className="font-display text-3xl sm:text-4xl md:text-6xl uppercase tracking-tighter font-bold hover:italic transition-all duration-300 text-center">Work</Link>
        <Link href="/story" className="font-display text-3xl sm:text-4xl md:text-6xl uppercase tracking-tighter font-bold hover:italic transition-all duration-300 text-center">Story</Link>
        <Link href="/about" className="font-display text-3xl sm:text-4xl md:text-6xl uppercase tracking-tighter font-bold text-center px-6 hover:italic transition-all duration-300">Creator and vision</Link>
        <Link href="/contact" className="font-display text-3xl sm:text-4xl md:text-6xl uppercase tracking-tighter font-bold hover:italic transition-all duration-300 text-center">Contact</Link>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 mt-6 sm:mt-10 md:mt-16 items-center">
          <a href="https://www.youtube.com/channel/UCmJYcx0T8qrgVDWnfIsYsHg" target="_blank" rel="noopener noreferrer" className="font-sans text-[10px] md:text-xs tracking-[0.3em] uppercase opacity-50 hover:opacity-100 transition-opacity">YouTube</a>
          <a href="https://www.instagram.com/andreas.daban/" target="_blank" rel="noopener noreferrer" className="font-sans text-[10px] md:text-xs tracking-[0.3em] uppercase opacity-50 hover:opacity-100 transition-opacity">Instagram</a>
        </div>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 font-sans text-[10px] tracking-widest uppercase text-muted-foreground">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10 flex flex-col md:flex-row justify-between items-center md:items-end gap-4 sm:gap-6 text-center md:text-left">
        <div>
          <p>&copy; 2026 LokaninFilms</p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          <a href="https://www.youtube.com/channel/UCmJYcx0T8qrgVDWnfIsYsHg" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors min-h-[44px] flex items-center">YouTube</a>
          <a href="https://www.instagram.com/andreas.daban/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors min-h-[44px] flex items-center">Instagram</a>
          <a href="https://www.instagram.com/lokaninfilms/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors min-h-[44px] flex items-center">Lokanin</a>
        </div>
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-white selection:text-black overflow-x-hidden">
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <main className={`transition-all duration-500 ${isOpen ? 'blur-md' : ''}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
