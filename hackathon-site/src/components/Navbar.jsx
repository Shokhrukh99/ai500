import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const menuVariants = {
        closed: { opacity: 0, x: "100%" },
        open: { opacity: 1, x: 0 }
    };

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
                padding: '1.5rem 2rem', // Reduced padding for mobile
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1000,
                backdropFilter: 'blur(10px)',
                background: 'rgba(0,0,0,0.2)',
                borderBottom: '1px solid rgba(255,255,255,0.05)'
            }}
        >
            <div style={{ position: 'absolute', left: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <img src={`${import.meta.env.BASE_URL}ai500-logo.png`} alt="AI500 Logo" style={{ height: '40px' }} />
            </div>

            {/* Desktop Menu */}
            <div className="desktop-menu" style={{ gap: '3rem', fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>
                <a href="#problem-solution" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.3s' }}>Problem & Solution</a>
                <a href="#team" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.3s' }}>Team</a>
                <a href="#expertise" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.3s' }}>Expertise</a>
                <a href="#roadmap" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.3s' }}>Roadmap</a>
                <a href="#implementation" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.3s' }}>Implementation</a>
            </div>

            {/* Mobile Menu Button */}
            <div className="mobile-menu-btn" style={{ position: 'absolute', right: '2rem', fontSize: '1.5rem', cursor: 'pointer', zIndex: 1001 }} onClick={toggleMenu}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="mobile-menu-overlay"
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        transition={{ duration: 0.3 }}
                    >
                        <a href="#problem-solution" onClick={toggleMenu} style={{ fontSize: '1.5rem', color: '#fff', textDecoration: 'none' }}>Problem & Solution</a>
                        <a href="#team" onClick={toggleMenu} style={{ fontSize: '1.5rem', color: '#fff', textDecoration: 'none' }}>Team</a>
                        <a href="#expertise" onClick={toggleMenu} style={{ fontSize: '1.5rem', color: '#fff', textDecoration: 'none' }}>Expertise</a>
                        <a href="#roadmap" onClick={toggleMenu} style={{ fontSize: '1.5rem', color: '#fff', textDecoration: 'none' }}>Roadmap</a>
                        <a href="#implementation" onClick={toggleMenu} style={{ fontSize: '1.5rem', color: '#fff', textDecoration: 'none' }}>Implementation</a>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
