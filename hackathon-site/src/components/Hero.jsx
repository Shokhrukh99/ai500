import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="section hero-section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 4rem', paddingTop: '80px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', width: '100%', maxWidth: '1400px', alignItems: 'center' }}>

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
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
                        }}>Freedom</span>
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
                            width: '380px',
                            height: '240px',
                            background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                            backdropFilter: 'blur(20px)',
                            borderRadius: '24px',
                            border: '1px solid rgba(255,255,255,0.2)',
                            position: 'absolute',
                            top: '20%',
                            right: '10%',
                            zIndex: 1,
                            transform: 'rotate(15deg)',
                            boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                            padding: '2rem',
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
                            width: '380px',
                            height: '240px',
                            background: 'linear-gradient(135deg, var(--primary-color), #000)',
                            borderRadius: '24px',
                            border: '1px solid rgba(255,255,255,0.1)',
                            position: 'absolute',
                            top: '40%',
                            left: '10%',
                            zIndex: 2,
                            transform: 'rotate(-10deg)',
                            boxShadow: '0 30px 60px rgba(0, 242, 255, 0.2)',
                            padding: '2rem',
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
