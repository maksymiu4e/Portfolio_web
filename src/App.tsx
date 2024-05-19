import React, { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Experience from './components/Experience'
import Footer from './components/Footer'
import About from './components/About'
import { NavBar, StarsCanvas, InSpaceCanvas } from './components'

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleMediaQueryChange = (event: any) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <BrowserRouter>
      <NavBar />
      <div className={`relative z-0 ${isMobile ? "bg-hero-pattern" : "bg-primary"}`}>
        <StarsCanvas isMobile={isMobile} />
        {About}
        <div className='w-full h-auto fixed inset-0 z-[-1]'>
          <InSpaceCanvas isMobile={isMobile} />
        </div>
        {Experience}
        {Footer}
      </div>
    </BrowserRouter>
  )
}

export default App
