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
import MainPage from './pages/mainPage/MainPage';
import SearchPage from './pages/searchPage/SearchPage';
// import TempSearch from './pages/tempSearch/tempSearch';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>

          <Route path='/' element={
            <MainPage/>
          }/>

          <Route path='/profiler' element={
            <DosiePage/>
          }/>

          <Route path='/login' element={
            <div>Login route</div>
          }/>

          <Route path='/search' element={
            <SearchPage/>
          }/>

        </Routes>
      </Router>
    </div>
  )
}

export default App
