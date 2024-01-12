import { useRef, useEffect, useState } from "react";
import { useGLTF, useAnimations, OrbitControls } from "@react-three/drei";
import {useFrame, useThree} from '@react-three/fiber'
import {a} from '@react-spring/three'
import { MeshStandardMaterial } from 'three';
import islandScene from '../assets/3d/planetAnim.glb'
import * as THREE from 'three';

const Island = ({isRotating, setIsRotating, islandPos, currentStage,...props}) => {
    const islandRef = useRef();

    const {gl, viewport} = useThree();
    const [count, setCount] = useState(0);
    const [animationPlayed, setAnimationPlayed] = useState(false);
    const group = useRef();
    const { nodes, materials, animations } = useGLTF(islandScene);
    const { actions, mixer } = useAnimations(animations, islandRef);

    const [floatingPosition, setFloatingPosition] = useState([0, 0, 0]);
    const floatingAmplitude = 0.5;
    const floatingSpeed = 0.002;

    useEffect(() => {
        const updateFloatingPosition = () => {
            const yPos = Math.sin(Date.now() * floatingSpeed) * floatingAmplitude;
            setFloatingPosition((prev) => [prev[0], yPos, prev[2]]);
        };

        const updateId = setInterval(updateFloatingPosition, 16); // Update every frame
        return () => clearInterval(updateId);
    }, []);

    useFrame(() => {
        // Update the island's position using the state
        islandRef.current.position.set(...floatingPosition);
    });


    useEffect(() => {
        const action2 = actions['Icosphere.453Action.002'];
        const action3 = actions['Icosphere.453Action.001'];
        const action4 = actions['Icosphere.453Action.003'];
        const action1 = actions['Icosphere.453Action.005'];

        const handleAnimationFinish = () => {
            console.log("Animation finished");
            // Do something when the animation finishes
        };

        if (action1) {
            if (currentStage === 1) {

                action1.reset();

                if (action1.clampWhenFinished){
                    console.log("yes");
                }

                // If animation is not playing, or is playing in reverse, play it forward
                if (!animationPlayed || action1.timeScale < 0) {
                    action1.setLoop(THREE.LoopOnce, 1);
                    action1.clampWhenFinished = true;
                    action1.setEffectiveTimeScale(2.5);
                    // Set the animationPlayed state to true when played forward initially
                    setAnimationPlayed(true);
                }
            } else if (currentStage !== 1 && animationPlayed) {
                // Play in reverse with a negative time scale
                action1.setLoop(THREE.LoopOnce, 1);
                action1.clampWhenFinished = true;
                action1.setEffectiveTimeScale(-8);
                action1.play();
            }


        }

        if (action2) {
            if (currentStage === 2) {
                action2.reset();
                // If animation is not playing, or is playing in reverse, play it forward
                if (!animationPlayed || action2.timeScale < 0) {
                    action2.setLoop(THREE.LoopOnce, 1);
                    action2.clampWhenFinished = true;
                    action2.setEffectiveTimeScale(2.5);
                    action2.play();

                    // Set the animationPlayed state to true when played forward initially
                    setAnimationPlayed(true);
                }
            } else if (currentStage !== 2 && animationPlayed) {
                // Play in reverse with a negative time scale
                action2.setLoop(THREE.LoopOnce, 1);
                action2.clampWhenFinished = true;
                action2.setEffectiveTimeScale(-8);
                action2.play();
            }
        }

        if (action3) {
            if (currentStage === 3) {
                action3.reset();
                // If animation is not playing, or is playing in reverse, play it forward
                if (!animationPlayed || action3.timeScale < 0) {
                    action3.setLoop(THREE.LoopOnce, 1);
                    action3.clampWhenFinished = true;
                    action3.setEffectiveTimeScale(2.5);
                    action3.play();

                    // Set the animationPlayed state to true when played forward initially
                    setAnimationPlayed(true);
                }
            } else if (currentStage !== 3 && animationPlayed) {
                // Play in reverse with a negative time scale
                action3.setLoop(THREE.LoopOnce, 1);
                action3.clampWhenFinished = true;
                action3.setEffectiveTimeScale(-8);
                action3.play();
            }
        }

        if (action4) {
            if (currentStage === 4) {
                action4.reset();
                // If animation is not playing, or is playing in reverse, play it forward
                if (!animationPlayed || action4.timeScale < 0) {
                    action4.setLoop(THREE.LoopOnce, 1);
                    action4.clampWhenFinished = true;
                    action4.setEffectiveTimeScale(2.5);
                    action4.play();

                    // Set the animationPlayed state to true when played forward initially
                    setAnimationPlayed(true);
                }
            } else if (currentStage !== 4 && animationPlayed) {
                // Play in reverse with a negative time scale
                action4.setLoop(THREE.LoopOnce, 1);
                action4.clampWhenFinished = true;
                action4.setEffectiveTimeScale(-8);
                action4.play();
            }
        }
    }, [actions, mixer, currentStage, animationPlayed]);








    useFrame(() => {
        // Update the animation mixer
        mixer.update(0.016); // Pass delta time to update the mixer
    });

    return (
        <a.group ref={islandRef} {...props}>
            <group name="Scene">
                <group
                    name="Sketchfab_model002"
                    position={[4.513, -2.288, 35.25]}
                    rotation={[-1.546, 0, -1.616]}
                    scale={0.642}
                >
                    <group name="Root001">
                        <group
                            name="stones001"
                            position={[0.772, -0.115, 0.193]}
                            rotation={[0, 0, -0.796]}
                            scale={[0.121, 0.07, 0.031]}
                        />
                    </group>
                </group>
                <group
                    name="Sketchfab_model003"
                    position={[38.849, 1.519, -3.074]}
                    rotation={[-Math.PI / 2, 0, 0]}
                >
                    <group name="Root002" />
                </group>
                <group
                    name="Sketchfab_model001"
                    position={[-7.341, -2.704, -9.221]}
                    rotation={[-Math.PI / 2, 0, 0]}
                >
                    <group name="Root003" />
                </group>
                <group
                    name="Sketchfab_model004"
                    position={[-18.444, -2.337, 3.144]}
                    rotation={[-Math.PI / 2, 0, -0.556]}
                >
                    <group name="Root004" />
                </group>
                <group name="Icosphere">
                    <mesh
                        name="Icosphere_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Icosphere_1.geometry}
                        material={materials["Material.002"]}
                    />
                    <mesh
                        name="Icosphere_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Icosphere_2.geometry}
                        material={materials["Material.011"]}
                    />
                </group>
                <mesh
                    name="Icosphere001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Icosphere001.geometry}
                    material={materials["Material.003"]}
                />
                <mesh
                    name="Plane"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane.geometry}
                    material={materials["Material.004"]}
                    position={[-0.246, -0.839, 0.639]}
                    rotation={[-0.631, 0.095, -0.29]}
                    scale={-0.069}
                />
                <mesh
                    name="Plane002"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane002.geometry}
                    material={materials["Material.004"]}
                    position={[-0.394, -0.705, 0.721]}
                    rotation={[-0.747, 0.137, -0.404]}
                    scale={-0.105}
                />
                <mesh
                    name="Plane004"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane004.geometry}
                    material={materials["Material.004"]}
                    position={[-0.16, -0.725, 0.793]}
                    rotation={[-0.868, 0.166, -0.075]}
                    scale={-0.062}
                />
                <mesh
                    name="Plane005"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane005.geometry}
                    material={materials["Material.004"]}
                    position={[-0.312, -0.622, 0.834]}
                    rotation={[-0.879, 0.169, -0.351]}
                    scale={-0.086}
                />
                <mesh
                    name="Plane006"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane006.geometry}
                    material={materials["Material.004"]}
                    position={[0.001, -0.678, 0.847]}
                    rotation={[-0.868, 0.166, -0.075]}
                    scale={-0.093}
                />
                <mesh
                    name="Plane007"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane007.geometry}
                    material={materials["Material.004"]}
                    position={[0.196, -0.682, 0.773]}
                    rotation={[-0.849, 0.168, 0.231]}
                    scale={-0.091}
                />
                <mesh
                    name="Plane008"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane008.geometry}
                    material={materials["Material.004"]}
                    position={[0.146, -0.544, 0.926]}
                    rotation={[-1.124, 0.117, 0.133]}
                    scale={-0.096}
                />
                <mesh
                    name="Plane009"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane009.geometry}
                    material={materials["Material.004"]}
                    position={[0.331, -0.997, 0.079]}
                    rotation={[-0.112, 0.363, 0.315]}
                    scale={-0.085}
                />
                <mesh
                    name="Plane010"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane010.geometry}
                    material={materials["Material.004"]}
                    position={[0.362, -0.977, -0.132]}
                    rotation={[-0.003, 0.402, 0.416]}
                    scale={-0.081}
                />
                <mesh
                    name="Plane011"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane011.geometry}
                    material={materials["Material.004"]}
                    position={[0.504, -0.93, 0.032]}
                    rotation={[-0.329, 0.234, 0.57]}
                    scale={-0.097}
                />
                <mesh
                    name="Plane012"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane012.geometry}
                    material={materials["Material.004"]}
                    position={[0.254, -0.962, -0.333]}
                    rotation={[0.186, 0.464, 0.299]}
                    scale={-0.094}
                />
                <mesh
                    name="Plane013"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane013.geometry}
                    material={materials["Material.004"]}
                    position={[0.464, -0.911, -0.266]}
                    rotation={[-0.05, 0.36, 0.594]}
                    scale={-0.083}
                />
                <mesh
                    name="Plane014"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane014.geometry}
                    material={materials["Material.004"]}
                    position={[0.619, -0.844, -0.05]}
                    rotation={[-0.197, 0.256, 0.677]}
                    scale={-0.071}
                />
                <mesh
                    name="Plane015"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane015.geometry}
                    material={materials["Material.004"]}
                    position={[0.17, -0.901, -0.518]}
                    rotation={[0.499, 0.581, 0.229]}
                    scale={-0.083}
                />
                <mesh
                    name="Plane016"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane016.geometry}
                    material={materials["Material.004"]}
                    position={[0.007, -0.984, -0.372]}
                    rotation={[0.433, 0.575, -0.037]}
                    scale={-0.078}
                />
                <mesh
                    name="Plane017"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane017.geometry}
                    material={materials["Material.004"]}
                    position={[0.391, -0.882, -0.417]}
                    rotation={[0.29, 0.555, 0.373]}
                    scale={-0.065}
                />
                <mesh
                    name="Plane018"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane018.geometry}
                    material={materials["Material.004"]}
                    position={[0.529, -0.728, -0.603]}
                    rotation={[0.338, 0.578, 0.652]}
                    scale={-0.056}
                />
                <mesh
                    name="Plane019"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane019.geometry}
                    material={materials["Material.004"]}
                    position={[0.651, -0.783, -0.367]}
                    rotation={[0.083, 0.401, 0.673]}
                    scale={-0.093}
                />
                <mesh
                    name="Plane020"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane020.geometry}
                    material={materials["Material.004"]}
                    position={[0.741, -0.63, -0.484]}
                    rotation={[0.125, 0.44, 0.922]}
                    scale={-0.08}
                />
                <mesh
                    name="Plane022"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane022.geometry}
                    material={materials["Material.004"]}
                    position={[0.168, 0.129, -1.061]}
                    rotation={[1.298, 1.141, 0.381]}
                    scale={-0.067}
                />
                <mesh
                    name="Plane023"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane023.geometry}
                    material={materials["Material.004"]}
                    position={[0.104, -0.059, -1.075]}
                    rotation={[1.15, 1.116, 0.359]}
                    scale={-0.098}
                />
                <mesh
                    name="Plane024"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane024.geometry}
                    material={materials["Material.004"]}
                    position={[-0.163, -0.072, -1.066]}
                    rotation={[1.817, 1.116, -0.36]}
                    scale={-0.102}
                />
                <mesh
                    name="Plane025"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane025.geometry}
                    material={materials["Material.004"]}
                    position={[-0.158, 0.103, -1.063]}
                    rotation={[1.973, 1.09, -0.342]}
                    scale={-0.087}
                />
                <mesh
                    name="Plane026"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane026.geometry}
                    material={materials["Material.004"]}
                    position={[0.035, -0.251, -1.054]}
                    rotation={[1.404, 1.136, -0.007]}
                    scale={-0.075}
                />
                <mesh
                    name="Plane027"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane027.geometry}
                    material={materials["Material.004"]}
                    position={[-0.017, 0.025, -1.092]}
                    rotation={[1.973, 1.09, -0.342]}
                    scale={-0.056}
                />
                <mesh
                    name="Plane028"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane028.geometry}
                    material={materials["Material.004"]}
                    position={[0.373, -0.148, -0.97]}
                    rotation={[0.849, 1.009, 0.6]}
                    scale={-0.082}
                />
                <mesh
                    name="Plane029"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane029.geometry}
                    material={materials["Material.004"]}
                    position={[0.449, 0.022, -0.951]}
                    rotation={[0.8, 0.982, 0.947]}
                    scale={-0.081}
                />
                <mesh
                    name="Plane030"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane030.geometry}
                    material={materials["Material.004"]}
                    position={[-0.302, -0.25, -1.011]}
                    rotation={[2.022, 1.075, -0.692]}
                    scale={-0.071}
                />
                <mesh
                    name="Plane031"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane031.geometry}
                    material={materials["Material.004"]}
                    position={[-0.09, -0.359, -1.019]}
                    rotation={[1.259, 1.204, -0.042]}
                    scale={-0.074}
                />
                <mesh
                    name="Plane032"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane032.geometry}
                    material={materials["Material.004"]}
                    position={[-0.954, -0.395, 0.209]}
                    rotation={[2.008, 0.215, -1.978]}
                    scale={-0.11}
                />
                <mesh
                    name="Plane033"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane033.geometry}
                    material={materials["Material.004"]}
                    position={[-0.996, -0.138, 0.306]}
                    rotation={[1.944, 0.057, -1.924]}
                    scale={-0.093}
                />
                <mesh
                    name="Plane034"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane034.geometry}
                    material={materials["Material.004"]}
                    position={[-0.795, -0.243, 0.64]}
                    rotation={[1.904, -0.015, -2.22]}
                    scale={-0.077}
                />
                <mesh
                    name="Plane035"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane035.geometry}
                    material={materials["Material.004"]}
                    position={[-0.214, 0.432, 0.935]}
                    rotation={[1.176, -0.459, -2.991]}
                    scale={-0.107}
                />
                <mesh
                    name="Plane036"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane036.geometry}
                    material={materials["Material.004"]}
                    position={[-0.375, 0.535, 0.827]}
                    rotation={[1.275, -0.43, -2.67]}
                    scale={-0.153}
                />
                <mesh
                    name="Plane037"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane037.geometry}
                    material={materials["Material.004"]}
                    position={[-0.176, 0.651, 0.808]}
                    rotation={[0.989, -0.509, -3.021]}
                    scale={-0.153}
                />
                <mesh
                    name="Plane038"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane038.geometry}
                    material={materials["Material.004"]}
                    position={[0.923, 0.566, -0.078]}
                    rotation={[-0.104, 0.036, 2.167]}
                    scale={-0.081}
                />
                <mesh
                    name="Plane039"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane039.geometry}
                    material={materials["Material.004"]}
                    position={[1.009, 0.391, -0.099]}
                    rotation={[-0.139, 0.099, 1.995]}
                    scale={-0.091}
                />
                <mesh
                    name="Plane040"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane040.geometry}
                    material={materials["Material.004"]}
                    position={[1.064, 0.141, -0.14]}
                    rotation={[-0.15, 0.14, 1.673]}
                    scale={-0.053}
                />
                <mesh
                    name="Plane041"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane041.geometry}
                    material={materials["Material.004"]}
                    position={[1.069, 0.006, 0.18]}
                    rotation={[-0.126, -0.163, 1.63]}
                    scale={-0.092}
                />
                <mesh
                    name="Plane042"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane042.geometry}
                    material={materials["Material.004"]}
                    position={[1.037, 0.318, 0.126]}
                    rotation={[-0.147, -0.048, 1.876]}
                    scale={-0.098}
                />
                <mesh
                    name="Plane043"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane043.geometry}
                    material={materials["Material.004"]}
                    position={[0.96, 0.173, 0.396]}
                    rotation={[-0.081, -0.327, 1.722]}
                    scale={-0.111}
                />
                <mesh
                    name="Plane044"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane044.geometry}
                    material={materials["Material.004"]}
                    position={[1.068, -0.158, -0.028]}
                    rotation={[-0.076, 0.014, 1.387]}
                    scale={-0.087}
                />
                <mesh
                    name="Plane045"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane045.geometry}
                    material={materials["Material.004"]}
                    position={[0.612, -0.159, 0.878]}
                    rotation={[-0.396, -0.86, 1.085]}
                    scale={-0.086}
                />
                <mesh
                    name="Plane046"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane046.geometry}
                    material={materials["Material.004"]}
                    position={[-0.606, 0.808, -0.39]}
                    rotation={[1.782, -0.87, -1.093]}
                    scale={-0.123}
                />
                <mesh
                    name="Plane047"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane047.geometry}
                    material={materials["Material.004"]}
                    position={[-0.175, 0.82, -0.627]}
                    rotation={[2.155, -1.069, -0.406]}
                    scale={-0.095}
                />
                <mesh
                    name="Plane048"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane048.geometry}
                    material={materials["Material.004"]}
                    position={[-0.121, 0.984, -0.353]}
                    rotation={[2.66, -1.143, -0.219]}
                    scale={-0.139}
                />
                <mesh
                    name="Plane050"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane050.geometry}
                    material={materials["Material.005"]}
                    position={[-0.154, -0.517, 0.947]}
                    rotation={[2.292, -0.624, 0.206]}
                    scale={[-0.064, -0.046, -0.046]}
                />
                <mesh
                    name="Plane051"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane051.geometry}
                    material={materials["Material.005"]}
                    position={[-0.047, -0.198, 1.03]}
                    rotation={[-1.394, 1.258, -3.14]}
                    scale={[-0.04, -0.029, -0.029]}
                />
                <mesh
                    name="Plane052"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane052.geometry}
                    material={materials["Material.005"]}
                    position={[-0.185, -0.149, 1.025]}
                    rotation={[-2.964, -1.414, -1.476]}
                    scale={[0.041, 0.029, 0.029]}
                />
                <mesh
                    name="Plane053"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane053.geometry}
                    material={materials["Material.005"]}
                    position={[-0.311, -0.224, 0.979]}
                    rotation={[-0.585, 1.159, -0.847]}
                    scale={[0.039, 0.028, 0.028]}
                />
                <mesh
                    name="Plane054"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane054.geometry}
                    material={materials["Material.005"]}
                    position={[0.675, 0.038, 0.853]}
                    rotation={[0.285, -0.748, -1.278]}
                    scale={[-0.054, -0.038, -0.038]}
                />
                <mesh
                    name="Plane055"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane055.geometry}
                    material={materials["Material.005"]}
                    position={[-0.865, 0.017, 0.617]}
                    rotation={[-1.978, -0.095, 2.212]}
                    scale={[-0.053, -0.037, -0.037]}
                />
                <mesh
                    name="Plane056"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane056.geometry}
                    material={materials["Material.005"]}
                    position={[-0.497, -0.481, -0.799]}
                    rotation={[1.289, 0.354, 2.675]}
                    scale={[-0.029, -0.02, -0.02]}
                />
                <mesh
                    name="Plane057"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane057.geometry}
                    material={materials["Material.005"]}
                    position={[-0.58, -0.33, -0.812]}
                    rotation={[-1.973, -0.038, -2.575]}
                    scale={[0.028, 0.02, 0.02]}
                />
                <mesh
                    name="Plane058"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane058.geometry}
                    material={materials["Material.005"]}
                    position={[-0.631, -0.141, -0.828]}
                    rotation={[-1.758, -0.038, -2.525]}
                    scale={[0.024, 0.017, 0.017]}
                />
                <mesh
                    name="Plane059"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane059.geometry}
                    material={materials["Material.005"]}
                    position={[-0.525, -0.103, -0.904]}
                    rotation={[-1.89, 0.426, -2.622]}
                    scale={[0.026, 0.018, 0.018]}
                />
                <mesh
                    name="Plane060"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane060.geometry}
                    material={materials["Material.005"]}
                    position={[-0.701, 0.031, -0.784]}
                    rotation={[-2.052, 0.538, -2.192]}
                    scale={[0.029, 0.021, 0.021]}
                />
                <mesh
                    name="Plane061"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane061.geometry}
                    material={materials["Material.005"]}
                    position={[-0.563, 0.062, -0.887]}
                    rotation={[-1.642, 0.335, -2.642]}
                    scale={[0.022, 0.016, 0.016]}
                />
                <mesh
                    name="Plane062"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane062.geometry}
                    material={materials["Material.005"]}
                    position={[-0.389, -0.643, -0.736]}
                    rotation={[-2.854, 0.856, -2.494]}
                    scale={[0.027, 0.019, 0.019]}
                />
                <mesh
                    name="Plane063"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane063.geometry}
                    material={materials["Material.005"]}
                    position={[-0.633, -0.552, -0.636]}
                    rotation={[-3.021, 0.748, -2.292]}
                    scale={[0.028, 0.02, 0.02]}
                />
                <mesh
                    name="Plane064"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane064.geometry}
                    material={materials["Material.004"]}
                    position={[-0.456, 0.051, -0.944]}
                    rotation={[2.364, 0.897, -0.81]}
                    scale={-0.071}
                />
                <mesh
                    name="Plane065"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane065.geometry}
                    material={materials["Material.004"]}
                    position={[-0.532, -0.216, -0.883]}
                    rotation={[2.324, 0.861, -1.089]}
                    scale={-0.071}
                />
                <mesh
                    name="Plane066"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane066.geometry}
                    material={materials["Material.004"]}
                    position={[-0.621, -0.416, -0.742]}
                    rotation={[2.247, 0.869, -1.341]}
                    scale={-0.071}
                />
                <mesh
                    name="Plane067"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane067.geometry}
                    material={materials["Material.004"]}
                    position={[-0.37, -0.504, -0.852]}
                    rotation={[1.755, 1.104, -0.869]}
                    scale={-0.074}
                />
                <mesh
                    name="Plane068"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane068.geometry}
                    material={materials["Material.005"]}
                    position={[1.088, -0.047, -0.033]}
                    rotation={[-0.155, 0.166, -1.641]}
                    scale={[-0.052, -0.037, -0.037]}
                />
                <mesh
                    name="Plane069"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane069.geometry}
                    material={materials["Material.005"]}
                    position={[-0.033, -0.218, -1.059]}
                    rotation={[-1.696, -1.51, -3.093]}
                    scale={[0.034, 0.024, 0.024]}
                />
                <mesh
                    name="Plane070"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane070.geometry}
                    material={materials["Material.005"]}
                    position={[-0.681, 0.688, -0.507]}
                    rotation={[2.139, -0.27, 2.45]}
                    scale={[-0.037, -0.026, -0.026]}
                />
                <mesh
                    name="Plane071"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane071.geometry}
                    material={materials["Material.005"]}
                    position={[-0.172, 0.919, -0.491]}
                    rotation={[2.774, 0.923, -0.321]}
                    scale={[0.037, 0.026, 0.026]}
                />
                <mesh
                    name="Plane072"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane072.geometry}
                    material={materials["Material.005"]}
                    position={[0.657, 0.785, 0.279]}
                    rotation={[2.846, 0.68, -2.411]}
                    scale={[-0.037, -0.026, -0.026]}
                />
                <mesh
                    name="Plane073"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane073.geometry}
                    material={materials["Material.004"]}
                    position={[0.752, 0.732, 0.096]}
                    rotation={[0.027, -0.111, 2.434]}
                    scale={-0.049}
                />
                <mesh
                    name="Plane074"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane074.geometry}
                    material={materials["Material.004"]}
                    position={[0.782, 0.642, 0.288]}
                    rotation={[0.206, -0.286, 2.283]}
                    scale={-0.073}
                />
                <mesh
                    name="Plane075"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane075.geometry}
                    material={materials["Material.004"]}
                    position={[0.735, 0.619, 0.427]}
                    rotation={[0.206, -0.286, 2.283]}
                    scale={-0.055}
                />
                <mesh
                    name="Plane076"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane076.geometry}
                    material={materials["Material.004"]}
                    position={[0.648, 0.722, 0.399]}
                    rotation={[0.286, -0.361, 2.444]}
                    scale={-0.064}
                />
                <mesh
                    name="Plane077"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane077.geometry}
                    material={materials["Material.005"]}
                    position={[0.282, -0.839, -0.567]}
                    rotation={[-2.589, -0.364, -0.205]}
                    scale={[-0.032, -0.023, -0.023]}
                />
                <mesh
                    name="Plane078"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane078.geometry}
                    material={materials["Material.005"]}
                    position={[0.595, -0.848, -0.167]}
                    rotation={[-0.548, 0.827, 0.885]}
                    scale={[0.036, 0.026, 0.026]}
                />
                <mesh
                    name="Plane079"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane079.geometry}
                    material={materials["Material.005"]}
                    position={[0.295, -0.986, -0.226]}
                    rotation={[2.784, -1.161, -0.723]}
                    scale={[-0.03, -0.021, -0.021]}
                />
                <group
                    name="Plane080"
                    position={[0.754, -0.611, 0.424]}
                    rotation={[-0.26, 0.012, 0.91]}
                    scale={-0.01}
                >
                    <mesh
                        name="Plane004_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane004_1.geometry}
                        material={materials["Material.006"]}
                    />
                    <mesh
                        name="Plane004_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane004_2.geometry}
                        material={materials["Material.007"]}
                    />
                </group>
                <group
                    name="Plane081"
                    position={[-0.718, 0.658, 0.374]}
                    rotation={[0.365, 0.081, -2.352]}
                    scale={-0.013}
                >
                    <mesh
                        name="Plane004_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane004_1.geometry}
                        material={materials["Material.006"]}
                    />
                    <mesh
                        name="Plane004_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane004_2.geometry}
                        material={materials["Material.007"]}
                    />
                </group>
                <mesh
                    name="Icosphere002"
                    castShadow
                    receiveShadow
                    geometry={nodes.Icosphere002.geometry}
                    material={materials["Material.009"]}
                    position={[0.953, -0.66, -0.761]}
                    rotation={[0.558, 0.146, 0.743]}
                    scale={0.08}
                />
                <mesh
                    name="Icosphere003"
                    castShadow
                    receiveShadow
                    geometry={nodes.Icosphere003.geometry}
                    material={materials["Material.010"]}
                    position={[-0.726, -1.087, -0.17]}
                    rotation={[0.42, 0.959, -0.591]}
                    scale={0.08}
                />
                <mesh
                    name="Icosphere004"
                    castShadow
                    receiveShadow
                    geometry={nodes.Icosphere004.geometry}
                    material={materials["Material.008"]}
                    position={[-0.534, 1.146, 0.3]}
                    rotation={[0.144, 0.527, -2.779]}
                    scale={0.08}
                />
                <mesh
                    name="Icosphere005"
                    castShadow
                    receiveShadow
                    geometry={nodes.Icosphere005.geometry}
                    material={materials["Material.009"]}
                    position={[-0.895, -0.191, -1.041]}
                    rotation={[0.326, -0.681, -1.243]}
                    scale={0.08}
                />
                <mesh
                    name="Icosphere006"
                    castShadow
                    receiveShadow
                    geometry={nodes.Icosphere006.geometry}
                    material={materials["Material.009"]}
                    position={[-0.541, 1.046, -0.733]}
                    rotation={[0.953, -1.058, -1.631]}
                    scale={0.08}
                />
                <mesh
                    name="Icosphere007"
                    castShadow
                    receiveShadow
                    geometry={nodes.Icosphere007.geometry}
                    material={materials["Material.010"]}
                    position={[1.273, 0.094, 0.629]}
                    rotation={[2.62, 0.125, 1.706]}
                    scale={0.08}
                />
                <mesh
                    name="Icosphere008"
                    castShadow
                    receiveShadow
                    geometry={nodes.Icosphere008.geometry}
                    material={materials["Material.009"]}
                    position={[-1.074, -0.051, 0.875]}
                    rotation={[-1.69, 0, -0.949]}
                    scale={0.08}
                />
                <mesh
                    name="Icosphere453"
                    castShadow
                    receiveShadow
                    geometry={nodes.Icosphere453.geometry}
                    material={materials["Material.012"]}
                    position={[1.097, 0, 0.003]}
                    scale={0.814}
                />
                <mesh
                    name="Icosphere451"
                    castShadow
                    receiveShadow
                    geometry={nodes.Icosphere451.geometry}
                    material={materials["Material.014"]}
                    position={[0, 0, -1.118]}
                    rotation={[-2.283, -1.501, 0.888]}
                    scale={0.814}
                />
                <mesh
                    name="Icosphere009"
                    castShadow
                    receiveShadow
                    geometry={nodes.Icosphere009.geometry}
                    material={materials["Material.018"]}
                    position={[-0.032, -0.552, 0.966]}
                    rotation={[-1.22, -1.49, -1.738]}
                    scale={0.814}
                />
                <mesh
                    name="Icosphere010"
                    castShadow
                    receiveShadow
                    geometry={nodes.Icosphere010.geometry}
                    material={materials["Material.020"]}
                    position={[-0.147, 0.955, -0.456]}
                    rotation={[-2.967, 1.154, -2.249]}
                    scale={0.814}
                />
            </group>
        </a.group>
    );
}

useGLTF.preload("/NewIsland4.glb");

export default Island;