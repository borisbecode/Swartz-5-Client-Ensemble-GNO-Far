import React from 'react'
import './Footer.css'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

function Footer() {
  return (
    <div id="footer">
      <Container
        maxWidth="xl"
        sx={{
          justifyContent: 'space-around',
          display: 'flex',
          /* alignItems: 'center', */
        }}
      >
        <Grid item xs={4}>
          {' '}
          <h2 sx={{ mb: 2 }}>Soutenez notre projet</h2>{' '}
          <article sx={{ mt: 2 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            et vehicula arcu, sed tristique augue. Nunc viverra et erat sed
            auctor.
          </article>
        </Grid>

        <Grid item xs={4}>
          {' '}
          <h2>Suivez nous sur Facebook </h2>
        </Grid>
      </Container>
      <Container
        sx={{ pt: 3, pb: 5, alignItems: 'center', justifyContent: 'center' }}
      >
        <h4> plus d'informations </h4>
      </Container>
    </div>
  )
}

export default Footer
