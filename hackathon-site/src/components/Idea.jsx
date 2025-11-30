import { motion } from 'framer-motion';

const Idea = () => {
    return (
        <section className="section">
            <motion.div
                className="glass-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{ maxWidth: '900px', textAlign: 'center' }}
            >
                <h2 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>The Idea</h2>
                <p style={{ fontSize: '1.2rem', marginBottom: '2rem', lineHeight: '1.8' }}>
                    A mobile <strong>Android application</strong> that—with user permission—reads incoming SMS from banks (<strong>UZCARD, HUMO</strong>, etc.), parses transaction data, categorizes expenses, and builds financial analytics dashboards.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', textAlign: 'left' }}>
                    <div>
                        <h3 style={{ color: 'var(--primary-color)' }}>📊 Analytics</h3>
                        <p>Automatically turns raw SMS logs into beautiful, categorized spending charts without manual entry.</p>
                    </div>
                    <div>
                        <h3 style={{ color: 'var(--secondary-color)' }}>🤖 AI Assistant</h3>
                        <p>An embedded AI agent answers questions like:</p>
                        <ul style={{ color: 'rgba(255,255,255,0.8)', paddingLeft: '1.2rem' }}>
                            <li>"Why did I spend more this month?"</li>
                            <li>"How can I save 5M UZS?"</li>
                        </ul>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Idea;
