import React from 'react';
import {useState, Suspense, useRef, useEffect} from "react";
import {Canvas} from "@react-three/fiber";
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
                    <directionalLight castShadow position={[0, 10, 20]} shadow-mapSize={[1024, 1024]} shadow-bias={-0.0001} intensity={15}>
                           <orthographicCamera attach="shadow-camera" args={[-20, 20, 20, -20]} />
                    </directionalLight>
                    <ambientLight intensity={1}/>
                    <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={8}/>

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
                    ref={orbitControlsRef}
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