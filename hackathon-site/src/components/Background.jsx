import { motion, useScroll, useTransform } from 'framer-motion';

const Background = () => {
    const { scrollYProgress } = useScroll();

    // Interpolate background color based on scroll position
    // 0 -> Start (Dark/Black)
    // 0.2 -> Problem (Dark Blue-ish)
    // 0.5 -> Solution (Dark Purple-ish)
    // 0.8 -> Team/Roadmap (Dark Teal-ish)
    // 1 -> End (Black)
    const backgroundColor = useTransform(
        scrollYProgress,
        [0, 0.2, 0.5, 0.8, 1],
        ["#0a0a0a", "#0d1117", "#160d1c", "#0d1c1c", "#0a0a0a"]
    );

    return (
        <motion.div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor,
                zIndex: -2,
                pointerEvents: 'none'
            }}
        />
    );
};

export default Background;
