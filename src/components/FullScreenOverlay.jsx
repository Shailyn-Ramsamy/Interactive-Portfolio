import React from 'react';
import { motion } from 'framer-motion';
import { IoClose } from "react-icons/io5";

const FullScreenOverlay = ({ onClose, children }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                background: 'rgba(0, 0, 0, 0.8)', // semi-transparent black background
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1000,
            }}
        >
            <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
                <IoClose size={30} color="white" onClick={onClose} />
            </div>
            {children}
        </motion.div>
    );
};

export default FullScreenOverlay;