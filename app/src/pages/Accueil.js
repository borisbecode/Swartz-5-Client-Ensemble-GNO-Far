import React from 'react'
import Box from '@mui/material/Box'
import BannerHome from '../components/BannerHome'
import Articles from '../components/Articles'
import Footer from '../components/Footer/Footer'
import Child from '../components/Child_pictures/child'

const Accueil = () => {
  return (
    <Box id="accueil" sx={{ width: '100%', m: 0 }}>
      <BannerHome />
      <Articles />
      <Child />
      <Footer />
    </Box>
  )
}

export default Accueil
