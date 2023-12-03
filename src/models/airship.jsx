import React from 'react'
import {useGLTF} from '@react-three/drei'
import airScene from '../assets/3d/airship.glb'
const Airship = () => {

    const {scene, animations} = useGLTF(airScene);

    return(
        <mesh position={[-5,2,1]} scale={[0.003, 0.003, 0.003]}>
            <primitive object={scene}/>
        </mesh>
    )
}

export default Airship