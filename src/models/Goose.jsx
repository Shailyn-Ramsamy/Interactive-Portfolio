import React, {useState, useEffect, useRef} from 'react'
import {useGLTF, useAnimations} from '@react-three/drei'
import gooseScene from '../assets/3d/goose.glb'
const Goose = () => {

    const {scene, animations} = useGLTF(gooseScene);
    const gooseRef = useRef();
    const {actions} = useAnimations(animations, gooseRef);

    const [floatingPosition, setFloatingPosition] = useState([0, 0, 0]);
    const floatingAmplitude = 0.5; // Adjust the floating height
    const floatingSpeed = 0.002; // Adjust the floating speed

    useEffect(() => {
        const action = actions['Take 001'];
        if (action) {
            action.play();
        }
        // Update the goose's position for a floating effect outside of useFrame
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
        <mesh ref={gooseRef} position={[floatingPosition[0] -8, floatingPosition[1]+2, floatingPosition[2] + 10]} scale={[5, 5, 5]} castShadow receiveShadow>
            <primitive object={scene} />
        </mesh>
    );
}

export default Goose