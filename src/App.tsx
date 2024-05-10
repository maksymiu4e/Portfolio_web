//import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Experience from './components/Experience'
import { NavBar, StarsCanvas, About, InSpaceCanvas } from './components'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
        <NavBar />
      <div className='relative z-0 bg-primary'>
        <StarsCanvas />
        {/* <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'> */}
        {/* <div className='relative z-0'> */}
        <About />
        <div className='w-full h-auto fixed inset-0 z-[-1]'>
          <InSpaceCanvas/>
        </div>
        {/* </div> */}
        {Experience}
        </div>
      {/* </div> */}
    </BrowserRouter>
  )
}

export default App
