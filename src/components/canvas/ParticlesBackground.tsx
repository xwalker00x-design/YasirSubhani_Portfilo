import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { AdaptiveDpr, OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

const ParticlesModel = ({ scrollY }: { scrollY: number }) => {
  const particlesRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/particles_tests_-_3.glb");

  useFrame((state) => {
    if (particlesRef.current) {
      // Gentle rotation based on scroll
      const scrollRotation = scrollY * 0.0005;
      particlesRef.current.rotation.y = scrollRotation;
      
      // No mouse interaction
      
      // Floating animation
      const floatY = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      particlesRef.current.position.y = floatY;
      
      // Scale based on scroll
      const scale = 1 + Math.sin(scrollY * 0.005) * 0.05;
      particlesRef.current.scale.setScalar(scale);
    }
  });

  return (
    <group ref={particlesRef} position={[0, 0, 0]}>
      <primitive object={scene} scale={8} />
      
      {/* Ambient glow */}
      <pointLight 
        position={[0, 0, 5]} 
        intensity={0.3} 
        color="#3b82f6" 
        distance={15}
      />
      <pointLight 
        position={[0, 0, -5]} 
        intensity={0.2} 
        color="#8b5cf6" 
        distance={15}
      />
    </group>
  );
};

const ParticlesBackground = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState<boolean>(false);
  const [reducedMotion, setReducedMotion] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    // Reduced motion preference
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(media.matches);
    const onChange = () => setReducedMotion(media.matches);
    media.addEventListener?.("change", onChange);

    // In-view detection
    const el = containerRef.current;
    let observer: IntersectionObserver | null = null;
    if (el) {
      observer = new IntersectionObserver(
        (entries) => setInView(entries[0].isIntersecting),
        { threshold: 0.05 }
      );
      observer.observe(el);
    }

    // No scroll-driven updates

    // Detect mobile
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
    <div ref={containerRef} className="absolute inset-0 w-full h-full">
      {/* Poster on mobile or when reduced motion is enabled */}
      {(isMobile || reducedMotion) && (
        <img src="/images.png" alt="Background" className="w-full h-full object-cover opacity-20" loading="lazy" decoding="async" />
      )}
      {!isMobile && !reducedMotion && inView && (
      <Canvas
        shadows={false}
        frameloop="demand"
        dpr={[1, 1]} // Further reduced for mobile compatibility
        camera={{ position: [0, 0, 20], fov: 60 }}
        gl={{ 
          preserveDrawingBuffer: false, 
          alpha: true,
          antialias: false, // Disable antialiasing for better performance
          powerPreference: "low-power" // Use low-power for better mobile compatibility
        }}
        performance={{ min: 0.3 }} // Lower performance threshold for mobile
      >
        <AdaptiveDpr pixelated />
        <ambientLight intensity={0.2} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={0.3}
          castShadow
        />
        
        <Suspense fallback={null}>
          <ParticlesModel scrollY={0} />
        </Suspense>
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
        />
      </Canvas>
      )}
    </div>
  );
};

export default ParticlesBackground;
