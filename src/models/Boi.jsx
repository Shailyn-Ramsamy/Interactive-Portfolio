import React, { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import useSpline from "@splinetool/r3f-spline";
import { OrthographicCamera } from "@react-three/drei";
import { Vector3, Quaternion } from "three";
import { OrbitControls } from "@react-three/drei";

export default function Scene({ ...props }) {
    const { nodes, materials } = useSpline(
        "https://prod.spline.design/Dnx9Jh6Vk-Z0b0ef/scene.splinecode",
    );

    // Create a reference to the head mesh
    const headRef = useRef();
    console.log(headRef);

    // Access the camera using the useThree hook
    const { camera } = useThree();
    useFrame(({ viewport, mouse }) => {
        if (headRef.current && camera) {
            const mouse3D = new Vector3(
                mouse.x * 2 - 1,
                +(mouse.y * 2) + 1,
                0.5,
            ).unproject(camera);
            const lookAtVector = new Vector3()
                .copy(mouse3D)
                .sub(headRef.current.position)
                .normalize();

            // Calculate the rotation quaternion based on the direction
            const rotationQuaternion = new Quaternion().setFromUnitVectors(
                new Vector3(0, 0, 1),
                lookAtVector,
            );

            // Apply the rotation to the head
            headRef.current.rotation.setFromQuaternion(rotationQuaternion);
        }
    });

    return (
        <>
            {/* <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableDamping
        dampingFactor={0.25}
        target={[-0.7, 200.06, -54.21]} // Adjust the target to the head position
      /> */}
            <color attach="background" args={["#e2f1dd"]} />
            <fog attach="fog" args={["#e2f1dd", 1691.908, 2500]} />
            <group {...props} dispose={null}>
                <scene name="Scene">
                    <group
                        name="coffee"
                        position={[213.91, -3.32, 213.88]}
                        rotation={[-Math.PI, -0.18, -Math.PI]}
                        scale={[0.66, 0.87, 0.69]}
                    >
                        <mesh
                            name="Ellipse 2"
                            geometry={nodes["Ellipse 2"].geometry}
                            material={materials["Ellipse 2 Material"]}
                            castShadow
                            receiveShadow
                            position={[18.32, 1.05, -6.14]}
                            rotation={[0, 0, 2.67]}
                        />
                        <mesh
                            name="Ellipse"
                            geometry={nodes.Ellipse.geometry}
                            material={materials["Ellipse Material"]}
                            castShadow
                            receiveShadow
                            position={[-9.78, 4.14, -0.48]}
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={[1, 1, 0.62]}
                        />
                        <mesh
                            name="Cube"
                            geometry={nodes.Cube.geometry}
                            material={materials["Cube Material"]}
                            castShadow
                            receiveShadow
                            position={[-9.45, 0, 0]}
                            scale={[1, 0.62, 1]}
                        />
                    </group>
                    <mesh
                        name="Floor"
                        geometry={nodes.Floor.geometry}
                        material={materials["Floor Material"]}
                        castShadow
                        receiveShadow
                        position={[103.6, -375.02, -42.42]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={1}
                    />
                    <pointLight
                        name="Point Light"
                        intensity={0.6}
                        decay={2}
                        distance={1367}
                        shadow-mapSize-width={1024}
                        shadow-mapSize-height={1024}
                        shadow-camera-near={100}
                        shadow-camera-far={2500}
                        color="#d6ece2"
                        position={[221.83, 302.23, -265.28]}
                        scale={[1.38, 1, 1]}
                    />
                    <directionalLight
                        name="Directional Light"
                        castShadow
                        intensity={0.8}
                        shadow-mapSize-width={1024}
                        shadow-mapSize-height={1024}
                        shadow-camera-near={-10000}
                        shadow-camera-far={100000}
                        shadow-camera-left={-3350}
                        shadow-camera-right={3350}
                        shadow-camera-top={3350}
                        shadow-camera-bottom={-3350}
                        color="#fefcf9"
                        position={[-257.35, 589.92, 642.7]}
                    />
                    <group
                        name="Objects"
                        position={[157.15, -14.2, -108.12]}
                        scale={[1, 0.99, 1]}
                    >
                        <group
                            name="cat"
                            position={[357.83, -322.6, 75.98]}
                            rotation={[0, -0.3, 0]}
                            scale={[108.33, 106.15, 108.33]}
                        >
                            <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
                                <group
                                    name="Collada_visual_scene_group"
                                    rotation={[Math.PI / 2, 0, 0]}
                                >
                                    <group name="Chill_Cat">
                                        <mesh
                                            name="defaultMaterial"
                                            geometry={nodes.defaultMaterial.geometry}
                                            material={nodes.defaultMaterial.material}
                                            castShadow
                                            receiveShadow
                                        />
                                        <mesh
                                            name="defaultMaterial001"
                                            geometry={nodes.defaultMaterial001.geometry}
                                            material={nodes.defaultMaterial001.material}
                                            castShadow
                                            receiveShadow
                                        />
                                        <mesh
                                            name="defaultMaterial002"
                                            geometry={nodes.defaultMaterial002.geometry}
                                            material={nodes.defaultMaterial002.material}
                                            castShadow
                                            receiveShadow
                                        />
                                        <mesh
                                            name="defaultMaterial003"
                                            geometry={nodes.defaultMaterial003.geometry}
                                            material={nodes.defaultMaterial003.material}
                                            castShadow
                                            receiveShadow
                                        />
                                        <mesh
                                            name="defaultMaterial004"
                                            geometry={nodes.defaultMaterial004.geometry}
                                            material={nodes.defaultMaterial004.material}
                                            castShadow
                                            receiveShadow
                                        />
                                    </group>
                                </group>
                            </group>
                        </group>
                        <group
                            name="computer"
                            position={[-19.63, 36.41, 201.1]}
                            rotation={[3.11, -0.44, 3.09]}
                            scale={[0.56, 0.61, 0.61]}
                        >
                            <group
                                name="Text"
                                position={[3.04, 5.46, -70.8]}
                                rotation={[-0.17, 0, 0]}
                                scale={[1.64, 1.51, 1.51]}
                            >
                                <mesh
                                    name="S"
                                    geometry={nodes.S.geometry}
                                    material={materials["S Material"]}
                                    castShadow
                                    receiveShadow
                                    position={[-32, -6.5, 0]}
                                />
                                <mesh
                                    name="p"
                                    geometry={nodes.p.geometry}
                                    material={materials["p Material"]}
                                    castShadow
                                    receiveShadow
                                    position={[-18.14, -6.5, 0]}
                                />
                                <mesh
                                    name="l"
                                    geometry={nodes.l.geometry}
                                    material={materials["l Material"]}
                                    castShadow
                                    receiveShadow
                                    position={[-5.52, -6.5, 0]}
                                />
                                <mesh
                                    name="i"
                                    geometry={nodes.i.geometry}
                                    material={materials["i Material"]}
                                    castShadow
                                    receiveShadow
                                    position={[0.08, -6.5, 0]}
                                />
                                <mesh
                                    name="i1"
                                    geometry={nodes.i1.geometry}
                                    material={materials["i1 Material"]}
                                    castShadow
                                    receiveShadow
                                    position={[0.08, -6.5, 0]}
                                />
                                <mesh
                                    name="n"
                                    geometry={nodes.n.geometry}
                                    material={materials["n Material"]}
                                    castShadow
                                    receiveShadow
                                    position={[5.68, -6.5, 0]}
                                />
                                <mesh
                                    name="e"
                                    geometry={nodes.e.geometry}
                                    material={materials["e Material"]}
                                    castShadow
                                    receiveShadow
                                    position={[18.3, -6.5, 0]}
                                />
                            </group>
                            <mesh
                                name="computerScreen"
                                geometry={nodes.computerScreen.geometry}
                                material={materials["computerScreen Material"]}
                                castShadow
                                receiveShadow
                                position={[0, 4.2, -71.3]}
                                rotation={[-0.17, 0, 0]}
                                scale={1}
                            />
                            <mesh
                                name="computerTrackpad"
                                geometry={nodes.computerTrackpad.geometry}
                                material={materials["computerTrackpad Material"]}
                                castShadow
                                receiveShadow
                                position={[0, -66.01, 62.64]}
                                rotation={[Math.PI / 2, 0, 0]}
                                scale={0.83}
                            />
                            <mesh
                                name="computerKeyboard"
                                geometry={nodes.computerKeyboard.geometry}
                                material={materials["computerKeyboard Material"]}
                                castShadow
                                receiveShadow
                                position={[0, -62.82, -3.88]}
                                rotation={[Math.PI / 2, 0, 0]}
                                scale={0.83}
                            />
                            <mesh
                                name="computerBodyBottom"
                                geometry={nodes.computerBodyBottom.geometry}
                                material={materials["computerBodyBottom Material"]}
                                castShadow
                                receiveShadow
                                position={[0, -66.85, 15.84]}
                                rotation={[Math.PI / 2, 0, 0]}
                                scale={1}
                            />
                            <mesh
                                name="computerBodyTop"
                                geometry={nodes.computerBodyTop.geometry}
                                material={materials["computerBodyTop Material"]}
                                castShadow
                                receiveShadow
                                position={[0, -0.24, -76.29]}
                                rotation={[-0.17, 0, 0]}
                                scale={1}
                            />
                        </group>
                        <mesh
                            name="book-purple"
                            geometry={nodes["book-purple"].geometry}
                            material={materials["book-purple Material"]}
                            castShadow
                            receiveShadow
                            position={[463.54, -177.74, -243.68]}
                            rotation={[0.01, 0.22, -1.58]}
                            scale={[0.7, 1.24, 0.85]}
                        >
                            <mesh
                                name="Cube 4"
                                geometry={nodes["Cube 4"].geometry}
                                material={materials["Cube 4 Material"]}
                                castShadow
                                receiveShadow
                                position={[17.51, 0.45, -9.59]}
                                rotation={[0, 0, 0]}
                                scale={1}
                            />
                        </mesh>
                        <mesh
                            name="book-blue"
                            geometry={nodes["book-blue"].geometry}
                            material={materials["book-blue Material"]}
                            castShadow
                            receiveShadow
                            position={[454.9, -130.08, -254.13]}
                            rotation={[-3.13, 0.11, 1.55]}
                            scale={[0.51, 1, 0.78]}
                        >
                            <mesh
                                name="Cube 3"
                                geometry={nodes["Cube 3"].geometry}
                                material={materials["Cube 3 Material"]}
                                castShadow
                                receiveShadow
                                position={[16.8, 0.6, -9.12]}
                            />
                        </mesh>
                        <mesh
                            name="book-blue-depth"
                            geometry={nodes["book-blue-depth"].geometry}
                            material={materials["book-blue-depth Material"]}
                            castShadow
                            receiveShadow
                            position={[91.41, 12.89, 100.71]}
                            rotation={[-3.1, 0.76, 1.51]}
                            scale={[0.54, 1.17, 0.93]}
                        >
                            <mesh
                                name="Cube 31"
                                geometry={nodes["Cube 31"].geometry}
                                material={materials["Cube 31 Material"]}
                                castShadow
                                receiveShadow
                                position={[16.8, 0.6, -9.12]}
                            />
                        </mesh>
                        <mesh
                            name="book-yellow"
                            geometry={nodes["book-yellow"].geometry}
                            material={materials["book-yellow Material"]}
                            castShadow
                            receiveShadow
                            position={[464.69, -154.05, -249.46]}
                            rotation={[-Math.PI, 0.74, Math.PI / 2]}
                            scale={[0.54, 0.91, 0.76]}
                        >
                            <mesh
                                name="Cube 2"
                                geometry={nodes["Cube 2"].geometry}
                                material={materials["Cube 2 Material"]}
                                castShadow
                                receiveShadow
                                position={[15.72, 0.6, -14.95]}
                                rotation={[0, 0, 0]}
                                scale={1}
                            />
                        </mesh>
                        <mesh
                            name="book-pink"
                            geometry={nodes["book-pink"].geometry}
                            material={materials["book-pink Material"]}
                            castShadow
                            receiveShadow
                            position={[79.52, 37.07, 115.83]}
                            rotation={[0, -0.17, -1.57]}
                            scale={[0.57, 1.06, 0.91]}
                        >
                            <mesh
                                name="Cube 21"
                                geometry={nodes["Cube 21"].geometry}
                                material={materials["Cube 21 Material"]}
                                castShadow
                                receiveShadow
                                position={[15.72, 0.6, -14.95]}
                                rotation={[0, 0, 0]}
                                scale={1}
                            />
                        </mesh>
                        <mesh
                            name="Sphere"
                            geometry={nodes.Sphere.geometry}
                            material={materials["Sphere Material"]}
                            castShadow
                            receiveShadow
                            position={[176.26, -293, -552.27]}
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={1}
                        />
                        <group
                            name="lamp"
                            position={[-384.79, 6.56, 28.29]}
                            rotation={[0, -0.82, 0]}
                            scale={1}
                        >
                            <mesh
                                name="Sphere1"
                                geometry={nodes.Sphere1.geometry}
                                material={materials["Sphere1 Material"]}
                                castShadow
                                receiveShadow
                                position={[65.87, 274.71, 1.49]}
                                rotation={[Math.PI / 2, 0.87, -Math.PI / 2]}
                                scale={1}
                            />
                            <mesh
                                name="Cube 6"
                                geometry={nodes["Cube 6"].geometry}
                                material={materials["Cube 6 Material"]}
                                castShadow
                                receiveShadow
                                position={[60.04, 279.38, -0.28]}
                                rotation={[0, 0, -0.7]}
                                scale={1}
                            />
                            <mesh
                                name="Cube 5"
                                geometry={nodes["Cube 5"].geometry}
                                material={materials["Cube 5 Material"]}
                                castShadow
                                receiveShadow
                                position={[-61.4, -208.95, -0.3]}
                            />
                            <mesh
                                name="Cylinder"
                                geometry={nodes.Cylinder.geometry}
                                material={materials["Cylinder Material"]}
                                castShadow
                                receiveShadow
                                position={[-56.84, -352.99, 0]}
                            />
                        </group>
                        <group
                            name="plant2"
                            position={[-263.95, -77.84, -270.53]}
                            scale={0.89}
                        >
                            <mesh
                                name="Cylinder 4"
                                geometry={nodes["Cylinder 4"].geometry}
                                material={materials["Cylinder 4 Material"]}
                                castShadow
                                receiveShadow
                                position={[58.93, -252.34, 68.49]}
                            />
                            <mesh
                                name="Cylinder 3"
                                geometry={nodes["Cylinder 3"].geometry}
                                material={materials["Cylinder 3 Material"]}
                                castShadow
                                receiveShadow
                                position={[-55.59, -252.34, 68.49]}
                            />
                            <mesh
                                name="Cylinder 41"
                                geometry={nodes["Cylinder 41"].geometry}
                                material={materials["Cylinder 41 Material"]}
                                castShadow
                                receiveShadow
                                position={[58.93, -252.34, -48.23]}
                            />
                            <mesh
                                name="Cylinder 2"
                                geometry={nodes["Cylinder 2"].geometry}
                                material={materials["Cylinder 2 Material"]}
                                castShadow
                                receiveShadow
                                position={[-55.59, -252.34, -48.23]}
                            />
                            <mesh
                                name="Cylinder1"
                                geometry={nodes.Cylinder1.geometry}
                                material={materials["Cylinder1 Material"]}
                                castShadow
                                receiveShadow
                                position={[2.67, -263.19, 10.15]}
                            />
                            <mesh
                                name="Cylinder 31"
                                geometry={nodes["Cylinder 31"].geometry}
                                material={materials["Cylinder 31 Material"]}
                                castShadow
                                receiveShadow
                                position={[3.61, -193.34, 10.39]}
                            />
                            <mesh
                                name="Cube 9"
                                geometry={nodes["Cube 9"].geometry}
                                material={materials["Cube 9 Material"]}
                                castShadow
                                receiveShadow
                                position={[-0.27, -77.19, 12.39]}
                                rotation={[2.39, -1.24, 2.42]}
                                scale={[0.53, 0.88, 0.88]}
                            />
                            <mesh
                                name="Cube 8"
                                geometry={nodes["Cube 8"].geometry}
                                material={materials["Cube 8 Material"]}
                                castShadow
                                receiveShadow
                                position={[12, -77.73, 41.38]}
                                rotation={[-Math.PI, -0.5, -Math.PI]}
                                scale={[0.69, 0.88, 0.88]}
                            />
                            <mesh
                                name="Cube 7"
                                geometry={nodes["Cube 7"].geometry}
                                material={materials["Cube 7 Material"]}
                                castShadow
                                receiveShadow
                                position={[-36.38, -78.47, -0.56]}
                                rotation={[-0.15, 0.95, 0.12]}
                                scale={[0.78, 1, 1]}
                            />
                            <mesh
                                name="Cube 61"
                                geometry={nodes["Cube 61"].geometry}
                                material={materials["Cube 61 Material"]}
                                castShadow
                                receiveShadow
                                position={[43.1, -77.73, 5.21]}
                                rotation={[0, -Math.PI / 3, 0]}
                                scale={[0.84, 1.07, 1.07]}
                            />
                            <mesh
                                name="Cube 51"
                                geometry={nodes["Cube 51"].geometry}
                                material={materials["Cube 51 Material"]}
                                castShadow
                                receiveShadow
                                position={[2.19, -77.73, -33.59]}
                            />
                        </group>
                        <group
                            name="plant1"
                            position={[295.64, -269.1, -76.09]}
                            scale={0.84}
                        >
                            <group name="Group" position={[-2.93, 0, 3.72]} scale={1.19}>
                                <mesh
                                    name="Cylinder 21"
                                    geometry={nodes["Cylinder 21"].geometry}
                                    material={materials["Cylinder 21 Material"]}
                                    castShadow
                                    receiveShadow
                                    position={[0, 15.23, 0]}
                                    scale={0.84}
                                />
                            </group>
                            <mesh
                                name="Cylinder2"
                                geometry={nodes.Cylinder2.geometry}
                                material={materials["Cylinder2 Material"]}
                                castShadow
                                receiveShadow
                                position={[-0.96, -61.11, -2.72]}
                            />
                        </group>
                        <group
                            name="box 2"
                            position={[563.13, -296.36, 46.55]}
                            rotation={[0, 0.55, 0]}
                            scale={1.17}
                        >
                            <mesh
                                name="Rectangle 5"
                                geometry={nodes["Rectangle 5"].geometry}
                                material={materials["Rectangle 5 Material"]}
                                castShadow
                                receiveShadow
                                position={[-34.96, -11.92, 58.31]}
                            />
                            <mesh
                                name="Rectangle 4"
                                geometry={nodes["Rectangle 4"].geometry}
                                material={materials["Rectangle 4 Material"]}
                                castShadow
                                receiveShadow
                                position={[-38.46, -5.14, 58.31]}
                            />
                            <mesh
                                name="Rectangle 3"
                                geometry={nodes["Rectangle 3"].geometry}
                                material={materials["Rectangle 3 Material"]}
                                castShadow
                                receiveShadow
                                position={[-34.46, 17.65, 58.31]}
                            />
                            <mesh
                                name="Rectangle 9"
                                geometry={nodes["Rectangle 9"].geometry}
                                material={materials["Rectangle 9 Material"]}
                                castShadow
                                receiveShadow
                                position={[52.84, -34.74, -28.12]}
                                rotation={[0, Math.PI / 2, 0]}
                                scale={[1, 0.72, 1]}
                            />
                            <mesh
                                name="Rectangle 8"
                                geometry={nodes["Rectangle 8"].geometry}
                                material={materials["Rectangle 8 Material"]}
                                castShadow
                                receiveShadow
                                position={[3.77, -35.07, 55.13]}
                            />
                            <mesh
                                name="Rectangle 7"
                                geometry={nodes["Rectangle 7"].geometry}
                                material={materials["Rectangle 7 Material"]}
                                castShadow
                                receiveShadow
                                position={[-18.18, -35.07, 55.13]}
                            />
                            <mesh
                                name="Rectangle 6"
                                geometry={nodes["Rectangle 6"].geometry}
                                material={materials["Rectangle 6 Material"]}
                                castShadow
                                receiveShadow
                                position={[-40.12, -34.07, 55.13]}
                            />
                            <mesh
                                name="Rectangle 2"
                                geometry={nodes["Rectangle 2"].geometry}
                                material={materials["Rectangle 2 Material"]}
                                castShadow
                                receiveShadow
                                position={[-34.46, 7.18, 56.39]}
                            />
                            <mesh
                                name="Cube 22"
                                geometry={nodes["Cube 22"].geometry}
                                material={materials["Cube 22 Material"]}
                                castShadow
                                receiveShadow
                                position={[-0.69, 56.09, -1.41]}
                                scale={0.74}
                            />
                            <mesh
                                name="Cube1"
                                geometry={nodes.Cube1.geometry}
                                material={materials["1"]}
                                castShadow
                                receiveShadow
                                position={[-0.69, -0.53, -1.41]}
                                scale={0.78}
                            />
                        </group>
                        <group
                            name="box"
                            position={[458, -285.5, -249.18]}
                            rotation={[0, -0.28, 0]}
                            scale={1.38}
                        >
                            <mesh
                                name="Cube 23"
                                geometry={nodes["Cube 23"].geometry}
                                material={materials["Cube 23 Material"]}
                                castShadow
                                receiveShadow
                                position={[-0.69, 56.09, -1.41]}
                                scale={0.74}
                            />
                            <mesh
                                name="Cube2"
                                geometry={nodes.Cube2.geometry}
                                material={materials["Cube2 Material"]}
                                castShadow
                                receiveShadow
                                position={[-0.69, -0.53, -1.41]}
                                scale={0.78}
                            />
                        </group>
                        <group
                            name="chair"
                            position={[-5.21, -225.34, -207.76]}
                            rotation={[0, 0.17, 0]}
                            scale={1}
                        >
                            <mesh
                                name="Cube 11"
                                geometry={nodes["Cube 11"].geometry}
                                material={materials["Cube 11 Material"]}
                                castShadow
                                receiveShadow
                                position={[37.04, -22.83, -33.15]}
                                rotation={[-Math.PI / 2, 0, 0]}
                                scale={1}
                            />
                            <mesh
                                name="Cube 10"
                                geometry={nodes["Cube 10"].geometry}
                                material={materials["Cube 10 Material"]}
                                castShadow
                                receiveShadow
                                position={[-35.76, -22.83, -33.15]}
                                rotation={[-Math.PI / 2, 0, 0]}
                                scale={1}
                            />
                            <mesh
                                name="Cube 111"
                                geometry={nodes["Cube 111"].geometry}
                                material={materials["Cube 111 Material"]}
                                castShadow
                                receiveShadow
                                position={[37.04, -22.83, 35.97]}
                                rotation={[-Math.PI / 2, 0, 0]}
                                scale={1}
                            />
                            <mesh
                                name="Cube 91"
                                geometry={nodes["Cube 91"].geometry}
                                material={materials["Cube 91 Material"]}
                                castShadow
                                receiveShadow
                                position={[-35.76, -22.83, 35.97]}
                                rotation={[-Math.PI / 2, 0, 0]}
                                scale={1}
                            />
                            <mesh
                                name="Rectangle 21"
                                geometry={nodes["Rectangle 21"].geometry}
                                material={materials["Rectangle 21 Material"]}
                                castShadow
                                receiveShadow
                                position={[0, 86.56, 0]}
                                rotation={[-Math.PI / 2, 0, 0]}
                                scale={1}
                            />
                        </group>
                        <group
                            name="table"
                            position={[52.71, -169.87, 220.05]}
                            scale={[1.21, 0.9, 1.31]}
                        >
                            <mesh
                                name="Cylinder 42"
                                geometry={nodes["Cylinder 42"].geometry}
                                material={materials["Cylinder 42 Material"]}
                                castShadow
                                receiveShadow
                                position={[0, -6.75, 0]}
                            />
                            <mesh
                                name="Cylinder 32"
                                geometry={nodes["Cylinder 32"].geometry}
                                material={materials["Cylinder 32 Material"]}
                                castShadow
                                receiveShadow
                                position={[0, -190.31, 0]}
                            />
                            <mesh
                                name="Cylinder 22"
                                geometry={nodes["Cylinder 22"].geometry}
                                material={materials["Cylinder 22 Material"]}
                                castShadow
                                receiveShadow
                                position={[0, -206.13, 0]}
                            />
                            <mesh
                                name="Cylinder3"
                                geometry={nodes.Cylinder3.geometry}
                                material={materials["Cylinder3 Material"]}
                                castShadow
                                receiveShadow
                                position={[0, 170.3, 0]}
                            />
                        </group>
                    </group>
                    <group
                        name="Character"
                        position={[70.97, -13.3, -1.92]}
                        rotation={[0, Math.PI / 9, 0]}
                        scale={1.03}
                    >
                        <group
                            name="ipad"
                            position={[-113.38, 93.94, 43.54]}
                            rotation={[-2.04, 0.54, 1.05]}
                            scale={[0.31, 0.26, 0.31]}
                        >
                            <mesh
                                name="Ellipse 4"
                                geometry={nodes["Ellipse 4"].geometry}
                                material={materials["Ellipse 4 Material"]}
                                castShadow
                                receiveShadow
                                position={[-63.36, 30.72, -0.36]}
                                rotation={[-Math.PI, -0.02, -Math.PI]}
                                scale={1}
                            />
                            <mesh
                                name="Ellipse 5"
                                geometry={nodes["Ellipse 5"].geometry}
                                material={materials["Ellipse 5 Material"]}
                                castShadow
                                receiveShadow
                                position={[-57.47, 42.32, -0.46]}
                                rotation={[-Math.PI, -0.02, -Math.PI]}
                                scale={1}
                            />
                            <mesh
                                name="Ellipse 3"
                                geometry={nodes["Ellipse 3"].geometry}
                                material={materials["Ellipse 3 Material"]}
                                castShadow
                                receiveShadow
                                position={[-69.45, 42.32, -0.25]}
                                rotation={[-Math.PI, -0.02, -Math.PI]}
                                scale={1}
                            />
                            <mesh
                                name="Rectangle"
                                geometry={nodes.Rectangle.geometry}
                                material={materials["Rectangle Material"]}
                                castShadow
                                receiveShadow
                                position={[-64.54, 37.46, 2.28]}
                                rotation={[-Math.PI, -0.02, -Math.PI]}
                                scale={1}
                            />
                            <mesh
                                name="Rectangle 61"
                                geometry={nodes["Rectangle 61"].geometry}
                                material={materials["Rectangle 61 Material"]}
                                castShadow
                                receiveShadow
                                position={[-91.02, 41.36, 0.88]}
                                rotation={[-1.58, -Math.PI / 2, 0]}
                                scale={[1, 0.81, 1]}
                            />
                            <mesh
                                name="Rectangle 51"
                                geometry={nodes["Rectangle 51"].geometry}
                                material={materials["Rectangle 51 Material"]}
                                castShadow
                                receiveShadow
                                position={[-72.24, 56.49, 0.6]}
                                rotation={[-1.57, 0, 0.02]}
                                scale={[0.86, 0.81, 1]}
                            />
                            <mesh
                                name="Rectangle 41"
                                geometry={nodes["Rectangle 41"].geometry}
                                material={materials["Rectangle 41 Material"]}
                                castShadow
                                receiveShadow
                                position={[-54.89, 56.49, 0.32]}
                                rotation={[-1.57, 0, 0.02]}
                                scale={[0.86, 0.81, 1]}
                            />
                            <mesh
                                name="Ellipse 21"
                                geometry={nodes["Ellipse 21"].geometry}
                                material={materials["Ellipse 21 Material"]}
                                castShadow
                                receiveShadow
                                position={[-88.42, 0.49, 2.25]}
                                rotation={[0, 0.02, 0]}
                            />
                            <mesh
                                name="Ellipse 31"
                                geometry={nodes["Ellipse 31"].geometry}
                                material={materials["Ellipse 31 Material"]}
                                castShadow
                                receiveShadow
                                position={[87.91, 0.49, 1]}
                                rotation={[0, 0.02, 0]}
                                scale={0.83}
                            />
                            <mesh
                                name="Ellipse1"
                                geometry={nodes.Ellipse1.geometry}
                                material={materials["Ellipse1 Material"]}
                                castShadow
                                receiveShadow
                                position={[87.91, 0.49, 1.25]}
                                rotation={[0, 0.02, 0]}
                                scale={0.83}
                            />
                            <mesh
                                name="Rectangle 22"
                                geometry={nodes["Rectangle 22"].geometry}
                                material={materials["Rectangle 22 Material"]}
                                castShadow
                                receiveShadow
                                position={[-0.81, -0.48, 1.11]}
                                rotation={[0, 0.02, 0]}
                            />
                            <mesh
                                name="Rectangle1"
                                geometry={nodes.Rectangle1.geometry}
                                material={materials["Rectangle1 Material"]}
                                castShadow
                                receiveShadow
                                position={[-0.04, -0.48, -3.65]}
                                rotation={[0, 0.02, 0]}
                            />
                        </group>
                        <group
                            name="head"
                            position={[-0.7, 226.06, -54.21]}
                            rotation={[0.1, -0.08, 0]}
                            scale={0.92}
                            ref={headRef}
                        >
                            {/* <group
          name="head"
          // ref={headRef}
          position={[-0.7, 226.06, -54.21]}
          rotation={[0.1, -0.08, 0]}
          scale={0.92}
        >               */}
                            <mesh
                                name="Torus"
                                geometry={nodes.Torus.geometry}
                                material={materials["Torus Material"]}
                                castShadow
                                receiveShadow
                                position={[-56.63, -8.31, -1.51]}
                                rotation={[-1.52, -0.91, -3.05]}
                                scale={[0.44, 1.28, 1.06]}
                            />
                            <mesh
                                name="Torus1"
                                geometry={nodes.Torus1.geometry}
                                material={materials["Torus1 Material"]}
                                castShadow
                                receiveShadow
                                position={[-47.88, -20.37, -1.34]}
                                rotation={[0.96, -1.47, -0.59]}
                                scale={[0.57, 1.15, 1.06]}
                            />
                            <mesh
                                name="hair"
                                geometry={nodes.hair.geometry}
                                material={materials["hair Material"]}
                                castShadow
                                receiveShadow
                                position={[-2.66, 17.67, -15.72]}
                                rotation={[1.02, -0.02, 0.04]}
                                scale={0.94}
                            />
                            <mesh
                                name="Cube 15"
                                geometry={nodes["Cube 15"].geometry}
                                material={materials["Cube 15 Material"]}
                                castShadow
                                receiveShadow
                                position={[11.65, -1.6, 30.2]}
                                rotation={[0, Math.PI / 9, 0]}
                                scale={1}
                            />
                            <mesh
                                name="Cube 14"
                                geometry={nodes["Cube 14"].geometry}
                                material={materials["Cube 14 Material"]}
                                castShadow
                                receiveShadow
                                position={[-21.35, -1.6, 28.64]}
                                rotation={[0, -Math.PI / 9, 0]}
                                scale={1}
                            />
                            <mesh
                                name="Cube 16"
                                geometry={nodes["Cube 16"].geometry}
                                material={materials["Cube 16 Material"]}
                                castShadow
                                receiveShadow
                                position={[15.87, 8.88, 28.8]}
                                rotation={[0.04, 0.46, 2.72]}
                                scale={[-1, 1, 1]}
                            />
                            <mesh
                                name="Cube 13"
                                geometry={nodes["Cube 13"].geometry}
                                material={materials["Cube 13 Material"]}
                                castShadow
                                receiveShadow
                                position={[-22.63, 11.13, 28.78]}
                                rotation={[-0.04, -0.41, -2.94]}
                                scale={1}
                            />
                            <mesh
                                name="Ellipse 22"
                                geometry={nodes["Ellipse 22"].geometry}
                                material={materials["Ellipse 22 Material"]}
                                castShadow
                                receiveShadow
                                position={[-24.64, -21.51, 23.43]}
                                rotation={[0.26, -0.58, 0]}
                                scale={1}
                            />
                            <mesh
                                name="Ellipse2"
                                geometry={nodes.Ellipse2.geometry}
                                material={materials["Ellipse2 Material"]}
                                castShadow
                                receiveShadow
                                position={[16.55, -20.69, 24.79]}
                                rotation={[0.26, 0.56, 0]}
                                scale={1}
                            />
                            <mesh
                                name="Cube 92"
                                geometry={nodes["Cube 92"].geometry}
                                material={materials["Cube 92 Material"]}
                                castShadow
                                receiveShadow
                                position={[-1.13, -30, 24.02]}
                                rotation={[0.55, -0.2, 3.13]}
                                scale={[1.05, 0.92, 0.64]}
                            />
                            <mesh
                                name="Cube 24"
                                geometry={nodes["Cube 24"].geometry}
                                material={materials["Cube 24 Material"]}
                                castShadow
                                receiveShadow
                                position={[38.89, -9, -6.07]}
                                scale={[-1, 1, 1]}
                            />
                            <mesh
                                name="Cube3"
                                geometry={nodes.Cube3.geometry}
                                material={materials["Cube3 Material"]}
                                castShadow
                                receiveShadow
                                position={[-44.58, -8.01, -6.07]}
                            />
                            <mesh
                                name="Sphere 2"
                                geometry={nodes["Sphere 2"].geometry}
                                material={materials["Sphere 2 Material"]}
                                castShadow
                                receiveShadow
                                position={[-2.88, -8.51, -8.67]}
                            />
                        </group>
                        <mesh
                            name="Cube 52"
                            geometry={nodes["Cube 52"].geometry}
                            material={materials["Cube 52 Material"]}
                            castShadow
                            receiveShadow
                            position={[-4.49, -27.71, -66.74]}
                            rotation={[0, 0, 0]}
                            scale={1.04}
                        />
                        <mesh
                            name="Cube 71"
                            geometry={nodes["Cube 71"].geometry}
                            material={materials["Cube 71 Material"]}
                            castShadow
                            receiveShadow
                            position={[-40.19, -84.92, -72.21]}
                            rotation={[0.09, 0, 0]}
                            scale={[-1, 0.81, 1]}
                        />
                        <mesh
                            name="Cube 62"
                            geometry={nodes["Cube 62"].geometry}
                            material={materials["Cube 62 Material"]}
                            castShadow
                            receiveShadow
                            position={[29.82, -85.32, -66.46]}
                            rotation={[-0.09, 0, 0]}
                            scale={[1, 0.81, 1]}
                        />
                        <group
                            name="Group 2"
                            position={[-57.33, -310.6, -120.28]}
                            rotation={[0.26, -0.1, 0]}
                            scale={[-1, 1, 1]}
                        >
                            <mesh
                                name="Star"
                                geometry={nodes.Star.geometry}
                                material={materials["Star Material"]}
                                castShadow
                                receiveShadow
                                position={[17.35, -10.03, -24.68]}
                                rotation={[-2.58, 1.42, 1.3]}
                                scale={1}
                            />
                            <mesh
                                name="Ellipse3"
                                geometry={nodes.Ellipse3.geometry}
                                material={materials["Ellipse3 Material"]}
                                castShadow
                                receiveShadow
                                position={[13.95, -9.61, -24.63]}
                                rotation={[-2.54, 1.4, 2.54]}
                                scale={1}
                            />
                            <mesh
                                name="Cube 25"
                                geometry={nodes["Cube 25"].geometry}
                                material={materials["Cube 25 Material"]}
                                castShadow
                                receiveShadow
                                position={[-1.16, -20.5, 0.21]}
                                rotation={[-Math.PI / 2, 0, 0]}
                                scale={[1.8, 1.8, 1.66]}
                            />
                            <mesh
                                name="Torus 6"
                                geometry={nodes["Torus 6"].geometry}
                                material={materials["Torus 6 Material"]}
                                castShadow
                                receiveShadow
                                position={[-0.69, 19.15, -22.08]}
                                rotation={[1.29, -0.01, -0.6]}
                                scale={[1.79, 1.74, 1.75]}
                            />
                            <mesh
                                name="Torus 5"
                                geometry={nodes["Torus 5"].geometry}
                                material={materials["Torus 5 Material"]}
                                castShadow
                                receiveShadow
                                position={[-0.11, 9.84, -21.95]}
                                rotation={[1.2, -0.01, -0.6]}
                                scale={[1.79, 1.74, 1.75]}
                            />
                            <mesh
                                name="Torus 4"
                                geometry={nodes["Torus 4"].geometry}
                                material={materials["Torus 4 Material"]}
                                castShadow
                                receiveShadow
                                position={[-0.27, -1.89, -16.72]}
                                rotation={[0.86, 0, -0.6]}
                                scale={[1.77, 1.73, 1.76]}
                            />
                            <mesh
                                name="Torus 3"
                                geometry={nodes["Torus 3"].geometry}
                                material={materials["Torus 3 Material"]}
                                castShadow
                                receiveShadow
                                position={[-0.41, -12.3, -4.67]}
                                rotation={[0.43, 0, -0.61]}
                                scale={[1.76, 1.71, 1.79]}
                            />
                            <mesh
                                name="Torus 2"
                                geometry={nodes["Torus 2"].geometry}
                                material={materials["Torus 2 Material"]}
                                castShadow
                                receiveShadow
                                position={[-0.09, -17.98, 11.07]}
                                rotation={[0, 0, -0.61]}
                                scale={[1.75, 1.71, 1.8]}
                            />
                            <mesh
                                name="Cube 32"
                                geometry={nodes["Cube 32"].geometry}
                                material={materials["Cube 32 Material"]}
                                castShadow
                                receiveShadow
                                position={[-1.34, -21.05, 30.84]}
                                rotation={[-Math.PI / 2, 0, 0]}
                                scale={[1.8, 1.8, 1.66]}
                            />
                            <mesh
                                name="Rectangle 23"
                                geometry={nodes["Rectangle 23"].geometry}
                                material={materials["Rectangle 23 Material"]}
                                castShadow
                                receiveShadow
                                position={[-1.25, -33.95, 0.4]}
                                rotation={[-Math.PI / 2, 0, 0]}
                                scale={[1.8, 1.8, 1.66]}
                            />
                        </group>
                        <group
                            name="Group1"
                            position={[31.98, -319.3, -17.78]}
                            rotation={[0, 0, 0]}
                            scale={1}
                        >
                            <mesh
                                name="Star1"
                                geometry={nodes.Star1.geometry}
                                material={materials["Star1 Material"]}
                                castShadow
                                receiveShadow
                                position={[17.81, -10.03, -24.68]}
                                rotation={[-2.58, 1.42, 1.3]}
                                scale={1}
                            />
                            <mesh
                                name="Ellipse4"
                                geometry={nodes.Ellipse4.geometry}
                                material={materials["Ellipse4 Material"]}
                                castShadow
                                receiveShadow
                                position={[14.41, -9.61, -24.63]}
                                rotation={[-2.54, 1.4, 2.54]}
                                scale={1}
                            />
                            <mesh
                                name="Cube 26"
                                geometry={nodes["Cube 26"].geometry}
                                material={materials["Cube 26 Material"]}
                                castShadow
                                receiveShadow
                                position={[-0.7, -20.5, 0.21]}
                                rotation={[-Math.PI / 2, 0, 0]}
                                scale={[1.8, 1.8, 1.66]}
                            />
                            <mesh
                                name="Torus 61"
                                geometry={nodes["Torus 61"].geometry}
                                material={materials["Torus 61 Material"]}
                                castShadow
                                receiveShadow
                                position={[-0.23, 19.15, -22.08]}
                                rotation={[1.29, -0.01, -0.6]}
                                scale={[1.79, 1.74, 1.75]}
                            />
                            <mesh
                                name="Torus 51"
                                geometry={nodes["Torus 51"].geometry}
                                material={materials["Torus 51 Material"]}
                                castShadow
                                receiveShadow
                                position={[0.35, 9.84, -21.95]}
                                rotation={[1.2, -0.01, -0.6]}
                                scale={[1.79, 1.74, 1.75]}
                            />
                            <mesh
                                name="Torus 41"
                                geometry={nodes["Torus 41"].geometry}
                                material={materials["Torus 41 Material"]}
                                castShadow
                                receiveShadow
                                position={[0.19, -1.89, -16.72]}
                                rotation={[0.86, 0, -0.6]}
                                scale={[1.77, 1.73, 1.76]}
                            />
                            <mesh
                                name="Torus 31"
                                geometry={nodes["Torus 31"].geometry}
                                material={materials["Torus 31 Material"]}
                                castShadow
                                receiveShadow
                                position={[0.05, -12.3, -4.67]}
                                rotation={[0.43, 0, -0.61]}
                                scale={[1.76, 1.71, 1.79]}
                            />
                            <mesh
                                name="Torus 21"
                                geometry={nodes["Torus 21"].geometry}
                                material={materials["Torus 21 Material"]}
                                castShadow
                                receiveShadow
                                position={[0.37, -17.98, 11.07]}
                                rotation={[0, 0, -0.61]}
                                scale={[1.75, 1.71, 1.8]}
                            />
                            <mesh
                                name="Cube 33"
                                geometry={nodes["Cube 33"].geometry}
                                material={materials["Cube 33 Material"]}
                                castShadow
                                receiveShadow
                                position={[-0.88, -21.05, 30.84]}
                                rotation={[-Math.PI / 2, 0, 0]}
                                scale={[1.8, 1.8, 1.66]}
                            />
                            <mesh
                                name="Rectangle 24"
                                geometry={nodes["Rectangle 24"].geometry}
                                material={materials["Rectangle 24 Material"]}
                                castShadow
                                receiveShadow
                                position={[-0.79, -33.95, 0.4]}
                                rotation={[-Math.PI / 2, 0, 0]}
                                scale={[1.8, 1.8, 1.66]}
                            />
                        </group>
                        <mesh
                            name="Cube4"
                            geometry={nodes.Cube4.geometry}
                            material={materials["Cube4 Material"]}
                            castShadow
                            receiveShadow
                            position={[-1.55, 69.94, -57.96]}
                            rotation={[0, 0, 0]}
                            scale={1}
                        />
                        <mesh
                            name="body"
                            geometry={nodes.body.geometry}
                            material={materials["body Material"]}
                            castShadow
                            receiveShadow
                            position={[-5.07, 69.95, -68.38]}
                        />
                    </group>
                    <OrthographicCamera
                        name="1"
                        makeDefault={true}
                        far={10000}
                        near={-50000}
                        enableZoom={false}
                    />

                    <hemisphereLight
                        name="Default Ambient Light"
                        intensity={0.75}
                        color="#eaeaea"
                    />
                </scene>
            </group>
        </>
    );
}
