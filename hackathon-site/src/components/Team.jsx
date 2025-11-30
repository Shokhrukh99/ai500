import { motion } from 'framer-motion';
import { FaPython, FaReact, FaNodeJs, FaJava, FaDatabase } from 'react-icons/fa';
import { SiTensorflow, SiPytorch, SiScikitlearn, SiMongodb, SiFlutter, SiApachehadoop, SiStreamlit, SiRuby } from 'react-icons/si';

const teamMembers = [
    // Row 1
    {
        name: 'Dilshod Ibragimov',
        role: 'ML Developer',
        profileUrl: 'https://www.linkedin.com/in/dilshod-ibragimov-217163b4/?originalSubdomain=be',
        imageUrl: `${import.meta.env.BASE_URL}team/dilshod.png`,
        stack: [
            { icon: <SiPytorch />, name: 'PyTorch' },
            { icon: <SiTensorflow />, name: 'TensorFlow' },
            { icon: <SiScikitlearn />, name: 'Scikit-learn' },
            { icon: <SiApachehadoop />, name: 'Hadoop' }
        ]
    },
    {
        name: 'Shokhrukh Sultanov',
        role: 'Team Lead',
        profileUrl: 'https://github.com/Shokhrukh99',
        imageUrl: 'https://avatars.githubusercontent.com/u/32006946?v=4',
        stack: [
            { icon: <SiFlutter />, name: 'Flutter' },
            { icon: <SiMongodb />, name: 'MongoDB' },
            { icon: <SiTensorflow />, name: 'TensorFlow' },
            { icon: <SiPytorch />, name: 'PyTorch' }
        ]
    },
    {
        name: 'Mukhammadmuso Abduzhabbarov',
        role: 'ML Developer',
        profileUrl: 'https://www.linkedin.com/in/mukhammadmuso-abduzhabbarov/',
        imageUrl: `${import.meta.env.BASE_URL}team/mukhammadmuso.png`,
        stack: [
            { icon: <SiPytorch />, name: 'PyTorch' },
            { icon: <SiTensorflow />, name: 'TensorFlow' },
            { icon: <SiScikitlearn />, name: 'Scikit-learn' },
            { icon: <SiStreamlit />, name: 'Streamlit' }
        ]
    },
    // Row 2
    {
        name: 'Said Abduvaliyev',
        role: 'Full-Stack Developer',
        profileUrl: 'https://www.linkedin.com/in/saidbek/',
        imageUrl: `${import.meta.env.BASE_URL}team/said.png`,
        stack: [
            { icon: <SiRuby />, name: 'Ruby' },
            { icon: <FaJava />, name: 'Java' },
            { icon: <FaNodeJs />, name: 'Node.js' },
            { icon: <FaPython />, name: 'Python' }
        ]
    },
    {
        name: 'Pooja Pooja',
        role: 'ML Developer',
        profileUrl: 'https://www.linkedin.com/in/p-b28802262/',
        imageUrl: 'https://ui-avatars.com/api/?name=Pooja+Pooja&background=random&size=200', // Placeholder
        stack: [
            { icon: <SiPytorch />, name: 'PyTorch' },
            { icon: <SiTensorflow />, name: 'TensorFlow' },
            { icon: <SiScikitlearn />, name: 'Scikit-learn' },
            { icon: <SiStreamlit />, name: 'Streamlit' }
        ]
    }
];

const Team = () => {
    const gradientStyle = {
        background: 'linear-gradient(to right, #ffffff, #a0a0a0)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontSize: '2.5rem',
        marginBottom: '3rem',
        display: 'inline-block'
    };

    const cardStyle = {
        textAlign: 'center',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '280px', // Fixed width for consistency
        height: '100%'
    };

    return (
        <section id="team" className="section" style={{ padding: '4rem 2rem' }}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{ textAlign: 'center', width: '100%' }}
            >
                <h2 style={gradientStyle}>Our Team</h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>

                    {/* Row 1: 3 Members */}
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                        {teamMembers.slice(0, 3).map((member, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -10 }}
                                className="glass-card"
                                style={cardStyle}
                            >
                                <div style={{
                                    width: '120px',
                                    height: '120px',
                                    borderRadius: '50%',
                                    overflow: 'hidden',
                                    margin: '0 auto 1.5rem auto',
                                    border: '3px solid rgba(255,255,255,0.1)',
                                    boxShadow: '0 0 20px rgba(0,0,0,0.3)'
                                }}>
                                    <img
                                        src={member.imageUrl}
                                        alt={member.name}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#fff' }}>{member.name}</h3>
                                <p style={{ color: 'var(--primary-color)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>{member.role}</p>
                                <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '2rem', height: '40px' }}>
                                    {member.stack.map((tech, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ x: 0, opacity: 0.7 }}
                                            whileHover={{ x: (i - 1) * 20, scale: 1.2, opacity: 1, color: 'var(--primary-color)' }}
                                            style={{ fontSize: '1.5rem', cursor: 'pointer', transition: 'all 0.3s ease' }}
                                            title={tech.name}
                                        >
                                            {tech.icon}
                                        </motion.div>
                                    ))}
                                </div>
                                <motion.a
                                    href={member.profileUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ background: 'linear-gradient(45deg, var(--primary-color), var(--secondary-color))', color: '#fff', scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    style={{
                                        display: 'inline-block',
                                        padding: '0.8rem 1.5rem',
                                        borderRadius: '30px',
                                        border: '1px solid rgba(255,255,255,0.2)',
                                        color: 'rgba(255,255,255,0.8)',
                                        textDecoration: 'none',
                                        fontSize: '0.9rem',
                                        fontWeight: 'bold',
                                        transition: 'background 0.3s, color 0.3s'
                                    }}
                                >
                                    View Profile
                                </motion.a>
                            </motion.div>
                        ))}
                    </div>

                    {/* Row 2: 2 Members */}
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                        {teamMembers.slice(3, 5).map((member, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -10 }}
                                className="glass-card"
                                style={cardStyle}
                            >
                                <div style={{
                                    width: '120px',
                                    height: '120px',
                                    borderRadius: '50%',
                                    overflow: 'hidden',
                                    margin: '0 auto 1.5rem auto',
                                    border: '3px solid rgba(255,255,255,0.1)',
                                    boxShadow: '0 0 20px rgba(0,0,0,0.3)'
                                }}>
                                    <img
                                        src={member.imageUrl}
                                        alt={member.name}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#fff' }}>{member.name}</h3>
                                <p style={{ color: 'var(--primary-color)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>{member.role}</p>
                                <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '2rem', height: '40px' }}>
                                    {member.stack.map((tech, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ x: 0, opacity: 0.7 }}
                                            whileHover={{ x: (i - 1) * 20, scale: 1.2, opacity: 1, color: 'var(--primary-color)' }}
                                            style={{ fontSize: '1.5rem', cursor: 'pointer', transition: 'all 0.3s ease' }}
                                            title={tech.name}
                                        >
                                            {tech.icon}
                                        </motion.div>
                                    ))}
                                </div>
                                <motion.a
                                    href={member.profileUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ background: 'linear-gradient(45deg, var(--primary-color), var(--secondary-color))', color: '#fff', scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    style={{
                                        display: 'inline-block',
                                        padding: '0.8rem 1.5rem',
                                        borderRadius: '30px',
                                        border: '1px solid rgba(255,255,255,0.2)',
                                        color: 'rgba(255,255,255,0.8)',
                                        textDecoration: 'none',
                                        fontSize: '0.9rem',
                                        fontWeight: 'bold',
                                        transition: 'background 0.3s, color 0.3s'
                                    }}
                                >
                                    View Profile
                                </motion.a>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </motion.div>
        </section>
    );
};

export default Team;
