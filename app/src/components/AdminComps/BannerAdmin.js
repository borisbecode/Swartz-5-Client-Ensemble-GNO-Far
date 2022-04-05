import React, { useState, useContext } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import { ThemeTitres } from '../../theme/ThemeTitres';
import AdminPanelSettingsRoundedIcon from '@mui/icons-material/AdminPanelSettingsRounded';
import { AuthContext } from '../../context/auth'

const BannerAdmin = () => {

    const [adminName, setAdminName] = useState("inconnu")
    const { user } = useContext(AuthContext)

  return (
    <Box sx={{bgcolor:"primary.main", minHeight:"20%", display:"flex", justifyContent:"center", flexDirection:"column", textAlign:"center", p:3}}>
        <ThemeProvider theme={ThemeTitres}>
            <Typography color="white" variant="h4" gutterBottom component="div" sx={{mb:2}}>Espace admin</Typography>
        </ThemeProvider>
        <AdminPanelSettingsRoundedIcon sx={{color:"white", alignSelf:"center", mx:"auto", width:"40px", height:"auto"}} />
        <Typography color="white" variant="subtitle1" gutterBottom component="div">Admin connecté(e): {user.firstName} {user.lastName}</Typography>
    </Box>
  )
}

export default BannerAdmin