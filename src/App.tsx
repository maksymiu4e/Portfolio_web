//import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Experience from './components/Experience'
import Footer from './components/Footer'
import About from './components/About'
import { NavBar, StarsCanvas, InSpaceCanvas } from './components'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <NavBar />
        <div className='relative z-0 bg-primary'>
          <StarsCanvas />
          {About}
          <div className='w-full h-auto fixed inset-0 z-[-1]'>
            <InSpaceCanvas/>
          </div>
          {Experience}
{/*           <div className='relative z-0'> */}
            {Footer}
         {/*  </div> */}
        </div>
    </BrowserRouter>
  )
}

export default App
