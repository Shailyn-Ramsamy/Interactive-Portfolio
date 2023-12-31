import React, {useState} from 'react';
import { motion } from 'framer-motion';
import { useSpring, animated } from '@react-spring/web';
import '../pages/HomeInfo.css';

const AnimatedH1 = ({ children, className }) => {

    const [isOpen, setIsOpen] = useState(false);
    const props = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        // reset: true,
    });

    return (
        <animated.div style={props}>
            <motion.div
                transition={{layout: {duration: 1}}}
                layout
                onClick={() => setIsOpen(!isOpen)}
                className='card'
            >
                <motion.h2 layout="position">{children}</motion.h2>
                {isOpen &&(
                    <motion.div>
                        <p>Lodawwwwwwwwwwwwwwwwwwwwwwwwwww

                            wwwww wwwwwwwwwwwwwwwwww</p>
                    </motion.div>
                )}
            </motion.div>
        </animated.div>
    );
};

const renderContent = {
    1: (
        <AnimatedH1 className="sm-text-xl sm:leading-snug text-center text-white mx5">
            Hi, I'm Shailyn, welcome to my world!
        </AnimatedH1>
    ),
    2: (
        <AnimatedH1 className="sm-text-xl sm:leading-snug text-center text-white mx5">
            Projects
        </AnimatedH1>
    ),
    3: (
        <AnimatedH1 className="sm-text-xl sm:leading-snug text-center text-white mx5">
            Contact
        </AnimatedH1>
    ),
    4: (
        <AnimatedH1 className="sm-text-xl sm:leading-snug text-center text-white mx5">
            About
        </AnimatedH1>
    ),
};

const HomeInfo = ({ currentStage }) => {
    console.log('Current Stage in HomeInfo:', currentStage);
    return renderContent[currentStage] || null;
};

export default HomeInfo;
