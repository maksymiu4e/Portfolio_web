import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Experience from './components/Experience'
import { NavBar, StarsCanvas, About } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        {/* <div className='relative z-0'> */}
        {/* <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'> */}
          <NavBar />
          <About/>
        {/* </div> */}
        {Experience}
          <StarsCanvas />
        </div>
      {/* </div> */}
    </BrowserRouter>
  )
}

export default App
