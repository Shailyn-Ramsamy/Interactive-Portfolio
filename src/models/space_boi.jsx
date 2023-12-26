import React, {useState, useEffect, useRef} from 'react'
import {useGLTF, useAnimations} from '@react-three/drei'
import spScene from '../assets/3d/space_boi.glb'
const Space_Boi = () => {

    const {scene, animations} = useGLTF(spScene);
    const spRef = useRef();

    return (
        <mesh ref={spRef} position={[-60,-100,-80]} scale={[20, 20, 20]} castShadow receiveShadow>
            <primitive object={scene} />
        </mesh>
    );
}

export default Space_Boi