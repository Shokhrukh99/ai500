import { motion } from 'framer-motion';

const ProblemSolution = () => {
    const gradientStyle = {
        background: 'linear-gradient(to right, #ffffff, #a0a0a0)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontSize: '2.5rem',
        marginBottom: '2rem',
        display: 'inline-block'
    };

    const cardStyle = {
        background: 'rgba(255, 255, 255, 0.03)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        borderRadius: '16px',
        padding: '1.5rem',
        marginBottom: '1rem',
        display: 'flex',
        alignItems: 'flex-start',
        gap: '1rem'
    };

    const iconStyle = {
        fontSize: '1.5rem',
        minWidth: '40px',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(255,255,255,0.1)',
        borderRadius: '8px'
    };

    // CSS 3D Graphic for Problem (Chaos/Manual)
    const ProblemGraphic = () => (
        <div style={{ position: 'relative', width: '100%', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <motion.div
                animate={{ rotate: [0, 5, -5, 0], y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                style={{
                    width: '300px',
                    height: '400px',
                    background: 'rgba(255, 50, 50, 0.05)',
                    border: '1px solid rgba(255, 50, 50, 0.2)',
                    borderRadius: '20px',
                    position: 'absolute',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backdropFilter: 'blur(5px)'
                }}
            >
                <div style={{ fontSize: '4rem', opacity: 0.5 }}>📝</div>
                <div style={{ marginTop: '1rem', fontSize: '1.2rem', color: 'rgba(255,100,100,0.8)' }}>Manual Entry</div>
                <div style={{ width: '80%', height: '2px', background: 'rgba(255,50,50,0.3)', margin: '1rem 0' }}></div>
                <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.4)' }}>Forgot receipt...</div>
                <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.4)' }}>Lost track...</div>
            </motion.div>
            <motion.div
                animate={{ x: [-20, 20, -20], rotate: [10, -10, 10] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                style={{
                    width: '150px',
                    height: '150px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '50%',
                    position: 'absolute',
                    top: '10%',
                    right: '10%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '3rem'
                }}
            >
                ❓
            </motion.div>
        </div>
    );

    // CSS 3D Graphic for Solution (AI/Automated)
    const SolutionGraphic = () => (
        <div style={{ position: 'relative', width: '100%', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <motion.div
                animate={{ scale: [1, 1.05, 1], boxShadow: ['0 0 20px rgba(0,242,255,0.2)', '0 0 40px rgba(0,242,255,0.4)', '0 0 20px rgba(0,242,255,0.2)'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                style={{
                    width: '300px',
                    height: '300px',
                    background: 'rgba(0, 242, 255, 0.05)',
                    border: '1px solid var(--primary-color)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative'
                }}
            >
                <div style={{ fontSize: '5rem' }}>🤖</div>
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                        borderTop: '2px solid var(--primary-color)',
                        borderRight: '2px solid transparent',
                        borderBottom: '2px solid transparent',
                        borderLeft: '2px solid transparent',
                    }}
                />
            </motion.div>
            <motion.div
                animate={{ y: [20, -20, 20] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{
                    position: 'absolute',
                    bottom: '10%',
                    right: '10%',
                    padding: '1rem',
                    background: 'rgba(0,0,0,0.8)',
                    border: '1px solid var(--primary-color)',
                    borderRadius: '12px',
                    fontSize: '0.9rem'
                }}
            >
                "Save 5M UZS?"
            </motion.div>
        </div>
    );

    return (
        <section id="problem-solution" className="section" style={{ padding: '4rem 4rem' }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '8rem' }}>

                {/* Row 1: Problem (Left) + Graphic (Right) */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 style={gradientStyle}>The Problem</h2>

                        <div style={cardStyle}>
                            <div style={iconStyle}>📝</div>
                            <div>
                                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#fff' }}>Manual Tracking is Painful</h3>
                                <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)', lineHeight: '1.6' }}>
                                    Most people struggle to track their daily expenses because manual entry is tedious and often forgotten.
                                </p>
                            </div>
                        </div>

                        <div style={cardStyle}>
                            <div style={iconStyle}>🔌</div>
                            <div>
                                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#fff' }}>Lack of Integration</h3>
                                <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)', lineHeight: '1.6' }}>
                                    In our region (Uzbekistan), direct bank API integrations for personal finance apps are limited or non-existent.
                                </p>
                            </div>
                        </div>

                        <div style={cardStyle}>
                            <div style={iconStyle}>📊</div>
                            <div>
                                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#fff' }}>No Insights</h3>
                                <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)', lineHeight: '1.6' }}>
                                    Users see transaction logs but lack actionable intelligence on <em>how</em> to save money or <em>why</em> they are overspending.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <ProblemGraphic />
                    </motion.div>
                </div>

                {/* Row 2: Graphic (Left) + Solution (Right) */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <SolutionGraphic />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h2 style={gradientStyle}>Our Solution</h2>

                        <div style={{ ...cardStyle, border: '1px solid var(--primary-color)', background: 'rgba(0, 242, 255, 0.05)' }}>
                            <div style={{ ...iconStyle, background: 'rgba(0, 242, 255, 0.2)', color: 'var(--primary-color)' }}>🤖</div>
                            <div>
                                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#fff' }}>Automated SMS Parsing</h3>
                                <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)', lineHeight: '1.6' }}>
                                    Our Android app reads incoming SMS alerts from <strong>UZCARD</strong> and <strong>HUMO</strong> to automatically log and categorize transactions locally.
                                </p>
                            </div>
                        </div>

                        <div style={{ ...cardStyle, border: '1px solid var(--primary-color)', background: 'rgba(0, 242, 255, 0.05)' }}>
                            <div style={{ ...iconStyle, background: 'rgba(0, 242, 255, 0.2)', color: 'var(--primary-color)' }}>🔒</div>
                            <div>
                                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#fff' }}>Privacy-First Analytics</h3>
                                <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)', lineHeight: '1.6' }}>
                                    All data processing happens on-device. No sensitive financial data is sent to external servers.
                                </p>
                            </div>
                        </div>

                        <div style={{ ...cardStyle, border: '1px solid var(--primary-color)', background: 'rgba(0, 242, 255, 0.05)' }}>
                            <div style={{ ...iconStyle, background: 'rgba(0, 242, 255, 0.2)', color: 'var(--primary-color)' }}>🧠</div>
                            <div>
                                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#fff' }}>AI Financial Assistant</h3>
                                <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)', lineHeight: '1.6' }}>
                                    An embedded AI agent analyzes your spending patterns to answer questions like <em>"How can I save 5M UZS?"</em> and provide personalized budget advice.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ProblemSolution;
