import { motion } from 'framer-motion';
import { IoClose } from 'react-icons/io5';
import "../HomeInfo.css";
import React from "react";

const OverlayContent2 = ({ handleButtonClick }) => {
    return (
        <div className="overlay">
            <div className="info">
                <div>
                    <div className="typewriter inline-block">
                        <h1 className="scroll-m-20 font-extrabold text-justify text-purple-300 tracking-widest lg:text-4xl">
                            Projects
                        </h1>
                    </div>

                    <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-wide transition-colors first:mt-0">
                        Who am I?
                    </h2>

                    <div className="grid grid-flow-col mt-10 pr-10">
                        <h1 className="scroll-m-20 text-justify tracking-normal lg:text-2xl pr-10">
                            I am a student from the university of Witwatersrand, aspiring to become a software developer.
                            Through hard work and dedication, I have completed my Bachelors in Computer Science and am now pursuing my Honors degree.
                            Creating this website has been a very educational and fun experience. I attempted creating a website that would push my web development skills even
                            further. I want to become a better developer than I was yesterday, so I challenged myself to create something different. I hope you enjoy viewing my
                            world and what I have to offer!
                        </h1>

                    </div>
                </div>
            </div>
            <div className="example-container">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 0.96, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 3,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    onClick={handleButtonClick}
                >
                    <IoClose size={17} />
                </motion.div>
            </div>
        </div>
    );
};

export default OverlayContent2;
