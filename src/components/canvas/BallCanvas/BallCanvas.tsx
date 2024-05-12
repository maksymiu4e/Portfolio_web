import React, { Fragment, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls, Preload} from "@react-three/drei";
import { Ball } from "../..";
import { dbtechnologies, technologies } from "../../../constants";
import BoxWithImages from "./Box";

interface IBallCanvas {
    icon?: string;
}

export function BallCanvas({icon}: IBallCanvas) {
  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense >
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default BallCanvas