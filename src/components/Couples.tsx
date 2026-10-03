import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'

// Placeholder lineup — swap in the real couples when announced
const couples = [
  { names: 'Marcus & Elena', style: 'Cha-Cha' },
  { names: 'Tyler & Brooke', style: 'Tango' },
  { names: 'Devin & Aubrey', style: 'Foxtrot' },
  { names: 'Jordan & Camille', style: 'Salsa' },
  { names: 'Nate & Whitney', style: 'Viennese Waltz' },
  { names: 'Carson & Maya', style: 'Jive' },
  { names: 'Blake & Sienna', style: 'Rumba' },
  { names: 'Reed & Olivia', style: 'Quickstep' },
]

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
            Eight couples take the floor this year. Styles and song choices are under wraps
            until the night of the show.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {couples.map((c, i) => (
            <div
              key={c.names}
              className="card-sheen group rounded-xl border border-white/10 bg-midnight/70 p-6 text-center transition-colors hover:border-gold/40"
            >
              <p className="font-display text-4xl text-gold/30 transition-colors group-hover:text-gold/60">
                {String(i + 1).padStart(2, '0')}
              </p>
              <p className="font-display mt-3 text-xl text-white">{c.names}</p>
              <div className="mt-3 flex items-center justify-center gap-2 text-xs tracking-widest uppercase text-champagne/50">
                <FontAwesomeIcon icon={faMusic} className="h-3 w-3 text-gold/60" />
                {c.style}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
