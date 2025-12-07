import Navbar from './Navbar'
import Hero from './Hero'
import ProblemSolution from './ProblemSolution'
import Team from './Team'
import Expertise from './Expertise'
import Roadmap from './Roadmap'
import Implementation from './Implementation'
import Background from './Background'
import ScrollToTop from './ScrollToTop'

import { useEffect } from 'react'

function LandingPage() {
    useEffect(() => {
        document.title = 'Fiscal AI';
    }, []);

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

export default LandingPage
