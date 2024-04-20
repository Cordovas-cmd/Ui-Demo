import React from 'react';
import './App.css';
import FlexContainer from './components/FlexContainer'
import Navbar from './components/Navbar';
import Header from './components/Header'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
       <div className="App">
        <Header />
    <Navbar />
    <FlexContainer />
    </div>
  
    </>
  )
}

export default App
