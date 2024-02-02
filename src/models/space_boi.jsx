import React, {useState, useEffect, useRef} from 'react'
import {useGLTF, useAnimations} from '@react-three/drei'
import spScene from '../assets/3d/spaceBoinew.glb'
const Space_Boi = () => {

    const {scene, animations} = useGLTF(spScene);
    const spRef = useRef();

    const { nodes, materials } = useGLTF(spScene);
    return (
        <group scale={8} position={[-30, -40, -30]}>
            <group position={[-3.148, 4.529, -1.111]} scale={0.631}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Icosphere015_1.geometry}
                    material={materials["Material.031"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Icosphere015_2.geometry}
                    material={materials["Material.032"]}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Icosphere001.geometry}
                material={materials["Material.033"]}
                position={[-3.148, 4.529, -1.111]}
                scale={0.631}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane.geometry}
                material={materials["Material.034"]}
                position={[-3.148, 4.529, -1.111]}
                rotation={[-0.631, 0.095, -0.29]}
                scale={-0.044}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane002.geometry}
                material={materials["Material.034"]}
                position={[-3.009, 4.733, -1.326]}
                rotation={[-0.747, 0.137, -0.404]}
                scale={-0.066}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane004.geometry}
                material={materials["Material.034"]}
                position={[-3.244, 4.485, -1.087]}
                rotation={[-0.868, 0.166, -0.075]}
                scale={-0.039}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane005.geometry}
                material={materials["Material.034"]}
                position={[-3.087, 4.611, -1.216]}
                rotation={[-0.879, 0.169, -0.351]}
                scale={-0.054}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane006.geometry}
                material={materials["Material.034"]}
                position={[-3.088, 4.697, -1.286]}
                rotation={[-0.868, 0.166, -0.075]}
                scale={-0.059}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane007.geometry}
                material={materials["Material.034"]}
                position={[-3.229, 4.73, -1.281]}
                rotation={[-0.849, 0.168, 0.231]}
                scale={-0.057}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane008.geometry}
                material={materials["Material.034"]}
                position={[-3.178, 4.633, -1.372]}
                rotation={[-1.124, 0.117, 0.133]}
                scale={-0.06}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane009.geometry}
                material={materials["Material.034"]}
                position={[-3.195, 4.747, -1.118]}
                rotation={[-0.112, 0.363, 0.315]}
                scale={-0.053}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane010.geometry}
                material={materials["Material.034"]}
                position={[-3.237, 4.708, -1.13]}
                rotation={[-0.003, 0.402, 0.416]}
                scale={-0.051}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane011.geometry}
                material={materials["Material.034"]}
                position={[-3.331, 4.81, -1.294]}
                rotation={[-0.329, 0.234, 0.57]}
                scale={-0.061}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane012.geometry}
                material={materials["Material.034"]}
                position={[-3.241, 4.831, -1.11]}
                rotation={[0.186, 0.464, 0.299]}
                scale={-0.059}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane013.geometry}
                material={materials["Material.034"]}
                position={[-3.301, 4.713, -1.21]}
                rotation={[-0.05, 0.36, 0.594]}
                scale={-0.052}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane014.geometry}
                material={materials["Material.034"]}
                position={[-3.208, 4.626, -1.19]}
                rotation={[-0.197, 0.256, 0.677]}
                scale={-0.045}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane015.geometry}
                material={materials["Material.034"]}
                position={[-3.222, 4.679, -1.043]}
                rotation={[0.499, 0.581, 0.229]}
                scale={-0.052}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane016.geometry}
                material={materials["Material.034"]}
                position={[-3.154, 4.66, -1.114]}
                rotation={[0.433, 0.575, -0.037]}
                scale={-0.049}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane017.geometry}
                material={materials["Material.034"]}
                position={[-3.14, 4.576, -1.148]}
                rotation={[0.29, 0.555, 0.373]}
                scale={-0.041}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane018.geometry}
                material={materials["Material.034"]}
                position={[-3.145, 4.505, -1.225]}
                rotation={[0.338, 0.578, 0.652]}
                scale={-0.035}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane019.geometry}
                material={materials["Material.034"]}
                position={[-3.277, 4.825, -1.122]}
                rotation={[0.083, 0.401, 0.673]}
                scale={-0.059}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane020.geometry}
                material={materials["Material.034"]}
                position={[-3.282, 4.678, -1.143]}
                rotation={[0.125, 0.44, 0.922]}
                scale={-0.05}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane021.geometry}
                material={materials["Material.034"]}
                position={[-3.173, 4.647, -0.728]}
                rotation={[1.748, 1.176, -0.004]}
                scale={-0.071}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane022.geometry}
                material={materials["Material.034"]}
                position={[-3.217, 4.682, -1.164]}
                rotation={[1.298, 1.141, 0.381]}
                scale={-0.043}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane023.geometry}
                material={materials["Material.034"]}
                position={[-3.288, 4.729, -0.9]}
                rotation={[1.15, 1.116, 0.359]}
                scale={-0.062}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane024.geometry}
                material={materials["Material.034"]}
                position={[-3.161, 4.713, -0.863]}
                rotation={[1.817, 1.116, -0.36]}
                scale={-0.065}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane025.geometry}
                material={materials["Material.034"]}
                position={[-3.183, 4.654, -0.989]}
                rotation={[1.973, 1.09, -0.342]}
                scale={-0.055}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane026.geometry}
                material={materials["Material.034"]}
                position={[-3.194, 4.621, -1.106]}
                rotation={[1.404, 1.136, -0.007]}
                scale={-0.048}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane027.geometry}
                material={materials["Material.034"]}
                position={[-3.153, 4.603, -1.298]}
                rotation={[1.973, 1.09, -0.342]}
                scale={-0.035}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane028.geometry}
                material={materials["Material.034"]}
                position={[-3.213, 4.714, -1.021]}
                rotation={[0.849, 1.009, 0.6]}
                scale={-0.052}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane029.geometry}
                material={materials["Material.034"]}
                position={[-3.285, 4.618, -1.034]}
                rotation={[0.8, 0.982, 0.947]}
                scale={-0.051}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane030.geometry}
                material={materials["Material.034"]}
                position={[-3.209, 4.608, -1.158]}
                rotation={[2.022, 1.075, -0.692]}
                scale={-0.045}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane031.geometry}
                material={materials["Material.034"]}
                position={[-3.27, 4.666, -1.147]}
                rotation={[1.259, 1.204, -0.042]}
                scale={-0.046}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane032.geometry}
                material={materials["Material.034"]}
                position={[-2.955, 4.737, -1.387]}
                rotation={[2.008, 0.215, -1.978]}
                scale={-0.07}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane033.geometry}
                material={materials["Material.034"]}
                position={[-3.084, 4.688, -1.289]}
                rotation={[1.944, 0.057, -1.924]}
                scale={-0.059}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane034.geometry}
                material={materials["Material.034"]}
                position={[-3.212, 4.593, -1.211]}
                rotation={[1.904, -0.015, -2.22]}
                scale={-0.049}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane035.geometry}
                material={materials["Material.034"]}
                position={[-3.341, 4.452, -1.481]}
                rotation={[1.176, -0.459, -2.991]}
                scale={-0.068}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane036.geometry}
                material={materials["Material.034"]}
                position={[-3.008, 4.323, -1.858]}
                rotation={[1.275, -0.43, -2.67]}
                scale={-0.097}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane037.geometry}
                material={materials["Material.034"]}
                position={[-3.338, 4.19, -1.844]}
                rotation={[0.989, -0.509, -3.021]}
                scale={-0.097}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane038.geometry}
                material={materials["Material.034"]}
                position={[-3.348, 4.583, -1.124]}
                rotation={[-0.104, 0.036, 2.167]}
                scale={-0.051}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane039.geometry}
                material={materials["Material.034"]}
                position={[-3.434, 4.574, -1.082]}
                rotation={[-0.139, 0.099, 1.995]}
                scale={-0.058}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane040.geometry}
                material={materials["Material.034"]}
                position={[-3.081, 4.687, -1.154]}
                rotation={[-0.15, 0.14, 1.673]}
                scale={-0.034}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane041.geometry}
                material={materials["Material.034"]}
                position={[-3.433, 4.612, -1.17]}
                rotation={[-0.126, -0.163, 1.63]}
                scale={-0.058}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane042.geometry}
                material={materials["Material.034"]}
                position={[-3.512, 4.596, -1.076]}
                rotation={[-0.147, -0.048, 1.876]}
                scale={-0.062}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane043.geometry}
                material={materials["Material.034"]}
                position={[-3.642, 4.62, -1.224]}
                rotation={[-0.081, -0.327, 1.722]}
                scale={-0.07}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane044.geometry}
                material={materials["Material.034"]}
                position={[-3.367, 4.724, -1.163]}
                rotation={[-0.076, 0.014, 1.387]}
                scale={-0.055}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane045.geometry}
                material={materials["Material.034"]}
                position={[-3.302, 4.708, -1.235]}
                rotation={[-0.396, -0.86, 1.085]}
                scale={-0.054}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane046.geometry}
                material={materials["Material.034"]}
                position={[-2.917, 4.191, -1.139]}
                rotation={[1.782, -0.87, -1.093]}
                scale={-0.078}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane047.geometry}
                material={materials["Material.034"]}
                position={[-3.139, 4.345, -1.086]}
                rotation={[2.155, -1.069, -0.406]}
                scale={-0.06}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane048.geometry}
                material={materials["Material.034"]}
                position={[-3.141, 3.915, -1.115]}
                rotation={[2.66, -1.143, -0.219]}
                scale={-0.088}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane050.geometry}
                material={materials["Material.035"]}
                position={[-3.148, 4.529, -1.111]}
                rotation={[2.292, -0.624, 0.206]}
                scale={[-0.041, -0.029, -0.029]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane051.geometry}
                material={materials["Material.035"]}
                position={[-3.248, 4.588, -0.872]}
                rotation={[-1.394, 1.258, -3.14]}
                scale={[-0.025, -0.018, -0.018]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane052.geometry}
                material={materials["Material.035"]}
                position={[-3.255, 4.477, -0.89]}
                rotation={[-2.964, -1.414, -1.476]}
                scale={[0.026, 0.018, 0.018]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane053.geometry}
                material={materials["Material.035"]}
                position={[-3.376, 4.545, -0.899]}
                rotation={[-0.585, 1.159, -0.847]}
                scale={[0.025, 0.018, 0.018]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane054.geometry}
                material={materials["Material.035"]}
                position={[-3.233, 4.486, -0.943]}
                rotation={[0.285, -0.748, -1.278]}
                scale={[-0.034, -0.024, -0.024]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane055.geometry}
                material={materials["Material.035"]}
                position={[-3.411, 4.539, -1.116]}
                rotation={[-1.978, -0.095, 2.212]}
                scale={[-0.033, -0.024, -0.024]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane056.geometry}
                material={materials["Material.035"]}
                position={[-3.454, 4.362, -1.377]}
                rotation={[1.289, 0.354, 2.675]}
                scale={[-0.018, -0.013, -0.013]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane057.geometry}
                material={materials["Material.035"]}
                position={[-3.432, 4.441, -1.431]}
                rotation={[-1.973, -0.038, -2.575]}
                scale={[0.018, 0.013, 0.013]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane058.geometry}
                material={materials["Material.035"]}
                position={[-3.482, 4.509, -1.474]}
                rotation={[-1.758, -0.038, -2.525]}
                scale={[0.015, 0.011, 0.011]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane059.geometry}
                material={materials["Material.035"]}
                position={[-3.449, 4.5, -1.474]}
                rotation={[-1.89, 0.426, -2.622]}
                scale={[0.016, 0.012, 0.012]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane060.geometry}
                material={materials["Material.035"]}
                position={[-3.486, 4.529, -1.427]}
                rotation={[-2.052, 0.538, -2.192]}
                scale={[0.018, 0.013, 0.013]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane061.geometry}
                material={materials["Material.035"]}
                position={[-3.489, 4.572, -1.506]}
                rotation={[-1.642, 0.335, -2.642]}
                scale={[0.014, 0.01, 0.01]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane062.geometry}
                material={materials["Material.035"]}
                position={[-3.393, 4.322, -1.388]}
                rotation={[-2.854, 0.856, -2.494]}
                scale={[0.017, 0.012, 0.012]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane063.geometry}
                material={materials["Material.035"]}
                position={[-3.498, 4.376, -1.336]}
                rotation={[-3.021, 0.748, -2.292]}
                scale={[0.018, 0.013, 0.013]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane064.geometry}
                material={materials["Material.034"]}
                position={[-3.201, 4.621, -1.137]}
                rotation={[2.364, 0.897, -0.81]}
                scale={-0.045}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane065.geometry}
                material={materials["Material.034"]}
                position={[-3.173, 4.631, -1.18]}
                rotation={[2.324, 0.861, -1.089]}
                scale={-0.045}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane066.geometry}
                material={materials["Material.034"]}
                position={[-3.206, 4.674, -1.214]}
                rotation={[2.247, 0.869, -1.341]}
                scale={-0.045}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane067.geometry}
                material={materials["Material.034"]}
                position={[-3.222, 4.707, -1.19]}
                rotation={[1.755, 1.104, -0.869]}
                scale={-0.046}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane068.geometry}
                material={materials["Material.035"]}
                position={[-3.069, 4.556, -1.008]}
                rotation={[-0.155, 0.166, -1.641]}
                scale={[-0.033, -0.023, -0.023]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane069.geometry}
                material={materials["Material.035"]}
                position={[-3.227, 4.541, -1.472]}
                rotation={[-1.696, -1.51, -3.093]}
                scale={[0.021, 0.015, 0.015]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane070.geometry}
                material={materials["Material.035"]}
                position={[-3.491, 4.773, -1.242]}
                rotation={[2.139, -0.27, 2.45]}
                scale={[-0.023, -0.016, -0.016]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane071.geometry}
                material={materials["Material.035"]}
                position={[-3.342, 4.852, -1.229]}
                rotation={[2.774, 0.923, -0.321]}
                scale={[0.024, 0.017, 0.017]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane072.geometry}
                material={materials["Material.035"]}
                position={[-3.025, 4.778, -1.085]}
                rotation={[2.846, 0.68, -2.411]}
                scale={[-0.024, -0.017, -0.017]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane073.geometry}
                material={materials["Material.034"]}
                position={[-3.114, 4.725, -1.122]}
                rotation={[0.027, -0.111, 2.434]}
                scale={-0.031}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane074.geometry}
                material={materials["Material.034"]}
                position={[-3.301, 4.637, -1.194]}
                rotation={[0.206, -0.286, 2.283]}
                scale={-0.046}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane075.geometry}
                material={materials["Material.034"]}
                position={[-3.193, 4.712, -1.045]}
                rotation={[0.206, -0.286, 2.283]}
                scale={-0.034}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane076.geometry}
                material={materials["Material.034"]}
                position={[-3.25, 4.678, -1.154]}
                rotation={[0.286, -0.361, 2.444]}
                scale={-0.041}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane077.geometry}
                material={materials["Material.035"]}
                position={[-3.11, 4.343, -1.341]}
                rotation={[-2.589, -0.364, -0.205]}
                scale={[-0.02, -0.014, -0.014]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane078.geometry}
                material={materials["Material.035"]}
                position={[-3.111, 4.325, -1.173]}
                rotation={[-0.548, 0.827, 0.885]}
                scale={[0.023, 0.016, 0.016]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane079.geometry}
                material={materials["Material.035"]}
                position={[-3.159, 4.242, -1.227]}
                rotation={[2.784, -1.161, -0.723]}
                scale={[-0.019, -0.013, -0.013]}
            />
            <group
                position={[-3.148, 4.529, -1.111]}
                rotation={[-0.26, 0.012, 0.91]}
                scale={-0.006}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane008_1.geometry}
                    material={materials["Material.036"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane008_2.geometry}
                    material={materials["Material.037"]}
                />
            </group>
            <group
                position={[-3.27, 4.544, -1.34]}
                rotation={[0.365, 0.081, -2.352]}
                scale={-0.008}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane008_1.geometry}
                    material={materials["Material.036"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane008_2.geometry}
                    material={materials["Material.037"]}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Icosphere002.geometry}
                material={materials["Material.038"]}
                position={[-3.148, 4.529, -1.111]}
                rotation={[0.558, 0.146, 0.743]}
                scale={0.05}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Icosphere003.geometry}
                material={materials["Material.039"]}
                position={[-3.148, 4.529, -1.111]}
                rotation={[0.42, 0.959, -0.591]}
                scale={0.05}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Icosphere004.geometry}
                material={materials["Material.040"]}
                position={[-3.148, 4.529, -1.111]}
                rotation={[0.144, 0.527, -2.779]}
                scale={0.05}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Icosphere005.geometry}
                material={materials["Material.038"]}
                position={[-3.34, 4.518, -1.151]}
                rotation={[0.326, -0.681, -1.243]}
                scale={0.05}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Icosphere006.geometry}
                material={materials["Material.038"]}
                position={[-3.346, 4.602, -1.192]}
                rotation={[0.953, -1.058, -1.631]}
                scale={0.05}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Icosphere007.geometry}
                material={materials["Material.039"]}
                position={[-3.148, 4.492, -1.189]}
                rotation={[2.62, 0.125, 1.706]}
                scale={0.05}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Icosphere008.geometry}
                material={materials["Material.038"]}
                position={[-3.293, 4.657, -1.056]}
                rotation={[-1.69, 0, -0.949]}
                scale={0.05}
            />
            <group position={[2.047, 5.665, -2.222]} scale={0.295}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Icosphere020_1.geometry}
                    material={materials["Material.041"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Icosphere020_2.geometry}
                    material={materials["Material.042"]}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Icosphere010.geometry}
                material={materials["Material.031"]}
                position={[2.047, 5.665, -2.222]}
                scale={0.295}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane001.geometry}
                material={materials["Material.044"]}
                position={[2.047, 5.665, -2.222]}
                rotation={[-0.631, 0.095, -0.29]}
                scale={-0.02}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane003.geometry}
                material={materials["Material.044"]}
                position={[2.112, 5.761, -2.322]}
                rotation={[-0.747, 0.137, -0.404]}
                scale={-0.031}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane049.geometry}
                material={materials["Material.044"]}
                position={[2.003, 5.645, -2.21]}
                rotation={[-0.868, 0.166, -0.075]}
                scale={-0.018}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane082.geometry}
                material={materials["Material.044"]}
                position={[2.076, 5.704, -2.27]}
                rotation={[-0.879, 0.169, -0.351]}
                scale={-0.025}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane083.geometry}
                material={materials["Material.044"]}
                position={[2.076, 5.744, -2.303]}
                rotation={[-0.868, 0.166, -0.075]}
                scale={-0.027}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane084.geometry}
                material={materials["Material.044"]}
                position={[2.01, 5.76, -2.301]}
                rotation={[-0.849, 0.168, 0.231]}
                scale={-0.027}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane085.geometry}
                material={materials["Material.044"]}
                position={[2.034, 5.714, -2.343]}
                rotation={[-1.124, 0.117, 0.133]}
                scale={-0.028}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane086.geometry}
                material={materials["Material.044"]}
                position={[2.026, 5.767, -2.225]}
                rotation={[-0.112, 0.363, 0.315]}
                scale={-0.025}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane087.geometry}
                material={materials["Material.044"]}
                position={[2.006, 5.749, -2.231]}
                rotation={[-0.003, 0.402, 0.416]}
                scale={-0.024}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane088.geometry}
                material={materials["Material.044"]}
                position={[1.962, 5.797, -2.307]}
                rotation={[-0.329, 0.234, 0.57]}
                scale={-0.029}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane089.geometry}
                material={materials["Material.044"]}
                position={[2.004, 5.807, -2.221]}
                rotation={[0.186, 0.464, 0.299]}
                scale={-0.028}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane090.geometry}
                material={materials["Material.044"]}
                position={[1.976, 5.752, -2.268]}
                rotation={[-0.05, 0.36, 0.594]}
                scale={-0.024}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane091.geometry}
                material={materials["Material.044"]}
                position={[2.019, 5.711, -2.258]}
                rotation={[-0.197, 0.256, 0.677]}
                scale={-0.021}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane092.geometry}
                material={materials["Material.044"]}
                position={[2.013, 5.736, -2.19]}
                rotation={[0.499, 0.581, 0.229]}
                scale={-0.024}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane093.geometry}
                material={materials["Material.044"]}
                position={[2.045, 5.727, -2.223]}
                rotation={[0.433, 0.575, -0.037]}
                scale={-0.023}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane094.geometry}
                material={materials["Material.044"]}
                position={[2.051, 5.687, -2.239]}
                rotation={[0.29, 0.555, 0.373]}
                scale={-0.019}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane095.geometry}
                material={materials["Material.044"]}
                position={[2.049, 5.654, -2.275]}
                rotation={[0.338, 0.578, 0.652]}
                scale={-0.016}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane096.geometry}
                material={materials["Material.044"]}
                position={[1.987, 5.804, -2.227]}
                rotation={[0.083, 0.401, 0.673]}
                scale={-0.028}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane097.geometry}
                material={materials["Material.044"]}
                position={[1.985, 5.735, -2.237]}
                rotation={[0.125, 0.44, 0.922]}
                scale={-0.024}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane098.geometry}
                material={materials["Material.044"]}
                position={[2.036, 5.721, -2.043]}
                rotation={[1.748, 1.176, -0.004]}
                scale={-0.033}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane099.geometry}
                material={materials["Material.044"]}
                position={[2.015, 5.737, -2.247]}
                rotation={[1.298, 1.141, 0.381]}
                scale={-0.02}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane100.geometry}
                material={materials["Material.044"]}
                position={[1.982, 5.759, -2.123]}
                rotation={[1.15, 1.116, 0.359]}
                scale={-0.029}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane101.geometry}
                material={materials["Material.044"]}
                position={[2.041, 5.751, -2.106]}
                rotation={[1.817, 1.116, -0.36]}
                scale={-0.03}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane102.geometry}
                material={materials["Material.044"]}
                position={[2.031, 5.724, -2.165]}
                rotation={[1.973, 1.09, -0.342]}
                scale={-0.026}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane103.geometry}
                material={materials["Material.044"]}
                position={[2.026, 5.708, -2.219]}
                rotation={[1.404, 1.136, -0.007]}
                scale={-0.022}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane104.geometry}
                material={materials["Material.044"]}
                position={[2.045, 5.7, -2.309]}
                rotation={[1.973, 1.09, -0.342]}
                scale={-0.017}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane105.geometry}
                material={materials["Material.044"]}
                position={[2.017, 5.752, -2.179]}
                rotation={[0.849, 1.009, 0.6]}
                scale={-0.024}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane106.geometry}
                material={materials["Material.044"]}
                position={[1.983, 5.707, -2.186]}
                rotation={[0.8, 0.982, 0.947]}
                scale={-0.024}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane107.geometry}
                material={materials["Material.044"]}
                position={[2.019, 5.702, -2.243]}
                rotation={[2.022, 1.075, -0.692]}
                scale={-0.021}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane108.geometry}
                material={materials["Material.044"]}
                position={[1.991, 5.729, -2.239]}
                rotation={[1.259, 1.204, -0.042]}
                scale={-0.022}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane109.geometry}
                material={materials["Material.044"]}
                position={[2.138, 5.763, -2.35]}
                rotation={[2.008, 0.215, -1.978]}
                scale={-0.033}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane110.geometry}
                material={materials["Material.044"]}
                position={[2.077, 5.74, -2.305]}
                rotation={[1.944, 0.057, -1.924]}
                scale={-0.027}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane111.geometry}
                material={materials["Material.044"]}
                position={[2.018, 5.696, -2.268]}
                rotation={[1.904, -0.015, -2.22]}
                scale={-0.023}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane112.geometry}
                material={materials["Material.044"]}
                position={[1.957, 5.629, -2.394]}
                rotation={[1.176, -0.459, -2.991]}
                scale={-0.032}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane113.geometry}
                material={materials["Material.044"]}
                position={[2.113, 5.569, -2.57]}
                rotation={[1.275, -0.43, -2.67]}
                scale={-0.045}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane114.geometry}
                material={materials["Material.044"]}
                position={[1.959, 5.507, -2.564]}
                rotation={[0.989, -0.509, -3.021]}
                scale={-0.045}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane115.geometry}
                material={materials["Material.044"]}
                position={[1.954, 5.691, -2.228]}
                rotation={[-0.104, 0.036, 2.167]}
                scale={-0.024}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane116.geometry}
                material={materials["Material.044"]}
                position={[1.914, 5.687, -2.208]}
                rotation={[-0.139, 0.099, 1.995]}
                scale={-0.027}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane117.geometry}
                material={materials["Material.044"]}
                position={[2.079, 5.739, -2.242]}
                rotation={[-0.15, 0.14, 1.673]}
                scale={-0.016}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane118.geometry}
                material={materials["Material.044"]}
                position={[1.915, 5.704, -2.249]}
                rotation={[-0.126, -0.163, 1.63]}
                scale={-0.027}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane119.geometry}
                material={materials["Material.044"]}
                position={[1.878, 5.697, -2.205]}
                rotation={[-0.147, -0.048, 1.876]}
                scale={-0.029}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane120.geometry}
                material={materials["Material.044"]}
                position={[1.817, 5.708, -2.275]}
                rotation={[-0.081, -0.327, 1.722]}
                scale={-0.033}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane121.geometry}
                material={materials["Material.044"]}
                position={[1.945, 5.756, -2.246]}
                rotation={[-0.076, 0.014, 1.387]}
                scale={-0.026}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane122.geometry}
                material={materials["Material.044"]}
                position={[1.976, 5.749, -2.28]}
                rotation={[-0.396, -0.86, 1.085]}
                scale={-0.025}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane123.geometry}
                material={materials["Material.044"]}
                position={[2.155, 5.508, -2.234]}
                rotation={[1.782, -0.87, -1.093]}
                scale={-0.036}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane124.geometry}
                material={materials["Material.044"]}
                position={[2.052, 5.58, -2.21]}
                rotation={[2.155, -1.069, -0.406]}
                scale={-0.028}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane125.geometry}
                material={materials["Material.044"]}
                position={[2.051, 5.379, -2.224]}
                rotation={[2.66, -1.143, -0.219]}
                scale={-0.041}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane126.geometry}
                material={materials["Material.045"]}
                position={[2.047, 5.665, -2.222]}
                rotation={[2.292, -0.624, 0.206]}
                scale={[-0.019, -0.013, -0.013]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane127.geometry}
                material={materials["Material.045"]}
                position={[2.001, 5.693, -2.11]}
                rotation={[-1.394, 1.258, -3.14]}
                scale={[-0.012, -0.008, -0.008]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane128.geometry}
                material={materials["Material.045"]}
                position={[1.998, 5.641, -2.118]}
                rotation={[-2.964, -1.414, -1.476]}
                scale={[0.012, 0.009, 0.009]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane129.geometry}
                material={materials["Material.045"]}
                position={[1.941, 5.673, -2.123]}
                rotation={[-0.585, 1.159, -0.847]}
                scale={[0.012, 0.008, 0.008]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane130.geometry}
                material={materials["Material.045"]}
                position={[2.008, 5.645, -2.143]}
                rotation={[0.285, -0.748, -1.278]}
                scale={[-0.016, -0.011, -0.011]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane131.geometry}
                material={materials["Material.045"]}
                position={[1.925, 5.67, -2.224]}
                rotation={[-1.978, -0.095, 2.212]}
                scale={[-0.016, -0.011, -0.011]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane132.geometry}
                material={materials["Material.045"]}
                position={[1.905, 5.587, -2.346]}
                rotation={[1.289, 0.354, 2.675]}
                scale={[-0.008, -0.006, -0.006]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane133.geometry}
                material={materials["Material.045"]}
                position={[1.915, 5.624, -2.371]}
                rotation={[-1.973, -0.038, -2.575]}
                scale={[0.008, 0.006, 0.006]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane134.geometry}
                material={materials["Material.045"]}
                position={[1.891, 5.656, -2.391]}
                rotation={[-1.758, -0.038, -2.525]}
                scale={[0.007, 0.005, 0.005]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane135.geometry}
                material={materials["Material.045"]}
                position={[1.907, 5.652, -2.391]}
                rotation={[-1.89, 0.426, -2.622]}
                scale={[0.008, 0.005, 0.005]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane136.geometry}
                material={materials["Material.045"]}
                position={[1.89, 5.666, -2.369]}
                rotation={[-2.052, 0.538, -2.192]}
                scale={[0.009, 0.006, 0.006]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane137.geometry}
                material={materials["Material.045"]}
                position={[1.888, 5.685, -2.406]}
                rotation={[-1.642, 0.335, -2.642]}
                scale={[0.007, 0.005, 0.005]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane138.geometry}
                material={materials["Material.045"]}
                position={[1.933, 5.569, -2.351]}
                rotation={[-2.854, 0.856, -2.494]}
                scale={[0.008, 0.006, 0.006]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane139.geometry}
                material={materials["Material.045"]}
                position={[1.884, 5.594, -2.327]}
                rotation={[-3.021, 0.748, -2.292]}
                scale={[0.008, 0.006, 0.006]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane140.geometry}
                material={materials["Material.044"]}
                position={[2.023, 5.708, -2.234]}
                rotation={[2.364, 0.897, -0.81]}
                scale={-0.021}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane141.geometry}
                material={materials["Material.044"]}
                position={[2.036, 5.713, -2.254]}
                rotation={[2.324, 0.861, -1.089]}
                scale={-0.021}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane142.geometry}
                material={materials["Material.044"]}
                position={[2.02, 5.733, -2.27]}
                rotation={[2.247, 0.869, -1.341]}
                scale={-0.021}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane143.geometry}
                material={materials["Material.044"]}
                position={[2.013, 5.749, -2.259]}
                rotation={[1.755, 1.104, -0.869]}
                scale={-0.022}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane144.geometry}
                material={materials["Material.045"]}
                position={[2.084, 5.678, -2.174]}
                rotation={[-0.155, 0.166, -1.641]}
                scale={[-0.015, -0.011, -0.011]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane145.geometry}
                material={materials["Material.045"]}
                position={[2.011, 5.671, -2.39]}
                rotation={[-1.696, -1.51, -3.093]}
                scale={[0.01, 0.007, 0.007]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane146.geometry}
                material={materials["Material.045"]}
                position={[1.887, 5.779, -2.283]}
                rotation={[2.139, -0.27, 2.45]}
                scale={[-0.011, -0.008, -0.008]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane147.geometry}
                material={materials["Material.045"]}
                position={[1.957, 5.816, -2.277]}
                rotation={[2.774, 0.923, -0.321]}
                scale={[0.011, 0.008, 0.008]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane148.geometry}
                material={materials["Material.045"]}
                position={[2.105, 5.782, -2.209]}
                rotation={[2.846, 0.68, -2.411]}
                scale={[-0.011, -0.008, -0.008]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane149.geometry}
                material={materials["Material.044"]}
                position={[2.064, 5.757, -2.227]}
                rotation={[0.027, -0.111, 2.434]}
                scale={-0.015}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane150.geometry}
                material={materials["Material.044"]}
                position={[1.976, 5.716, -2.26]}
                rotation={[0.206, -0.286, 2.283]}
                scale={-0.021}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane151.geometry}
                material={materials["Material.044"]}
                position={[2.027, 5.751, -2.191]}
                rotation={[0.206, -0.286, 2.283]}
                scale={-0.016}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane152.geometry}
                material={materials["Material.044"]}
                position={[2, 5.735, -2.242]}
                rotation={[0.286, -0.361, 2.444]}
                scale={-0.019}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane153.geometry}
                material={materials["Material.045"]}
                position={[2.065, 5.579, -2.329]}
                rotation={[-2.589, -0.364, -0.205]}
                scale={[-0.009, -0.007, -0.007]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane154.geometry}
                material={materials["Material.045"]}
                position={[2.065, 5.57, -2.25]}
                rotation={[-0.548, 0.827, 0.885]}
                scale={[0.011, 0.008, 0.008]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane155.geometry}
                material={materials["Material.045"]}
                position={[2.042, 5.532, -2.276]}
                rotation={[2.784, -1.161, -0.723]}
                scale={[-0.009, -0.006, -0.006]}
            />
            <group
                position={[2.047, 5.665, -2.222]}
                rotation={[-0.26, 0.012, 0.91]}
                scale={-0.003}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane011_1.geometry}
                    material={materials["Material.046"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane011_2.geometry}
                    material={materials["Material.047"]}
                />
            </group>
            <group
                position={[1.991, 5.673, -2.329]}
                rotation={[0.365, 0.081, -2.352]}
                scale={-0.004}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane011_1.geometry}
                    material={materials["Material.046"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane011_2.geometry}
                    material={materials["Material.047"]}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Icosphere011.geometry}
                material={materials["Material.048"]}
                position={[2.047, 5.665, -2.222]}
                rotation={[0.558, 0.146, 0.743]}
                scale={0.023}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Icosphere012.geometry}
                material={materials["Material.049"]}
                position={[2.047, 5.665, -2.222]}
                rotation={[0.42, 0.959, -0.591]}
                scale={0.023}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Icosphere013.geometry}
                material={materials["Material.050"]}
                position={[2.047, 5.665, -2.222]}
                rotation={[0.144, 0.527, -2.779]}
                scale={0.023}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Icosphere014.geometry}
                material={materials["Material.048"]}
                position={[1.958, 5.66, -2.24]}
                rotation={[0.326, -0.681, -1.243]}
                scale={0.023}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Icosphere015.geometry}
                material={materials["Material.048"]}
                position={[1.955, 5.699, -2.259]}
                rotation={[0.953, -1.058, -1.631]}
                scale={0.023}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Icosphere016.geometry}
                material={materials["Material.049"]}
                position={[2.047, 5.648, -2.258]}
                rotation={[2.62, 0.125, 1.706]}
                scale={0.023}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Icosphere017.geometry}
                material={materials["Material.048"]}
                position={[1.98, 5.725, -2.196]}
                rotation={[-1.69, 0, -0.949]}
                scale={0.023}
            />
            <group
                position={[-3.611, 3.924, -0.131]}
                rotation={[0.365, 0.081, -2.352]}
                scale={-0.005}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane012_1.geometry}
                    material={materials["Material.051"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane012_2.geometry}
                    material={materials["Material.052"]}
                />
            </group>
            <group
                position={[-3.541, 3.915, 0.002]}
                rotation={[-0.26, 0.012, 0.91]}
                scale={-0.004}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane012_1.geometry}
                    material={materials["Material.051"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane012_2.geometry}
                    material={materials["Material.052"]}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane160.geometry}
                material={materials["Material.053"]}
                position={[-3.547, 3.749, -0.065]}
                rotation={[2.784, -1.161, -0.723]}
                scale={[-0.011, -0.008, -0.008]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane161.geometry}
                material={materials["Material.053"]}
                position={[-3.519, 3.797, -0.034]}
                rotation={[-0.548, 0.827, 0.885]}
                scale={[0.013, 0.009, 0.009]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane162.geometry}
                material={materials["Material.053"]}
                position={[-3.519, 3.807, -0.131]}
                rotation={[-2.589, -0.364, -0.205]}
                scale={[-0.012, -0.008, -0.008]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane163.geometry}
                material={materials["Material.054"]}
                position={[-3.6, 4.001, -0.023]}
                rotation={[0.286, -0.361, 2.444]}
                scale={-0.024}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane164.geometry}
                material={materials["Material.054"]}
                position={[-3.567, 4.021, 0.04]}
                rotation={[0.206, -0.286, 2.283]}
                scale={-0.02}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane165.geometry}
                material={materials["Material.054"]}
                position={[-3.63, 3.977, -0.046]}
                rotation={[0.206, -0.286, 2.283]}
                scale={-0.027}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane166.geometry}
                material={materials["Material.054"]}
                position={[-3.521, 4.028, -0.004]}
                rotation={[0.027, -0.111, 2.434]}
                scale={-0.018}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane167.geometry}
                material={materials["Material.053"]}
                position={[-3.469, 4.059, 0.017]}
                rotation={[2.846, 0.68, -2.411]}
                scale={[-0.014, -0.01, -0.01]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane168.geometry}
                material={materials["Material.053"]}
                position={[-3.653, 4.102, -0.066]}
                rotation={[2.774, 0.923, -0.321]}
                scale={[0.014, 0.01, 0.01]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane169.geometry}
                material={materials["Material.053"]}
                position={[-3.74, 4.056, -0.074]}
                rotation={[2.139, -0.27, 2.45]}
                scale={[-0.013, -0.01, -0.01]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane170.geometry}
                material={materials["Material.053"]}
                position={[-3.586, 3.922, -0.207]}
                rotation={[-1.696, -1.51, -3.093]}
                scale={[0.012, 0.009, 0.009]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane171.geometry}
                material={materials["Material.053"]}
                position={[-3.495, 3.93, 0.062]}
                rotation={[-0.155, 0.166, -1.641]}
                scale={[-0.019, -0.013, -0.013]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane172.geometry}
                material={materials["Material.054"]}
                position={[-3.584, 4.018, -0.044]}
                rotation={[1.755, 1.104, -0.869]}
                scale={-0.027}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane173.geometry}
                material={materials["Material.054"]}
                position={[-3.574, 3.999, -0.057]}
                rotation={[2.247, 0.869, -1.341]}
                scale={-0.026}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane174.geometry}
                material={materials["Material.054"]}
                position={[-3.555, 3.974, -0.038]}
                rotation={[2.324, 0.861, -1.089]}
                scale={-0.026}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane175.geometry}
                material={materials["Material.054"]}
                position={[-3.571, 3.968, -0.013]}
                rotation={[2.364, 0.897, -0.81]}
                scale={-0.026}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane176.geometry}
                material={materials["Material.053"]}
                position={[-3.743, 3.826, -0.128]}
                rotation={[-3.021, 0.748, -2.292]}
                scale={[0.01, 0.007, 0.007]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane177.geometry}
                material={materials["Material.053"]}
                position={[-3.683, 3.795, -0.158]}
                rotation={[-2.854, 0.856, -2.494]}
                scale={[0.01, 0.007, 0.007]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane178.geometry}
                material={materials["Material.053"]}
                position={[-3.738, 3.94, -0.227]}
                rotation={[-1.642, 0.335, -2.642]}
                scale={[0.008, 0.006, 0.006]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane179.geometry}
                material={materials["Material.053"]}
                position={[-3.736, 3.915, -0.181]}
                rotation={[-2.052, 0.538, -2.192]}
                scale={[0.011, 0.008, 0.008]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane180.geometry}
                material={materials["Material.053"]}
                position={[-3.715, 3.898, -0.208]}
                rotation={[-1.89, 0.426, -2.622]}
                scale={[0.01, 0.007, 0.007]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane181.geometry}
                material={materials["Material.053"]}
                position={[-3.734, 3.903, -0.208]}
                rotation={[-1.758, -0.038, -2.525]}
                scale={[0.009, 0.006, 0.006]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane182.geometry}
                material={materials["Material.053"]}
                position={[-3.705, 3.864, -0.183]}
                rotation={[-1.973, -0.038, -2.575]}
                scale={[0.01, 0.007, 0.007]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane183.geometry}
                material={materials["Material.053"]}
                position={[-3.718, 3.818, -0.152]}
                rotation={[1.289, 0.354, 2.675]}
                scale={[-0.011, -0.007, -0.007]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane184.geometry}
                material={materials["Material.053"]}
                position={[-3.693, 3.921, -0.001]}
                rotation={[-1.978, -0.095, 2.212]}
                scale={[-0.019, -0.014, -0.014]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane185.geometry}
                material={materials["Material.053"]}
                position={[-3.59, 3.89, 0.1]}
                rotation={[0.285, -0.748, -1.278]}
                scale={[-0.02, -0.014, -0.014]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane186.geometry}
                material={materials["Material.053"]}
                position={[-3.673, 3.924, 0.125]}
                rotation={[-0.585, 1.159, -0.847]}
                scale={[0.014, 0.01, 0.01]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane187.geometry}
                material={materials["Material.053"]}
                position={[-3.603, 3.885, 0.13]}
                rotation={[-2.964, -1.414, -1.476]}
                scale={[0.015, 0.011, 0.011]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane188.geometry}
                material={materials["Material.053"]}
                position={[-3.599, 3.949, 0.14]}
                rotation={[-1.394, 1.258, -3.14]}
                scale={[-0.015, -0.01, -0.01]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane189.geometry}
                material={materials["Material.053"]}
                position={[-3.541, 3.915, 0.002]}
                rotation={[2.292, -0.624, 0.206]}
                scale={[-0.023, -0.017, -0.017]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane190.geometry}
                material={materials["Material.054"]}
                position={[-3.536, 3.559, 0]}
                rotation={[2.66, -1.143, -0.219]}
                scale={-0.051}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane191.geometry}
                material={materials["Material.054"]}
                position={[-3.536, 3.808, 0.016]}
                rotation={[2.155, -1.069, -0.406]}
                scale={-0.035}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane192.geometry}
                material={materials["Material.054"]}
                position={[-3.407, 3.719, -0.014]}
                rotation={[1.782, -0.87, -1.093]}
                scale={-0.045}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane193.geometry}
                material={materials["Material.054"]}
                position={[-3.63, 4.019, -0.07]}
                rotation={[-0.396, -0.86, 1.085]}
                scale={-0.031}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane194.geometry}
                material={materials["Material.054"]}
                position={[-3.667, 4.028, -0.028]}
                rotation={[-0.076, 0.014, 1.387]}
                scale={-0.032}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane195.geometry}
                material={materials["Material.054"]}
                position={[-3.827, 3.967, -0.064]}
                rotation={[-0.081, -0.327, 1.722]}
                scale={-0.041}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane196.geometry}
                material={materials["Material.054"]}
                position={[-3.751, 3.954, 0.023]}
                rotation={[-0.147, -0.048, 1.876]}
                scale={-0.036}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane197.geometry}
                material={materials["Material.054"]}
                position={[-3.706, 3.963, -0.032]}
                rotation={[-0.126, -0.163, 1.63]}
                scale={-0.034}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane198.geometry}
                material={materials["Material.054"]}
                position={[-3.502, 4.006, -0.023]}
                rotation={[-0.15, 0.14, 1.673]}
                scale={-0.02}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane199.geometry}
                material={materials["Material.054"]}
                position={[-3.706, 3.941, 0.019]}
                rotation={[-0.139, 0.099, 1.995]}
                scale={-0.033}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane200.geometry}
                material={materials["Material.054"]}
                position={[-3.656, 3.946, -0.006]}
                rotation={[-0.104, 0.036, 2.167]}
                scale={-0.03}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane201.geometry}
                material={materials["Material.054"]}
                position={[-3.651, 3.719, -0.423]}
                rotation={[0.989, -0.509, -3.021]}
                scale={-0.056}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane202.geometry}
                material={materials["Material.054"]}
                position={[-3.46, 3.795, -0.431]}
                rotation={[1.275, -0.43, -2.67]}
                scale={-0.056}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane203.geometry}
                material={materials["Material.054"]}
                position={[-3.652, 3.87, -0.212]}
                rotation={[1.176, -0.459, -2.991]}
                scale={-0.039}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane204.geometry}
                material={materials["Material.054"]}
                position={[-3.578, 3.952, -0.056]}
                rotation={[1.904, -0.015, -2.22]}
                scale={-0.028}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane205.geometry}
                material={materials["Material.054"]}
                position={[-3.504, 4.007, -0.101]}
                rotation={[1.944, 0.057, -1.924]}
                scale={-0.034}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane206.geometry}
                material={materials["Material.054"]}
                position={[-3.429, 4.036, -0.158]}
                rotation={[2.008, 0.215, -1.978]}
                scale={-0.04}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane207.geometry}
                material={materials["Material.054"]}
                position={[-3.611, 3.994, -0.019]}
                rotation={[1.259, 1.204, -0.042]}
                scale={-0.027}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane208.geometry}
                material={materials["Material.054"]}
                position={[-3.576, 3.96, -0.025]}
                rotation={[2.022, 1.075, -0.692]}
                scale={-0.026}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane209.geometry}
                material={materials["Material.054"]}
                position={[-3.62, 3.966, 0.047]}
                rotation={[0.8, 0.982, 0.947]}
                scale={-0.03}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane210.geometry}
                material={materials["Material.054"]}
                position={[-3.578, 4.022, 0.054]}
                rotation={[0.849, 1.009, 0.6]}
                scale={-0.03}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane211.geometry}
                material={materials["Material.054"]}
                position={[-3.543, 3.958, -0.106]}
                rotation={[1.973, 1.09, -0.342]}
                scale={-0.021}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane212.geometry}
                material={materials["Material.054"]}
                position={[-3.567, 3.968, 0.005]}
                rotation={[1.404, 1.136, -0.007]}
                scale={-0.028}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane213.geometry}
                material={materials["Material.054"]}
                position={[-3.561, 3.987, 0.073]}
                rotation={[1.973, 1.09, -0.342]}
                scale={-0.032}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane214.geometry}
                material={materials["Material.054"]}
                position={[-3.548, 4.021, 0.146]}
                rotation={[1.817, 1.116, -0.36]}
                scale={-0.037}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane215.geometry}
                material={materials["Material.054"]}
                position={[-3.622, 4.031, 0.124]}
                rotation={[1.15, 1.116, 0.359]}
                scale={-0.036}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane216.geometry}
                material={materials["Material.054"]}
                position={[-3.58, 4.004, -0.029]}
                rotation={[1.298, 1.141, 0.381]}
                scale={-0.025}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane217.geometry}
                material={materials["Material.054"]}
                position={[-3.555, 3.983, 0.224]}
                rotation={[1.748, 1.176, -0.004]}
                scale={-0.041}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane218.geometry}
                material={materials["Material.054"]}
                position={[-3.618, 4.001, -0.017]}
                rotation={[0.125, 0.44, 0.922]}
                scale={-0.029}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane219.geometry}
                material={materials["Material.054"]}
                position={[-3.615, 4.086, -0.004]}
                rotation={[0.083, 0.401, 0.673]}
                scale={-0.034}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane220.geometry}
                material={materials["Material.054"]}
                position={[-3.539, 3.901, -0.064]}
                rotation={[0.338, 0.578, 0.652]}
                scale={-0.02}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane221.geometry}
                material={materials["Material.054"]}
                position={[-3.536, 3.942, -0.019]}
                rotation={[0.29, 0.555, 0.373]}
                scale={-0.024}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane222.geometry}
                material={materials["Material.054"]}
                position={[-3.544, 3.991, 0]}
                rotation={[0.433, 0.575, -0.037]}
                scale={-0.029}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane223.geometry}
                material={materials["Material.054"]}
                position={[-3.583, 4.002, 0.041]}
                rotation={[0.499, 0.581, 0.229]}
                scale={-0.03}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane224.geometry}
                material={materials["Material.054"]}
                position={[-3.576, 3.971, -0.043]}
                rotation={[-0.197, 0.256, 0.677]}
                scale={-0.026}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane225.geometry}
                material={materials["Material.054"]}
                position={[-3.63, 4.022, -0.055]}
                rotation={[-0.05, 0.36, 0.594]}
                scale={-0.03}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane226.geometry}
                material={materials["Material.054"]}
                position={[-3.595, 4.09, 0.003]}
                rotation={[0.186, 0.464, 0.299]}
                scale={-0.034}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane227.geometry}
                material={materials["Material.054"]}
                position={[-3.647, 4.078, -0.104]}
                rotation={[-0.329, 0.234, 0.57]}
                scale={-0.035}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane228.geometry}
                material={materials["Material.054"]}
                position={[-3.592, 4.019, -0.009]}
                rotation={[-0.003, 0.402, 0.416]}
                scale={-0.03}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane229.geometry}
                material={materials["Material.054"]}
                position={[-3.568, 4.041, -0.002]}
                rotation={[-0.112, 0.363, 0.315]}
                scale={-0.031}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane230.geometry}
                material={materials["Material.054"]}
                position={[-3.558, 3.975, -0.149]}
                rotation={[-1.124, 0.117, 0.133]}
                scale={-0.035}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane231.geometry}
                material={materials["Material.054"]}
                position={[-3.588, 4.032, -0.096]}
                rotation={[-0.849, 0.168, 0.231]}
                scale={-0.033}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane232.geometry}
                material={materials["Material.054"]}
                position={[-3.506, 4.012, -0.099]}
                rotation={[-0.868, 0.166, -0.075]}
                scale={-0.034}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane233.geometry}
                material={materials["Material.054"]}
                position={[-3.505, 3.962, -0.059]}
                rotation={[-0.879, 0.169, -0.351]}
                scale={-0.031}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane234.geometry}
                material={materials["Material.054"]}
                position={[-3.596, 3.889, 0.016]}
                rotation={[-0.868, 0.166, -0.075]}
                scale={-0.023}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane235.geometry}
                material={materials["Material.054"]}
                position={[-3.46, 4.033, -0.123]}
                rotation={[-0.747, 0.137, -0.404]}
                scale={-0.039}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane236.geometry}
                material={materials["Material.054"]}
                position={[-3.541, 3.915, 0.002]}
                rotation={[-0.631, 0.095, -0.29]}
                scale={-0.025}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Icosphere018.geometry}
                material={materials["Material.055"]}
                position={[-3.625, 3.989, 0.034]}
                rotation={[-1.69, 0, -0.949]}
                scale={0.029}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Icosphere019.geometry}
                material={materials["Material.056"]}
                position={[-3.541, 3.893, -0.043]}
                rotation={[2.62, 0.125, 1.706]}
                scale={0.029}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Icosphere020.geometry}
                material={materials["Material.055"]}
                position={[-3.655, 3.957, -0.045]}
                rotation={[0.953, -1.058, -1.631]}
                scale={0.029}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Icosphere021.geometry}
                material={materials["Material.055"]}
                position={[-3.652, 3.909, -0.021]}
                rotation={[0.326, -0.681, -1.243]}
                scale={0.029}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Icosphere022.geometry}
                material={materials["Material.057"]}
                position={[-3.541, 3.915, 0.002]}
                rotation={[0.144, 0.527, -2.779]}
                scale={0.029}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Icosphere023.geometry}
                material={materials["Material.056"]}
                position={[-3.541, 3.915, 0.002]}
                rotation={[0.42, 0.959, -0.591]}
                scale={0.029}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Icosphere024.geometry}
                material={materials["Material.055"]}
                position={[-3.541, 3.915, 0.002]}
                rotation={[0.558, 0.146, 0.743]}
                scale={0.029}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Icosphere025.geometry}
                material={materials["Material.033"]}
                position={[-3.541, 3.915, 0.002]}
                scale={0.366}
            />
            <group position={[-3.541, 3.915, 0.002]} scale={0.366}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Icosphere029_1.geometry}
                    material={materials["Material.059"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Icosphere029_2.geometry}
                    material={materials["Material.060"]}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane237.geometry}
                material={materials["Material.061"]}
                position={[3.795, 4.254, 0.097]}
                rotation={[-0.631, 0.095, -0.29]}
                scale={-0.033}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane238.geometry}
                material={materials["Material.061"]}
                position={[3.901, 4.409, -0.066]}
                rotation={[-0.747, 0.137, -0.404]}
                scale={-0.05}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane239.geometry}
                material={materials["Material.061"]}
                position={[3.723, 4.22, 0.115]}
                rotation={[-0.868, 0.166, -0.075]}
                scale={-0.029}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane240.geometry}
                material={materials["Material.061"]}
                position={[3.842, 4.316, 0.018]}
                rotation={[-0.879, 0.169, -0.351]}
                scale={-0.041}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane241.geometry}
                material={materials["Material.061"]}
                position={[3.841, 4.382, -0.036]}
                rotation={[-0.868, 0.166, -0.075]}
                scale={-0.045}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane242.geometry}
                material={materials["Material.061"]}
                position={[3.734, 4.407, -0.032]}
                rotation={[-0.849, 0.168, 0.231]}
                scale={-0.043}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane243.geometry}
                material={materials["Material.061"]}
                position={[3.773, 4.333, -0.101]}
                rotation={[-1.124, 0.117, 0.133]}
                scale={-0.046}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane244.geometry}
                material={materials["Material.061"]}
                position={[3.76, 4.419, 0.092]}
                rotation={[-0.112, 0.363, 0.315]}
                scale={-0.041}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane245.geometry}
                material={materials["Material.061"]}
                position={[3.728, 4.39, 0.082]}
                rotation={[-0.003, 0.402, 0.416]}
                scale={-0.039}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane246.geometry}
                material={materials["Material.061"]}
                position={[3.657, 4.467, -0.042]}
                rotation={[-0.329, 0.234, 0.57]}
                scale={-0.046}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane247.geometry}
                material={materials["Material.061"]}
                position={[3.725, 4.483, 0.098]}
                rotation={[0.186, 0.464, 0.299]}
                scale={-0.045}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane248.geometry}
                material={materials["Material.061"]}
                position={[3.679, 4.394, 0.022]}
                rotation={[-0.05, 0.36, 0.594]}
                scale={-0.04}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane249.geometry}
                material={materials["Material.061"]}
                position={[3.75, 4.327, 0.037]}
                rotation={[-0.197, 0.256, 0.677]}
                scale={-0.034}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane250.geometry}
                material={materials["Material.061"]}
                position={[3.74, 4.368, 0.148]}
                rotation={[0.499, 0.581, 0.229]}
                scale={-0.04}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane251.geometry}
                material={materials["Material.061"]}
                position={[3.791, 4.354, 0.094]}
                rotation={[0.433, 0.575, -0.037]}
                scale={-0.037}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane252.geometry}
                material={materials["Material.061"]}
                position={[3.802, 4.29, 0.069]}
                rotation={[0.29, 0.555, 0.373]}
                scale={-0.031}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane253.geometry}
                material={materials["Material.061"]}
                position={[3.798, 4.236, 0.011]}
                rotation={[0.338, 0.578, 0.652]}
                scale={-0.027}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane254.geometry}
                material={materials["Material.061"]}
                position={[3.698, 4.479, 0.089]}
                rotation={[0.083, 0.401, 0.673]}
                scale={-0.045}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane255.geometry}
                material={materials["Material.061"]}
                position={[3.694, 4.367, 0.073]}
                rotation={[0.125, 0.44, 0.922]}
                scale={-0.038}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane256.geometry}
                material={materials["Material.061"]}
                position={[3.777, 4.344, 0.388]}
                rotation={[1.748, 1.176, -0.004]}
                scale={-0.054}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane257.geometry}
                material={materials["Material.061"]}
                position={[3.743, 4.37, 0.057]}
                rotation={[1.298, 1.141, 0.381]}
                scale={-0.032}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane258.geometry}
                material={materials["Material.061"]}
                position={[3.689, 4.406, 0.257]}
                rotation={[1.15, 1.116, 0.359]}
                scale={-0.047}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane259.geometry}
                material={materials["Material.061"]}
                position={[3.786, 4.393, 0.285]}
                rotation={[1.817, 1.116, -0.36]}
                scale={-0.049}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane260.geometry}
                material={materials["Material.061"]}
                position={[3.769, 4.349, 0.19]}
                rotation={[1.973, 1.09, -0.342]}
                scale={-0.042}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane261.geometry}
                material={materials["Material.061"]}
                position={[3.761, 4.324, 0.101]}
                rotation={[1.404, 1.136, -0.007]}
                scale={-0.036}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane262.geometry}
                material={materials["Material.061"]}
                position={[3.792, 4.31, -0.045]}
                rotation={[1.973, 1.09, -0.342]}
                scale={-0.027}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane263.geometry}
                material={materials["Material.061"]}
                position={[3.747, 4.395, 0.166]}
                rotation={[0.849, 1.009, 0.6]}
                scale={-0.039}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane264.geometry}
                material={materials["Material.061"]}
                position={[3.691, 4.321, 0.155]}
                rotation={[0.8, 0.982, 0.947]}
                scale={-0.039}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane265.geometry}
                material={materials["Material.061"]}
                position={[3.749, 4.314, 0.062]}
                rotation={[2.022, 1.075, -0.692]}
                scale={-0.034}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane266.geometry}
                material={materials["Material.061"]}
                position={[3.703, 4.358, 0.07]}
                rotation={[1.259, 1.204, -0.042]}
                scale={-0.035}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane267.geometry}
                material={materials["Material.061"]}
                position={[3.942, 4.412, -0.112]}
                rotation={[2.008, 0.215, -1.978]}
                scale={-0.053}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane268.geometry}
                material={materials["Material.061"]}
                position={[3.844, 4.374, -0.038]}
                rotation={[1.944, 0.057, -1.924]}
                scale={-0.044}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane269.geometry}
                material={materials["Material.061"]}
                position={[3.747, 4.303, 0.022]}
                rotation={[1.904, -0.015, -2.22]}
                scale={-0.037}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane270.geometry}
                material={materials["Material.061"]}
                position={[3.649, 4.196, -0.184]}
                rotation={[1.176, -0.459, -2.991]}
                scale={-0.051}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane271.geometry}
                material={materials["Material.061"]}
                position={[3.902, 4.098, -0.47]}
                rotation={[1.275, -0.43, -2.67]}
                scale={-0.073}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane272.geometry}
                material={materials["Material.061"]}
                position={[3.651, 3.997, -0.459]}
                rotation={[0.989, -0.509, -3.021]}
                scale={-0.073}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane273.geometry}
                material={materials["Material.061"]}
                position={[3.644, 4.295, 0.087]}
                rotation={[-0.104, 0.036, 2.167]}
                scale={-0.039}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane274.geometry}
                material={materials["Material.061"]}
                position={[3.579, 4.289, 0.119]}
                rotation={[-0.139, 0.099, 1.995]}
                scale={-0.044}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane275.geometry}
                material={materials["Material.061"]}
                position={[3.847, 4.374, 0.064]}
                rotation={[-0.15, 0.14, 1.673]}
                scale={-0.026}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane276.geometry}
                material={materials["Material.061"]}
                position={[3.579, 4.317, 0.052]}
                rotation={[-0.126, -0.163, 1.63]}
                scale={-0.044}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane277.geometry}
                material={materials["Material.061"]}
                position={[3.52, 4.305, 0.124]}
                rotation={[-0.147, -0.048, 1.876]}
                scale={-0.047}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane278.geometry}
                material={materials["Material.061"]}
                position={[3.42, 4.323, 0.011]}
                rotation={[-0.081, -0.327, 1.722]}
                scale={-0.053}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane279.geometry}
                material={materials["Material.061"]}
                position={[3.63, 4.402, 0.058]}
                rotation={[-0.076, 0.014, 1.387]}
                scale={-0.042}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane280.geometry}
                material={materials["Material.061"]}
                position={[3.679, 4.39, 0.003]}
                rotation={[-0.396, -0.86, 1.085]}
                scale={-0.041}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane281.geometry}
                material={materials["Material.061"]}
                position={[3.971, 3.997, 0.076]}
                rotation={[1.782, -0.87, -1.093]}
                scale={-0.059}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane282.geometry}
                material={materials["Material.061"]}
                position={[3.802, 4.115, 0.116]}
                rotation={[2.155, -1.069, -0.406]}
                scale={-0.045}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane283.geometry}
                material={materials["Material.061"]}
                position={[3.801, 3.788, 0.094]}
                rotation={[2.66, -1.143, -0.219]}
                scale={-0.067}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane284.geometry}
                material={materials["Material.062"]}
                position={[3.795, 4.254, 0.097]}
                rotation={[2.292, -0.624, 0.206]}
                scale={[-0.031, -0.022, -0.022]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane285.geometry}
                material={materials["Material.062"]}
                position={[3.72, 4.299, 0.278]}
                rotation={[-1.394, 1.258, -3.14]}
                scale={[-0.019, -0.014, -0.014]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane286.geometry}
                material={materials["Material.062"]}
                position={[3.714, 4.214, 0.265]}
                rotation={[-2.964, -1.414, -1.476]}
                scale={[0.02, 0.014, 0.014]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane287.geometry}
                material={materials["Material.062"]}
                position={[3.623, 4.266, 0.258]}
                rotation={[-0.585, 1.159, -0.847]}
                scale={[0.019, 0.013, 0.013]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane288.geometry}
                material={materials["Material.062"]}
                position={[3.731, 4.221, 0.225]}
                rotation={[0.285, -0.748, -1.278]}
                scale={[-0.026, -0.018, -0.018]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane289.geometry}
                material={materials["Material.062"]}
                position={[3.596, 4.262, 0.093]}
                rotation={[-1.978, -0.095, 2.212]}
                scale={[-0.025, -0.018, -0.018]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane290.geometry}
                material={materials["Material.062"]}
                position={[3.563, 4.127, -0.105]}
                rotation={[1.289, 0.354, 2.675]}
                scale={[-0.014, -0.01, -0.01]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane291.geometry}
                material={materials["Material.062"]}
                position={[3.58, 4.187, -0.146]}
                rotation={[-1.973, -0.038, -2.575]}
                scale={[0.014, 0.01, 0.01]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane292.geometry}
                material={materials["Material.062"]}
                position={[3.542, 4.239, -0.178]}
                rotation={[-1.758, -0.038, -2.525]}
                scale={[0.012, 0.008, 0.008]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane293.geometry}
                material={materials["Material.062"]}
                position={[3.567, 4.232, -0.179]}
                rotation={[-1.89, 0.426, -2.622]}
                scale={[0.012, 0.009, 0.009]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane294.geometry}
                material={materials["Material.062"]}
                position={[3.539, 4.254, -0.143]}
                rotation={[-2.052, 0.538, -2.192]}
                scale={[0.014, 0.01, 0.01]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane295.geometry}
                material={materials["Material.062"]}
                position={[3.537, 4.286, -0.202]}
                rotation={[-1.642, 0.335, -2.642]}
                scale={[0.011, 0.008, 0.008]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane296.geometry}
                material={materials["Material.062"]}
                position={[3.61, 4.097, -0.113]}
                rotation={[-2.854, 0.856, -2.494]}
                scale={[0.013, 0.009, 0.009]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane297.geometry}
                material={materials["Material.062"]}
                position={[3.53, 4.138, -0.073]}
                rotation={[-3.021, 0.748, -2.292]}
                scale={[0.013, 0.01, 0.01]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane298.geometry}
                material={materials["Material.061"]}
                position={[3.756, 4.324, 0.077]}
                rotation={[2.364, 0.897, -0.81]}
                scale={-0.034}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane299.geometry}
                material={materials["Material.061"]}
                position={[3.776, 4.331, 0.044]}
                rotation={[2.324, 0.861, -1.089]}
                scale={-0.034}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane300.geometry}
                material={materials["Material.061"]}
                position={[3.751, 4.364, 0.019]}
                rotation={[2.247, 0.869, -1.341]}
                scale={-0.034}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane301.geometry}
                material={materials["Material.061"]}
                position={[3.739, 4.389, 0.037]}
                rotation={[1.755, 1.104, -0.869]}
                scale={-0.035}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane302.geometry}
                material={materials["Material.062"]}
                position={[3.855, 4.275, 0.175]}
                rotation={[-0.155, 0.166, -1.641]}
                scale={[-0.025, -0.018, -0.018]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane303.geometry}
                material={materials["Material.062"]}
                position={[3.736, 4.263, -0.177]}
                rotation={[-1.696, -1.51, -3.093]}
                scale={[0.016, 0.012, 0.012]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane304.geometry}
                material={materials["Material.062"]}
                position={[3.535, 4.439, -0.002]}
                rotation={[2.139, -0.27, 2.45]}
                scale={[-0.018, -0.012, -0.012]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane305.geometry}
                material={materials["Material.062"]}
                position={[3.649, 4.499, 0.008]}
                rotation={[2.774, 0.923, -0.321]}
                scale={[0.018, 0.013, 0.013]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane306.geometry}
                material={materials["Material.062"]}
                position={[3.889, 4.443, 0.117]}
                rotation={[2.846, 0.68, -2.411]}
                scale={[-0.018, -0.013, -0.013]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane307.geometry}
                material={materials["Material.061"]}
                position={[3.822, 4.403, 0.089]}
                rotation={[0.027, -0.111, 2.434]}
                scale={-0.024}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane308.geometry}
                material={materials["Material.061"]}
                position={[3.679, 4.336, 0.034]}
                rotation={[0.206, -0.286, 2.283]}
                scale={-0.035}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane309.geometry}
                material={materials["Material.061"]}
                position={[3.762, 4.393, 0.147]}
                rotation={[0.206, -0.286, 2.283]}
                scale={-0.026}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane310.geometry}
                material={materials["Material.061"]}
                position={[3.718, 4.367, 0.064]}
                rotation={[0.286, -0.361, 2.444]}
                scale={-0.031}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane311.geometry}
                material={materials["Material.062"]}
                position={[3.824, 4.113, -0.077]}
                rotation={[-2.589, -0.364, -0.205]}
                scale={[-0.015, -0.011, -0.011]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane312.geometry}
                material={materials["Material.062"]}
                position={[3.824, 4.099, 0.05]}
                rotation={[-0.548, 0.827, 0.885]}
                scale={[0.017, 0.012, 0.012]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane313.geometry}
                material={materials["Material.062"]}
                position={[3.787, 4.037, 0.009]}
                rotation={[2.784, -1.161, -0.723]}
                scale={[-0.014, -0.01, -0.01]}
            />
            <group
                position={[3.795, 4.254, 0.097]}
                rotation={[-0.26, 0.012, 0.91]}
                scale={-0.005}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane017_1.geometry}
                    material={materials["Material.063"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane017_2.geometry}
                    material={materials["Material.064"]}
                />
            </group>
            <group
                position={[3.703, 4.266, -0.077]}
                rotation={[0.365, 0.081, -2.352]}
                scale={-0.006}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane017_1.geometry}
                    material={materials["Material.063"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane017_2.geometry}
                    material={materials["Material.064"]}
                />
            </group>
            <group position={[3.795, 4.254, 0.097]} scale={0.479}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Icosphere030_1.geometry}
                    material={materials["Material.065"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Icosphere030_2.geometry}
                    material={materials["Material.066"]}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Icosphere028.geometry}
                material={materials["Material.033"]}
                position={[3.795, 4.254, 0.097]}
                scale={0.479}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Icosphere029.geometry}
                material={materials["Material.068"]}
                position={[3.795, 4.254, 0.097]}
                rotation={[0.558, 0.146, 0.743]}
                scale={0.038}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Icosphere030.geometry}
                material={materials["Material.069"]}
                position={[3.795, 4.254, 0.097]}
                rotation={[0.42, 0.959, -0.591]}
                scale={0.038}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Icosphere031.geometry}
                material={materials["Material.070"]}
                position={[3.795, 4.254, 0.097]}
                rotation={[0.144, 0.527, -2.779]}
                scale={0.038}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Icosphere032.geometry}
                material={materials["Material.068"]}
                position={[3.65, 4.246, 0.067]}
                rotation={[0.326, -0.681, -1.243]}
                scale={0.038}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Icosphere033.geometry}
                material={materials["Material.068"]}
                position={[3.646, 4.309, 0.036]}
                rotation={[0.953, -1.058, -1.631]}
                scale={0.038}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Icosphere034.geometry}
                material={materials["Material.069"]}
                position={[3.795, 4.226, 0.038]}
                rotation={[2.62, 0.125, 1.706]}
                scale={0.038}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Icosphere035.geometry}
                material={materials["Material.068"]}
                position={[3.686, 4.351, 0.139]}
                rotation={[-1.69, 0, -0.949]}
                scale={0.038}
            />
            <group scale={0.01}>
                <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.body_Material001_0.geometry}
                        material={materials["Material.001"]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.body_Material002_0.geometry}
                        material={materials["Material.013"]}
                    />
                </group>
                <group
                    position={[375.469, 427.948, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={62.402}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Sphere_Material001_0.geometry}
                        material={materials["Material.001"]}
                        position={[0.006, -0.145, -0.014]}
                        scale={0.956}
                    />
                </group>
                <group
                    position={[-357.404, 392.646, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={41.075}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Sphere003_Material002_0.geometry}
                        material={materials["Material.013"]}
                        position={[0.001, 0.034, 0]}
                        scale={1.084}
                    />
                </group>
                <group
                    position={[-341.988, 460.196, -117.028]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={62.402}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Sphere005_Material001_0.geometry}
                        material={materials["Material.001"]}
                        position={[0.303, -0.036, 0.012]}
                        scale={1.129}
                    />
                </group>
                <group
                    position={[199.634, 566.883, -221.001]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={41.075}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Sphere008_Material002_0.geometry}
                        material={materials["Material.013"]}
                        scale={0.838}
                    />
                </group>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube_Material001_0.geometry}
                    material={materials["Material.001"]}
                    position={[0, -101.673, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={[1120.014, 1120.013, 100]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.particles_Material002_0.geometry}
                    material={materials["Material.013"]}
                    position={[489.69, 793.811, 355.293]}
                    rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                    scale={20.408}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere009_Material002_0.geometry}
                    material={materials["Material.013"]}
                    position={[507.522, 667.594, -214.475]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={16.881}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere010_Material002_0.geometry}
                    material={materials["Material.013"]}
                    position={[-287.442, 585.792, -311.857]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={16.881}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere011_Material002_0.geometry}
                    material={materials["Material.013"]}
                    position={[-553.462, 331.074, -379.067]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={11.437}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.waves_Material002_0.geometry}
                    material={materials["Material.013"]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={[100, 100, 1.891]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.waves1_Material002_0.geometry}
                    material={materials["Material.013"]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={[100, 100, 1.891]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.waves2_Material002_0.geometry}
                    material={materials["Material.013"]}
                    position={[92.464, 15.529, 2.112]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={[100, 100, 1.891]}
                />
            </group>
        </group>
    );
}

useGLTF.preload("/spaceBoinew.glb");

export default Space_Boi