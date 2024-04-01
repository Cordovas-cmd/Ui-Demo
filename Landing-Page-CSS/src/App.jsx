import React from 'react';
import './App.css';
import FlexContainer from './components/FlexContainer'
import Navbar from './components/Navbar';
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
       <div className="App">
    <Navbar />
    <FlexContainer />
    </div>
  
    </>
  )
}

export default App
