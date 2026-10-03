import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy, faStar } from '@fortawesome/free-solid-svg-icons'

// Placeholder recap — fill in with last year's real couples and scores
const lastYearCouples = [
  { names: 'Graham & Natalie', dance: 'Paso Doble', score: '27', note: 'Mirrorball Champions' },
  { names: 'Austin & Kelsey', dance: 'Samba', score: '25', note: 'Runners-up' },
  { names: 'Miles & Jenna', dance: 'Waltz', score: '24' },
  { names: 'Colin & Paige', dance: 'Charleston', score: '22' },
  { names: 'Spencer & Hailey', dance: 'Swing', score: '21' },
  { names: 'Drew & Mariah', dance: 'Argentine Tango', score: '20' },
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
            Last year set the bar high — six couples, three judges, and a finale decided by a
            single point. The champions will be in attendance to defend their title.
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
              <span className="font-display w-8 shrink-0 text-right text-lg text-gold/50">
                {i + 1}
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-display truncate text-lg text-white">
                  {c.names}
                  {c.note && (
                    <span className="ml-3 inline-flex items-center gap-1.5 align-middle text-xs tracking-widest uppercase text-gold-light">
                      <FontAwesomeIcon
                        icon={i === 0 ? faTrophy : faStar}
                        className="h-3 w-3"
                      />
                      {c.note}
                    </span>
                  )}
                </p>
                <p className="mt-0.5 text-sm text-champagne/50">{c.dance}</p>
              </div>
              <div className="shrink-0 text-right">
                <p className="font-display text-2xl text-gold-light">{c.score}</p>
                <p className="text-[10px] tracking-widest uppercase text-champagne/40">
                  of 30
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
