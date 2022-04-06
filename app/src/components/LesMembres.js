import React from 'react';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { ThemeProvider } from '@mui/material/styles';
import { ThemeTitres } from '../theme/ThemeTitres';
import { bgcolor } from '@mui/material/node_modules/@mui/system';
import JL from "../Assets/Jean-Luc_Nef.jpg";
import Annie from "../Assets/Annie_Tilmant.jpg";
import MC from "../Assets/Marie-Chantal_Fena.jpg";

function LesMembres() {
  return (
    <Box sx={{pt:5}}>
        <ThemeProvider theme={ThemeTitres}>
              <Typography variant="h1" sx={{fontSize:"1.5rem", mt:4}}>
                Les trois membres fondateurs, leur fonction, leur parcours.
              </Typography>
          </ThemeProvider>
        
        <Divider sx={{my:4}}/>

        <Grid container spacing={4} >
        <Grid item xs={12} sm={12} md={4} sx={{display:"flex", flexDirection:"column", justifyContent:"flex-start", alignItems:"center", textAlign:"center"}}>
        <Avatar
            alt="Marie-Chantal Fena"
            src={MC}
            sx={{ width: 200, height: 200 }}
            />
            <Typography
             variant="h3"
             color="primary.main"
             sx={{ mt: 4, fontSize: '1rem', fontWeight:"bold"}}>Marie-Chantal Fena</Typography>
             <Typography
             variant="body2" gutterBottom
             sx={{ mt: 2 }}>Employée du groupe Mesdagh et résidente depuis 2019 au Sénégal, elle est notre relais incontournable au Sénégal et surtout à Foundiougne.</Typography>
        </Grid>

        <Grid item xs={12} sm={12} md={4} sx={{display:"flex", flexDirection:"column", justifyContent:"flex-start", alignItems:"center", textAlign:"center"}}>
        <Avatar
            alt="Jean-Luc Nef"
            src={JL}
            sx={{ width: 200, height: 200 }}
            />
            <Typography
             variant="h3"
             color="primary.main"
             sx={{ mt: 4, fontSize: '1rem', fontWeight:"bold" }}>Jean-Luc Nef</Typography>
             <Typography
             variant="body2" gutterBottom
             sx={{ mt: 2 }}>Ingénieur agronome et retraité, vice-président et trésorier de l'ASBL</Typography>
        </Grid>

        <Grid item xs={12} sm={12} md={4} sx={{display:"flex", flexDirection:"column", justifyContent:"flex-start", alignItems:"center", textAlign:"center"}}>
        <Avatar
            alt="Annie Tilmant"
            src={Annie}
            sx={{ width: 200, height: 200 }}
            />
            <Typography
             variant="h3"
             color="primary.main"
             sx={{ mt: 4, fontSize: '1rem', fontWeight:"bold" }}>Annie Tilmant</Typography>
             <Typography
             variant="body2" gutterBottom
             sx={{ mt: 2 }}>Directrice honoraire de l'école des CRACS à Houdeng-Goegnies et présidente et secrétaire de l'ASBL.</Typography>
        </Grid>

        </Grid>
    </Box>
  )
}

export default LesMembres
