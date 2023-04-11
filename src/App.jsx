import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import DosiePage from './pages/dosPage/DosiePage';

import { createTheme, ThemeProvider } from '@mui/material';

function App() {
  const theme = createTheme({
    palette: {
      node: 'dark',
    },
  })
  return (
    <div className="App">
      <Router>
        <Routes>

          <Route path='/' element={
            <DosiePage/>
          }/>

          <Route path='/login' element={
            <div>Login route</div>
          }/>

        </Routes>
      </Router>
    </div>
  )
}

export default App
