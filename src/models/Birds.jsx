import React, {useState, useEffect, useRef} from 'react'
import {useGLTF, useAnimations} from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import birdsScene from '../assets/3d/bird.glb'
import * as THREE from 'three';
const Birds = ({position}) => {

    const {scene, animations} = useGLTF(birdsScene);
    const birdsRef = useRef();
    const {actions} = useAnimations(animations, birdsRef);

    useEffect(() => {
        const action = actions['Take 001'];
        if (action) {
            action.timeScale = 10.0;
            action.play();
        }
    }, [actions]);

    const orbitRadius = 15;
    const orbitSpeed = 0.005;
    const [theta, setTheta] = useState(0);

    useFrame(() => {
        // Update the position in a circular orbit
        const x = orbitRadius * Math.cos(theta);
        const z = orbitRadius * Math.sin(theta);

        const direction = new THREE.Vector3(x, 0, z).normalize();

        birdsRef.current.position.x = x;
        birdsRef.current.position.z = z;

        // Calculate the rotation based on the direction vector
        birdsRef.current.rotation.y = Math.atan2(direction.x, direction.z) - 1.8;
        setTheta((prevTheta) => prevTheta + orbitSpeed);
    });

    return (
        <mesh ref={birdsRef} position={position}  scale={[0.05, 0.05, 0.05]}>
            <primitive object={scene} />
        </mesh>
    );
}

export default Birds