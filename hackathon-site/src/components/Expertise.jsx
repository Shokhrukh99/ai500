import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const expertiseData = [
    {
        name: 'Dilshod Ibragimov',
        role: 'ML Developer',
        imageUrl: `${import.meta.env.BASE_URL}team/dilshod.png`,
        quote: "With a deep background in machine learning and data engineering, I specialize in building robust pipelines that turn raw data into actionable insights. My focus is on optimizing model performance for real-world financial applications."
    },
    {
        name: 'Shokhrukh Sultanov',
        role: 'Team Lead',
        imageUrl: 'https://avatars.githubusercontent.com/u/32006946?v=4',
        quote: "I bring extensive expertise from the manufacturing industry, where I implemented complex Track and Trace Solutions. Currently, I'm focused on creating AI-powered healthcare systems, including Diabetic Retinopathy detection for state clinics, and applying that same rigor to financial automation."
    },
    {
        name: 'Mukhammadmuso Abduzhabbarov',
        role: 'ML Developer',
        imageUrl: `${import.meta.env.BASE_URL}team/mukhammadmuso.png`,
        quote: "My passion lies in the intersection of advanced algorithms and user-centric design. I leverage PyTorch and TensorFlow to create predictive models that not only perform well but also integrate seamlessly into intuitive applications."
    },
    {
        name: 'Said Abduvaliyev',
        role: 'Full-Stack Developer',
        imageUrl: `${import.meta.env.BASE_URL}team/said.png`,
        quote: "As a full-stack developer fluent in Ruby, Java, and Node.js, I bridge the gap between complex backend logic and responsive front-end experiences. I ensure our systems are scalable, secure, and ready for high-volume financial transactions."
    },
    {
        name: 'Pooja Pooja',
        role: 'ML Developer',
        imageUrl: 'https://ui-avatars.com/api/?name=Pooja+Pooja&background=random&size=200',
        quote: "I specialize in developing scalable machine learning solutions using TensorFlow and Scikit-learn. My motivation is to solve complex problems through data-driven approaches, ensuring accuracy and efficiency in every model we deploy."
    }
];

const Expertise = () => {
    return (
        <section id="expertise" className="section" style={{ padding: '6rem 2rem' }}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{ maxWidth: '1000px', margin: '0 auto' }}
            >
                <h2 style={{
                    textAlign: 'center',
                    fontSize: '2.5rem',
                    marginBottom: '4rem',
                    background: 'linear-gradient(to right, #ffffff, #a0a0a0)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                }}>
                    Our Expertise
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    {expertiseData.map((member, index) => {
                        const isEven = (index + 1) % 2 === 0;
                        return (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.02 }}
                                className="glass-card"
                                style={{
                                    padding: '2rem',
                                    display: 'flex',
                                    flexDirection: isEven ? 'row-reverse' : 'row',
                                    alignItems: 'center',
                                    gap: '2rem',
                                    background: 'rgba(255, 255, 255, 0.03)',
                                    border: '1px solid rgba(255, 255, 255, 0.05)',
                                    borderRadius: '20px',
                                    width: '85%',
                                    alignSelf: isEven ? 'flex-end' : 'flex-start',
                                    textAlign: isEven ? 'right' : 'left'
                                }}
                            >
                                <div style={{
                                    flexShrink: 0,
                                    textAlign: 'center',
                                    width: '180px' // Fixed width for consistency
                                }}>
                                    <img
                                        src={member.imageUrl}
                                        alt={member.name}
                                        style={{
                                            width: '80px',
                                            height: '80px',
                                            borderRadius: '50%',
                                            objectFit: 'cover',
                                            border: '2px solid var(--primary-color)',
                                            marginBottom: '0.5rem'
                                        }}
                                    />
                                    <h4 style={{ fontSize: '1rem', color: '#fff', margin: 0 }}>{member.name}</h4>
                                    <span style={{ fontSize: '0.8rem', color: 'var(--primary-color)' }}>{member.role}</span>
                                </div>

                                <div style={{ position: 'relative', flex: 1 }}>
                                    <FaQuoteLeft style={{
                                        fontSize: '1.5rem',
                                        color: 'var(--primary-color)',
                                        opacity: 0.3,
                                        position: 'absolute',
                                        top: -10,
                                        left: isEven ? 'auto' : -10,
                                        right: isEven ? -10 : 'auto'
                                    }} />
                                    <p style={{
                                        fontSize: '1.1rem',
                                        lineHeight: '1.6',
                                        color: 'rgba(255, 255, 255, 0.9)',
                                        fontStyle: 'italic',
                                        paddingLeft: isEven ? 0 : '1.5rem',
                                        paddingRight: isEven ? '1.5rem' : 0,
                                        margin: 0
                                    }}>
                                        "{member.quote}"
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>
        </section>
    );
};

export default Expertise;
