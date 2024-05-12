import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import Stars from './Stars'
import { Preload } from '@react-three/drei'

export function StarsCanvas() {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <Stars />
      </Suspense>
      <Preload all />
    </Canvas>
  </div>
  )
}

export default StarsCanvas;