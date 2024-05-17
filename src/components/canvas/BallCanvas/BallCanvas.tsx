import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload} from "@react-three/drei";
import { Ball, CanvasLoader } from "../..";

interface IBallCanvas {
    icon: string;
}

export function BallCanvas({icon}: IBallCanvas) {
  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all={false} />
    </Canvas>
  )
}

export default BallCanvas