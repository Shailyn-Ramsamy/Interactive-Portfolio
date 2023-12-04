import { useRef, useEffect } from "react";
import { useGLTF, useAnimations, OrbitControls } from "@react-three/drei";
import {useFrame, useThree} from '@react-three/fiber'
import {a} from '@react-spring/three'

import islandScene from '../assets/3d/island.glb'

const Island = ({isRotating, setIsRotating, setCurrentStage, ...props}) => {
    const islandRef = useRef();

    const {gl, viewport} = useThree();


    const group = useRef();
    const { nodes, materials, animations } = useGLTF(islandScene);
    const { actions } = useAnimations(animations, group);
    return (
        <a.group ref={islandRef} {...props}>
            <group position={[3.788, -9.232, 4.034]} rotation={[-Math.PI / 2, 0, 0]}>
                <group position={[-1.639, 2.332, 9.434]}>
                    <group scale={[2.784, 2.784, 0.206]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Cabin_1.geometry}
                            material={materials["Material.010"]}
                            position={[-0.033, 0.4, -0.094]}
                            rotation={[0, 0, -1.613]}
                            scale={2.906}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Cabin_2.geometry}
                            material={materials["Material.011"]}
                            position={[-0.033, 0.4, -0.094]}
                            rotation={[0, 0, -1.613]}
                            scale={2.906}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Cabin_3.geometry}
                            material={materials["Material.012"]}
                            position={[-0.033, 0.4, -0.094]}
                            rotation={[0, 0, -1.613]}
                            scale={2.906}
                        />
                    </group>
                    <group
                        position={[0.301, 0.006, 2.352]}
                        rotation={[0, 0, -Math.PI]}
                        scale={[0.12, 0.176, 0.12]}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.cabin_2nd_floor_0.geometry}
                            material={materials["Material.011"]}
                            position={[3.415, -1.323, 37.19]}
                            rotation={[0, 0, -1.616]}
                            scale={2.906}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.cabin_2nd_floor_1.geometry}
                            material={materials["Material.012"]}
                            position={[3.415, -1.323, 37.19]}
                            rotation={[0, 0, -1.616]}
                            scale={2.906}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.cabin_2nd_floor_2.geometry}
                            material={materials["Material.013"]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.cabin_2nd_floor_3.geometry}
                            material={materials["Material.010"]}
                            position={[3.415, -1.323, 37.19]}
                            rotation={[0, 0, -1.616]}
                            scale={2.906}
                        />
                    </group>
                    <group
                        position={[1.968, -1.867, 0.312]}
                        rotation={[0, 0, -1.651]}
                        scale={[0.112, 0.087, 0.08]}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.stone001_0.geometry}
                            material={materials["Material.022"]}
                            position={[32.34, -116.61, -9.113]}
                            scale={3.841}
                        />
                    </group>
                    <group
                        position={[-1.406, -1.867, 0.327]}
                        rotation={[0, 0, -0.489]}
                        scale={[0.165, 0.165, 0.118]}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.stone003_0.geometry}
                            material={materials["Material.022"]}
                            position={[60.603, 18.642, -6.04]}
                            scale={2.342}
                        />
                    </group>
                    <group position={[-1.665, -2.419, 0.455]} scale={0.219}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.stone004_0.geometry}
                            material={materials["Material.022"]}
                            position={[42.465, -10.397, -1.647]}
                            scale={2.52}
                        />
                    </group>
                    <group
                        position={[5.685, 3, -5]}
                        rotation={[0.025, -0.056, -0.032]}
                        scale={[2*0.132, 2*0.132, 2*0.16]}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.trees_0.geometry}
                            material={materials["Material.017"]}
                            position={[-16.065, 21.424, 20.007]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.trees_1.geometry}
                            material={materials["Material.016"]}
                            position={[-16.065, 21.424, 20.007]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.trees_2.geometry}
                            material={materials["Material.018"]}
                            position={[-16.065, 21.424, 20.007]}
                        />
                    </group>
                    <group
                        position={[-8.56, 3.743, 0.881]}
                        rotation={[0.025, -0.186, 1.434]}
                        scale={[0.421, 0.421, 0.515]}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.trees001_0.geometry}
                            material={materials["Material.020"]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.trees001_1.geometry}
                            material={materials["Material.016"]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.trees001_2.geometry}
                            material={materials["Material.019"]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.trees001_3.geometry}
                            material={materials["Material.017"]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.trees001_4.geometry}
                            material={materials["Material.018"]}
                        />
                    </group>
                    <group
                        position={[-2.077, 0.633, 0.484]}
                        rotation={[-0.015, 0.021, -0.225]}
                        scale={[0.089, 0.089, 0.109]}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.trees002_0.geometry}
                            material={materials["Material.017"]}
                            position={[89.511, 16.553, -9.172]}
                            scale={3.124}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.trees002_1.geometry}
                            material={materials["Material.016"]}
                        />
                    </group>
                    <group
                        position={[-2.508, 0.634, 0.685]}
                        rotation={[-0.181, 0.051, -0.541]}
                        scale={[0.143, 0.143, 0.175]}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.trees003_0.geometry}
                            material={materials["Material.019"]}
                            position={[43.285, 26.704, -2.241]}
                            scale={3.124}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.trees003_2.geometry}
                            material={materials["Material.017"]}
                            position={[-83.425, 39.285, 10.68]}
                            scale={3.124}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.trees003_3.geometry}
                            material={materials["Material.020"]}
                            position={[43.285, 26.704, -2.241]}
                            scale={3.124}
                        />
                    </group>
                    <group
                        position={[-2.629, 2.077, 0.869]}
                        rotation={[-0.164, -0.048, 0.037]}
                        scale={[0.177, 0.177, 0.217]}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.trees004_0.geometry}
                            material={materials["Material.020"]}
                            position={[-36.178, -17.555, -0.134]}
                            scale={3.124}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.trees004_2.geometry}
                            material={materials["Material.017"]}
                            position={[-36.178, -17.555, -0.134]}
                            scale={3.124}
                        />
                    </group>
                    <group
                        position={[-2.174, -2.501, 0.901]}
                        rotation={[0.053, 0, 0]}
                        scale={[0.177, 0.177, 0.215]}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.trees005_0.geometry}
                            material={materials["Material.017"]}
                            position={[-28.249, 51.126, -2.012]}
                            rotation={[-0.051, -0.046, -1.361]}
                            scale={3.124}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.trees005_1.geometry}
                            material={materials["Material.016"]}
                            position={[-39.19, 41.058, 2.318]}
                            scale={2.435}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.trees005_2.geometry}
                            material={materials["Material.018"]}
                            position={[32.682, 54.234, -0.762]}
                            rotation={[-0.05, -0.046, -1.359]}
                            scale={3.124}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.trees005_3.geometry}
                            material={materials["Material.019"]}
                            position={[32.682, 54.234, -0.762]}
                            rotation={[-0.05, -0.046, -1.359]}
                            scale={3.124}
                        />
                    </group>
                    <group position={[-1.426, 1.764, 3.017]} scale={0.497}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.water_tank__0.geometry}
                            material={materials["Material.015"]}
                            position={[-8.17, -0.932, 7.842]}
                            scale={2.503}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.water_tank__1.geometry}
                            material={materials["Material.016"]}
                            position={[-8.17, -0.932, 7.842]}
                            scale={2.503}
                        />
                    </group>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.stone_0.geometry}
                        material={materials["Material.022"]}
                        position={[-13.37, 5.197, 0.203]}
                        rotation={[-0.013, 0, 1.538]}
                        scale={0.497}
                    />
                </group>
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane.geometry}
                material={nodes.Plane.material}
                position={[2.105, 0.065, 1.075]}
                rotation={[Math.PI, -1.529, Math.PI]}
                scale={3.14}
            />
            <group
                position={[4.513, -2.288, 35.25]}
                rotation={[-1.546, 0, -1.616]}
                scale={0.642}
            >
                <group
                    position={[0.772, -0.115, 0.193]}
                    rotation={[0, 0, -0.796]}
                    scale={[0.121, 0.07, 0.031]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.stones_0001.geometry}
                        material={materials["Material.024"]}
                        position={[-237.505, -556.062, 87.985]}
                        rotation={[-0.303, -0.28, -0.011]}
                        scale={6.758}
                    />
                </group>
            </group>
            <group position={[38.849, 1.519, -3.074]} rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.trees001_2001.geometry}
                    material={materials["Material.025"]}
                    position={[-28.695, 1.796, -0.971]}
                    rotation={[0.025, -0.186, 1.434]}
                    scale={[0.421, 0.421, 0.515]}
                />
            </group>
            <group
                position={[27.746, 1.885, 9.291]}
                rotation={[-Math.PI / 2, 0, -0.556]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.stone_0001.geometry}
                    material={materials["Material.026"]}
                    position={[-33.505, 3.249, -1.649]}
                    rotation={[-0.013, 0, 1.538]}
                    scale={0.497}
                />
            </group>
            <group scale={0.01}>
                <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                    <mesh
                        receiveShadow
                        geometry={nodes.Island_IslandDirt_0.geometry}
                        material={materials.IslandDirt}
                    />
                    <mesh
                        receiveShadow
                        geometry={nodes.Island_IslandGrass_0.geometry}
                        material={materials.IslandGrass}
                    />
                </group>
            </group>
        </a.group>
    );
}

useGLTF.preload("/NewIsland4.glb");

export default Island;