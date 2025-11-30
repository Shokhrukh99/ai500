import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProblemSolution from './components/ProblemSolution'
import Team from './components/Team'
import WhyUs from './components/WhyUs'
import Roadmap from './components/Roadmap'
import HowWeSolveIt from './components/HowWeSolveIt'
import Background from './components/Background'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Background />
      <Hero />
      <ProblemSolution />
      <Team />
      <WhyUs />
      <Roadmap />
      <HowWeSolveIt />
    </div>
  )
}

export default App
