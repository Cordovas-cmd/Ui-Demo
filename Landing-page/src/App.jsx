import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ButtonUsage from './components/Button'
import BasicGrid from './components/GridLayout'
// import ClippedDrawer from './components/LeftSidebar.jsx';
import Navbar from './components/Navbar'


// function App() {
//   const [count, setCount] = useState(0)

//   return (
    
//      <>
//     <ClippedDrawer />
//      </>
//     // <BasicGrid />
//     //  <ButtonUsage />
    
//   )
// }


function App() {
  const [count, setCount] = useState(0)

  return (
    
     <>
     <Navbar />
    {/* <ClippedDrawer /> */}
    <BasicGrid />
    {/* <ButtonUsage /> */}
     </>
    
  )
}

export default App
