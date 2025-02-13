import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { useState } from "react";

import Cat from "./Cat";


const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Update state when mouse moves
  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const x = (clientX / window.innerWidth) * 2 - 1;
    const y = (clientY / window.innerHeight) * 2 - 1;
    setMousePosition({ x, y });
  };

  return (
    <>
    <div
      className="w-screen h-[500px] mt-20 flex flex-col md:flex-row items-center justify-center px-6 "
      onMouseMove={handleMouseMove} // Track mouse movement
    >
      <div className="h-[400px]  ">
      <Canvas
        shadows
        camera={{ position: [0, 2, 8], fov:50 }}
      >
        {/* Lighting with Shadows */}
        <ambientLight intensity={3} />
        <directionalLight
          position={[0, 2, 2]} // Move the light source higher
          intensity={3.5}
          castShadow
        />

        {/* 3D Model */}
        <Cat mousePosition={mousePosition} />
        

        {/* Ground Plane to Catch Shadows */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]} receiveShadow>
          <planeGeometry args={[10, 10]} />
          <shadowMaterial opacity={0.5} />
        </mesh>

        <OrbitControls enableZoom={true} minDistance={800} maxDistance={7} />
        <Environment preset="city" /> {/* Adds realistic reflections */}
      </Canvas>
      </div>
      <div className="text-center md:text-left md:ml-10 mt-6 md:mt-0">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            Hello, I'm <span className="text-blue-400">PANKAJ KUMAR</span>
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Frontend Developer | React | Tailwind CSS | React-Redux
          </p>
        </div>
    </div>
   
    </>
  );
};

export default HeroSection;
