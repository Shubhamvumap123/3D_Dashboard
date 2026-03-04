import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Stage, Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedGeometry() {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
            meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <mesh ref={meshRef} castShadow receiveShadow>
                <torusKnotGeometry args={[1, 0.3, 128, 32]} />
                <MeshDistortMaterial
                    color="#3b82f6"
                    envMapIntensity={1}
                    clearcoat={0.8}
                    clearcoatRoughness={0}
                    roughness={0.1}
                    metalness={0.8}
                    distort={0.4}
                    speed={2}
                />
            </mesh>
        </Float>
    );
}

export default function ThreeDViewerWidget() {
    return (
        <div className="w-full h-full min-h-[300px] bg-slate-900/40 rounded-xl overflow-hidden relative border border-white/5 cursor-move">
            <div className="absolute inset-0 pointer-events-none z-10 shadow-[inset_0_0_30px_rgba(0,0,0,0.5)]" />
            <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4.5], fov: 45 }}>
                <color attach="background" args={['transparent']} />
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />

                <Stage adjustCamera intensity={0.5} shadows="contact" environment="city">
                    <AnimatedGeometry />
                </Stage>
                <OrbitControls makeDefault autoRotate autoRotateSpeed={0.5} enableZoom={true} enablePan={false} />
            </Canvas>
        </div>
    );
}
