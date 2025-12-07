import Navbar from './Navbar'
import Background from './Background'
import ScrollToTop from './ScrollToTop'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FaSms, FaRobot, FaChartPie, FaArrowRight, FaAndroid } from 'react-icons/fa'
import { SiFlutter, SiPython, SiSqlite, SiTensorflow } from 'react-icons/si'

const FeatureSection = ({ title, description, image, icon, align = 'left' }) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '4rem',
            marginBottom: '6rem',
            flexWrap: 'wrap',
            maxWidth: '900px',
            margin: '0 auto 6rem auto',
        }}>
            {/* Image Content */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="glass-card"
                style={{
                    padding: '1rem',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    flex: '0 0 auto',
                    order: align === 'left' ? 1 : 2,
                    maxWidth: '300px',
                    width: '100%',
                }}
            >
                <img src={image} alt={title} style={{ width: '100%', borderRadius: '12px', display: 'block' }} />
            </motion.div>

            {/* Text Content */}
            <motion.div
                initial={{ opacity: 0, x: align === 'left' ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{
                    textAlign: 'left',
                    flex: '1',
                    minWidth: '300px',
                    order: align === 'left' ? 2 : 1,
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1rem' }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minWidth: '50px',
                        height: '50px',
                        borderRadius: '12px',
                        background: 'rgba(0, 242, 255, 0.1)',
                        color: 'var(--primary-color)',
                        fontSize: '1.5rem',
                    }}>
                        {icon}
                    </div>
                    <h2 style={{
                        fontSize: '2.5rem',
                        margin: 0,
                        background: 'linear-gradient(to right, #ffffff, #a0a0a0)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        lineHeight: 1.2
                    }}>{title}</h2>
                </div>
                <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)', lineHeight: '1.6' }}>{description}</p>
            </motion.div>
        </div>
    )
}

const ChatDemo = () => {
    const [messages, setMessages] = useState([]);
    const [typing, setTyping] = useState(null); // { role: 'user', text: '' }
    const [isBotThinking, setIsBotThinking] = useState(false);

    const conversation = [
        { role: 'user', text: "How much did I spend on taxis last month?", delay: 1000 },
        { role: 'bot', text: "You spent 450,000 UZS on taxis in November. This is 15% less than in October.", delay: 2000 },
        { role: 'user', text: "Can I afford a new laptop?", delay: 1000 },
        { role: 'bot', text: "Based on your current savings rate of 2M UZS/month, you can afford a 10M UZS laptop in 5 months.", delay: 3000 }
    ];

    useEffect(() => {
        let isMounted = true;

        const runSequence = async () => {
            while (isMounted) {
                setMessages([]); // Reset
                setTyping(null);
                setIsBotThinking(false);
                await new Promise(r => setTimeout(r, 1000)); // Initial delay

                for (const turn of conversation) {
                    if (!isMounted) break;

                    if (turn.role === 'user') {
                        // User Typing Effect
                        setTyping({ role: 'user', text: '' });
                        const typeSpeed = 50;
                        for (let i = 0; i <= turn.text.length; i++) {
                            if (!isMounted) break;
                            setTyping({ role: 'user', text: turn.text.slice(0, i) });
                            await new Promise(r => setTimeout(r, typeSpeed));
                        }
                        if (!isMounted) break;
                        await new Promise(r => setTimeout(r, 500)); // Pause before sending
                        setTyping(null);
                        setMessages(prev => [...prev, { ...turn }]);
                    } else {
                        // Bot Thinking Effect
                        setIsBotThinking(true);
                        await new Promise(r => setTimeout(r, 1500)); // Thinking time
                        if (!isMounted) break;
                        setIsBotThinking(false);
                        setMessages(prev => [...prev, { ...turn }]);
                    }

                    if (!isMounted) break;
                    await new Promise(r => setTimeout(r, turn.delay)); // Read time
                }

                if (!isMounted) break;
                await new Promise(r => setTimeout(r, 2000)); // Wait before restarting
            }
        };

        runSequence();

        return () => { isMounted = false; };
    }, []);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', minHeight: '400px' }}>
            <AnimatePresence>
                {messages.map((msg, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
                    >
                        {msg.role === 'user' ? (
                            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start', gap: '1rem' }}>
                                <div className="glass-card" style={{ padding: '1rem 1.5rem', borderRadius: '20px 20px 0 20px', maxWidth: '80%', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)' }}>
                                    <p style={{ fontSize: '1rem', fontWeight: 'bold', margin: 0, color: '#fff' }}>"{msg.text}"</p>
                                </div>
                                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '0.9rem', border: '1px solid rgba(255,255,255,0.2)', flexShrink: 0 }}>User</div>
                            </div>
                        ) : (
                            <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '1rem' }}>
                                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(0, 242, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-color)', fontSize: '1.2rem', border: '1px solid var(--primary-color)', flexShrink: 0 }}><FaRobot /></div>
                                <div className="glass-card" style={{ padding: '1.5rem', borderRadius: '0 20px 20px 20px', maxWidth: '80%', border: '1px solid var(--primary-color)', boxShadow: '0 0 20px rgba(0, 242, 255, 0.1)', background: 'rgba(0, 242, 255, 0.05)' }}>
                                    <p style={{ fontSize: '1rem', margin: 0, color: 'rgba(255,255,255,0.9)' }}>"{msg.text}"</p>
                                </div>
                            </div>
                        )}
                    </motion.div>
                ))}
            </AnimatePresence>

            {/* Typing Indicator (User) */}
            {typing && typing.role === 'user' && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start', gap: '1rem' }}
                >
                    <div className="glass-card" style={{ padding: '1rem 1.5rem', borderRadius: '20px 20px 0 20px', maxWidth: '80%', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)' }}>
                        <p style={{ fontSize: '1rem', fontWeight: 'bold', margin: 0, color: '#fff' }}>"{typing.text}<span className="animate-pulse">|</span>"</p>
                    </div>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '0.9rem', border: '1px solid rgba(255,255,255,0.2)', flexShrink: 0 }}>User</div>
                </motion.div>
            )}

            {/* Thinking Indicator (Bot) */}
            {isBotThinking && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '1rem' }}
                >
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(0, 242, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-color)', fontSize: '1.2rem', border: '1px solid var(--primary-color)', flexShrink: 0 }}><FaRobot /></div>
                    <div className="glass-card" style={{ padding: '1rem 1.5rem', borderRadius: '0 20px 20px 20px', border: '1px solid var(--primary-color)', background: 'rgba(0, 242, 255, 0.05)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} style={{ width: '6px', height: '6px', background: 'var(--primary-color)', borderRadius: '50%' }} />
                        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} style={{ width: '6px', height: '6px', background: 'var(--primary-color)', borderRadius: '50%' }} />
                        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} style={{ width: '6px', height: '6px', background: 'var(--primary-color)', borderRadius: '50%' }} />
                    </div>
                </motion.div>
            )}
        </div>
    )
}

function DemoPage() {
    useEffect(() => {
        document.title = 'Fiscal AI Demo';
    }, []);

    return (
        <div className="app-container">
            <Navbar />
            <ScrollToTop />
            <Background />

            <div className="section" style={{ paddingTop: '8rem', minHeight: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                {/* 1. Title */}
                <h1 style={{ fontSize: '5rem', fontWeight: '800', lineHeight: '1.1', marginBottom: '6rem', textAlign: 'center' }}>
                    <span style={{
                        background: 'linear-gradient(to right, #ffffff, #a0a0a0)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>Fiscal AI</span> <span style={{ color: 'var(--primary-color)' }}>Demo</span>
                </h1>

                {/* 2. Features */}
                <div id="features" style={{ width: '100%', maxWidth: '1200px' }}>
                    <FeatureSection
                        title="SMS Retrieval"
                        description="Automatically captures and parses transaction SMS messages from UZCARD and HUMO, eliminating the need for manual data entry."
                        image={`${import.meta.env.BASE_URL}images/feature-sms.jpg`}
                        icon={<FaSms />}
                        align="left"
                    />
                    <FeatureSection
                        title="AI Categorizer"
                        description="Intelligent algorithms instantly categorize every transaction into relevant groups like Food, Transport, or Utilities with high accuracy."
                        image={`${import.meta.env.BASE_URL}images/feature-categorizer.jpg`}
                        icon={<FaRobot />}
                        align="right"
                    />
                    <FeatureSection
                        title="Intuitive Analytics"
                        description="Visualize your spending habits with simple, easy-to-understand charts and graphs that show exactly where your money goes."
                        image={`${import.meta.env.BASE_URL}images/feature-analytics.jpg`}
                        icon={<FaChartPie />}
                        align="left"
                    />
                    <FeatureSection
                        title="AI Financial Chatbot"
                        description="Ask any financial question and get instant, personalized answers based on your unique spending data and goals."
                        image={`${import.meta.env.BASE_URL}images/feature-chatbot.jpg`}
                        icon={<FaRobot />}
                        align="right"
                    />
                </div>

                {/* 3. Video & Project Details Section */}
                <div id="showcase" style={{ width: '100%', maxWidth: '1200px', marginBottom: '6rem' }}>
                    <h2 style={{
                        fontSize: '3rem',
                        marginBottom: '3rem',
                        textAlign: 'center',
                        background: 'linear-gradient(to right, #ffffff, #a0a0a0)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        display: 'block'
                    }}>See it in Action</h2>

                    {/* MAIN CONTAINER */}
                    <div className="glass-card" style={{ padding: '3rem' }}>
                        <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            alignItems: 'stretch', // Stretch to match heights
                            gap: '4rem',
                            justifyContent: 'center'
                        }}>
                            {/* LEFT COLUMN: Video */}
                            <div style={{
                                flex: '0 0 auto',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center', // Center video vertically if column is taller
                                width: '400px'
                            }}>
                                {/* Video */}
                                <div style={{
                                    width: '100%',
                                    aspectRatio: '9/19',
                                    background: '#000',
                                    borderRadius: '20px',
                                    overflow: 'hidden',
                                    border: '4px solid #333',
                                    boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
                                }}>
                                    <video
                                        src={`${import.meta.env.BASE_URL}demo-video.mp4`}
                                        controls
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    >
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>

                            {/* RIGHT COLUMN: Project Details */}
                            <div style={{
                                flex: '1 1 400px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1.5rem',
                                justifyContent: 'center', // Center content vertically against video
                                textAlign: 'left'
                            }}>
                                {/* 1. About */}
                                <div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                        <h3 style={{ margin: 0, fontSize: '1.8rem', color: '#fff' }}>About</h3>
                                    </div>
                                    <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.8)', lineHeight: '1.6', margin: 0 }}>
                                        This demo showcases the <strong>Fiscal AI mobile application</strong>. It parses SMS messages to automatically track expenses and uses an AI assistant to answer financial queries in natural language.
                                    </p>
                                </div>

                                {/* Divider */}
                                <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)', width: '100%' }}></div>

                                {/* 2. Problem & Solution */}
                                <div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                        <h3 style={{ margin: 0, fontSize: '1.5rem', color: '#fff' }}>Problem & Solution</h3>
                                    </div>
                                    <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.8)', lineHeight: '1.6', margin: 0 }}>
                                        Manual expense tracking is tedious. Fiscal AI solves this by bridging the gap between raw transaction data and financial clarity using AI.
                                    </p>
                                </div>

                                {/* Divider */}
                                <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)', width: '100%' }}></div>

                                {/* 3. Stack (Icons) */}
                                <div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                        <h3 style={{ margin: 0, fontSize: '1.5rem', color: '#fff' }}>Tech Stack</h3>
                                    </div>
                                    <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.8rem' }}>
                                            <SiFlutter style={{ fontSize: '3rem', color: '#fff' }} />
                                            <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>Flutter</span>
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.8rem' }}>
                                            <SiPython style={{ fontSize: '3rem', color: '#fff' }} />
                                            <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>Python</span>
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.8rem' }}>
                                            <SiSqlite style={{ fontSize: '3rem', color: '#fff' }} />
                                            <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>SQLite</span>
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.8rem' }}>
                                            <SiTensorflow style={{ fontSize: '3rem', color: '#fff' }} />
                                            <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>TensorFlow</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)', width: '100%' }}></div>

                                {/* 4. Stage */}
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <h3 style={{ margin: 0, fontSize: '1.5rem', color: '#fff' }}>Current Stage</h3>
                                    </div>
                                    <div style={{
                                        background: 'rgba(0, 242, 255, 0.1)',
                                        border: '1px solid var(--primary-color)',
                                        color: 'var(--primary-color)',
                                        padding: '0.5rem 1.5rem',
                                        borderRadius: '50px',
                                        fontWeight: 'bold',
                                        fontSize: '1.1rem',
                                        letterSpacing: '1px',
                                        boxShadow: '0 0 15px rgba(0, 242, 255, 0.2)'
                                    }}>
                                        PROTOTYPE
                                    </div>
                                </div>

                                {/* Divider */}
                                <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)', width: '100%' }}></div>

                                {/* 5. Demo Build */}
                                <div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                        <h3 style={{ margin: 0, fontSize: '1.5rem', color: '#fff' }}>Try it Yourself</h3>
                                    </div>

                                    <a
                                        href={`${import.meta.env.BASE_URL}Fiscal-release.apk`}
                                        download
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: '1rem',
                                            background: 'linear-gradient(45deg, var(--primary-color), var(--secondary-color))',
                                            color: '#fff',
                                            padding: '1rem 2rem',
                                            borderRadius: '12px',
                                            textDecoration: 'none',
                                            fontWeight: 'bold',
                                            fontSize: '1.2rem',
                                            boxShadow: '0 10px 20px rgba(0, 242, 255, 0.3)',
                                            transition: 'transform 0.2s',
                                            marginBottom: '1.5rem'
                                        }}
                                        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                    >
                                        <FaAndroid style={{ fontSize: '1.5rem' }} />
                                        Download APK (v0.1)
                                    </a>

                                    <div style={{
                                        background: 'rgba(255, 165, 0, 0.1)',
                                        border: '1px solid rgba(255, 165, 0, 0.3)',
                                        borderRadius: '12px',
                                        padding: '1rem',
                                        display: 'flex',
                                        gap: '1rem',
                                        alignItems: 'flex-start'
                                    }}>
                                        <div style={{ color: 'orange', fontSize: '1.2rem', marginTop: '2px' }}>⚠️</div>
                                        <div>
                                            <p style={{ margin: '0 0 0.5rem 0', color: 'orange', fontWeight: 'bold', fontSize: '0.9rem' }}>Installation Note</p>
                                            <p style={{ margin: 0, fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)', lineHeight: '1.4' }}>
                                                Since this is a prototype not on the Play Store, you may need to <strong>disable Play Protect</strong> or allow <strong>"Install from Unknown Sources"</strong> in your settings to install it.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* SEPARATE Q&A SECTION */}
                    <div id="demo-qa" style={{ marginTop: '4rem', width: '100%', maxWidth: '800px', margin: '4rem auto 0 auto' }}>
                        <h3 style={{
                            fontSize: '2.5rem',
                            textAlign: 'center',
                            marginBottom: '3rem',
                            background: 'linear-gradient(to right, #ffffff, #a0a0a0)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}>Demo Q&A</h3>
                        <ChatDemo />
                    </div>
                </div>

                {/* 4. Next Steps Section */}
                <div id="next-steps" style={{ width: '100%', maxWidth: '1000px', marginBottom: '6rem' }}>
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
                            Next Steps
                        </h3>
                    </div>

                    <div style={{ position: 'relative' }}>
                        {/* Vertical Line */}
                        <div className="implementation-timeline-line" style={{
                            position: 'absolute',
                            left: '50%',
                            top: '0',
                            bottom: '0',
                            width: '2px',
                            background: 'linear-gradient(to bottom, var(--primary-color), transparent)',
                            transform: 'translateX(-50%)'
                        }}></div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                            {[
                                { title: 'Improve Edge LLM', desc: 'Optimizing the on-device model for faster inference and lower latency.', phase: 'Step 1' },
                                { title: 'Improve Analytics for Income', desc: 'Adding detailed breakdown and visualization for income sources.', phase: 'Step 2' },
                                { title: 'Improve UI', desc: 'Refining the user interface for a smoother and more intuitive experience.', phase: 'Step 3' }
                            ].map((item, index, arr) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                    className="implementation-timeline-item"
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end',
                                        position: 'relative'
                                    }}
                                >
                                    {/* Mobile Connecting Lines */}
                                    <div className="mobile-timeline-line-wrapper">
                                        {index > 0 && (
                                            <div className="mobile-timeline-line top" style={{
                                                position: 'absolute',
                                                left: '50%',
                                                top: '-2rem',
                                                height: '6rem',
                                                width: '2px',
                                                background: 'linear-gradient(to bottom, var(--primary-color), var(--primary-color))',
                                                transform: 'translateX(-50%)',
                                                zIndex: 1
                                            }}></div>
                                        )}
                                        {index < arr.length - 1 && (
                                            <div className="mobile-timeline-line bottom" style={{
                                                position: 'absolute',
                                                left: '50%',
                                                top: '3.75rem',
                                                height: 'calc(100% - 3.75rem + 2rem)',
                                                width: '2px',
                                                background: 'linear-gradient(to bottom, var(--primary-color), var(--primary-color))',
                                                transform: 'translateX(-50%)',
                                                zIndex: 1
                                            }}></div>
                                        )}
                                    </div>

                                    {/* Center Node */}
                                    <div className="implementation-timeline-node" style={{
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
                                    <div className="glass-card implementation-timeline-card" style={{
                                        width: '40%',
                                        padding: '2rem',
                                        textAlign: index % 2 === 0 ? 'right' : 'left',
                                        border: '1px solid rgba(255,255,255,0.05)',
                                        background: 'rgba(255, 255, 255, 0.03)',
                                        position: 'relative'
                                    }}>
                                        {/* Connecting Line */}
                                        <div className="implementation-connector" style={{
                                            position: 'absolute',
                                            top: '50%',
                                            [index % 2 === 0 ? 'right' : 'left']: '-20%',
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
                </div>

            </div>
        </div>
    )
}

export default DemoPage
