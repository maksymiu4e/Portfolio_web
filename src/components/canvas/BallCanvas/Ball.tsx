import React from "react";
import { Decal, Float, useTexture} from "@react-three/drei";

interface IBall {
    imgUrl: string;
}

export function Ball({imgUrl}: IBall) {
    const [decal] = useTexture([imgUrl]);

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 3]} />
        <meshStandardMaterial
          color='#9290C3'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
          
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          //flatShading
        />
      </mesh>
    </Float>
  )
}

export default Ball;