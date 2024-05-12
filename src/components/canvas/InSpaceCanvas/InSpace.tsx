import React from 'react'
import { useGLTF } from "@react-three/drei";

interface IInSpace {
    isMobile: boolean;
}

export function InSpace({isMobile}: IInSpace) {
    
  const computer = useGLTF("./inspace/scene.gltf");
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
     {/*  <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={5}
        castShadow
        shadow-mapSize={1024}
      /> */}
        <pointLight intensity={3} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 1.5}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[0, -0.2, 0]}
      />
      </mesh>
      </group>
  )
}

export default InSpace;