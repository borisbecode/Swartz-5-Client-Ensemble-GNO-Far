import React from 'react';
import Box from '@mui/material/Box';
import CreationArticle from '../components/AdminComps/CreationArticle';

const Admin = () => {
  return (
    <Box id="accueil" sx={{width:"100%", m:0}}>
        <CreationArticle />

    </Box>
  )
}

export default Admin