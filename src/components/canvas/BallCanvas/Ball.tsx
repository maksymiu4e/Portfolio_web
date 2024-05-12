import React, { Fragment, Suspense } from "react";
import { Decal, Float, useTexture} from "@react-three/drei";
import { dbtechnologies, technologies } from "../../../constants";
import { MeshBasicMaterial, MeshStandardMaterial, TextureLoader } from "three";

interface IBall {
    imgUrl?: string;
}

export function Ball(props: any) {
    const [decal] = useTexture([props.imgUrl]);
    const colors = ['red', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];

    // Create an array of materials with different colors for each side of the icosahedron geometry
    //const materials = colors.map(color => new MeshStandardMaterial({ color, flatShading: true }));
    const textureLoader = new TextureLoader();
    const textures = [
      textureLoader.load(technologies[0].icon),
      textureLoader.load(technologies[1].icon),
      textureLoader.load(technologies[2].icon),
      textureLoader.load(technologies[3].icon),
      textureLoader.load(technologies[4].icon),
      textureLoader.load(technologies[5].icon)
    ];
    const materials = [];
    for (let i = 0; i < 6; i++) {
      materials.push(new MeshBasicMaterial({ map: textures[i] }));
    }

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 4]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
          
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  )
}

export default Ball;