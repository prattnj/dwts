export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy/40 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center">
        <img src="/dwts-logo.png" alt="Dancing with the Stars" className="h-8 w-auto opacity-70" />
        <p className="text-xs tracking-widest uppercase text-champagne/40">
          Friday, November 13th &middot; 7:00 PM &middot; Lehi, Utah
        </p>
        <p className="max-w-md text-xs leading-relaxed text-champagne/30">
          A private event among friends. Not affiliated with ABC or BBC Studios — but the
          mirrorball is just as real.
        </p>
      </div>
    </footer>
  )
}
