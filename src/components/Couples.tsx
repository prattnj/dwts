import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'

// Lineup not yet announced — swap in the real couples when ready
const couples = Array.from({ length: 8 }, () => ({
  names: 'To Be Announced',
  style: 'Under Wraps',
}))

export default function Couples() {
  return (
    <section id="couples" className="relative bg-navy/40 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-xs tracking-[0.35em] uppercase text-gold/80">This Year&rsquo;s Cast</p>
          <h2 className="font-display mt-3 text-3xl font-bold text-white sm:text-4xl">
            Meet the Couples
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-champagne/60">
            Eight couples take the floor this year. The lineup will be announced soon —
            check back for names, styles, and song choices.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {couples.map((c, i) => (
            <div
              key={i}
              className="card-sheen group rounded-xl border border-white/10 bg-midnight/70 p-6 text-center transition-colors hover:border-gold/40"
            >
              <p className="font-display text-4xl text-gold/30 transition-colors group-hover:text-gold/60">
                {String(i + 1).padStart(2, '0')}
              </p>
              <p className="font-display mt-3 text-xl text-white/70 italic">{c.names}</p>
              <div className="mt-3 flex items-center justify-center gap-2 text-xs tracking-widest uppercase text-champagne/50">
                <FontAwesomeIcon icon={faLock} className="h-3 w-3 text-gold/60" />
                {c.style}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
