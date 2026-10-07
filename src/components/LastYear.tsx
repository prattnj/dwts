import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCrown } from '@fortawesome/free-solid-svg-icons'

const lastYearCouples = [
  { names: 'Jess & Justin', note: 'Audience Choice Winners' },
  { names: 'Noah & Elizabeth' },
  { names: 'Brandon & Kylie' },
  { names: 'Hannah & Nathaniel' },
  { names: 'Leslie & Danny' },
  { names: 'Harry & Savannah' },
]

export default function LastYear() {
  return (
    <section id="last-year" className="relative py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <p className="text-xs tracking-[0.35em] uppercase text-gold/80">A Look Back</p>
          <h2 className="font-display mt-3 text-3xl font-bold text-white sm:text-4xl">
            Last Year&rsquo;s Season
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-champagne/60">
            Last year set the bar high — six couples took the floor, and the audience vote
            crowned Jess &amp; Justin the winners. The champions will be in attendance to
            defend their title.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-xl border border-white/10">
          {lastYearCouples.map((c, i) => (
            <div
              key={c.names}
              className={`flex items-center gap-4 px-6 py-5 sm:gap-6 ${
                i % 2 === 0 ? 'bg-navy/50' : 'bg-navy/25'
              } ${i === 0 ? 'border-b border-gold/30' : ''}`}
            >
              <div className="min-w-0 flex-1 text-center">
                <p className="font-display truncate text-lg text-white">
                  {c.names}
                  {c.note && (
                    <span className="ml-3 inline-flex items-center gap-1.5 align-middle text-xs tracking-widest uppercase text-gold-light">
                      <FontAwesomeIcon icon={faCrown} className="h-3 w-3" />
                      {c.note}
                    </span>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
