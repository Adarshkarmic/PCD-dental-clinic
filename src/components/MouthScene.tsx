"use client";

import { Suspense, useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Model } from "@/components/Mouth";
import * as THREE from 'three';
import Image from 'next/image';

type MouthSceneProps = {
  activeTreatment: number | null;
};

// Component to handle smooth camera reset
function CameraManager({ activeTreatment }: { activeTreatment: number | null }) {
  const { camera } = useThree();
  const controlsRef = useRef<any>(null);
  useFrame((state, delta) => {
    if (activeTreatment !== null) {
      const targetPos = new THREE.Vector3(0, 0, 6);
      state.camera.position.lerp(targetPos, delta * 4);
    }
    
    const targetLook = new THREE.Vector3(0, 0, 0);
    
    if (controlsRef.current) {
      controlsRef.current.target.lerp(targetLook, delta * 4);
      controlsRef.current.update();
    }
  });

  return (
    <OrbitControls 
      ref={controlsRef}
      makeDefault
      enableZoom={false} 
      enablePan={false} 
      // Disable rotation when a treatment is active so the AI image stays perfectly aligned!
      enabled={activeTreatment === null}
      minAzimuthAngle={-Math.PI / 2} 
      maxAzimuthAngle={Math.PI / 2}
      minPolarAngle={Math.PI / 3}
      maxPolarAngle={Math.PI / 1.5}
    />
  );
}

function FloatingModel({ activeTreatment }: { activeTreatment: number | null }) {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (!groupRef.current) return;
    
    // Subtle sine wave translation on Y-axis (speed 1.5, amplitude 0.08)
    const t = state.clock.elapsedTime;
    const yFloat = Math.sin(t * 1.5) * 0.08;
    
    // If treatment active, lerp back to 0 to align perfectly with the 2D overlay
    const targetY = activeTreatment === null ? yFloat : 0;
    groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetY, 0.1);
  });

  return (
    <group ref={groupRef}>
      <Model scale={1.5} position={[0, 0, 0]} rotation={[0, Math.PI, 0]} activeTreatment={activeTreatment} />
    </group>
  );
}

export default function MouthScene({ activeTreatment }: MouthSceneProps) {
  const [showAIImage, setShowAIImage] = useState(false);

  // When a treatment is selected, wait 0.3s (when mouth is ~90% open), then fade in the image.
  useEffect(() => {
    if (activeTreatment !== null) {
      const timer = setTimeout(() => setShowAIImage(true), 300);
      return () => clearTimeout(timer);
    } else {
      setShowAIImage(false);
    }
  }, [activeTreatment]);

  // Temporary placeholder paths for the AI generated images.
  // The user will generate 16:9 images and place them here.
  const aiImages = [
    '/problems/dental_caries.png',
    '/problems/Advanced Periodontitis.png',
    '/problems/Endodontic Infection.png',
    '/problems/Enamel Attrition (Bruxism).png',
    '/problems/Edentulism & Bone Resorption.png',
    '/problems/Gingival Recession.png'
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Container locked to 16:9 aspect ratio so the 3D model and 2D image always match perfectly on any screen */}
      <div className="relative w-[180%] sm:w-[120%] md:w-full aspect-video max-h-full md:max-h-full flex-shrink-0">
        
        <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
          {/* Base Ambient Light */}
          <ambientLight intensity={0.7} color="#ffffff" />
          {/* Main Key Light */}
          <directionalLight position={[5, 5, 5]} intensity={1.2} color="#fff5ec" castShadow />
          {/* Rim Light */}
          <spotLight position={[-5, 5, -5]} angle={0.3} penumbra={1} intensity={1.5} color="#38bdf8" />

          <CameraManager activeTreatment={activeTreatment} />

          <Suspense fallback={null}>
            <FloatingModel activeTreatment={activeTreatment} />
          </Suspense>
        </Canvas>

        {/* AI Image Overlay (The Illusion) */}
        {aiImages.map((img, index) => (
          <div 
            key={img}
            className="absolute inset-0 pointer-events-none transition-opacity duration-500 ease-in-out z-10"
            style={{ opacity: showAIImage && activeTreatment === index ? 1 : 0 }}
          >
            <Image 
              src={img} 
              alt="Treatment Visualization" 
              fill 
              className="object-contain"
              style={{
                transform: 'scale(0.730) translate(0.4%, 11.7%)'
              }}
              priority
            /> 
          </div>
        ))}

      </div>
    </div>
  );
}
