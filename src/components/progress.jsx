import React, { useRef, useEffect } from 'react';
import { useFrame } from "@react-three/fiber";
import * as THREE from 'three';

const progress = ({ percentage, radius, strokeWidth }) => {
    const progressRef = useRef();

    useEffect(() => {
        // Update the progress bar when the percentage changes
        const progress = percentage / 100;
        const angle = 2 * Math.PI * progress;

        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);

        const path = new THREE.Path();
        path.moveTo(0, 0);
        path.lineTo(x, y);

        progressRef.current.currentPath = path;
    }, [percentage, radius]);

    useFrame(() => {
        progressRef.current.needsUpdate = true;
    });

    return (
        <group>
            <mesh>
                <shapeBufferGeometry attach="geometry" args={[progressRef.current]} />
                <meshBasicMaterial attach="material" color="blue" />
            </mesh>
        </group>
    );
};

export default progress;
