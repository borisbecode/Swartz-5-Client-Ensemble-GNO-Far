import React from 'react'
import './Footer.css'

import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

function Footer() {
  return (
    <Box
      id="footer"
      sx={{
        bgcolor: 'primary.main',
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          justifyContent: 'space-around',
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
          pt: 2,
          /* alignItems: 'center', */
        }}
      >
        <Grid item xs={12} lg={4} sx={{ pb: 2 }}>
          {' '}
          <Typography sx={{ mb: 2 }}>Soutenez notre projet</Typography>{' '}
          <Typography sx={{ mt: 2 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            et vehicula arcu, sed tristique augue. Nunc viverra et erat sed
            auctor.
          </Typography>
        </Grid>

        <Grid item lg={4}>
          {' '}
          <Typography>Suivez nous sur Facebook </Typography>
        </Grid>
      </Container>
      <Container
        sx={{ pt: 3, pb: 5, alignItems: 'center', justifyContent: 'center' }}
      >
        <Typography xs={10} lg={4}>
          {' '}
          plus d'informations{' '}
        </Typography>
      </Container>
    </Box>
  )
}

export default Footer
