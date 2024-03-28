import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { StyledEngineProvider } from '@mui/material/styles';
import './index.css'
import ClippedDrawer from './components/LeftSidebar.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <App /> 
      {/* <ClippedDrawer /> */}
    </StyledEngineProvider>
  </React.StrictMode>,
)
