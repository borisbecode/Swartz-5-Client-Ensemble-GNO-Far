import React from 'react'
import Box from '@mui/material/Box'
import BannerHome from '../components/BannerHome'
import Articles from '../components/Articles'
import Footer from '../components/Footer/Footer'

const Accueil = () => {
  return (
    <Box id="accueil" sx={{ width: '100%', m: 0 }}>
      <BannerHome />
      <Articles />
      <Footer />
    </Box>
  )
}

export default Accueil
