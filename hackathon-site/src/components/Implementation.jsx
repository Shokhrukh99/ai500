import { motion } from 'framer-motion';

const Implementation = () => {
    return (
        <section className="section">
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-gradient"
                style={{ fontSize: '3rem', marginBottom: '3rem' }}
            >
                Implementation
            </motion.h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', width: '100%' }}>
                <motion.div
                    className="glass-card"
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <h3 style={{ color: 'var(--secondary-color)' }}>Tech Stack</h3>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '1rem' }}>📱 <strong>Android Client</strong>: Kotlin, SMS Permission</li>
                        <li style={{ marginBottom: '1rem' }}>⚙️ <strong>Parser</strong>: Regex for UZCARD/HUMO</li>
                        <li style={{ marginBottom: '1rem' }}>💾 <strong>Storage</strong>: Room Database (Local)</li>
                        <li style={{ marginBottom: '1rem' }}>🤖 <strong>AI Agent</strong>: On-device / Edge LLM</li>
                    </ul>
                </motion.div>

                <motion.div
                    className="glass-card"
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    style={{ fontFamily: 'monospace', fontSize: '0.9rem', background: '#000' }}
                >
                    <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56' }}></div>
                        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e' }}></div>
                        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f' }}></div>
                    </div>
                    <p style={{ color: '#c678dd' }}>fun <span style={{ color: '#61afef' }}>parseSMS</span>(body: String): Transaction &#123;</p>
                    <p style={{ paddingLeft: '1rem', color: '#abb2bf' }}>val amount = extractAmount(body)</p>
                    <p style={{ paddingLeft: '1rem', color: '#abb2bf' }}>val merchant = extractMerchant(body)</p>
                    <p style={{ paddingLeft: '1rem', color: '#e06c75' }}>return Transaction(amount, merchant)</p>
                    <p style={{ color: '#c678dd' }}>&#125;</p>
                </motion.div>
            </div>
        </section>
    );
};

export default Implementation;
