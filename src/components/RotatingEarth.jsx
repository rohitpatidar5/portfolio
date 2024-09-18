// src/components/RotatingEarth.js
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import worldMapTexture from '../assets/world_map_dotted.png'; // Import the texture

const Earth = () => {
  const earthRef = useRef();

  // Automatically rotate the Earth on the Y-axis
  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.001;
    }
  });

  // Use the imported texture
  const texture = useTexture(worldMapTexture);

  return (
    <Sphere ref={earthRef} args={[1.8, 64, 64]}>
      <meshStandardMaterial
        map={texture} // Apply the world map texture
        transparent={true} // Make water portions transparent
        opacity={1} // Full opacity for the dots
        roughness={0.5} // Adjust roughness for realistic effect
        side={THREE.DoubleSide} // Render both sides of the sphere
      />
    </Sphere>
  );
};

const RotatingEarth = () => {
  return (
    <Canvas className="w-full h-full" camera={{ position: [0, 0, 3], fov: 75 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <Earth />
      <OrbitControls enableZoom={false} enableRotate={true} />
    </Canvas>
  );
};

export default RotatingEarth;
