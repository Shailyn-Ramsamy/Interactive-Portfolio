import React, {useState, useEffect, useRef} from 'react'
import {useGLTF, useAnimations} from '@react-three/drei'
import carScene from '../assets/3d/low_poly_rabbit.glb'
const Car = () => {

    const {scene, animations} = useGLTF(carScene);
    const carRef = useRef();
    const {actions} = useAnimations(animations, carRef);

    const [floatingPosition, setFloatingPosition] = useState([0, 0, 0]);
    const floatingAmplitude = 0.5; // Adjust the floating height
    const floatingSpeed = 0.002; // Adjust the floating speed

    useEffect(() => {
        console.log(actions);
        const action = actions['Armature.001|Idle'];
        if (action) {
            action.play();
        }
        // Update the car's position for a floating effect outside of useFrame
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
        <mesh ref={carRef} position={[floatingPosition[0] +1 , floatingPosition[1]+1, floatingPosition[2] + 9.7]} scale={[0.2,0.2,0.2]} rotation={[1.192, -0.924, -0.306]} castShadow receiveShadow>
            <primitive object={scene} />
        </mesh>
    );
}

export default Car