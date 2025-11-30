import { motion } from 'framer-motion';

const Navbar = () => {
    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                padding: '1.5rem 4rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1000,
                backdropFilter: 'blur(10px)',
                background: 'rgba(0,0,0,0.2)',
                borderBottom: '1px solid rgba(255,255,255,0.05)'
            }}
        >
            <div style={{ position: 'absolute', left: '4rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <img src={`${import.meta.env.BASE_URL}ai500-logo.png`} alt="AI500 Logo" style={{ height: '40px' }} />
            </div>

            <div style={{ display: 'flex', gap: '3rem', fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>
                <a href="#problem-solution" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.3s' }}>Problem & Solution</a>
                <a href="#team" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.3s' }}>Team</a>
                <a href="#expertise" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.3s' }}>Expertise</a>
                <a href="#roadmap" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.3s' }}>Roadmap</a>
                <a href="#implementation" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.3s' }}>Implementation</a>
            </div>
        </motion.nav>
    );
};

export default Navbar;
