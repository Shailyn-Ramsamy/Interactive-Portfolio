import React, { useRef, useEffect } from 'react'
import {useGLTF, useAnimations} from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import playerScene from '../assets/3d/plane.glb'
import { MathUtils } from 'three';


const Player = ({isRotating ,playerScale, playerPos, rotation, playerPosition, orbitDirection, ...props }) => {
    const { scene, animations } = useGLTF(playerScene);
    const playerRef = useRef();
    const {actions} = useAnimations(animations, playerRef);

    // console.log(animations);
    // console.log(actions);
    // console.log(isRotating);

    useEffect(() => {
        const action = actions['Take 001'];

        if (isRotating) {
            // Play the animation or unpause if paused
            action.play();
            action.paused = false;

            // Set easing in
            action.setEffectiveTimeScale(1); // Adjust the value for the desired easing in effect
        } else {
            // Pause the animation
            action.paused = true;

            // Ease out of the animation gradually
            const currentSpeed = action.getEffectiveTimeScale();
            const newSpeed = MathUtils.lerp(currentSpeed, 0, 0.05); // Adjust the lerp factor for the desired easing out effect

            action.setEffectiveTimeScale(newSpeed);
        }
    }, [actions, isRotating]);


    return (
        <mesh ref={playerRef} scale={playerScale} position={playerPosition} rotation={rotation} castShadow receiveShadow>
            <primitive object={scene} />
        </mesh>
    );
};

export default Player