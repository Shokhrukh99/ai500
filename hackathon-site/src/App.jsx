import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProblemSolution from './components/ProblemSolution'
import Team from './components/Team'
import Expertise from './components/Expertise'
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
      <Expertise />
      <Roadmap />
      <HowWeSolveIt />
    </div>
  )
}

export default App
