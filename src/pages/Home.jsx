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
import Car from "../models/Car.jsx"
import Space_Boi from "../models/space_boi.jsx"
import Tanuki from "../models/Tanuki.jsx"
import Birds from "../models/Birds.jsx"
import * as THREE from 'three';
import "./HomeInfo.css"
import { motion } from 'framer-motion';
import { CloseButton } from '@chakra-ui/react'
import { IoClose } from "react-icons/io5";
import OverlayContent1 from "./Info/OverlayContent1.jsx"
import OverlayContent2 from "./Info/OverlayContent2.jsx"
import OverlayContent3 from "./Info/OverlayContent3.jsx"
import OverlayContent4 from "./Info/OverlayContent4.jsx"
// import skyTexture from


const CustomOrbitControls = ({ allowZoom, ...props }) => {
    const controlsRef = useRef();

    useEffect(() => {
        const handleWheel = (event) => {
            if (!allowZoom || !event.ctrlKey) {
                // Allow regular web page zooming
                return;
            }

            // Manually handle zooming for OrbitControls
            event.preventDefault();

            const delta = event.deltaY / 100;
            const newZoom = controlsRef.current.zoom + delta;

            controlsRef.current.zoom = THREE.MathUtils.clamp(newZoom, 0.5, 3); // Adjust the min and max zoom levels as needed
            controlsRef.current.update();
        };

        window.addEventListener('wheel', handleWheel, { passive: false });

        return () => {
            window.removeEventListener('wheel', handleWheel);
        };
    }, [allowZoom]);

    return <OrbitControls {...props} ref={controlsRef} />;
};

const Home = () => {

    const [isRotating, setIsRotating] = useState(false);
    const [currentStage, setCurrentStage] = useState(null);
    const orbitControlsRef = useRef();
    const prevAzimuthalAngle = useRef(0);
    const [orbitDirection, setOrbitDirection] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const [cameraMoved, setCameraMoved] = useState(false);
    const [prevCurrentStage, setPrevCurrentStage] = useState(null); // New state variable
    const [allowOrbitControls, setAllowOrbitControls] = useState(true);

    const [timer, setTimer] = useState(0);

    const prevTimerRef = useRef(0);

    const [isCooldown, setIsCooldown] = useState(false);

    useEffect(() => {
        let interval;

        if (currentStage != 5 && currentStage != null) {
            // If currentStage is 2, increase the timer up to 5000 milliseconds (5 seconds)
            interval = setInterval(() => {
                setTimer((prevTimer) => {
                    // Access the previous timer value using the ref
                    prevTimerRef.current = prevTimer;
                    return prevTimer < 2000 ? prevTimer + 100 : prevTimer;
                });

                if (prevTimerRef.current == 1500) {
                    // Execute a function when the timer is close to 5000 milliseconds
                    handleMoveButtonClick();
                }
            }, 100);
        } else {
            // If currentStage is not 2, set the timer to 0
            setTimer(0);
        }

        return () => clearInterval(interval); // Clear interval on component unmount

    }, [currentStage]);

    const infoContentStyles = {
        1: { top: '45%', right: '40%', transform: "translate(-50%, -50%)" },
        2: { top: '45%', left: '10%', transform: "translate(-50%, -50%)" },
        3: { top: '45%', left: '10%', transform: "translate(-50%, -50%)" },
        4: {  top: '45%', right: '40%', transform: "translate(-50%, -50%)"},
    };

    const updateOrbitControlsTarget = (target) => {
        if (orbitControlsRef.current) {
            const currentTarget = orbitControlsRef.current.target;
            const initialDistance = currentTarget.distanceTo(target);
            let distance = initialDistance;

            const dampingFactor = 0.98; // Adjust the damping factor based on your preference
            const minDistance = 0.07; // Minimum distance to consider the animation complete

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
        setAllowOrbitControls(false);
        updateTargetForStage(currentStage);
        setPrevCurrentStage(currentStage);
        setTimeout(() => {
            setCameraMoved(true);

        }, 1000);

    };

    const handleButtonClick = () => {
        console.log("yey")
        setIsVisible1(false);
        setIsVisible2(false);
        setIsVisible3(false);
        setIsVisible4(false);
        if (!isCooldown) {
            // Trigger camera movement or any other actions you need
            setAllowOrbitControls(true);
            updateOrbitControlsTarget(new THREE.Vector3(0, 0, 0)); // Set the target to 0,0,0
            setCameraMoved(false);
            setCurrentStage(5);

            // Set cooldown to true to prevent further stage changes
            setIsCooldown(true);

            // Reset cooldown after 10 seconds
            setTimeout(() => {
                setIsCooldown(false);
            }, 3000);
        }
    };

    const adjustIslandForScreen = () => {
        let screenScale = null;
        let screenPos =  [0,0,0];
        let rot = [-0.53,0.05,0];

        if(window.innerWidth < 768) {
            screenScale = [8,8,8];
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
            screenScale = [0.3, 0.3, 0.3];
            screenPos = [0, 0.15, -2];
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
    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);
    const [isVisible4, setIsVisible4] = useState(false);




    const handleButtonClick1 = () => {
        setIsVisible1(!isVisible1);
    };
    const handleButtonClick2 = () => {
        setIsVisible2(!isVisible2);
    };
    const handleButtonClick3 = () => {
        setIsVisible3(!isVisible3);
    };
    const handleButtonClick4 = () => {
        setIsVisible4(!isVisible4);
    };

    return(
        <section className="w-full h-screen relative" >
            <div>
                {cameraMoved && (
                    <div
                        className="home-info-content z-20"
                        style={{
                            userSelect: 'none',
                            ...infoContentStyles[prevCurrentStage], // Apply style based on currentStage
                            background: "#383C5C"
                        }}
                    >
                        {currentStage && <HomeInfo currentStage={prevCurrentStage} onClickButton={handleButtonClick } onClickButton1={handleButtonClick1} onClickButton2={handleButtonClick2} onClickButton3={handleButtonClick3} onClickButton4={handleButtonClick4} />}
                    </div>
                )}
            </div>

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
                    <Goose />
                    <Car />
                    <Space_Boi/>
                    {/*<Birds position={[0,7,0]} />*/}
                    {/*<Sky/>*/}

                    <Island
                        position={islandPos}
                        scale={islandScale}
                        rotation={rot}
                        isCoolDown={isCooldown}
                        currentStage={currentStage}
                        setCurrentStage={setCurrentStage}
                    />
                    <Player
                        isRotating={isRotating}
                        playerScale={playerScale}
                        playerPos={playerPos}
                        isCoolDown={isCooldown}
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
                    maxDistance={35}
                    enabled={allowOrbitControls}
                    enablePan={false}
                    onStart={() => setIsRotating(true)}
                    onEnd={() => setIsRotating(false)}
                />
            </Canvas>

            {isVisible1 && <OverlayContent1 handleButtonClick={handleButtonClick} />}
            {isVisible2 && <OverlayContent2 handleButtonClick={handleButtonClick} />}
            {isVisible3 && <OverlayContent3 handleButtonClick={handleButtonClick} />}
            {isVisible4 && <OverlayContent4 handleButtonClick={handleButtonClick} />}


        </section>

    )
}

export default Home;