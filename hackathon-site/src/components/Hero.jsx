import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';

const Hero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const smoothScroll = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

    // y1 is removed for the first shape as requested
    const y2 = useTransform(smoothScroll, [0, 1], [0, -150]);
    const opacity = useTransform(smoothScroll, [0, 0.5], [1, 0]);

    return (
        // Removed overflow: 'hidden' to prevent clipping
        <section ref={ref} className="section hero-section" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '60px', position: 'relative' }}>

            {/* Abstract Animated Background Shapes */}
            <motion.div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, opacity }}>
                {/* First Shape - No Parallax (y1 removed) */}
                <motion.div
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                    <div style={{
                        position: 'absolute',
                        top: '15%',
                        left: '-5%',
                        width: '600px',
                        height: '600px',
                        background: 'radial-gradient(circle, rgba(0, 242, 255, 0.25) 0%, rgba(0, 0, 0, 0) 70%)',
                        borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
                        filter: 'blur(40px)',
                    }}></div>
                </motion.div>

                <motion.div
                    style={{ y: y2 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                >
                    <div style={{
                        position: 'absolute',
                        bottom: '10%',
                        right: '5%',
                        width: '600px',
                        height: '600px',
                        background: 'radial-gradient(circle, rgba(100, 100, 255, 0.2) 0%, rgba(0, 0, 0, 0) 70%)',
                        borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
                        filter: 'blur(50px)',
                    }}></div>
                </motion.div>

                <motion.div
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '800px',
                        height: '800px',
                        background: 'radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, rgba(0, 0, 0, 0) 60%)',
                        borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                        filter: 'blur(60px)',
                    }}
                ></motion.div>
            </motion.div>

            <div className="hero-grid">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="hero-content-left"
                    style={{ textAlign: 'left' }}
                >
                    <h1 style={{ fontSize: '5rem', fontWeight: '800', lineHeight: '1.1', marginBottom: '1.5rem' }}>
                        <span style={{
                            background: 'linear-gradient(to right, #ffffff, #a0a0a0)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}>Your</span> <br />
                        <span style={{ color: 'var(--primary-color)' }}>Financial</span> <br />
                        <span style={{
                            background: 'linear-gradient(to right, #ffffff, #a0a0a0)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}>Assistant</span>
                    </h1>
                    <p style={{ fontSize: '1.2rem', marginBottom: '3rem', color: 'rgba(255,255,255,0.6)', maxWidth: '500px', lineHeight: '1.6' }}>
                        Automated SMS analytics and intelligent financial insights powered by AI.
                        Track, save, and grow your wealth without lifting a finger.
                    </p>
                </motion.div>

                {/* Right Content - CSS 3D Cards */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="hero-content-right"
                    style={{ position: 'relative', height: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                    {/* Gradient Flare */}
                    <div style={{
                        position: 'absolute',
                        width: '500px',
                        height: '500px',
                        background: 'radial-gradient(circle, rgba(0, 242, 255, 0.15) 0%, rgba(0, 0, 0, 0) 70%)',
                        borderRadius: '50%',
                        zIndex: 0,
                        pointerEvents: 'none'
                    }}></div>

                    {/* Card 1 */}
                    <motion.div
                        animate={{ y: [-10, 10, -10], rotate: [0, 2, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        style={{
                            width: 'min(340px, 85vw)',
                            height: 'min(220px, 55vw)',
                            background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                            backdropFilter: 'blur(20px)',
                            borderRadius: '24px',
                            border: '1px solid rgba(255,255,255,0.2)',
                            position: 'absolute',
                            top: '15%',
                            right: '5%',
                            zIndex: 1,
                            transform: 'rotate(15deg)',
                            boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                            padding: '1.5rem',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between'
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{ width: '40px', height: '25px', background: 'rgba(255,255,255,0.8)', borderRadius: '4px' }}></div>
                            <div style={{ fontSize: '1.2rem' }}>💳</div>
                        </div>
                        <div>
                            <div style={{ fontSize: '1.2rem', letterSpacing: '2px', marginBottom: '0.5rem', fontFamily: 'monospace' }}>•••• •••• •••• 4289</div>
                            <div style={{ fontSize: '0.9rem', opacity: 0.7 }}>ALEX JOHNSON</div>
                        </div>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        animate={{ y: [10, -10, 10], rotate: [0, -2, 0] }}
                        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                        style={{
                            width: 'min(340px, 85vw)',
                            height: 'min(220px, 55vw)',
                            background: 'linear-gradient(135deg, var(--primary-color), #000)',
                            borderRadius: '24px',
                            border: '1px solid rgba(255,255,255,0.1)',
                            position: 'absolute',
                            top: '45%',
                            left: '5%',
                            zIndex: 2,
                            transform: 'rotate(-10deg)',
                            boxShadow: '0 30px 60px rgba(0, 242, 255, 0.2)',
                            padding: '1.5rem',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between'
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{ width: '40px', height: '25px', background: 'rgba(255,255,255,0.8)', borderRadius: '4px' }}></div>
                            <div style={{ fontSize: '1.2rem', color: '#fff' }}>✨</div>
                        </div>
                        <div>
                            <div style={{ fontSize: '1.2rem', letterSpacing: '2px', marginBottom: '0.5rem', fontFamily: 'monospace', color: '#fff' }}>•••• •••• •••• 8892</div>
                            <div style={{ fontSize: '0.9rem', opacity: 0.9, color: '#fff' }}>PREMIUM MEMBER</div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
