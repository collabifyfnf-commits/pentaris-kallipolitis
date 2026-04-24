import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Reviews from './components/Reviews'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-[#0F0F0F] text-white">
      <Navbar />
      <Hero />
      <Reviews />
      <Services />
      <Gallery />
      <Team />
      <Contact />
      <Footer />
    </div>
  )
}
