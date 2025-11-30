import { motion } from 'framer-motion';
import { FaFlagCheckered } from 'react-icons/fa';

const steps = [
    { phase: 'Idea', status: 'Completed', date: 'Nov, 2025' },
    { phase: 'Architecture design', status: 'Completed', date: 'Nov, 2025' },
    { phase: 'Messages parser', status: 'Current Stage', date: 'Dec, 2025' },
    { phase: 'LLM development', status: 'Planned', date: 'Dec, 2025' },
    { phase: 'Edge LLM', status: 'Planned', date: 'Dec, 2025' },
    { phase: 'Frontend', status: 'Planned', date: 'Dec, 2025' },
    { phase: 'Prototype', status: 'Planned', date: 'Dec, 2025' },
    { phase: 'Polishing', status: 'Planned', date: 'Dec, 2025' },
    { phase: 'MVP', status: 'Goal', date: 'Dec, 2025' },
];

const Roadmap = () => {
    // Configuration for the snake layout
    // Using percentages for responsive alignment
    const xPositions = [15, 50, 85]; // Left, Center, Right (%)
    const yPositions = [13, 50, 87]; // Row 1, Row 2, Row 3 (%) - Balanced spacing

    const getCoordinates = (index) => {
        let x, y;
        if (index < 3) {
            x = xPositions[index];
            y = yPositions[0];
        } else if (index < 6) {
            x = xPositions[2 - (index - 3)];
            y = yPositions[1];
        } else {
            x = xPositions[index - 6];
            y = yPositions[2];
        }
        return { x: `${x}%`, y: `${y}%` };
    };

    return (
        <section id="roadmap" className="section" style={{ padding: '6rem 0', overflow: 'hidden' }}>
            <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{
                    textAlign: 'center',
                    fontSize: '2.5rem',
                    marginBottom: '6rem', // Increased from 4rem
                    background: 'linear-gradient(to right, #ffffff, #a0a0a0)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                }}
            >
                Roadmap & Stage
            </motion.h2>

            {/* Desktop View */}
            <div className="desktop-roadmap" style={{ position: 'relative', maxWidth: '1000px', margin: '0 auto', padding: '0 2rem', aspectRatio: '1000/750', width: '100%' }}>
                {/* SVG Curved Path */}
                <svg
                    viewBox="0 0 1000 750"
                    preserveAspectRatio="xMidYMid meet"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        overflow: 'visible',
                        zIndex: 0
                    }}
                >
                    {/* Background Path (Grey) */}
                    <motion.path
                        d={`M 20 100 
                           L 980 100 
                           C 1100 100 1100 375 980 375 
                           L 20 375 
                           C -100 375 -100 650 20 650 
                           L 980 650`}
                        fill="transparent"
                        stroke="var(--glass-border)"
                        strokeWidth="4"
                        strokeLinecap="round"
                    />
                    {/* Animated Progress Path (Primary Color) */}
                    <motion.path
                        d={`M 20 100 
                           L 980 100 
                           C 1100 100 1100 375 980 375 
                           L 20 375 
                           C -100 375 -100 650 20 650 
                           L 980 650`}
                        fill="transparent"
                        stroke="var(--primary-color)"
                        strokeWidth="4"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 0.26 }} // Adjusted to stop exactly at the 3rd node (Messages parser)
                        viewport={{ once: true }}
                        transition={{ duration: 2.5, ease: "easeInOut" }}
                    />
                </svg>

                {/* Stages */}
                {steps.map((step, index) => {
                    const { x, y } = getCoordinates(index);

                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            style={{
                                position: 'absolute',
                                top: y,
                                left: x,
                                transform: 'translate(-50%, -50%)',
                                zIndex: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                width: '200px',
                            }}
                        >
                            {/* Node Circle */}
                            <div style={{
                                width: '24px',
                                height: '24px',
                                borderRadius: '50%',
                                background: index <= 2 ? 'var(--primary-color)' : '#1a1a1a',
                                border: index === 2 ? '4px solid rgba(0, 242, 255, 0.3)' : '2px solid #444',
                                boxShadow: index === 2 ? '0 0 20px var(--primary-color)' : 'none',
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                zIndex: 2
                            }}>
                                {index === steps.length - 1 && (
                                    <FaFlagCheckered style={{
                                        position: 'absolute',
                                        top: '-35px',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        color: '#fff',
                                        fontSize: '1.8rem'
                                    }} />
                                )}
                            </div>

                            {/* Content Card */}
                            <div
                                className="glass-card"
                                style={{
                                    padding: '1.5rem',
                                    width: '100%',
                                    position: 'absolute',
                                    bottom: '50px', // Position above the node
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    textAlign: 'center',
                                    border: index === 2 ? '1px solid var(--primary-color)' : '1px solid rgba(255,255,255,0.05)',
                                    background: 'rgba(255, 255, 255, 0.03)', // Lighter glass background
                                    backdropFilter: 'blur(10px)',
                                    borderRadius: '15px'
                                }}
                            >
                                <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: '#fff', width: '100%' }}>{step.phase}</h4>
                                <span style={{
                                    fontSize: '0.75rem',
                                    color: index === 2 ? 'var(--primary-color)' : 'rgba(255,255,255,0.6)',
                                    fontWeight: index === 2 ? 'bold' : 'normal',
                                    display: 'block',
                                    marginBottom: '0.3rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px',
                                    width: '100%'
                                }}>
                                    {step.status}
                                </span>
                                <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', width: '100%' }}>{step.date}</span>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Mobile View */}
            <div className="mobile-roadmap" style={{ maxWidth: '400px', margin: '0 auto', padding: '0 1rem' }}>
                <div style={{ position: 'relative', paddingLeft: '0.5rem', paddingBottom: '2rem' }}>
                    {steps.map((step, index) => {
                        const isLast = index === steps.length - 1;
                        const isCompleted = index < 2; // 0 and 1 are fully completed, line to next is active

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                style={{
                                    marginBottom: '1.5rem', // Reverted gap
                                    position: 'relative',
                                    marginLeft: '2.5rem',
                                    zIndex: index // Ensure later items (dots) cover earlier items (lines)
                                }}
                            >
                                {/* Connecting Line */}
                                {!isLast && (
                                    <div style={{
                                        position: 'absolute',
                                        left: '-1.5rem',
                                        top: '1.5rem',
                                        bottom: '-1.5rem', // Reverted extension
                                        width: '2px',
                                        height: 'calc(100% + 1.5rem)', // Reverted height
                                        background: isCompleted ? 'var(--primary-color)' : 'var(--glass-border)',
                                        transform: 'translateX(-50%)',
                                        zIndex: -1 // Behind the dot of the current item
                                    }} />
                                )}

                                {/* Node Circle */}
                                <div style={{
                                    position: 'absolute',
                                    left: '-1.5rem',
                                    top: '1.5rem',
                                    transform: 'translate(-50%, -50%)',
                                    width: '24px',
                                    height: '24px',
                                    borderRadius: '50%',
                                    background: index <= 2 ? 'var(--primary-color)' : '#1a1a1a',
                                    border: index === 2 ? '3px solid rgba(0, 242, 255, 0.3)' : '2px solid #444',
                                    boxShadow: index === 2 ? '0 0 15px var(--primary-color)' : 'none',
                                    zIndex: 2
                                }}></div>

                                <div className="glass-card" style={{
                                    padding: '1rem',
                                    border: index === 2 ? '1px solid var(--primary-color)' : '1px solid rgba(255,255,255,0.05)',
                                    background: index === 2 ? 'rgba(0, 242, 255, 0.05)' : 'rgba(255, 255, 255, 0.03)'
                                }}>
                                    <h4 style={{ fontSize: '1rem', marginBottom: '0.25rem', color: '#fff' }}>{step.phase}</h4>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <span style={{
                                            fontSize: '0.75rem',
                                            color: index === 2 ? 'var(--primary-color)' : 'rgba(255,255,255,0.6)',
                                            fontWeight: index === 2 ? 'bold' : 'normal',
                                            textTransform: 'uppercase',
                                            letterSpacing: '1px'
                                        }}>
                                            {step.status}
                                        </span>
                                        <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)' }}>{step.date}</span>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Roadmap;
