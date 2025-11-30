import { motion } from 'framer-motion';
import { SiFlutter, SiPython, SiTensorflow, SiPytorch, SiSqlite } from 'react-icons/si';
import { FaBrain, FaLock, FaCode } from 'react-icons/fa';

const Implementation = () => {
    const stackItems = [
        { name: 'Flutter', icon: <SiFlutter />, desc: 'Delivers the native Android UI and handles SMS permissions.' },
        { name: 'Python', icon: <SiPython />, desc: 'Used for initial AI model training and data processing scripts.' },
        { name: 'BLoC', icon: <FaCode />, desc: 'Manages app state and connects UI to the local database.' },
        { name: 'TensorFlow', icon: <SiTensorflow />, desc: 'Runs the quantized models directly on the Android device.' },
        { name: 'PyTorch', icon: <SiPytorch />, desc: 'Fine-tunes the SLM on financial transaction datasets.' },
        { name: 'Gemma/Llama', icon: <FaBrain />, desc: 'The on-device SLM that generates insights from transaction history.' },
        { name: 'SQLite', icon: <SiSqlite />, desc: 'Stores all transaction data locally on the user\'s device.' },
        { name: 'SQLCipher', icon: <FaLock />, desc: 'Encrypts the SQLite database to ensure zero-knowledge privacy.' },
    ];

    return (
        <section id="implementation" className="section" style={{ padding: '6rem 2rem' }}>
            <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{
                    textAlign: 'center',
                    fontSize: '3.5rem',
                    marginBottom: '6rem',
                    background: 'linear-gradient(to right, #ffffff, #a0a0a0)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    letterSpacing: '-1px'
                }}
            >
                Implementation Plan
            </motion.h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '6rem', width: '100%', maxWidth: '1000px', margin: '0 auto' }}>

                {/* Execution Strategy - Vertical Roadmap Style */}
                <div style={{ position: 'relative' }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h3 style={{
                            display: 'inline-block',
                            fontSize: '2rem',
                            color: 'var(--primary-color)',
                            textTransform: 'uppercase',
                            letterSpacing: '3px',
                            borderBottom: '2px solid var(--primary-color)',
                            paddingBottom: '0.5rem'
                        }}>
                            Execution Strategy
                        </h3>
                    </div>

                    {/* Vertical Line */}
                    <div style={{
                        position: 'absolute',
                        left: '50%',
                        top: '100px',
                        bottom: '0',
                        width: '2px',
                        background: 'linear-gradient(to bottom, var(--primary-color), transparent)',
                        transform: 'translateX(-50%)'
                    }}></div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                        {[
                            { title: 'Zero-Knowledge Ingestion', desc: 'Intercept SMS in real-time. Process in RAM. Save to encrypted local DB.', phase: 'Phase 1' },
                            { title: 'Hybrid Parsing Engine', desc: 'Regex for speed (95% coverage) + SLM for complex unstructured data.', phase: 'Phase 2' },
                            { title: 'RAG & Insights', desc: 'Retrieval-Augmented Generation on local history for grounded advice.', phase: 'Phase 3' }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end',
                                    position: 'relative'
                                }}
                            >
                                {/* Center Node */}
                                <div style={{
                                    position: 'absolute',
                                    left: '50%',
                                    width: '24px',
                                    height: '24px',
                                    background: '#000',
                                    border: '4px solid var(--primary-color)',
                                    borderRadius: '50%',
                                    transform: 'translateX(-50%)',
                                    boxShadow: '0 0 20px var(--primary-color)',
                                    zIndex: 2
                                }}></div>

                                {/* Content Card */}
                                <div className="glass-card" style={{
                                    width: '40%', // Reduced width for gap
                                    padding: '2rem',
                                    textAlign: index % 2 === 0 ? 'right' : 'left',
                                    border: '1px solid rgba(255,255,255,0.05)',
                                    background: 'rgba(255, 255, 255, 0.03)',
                                    position: 'relative'
                                }}>
                                    {/* Connecting Line */}
                                    <div style={{
                                        position: 'absolute',
                                        top: '50%',
                                        [index % 2 === 0 ? 'right' : 'left']: '-20%', // Extend towards center
                                        width: '20%',
                                        height: '2px',
                                        background: 'rgba(255,255,255,0.1)',
                                        transform: 'translateY(-50%)'
                                    }}></div>

                                    <span style={{
                                        display: 'inline-block',
                                        fontSize: '0.9rem',
                                        color: 'var(--primary-color)',
                                        marginBottom: '0.8rem',
                                        fontWeight: 'bold',
                                        letterSpacing: '1px'
                                    }}>
                                        {item.phase}
                                    </span>
                                    <h4 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '0.8rem' }}>{item.title}</h4>
                                    <p style={{ fontSize: '1rem', color: '#ccc', margin: 0, lineHeight: '1.6' }}>{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* The Stack */}
                <div>
                    <div style={{ textAlign: 'center', marginBottom: '4rem', marginTop: '2rem' }}>
                        <h3 style={{
                            display: 'inline-block',
                            fontSize: '2rem',
                            color: 'var(--primary-color)',
                            textTransform: 'uppercase',
                            letterSpacing: '3px',
                            borderBottom: '2px solid var(--primary-color)',
                            paddingBottom: '0.5rem'
                        }}>
                            The Stack
                        </h3>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                        gap: '2rem'
                    }}>
                        {stackItems.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-card"
                                style={{
                                    padding: '2rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    background: 'rgba(255, 255, 255, 0.03)',
                                    border: '1px solid rgba(255,255,255,0.05)',
                                    transition: 'transform 0.3s ease'
                                }}
                                whileHover={{ y: -10, background: 'rgba(255, 255, 255, 0.05)' }}
                            >
                                <div style={{ fontSize: '3rem', color: '#fff', marginBottom: '1.5rem' }}>
                                    {item.icon}
                                </div>
                                <h4 style={{ fontSize: '1.2rem', color: 'var(--primary-color)', marginBottom: '1rem' }}>{item.name}</h4>
                                <p style={{ fontSize: '0.9rem', color: '#aaa', margin: 0, lineHeight: '1.5' }}>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Implementation;
