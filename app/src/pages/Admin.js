import React from 'react';
import Box from '@mui/material/Box';
import CreationArticle from '../components/AdminComps/CreationArticle';
import BannerAdmin from '../components/AdminComps/BannerAdmin';
import GestionArticles from '../components/AdminComps/GestionArticles';
import CreationAction from '../components/AdminComps/CreationAction';

const Admin = () => {
  return (
    <Box id="accueil" sx={{width:"100%", m:0}}>
        <BannerAdmin />
        <CreationArticle />
        <CreationAction />
        <GestionArticles />
        

    </Box>
  )
}

export default Admin