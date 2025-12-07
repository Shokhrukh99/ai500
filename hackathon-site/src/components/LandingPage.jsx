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
import { useLocation } from 'react-router-dom'

function LandingPage() {
    const location = useLocation();

    useEffect(() => {
        document.title = 'Fiscal AI';

        // Handle hash link navigation from other pages
        if (location.state && location.state.targetId) {
            const element = document.getElementById(location.state.targetId);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100); // Small delay to ensure rendering
            }
            // Clear state to prevent scrolling on refresh? 
            // Actually, clearing state in history is hard without replacing. 
            // But it's fine for now.
        }
    }, [location]);

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
