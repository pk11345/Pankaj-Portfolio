import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useRef } from "react";

const Cat = ({ mousePosition }) => {
  const { scene } = useGLTF("/models/cartoon_cat.glb");
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y = mousePosition.x * 1; // Rotate left/right
      // modelRef.current.rotation.x = mousePosition.y * -1; // Rotate up/down
    }
  });
  // Enable shadow casting on the model
  scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  return <primitive ref={modelRef}  object={scene}
  position={[20, -200, -3]} // Adjust position if needed
  scale={[4, 5, 5]} />;
};

export default Cat;
