import React from 'react'
import './childtext.css'

import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

function Childtext() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        width: '80vw',
        mx: 'auto',
        mt: 5,
        justifyContent: 'space-between',
        display: 'flex',
        flexDirection: { xs: 'column', lg: 'row' },
        mb: 5,
      }}
    >
      <Grid item xs={12} lg={10}>
        {' '}
        <Typography sx={{ mt: 2 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
          accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
          molestias architecto voluptate aliquam
        </Typography>
      </Grid>
      <Grid
        className="responsive"
        item
        xs={12}
        lg={2}
        sx={{ pr: 0, mr: 0, alignItems: 'flex-end' }}
      >
        {' '}
        <Button
          variant="contained"
          sx={{ bgcolor: 'secondary.main', color: 'white', m: 4 }}
          href="/parrainage"
        >
          <Typography> Je parraine ! </Typography>{' '}
        </Button>
      </Grid>
    </Box>
  )
}

export default Childtext
