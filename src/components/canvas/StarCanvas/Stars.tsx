import React, { useRef, useState } from 'react'
import { Points, PointMaterial } from "@react-three/drei";
import { useFrame } from '@react-three/fiber';
import { random } from 'maath';

export function Stars(props: any) {
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(5001), { radius: 1.2 }));

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 40;
    ref.current.rotation.y -= delta / 45;
  });

  return (
    <group rotation={[0, 5, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#948979'
          //color='#f272c8'
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

export default Stars;