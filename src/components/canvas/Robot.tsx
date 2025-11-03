import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { AdaptiveDpr, OrbitControls, Preload } from "@react-three/drei";
import * as THREE from "three";

const RobotModel = () => {
  const robotRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (robotRef.current) {
      // Idle subtle motion only (no mouse interaction)
      robotRef.current.rotation.y += 0.002;
      // Add subtle floating animation
      robotRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group ref={robotRef} position={[0, 0, 0]}>
      {/* Main robot body */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.2, 1.8, 0.8]} />
        <meshStandardMaterial color="#3b82f6" />
      </mesh>
      
      {/* Robot head */}
      <mesh position={[0, 1.2, 0]}>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshStandardMaterial color="#1e40af" />
      </mesh>
      
      {/* Eyes */}
      <mesh position={[-0.2, 1.4, 0.4]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      <mesh position={[0.2, 1.4, 0.4]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      
      {/* Arms */}
      <mesh position={[-0.9, 0.3, 0]}>
        <boxGeometry args={[0.25, 1.2, 0.25]} />
        <meshStandardMaterial color="#3b82f6" />
      </mesh>
      <mesh position={[0.9, 0.3, 0]}>
        <boxGeometry args={[0.25, 1.2, 0.25]} />
        <meshStandardMaterial color="#3b82f6" />
      </mesh>
      
      {/* Legs */}
      <mesh position={[-0.3, -1.2, 0]}>
        <boxGeometry args={[0.25, 0.8, 0.25]} />
        <meshStandardMaterial color="#1e40af" />
      </mesh>
      <mesh position={[0.3, -1.2, 0]}>
        <boxGeometry args={[0.25, 0.8, 0.25]} />
        <meshStandardMaterial color="#1e40af" />
      </mesh>
      
      {/* Glowing effect */}
      <pointLight position={[0, 0, 1]} intensity={0.3} color="#3b82f6" />
    </group>
  );
};

const RobotCanvas = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState(false as any);
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 640px)');
    const apply = () => setIsMobile(mq.matches as any);
    apply();
    mq.addEventListener?.('change', apply);
    return () => mq.removeEventListener?.('change', apply);
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full bg-transparent">
      {isMobile ? (
        <img src="/rog-phone-3.png" alt="Robot" className="w-full h-full object-contain opacity-20" loading="lazy" decoding="async" />
      ) : (
      <Canvas
        shadows={false}
        dpr={[1, 1]} // Further reduced for mobile compatibility
        camera={{ position: [0, 0, 6], fov: 60 }}
        gl={{ 
          preserveDrawingBuffer: false, 
          alpha: true,
          antialias: false, // Disable antialiasing for better performance
          powerPreference: "low-power" // Use low-power for better mobile compatibility
        }}
        performance={{ min: 0.3 }} // Lower performance threshold for mobile
      >
        <AdaptiveDpr pixelated />
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={0.8}
          castShadow
          shadow-mapSize-width={512} // Reduced for better performance
          shadow-mapSize-height={512} // Reduced for better performance
        />
        <pointLight position={[-5, -5, -5]} intensity={0.3} />
        
        <Suspense fallback={
          <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="green" />
          </mesh>
        }>
          <RobotModel />
        </Suspense>
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Preload all />
      </Canvas>
      )}
    </div>
  );
};

export default RobotCanvas;
