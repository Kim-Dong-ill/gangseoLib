import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Chatbot from './pages/Chatbot'
import Libabout from './pages/Libabout'
import Libsetabout from './pages/LibSetAbout'
import Readbook from './pages/ReadBook'
import MainPage from './layout/MainPage'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage />}></Route>
        <Route path='/chatbot' element={<Chatbot />}></Route>
        <Route path='/libabout' element={<Libabout />}></Route>
        <Route path='/libsetabout' element={<Libsetabout />}></Route>
        <Route path='/readbook' element={<Readbook />}></Route>
      </Routes >
    </>
  )
}

export default App