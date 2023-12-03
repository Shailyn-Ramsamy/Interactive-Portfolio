import React from 'react';
import {useState, Suspense, useRef} from "react";
import {Canvas} from "@react-three/fiber";
import Loader from "../components/Loader.jsx"
import Island from "../models/island.jsx"
import Sky from "../models/Sky.jsx"
import Airship from "../models/airship.jsx"
import Player from "../models/Player.jsx"
import {OrbitControls} from '@react-three/drei'
// import skyTexture from

{/*<div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">*/}
{/*    Popop*/}
{/*</div>*/}
const Home = () => {

    const [isRotating, setIsRotating] = useState(false);
    const [currentStage, setCurrentStage] = useState(1);
    const orbitControlsRef = useRef();
    const prevAzimuthalAngle = useRef(0);
    const [orbitDirection, setOrbitDirection] = useState(null);

    const adjustIslandForScreen = () => {
        let screenScale = null;
        let screenPos =  [0,-1,-12];
        let rot = [0,1.6,0];

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


    const [islandScale, islandPos, rot] = adjustIslandForScreen();
    const [playerScale, playerPos] = adjustPlayerForScreen();
    const [playerPosition, setPlayerPosition] = useState([0, 2, 0]);
    const [playerRotation, setPlayerRotation] = useState([0,0,0]);


    return(
        <section className="w-full h-screen relative" >
            <Canvas
                className={`w-full h-screen bg-transparent
                ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
                camera={{near: 0.1, far: 1000}}
                shadows
            >
                <Suspense fallback={<Loader/>}>
                    <directionalLight
                        position={[4, 10, -10]}
                        // intensity={2}
                        castShadow
                        shadow-bias={-0.001}
                    />
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
                        const orbitRadius = 10;
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

                        prevAzimuthalAngle.current = angle;
                    }}
                />
            </Canvas>
        </section>

    )
}

export default Home;