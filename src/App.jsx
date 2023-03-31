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

function App() {

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
