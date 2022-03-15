import React from 'react'
import Box from '@mui/material/Box'
import BannerHome from '../components/BannerHome'
import Articles from '../components/Articles'
import Footer from '../components/Footer/Footer'
import Child from '../components/Child_pictures/child'
import Childtext from '../components/Child_text/childtext'

const Accueil = () => {
  return (
    <Box id="accueil" sx={{ width: '100%', m: 0 }}>
      <BannerHome />

      <Articles />
      <Child />
      <Childtext />
    </Box>
  )
}

export default Accueil
