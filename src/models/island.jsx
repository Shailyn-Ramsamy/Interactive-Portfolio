import { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import {useFrame, useThree} from '@react-three/fiber'
import {a} from '@react-spring/three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import islandScene from '../assets/3d/island.glb'

extend({ OrbitControls });
const Island = ({isRotating, setIsRotating, setCurrentStage, ...props}) => {
    const islandRef = useRef();

    const {gl, viewport} = useThree();

    const lastX = useRef(0);
    const lastY = useRef(0);
    const rotSpeed = useRef(0);
    const dampingFactor = 0.95;

    const handlePointerDown = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setIsRotating(true);

        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;

        lastX.current = clientX;
        lastY.current = clientY;
    }

    const handlePointerUp = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setIsRotating(false);
    }

    const handlePointerMove = (e) => {
        e.stopPropagation();
        e.preventDefault();

        if (isRotating) {
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            const delta = (clientX - lastX.current) / viewport.width;
            const clientY = e.touches ? e.touches[0].clientY : e.clientY;
            const deltaY = (clientY - lastY.current) / viewport.height;

            // Adjust rotation around the y-axis
            islandRef.current.rotation.y += delta * 0.01 * Math.PI;

            // Adjust rotation around the x-axis with vertical limit
            const newRotationX = islandRef.current.rotation.x + deltaY * 0.01 * Math.PI;
            const verticalLimit = Math.PI / 30; // You can adjust this limit as needed
            islandRef.current.rotation.x = Math.max(-verticalLimit, Math.min(verticalLimit, newRotationX));

            lastX.current = clientX;
            lastY.current = clientY;
            rotSpeed.current = delta * 0.01 * Math.PI;
        }
    }

    const handleKeyDown = (e) => {
        if(e.key === 'ArrowLeft'){
            if(!isRotating){
                setIsRotating(true);
                islandRef.current.rotation.y += 0.01*Math.PI;
            }
        }
        else if(e.key === 'ArrowRight'){
            if(!isRotating){
                setIsRotating(true);
                islandRef.current.rotation.y -= 0.01*Math.PI;
            }
        }
    }

    const handleKeyUp = (e) => {
        if(e.key === 'ArrowLeft' || e.key === 'ArrowRight'){
            setIsRotating(false);
        }
    }

    useFrame(() => {
        if(!isRotating){
            rotSpeed.current *= dampingFactor;

            if (Math.abs(rotSpeed.current) < 0.001){
                rotSpeed.current = 0;
            }

            islandRef.current.rotation.y += rotSpeed.current;
        }
        else{
            const rotation = islandRef.current.rotation.y;

            const normalizedRotation =
                ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

            // Set the current stage based on the island's orientation
            switch (true) {
                case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
                    setCurrentStage(4);
                    break;
                case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
                    setCurrentStage(3);
                    break;
                case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
                    setCurrentStage(2);
                    break;
                case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
                    setCurrentStage(1);
                    break;
                default:
                    setCurrentStage(null);
            }
        }
    })

    useEffect(() => {
        const canvas = gl.domElement;
        canvas.addEventListener('pointerup', handlePointerUp);
        canvas.addEventListener('pointerdown', handlePointerDown);
        canvas.addEventListener('pointermove', handlePointerMove);
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);

        return () => {
            canvas.removeEventListener('pointerup', handlePointerUp);
            canvas.removeEventListener('pointerdown', handlePointerDown);
            canvas.removeEventListener('pointermove', handlePointerMove);
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('keyup', handleKeyUp);
        }

    }, [gl, handlePointerUp, handlePointerDown, handlePointerMove]);

    const group = useRef();
    const { nodes, materials, animations } = useGLTF(islandScene);
    const { actions } = useAnimations(animations, group);
    return (
        <a.group ref={islandRef} {...props}>
            <mesh
                name="Tree002"


                geometry={nodes.Tree002.geometry}
                material={materials["Material.005"]}
                morphTargetDictionary={nodes.Tree002.morphTargetDictionary}
                morphTargetInfluences={nodes.Tree002.morphTargetInfluences}
                position={[3.394, 1.024, -2.164]}
                rotation={[0, Math.PI / 4, 0]}
                scale={0.489}
            />
            <group
                name="Sketchfab_model"
                position={[-1.975, -0.925, 0.318]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={2.376}
            >
                <group
                    name="6fe399da8bc040dd809048089f9c1faafbx"
                    rotation={[Math.PI / 2, 0, 0]}
                >
                    <group name="Object_2">
                        <group name="RootNode">
                            <group name="denizalti" position={[0, -2.266, 0]} scale={0.01}>
                                <group name="baliklar_1">
                                    <group name="pSphere10">
                                        <mesh
                                            name="pSphere10_fish1_0"


                                            geometry={nodes.pSphere10_fish1_0.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere53">
                                        <mesh
                                            name="pSphere53_fish1_0"


                                            geometry={nodes.pSphere53_fish1_0.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere54">
                                        <mesh
                                            name="pSphere54_fish1_0"


                                            geometry={nodes.pSphere54_fish1_0.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere55">
                                        <mesh
                                            name="pSphere55_fish1_0"


                                            geometry={nodes.pSphere55_fish1_0.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere56">
                                        <mesh
                                            name="pSphere56_fish1_0"


                                            geometry={nodes.pSphere56_fish1_0.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere57">
                                        <mesh
                                            name="pSphere57_fish1_0"


                                            geometry={nodes.pSphere57_fish1_0.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere58">
                                        <mesh
                                            name="pSphere58_fish1_0"


                                            geometry={nodes.pSphere58_fish1_0.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere59">
                                        <mesh
                                            name="pSphere59_fish1_0"


                                            geometry={nodes.pSphere59_fish1_0.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere60">
                                        <mesh
                                            name="pSphere60_fish1_0"


                                            geometry={nodes.pSphere60_fish1_0.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere61">
                                        <mesh
                                            name="pSphere61_fish1_0"


                                            geometry={nodes.pSphere61_fish1_0.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere62">
                                        <mesh
                                            name="pSphere62_fish1_0"


                                            geometry={nodes.pSphere62_fish1_0.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere63">
                                        <mesh
                                            name="pSphere63_fish1_0"


                                            geometry={nodes.pSphere63_fish1_0.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere64">
                                        <mesh
                                            name="pSphere64_fish1_0"


                                            geometry={nodes.pSphere64_fish1_0.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere65">
                                        <mesh
                                            name="pSphere65_fish1_0"


                                            geometry={nodes.pSphere65_fish1_0.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere66">
                                        <mesh
                                            name="pSphere66_fish1_0"


                                            geometry={nodes.pSphere66_fish1_0.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere67">
                                        <mesh
                                            name="pSphere67_fish1_0"


                                            geometry={nodes.pSphere67_fish1_0.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere68">
                                        <mesh
                                            name="pSphere68_fish1_0"


                                            geometry={nodes.pSphere68_fish1_0.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere69">
                                        <mesh
                                            name="pSphere69_fish1_0"


                                            geometry={nodes.pSphere69_fish1_0.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere70">
                                        <mesh
                                            name="pSphere70_fish1_0"


                                            geometry={nodes.pSphere70_fish1_0.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere71">
                                        <mesh
                                            name="pSphere71_fish1_0"


                                            geometry={nodes.pSphere71_fish1_0.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere72">
                                        <mesh
                                            name="pSphere72_fish1_0"


                                            geometry={nodes.pSphere72_fish1_0.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere73">
                                        <mesh
                                            name="pSphere73_fish1_0"


                                            geometry={nodes.pSphere73_fish1_0.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere74">
                                        <mesh
                                            name="pSphere74_fish1_0"


                                            geometry={nodes.pSphere74_fish1_0.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere75">
                                        <mesh
                                            name="pSphere75_fish1_0"


                                            geometry={nodes.pSphere75_fish1_0.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere76">
                                        <mesh
                                            name="pSphere76_fish1_0"


                                            geometry={nodes.pSphere76_fish1_0.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere77">
                                        <mesh
                                            name="pSphere77_fish1_0"


                                            geometry={nodes.pSphere77_fish1_0.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere78">
                                        <mesh
                                            name="pSphere78_fish1_0"


                                            geometry={nodes.pSphere78_fish1_0.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere79">
                                        <mesh
                                            name="pSphere79_fish1_0"


                                            geometry={nodes.pSphere79_fish1_0.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere80">
                                        <mesh
                                            name="pSphere80_fish1_0"


                                            geometry={nodes.pSphere80_fish1_0.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere81">
                                        <mesh
                                            name="pSphere81_fish1_0"


                                            geometry={nodes.pSphere81_fish1_0.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere82">
                                        <mesh
                                            name="pSphere82_fish1_0"


                                            geometry={nodes.pSphere82_fish1_0.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere83">
                                        <mesh
                                            name="pSphere83_fish1_0"


                                            geometry={nodes.pSphere83_fish1_0.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere84">
                                        <mesh
                                            name="pSphere84_fish1_0"


                                            geometry={nodes.pSphere84_fish1_0.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere85">
                                        <mesh
                                            name="pSphere85_fish1_0"


                                            geometry={nodes.pSphere85_fish1_0.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere86">
                                        <mesh
                                            name="pSphere86_fish1_0"


                                            geometry={nodes.pSphere86_fish1_0.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere87">
                                        <mesh
                                            name="pSphere87_fish1_0"


                                            geometry={nodes.pSphere87_fish1_0.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere88">
                                        <mesh
                                            name="pSphere88_fish1_0"


                                            geometry={nodes.pSphere88_fish1_0.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere89">
                                        <mesh
                                            name="pSphere89_fish1_0"


                                            geometry={nodes.pSphere89_fish1_0.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere90">
                                        <mesh
                                            name="pSphere90_fish1_0"


                                            geometry={nodes.pSphere90_fish1_0.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere91">
                                        <mesh
                                            name="pSphere91_fish1_0"


                                            geometry={nodes.pSphere91_fish1_0.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere92">
                                        <mesh
                                            name="pSphere92_fish1_0"


                                            geometry={nodes.pSphere92_fish1_0.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere93">
                                        <mesh
                                            name="pSphere93_fish1_0"


                                            geometry={nodes.pSphere93_fish1_0.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere94">
                                        <mesh
                                            name="pSphere94_fish1_0"


                                            geometry={nodes.pSphere94_fish1_0.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere95">
                                        <mesh
                                            name="pSphere95_fish1_0"


                                            geometry={nodes.pSphere95_fish1_0.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere96">
                                        <mesh
                                            name="pSphere96_fish1_0"


                                            geometry={nodes.pSphere96_fish1_0.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                </group>
                                <group name="baliklar_2">
                                    <group name="pSphere21">
                                        <mesh
                                            name="pSphere21_fish1_0"


                                            geometry={nodes.pSphere21_fish1_0.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere22">
                                        <mesh
                                            name="pSphere22_fish1_0"


                                            geometry={nodes.pSphere22_fish1_0.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere23">
                                        <mesh
                                            name="pSphere23_fish1_0"


                                            geometry={nodes.pSphere23_fish1_0.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere24">
                                        <mesh
                                            name="pSphere24_fish1_0"


                                            geometry={nodes.pSphere24_fish1_0.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere25">
                                        <mesh
                                            name="pSphere25_fish1_0"


                                            geometry={nodes.pSphere25_fish1_0.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere26">
                                        <mesh
                                            name="pSphere26_fish1_0"


                                            geometry={nodes.pSphere26_fish1_0.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere27">
                                        <mesh
                                            name="pSphere27_fish1_0"


                                            geometry={nodes.pSphere27_fish1_0.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere28">
                                        <mesh
                                            name="pSphere28_fish1_0"


                                            geometry={nodes.pSphere28_fish1_0.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere29">
                                        <mesh
                                            name="pSphere29_fish1_0"


                                            geometry={nodes.pSphere29_fish1_0.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere3">
                                        <mesh
                                            name="pSphere3_fish1_0"


                                            geometry={nodes.pSphere3_fish1_0.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere30">
                                        <mesh
                                            name="pSphere30_fish1_0"


                                            geometry={nodes.pSphere30_fish1_0.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere31">
                                        <mesh
                                            name="pSphere31_fish1_0"


                                            geometry={nodes.pSphere31_fish1_0.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere32">
                                        <mesh
                                            name="pSphere32_fish1_0"


                                            geometry={nodes.pSphere32_fish1_0.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere33">
                                        <mesh
                                            name="pSphere33_fish1_0"


                                            geometry={nodes.pSphere33_fish1_0.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere34">
                                        <mesh
                                            name="pSphere34_fish1_0"


                                            geometry={nodes.pSphere34_fish1_0.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere35">
                                        <mesh
                                            name="pSphere35_fish1_0"


                                            geometry={nodes.pSphere35_fish1_0.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere36">
                                        <mesh
                                            name="pSphere36_fish1_0"


                                            geometry={nodes.pSphere36_fish1_0.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere37">
                                        <mesh
                                            name="pSphere37_fish1_0"


                                            geometry={nodes.pSphere37_fish1_0.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere38">
                                        <mesh
                                            name="pSphere38_fish1_0"


                                            geometry={nodes.pSphere38_fish1_0.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                </group>
                                <group name="baliklar_3">
                                    <group name="pSphere39">
                                        <mesh
                                            name="pSphere39_fish_0"


                                            geometry={nodes.pSphere39_fish_0.geometry}
                                            material={materials.fish}
                                        />
                                    </group>
                                    <group name="pSphere40">
                                        <mesh
                                            name="pSphere40_fish_0"


                                            geometry={nodes.pSphere40_fish_0.geometry}
                                            material={materials.fish}
                                        />
                                    </group>
                                    <group name="pSphere41">
                                        <mesh
                                            name="pSphere41_fish_0"


                                            geometry={nodes.pSphere41_fish_0.geometry}
                                            material={materials.fish}
                                        />
                                    </group>
                                    <group name="pSphere42">
                                        <mesh
                                            name="pSphere42_fish_0"


                                            geometry={nodes.pSphere42_fish_0.geometry}
                                            material={materials.fish}
                                        />
                                    </group>
                                    <group name="pSphere43">
                                        <mesh
                                            name="pSphere43_fish_0"


                                            geometry={nodes.pSphere43_fish_0.geometry}
                                            material={materials.fish}
                                        />
                                    </group>
                                    <group name="pSphere44">
                                        <mesh
                                            name="pSphere44_fish_0"


                                            geometry={nodes.pSphere44_fish_0.geometry}
                                            material={materials.fish}
                                        />
                                    </group>
                                    <group
                                        name="pSphere45"
                                        position={[293.035, -124.004, 60.606]}
                                        scale={0.606}
                                    >
                                        <mesh
                                            name="pSphere45_fish_0"


                                            geometry={nodes.pSphere45_fish_0.geometry}
                                            material={materials.fish}
                                        />
                                    </group>
                                    <group name="pSphere46">
                                        <mesh
                                            name="pSphere46_fish_0"


                                            geometry={nodes.pSphere46_fish_0.geometry}
                                            material={materials.fish}
                                        />
                                    </group>
                                    <group name="pSphere47">
                                        <mesh
                                            name="pSphere47_fish_0"


                                            geometry={nodes.pSphere47_fish_0.geometry}
                                            material={materials.fish}
                                        />
                                    </group>
                                    <group name="pSphere48">
                                        <mesh
                                            name="pSphere48_fish_0"


                                            geometry={nodes.pSphere48_fish_0.geometry}
                                            material={materials.fish}
                                        />
                                    </group>
                                    <group name="pSphere49">
                                        <mesh
                                            name="pSphere49_fish_0"


                                            geometry={nodes.pSphere49_fish_0.geometry}
                                            material={materials.fish}
                                        />
                                    </group>
                                    <group name="pSphere50">
                                        <mesh
                                            name="pSphere50_fish_0"


                                            geometry={nodes.pSphere50_fish_0.geometry}
                                            material={materials.fish}
                                        />
                                    </group>
                                    <group name="pSphere51">
                                        <mesh
                                            name="pSphere51_fish_0"


                                            geometry={nodes.pSphere51_fish_0.geometry}
                                            material={materials.fish}
                                        />
                                    </group>
                                    <group name="pSphere52">
                                        <mesh
                                            name="pSphere52_fish_0"


                                            geometry={nodes.pSphere52_fish_0.geometry}
                                            material={materials.fish}
                                        />
                                    </group>
                                </group>
                                <group name="baliklar_4" position={[-151.51, 0, -475.891]}>
                                    <group name="pSphere1">
                                        <mesh
                                            name="pSphere1_fish2_0"


                                            geometry={nodes.pSphere1_fish2_0.geometry}
                                            material={materials.fish2}
                                        />
                                    </group>
                                    <group name="pSphere11">
                                        <mesh
                                            name="pSphere11_fish2_0"


                                            geometry={nodes.pSphere11_fish2_0.geometry}
                                            material={materials.fish2}
                                        />
                                    </group>
                                    <group name="pSphere12">
                                        <mesh
                                            name="pSphere12_fish2_0"


                                            geometry={nodes.pSphere12_fish2_0.geometry}
                                            material={materials.fish2}
                                        />
                                    </group>
                                    <group name="pSphere13">
                                        <mesh
                                            name="pSphere13_fish2_0"


                                            geometry={nodes.pSphere13_fish2_0.geometry}
                                            material={materials.fish2}
                                        />
                                    </group>
                                    <group name="pSphere14">
                                        <mesh
                                            name="pSphere14_fish2_0"


                                            geometry={nodes.pSphere14_fish2_0.geometry}
                                            material={materials.fish2}
                                        />
                                    </group>
                                    <group name="pSphere15">
                                        <mesh
                                            name="pSphere15_fish2_0"


                                            geometry={nodes.pSphere15_fish2_0.geometry}
                                            material={materials.fish2}
                                        />
                                    </group>
                                    <group name="pSphere16">
                                        <mesh
                                            name="pSphere16_fish2_0"


                                            geometry={nodes.pSphere16_fish2_0.geometry}
                                            material={materials.fish2}
                                        />
                                    </group>
                                    <group name="pSphere17">
                                        <mesh
                                            name="pSphere17_fish2_0"


                                            geometry={nodes.pSphere17_fish2_0.geometry}
                                            material={materials.fish2}
                                        />
                                    </group>
                                    <group name="pSphere18">
                                        <mesh
                                            name="pSphere18_fish2_0"


                                            geometry={nodes.pSphere18_fish2_0.geometry}
                                            material={materials.fish2}
                                        />
                                    </group>
                                    <group name="pSphere19">
                                        <mesh
                                            name="pSphere19_fish2_0"


                                            geometry={nodes.pSphere19_fish2_0.geometry}
                                            material={materials.fish2}
                                        />
                                    </group>
                                    <group name="pSphere2">
                                        <mesh
                                            name="pSphere2_fish2_0"


                                            geometry={nodes.pSphere2_fish2_0.geometry}
                                            material={materials.fish2}
                                        />
                                    </group>
                                    <group name="pSphere20">
                                        <mesh
                                            name="pSphere20_fish2_0"


                                            geometry={nodes.pSphere20_fish2_0.geometry}
                                            material={materials.fish2}
                                        />
                                    </group>
                                    <group name="pSphere4">
                                        <mesh
                                            name="pSphere4_fish2_0"


                                            geometry={nodes.pSphere4_fish2_0.geometry}
                                            material={materials.fish2}
                                        />
                                    </group>
                                    <group name="pSphere5">
                                        <mesh
                                            name="pSphere5_fish2_0"


                                            geometry={nodes.pSphere5_fish2_0.geometry}
                                            material={materials.fish2}
                                        />
                                    </group>
                                    <group name="pSphere6">
                                        <mesh
                                            name="pSphere6_fish2_0"


                                            geometry={nodes.pSphere6_fish2_0.geometry}
                                            material={materials.fish2}
                                        />
                                    </group>
                                    <group name="pSphere7">
                                        <mesh
                                            name="pSphere7_fish2_0"


                                            geometry={nodes.pSphere7_fish2_0.geometry}
                                            material={materials.fish2}
                                        />
                                    </group>
                                    <group name="pSphere8">
                                        <mesh
                                            name="pSphere8_fish2_0"


                                            geometry={nodes.pSphere8_fish2_0.geometry}
                                            material={materials.fish2}
                                        />
                                    </group>
                                    <group name="pSphere9">
                                        <mesh
                                            name="pSphere9_fish2_0"


                                            geometry={nodes.pSphere9_fish2_0.geometry}
                                            material={materials.fish2}
                                        />
                                    </group>
                                </group>
                                <group
                                    name="baliklar_5"
                                    position={[1091.706, 355.557, 1485.056]}
                                    rotation={[0, 0.442, 0]}
                                    scale={1.097}
                                >
                                    <group name="pSphere21001">
                                        <mesh
                                            name="pSphere21_fish1_0001"


                                            geometry={nodes.pSphere21_fish1_0001.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere22001">
                                        <mesh
                                            name="pSphere22_fish1_0001"


                                            geometry={nodes.pSphere22_fish1_0001.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere23001">
                                        <mesh
                                            name="pSphere23_fish1_0001"


                                            geometry={nodes.pSphere23_fish1_0001.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere24001">
                                        <mesh
                                            name="pSphere24_fish1_0001"


                                            geometry={nodes.pSphere24_fish1_0001.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere25001">
                                        <mesh
                                            name="pSphere25_fish1_0001"


                                            geometry={nodes.pSphere25_fish1_0001.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere26001">
                                        <mesh
                                            name="pSphere26_fish1_0001"


                                            geometry={nodes.pSphere26_fish1_0001.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere27001">
                                        <mesh
                                            name="pSphere27_fish1_0001"


                                            geometry={nodes.pSphere27_fish1_0001.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere28001">
                                        <mesh
                                            name="pSphere28_fish1_0001"


                                            geometry={nodes.pSphere28_fish1_0001.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere29001">
                                        <mesh
                                            name="pSphere29_fish1_0001"


                                            geometry={nodes.pSphere29_fish1_0001.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere3001">
                                        <mesh
                                            name="pSphere3_fish1_0001"


                                            geometry={nodes.pSphere3_fish1_0001.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere30001">
                                        <mesh
                                            name="pSphere30_fish1_0001"


                                            geometry={nodes.pSphere30_fish1_0001.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere31001">
                                        <mesh
                                            name="pSphere31_fish1_0001"


                                            geometry={nodes.pSphere31_fish1_0001.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere32001">
                                        <mesh
                                            name="pSphere32_fish1_0001"


                                            geometry={nodes.pSphere32_fish1_0001.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere33001">
                                        <mesh
                                            name="pSphere33_fish1_0001"


                                            geometry={nodes.pSphere33_fish1_0001.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere34001">
                                        <mesh
                                            name="pSphere34_fish1_0001"


                                            geometry={nodes.pSphere34_fish1_0001.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere35001">
                                        <mesh
                                            name="pSphere35_fish1_0001"


                                            geometry={nodes.pSphere35_fish1_0001.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere36001">
                                        <mesh
                                            name="pSphere36_fish1_0001"


                                            geometry={nodes.pSphere36_fish1_0001.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere37001">
                                        <mesh
                                            name="pSphere37_fish1_0001"


                                            geometry={nodes.pSphere37_fish1_0001.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere38001">
                                        <mesh
                                            name="pSphere38_fish1_0001"


                                            geometry={nodes.pSphere38_fish1_0001.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                </group>
                                <group
                                    name="baliklar_7"
                                    position={[-21.934, 44.868, 146.33]}
                                    scale={[1.184, 1.311, 1.184]}
                                >
                                    <group name="pSphere21002">
                                        <mesh
                                            name="pSphere21_fish1_0002"


                                            geometry={nodes.pSphere21_fish1_0002.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere22002">
                                        <mesh
                                            name="pSphere22_fish1_0002"


                                            geometry={nodes.pSphere22_fish1_0002.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere23002">
                                        <mesh
                                            name="pSphere23_fish1_0002"


                                            geometry={nodes.pSphere23_fish1_0002.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere24002">
                                        <mesh
                                            name="pSphere24_fish1_0002"


                                            geometry={nodes.pSphere24_fish1_0002.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere25002">
                                        <mesh
                                            name="pSphere25_fish1_0002"


                                            geometry={nodes.pSphere25_fish1_0002.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere26002">
                                        <mesh
                                            name="pSphere26_fish1_0002"


                                            geometry={nodes.pSphere26_fish1_0002.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere27002">
                                        <mesh
                                            name="pSphere27_fish1_0002"


                                            geometry={nodes.pSphere27_fish1_0002.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere28002">
                                        <mesh
                                            name="pSphere28_fish1_0002"


                                            geometry={nodes.pSphere28_fish1_0002.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere29002">
                                        <mesh
                                            name="pSphere29_fish1_0002"


                                            geometry={nodes.pSphere29_fish1_0002.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere3002">
                                        <mesh
                                            name="pSphere3_fish1_0002"


                                            geometry={nodes.pSphere3_fish1_0002.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere30002">
                                        <mesh
                                            name="pSphere30_fish1_0002"


                                            geometry={nodes.pSphere30_fish1_0002.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere31002">
                                        <mesh
                                            name="pSphere31_fish1_0002"


                                            geometry={nodes.pSphere31_fish1_0002.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere32002">
                                        <mesh
                                            name="pSphere32_fish1_0002"


                                            geometry={nodes.pSphere32_fish1_0002.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere33002">
                                        <mesh
                                            name="pSphere33_fish1_0002"


                                            geometry={nodes.pSphere33_fish1_0002.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere34002">
                                        <mesh
                                            name="pSphere34_fish1_0002"


                                            geometry={nodes.pSphere34_fish1_0002.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere35002">
                                        <mesh
                                            name="pSphere35_fish1_0002"


                                            geometry={nodes.pSphere35_fish1_0002.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere36002">
                                        <mesh
                                            name="pSphere36_fish1_0002"


                                            geometry={nodes.pSphere36_fish1_0002.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere37002">
                                        <mesh
                                            name="pSphere37_fish1_0002"


                                            geometry={nodes.pSphere37_fish1_0002.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                    <group name="pSphere38002">
                                        <mesh
                                            name="pSphere38_fish1_0002"


                                            geometry={nodes.pSphere38_fish1_0002.geometry}
                                            material={materials.fish1}
                                        />
                                    </group>
                                </group>
                                <group name="deniz1">
                                    <mesh
                                        name="deniz1_deniz_0"


                                        geometry={nodes.deniz1_deniz_0.geometry}
                                        material={materials.deniz}
                                    />
                                </group>
                                <group name="zemin">
                                    <mesh
                                        name="zemin_zemin1_0"


                                        geometry={nodes.zemin_zemin1_0.geometry}
                                        material={materials.zemin1}
                                    />
                                </group>
                            </group>
                            <group name="group1" position={[0, 0.038, 0]} scale={0.01}>
                                <group
                                    name="kayik1"
                                    position={[-13.582, 3.89, 172.401]}
                                    scale={1.063}
                                >
                                    <mesh
                                        name="kayik1_kayik_0"


                                        geometry={nodes.kayik1_kayik_0.geometry}
                                        material={materials.kayik}
                                    />
                                </group>
                                <group
                                    name="martizemin1"
                                    position={[224.931, -76.632, 164.467]}
                                    rotation={[0, -0.309, 0]}
                                    scale={0.37}
                                >
                                    <group name="pCube19003">
                                        <mesh
                                            name="pCube19_marti_bey_0003"


                                            geometry={nodes.pCube19_marti_bey_0003.geometry}
                                            material={materials.marti_bey}
                                        />
                                        <mesh
                                            name="pCube19_marti_tur_0003"


                                            geometry={nodes.pCube19_marti_tur_0003.geometry}
                                            material={materials.marti_tur}
                                        />
                                    </group>
                                    <group
                                        name="pCube20003"
                                        position={[0, -152.388, 0]}
                                        scale={[1, 1.488, 1]}
                                    >
                                        <mesh
                                            name="pCube20_marti_tur_0003"


                                            geometry={nodes.pCube20_marti_tur_0003.geometry}
                                            material={materials.marti_tur}
                                        />
                                    </group>
                                    <group
                                        name="pCube21003"
                                        position={[0, -152.388, 0]}
                                        scale={[1, 1.488, 1]}
                                    >
                                        <mesh
                                            name="pCube21_marti_tur_0003"


                                            geometry={nodes.pCube21_marti_tur_0003.geometry}
                                            material={materials.marti_tur}
                                        />
                                    </group>
                                </group>
                            </group>
                            <group name="group2" scale={0.01}>
                                <group
                                    name="pCube19004"
                                    position={[577.948, -92.426, 582.66]}
                                    rotation={[0, -0.785, 0]}
                                >
                                    <mesh
                                        name="pCube19_marti_bey_0004"


                                        geometry={nodes.pCube19_marti_bey_0004.geometry}
                                        material={materials.marti_bey}
                                    />
                                    <mesh
                                        name="pCube19_marti_tur_0004"


                                        geometry={nodes.pCube19_marti_tur_0004.geometry}
                                        material={materials.marti_tur}
                                    />
                                </group>
                                <group
                                    name="pCube20004"
                                    position={[577.948, -92.426, 582.66]}
                                    rotation={[0, -0.785, 0]}
                                >
                                    <mesh
                                        name="pCube20_marti_tur_0004"


                                        geometry={nodes.pCube20_marti_tur_0004.geometry}
                                        material={materials.marti_tur}
                                    />
                                </group>
                                <group
                                    name="pCube22"
                                    position={[577.948, -92.426, 582.66]}
                                    rotation={[0, -0.785, 0]}
                                >
                                    <mesh
                                        name="pCube22_marti_tur_0"


                                        geometry={nodes.pCube22_marti_tur_0.geometry}
                                        material={materials.marti_tur}
                                    />
                                </group>
                                <group
                                    name="pCube753"
                                    position={[583.083, -102.682, 598.23]}
                                    rotation={[0.027, -0.828, 0.012]}
                                >
                                    <mesh
                                        name="pCube753_marti_tur_0"


                                        geometry={nodes.pCube753_marti_tur_0.geometry}
                                        material={materials.marti_tur}
                                    />
                                </group>
                                <group
                                    name="pCube754"
                                    position={[583.083, -102.682, 598.23]}
                                    rotation={[0.027, -0.828, 0.012]}
                                >
                                    <mesh
                                        name="pCube754_marti_bey_0"


                                        geometry={nodes.pCube754_marti_bey_0.geometry}
                                        material={materials.marti_bey}
                                    />
                                    <mesh
                                        name="pCube754_marti_tur_0"


                                        geometry={nodes.pCube754_marti_tur_0.geometry}
                                        material={materials.marti_tur}
                                    />
                                </group>
                                <group
                                    name="pCube755"
                                    position={[583.083, -102.682, 598.23]}
                                    rotation={[0.027, -0.828, 0.012]}
                                >
                                    <mesh
                                        name="pCube755_marti_tur_0"


                                        geometry={nodes.pCube755_marti_tur_0.geometry}
                                        material={materials.marti_tur}
                                    />
                                </group>
                                <group
                                    name="pCube756"
                                    position={[559.653, -102.077, 537.408]}
                                    rotation={[0.031, -1.007, 0.015]}
                                >
                                    <mesh
                                        name="pCube756_marti_tur_0"


                                        geometry={nodes.pCube756_marti_tur_0.geometry}
                                        material={materials.marti_tur}
                                    />
                                </group>
                                <group
                                    name="pCube757"
                                    position={[559.653, -102.077, 537.408]}
                                    rotation={[0.031, -1.007, 0.015]}
                                >
                                    <mesh
                                        name="pCube757_marti_bey_0"


                                        geometry={nodes.pCube757_marti_bey_0.geometry}
                                        material={materials.marti_bey}
                                    />
                                    <mesh
                                        name="pCube757_marti_tur_0"


                                        geometry={nodes.pCube757_marti_tur_0.geometry}
                                        material={materials.marti_tur}
                                    />
                                </group>
                                <group
                                    name="pCube758"
                                    position={[559.653, -102.077, 537.408]}
                                    rotation={[0.031, -1.007, 0.015]}
                                >
                                    <mesh
                                        name="pCube758_marti_tur_0"


                                        geometry={nodes.pCube758_marti_tur_0.geometry}
                                        material={materials.marti_tur}
                                    />
                                </group>
                                <group
                                    name="pCube759"
                                    position={[557.832, -92.426, 538.075]}
                                    rotation={[0, -0.785, 0]}
                                >
                                    <mesh
                                        name="pCube759_marti_tur_0"


                                        geometry={nodes.pCube759_marti_tur_0.geometry}
                                        material={materials.marti_tur}
                                    />
                                </group>
                                <group
                                    name="pCube760"
                                    position={[557.832, -92.426, 538.075]}
                                    rotation={[0, -0.785, 0]}
                                >
                                    <mesh
                                        name="pCube760_marti_bey_0"


                                        geometry={nodes.pCube760_marti_bey_0.geometry}
                                        material={materials.marti_bey}
                                    />
                                    <mesh
                                        name="pCube760_marti_tur_0"


                                        geometry={nodes.pCube760_marti_tur_0.geometry}
                                        material={materials.marti_tur}
                                    />
                                </group>
                                <group
                                    name="pCube761"
                                    position={[557.832, -92.426, 538.075]}
                                    rotation={[0, -0.785, 0]}
                                >
                                    <mesh
                                        name="pCube761_marti_tur_0"


                                        geometry={nodes.pCube761_marti_tur_0.geometry}
                                        material={materials.marti_tur}
                                    />
                                </group>
                                <group
                                    name="pCube762"
                                    position={[562.967, -102.682, 553.645]}
                                    rotation={[0.027, -0.828, 0.012]}
                                >
                                    <mesh
                                        name="pCube762_marti_tur_0"


                                        geometry={nodes.pCube762_marti_tur_0.geometry}
                                        material={materials.marti_tur}
                                    />
                                </group>
                                <group
                                    name="pCube763"
                                    position={[562.967, -102.682, 553.645]}
                                    rotation={[0.027, -0.828, 0.012]}
                                >
                                    <mesh
                                        name="pCube763_marti_bey_0"


                                        geometry={nodes.pCube763_marti_bey_0.geometry}
                                        material={materials.marti_bey}
                                    />
                                    <mesh
                                        name="pCube763_marti_tur_0"


                                        geometry={nodes.pCube763_marti_tur_0.geometry}
                                        material={materials.marti_tur}
                                    />
                                </group>
                                <group
                                    name="pCube764"
                                    position={[562.967, -102.682, 553.645]}
                                    rotation={[0.027, -0.828, 0.012]}
                                >
                                    <mesh
                                        name="pCube764_marti_tur_0"


                                        geometry={nodes.pCube764_marti_tur_0.geometry}
                                        material={materials.marti_tur}
                                    />
                                </group>
                                <group
                                    name="pCube765"
                                    position={[539.536, -102.077, 492.823]}
                                    rotation={[0.031, -1.007, 0.015]}
                                >
                                    <mesh
                                        name="pCube765_marti_tur_0"


                                        geometry={nodes.pCube765_marti_tur_0.geometry}
                                        material={materials.marti_tur}
                                    />
                                </group>
                                <group
                                    name="pCube766"
                                    position={[539.536, -102.077, 492.823]}
                                    rotation={[0.031, -1.007, 0.015]}
                                >
                                    <mesh
                                        name="pCube766_marti_bey_0"


                                        geometry={nodes.pCube766_marti_bey_0.geometry}
                                        material={materials.marti_bey}
                                    />
                                    <mesh
                                        name="pCube766_marti_tur_0"


                                        geometry={nodes.pCube766_marti_tur_0.geometry}
                                        material={materials.marti_tur}
                                    />
                                </group>
                                <group
                                    name="pCube767"
                                    position={[539.536, -102.077, 492.823]}
                                    rotation={[0.031, -1.007, 0.015]}
                                >
                                    <mesh
                                        name="pCube767_marti_tur_0"


                                        geometry={nodes.pCube767_marti_tur_0.geometry}
                                        material={materials.marti_tur}
                                    />
                                </group>
                            </group>
                            <group name="group3" scale={0.01}>
                                <group
                                    name="pCube19005"
                                    position={[143.912, -121.053, 268.721]}
                                >
                                    <mesh
                                        name="pCube19_marti_bey_0005"


                                        geometry={nodes.pCube19_marti_bey_0005.geometry}
                                        material={materials.marti_bey}
                                    />
                                    <mesh
                                        name="pCube19_marti_tur_0005"


                                        geometry={nodes.pCube19_marti_tur_0005.geometry}
                                        material={materials.marti_tur}
                                    />
                                </group>
                                <group
                                    name="pCube20005"
                                    position={[143.912, -121.053, 268.721]}
                                >
                                    <mesh
                                        name="pCube20_marti_tur_0005"


                                        geometry={nodes.pCube20_marti_tur_0005.geometry}
                                        material={materials.marti_tur}
                                    />
                                </group>
                                <group
                                    name="pCube22001"
                                    position={[143.912, -121.053, 268.721]}
                                >
                                    <mesh
                                        name="pCube22_marti_tur_0001"


                                        geometry={nodes.pCube22_marti_tur_0001.geometry}
                                        material={materials.marti_tur}
                                    />
                                </group>
                                <group
                                    name="pCube768"
                                    position={[72.96, -102.513, 260.17]}
                                    rotation={[0, 0, -0.122]}
                                >
                                    <mesh
                                        name="pCube768_marti_tur_0"


                                        geometry={nodes.pCube768_marti_tur_0.geometry}
                                        material={materials.marti_tur}
                                    />
                                </group>
                                <group
                                    name="pCube769"
                                    position={[72.96, -102.513, 260.17]}
                                    rotation={[0, 0, -0.122]}
                                >
                                    <mesh
                                        name="pCube769_marti_bey_0"


                                        geometry={nodes.pCube769_marti_bey_0.geometry}
                                        material={materials.marti_bey}
                                    />
                                    <mesh
                                        name="pCube769_marti_tur_0"


                                        geometry={nodes.pCube769_marti_tur_0.geometry}
                                        material={materials.marti_tur}
                                    />
                                </group>
                                <group
                                    name="pCube770"
                                    position={[72.96, -102.513, 260.17]}
                                    rotation={[0, 0, -0.122]}
                                >
                                    <mesh
                                        name="pCube770_marti_tur_0"


                                        geometry={nodes.pCube770_marti_tur_0.geometry}
                                        material={materials.marti_tur}
                                    />
                                </group>
                                <group
                                    name="pCube771"
                                    position={[74.635, -99.997, 330.733]}
                                    rotation={[0.017, 0.141, -0.123]}
                                >
                                    <mesh
                                        name="pCube771_marti_tur_0"


                                        geometry={nodes.pCube771_marti_tur_0.geometry}
                                        material={materials.marti_tur}
                                    />
                                </group>
                                <group
                                    name="pCube772"
                                    position={[74.635, -99.997, 330.733]}
                                    rotation={[0.017, 0.141, -0.123]}
                                >
                                    <mesh
                                        name="pCube772_marti_bey_0"


                                        geometry={nodes.pCube772_marti_bey_0.geometry}
                                        material={materials.marti_bey}
                                    />
                                    <mesh
                                        name="pCube772_marti_tur_0"


                                        geometry={nodes.pCube772_marti_tur_0.geometry}
                                        material={materials.marti_tur}
                                    />
                                </group>
                                <group
                                    name="pCube773"
                                    position={[74.635, -99.997, 330.733]}
                                    rotation={[0.017, 0.141, -0.123]}
                                >
                                    <mesh
                                        name="pCube773_marti_tur_0"


                                        geometry={nodes.pCube773_marti_tur_0.geometry}
                                        material={materials.marti_tur}
                                    />
                                </group>
                            </group>
                            <group name="group4" scale={0.01}>
                                <group
                                    name="pCube33"
                                    position={[-283.762, -92.426, 842.441]}
                                    rotation={[-Math.PI, 0.668, -Math.PI]}
                                >
                                    <mesh
                                        name="pCube33_marti_tur_0"


                                        geometry={nodes.pCube33_marti_tur_0.geometry}
                                        material={materials.marti_tur}
                                        position={[1252.653, 210.064, -988.079]}
                                    />
                                </group>
                                <group
                                    name="pCube34"
                                    position={[-280.374, -92.426, 848.476]}
                                    rotation={[-Math.PI, 0.668, -Math.PI]}
                                >
                                    <mesh
                                        name="pCube34_marti_bey_0"


                                        geometry={nodes.pCube34_marti_bey_0.geometry}
                                        material={materials.marti_bey}
                                        position={[1252.653, 210.064, -988.079]}
                                    />
                                    <mesh
                                        name="pCube34_marti_tur_0"


                                        geometry={nodes.pCube34_marti_tur_0.geometry}
                                        material={materials.marti_tur}
                                        position={[1252.653, 210.064, -988.079]}
                                    />
                                </group>
                                <group
                                    name="pCube35"
                                    position={[-286.491, -92.426, 845.512]}
                                    rotation={[-Math.PI, 0.668, -Math.PI]}
                                >
                                    <mesh
                                        name="pCube35_marti_tur_0"


                                        geometry={nodes.pCube35_marti_tur_0.geometry}
                                        material={materials.marti_tur}
                                        position={[1252.653, 210.064, -988.079]}
                                    />
                                </group>
                                <group
                                    name="pCube36"
                                    position={[-294.469, -102.682, 881.742]}
                                    rotation={[3.118, 0.711, -3.134]}
                                >
                                    <mesh
                                        name="pCube36_marti_tur_0"


                                        geometry={nodes.pCube36_marti_tur_0.geometry}
                                        material={materials.marti_tur}
                                        position={[1206.866, 200.755, -1045.34]}
                                    />
                                </group>
                                <group
                                    name="pCube37"
                                    position={[-291.393, -102.682, 888.043]}
                                    rotation={[3.118, 0.711, -3.134]}
                                >
                                    <mesh
                                        name="pCube37_marti_bey_0"


                                        geometry={nodes.pCube37_marti_bey_0.geometry}
                                        material={materials.marti_bey}
                                        position={[1206.866, 200.755, -1045.34]}
                                    />
                                    <mesh
                                        name="pCube37_marti_tur_0"


                                        geometry={nodes.pCube37_marti_tur_0.geometry}
                                        material={materials.marti_tur}
                                        position={[1206.866, 200.755, -1045.34]}
                                    />
                                </group>
                                <group
                                    name="pCube38"
                                    position={[-297.328, -102.682, 884.691]}
                                    rotation={[3.118, 0.711, -3.134]}
                                >
                                    <mesh
                                        name="pCube38_marti_tur_0"


                                        geometry={nodes.pCube38_marti_tur_0.geometry}
                                        material={materials.marti_tur}
                                        position={[1206.866, 200.755, -1045.34]}
                                    />
                                </group>
                                <group
                                    name="pCube39"
                                    position={[-370.682, -102.077, 865.921]}
                                    rotation={[3.116, 0.89, -3.132]}
                                >
                                    <mesh
                                        name="pCube39_marti_tur_0"


                                        geometry={nodes.pCube39_marti_tur_0.geometry}
                                        material={materials.marti_tur}
                                        position={[1001.853, 200.755, -1243.203]}
                                    />
                                </group>
                                <group
                                    name="pCube40"
                                    position={[-368.753, -102.077, 872.678]}
                                    rotation={[3.116, 0.89, -3.132]}
                                >
                                    <mesh
                                        name="pCube40_marti_bey_0"


                                        geometry={nodes.pCube40_marti_bey_0.geometry}
                                        material={materials.marti_bey}
                                        position={[1001.853, 200.755, -1243.203]}
                                    />
                                    <mesh
                                        name="pCube40_marti_tur_0"


                                        geometry={nodes.pCube40_marti_tur_0.geometry}
                                        material={materials.marti_tur}
                                        position={[1001.853, 200.755, -1243.203]}
                                    />
                                </group>
                                <group
                                    name="pCube41"
                                    position={[-374.019, -102.077, 868.315]}
                                    rotation={[3.116, 0.89, -3.132]}
                                >
                                    <mesh
                                        name="pCube41_marti_tur_0"


                                        geometry={nodes.pCube41_marti_tur_0.geometry}
                                        material={materials.marti_tur}
                                        position={[1001.853, 200.755, -1243.203]}
                                    />
                                </group>
                                <group
                                    name="pCube42"
                                    position={[-303.879, -92.426, 797.856]}
                                    rotation={[-Math.PI, 0.668, -Math.PI]}
                                >
                                    <mesh
                                        name="pCube42_marti_tur_0"


                                        geometry={nodes.pCube42_marti_tur_0.geometry}
                                        material={materials.marti_tur}
                                        position={[1252.653, 210.064, -988.079]}
                                    />
                                </group>
                                <group
                                    name="pCube43"
                                    position={[-300.49, -92.426, 803.891]}
                                    rotation={[-Math.PI, 0.668, -Math.PI]}
                                >
                                    <mesh
                                        name="pCube43_marti_bey_0"


                                        geometry={nodes.pCube43_marti_bey_0.geometry}
                                        material={materials.marti_bey}
                                        position={[1252.653, 210.064, -988.079]}
                                    />
                                    <mesh
                                        name="pCube43_marti_tur_0"


                                        geometry={nodes.pCube43_marti_tur_0.geometry}
                                        material={materials.marti_tur}
                                        position={[1252.653, 210.064, -988.079]}
                                    />
                                </group>
                                <group
                                    name="pCube44"
                                    position={[-306.607, -92.426, 800.928]}
                                    rotation={[-Math.PI, 0.668, -Math.PI]}
                                >
                                    <mesh
                                        name="pCube44_marti_tur_0"


                                        geometry={nodes.pCube44_marti_tur_0.geometry}
                                        material={materials.marti_tur}
                                        position={[1252.653, 210.064, -988.079]}
                                    />
                                </group>
                                <group
                                    name="pCube45"
                                    position={[-314.585, -102.682, 837.157]}
                                    rotation={[3.118, 0.711, -3.134]}
                                >
                                    <mesh
                                        name="pCube45_marti_tur_0"


                                        geometry={nodes.pCube45_marti_tur_0.geometry}
                                        material={materials.marti_tur}
                                        position={[1206.866, 200.755, -1045.34]}
                                    />
                                </group>
                                <group
                                    name="pCube46"
                                    position={[-311.509, -102.682, 843.458]}
                                    rotation={[3.118, 0.711, -3.134]}
                                >
                                    <mesh
                                        name="pCube46_marti_bey_0"


                                        geometry={nodes.pCube46_marti_bey_0.geometry}
                                        material={materials.marti_bey}
                                        position={[1206.866, 200.755, -1045.34]}
                                    />
                                    <mesh
                                        name="pCube46_marti_tur_0"


                                        geometry={nodes.pCube46_marti_tur_0.geometry}
                                        material={materials.marti_tur}
                                        position={[1206.866, 200.755, -1045.34]}
                                    />
                                </group>
                                <group
                                    name="pCube47"
                                    position={[-317.444, -102.682, 840.106]}
                                    rotation={[3.118, 0.711, -3.134]}
                                >
                                    <mesh
                                        name="pCube47_marti_tur_0"


                                        geometry={nodes.pCube47_marti_tur_0.geometry}
                                        material={materials.marti_tur}
                                        position={[1206.866, 200.755, -1045.34]}
                                    />
                                </group>
                                <group
                                    name="pCube48"
                                    position={[-390.798, -102.077, 821.336]}
                                    rotation={[3.116, 0.89, -3.132]}
                                >
                                    <mesh
                                        name="pCube48_marti_tur_0"


                                        geometry={nodes.pCube48_marti_tur_0.geometry}
                                        material={materials.marti_tur}
                                        position={[1001.853, 200.755, -1243.203]}
                                    />
                                </group>
                                <group
                                    name="pCube49"
                                    position={[-388.869, -102.077, 828.093]}
                                    rotation={[3.116, 0.89, -3.132]}
                                >
                                    <mesh
                                        name="pCube49_marti_bey_0"


                                        geometry={nodes.pCube49_marti_bey_0.geometry}
                                        material={materials.marti_bey}
                                        position={[1001.853, 200.755, -1243.203]}
                                    />
                                    <mesh
                                        name="pCube49_marti_tur_0"


                                        geometry={nodes.pCube49_marti_tur_0.geometry}
                                        material={materials.marti_tur}
                                        position={[1001.853, 200.755, -1243.203]}
                                    />
                                </group>
                                <group
                                    name="pCube50"
                                    position={[-394.136, -102.077, 823.73]}
                                    rotation={[3.116, 0.89, -3.132]}
                                >
                                    <mesh
                                        name="pCube50_marti_tur_0"


                                        geometry={nodes.pCube50_marti_tur_0.geometry}
                                        material={materials.marti_tur}
                                        position={[1001.853, 200.755, -1243.203]}
                                    />
                                </group>
                            </group>
                            <group name="group5" scale={0.01}>
                                <group
                                    name="pCube19006"
                                    position={[-504.624, -92.426, -111.843]}
                                    rotation={[0, 0.763, 0]}
                                >
                                    <mesh
                                        name="pCube19_marti_bey_0006"


                                        geometry={nodes.pCube19_marti_bey_0006.geometry}
                                        material={materials.marti_bey}
                                    />
                                    <mesh
                                        name="pCube19_marti_tur_0006"


                                        geometry={nodes.pCube19_marti_tur_0006.geometry}
                                        material={materials.marti_tur}
                                    />
                                </group>
                                <group
                                    name="pCube20006"
                                    position={[-504.624, -92.426, -111.843]}
                                    rotation={[0, 0.763, 0]}
                                >
                                    <mesh
                                        name="pCube20_marti_tur_0006"


                                        geometry={nodes.pCube20_marti_tur_0006.geometry}
                                        material={materials.marti_tur}
                                    />
                                </group>
                                <group
                                    name="pCube22002"
                                    position={[-504.624, -92.426, -111.843]}
                                    rotation={[0, 0.763, 0]}
                                >
                                    <mesh
                                        name="pCube22_marti_tur_0002"


                                        geometry={nodes.pCube22_marti_tur_0002.geometry}
                                        material={materials.marti_tur}
                                    />
                                </group>
                                <group
                                    name="pCube774"
                                    position={[-574.634, -80.122, -44.956]}
                                    rotation={[0.153, 0.896, -0.195]}
                                >
                                    <mesh
                                        name="pCube774_marti_tur_0"


                                        geometry={nodes.pCube774_marti_tur_0.geometry}
                                        material={materials.marti_tur}
                                    />
                                </group>
                                <group
                                    name="pCube775"
                                    position={[-574.634, -80.122, -44.956]}
                                    rotation={[0.153, 0.896, -0.195]}
                                >
                                    <mesh
                                        name="pCube775_marti_bey_0"


                                        geometry={nodes.pCube775_marti_bey_0.geometry}
                                        material={materials.marti_bey}
                                    />
                                    <mesh
                                        name="pCube775_marti_tur_0"


                                        geometry={nodes.pCube775_marti_tur_0.geometry}
                                        material={materials.marti_tur}
                                    />
                                </group>
                                <group
                                    name="pCube776"
                                    position={[-574.634, -80.122, -44.956]}
                                    rotation={[0.153, 0.896, -0.195]}
                                >
                                    <mesh
                                        name="pCube776_marti_tur_0"


                                        geometry={nodes.pCube776_marti_tur_0.geometry}
                                        material={materials.marti_tur}
                                    />
                                </group>
                                <group
                                    name="pCube777"
                                    position={[-519.557, -102.682, -93.798]}
                                    rotation={[0.024, 0.719, -0.024]}
                                >
                                    <mesh
                                        name="pCube777_marti_tur_0"


                                        geometry={nodes.pCube777_marti_tur_0.geometry}
                                        material={materials.marti_tur}
                                    />
                                </group>
                                <group
                                    name="pCube778"
                                    position={[-519.557, -102.682, -93.798]}
                                    rotation={[0.024, 0.719, -0.024]}
                                >
                                    <mesh
                                        name="pCube778_marti_bey_0"


                                        geometry={nodes.pCube778_marti_bey_0.geometry}
                                        material={materials.marti_bey}
                                    />
                                    <mesh
                                        name="pCube778_marti_tur_0"


                                        geometry={nodes.pCube778_marti_tur_0.geometry}
                                        material={materials.marti_tur}
                                    />
                                </group>
                                <group
                                    name="pCube779"
                                    position={[-519.557, -102.682, -93.798]}
                                    rotation={[0.024, 0.719, -0.024]}
                                >
                                    <mesh
                                        name="pCube779_marti_tur_0"


                                        geometry={nodes.pCube779_marti_tur_0.geometry}
                                        material={materials.marti_tur}
                                    />
                                </group>
                                <group
                                    name="pCube780"
                                    position={[-591.698, -102.077, -162.242]}
                                    rotation={[0.019, 0.54, -0.021]}
                                >
                                    <mesh
                                        name="pCube780_marti_tur_0"


                                        geometry={nodes.pCube780_marti_tur_0.geometry}
                                        material={materials.marti_tur}
                                    />
                                </group>
                                <group
                                    name="pCube781"
                                    position={[-591.698, -102.077, -162.242]}
                                    rotation={[0.019, 0.54, -0.021]}
                                >
                                    <mesh
                                        name="pCube781_marti_bey_0"


                                        geometry={nodes.pCube781_marti_bey_0.geometry}
                                        material={materials.marti_bey}
                                    />
                                    <mesh
                                        name="pCube781_marti_tur_0"


                                        geometry={nodes.pCube781_marti_tur_0.geometry}
                                        material={materials.marti_tur}
                                    />
                                </group>
                                <group
                                    name="pCube782"
                                    position={[-591.698, -102.077, -162.242]}
                                    rotation={[0.019, 0.54, -0.021]}
                                >
                                    <mesh
                                        name="pCube782_marti_tur_0"


                                        geometry={nodes.pCube782_marti_tur_0.geometry}
                                        material={materials.marti_tur}
                                    />
                                </group>
                                <group
                                    name="pCube783"
                                    position={[-450.361, -92.426, -185.348]}
                                    rotation={[0, 0.763, 0]}
                                >
                                    <mesh
                                        name="pCube783_marti_tur_0"


                                        geometry={nodes.pCube783_marti_tur_0.geometry}
                                        material={materials.marti_tur}
                                    />
                                </group>
                                <group
                                    name="pCube784"
                                    position={[-450.361, -92.426, -185.348]}
                                    rotation={[0, 0.763, 0]}
                                >
                                    <mesh
                                        name="pCube784_marti_bey_0"


                                        geometry={nodes.pCube784_marti_bey_0.geometry}
                                        material={materials.marti_bey}
                                    />
                                    <mesh
                                        name="pCube784_marti_tur_0"


                                        geometry={nodes.pCube784_marti_tur_0.geometry}
                                        material={materials.marti_tur}
                                    />
                                </group>
                                <group
                                    name="pCube785"
                                    position={[-450.361, -92.426, -185.348]}
                                    rotation={[0, 0.763, 0]}
                                >
                                    <mesh
                                        name="pCube785_marti_tur_0"


                                        geometry={nodes.pCube785_marti_tur_0.geometry}
                                        material={materials.marti_tur}
                                    />
                                </group>
                                <group
                                    name="pCube786"
                                    position={[-465.294, -102.682, -167.303]}
                                    rotation={[0.024, 0.719, -0.024]}
                                >
                                    <mesh
                                        name="pCube786_marti_tur_0"


                                        geometry={nodes.pCube786_marti_tur_0.geometry}
                                        material={materials.marti_tur}
                                    />
                                </group>
                                <group
                                    name="pCube787"
                                    position={[-465.294, -102.682, -167.303]}
                                    rotation={[0.024, 0.719, -0.024]}
                                >
                                    <mesh
                                        name="pCube787_marti_bey_0"


                                        geometry={nodes.pCube787_marti_bey_0.geometry}
                                        material={materials.marti_bey}
                                    />
                                    <mesh
                                        name="pCube787_marti_tur_0"


                                        geometry={nodes.pCube787_marti_tur_0.geometry}
                                        material={materials.marti_tur}
                                    />
                                </group>
                                <group
                                    name="pCube788"
                                    position={[-465.294, -102.682, -167.303]}
                                    rotation={[0.024, 0.719, -0.024]}
                                >
                                    <mesh
                                        name="pCube788_marti_tur_0"


                                        geometry={nodes.pCube788_marti_tur_0.geometry}
                                        material={materials.marti_tur}
                                    />
                                </group>
                                <group
                                    name="pCube789"
                                    position={[-537.434, -102.077, -235.747]}
                                    rotation={[0.019, 0.54, -0.021]}
                                >
                                    <mesh
                                        name="pCube789_marti_tur_0"


                                        geometry={nodes.pCube789_marti_tur_0.geometry}
                                        material={materials.marti_tur}
                                    />
                                </group>
                                <group
                                    name="pCube790"
                                    position={[-537.434, -102.077, -235.747]}
                                    rotation={[0.019, 0.54, -0.021]}
                                >
                                    <mesh
                                        name="pCube790_marti_bey_0"


                                        geometry={nodes.pCube790_marti_bey_0.geometry}
                                        material={materials.marti_bey}
                                    />
                                    <mesh
                                        name="pCube790_marti_tur_0"


                                        geometry={nodes.pCube790_marti_tur_0.geometry}
                                        material={materials.marti_tur}
                                    />
                                </group>
                                <group
                                    name="pCube791"
                                    position={[-537.434, -102.077, -235.747]}
                                    rotation={[0.019, 0.54, -0.021]}
                                >
                                    <mesh
                                        name="pCube791_marti_tur_0"


                                        geometry={nodes.pCube791_marti_tur_0.geometry}
                                        material={materials.marti_tur}
                                    />
                                </group>
                            </group>
                            <group name="group6" scale={0.01}>
                                <group
                                    name="pCube51"
                                    position={[382.187, -92.426, -633.037]}
                                    rotation={[0, -0.533, 0]}
                                >
                                    <mesh
                                        name="pCube51_marti_tur_0"


                                        geometry={nodes.pCube51_marti_tur_0.geometry}
                                        material={materials.marti_tur}
                                    />
                                </group>
                                <group
                                    name="pCube52"
                                    position={[381.458, -92.426, -632.56]}
                                    rotation={[0, -0.533, 0]}
                                >
                                    <mesh
                                        name="pCube52_marti_bey_0"


                                        geometry={nodes.pCube52_marti_bey_0.geometry}
                                        material={materials.marti_bey}
                                    />
                                    <mesh
                                        name="pCube52_marti_tur_0"


                                        geometry={nodes.pCube52_marti_tur_0.geometry}
                                        material={materials.marti_tur}
                                    />
                                </group>
                                <group
                                    name="pCube53"
                                    position={[381.778, -92.426, -633.354]}
                                    rotation={[0, -0.533, 0]}
                                >
                                    <mesh
                                        name="pCube53_marti_tur_0"


                                        geometry={nodes.pCube53_marti_tur_0.geometry}
                                        material={materials.marti_tur}
                                    />
                                </group>
                                <group
                                    name="pCube54"
                                    position={[384.207, -102.682, -619.255]}
                                    rotation={[0.021, -0.576, 0.004]}
                                >
                                    <mesh
                                        name="pCube54_marti_tur_0"


                                        geometry={nodes.pCube54_marti_tur_0.geometry}
                                        material={materials.marti_tur}
                                    />
                                </group>
                                <group
                                    name="pCube55"
                                    position={[383.441, -102.682, -618.815]}
                                    rotation={[0.021, -0.576, 0.004]}
                                >
                                    <mesh
                                        name="pCube55_marti_bey_0"


                                        geometry={nodes.pCube55_marti_bey_0.geometry}
                                        material={materials.marti_bey}
                                    />
                                    <mesh
                                        name="pCube55_marti_tur_0"


                                        geometry={nodes.pCube55_marti_tur_0.geometry}
                                        material={materials.marti_tur}
                                    />
                                </group>
                                <group
                                    name="pCube56"
                                    position={[383.812, -102.682, -619.59]}
                                    rotation={[0.021, -0.576, 0.004]}
                                >
                                    <mesh
                                        name="pCube56_marti_tur_0"


                                        geometry={nodes.pCube56_marti_tur_0.geometry}
                                        material={materials.marti_tur}
                                    />
                                </group>
                                <group
                                    name="pCube57"
                                    position={[354.674, -102.077, -686.325]}
                                    rotation={[0.022, -0.755, 0.004]}
                                >
                                    <mesh
                                        name="pCube57_marti_tur_0"


                                        geometry={nodes.pCube57_marti_tur_0.geometry}
                                        material={materials.marti_tur}
                                    />
                                </group>
                                <group
                                    name="pCube58"
                                    position={[353.841, -102.077, -686.025]}
                                    rotation={[0.022, -0.755, 0.004]}
                                >
                                    <mesh
                                        name="pCube58_marti_bey_0"


                                        geometry={nodes.pCube58_marti_bey_0.geometry}
                                        material={materials.marti_bey}
                                    />
                                    <mesh
                                        name="pCube58_marti_tur_0"


                                        geometry={nodes.pCube58_marti_tur_0.geometry}
                                        material={materials.marti_tur}
                                    />
                                </group>
                                <group
                                    name="pCube59"
                                    position={[354.345, -102.077, -686.724]}
                                    rotation={[0.022, -0.755, 0.004]}
                                >
                                    <mesh
                                        name="pCube59_marti_tur_0"


                                        geometry={nodes.pCube59_marti_tur_0.geometry}
                                        material={materials.marti_tur}
                                    />
                                </group>
                                <group
                                    name="pCube60"
                                    position={[362.071, -92.426, -677.622]}
                                    rotation={[0, -0.533, 0]}
                                >
                                    <mesh
                                        name="pCube60_marti_tur_0"


                                        geometry={nodes.pCube60_marti_tur_0.geometry}
                                        material={materials.marti_tur}
                                    />
                                </group>
                                <group
                                    name="pCube61"
                                    position={[361.341, -92.426, -677.145]}
                                    rotation={[0, -0.533, 0]}
                                >
                                    <mesh
                                        name="pCube61_marti_bey_0"


                                        geometry={nodes.pCube61_marti_bey_0.geometry}
                                        material={materials.marti_bey}
                                    />
                                    <mesh
                                        name="pCube61_marti_tur_0"


                                        geometry={nodes.pCube61_marti_tur_0.geometry}
                                        material={materials.marti_tur}
                                    />
                                </group>
                                <group
                                    name="pCube62"
                                    position={[361.662, -92.426, -677.938]}
                                    rotation={[0, -0.533, 0]}
                                >
                                    <mesh
                                        name="pCube62_marti_tur_0"


                                        geometry={nodes.pCube62_marti_tur_0.geometry}
                                        material={materials.marti_tur}
                                    />
                                </group>
                                <group
                                    name="pCube63"
                                    position={[364.09, -102.682, -663.84]}
                                    rotation={[0.021, -0.576, 0.004]}
                                >
                                    <mesh
                                        name="pCube63_marti_tur_0"


                                        geometry={nodes.pCube63_marti_tur_0.geometry}
                                        material={materials.marti_tur}
                                    />
                                </group>
                                <group
                                    name="pCube64"
                                    position={[363.325, -102.682, -663.4]}
                                    rotation={[0.021, -0.576, 0.004]}
                                >
                                    <mesh
                                        name="pCube64_marti_bey_0"


                                        geometry={nodes.pCube64_marti_bey_0.geometry}
                                        material={materials.marti_bey}
                                    />
                                    <mesh
                                        name="pCube64_marti_tur_0"


                                        geometry={nodes.pCube64_marti_tur_0.geometry}
                                        material={materials.marti_tur}
                                    />
                                </group>
                                <group
                                    name="pCube65"
                                    position={[363.696, -102.682, -664.174]}
                                    rotation={[0.021, -0.576, 0.004]}
                                >
                                    <mesh
                                        name="pCube65_marti_tur_0"


                                        geometry={nodes.pCube65_marti_tur_0.geometry}
                                        material={materials.marti_tur}
                                    />
                                </group>
                                <group
                                    name="pCube66"
                                    position={[334.558, -102.077, -730.91]}
                                    rotation={[0.022, -0.755, 0.004]}
                                >
                                    <mesh
                                        name="pCube66_marti_tur_0"


                                        geometry={nodes.pCube66_marti_tur_0.geometry}
                                        material={materials.marti_tur}
                                    />
                                </group>
                                <group
                                    name="pCube67"
                                    position={[333.725, -102.077, -730.61]}
                                    rotation={[0.022, -0.755, 0.004]}
                                >
                                    <mesh
                                        name="pCube67_marti_bey_0"


                                        geometry={nodes.pCube67_marti_bey_0.geometry}
                                        material={materials.marti_bey}
                                    />
                                    <mesh
                                        name="pCube67_marti_tur_0"


                                        geometry={nodes.pCube67_marti_tur_0.geometry}
                                        material={materials.marti_tur}
                                    />
                                </group>
                                <group
                                    name="pCube68"
                                    position={[334.229, -102.077, -731.309]}
                                    rotation={[0.022, -0.755, 0.004]}
                                >
                                    <mesh
                                        name="pCube68_marti_tur_0"


                                        geometry={nodes.pCube68_marti_tur_0.geometry}
                                        material={materials.marti_tur}
                                    />
                                </group>
                            </group>
                            <group name="group7" scale={0.01}>
                                <group
                                    name="pCube19007"
                                    position={[-466.91, 55.583, 140.167]}
                                    rotation={[0, 0.178, 0]}
                                >
                                    <mesh
                                        name="pCube19_marti_bey_0007"


                                        geometry={nodes.pCube19_marti_bey_0007.geometry}
                                        material={materials.marti_bey}
                                        position={[-1570.136, 210.064, -283.038]}
                                    />
                                    <mesh
                                        name="pCube19_marti_tur_0007"


                                        geometry={nodes.pCube19_marti_tur_0007.geometry}
                                        material={materials.marti_tur}
                                        position={[-1570.136, 210.064, -283.038]}
                                    />
                                </group>
                                <group
                                    name="pCube20007"
                                    position={[-466.91, 55.583, 140.167]}
                                    rotation={[0, 0.178, 0]}
                                >
                                    <mesh
                                        name="pCube20_marti_tur_0007"


                                        geometry={nodes.pCube20_marti_tur_0007.geometry}
                                        material={materials.marti_tur}
                                        position={[-1570.136, 210.064, -283.038]}
                                    />
                                </group>
                                <group
                                    name="pCube22003"
                                    position={[-466.91, 55.583, 140.167]}
                                    rotation={[0, 0.178, 0]}
                                >
                                    <mesh
                                        name="pCube22_marti_tur_0003"


                                        geometry={nodes.pCube22_marti_tur_0003.geometry}
                                        material={materials.marti_tur}
                                        position={[-1570.136, 210.064, -283.038]}
                                    />
                                </group>
                                <group
                                    name="pCube792"
                                    position={[-531.29, 75.705, 201.434]}
                                    rotation={[0.04, 0.318, -0.128]}
                                >
                                    <mesh
                                        name="pCube792_marti_tur_0"


                                        geometry={nodes.pCube792_marti_tur_0.geometry}
                                        material={materials.marti_tur}
                                        position={[-1527.08, 14.989, -507.314]}
                                    />
                                </group>
                                <group
                                    name="pCube793"
                                    position={[-531.29, 75.705, 201.434]}
                                    rotation={[0.04, 0.318, -0.128]}
                                >
                                    <mesh
                                        name="pCube793_marti_bey_0"


                                        geometry={nodes.pCube793_marti_bey_0.geometry}
                                        material={materials.marti_bey}
                                        position={[-1527.08, 14.989, -507.314]}
                                    />
                                    <mesh
                                        name="pCube793_marti_tur_0"


                                        geometry={nodes.pCube793_marti_tur_0.geometry}
                                        material={materials.marti_tur}
                                        position={[-1527.08, 14.989, -507.314]}
                                    />
                                </group>
                                <group
                                    name="pCube794"
                                    position={[-531.29, 75.705, 201.434]}
                                    rotation={[0.04, 0.318, -0.128]}
                                >
                                    <mesh
                                        name="pCube794_marti_tur_0"


                                        geometry={nodes.pCube794_marti_tur_0.geometry}
                                        material={materials.marti_tur}
                                        position={[-1527.08, 14.989, -507.314]}
                                    />
                                </group>
                            </group>
                            <group name="kule" scale={0.01}>
                                <group
                                    name="pCube1"
                                    position={[1.375, 71.26, 78.113]}
                                    scale={[3.366, 1.432, 2.558]}
                                />
                                <group
                                    name="pCube3"
                                    position={[2.181, 56.614, -92.742]}
                                    scale={[3.348, 1.096, 1]}
                                >
                                    <mesh
                                        name="pCube3_lambert1_0"


                                        geometry={nodes.pCube3_lambert1_0.geometry}
                                        material={materials.lambert1}
                                    />
                                </group>
                                <group name="pCylinder2" />
                            </group>
                            <group
                                name="martizemin2"
                                position={[-1.447, 0.02, -0.669]}
                                rotation={[Math.PI, 1.467, 3.101]}
                                scale={0.004}
                            >
                                <group name="pCube19001" />
                                <group
                                    name="pCube20001"
                                    position={[0, -152.388, 0]}
                                    scale={[1, 1.488, 1]}
                                />
                                <group
                                    name="pCube21001"
                                    position={[0, -152.388, 0]}
                                    scale={[1, 1.488, 1]}
                                />
                            </group>
                            <group name="pCube743" scale={0.01}>
                                <mesh
                                    name="pCube743_otlar_0"


                                    geometry={nodes.pCube743_otlar_0.geometry}
                                    material={materials.otlar}
                                />
                                <mesh
                                    name="pCube743_otlar_0001"


                                    geometry={nodes.pCube743_otlar_0001.geometry}
                                    material={materials.otlar}
                                />
                            </group>
                            <group
                                name="pCube748"
                                position={[13.728, 19.995, 4.713]}
                                scale={-0.012}
                            >
                                <mesh
                                    name="pCube748_bulutlar_0"


                                    geometry={nodes.pCube748_bulutlar_0.geometry}
                                    material={materials.bulutlar}
                                    position={[0, 305.636, 0]}
                                />
                            </group>
                            <group
                                name="pCube749"
                                position={[-3.317, 15.31, -2.88]}
                                rotation={[0, -0.381, 0]}
                                scale={-0.007}
                            >
                                <mesh
                                    name="pCube749_bulutlar_0"


                                    geometry={nodes.pCube749_bulutlar_0.geometry}
                                    material={materials.bulutlar}
                                    position={[0, 484.219, 0]}
                                />
                            </group>
                            <group
                                name="pCube750"
                                position={[-8.773, 3.701, -1.871]}
                                rotation={[0, -0.13, 0]}
                                scale={0.006}
                            >
                                <mesh
                                    name="pCube750_bulutlar_0"


                                    geometry={nodes.pCube750_bulutlar_0.geometry}
                                    material={materials.bulutlar}
                                    position={[0, -458.902, 0]}
                                />
                            </group>
                            <group
                                name="pCube751"
                                position={[-4.885, -1.081, 4.442]}
                                rotation={[0, -0.13, 0]}
                                scale={0.012}
                            >
                                <mesh
                                    name="pCube751_bulutlar_0"


                                    geometry={nodes.pCube751_bulutlar_0.geometry}
                                    material={materials.bulutlar}
                                    position={[0, -506.107, 0]}
                                />
                            </group>
                            <group
                                name="pCube752"
                                position={[5.403, 3.552, 7.881]}
                                rotation={[0, 0.671, 0]}
                                scale={[0.006, 0.004, 0.006]}
                            >
                                <mesh
                                    name="pCube752_bulutlar_0"


                                    geometry={nodes.pCube752_bulutlar_0.geometry}
                                    material={materials.bulutlar}
                                    position={[0, -669.32, 0]}
                                />
                            </group>
                            <group name="pencereler" scale={0.01}>
                                <group name="pCube23" />
                                <group name="pCube24" />
                                <group name="pCube25" />
                                <group name="pCube26" />
                                <group name="pCube27" />
                                <group name="pCube28" />
                            </group>
                            <group name="pencereler1" scale={0.01}>
                                <group name="pCube29" />
                                <group name="pCube30" />
                                <group name="pCube31" />
                                <group name="pCube32" />
                            </group>
                            <group
                                name="yelkenli"
                                position={[1.619, 0.215, -0.432]}
                                rotation={[-0.046, -0.001, 0.031]}
                                scale={0.012}
                            >
                                <group name="kayik2">
                                    <mesh
                                        name="kayik2_kayik_0"


                                        geometry={nodes.kayik2_kayik_0.geometry}
                                        material={materials.kayik}
                                    />
                                </group>
                                <group name="pCylinder4">
                                    <mesh
                                        name="pCylinder4_kayik_0"


                                        geometry={nodes.pCylinder4_kayik_0.geometry}
                                        material={materials.kayik}
                                    />
                                </group>
                                <group name="pCylinder5" position={[15.016, 0, 15.015]}>
                                    <mesh
                                        name="pCylinder5_kayik_0"


                                        geometry={nodes.pCylinder5_kayik_0.geometry}
                                        material={materials.kayik}
                                    />
                                </group>
                                <group name="pPlane2">
                                    <mesh
                                        name="pPlane2_yelken_0"


                                        geometry={nodes.pPlane2_yelken_0.geometry}
                                        material={materials.yelken}
                                    />
                                </group>
                                <group
                                    name="pPlane3"
                                    position={[15.016, -3.633, 15.015]}
                                    scale={[1, 1.095, 1]}
                                >
                                    <mesh
                                        name="pPlane3_yelken_0"


                                        geometry={nodes.pPlane3_yelken_0.geometry}
                                        material={materials.yelken}
                                    />
                                </group>
                            </group>
                            <group
                                name="yelkenli1"
                                position={[7.768, -0.114, 0.975]}
                                rotation={[0.096, 0.791, -0.135]}
                                scale={0.009}
                            >
                                <group name="kayik2001">
                                    <mesh
                                        name="kayik2_kayik_0001"


                                        geometry={nodes.kayik2_kayik_0001.geometry}
                                        material={materials.kayik}
                                    />
                                </group>
                                <group name="pCylinder4001">
                                    <mesh
                                        name="pCylinder4_kayik_0001"


                                        geometry={nodes.pCylinder4_kayik_0001.geometry}
                                        material={materials.kayik}
                                    />
                                </group>
                                <group name="pCylinder5001" position={[15.016, 0, 15.015]}>
                                    <mesh
                                        name="pCylinder5_kayik_0001"


                                        geometry={nodes.pCylinder5_kayik_0001.geometry}
                                        material={materials.kayik}
                                    />
                                </group>
                                <group name="pPlane2001">
                                    <mesh
                                        name="pPlane2_yelken_0001"


                                        geometry={nodes.pPlane2_yelken_0001.geometry}
                                        material={materials.yelken}
                                    />
                                </group>
                                <group
                                    name="pPlane3001"
                                    position={[15.016, -3.633, 15.015]}
                                    scale={[1, 1.095, 1]}
                                >
                                    <mesh
                                        name="pPlane3_yelken_0001"


                                        geometry={nodes.pPlane3_yelken_0001.geometry}
                                        material={materials.yelken}
                                    />
                                </group>
                            </group>
                        </group>
                    </group>
                </group>
            </group>
            <mesh
                name="Cylinder"


                geometry={nodes.Cylinder.geometry}
                material={materials["Material.014"]}
                position={[-0.307, 0.586, -0.266]}
                scale={[5.148, 0.268, 4.719]}
            />
            <mesh
                name="Tree001"


                geometry={nodes.Tree001.geometry}
                material={materials["Material.005"]}
                morphTargetDictionary={nodes.Tree001.morphTargetDictionary}
                morphTargetInfluences={nodes.Tree001.morphTargetInfluences}
                position={[4.413, 1.024, 0.894]}
                rotation={[0, Math.PI / 4, 0]}
                scale={0.647}
            />
            <mesh
                name="Tree003"


                geometry={nodes.Tree003.geometry}
                material={materials["Material.005"]}
                morphTargetDictionary={nodes.Tree003.morphTargetDictionary}
                morphTargetInfluences={nodes.Tree003.morphTargetInfluences}
                position={[3.47, 1.024, 1.629]}
                rotation={[0, Math.PI / 4, 0]}
                scale={0.464}
            />
            <mesh
                name="Tree004"


                geometry={nodes.Tree004.geometry}
                material={materials["Material.005"]}
                morphTargetDictionary={nodes.Tree004.morphTargetDictionary}
                morphTargetInfluences={nodes.Tree004.morphTargetInfluences}
                position={[2.154, 1.024, 0.363]}
                rotation={[0, Math.PI / 4, 0]}
                scale={0.432}
            />
            <mesh
                name="Tree005"


                geometry={nodes.Tree005.geometry}
                material={materials["Material.005"]}
                morphTargetDictionary={nodes.Tree005.morphTargetDictionary}
                morphTargetInfluences={nodes.Tree005.morphTargetInfluences}
                position={[1.584, 1.024, -0.96]}
                rotation={[0, Math.PI / 4, 0]}
                scale={0.396}
            />
            <mesh
                name="Tree006"


                geometry={nodes.Tree006.geometry}
                material={materials["Material.005"]}
                morphTargetDictionary={nodes.Tree006.morphTargetDictionary}
                morphTargetInfluences={nodes.Tree006.morphTargetInfluences}
                position={[2.357, 1.024, -1.401]}
                rotation={[0, Math.PI / 4, 0]}
                scale={0.611}
            />
            <mesh
                name="Tree007"


                geometry={nodes.Tree007.geometry}
                material={materials["Material.005"]}
                morphTargetDictionary={nodes.Tree007.morphTargetDictionary}
                morphTargetInfluences={nodes.Tree007.morphTargetInfluences}
                position={[2.378, 1.024, -0.241]}
                rotation={[0, Math.PI / 4, 0]}
                scale={0.219}
            />
            <mesh
                name="Tree008"


                geometry={nodes.Tree008.geometry}
                material={materials["Material.005"]}
                morphTargetDictionary={nodes.Tree008.morphTargetDictionary}
                morphTargetInfluences={nodes.Tree008.morphTargetInfluences}
                position={[4.323, 1.024, -0.464]}
                rotation={[0, Math.PI / 4, 0]}
                scale={1.125}
            />
            <mesh
                name="Tree009"


                geometry={nodes.Tree009.geometry}
                material={materials["Material.005"]}
                morphTargetDictionary={nodes.Tree009.morphTargetDictionary}
                morphTargetInfluences={nodes.Tree009.morphTargetInfluences}
                position={[1.511, 1.024, 0.786]}
                rotation={[0, Math.PI / 4, 0]}
                scale={0.28}
            />
            <mesh
                name="Tree010"


                geometry={nodes.Tree010.geometry}
                material={materials["Material.005"]}
                morphTargetDictionary={nodes.Tree010.morphTargetDictionary}
                morphTargetInfluences={nodes.Tree010.morphTargetInfluences}
                position={[1.235, 1.024, -1.751]}
                rotation={[0, Math.PI / 4, 0]}
                scale={0.219}
            />
            <group
                name="Sketchfab_model001"
                position={[-1.975, -0.925, 0.318]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={2.376}
            >
                <group
                    name="6fe399da8bc040dd809048089f9c1faafbx001"
                    rotation={[Math.PI / 2, 0, 0]}
                >
                    <group name="Object_2001">
                        <group name="RootNode001">
                            <group
                                name="denizalti001"
                                position={[0, -2.266, 0]}
                                scale={0.01}
                            >
                                <group
                                    name="baliklar_5001"
                                    position={[1091.706, 355.557, 1485.056]}
                                    rotation={[0, 0.442, 0]}
                                    scale={1.097}
                                >
                                    <group name="pSphere21003">
                                        <mesh
                                            name="pSphere21_fish1_0004"


                                            geometry={nodes.pSphere21_fish1_0004.geometry}
                                            material={materials["fish1.001"]}
                                        />
                                    </group>
                                    <group name="pSphere22003">
                                        <mesh
                                            name="pSphere22_fish1_0004"


                                            geometry={nodes.pSphere22_fish1_0004.geometry}
                                            material={materials["fish1.001"]}
                                        />
                                    </group>
                                    <group name="pSphere23003">
                                        <mesh
                                            name="pSphere23_fish1_0004"


                                            geometry={nodes.pSphere23_fish1_0004.geometry}
                                            material={materials["fish1.001"]}
                                        />
                                    </group>
                                    <group name="pSphere24003">
                                        <mesh
                                            name="pSphere24_fish1_0004"


                                            geometry={nodes.pSphere24_fish1_0004.geometry}
                                            material={materials["fish1.001"]}
                                        />
                                    </group>
                                    <group name="pSphere25003">
                                        <mesh
                                            name="pSphere25_fish1_0004"


                                            geometry={nodes.pSphere25_fish1_0004.geometry}
                                            material={materials["fish1.001"]}
                                        />
                                    </group>
                                    <group name="pSphere26003">
                                        <mesh
                                            name="pSphere26_fish1_0004"


                                            geometry={nodes.pSphere26_fish1_0004.geometry}
                                            material={materials["fish1.001"]}
                                        />
                                    </group>
                                    <group name="pSphere27003">
                                        <mesh
                                            name="pSphere27_fish1_0004"


                                            geometry={nodes.pSphere27_fish1_0004.geometry}
                                            material={materials["fish1.001"]}
                                        />
                                    </group>
                                    <group name="pSphere28003">
                                        <mesh
                                            name="pSphere28_fish1_0004"


                                            geometry={nodes.pSphere28_fish1_0004.geometry}
                                            material={materials["fish1.001"]}
                                        />
                                    </group>
                                    <group name="pSphere29003">
                                        <mesh
                                            name="pSphere29_fish1_0004"


                                            geometry={nodes.pSphere29_fish1_0004.geometry}
                                            material={materials["fish1.001"]}
                                        />
                                    </group>
                                    <group name="pSphere3003">
                                        <mesh
                                            name="pSphere3_fish1_0004"


                                            geometry={nodes.pSphere3_fish1_0004.geometry}
                                            material={materials["fish1.001"]}
                                        />
                                    </group>
                                    <group name="pSphere30003">
                                        <mesh
                                            name="pSphere30_fish1_0004"


                                            geometry={nodes.pSphere30_fish1_0004.geometry}
                                            material={materials["fish1.001"]}
                                        />
                                    </group>
                                    <group name="pSphere31003">
                                        <mesh
                                            name="pSphere31_fish1_0004"


                                            geometry={nodes.pSphere31_fish1_0004.geometry}
                                            material={materials["fish1.001"]}
                                        />
                                    </group>
                                    <group name="pSphere32003">
                                        <mesh
                                            name="pSphere32_fish1_0004"


                                            geometry={nodes.pSphere32_fish1_0004.geometry}
                                            material={materials["fish1.001"]}
                                        />
                                    </group>
                                    <group name="pSphere33003">
                                        <mesh
                                            name="pSphere33_fish1_0004"


                                            geometry={nodes.pSphere33_fish1_0004.geometry}
                                            material={materials["fish1.001"]}
                                        />
                                    </group>
                                    <group name="pSphere34003">
                                        <mesh
                                            name="pSphere34_fish1_0004"


                                            geometry={nodes.pSphere34_fish1_0004.geometry}
                                            material={materials["fish1.001"]}
                                        />
                                    </group>
                                    <group name="pSphere35003">
                                        <mesh
                                            name="pSphere35_fish1_0004"


                                            geometry={nodes.pSphere35_fish1_0004.geometry}
                                            material={materials["fish1.001"]}
                                        />
                                    </group>
                                    <group name="pSphere36003">
                                        <mesh
                                            name="pSphere36_fish1_0004"


                                            geometry={nodes.pSphere36_fish1_0004.geometry}
                                            material={materials["fish1.001"]}
                                        />
                                    </group>
                                    <group name="pSphere37003">
                                        <mesh
                                            name="pSphere37_fish1_0004"


                                            geometry={nodes.pSphere37_fish1_0004.geometry}
                                            material={materials["fish1.001"]}
                                        />
                                    </group>
                                    <group name="pSphere38003">
                                        <mesh
                                            name="pSphere38_fish1_0004"


                                            geometry={nodes.pSphere38_fish1_0004.geometry}
                                            material={materials["fish1.001"]}
                                        />
                                    </group>
                                </group>
                                <group name="deniz1001">
                                    <mesh
                                        name="deniz1_deniz_0001"


                                        geometry={nodes.deniz1_deniz_0001.geometry}
                                        material={materials["deniz.001"]}
                                    />
                                </group>
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </a.group>
    );
}

useGLTF.preload("/NewIsland4.glb");

export default Island;