import React from 'react'
import './Footer.css'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Link from '@mui/material/Link';

function Footer() {
  return (
    <Box
      id="footer"
      sx={{
        bgcolor: 'primary.main',
        py:5,
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          px:"15%",
          justifyContent: 'space-around',
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' }
        }}
      >
        <Grid item xs={12} lg={4} sx={{ pb: 2 }}>
          {' '}
          <Typography gutterBottom component="div" sx={{fontWeight:"600"}}>Soutenez notre projet</Typography>{' '}
          <Button sx={{my:2, ":hover": {color:"#a5e6c2"}}} color="inherit" variant="outlined" href="/parrainage" endIcon={<FavoriteIcon />}>
            Je parraine
          </Button>
          
        </Grid>

        <Grid item lg={4}>
          {' '}
          <Typography gutterBottom component="div" sx={{fontWeight:"600"}}>Suivez nous sur Facebook </Typography>
          <IconButton sx={{my:1, p:0, color:"white", ":hover": {color:"#a5e6c2"}}} href="https://www.facebook.com/groups/809911975835319" target="_black">
            <FacebookRoundedIcon color="inherit" sx={{height:"40px", width:"auto"}}/>
          </IconButton>
        </Grid>
      </Container>

    
      <Container
        sx={{ pt: 3, alignItems: 'center', justifyContent: 'center' }}
      >
        <Typography gutterBottom component="div" sx={{fontWeight:"600", mb:1}}>Vous souhaitez nous contacter?</Typography>{' '}
        <Typography xs={10} lg={4}>
          Vous pouvez nous écrire à l'adresse email: lorem@gmail.com
        </Typography>
      </Container>
    </Box>
  )
}

export default Footer
