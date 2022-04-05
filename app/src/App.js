import About from './pages/Quinoussommes'
import Actions from './pages/Actions'
import Admin from './pages/Admin'
import NotFound from './pages/notfound'
import React from 'react'
import './App.css'
import { Route, Routes, Navigate } from 'react-router-dom'
// import Signup from "./components/Signup/Signup";
import Box from '@mui/material/Box'
import Header from './components/Header/Header'
import Accueil from './pages/Accueil'
import Parrainage from './pages/Parrainage'
import Footer from './components/Footer/Footer'
import Signup from './components/Signup/Signup'

import Login from './components/Login/Login'
import { AuthContext, AuthProvider } from './context/auth'
import RequireAuth from './Routes_Auth/RequireAuth'

function App() {
  // const user = localStorage.getItem('token')

  const user = React.useContext(AuthContext)

  return (
    <Box id="principal" sx={{ bgcolor: 'fourth' }}>

      <AuthProvider>

        <Header />

        {/* Routes protégées */}
        <Routes>
          <Route element={<RequireAuth />}>
            <Route path="/admin" exact element={<Admin />} />
          </Route>

          {/* Routes public */}
          <Route path="/" exact element={<Accueil />} />
          <Route path="/actions" exact element={<Actions />} />
          <Route path="/parrainage" exact element={<Parrainage />} />
          <Route path="/quisommesnous" exact element={<About />} />
          <Route path="/connexion" exact element={<Login />} />
          <Route path="/introuvable" exact element={<NotFound />} />
          <Route path="/test" exact element={<Login />} />
          <Route path="/sign" exact element={<Signup />} />

        </Routes>
        <Footer />

      </AuthProvider>

    </Box>
  )
}

export default App
