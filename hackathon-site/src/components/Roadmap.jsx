import { motion } from 'framer-motion';

const steps = [
    { phase: 'Idea', status: 'Completed', date: 'Nov 2025' },
    { phase: 'Prototype', status: 'Current Stage', date: 'Nov 30, 2025' },
    { phase: 'MVP', status: 'Planned', date: 'Dec 5, 2025' },
    { phase: 'Launch', status: 'Goal', date: 'Jan 2026' },
];

const Roadmap = () => {
    return (
        <section className="section">
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-gradient"
                style={{ fontSize: '3rem', marginBottom: '4rem' }}
            >
                Roadmap & Stage
            </motion.h2>

            <div style={{ position: 'relative', width: '100%', maxWidth: '900px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {/* Connecting Line */}
                <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: '4px', background: 'var(--glass-border)', zIndex: 0 }}></div>
                <motion.div
                    style={{ position: 'absolute', top: '50%', left: 0, height: '4px', background: 'var(--primary-color)', zIndex: 0 }}
                    initial={{ width: '0%' }}
                    whileInView={{ width: '35%' }} // Adjusted for Prototype stage
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: 'easeInOut' }}
                />

                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.3 }}
                        style={{ zIndex: 1, textAlign: 'center', position: 'relative' }}
                    >
                        <div style={{
                            width: '24px',
                            height: '24px',
                            borderRadius: '50%',
                            background: index <= 1 ? 'var(--primary-color)' : 'var(--glass-border)',
                            margin: '0 auto 1rem auto',
                            boxShadow: index === 1 ? '0 0 20px var(--primary-color)' : 'none',
                            border: index === 1 ? '4px solid rgba(0, 242, 255, 0.3)' : 'none'
                        }}></div>
                        <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1.2rem' }}>{step.phase}</h4>
                        <span style={{
                            fontSize: '0.9rem',
                            color: index === 1 ? 'var(--primary-color)' : 'rgba(255,255,255,0.5)',
                            fontWeight: index === 1 ? 'bold' : 'normal',
                            display: 'block'
                        }}>
                            {step.status}
                        </span>
                        <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)' }}>{step.date}</span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Roadmap;
