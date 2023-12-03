import React from "react";
import {useGLTF} from '@react-three/drei'

import skyScene from '../assets/3d/sky.glb'

const Sky = () => {
    const sky = useGLTF(skyScene);
    return (
        <mesh>
            <primitive scale={[100,100,100]} object={sky.scene}/>
        </mesh>
    )
}

export default Sky