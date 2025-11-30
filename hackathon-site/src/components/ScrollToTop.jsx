import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            // Show button when page is scrolled down 500px (past Hero)
            if (window.scrollY > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    onClick={scrollToTop}
                    style={{
                        position: 'fixed',
                        bottom: '40px',
                        right: '40px',
                        zIndex: 1000,
                        cursor: 'pointer',
                        background: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '50%',
                        width: '50px',
                        height: '50px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                    }}
                    whileHover={{
                        scale: 1.1,
                        background: 'rgba(255, 255, 255, 0.2)',
                        boxShadow: '0 0 15px var(--primary-color)'
                    }}
                    whileTap={{ scale: 0.9 }}
                >
                    <FaArrowUp style={{ color: '#fff', fontSize: '1.2rem' }} />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTop;
