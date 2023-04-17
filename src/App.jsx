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
          <Route path='/main' element={
            <MainPage/>
          }/>
          <Route path='/' element={
            <MainPage/>
          }/>

          <Route path='/profiler' element={
            <SearchPage/>
          }/>

          {/* <Route path='/profiler' element={
            <DosiePage/>
          }/> */}

          <Route path='/login' element={
            <div>Login route</div>
          }/>


        </Routes>
      </Router>
    </div>
  )
}

export default App
