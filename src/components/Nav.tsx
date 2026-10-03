const links = [
  { href: '#event', label: 'The Event' },
  { href: '#couples', label: 'This Year' },
  { href: '#last-year', label: 'Last Year' },
]

export default function Nav() {
  return (
    <header className="absolute top-0 left-0 right-0 z-20">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="#top" className="flex items-center gap-3">
          <img src="/dwts-logo.png" alt="Dancing with the Stars" className="h-10 w-auto" />
        </a>
        <ul className="hidden items-center gap-8 text-sm tracking-widest uppercase text-champagne/80 sm:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-gold-light">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
