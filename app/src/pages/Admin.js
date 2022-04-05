import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import CreationArticle from '../components/AdminComps/CreationArticle';
import BannerAdmin from '../components/AdminComps/BannerAdmin';
import GestionArticles from '../components/AdminComps/GestionArticles';
import { AuthContext } from '../context/auth'

const Admin = () => {
  const { user } = useContext(AuthContext)
  console.log(user)
  return (

    <Box id="accueil" sx={{ width: "100%", m: 0 }}>
      <BannerAdmin />
      <CreationArticle />
      <GestionArticles />

    </Box>
  )
}

export default Admin