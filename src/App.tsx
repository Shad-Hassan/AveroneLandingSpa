import { Hero, Metrics, AgentDemo, ScalabilityGrid, CallToAction, Contact } from './components'
import Navbar from './layout/navbar/Navbar'
import { NavProvider } from './context/NavContext'

function App() {
  return (
    <NavProvider>
      <Navbar />
      <main className="bg-black text-platinum">
        <Hero />
        <Metrics />
        <AgentDemo />
        <ScalabilityGrid />
        <CallToAction />
        <Contact />
      </main>
    </NavProvider>
  )
}

export default App
