import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { AdaptiveDpr, OrbitControls, useGLTF } from "@react-three/drei";

import CanvasLoader from "../layout/Loader";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");

  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => setInView(entries[0].isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(el);
    // detect mobile
    const mq = window.matchMedia('(max-width: 640px)');
    const apply = () => setIsMobile(mq.matches);
    apply();
    mq.addEventListener?.('change', apply);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full">
      {/* Poster for mobile */}
      {isMobile && (
        <img src="/planet/textures/Planet_baseColor.png" alt="Earth preview" className="w-full h-full object-contain" loading="lazy" decoding="async" />
      )}
      {!isMobile && inView && (
    <Canvas
      shadows={false}
      frameloop="demand"
      dpr={[1, 1]}
      gl={{ preserveDrawingBuffer: false, antialias: false, alpha: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <AdaptiveDpr pixelated />
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enablePan={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>
    </Canvas>
      )}
    </div>
  );
};

export default EarthCanvas;
