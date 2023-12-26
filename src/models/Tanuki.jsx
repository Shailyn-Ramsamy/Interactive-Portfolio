import React, {useState, useEffect, useRef} from 'react'
import {useGLTF, useAnimations} from '@react-three/drei'
import tanukiScene from '../assets/3d/tanuki.glb'
const Tanuki = () => {

    const {scene, animations} = useGLTF(tanukiScene);
    const tanukiRef = useRef();
    const {actions} = useAnimations(animations, tanukiRef);

    const [floatingPosition, setFloatingPosition] = useState([0, 0, 0]);
    const floatingAmplitude = 0.5; // Adjust the floating height
    const floatingSpeed = 0.002; // Adjust the floating speed

    useEffect(() => {
        const animationClipNames = Object.keys(actions);
        let currentClipIndex = 0;
        const playNextAnimation = () => {
            const currentClipName = animationClipNames[currentClipIndex];
            const action = actions[currentClipName];

            if (action) {
                action.play();
                action.reset().fadeIn(0.5).play(); // You can adjust the fade-in duration as needed
                currentClipIndex = (currentClipIndex + 1) % animationClipNames.length;
            }
        };

        playNextAnimation();
        // Update the tanuki's position for a floating effect outside of useFrame
        const updateFloatingPosition = () => {
            const yPos = Math.sin(Date.now() * floatingSpeed) * floatingAmplitude;
            setFloatingPosition((prev) => [prev[0], yPos, prev[2]]);
        };

        const updateId = setInterval(updateFloatingPosition, 16); // Update every frame

        return () => {
            clearInterval(updateId);
        };

        return () => clearInterval(updateId);
    }, [actions]);

    return (
        <mesh ref={tanukiRef} position={[floatingPosition[0] +5.8, floatingPosition[1]+2, floatingPosition[2] + 8.7]} scale={[0.1, 0.1, 0.1]}>
            <primitive object={scene} />
        </mesh>
    );
}

export default Tanuki