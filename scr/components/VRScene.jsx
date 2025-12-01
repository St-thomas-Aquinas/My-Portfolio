import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import ProjectCard3D from "./ProjectCard3D";

export default function VRScene() {
  return (
    <Canvas shadows camera={{ position: [0, 2, 10], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
      
      <Suspense fallback={null}>
        <Float floatIntensity={0.5} rotationIntensity={0.3}>
          <ProjectCard3D position={[-3, 1, 0]} color="#4CC3D9" title="Project 1" link="https://example.com" />
          <ProjectCard3D position={[0, 1, 0]} color="#EF2D5E" title="Project 2" link="https://example.com" />
          <ProjectCard3D position={[3, 1, 0]} color="#FFC65D" title="Project 3" link="https://example.com" />
        </Float>
      </Suspense>

      <OrbitControls enablePan={true} enableZoom={true} />
    </Canvas>
  );
}
