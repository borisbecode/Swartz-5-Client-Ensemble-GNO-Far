import About from './pages/about'
import Actions from './pages/actions'
import Admin from './pages/Admin'
import NotFound from './pages/notfound'
import React from 'react'
import './App.css'
import { Route, Routes, Navigate } from 'react-router-dom'
// import Signup from "./components/Signup/Signup";
import Login from './components/Login/Login'
import Box from '@mui/material/Box'
import Header from './components/Header/Header'
import Accueil from './pages/Accueil'
import Parrainage from './pages/Parrainage'
import Footer from './components/Footer/Footer'

function App() {
  const user = localStorage.getItem('token')

  return (
    <Box id="principal" sx={{ bgcolor: 'fourth' }}>
      <Header />
      <Routes>
        <Route path="/" exact element={<Accueil />} />
        <Route path="/actions" exact element={<Actions />} />
        <Route path="/parrainage" exact element={<Parrainage />} />
        <Route path="/quisommesnous" exact element={<About />} />
        <Route path="/connexion" exact element={<Login />} />
        <Route path="/admin" exact element={<Admin />} />
        <Route path="/introuvable" exact element={<NotFound />} />
      </Routes>
      <Footer />
    </Box>
  )
}

export default App
