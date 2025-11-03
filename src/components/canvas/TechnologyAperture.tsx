import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { AdaptiveDpr, OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

const TechnologyApertureModel = ({ scrollY }: { scrollY: number }) => {
  const apertureRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/technology_aperture_out.glb");

  const lastColorUpdateRef = useRef<number>(0);
  useFrame((state) => {
    if (apertureRef.current) {
      // Scroll-based rotation
      const scrollRotation = scrollY * 0.001;
      apertureRef.current.rotation.y = scrollRotation;
      
      // No mouse-based rotation
      
      // Floating animation
      const floatY = Math.sin(state.clock.elapsedTime * 0.8) * 0.2;
      apertureRef.current.position.y = floatY;
      
      // Scale based on scroll
      const scale = 1 + Math.sin(scrollY * 0.01) * 0.1;
      apertureRef.current.scale.setScalar(scale);
      
      // Color animation based on scroll (throttled to ~5 fps)
      const now = state.clock.elapsedTime;
      if (now - lastColorUpdateRef.current > 0.2) {
        lastColorUpdateRef.current = now;
        const hue = (scrollY * 0.1) % 360;
        const color = new THREE.Color().setHSL(hue / 360, 0.8, 0.6);
        scene.traverse((child) => {
          if (child instanceof THREE.Mesh && child.material) {
            if (Array.isArray(child.material)) {
              child.material.forEach((mat) => {
                if (mat instanceof THREE.MeshStandardMaterial) {
                  mat.color.copy(color);
                  mat.emissive.copy(color).multiplyScalar(0.2);
                }
              });
            } else if (child.material instanceof THREE.MeshStandardMaterial) {
              child.material.color.copy(color);
              child.material.emissive.copy(color).multiplyScalar(0.2);
            }
          }
        });
      }
    }
  });

  return (
    <group ref={apertureRef} position={[0, 0, 0]}>
      <primitive object={scene} scale={3.5} />
      
      {/* Add glowing effect */}
      <pointLight 
        position={[0, 0, 3]} 
        intensity={0.8} 
        color="#3b82f6" 
        distance={8}
      />
      <pointLight 
        position={[0, 0, -3]} 
        intensity={0.6} 
        color="#8b5cf6" 
        distance={8}
      />
      <pointLight 
        position={[0, 3, 0]} 
        intensity={0.4} 
        color="#10b981" 
        distance={6}
      />
    </group>
  );
};

const TechnologyApertureCanvas = () => {
  // No scroll state to avoid unnecessary updates
  const scrollY = 0;
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState<boolean>(false);
  const [reducedMotion, setReducedMotion] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(media.matches);
    const onChange = () => setReducedMotion(media.matches);
    media.addEventListener?.("change", onChange);

    const el = containerRef.current;
    let observer: IntersectionObserver | null = null;
    if (el) {
      observer = new IntersectionObserver(
        (entries) => setInView(entries[0].isIntersecting),
        { threshold: 0.1 }
      );
      observer.observe(el);
    }
    // No scroll listener to avoid layout thrash

    // detect mobile
    const mq = window.matchMedia('(max-width: 640px)');
    const apply = () => setIsMobile(mq.matches);
    apply();
    mq.addEventListener?.('change', apply);
    
    return () => {
      media.removeEventListener?.("change", onChange);
      // no-op
      observer?.disconnect();
      mq.removeEventListener?.('change', apply);
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full bg-transparent">
      {(isMobile || reducedMotion) && (
        <img src="/images.png" alt="Aperture" className="w-full h-full object-contain opacity-20" loading="lazy" decoding="async" />
      )}
      {!isMobile && !reducedMotion && inView && (
      <Canvas
        shadows={false}
        frameloop="demand"
        dpr={[1, 1]} // Further reduced for mobile compatibility
        camera={{ position: [0, 0, 12], fov: 45 }}
        gl={{ 
          preserveDrawingBuffer: false, 
          alpha: true,
          antialias: false, // Disable antialiasing for better performance
          powerPreference: "low-power" // Use low-power for better mobile compatibility
        }}
        performance={{ min: 0.3 }} // Lower performance threshold for mobile
      >
        <AdaptiveDpr pixelated />
        <ambientLight intensity={0.6} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={1}
          castShadow
          shadow-mapSize-width={512} // Reduced for better performance
          shadow-mapSize-height={512} // Reduced for better performance
        />
        <pointLight position={[-5, -5, -5]} intensity={0.4} />
        
        <Suspense fallback={
          <mesh>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial color="#3b82f6" />
          </mesh>
        }>
          <TechnologyApertureModel scrollY={scrollY} />
        </Suspense>
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
      )}
    </div>
  );
};

export default TechnologyApertureCanvas;
