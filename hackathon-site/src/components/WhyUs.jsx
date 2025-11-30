import { motion } from 'framer-motion';

const advantages = [
    { title: 'Highly Feasible', desc: 'MVP achievable in 3-5 days with core Android features.' },
    { title: 'Privacy First', desc: 'No bank APIs needed. All processing happens locally on device.' },
    { title: 'Scalable', desc: 'Potential white-label product for banks and fintechs.' },
];

const WhyUs = () => {
    return (
        <section className="section">
            <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-gradient"
                style={{ fontSize: '3rem', marginBottom: '3rem' }}
            >
                Why This Solution?
            </motion.h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%', maxWidth: '800px' }}>
                {advantages.map((adv, index) => (
                    <motion.div
                        key={index}
                        className="glass-card"
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                    >
                        <div>
                            <h3 style={{ color: 'var(--primary-color)' }}>{adv.title}</h3>
                            <p style={{ margin: 0 }}>{adv.desc}</p>
                        </div>
                        <div style={{ fontSize: '2rem' }}>🚀</div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default WhyUs;
