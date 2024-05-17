import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import Stars from './Stars'
import { Preload } from '@react-three/drei'

interface IStarsCanvas {
  isMobile: boolean;
}

export function StarsCanvas({isMobile}: IStarsCanvas) {
 /*  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleMediaQueryChange = (event: any) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []); */
  return (
    !isMobile ?
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <Stars />
      </Suspense>
      <Preload all={false} />
    </Canvas>
      </div>
      :
      null
  )
}

export default StarsCanvas;