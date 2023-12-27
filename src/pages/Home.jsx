import React from 'react';
import {useState, Suspense, useRef, useEffect} from "react";
import {Canvas, useFrame} from "@react-three/fiber";
import Loader from "../components/Loader.jsx"
import Island from "../models/island.jsx"
import { useSpring, animated } from '@react-spring/three'
import Sky from "../models/Sky.jsx"
import Player from "../models/Player.jsx"
import {OrbitControls} from '@react-three/drei'
import HomeInfo from "../components/HomeInfo.jsx"
import Goose from "../models/Goose.jsx"
import Space_Boi from "../models/space_boi.jsx"
import Tanuki from "../models/Tanuki.jsx"
import Birds from "../models/Birds.jsx"
import * as THREE from 'three';
import "./HomeInfo.css"
// import skyTexture from


const Home = () => {

    const [isRotating, setIsRotating] = useState(false);
    const [currentStage, setCurrentStage] = useState(null);
    const orbitControlsRef = useRef();
    const prevAzimuthalAngle = useRef(0);
    const [orbitDirection, setOrbitDirection] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const [showMoveButton, setShowMoveButton] = useState(false);
    const [cameraMoved, setCameraMoved] = useState(false);
    const [prevCurrentStage, setPrevCurrentStage] = useState(null); // New state variable

    const infoContentStyles = {
        1: { top: '50%', left: '70%', transform: 'translate(-50%, -50%)' },
        2: { top: '50%', left: '20%' },
        3: { top: '30%', left: '20%' },
        4: { top: '50%', left: '70%' },
        // Add more styles for other stages as needed
    };

    const updateOrbitControlsTarget = (target) => {
        if (orbitControlsRef.current) {
            const currentTarget = orbitControlsRef.current.target;
            const initialDistance = currentTarget.distanceTo(target);
            let distance = initialDistance;

            const dampingFactor = 0.98; // Adjust the damping factor based on your preference
            const minDistance = 0.1; // Minimum distance to consider the animation complete

            const animate = () => {
                const diff = new THREE.Vector3().subVectors(target, currentTarget);
                distance = diff.length();

                if (distance < minDistance) {
                    // Stop the animation when close enough
                    orbitControlsRef.current.target.copy(target);
                    orbitControlsRef.current.update();
                } else {
                    diff.normalize().multiplyScalar(distance * (1 - dampingFactor));
                    currentTarget.add(diff);
                    orbitControlsRef.current.update();
                    requestAnimationFrame(animate);
                }
            };

            // Start the animation
            animate();
        }
    };

    const stageTargets = {
        1: new THREE.Vector3(20, 10, 0), // Example target for stage 1
        2: new THREE.Vector3(0, 0, 20),
        3: new THREE.Vector3(20, 0, 0),
        4: new THREE.Vector3(-20, 0, 0),
    };

    const updateTargetForStage = (stage) => {
        const newTarget = stageTargets[stage];
        if (newTarget) {
            updateOrbitControlsTarget(newTarget);
        }
    };

    const handleMoveButtonClick = () => {
        // Trigger camera movement or any other actions you need
        updateTargetForStage(currentStage);
        setPrevCurrentStage(currentStage);
        setTimeout(() => {
            console.log("camba");
            setCameraMoved(true);
        }, 2000);
    };

    useEffect(() => {
        // Check if the currentStage is 1 and show the button
        setShowMoveButton(currentStage != 5);
    }, [currentStage]);


    const adjustIslandForScreen = () => {
        let screenScale = null;
        let screenPos =  [0,0,0];
        let rot = [-0.53,0.05,0];

        if(window.innerWidth < 768) {
            screenScale = [0.9,0.9,0.9];
        }
        else{
            screenScale = [9,9,9];
        }

        return [screenScale, screenPos, rot]
    }

    const adjustPlayerForScreen = () => {
        let screenScale, screenPos;

        let rot = [0,1.6,0];

        if(window.innerWidth < 768) {
            screenScale = [0.5, 0.5, 0.5];
            screenPos = [0,-1.5,0];
        }
        else{
            screenScale = [0.3,0.3,0.3];
            screenPos = [0, 0.15, -2];
        }

        return [screenScale, screenPos]
    }

    useEffect(() => {
        console.log("Current Stage:", currentStage);
        if (orbitControlsRef.current){
            console.log("current pos:", orbitControlsRef.current.target)
        }

    }, [currentStage]);


    const [islandScale, islandPos, rot] = adjustIslandForScreen();
    const [playerScale, playerPos] = adjustPlayerForScreen();
    const [playerPosition, setPlayerPosition] = useState([0, 1, 0]);
    const [playerRotation, setPlayerRotation] = useState([0,0,0]);


    return(
        <section className="w-full h-screen relative" >
            <div className="absolute top-4 left-4 z-20">
                {showMoveButton && (
                    <button
                        onClick={handleMoveButtonClick}
                        className="bg-blue-500 text-white p-2 rounded"
                    >
                        Move Camera
                    </button>
                )}
            </div>
            {cameraMoved && (
                <div
                    className="home-info-content"
                    style={{
                        userSelect: 'none',
                        ...infoContentStyles[prevCurrentStage], // Apply style based on currentStage
                    }}
                >
                    {currentStage && <HomeInfo currentStage={prevCurrentStage} />}
                </div>
            )}
            <Canvas
                className={`w-full h-screen bg-transparent
                ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
                camera={{near: 0.1, far: 1000}}
                shadows
            >
                <Suspense fallback={<Loader/>}>
                    <directionalLight castShadow position={[0, 10, 20]} shadow-mapSize={[1024, 1024]} shadow-bias={-0.0001} intensity={0.8}>
                           <orthographicCamera attach="shadow-camera" args={[-20, 20, 20, -20]} />
                    </directionalLight>
                    <ambientLight intensity={1}/>
                    <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={0}/>

                    {/*<Tanuki/>*/}
                    {/*<Goose />*/}
                    <Space_Boi/>
                    {/*<Birds position={[0,7,0]} />*/}
                    {/*<Sky/>*/}

                    <Island
                        position={islandPos}
                        scale={islandScale}
                        rotation={rot}
                        setCurrentStage={setCurrentStage}
                    />
                    <Player
                        isRotating={isRotating}
                        playerScale={playerScale}
                        playerPos={playerPos}
                        rotation={playerRotation}
                        playerPosition={playerPosition}
                        orbitDirection={orbitDirection}
                        orbitControlsRef={orbitControlsRef}
                        setCurrentStage={setCurrentStage}
                        castShadow
                    />
                </Suspense>
                <OrbitControls
                    ref={(controls) => (orbitControlsRef.current = controls)}
                    target={[islandPos[0],islandPos[1],islandPos[2]]}
                    minDistance={25}  // Set your desired minimum distance
                    maxDistance={60}
                    onStart={() => setIsRotating(true)}
                    onEnd={() => setIsRotating(false)}
                />
            </Canvas>
        </section>

    )
}

export default Home;