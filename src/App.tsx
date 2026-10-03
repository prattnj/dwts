import Nav from './components/Nav'
import Hero from './components/Hero'
import EventDetails from './components/EventDetails'
import Couples from './components/Couples'
import LastYear from './components/LastYear'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-midnight">
      <Nav />
      <Hero />
      <EventDetails />
      <Couples />
      <LastYear />
      <Footer />
    </div>
  )
}
