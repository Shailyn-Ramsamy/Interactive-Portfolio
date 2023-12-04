import React from 'react';
import {useState, Suspense, useRef, useEffect} from "react";
import {Canvas} from "@react-three/fiber";
import Loader from "../components/Loader.jsx"
import Island from "../models/island.jsx"
import Sky from "../models/Sky.jsx"
import Airship from "../models/airship.jsx"
import Player from "../models/Player.jsx"
import {OrbitControls} from '@react-three/drei'
import HomeInfo from "../components/HomeInfo.jsx"
// import skyTexture from


const Home = () => {

    const [isRotating, setIsRotating] = useState(false);
    const [currentStage, setCurrentStage] = useState(null);
    const orbitControlsRef = useRef();
    const prevAzimuthalAngle = useRef(0);
    const [orbitDirection, setOrbitDirection] = useState(null);
    const [showPopup, setShowPopup] = useState(false);


    const adjustIslandForScreen = () => {
        let screenScale = null;
        let screenPos =  [0,1,-20];
        let rot = [0,0,0];

        if(window.innerWidth < 768) {
            screenScale = [0.9,0.9,0.9];
        }
        else{
            screenScale = [1,1,1];
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
            screenScale = [3,3,3];
            screenPos = [0, 0.15, -2];
        }

        return [screenScale, screenPos]
    }

    useEffect(() => {
        console.log("Current Stage:", currentStage);
    }, [currentStage]);


    const [islandScale, islandPos, rot] = adjustIslandForScreen();
    const [playerScale, playerPos] = adjustPlayerForScreen();
    const [playerPosition, setPlayerPosition] = useState([0, 1, 0]);
    const [playerRotation, setPlayerRotation] = useState([0,0,0]);


    return(
        <section className="w-full h-screen relative" >
            <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center text-white" style={{ userSelect: 'none' }}>
                {currentStage && <HomeInfo currentStage={currentStage}/> }
            </div>
            <Canvas
                className={`w-full h-screen bg-transparent
                ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
                camera={{near: 0.1, far: 1000}}
                shadows
            >
                <Suspense fallback={<Loader/>}>
                    <directionalLight castShadow position={[0, 6, 20]} shadow-mapSize={[1024, 1024]} shadow-bias={-0.0001}>
                           <orthographicCamera attach="shadow-camera" args={[-10, 10, 10, -10]} />
                    </directionalLight>
                    <ambientLight intensity={0.5}/>
                    {/*<pointLight/>*/}
                    {/*<spotLight/>*/}
                    <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={0.7}/>

                    {/*<Bird/>*/}
                    <Airship/>

                    <Sky/>
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
                        castShadow
                    />
                </Suspense>
                <OrbitControls
                    ref={orbitControlsRef}
                    target={[islandPos[0],islandPos[1],islandPos[2]]}
                    minPolarAngle={Math.PI / 3}
                    maxPolarAngle={Math.PI / 2.5}
                    onStart={() => setIsRotating(true)}
                    onEnd={() => setIsRotating(false)}
                    onChange={() => {
                        const { x: cameraX, z: cameraZ } = orbitControlsRef.current.object.position;
                        const angle = orbitControlsRef.current.getAzimuthalAngle() + Math.PI / 2;
                        const orbitRadius = 15;
                        const playerX = islandPos[0] + orbitRadius * Math.cos(angle);
                        const playerZ = islandPos[2] + orbitRadius * Math.sin(angle);

                        setPlayerRotation([0, angle, 0]);
                        setPlayerPosition([-playerX, playerPosition[1], playerZ]);

                        // Determine orbit direction
                        const deltaAngle = angle - prevAzimuthalAngle.current;
                        if (deltaAngle > 0) {
                            setOrbitDirection('right');
                        } else if (deltaAngle < 0) {
                            setOrbitDirection('left');
                        }

                        const sectionSize = Math.PI / 2; // Divide the circle into 4 quadrants
                        const rotationAngle = Math.PI / 4; // Rotate by 45 degrees

                        const rotatedAngle = (angle + rotationAngle) % (2 * Math.PI);

                        if (rotatedAngle >= sectionSize && rotatedAngle < 2 * sectionSize) {
                            setCurrentStage(1);
                        } else if (rotatedAngle >= 2 * sectionSize && rotatedAngle < 3 * sectionSize) {
                            setCurrentStage(2);
                        } else if (rotatedAngle >= 3 * sectionSize && rotatedAngle <= 4 * sectionSize) {
                            setCurrentStage(3);
                        } else if (rotatedAngle >= 0 && rotatedAngle < sectionSize) {
                            setCurrentStage(4);
                        }

                        // console.log("Current Stage:", currentStage);

                        prevAzimuthalAngle.current = angle;
                    }}
                />
            </Canvas>
        </section>

    )
}

export default Home;