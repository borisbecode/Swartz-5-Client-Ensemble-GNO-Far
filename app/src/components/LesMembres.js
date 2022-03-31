import React from 'react';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { ThemeProvider } from '@mui/material/styles';
import { ThemeTitres } from '../theme/ThemeTitres';

function LesMembres() {
  return (
    <Box sx={{pt:5}}>
        <ThemeProvider theme={ThemeTitres}>
              <Typography variant="h1" sx={{fontSize:"1.5rem", mt:4}}>
                  L'équipe Gno-Far
              </Typography>
          </ThemeProvider>
        
        <Divider sx={{my:4}}/>

        <Grid container spacing={4}>
        <Grid item xs={12} sm={12} md={4} sx={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", textAlign:"center"}}>
        <Avatar
            alt="Prénom Nom"
            src="https://picsum.photos/id/42/800/800"
            sx={{ width: 200, height: 200 }}
            />
            <Typography
             variant="h3"
             color="primary.main"
             sx={{ mt: 4, fontSize: '1rem', fontWeight:"bold" }}>Prénom Nom</Typography>
             <Typography
             variant="body2" gutterBottom
             sx={{ mt: 2 }}>Petit texte personnalisé. Ut venenatis sapien interdum eleifend tristique. Suspendisse varius libero vitae ante bibendum, nec interdum quam auctor. Fusce gravida erat libero, a maximus lectus auctor non. </Typography>
        </Grid>

        <Grid item xs={12} sm={12} md={4} sx={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", textAlign:"center"}}>
        <Avatar
            alt="Prénom Nom"
            src="https://picsum.photos/id/122/800/800"
            sx={{ width: 200, height: 200 }}
            />
            <Typography
             variant="h3"
             color="primary.main"
             sx={{ mt: 4, fontSize: '1rem', fontWeight:"bold" }}>Prénom Nom</Typography>
             <Typography
             variant="body2" gutterBottom
             sx={{ mt: 2 }}>Petit texte personnalisé. Ut venenatis sapien interdum eleifend tristique. Suspendisse varius libero vitae ante bibendum, nec interdum quam auctor. Fusce gravida erat libero, a maximus lectus auctor non. </Typography>
        </Grid>

        <Grid item xs={12} sm={12} md={4} sx={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", textAlign:"center"}}>
        <Avatar
            alt="Prénom Nom"
            src="https://picsum.photos/id/34/800/800"
            sx={{ width: 200, height: 200 }}
            />
            <Typography
             variant="h3"
             color="primary.main"
             sx={{ mt: 4, fontSize: '1rem', fontWeight:"bold" }}>Prénom Nom</Typography>
             <Typography
             variant="body2" gutterBottom
             sx={{ mt: 2 }}>Petit texte personnalisé. Ut venenatis sapien interdum eleifend tristique. Suspendisse varius libero vitae ante bibendum, nec interdum quam auctor. Fusce gravida erat libero, a maximus lectus auctor non. </Typography>
        </Grid>

        </Grid>
    </Box>
  )
}

export default LesMembres
