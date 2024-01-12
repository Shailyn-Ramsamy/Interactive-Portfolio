import React, { useRef, useEffect } from 'react'
import {useGLTF, useAnimations} from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import playerScene from '../assets/3d/plane.glb'
import { MathUtils } from 'three';
import * as THREE from 'three';


const Player = ({isRotating ,playerScale, playerPos, rotation, playerPosition, orbitDirection, orbitControlsRef, setCurrentStage,isCoolDown,...props }) => {
    const { scene, animations } = useGLTF(playerScene);
    const playerRef = useRef();
    const {actions} = useAnimations(animations, playerRef);


    useEffect(() => {
        const action = actions['ArmatureAction.001'];
        action.play()
    }, [actions, isRotating]);

    if (playerRef.current) {
        playerRef.current.rotation.set(-Math.PI / 2, 0, 0);
    }

    useFrame(() => {
        const orbitControls = orbitControlsRef.current;
        const azimuthalAngle = orbitControls.getAzimuthalAngle() + Math.PI / 2;
        const polarAngle = orbitControls.getPolarAngle();

        const orbitRadius = 17;

        const playerX = playerPos[0] + orbitRadius * Math.sin(polarAngle) * Math.cos(azimuthalAngle);
        const playerY = playerPos[1] + orbitRadius * Math.cos(polarAngle);
        const playerZ = playerPos[2] + orbitRadius * Math.sin(polarAngle) * Math.sin(azimuthalAngle);

        playerRef.current.position.set(-playerX, playerY, playerZ + 2);

        // Calculate the sphere's position
        const spherePosition = new THREE.Vector3(/* specify sphere's position */);

        // Make the player look at the sphere's position
        playerRef.current.lookAt(spherePosition);

        const targetCoordinates1 = new THREE.Vector3(-9.18485099360515e-16, 0.1500000000000009, 15);
        const targetCoordinates2 = new THREE.Vector3(14.96910857771835, -0.4625591781512517, -0.7419970631623536);
        const targetCoordinates3 = new THREE.Vector3(-2.640654651304165, 7.921745140043082, -12.554956013095483);
        const targetCoordinates4 = new THREE.Vector3(-0.839322795887166, -7.473520451661315, -12.89098418148924);
        const playerPositionVector = playerRef.current.position.clone();

        const distance1 = playerPositionVector.distanceTo(targetCoordinates1);
        const distance2 = playerPositionVector.distanceTo(targetCoordinates2);
        const distance3 = playerPositionVector.distanceTo(targetCoordinates3);
        const distance4 = playerPositionVector.distanceTo(targetCoordinates4);

        const proximityThreshold = 4; // You may need to adjust this value based on your scene scale

        if(!isCoolDown){
            if (distance1 < proximityThreshold) {
                setCurrentStage(1);
            } else if (distance2 < proximityThreshold) {
                setCurrentStage(2);
            } else if (distance3 < proximityThreshold) {
                setCurrentStage(3);
            } else if (distance4 < proximityThreshold) {
                setCurrentStage(4);
            } else {
                setCurrentStage(5);
            }
        }

    });



    return (
        <mesh ref={playerRef} scale={playerScale} position={playerPosition} rotation={rotation} castShadow receiveShadow>
            <primitive object={scene} />
        </mesh>
    );
};

export default Player