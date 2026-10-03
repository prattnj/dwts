import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faClock, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'

const details: { icon: IconDefinition; label: string; value: string; sub?: string }[] = [
  {
    icon: faCalendarDays,
    label: 'Date',
    value: 'Friday, November 13th',
  },
  {
    icon: faClock,
    label: 'Time',
    value: '7:00 PM',
    sub: 'Doors open early — find your seat before the first dance',
  },
  {
    icon: faLocationDot,
    label: 'Location',
    value: '3679 Bluegrass Blvd',
    sub: 'Lehi, UT 84043',
  },
]

export default function EventDetails() {
  return (
    <section id="event" className="relative py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-xs tracking-[0.35em] uppercase text-gold/80">Save the Date</p>
          <h2 className="font-display mt-3 text-3xl font-bold text-white sm:text-4xl">
            The Ballroom Awaits
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {details.map((d) => (
            <div
              key={d.label}
              className="card-sheen rounded-xl border border-white/10 bg-navy/60 p-8 text-center"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-midnight">
                <FontAwesomeIcon icon={d.icon} className="h-5 w-5 text-gold-light" />
              </div>
              <p className="mt-5 text-xs tracking-[0.25em] uppercase text-champagne/50">
                {d.label}
              </p>
              <p className="font-display mt-2 text-xl text-white">{d.value}</p>
              {d.sub && <p className="mt-2 text-sm text-champagne/60">{d.sub}</p>}
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-xl text-center text-sm leading-relaxed text-champagne/50">
          Cheering is mandatory. Scoring paddles will be provided at the door.
        </p>
      </div>
    </section>
  )
}
