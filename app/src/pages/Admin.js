import React from 'react';
import Box from '@mui/material/Box';
import CreationArticle from '../components/AdminComps/CreationArticle';
import BannerAdmin from '../components/AdminComps/BannerAdmin';

const Admin = () => {
  return (
    <Box id="accueil" sx={{width:"100%", m:0}}>
        <BannerAdmin />
        <CreationArticle />

    </Box>
  )
}

export default Admin