import React from 'react';
import Box from '@mui/material/Box';
import logo from '../Assets/gno-far_baseline.svg';

const BannerHome = () => {
  return (
    <Box id="banner_home" sx={{bgcolor:"rgba(255, 230, 0, 0.6)", width:"100%", minHeight:"20%", display:"flex", justifyContent:"center"}}>
        <Box component="img" alt="logo Gno-Far" src={logo} sx={{width:"35%", mx:"auto", m:4}} />
    </Box>
  )
}

export default BannerHome