import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default function Hero() {
  return (
    <section id="top" className="spotlight relative overflow-hidden pt-28 pb-20 sm:pt-36">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="text-xs tracking-[0.35em] uppercase text-gold-light/90 sm:text-sm">
          A Night of Whimsy: Celebrating Brandon&rsquo;s 27th Birthday
        </p>
        <h1 className="font-display mt-4 text-5xl font-bold text-white sm:text-7xl">
          Dancing <span className="text-gold-light italic">with the</span> Stars
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-champagne/70 sm:text-lg">
          Eight couples. One ballroom. The judges are ready, the sequins are pressed, and the
          mirrorball is waiting. Watch the official promo below and get ready for the dance
          event of the season.
        </p>

        <div className="mx-auto mt-12 max-w-4xl">
          <div className="gold-rule mb-6" />
          <div className="mx-auto max-w-sm overflow-hidden rounded-xl border border-gold/30 shadow-[0_0_80px_rgba(201,162,75,0.15)]">
            <video
              className="aspect-[9/16] w-full bg-black"
              src="/trailer.mp4"
              poster="/trailer-poster.jpg"
              controls
              preload="metadata"
              playsInline
            />
          </div>
          <div className="gold-rule mt-6" />
        </div>

        <a
          href="#event"
          className="mt-12 inline-flex flex-col items-center gap-2 text-champagne/50 transition-colors hover:text-gold-light"
        >
          <span className="text-xs tracking-[0.3em] uppercase">Event Details</span>
          <FontAwesomeIcon icon={faChevronDown} className="h-4 w-4" />
        </a>
      </div>
    </section>
  )
}
