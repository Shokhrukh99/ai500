import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProblemSolution from './components/ProblemSolution'
import Team from './components/Team'
import Expertise from './components/Expertise'
import Roadmap from './components/Roadmap'
import Implementation from './components/Implementation'
import Background from './components/Background'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <ScrollToTop />
      <Background />
      <Hero />
      <ProblemSolution />
      <Team />
      <Expertise />
      <Roadmap />
      <Implementation />
    </div>
  )
}

export default App
