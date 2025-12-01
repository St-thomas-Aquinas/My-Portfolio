import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshWobbleMaterial } from "@react-three/drei";
import { useDrag } from "@use-gesture/react";

export default function ProjectCard3D({ position, color, title, link }) {
  const mesh = useRef();
  const pos = useRef([...position]);

  const bind = useDrag(({ offset: [x, y] }) => {
    mesh.current.position.x = pos.current[0] + x / 50;
    mesh.current.position.y = pos.current[1] - y / 50;
  });

  useFrame(() => {
    mesh.current.rotation.y += 0.005;
  });

  return (
    <mesh ref={mesh} {...bind()} position={position} castShadow onClick={() => window.open(link, "_blank")}>
      <boxBufferGeometry args={[2, 1, 0.2]} />
      <MeshWobbleMaterial color={color} speed={2} factor={0.1} />
    </mesh>
  );
}
