import Header from './components/Header'
import HeroSection from './components/HeroSection'
import CardsServico from './components/CardsServico'
import SecaoDestaque from './components/SecaoDestaque'
import MetricasSection from './components/MetricasSection'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />

        <div className="section-divider" />

        <MetricasSection />

        <div className="section-divider" />

        <SecaoDestaque />

        <div className="section-divider" />

        <CardsServico />
      </main>

      <Footer />
    </>
  )
}

export default App