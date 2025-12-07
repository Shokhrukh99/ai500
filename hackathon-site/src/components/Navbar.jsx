import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsOpen(!isOpen);

    const menuVariants = {
        closed: { opacity: 0, x: "100%" },
        open: { opacity: 1, x: 0 }
    };

    const isDemo = location.pathname === '/demo';

    const landingLinks = [
        { id: 'problem-solution', label: 'Problem & Solution' },
        { id: 'team', label: 'Team' },
        { id: 'expertise', label: 'Expertise' },
        { id: 'roadmap', label: 'Roadmap' },
        { id: 'implementation', label: 'Implementation' },
    ];

    const demoLinks = [
        { id: 'features', label: 'Features' },
        { id: 'showcase', label: 'Showcase' },
        { id: 'demo-qa', label: 'Demo Q&A' },
        { id: 'next-steps', label: 'Next steps' },
    ];

    const navLinks = isDemo ? demoLinks : landingLinks;

    const NavItem = ({ item, mobile = false }) => {
        const isHome = location.pathname === '/';

        // Logic for Landing Page Links
        if (!isDemo) {
            if (isHome) {
                return (
                    <a
                        href={`#${item.id}`}
                        onClick={(e) => {
                            e.preventDefault();
                            const element = document.getElementById(item.id);
                            if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                            }
                            if (mobile) toggleMenu();
                        }}
                        style={{
                            color: mobile ? '#fff' : 'inherit',
                            textDecoration: 'none',
                            transition: 'color 0.3s',
                            fontSize: mobile ? '1.5rem' : 'inherit',
                            cursor: 'pointer'
                        }}
                    >
                        {item.label}
                    </a>
                );
            } else {
                return (
                    <Link
                        to="/"
                        state={{ targetId: item.id }}
                        onClick={mobile ? toggleMenu : undefined}
                        style={{
                            color: mobile ? '#fff' : 'inherit',
                            textDecoration: 'none',
                            transition: 'color 0.3s',
                            fontSize: mobile ? '1.5rem' : 'inherit'
                        }}
                    >
                        {item.label}
                    </Link>
                );
            }
        }

        // Logic for Demo Page Links
        // If we are on the demo page, we just scroll to the id
        return (
            <a
                href={`#${item.id}`}
                onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById(item.id);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                    }
                    if (mobile) toggleMenu();
                }}
                style={{
                    color: mobile ? '#fff' : 'inherit',
                    textDecoration: 'none',
                    transition: 'color 0.3s',
                    fontSize: mobile ? '1.5rem' : 'inherit',
                    cursor: 'pointer'
                }}
            >
                {item.label}
            </a>
        );
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
                <Link to="/">
                    <img src={`${import.meta.env.BASE_URL}ai500-logo.png`} alt="AI500 Logo" style={{ height: '40px' }} />
                </Link>
            </div>

            {/* Desktop Menu */}
            <div className="desktop-menu" style={{ gap: '3rem', fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', display: 'flex' }}>
                {navLinks.map(link => <NavItem key={link.id} item={link} />)}
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
                        {navLinks.map(link => <NavItem key={link.id} item={link} mobile />)}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
