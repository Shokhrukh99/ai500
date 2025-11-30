import { motion } from 'framer-motion';

const HowWeSolveIt = () => {
    return (
        <section className="section">
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-gradient"
                style={{ fontSize: '3rem', marginBottom: '3rem' }}
            >
                How We Solve It
            </motion.h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', width: '100%' }}>
                <motion.div
                    className="glass-card"
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <h3 style={{ color: 'var(--secondary-color)', marginBottom: '1.5rem' }}>Technical Approach</h3>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center' }}>
                            <span style={{ fontSize: '1.5rem', marginRight: '1rem' }}>📱</span>
                            <div>
                                <strong>Android Native</strong>
                                <p style={{ margin: 0, fontSize: '0.9rem', color: '#ccc' }}>Kotlin + Jetpack Compose for a smooth, performant UI.</p>
                            </div>
                        </li>
                        <li style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center' }}>
                            <span style={{ fontSize: '1.5rem', marginRight: '1rem' }}>📩</span>
                            <div>
                                <strong>SMS Parser Engine</strong>
                                <p style={{ margin: 0, fontSize: '0.9rem', color: '#ccc' }}>Regex-based local parsing for UZCARD & HUMO formats.</p>
                            </div>
                        </li>
                        <li style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center' }}>
                            <span style={{ fontSize: '1.5rem', marginRight: '1rem' }}>🔒</span>
                            <div>
                                <strong>Local Storage</strong>
                                <p style={{ margin: 0, fontSize: '0.9rem', color: '#ccc' }}>Room Database (SQLite) ensures data never leaves the device.</p>
                            </div>
                        </li>
                    </ul>
                </motion.div>

                <motion.div
                    className="glass-card"
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <h3 style={{ color: 'var(--primary-color)', marginBottom: '1.5rem' }}>AI Integration</h3>
                    <p style={{ marginBottom: '1.5rem' }}>
                        We use an <strong>on-device / edge-optimized LLM</strong> to process transaction history and generate insights.
                    </p>
                    <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
                        <p style={{ color: '#ccc', fontStyle: 'italic', marginBottom: '0.5rem' }}>User: "How can I save for a car?"</p>
                        <p style={{ color: 'var(--primary-color)' }}>
                            <strong>AI Agent:</strong> "Based on your spending, you spend 1.2M UZS on dining out monthly. Reducing this by 30% would save you 4.3M UZS annually..."
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HowWeSolveIt;
