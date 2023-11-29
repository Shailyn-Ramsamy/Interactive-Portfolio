import React from 'react';
import {useState, Suspense} from "react";
import {Canvas} from "@react-three/fiber";
import Loader from "../components/Loader.jsx"
import Island from "../models/island.jsx"
import Sky from "../models/Sky.jsx"
import Bird from "../models/Bird.jsx"
import Plane from "../models/Plane.jsx"

{/*<div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">*/}
{/*    Popop*/}
{/*</div>*/}
const Home = () => {

    const [isRotating, setIsRotating] = useState(false);
    const [currentStage, setCurrentStage] = useState(1);

    const adjustIslandForScreen = () => {
        let screenScale = null;
        let screenPos =  [0,-1,-12];
        let rot = [0.1,1.6,0];

        if(window.innerWidth < 768) {
            screenScale = [0.9,0.9,0.9];
        }
        else{
            screenScale = [1,1,1];
        }

        return [screenScale, screenPos, rot]
    }

    const adjustPlaneForScreen = () => {
        let screenScale, screenPos;

        let rot = [0.1,1.6,0];

        if(window.innerWidth < 768) {
            screenScale = [1.5,1.5,1.5];
            screenPos = [0,-1.5,0];
        }
        else{
            screenScale = [3,3,3];
            screenPos = [0, -2.5, 0];
        }

        return [screenScale, screenPos]
    }

    const [islandScale, islandPos, rot] = adjustIslandForScreen();
    const [planeScale, planePos] = adjustPlaneForScreen();

    return(
        <section className="w-full h-screen relative" >
            <Canvas
                className={`w-full h-screen bg-transparent
                ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
                camera={{near: 0.1, far: 1000}}
             >
                <Suspense fallback={<Loader/>}>
                    <directionalLight position={[5,4,6]} intensity={2}/>
                    <ambientLight intensity={0.5}/>
                    {/*<pointLight/>*/}
                    {/*<spotLight/>*/}
                    <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={0.7}/>

                    <Bird/>

                    <Sky/>
                    <Island
                        position={islandPos}
                        scale={islandScale}
                        rotation={rot}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                        setCurrentStage={setCurrentStage}
                    />
                    <Plane
                        isRotating={isRotating}
                        planeScale={planeScale}
                        planePos={planePos}
                        rotation={[0,20,0]}
                    />
                </Suspense>
            </Canvas>
        </section>

    )
}

export default Home;