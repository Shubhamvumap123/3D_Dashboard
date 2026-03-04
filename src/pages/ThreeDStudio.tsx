import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stage, Float, MeshDistortMaterial, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';
import { Settings, Layers, PlaySquare } from 'lucide-react';

interface AnimatedGeometryProps {
    color: string;
    distort: number;
    speed: number;
    roughness: number;
    geometryType: 'torus' | 'sphere' | 'box';
    autoRotateModel: boolean;
}

function AnimatedGeometry({ color, distort, speed, roughness, geometryType, autoRotateModel }: AnimatedGeometryProps) {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current && autoRotateModel) {
            meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
            meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <mesh ref={meshRef} castShadow receiveShadow>
                {geometryType === 'torus' && <torusKnotGeometry args={[1, 0.3, 256, 64]} />}
                {geometryType === 'sphere' && <sphereGeometry args={[1.2, 64, 64]} />}
                {geometryType === 'box' && <boxGeometry args={[1.5, 1.5, 1.5]} />}

                <MeshDistortMaterial
                    color={color}
                    envMapIntensity={1}
                    clearcoat={0.8}
                    clearcoatRoughness={0}
                    roughness={roughness}
                    metalness={0.8}
                    distort={distort}
                    speed={speed}
                />
            </mesh>
        </Float>
    );
}

export default function ThreeDStudio() {
    const [color, setColor] = useState('#3b82f6');
    const [distort, setDistort] = useState(0.4);
    const [speed, setSpeed] = useState(2);
    const [roughness, setRoughness] = useState(0.1);
    const [geometryType, setGeometryType] = useState<'torus' | 'sphere' | 'box'>('torus');
    const [autoRotateCamera, setAutoRotateCamera] = useState(true);
    const [autoRotateModel, setAutoRotateModel] = useState(true);

    return (
        <div className="h-full w-full flex flex-col gap-6 pb-6">
            <div className="flex items-end justify-between">
                <div>
                    <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 tracking-tight">3D Interaction Studio</h1>
                    <p className="text-slate-400 mt-2 font-light text-lg">Real-time material and geometry manipulation environment.</p>
                </div>
            </div>

            <div className="flex-1 flex flex-col lg:flex-row gap-6 min-h-[600px]">
                {/* 3D Canvas Area */}
                <div className="flex-1 glass-panel rounded-2xl border border-white/5 relative overflow-hidden flex flex-col">
                    <div className="p-4 border-b border-white/5 flex items-center gap-3 bg-slate-900/50 backdrop-blur-md z-10">
                        <PlaySquare className="w-5 h-5 text-blue-400" />
                        <span className="font-semibold text-slate-200">Live Workspace</span>
                    </div>

                    <div className="flex-1 relative cursor-move">
                        <div className="absolute inset-0 pointer-events-none z-10 shadow-[inset_0_0_50px_rgba(0,0,0,0.5)]" />
                        <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 45 }}>
                            <color attach="background" args={['transparent']} />
                            <ambientLight intensity={0.5} />
                            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />

                            <Stage adjustCamera intensity={0.5} environment="city">
                                <AnimatedGeometry
                                    color={color}
                                    distort={distort}
                                    speed={speed}
                                    roughness={roughness}
                                    geometryType={geometryType}
                                    autoRotateModel={autoRotateModel}
                                />
                            </Stage>

                            <ContactShadows position={[0, -1.5, 0]} opacity={0.4} scale={10} blur={2} far={4} />
                            <OrbitControls makeDefault autoRotate={autoRotateCamera} autoRotateSpeed={0.5} enableZoom={true} />
                        </Canvas>
                    </div>
                </div>

                {/* Control Panel Settings */}
                <div className="w-full lg:w-80 flex flex-col gap-6">
                    <div className="glass-panel p-6 rounded-2xl border border-white/5">
                        <div className="flex items-center gap-3 mb-6">
                            <Settings className="w-5 h-5 text-blue-400" />
                            <h3 className="font-semibold text-lg text-slate-200">Material Settings</h3>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <div className="flex justify-between text-sm mb-2">
                                    <span className="text-slate-400">Color Variant</span>
                                </div>
                                <div className="flex gap-3">
                                    {['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899'].map(c => (
                                        <button
                                            key={c}
                                            onClick={() => setColor(c)}
                                            className={`w-8 h-8 rounded-full transition-transform hover:scale-110 ${color === c ? 'ring-2 ring-white ring-offset-2 ring-offset-[#0a0f1a]' : ''}`}
                                            style={{ backgroundColor: c }}
                                        />
                                    ))}
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between text-sm mb-2">
                                    <span className="text-slate-400">Distortion Level</span>
                                    <span className="text-slate-200 font-mono">{distort.toFixed(2)}</span>
                                </div>
                                <input
                                    type="range" min="0" max="1" step="0.01"
                                    value={distort} onChange={e => setDistort(parseFloat(e.target.value))}
                                    className="w-full h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                                />
                            </div>

                            <div>
                                <div className="flex justify-between text-sm mb-2">
                                    <span className="text-slate-400">Animation Speed</span>
                                    <span className="text-slate-200 font-mono">{speed.toFixed(1)}x</span>
                                </div>
                                <input
                                    type="range" min="0" max="5" step="0.1"
                                    value={speed} onChange={e => setSpeed(parseFloat(e.target.value))}
                                    className="w-full h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                                />
                            </div>

                            <div>
                                <div className="flex justify-between text-sm mb-2">
                                    <span className="text-slate-400">Surface Roughness</span>
                                    <span className="text-slate-200 font-mono">{roughness.toFixed(2)}</span>
                                </div>
                                <input
                                    type="range" min="0" max="1" step="0.01"
                                    value={roughness} onChange={e => setRoughness(parseFloat(e.target.value))}
                                    className="w-full h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="glass-panel p-6 rounded-2xl border border-white/5 flex-1">
                        <div className="flex items-center gap-3 mb-6">
                            <Layers className="w-5 h-5 text-blue-400" />
                            <h3 className="font-semibold text-lg text-slate-200">Geometry</h3>
                        </div>

                        <div className="space-y-3 mb-8">
                            {(['torus', 'sphere', 'box'] as const).map(type => (
                                <button
                                    key={type}
                                    onClick={() => setGeometryType(type)}
                                    className={`w-full py-3 px-4 rounded-xl flex items-center justify-between transition-all ${geometryType === type ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' : 'bg-slate-800/30 text-slate-400 hover:bg-slate-800/60 border border-transparent'}`}
                                >
                                    <span className="capitalize">{type}</span>
                                    {geometryType === type && <div className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]" />}
                                </button>
                            ))}
                        </div>

                        <div className="space-y-4 pt-6 border-t border-white/10">
                            <label className="flex items-center justify-between cursor-pointer group">
                                <span className="text-slate-400 group-hover:text-slate-200 transition-colors">Camera Auto-Rotate</span>
                                <input type="checkbox" checked={autoRotateCamera} onChange={e => setAutoRotateCamera(e.target.checked)} className="sr-only peer" />
                                <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500 relative"></div>
                            </label>

                            <label className="flex items-center justify-between cursor-pointer group">
                                <span className="text-slate-400 group-hover:text-slate-200 transition-colors">Model Animation</span>
                                <input type="checkbox" checked={autoRotateModel} onChange={e => setAutoRotateModel(e.target.checked)} className="sr-only peer" />
                                <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500 relative"></div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
