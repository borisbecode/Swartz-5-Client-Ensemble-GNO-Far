import React from 'react'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography'
import { ThemeProvider } from '@mui/material/styles'
import { ThemeTitres } from '../../theme/ThemeTitres'
import Grid from '@mui/material/Grid'
import './child.css'
import axios from 'axios'

import BasicModal from './modal'
import Dashboard from './settingtest'

function Child() {
  return (
    <div>
      <Box sx={{ flexGrow: 1, width: '80vw', mx: 'auto' }}>
        <ThemeProvider theme={ThemeTitres}>
          <Typography
            variant="h1"
            color="primary.main"
            sx={{ mt: 4, fontSize: '2rem' }}
          >
            Nos enfants parrainés
          </Typography>
        </ThemeProvider>
        <Divider sx={{ my: 4, mx: 'auto' }} />

        <Grid className="align" container spacing={1} sx={{ mx: 'auto' }}>
          <Grid
            container
            spacing={1}
            sx={{ display: 'flex', flexDirection: 'column', maxWidth: 345 }}
            item
            lg={4}
            xs={10}
            md={4}
            /*     style={{ backgroundImage: `url(${this.state.bgImg})` }} */
          >
            <Grid className="premier">
              <Dashboard />
            </Grid>
          </Grid>
          <Grid
            container
            spacing={1}
            sx={{ display: 'flex', flexDirection: 'column' }}
            item
            xs={5}
            lg={2}
            md={2}
          >
            <Grid className="deuxieme">
              {' '}
              <BasicModal />{' '}
            </Grid>
            <Grid className="troisieme"></Grid>
          </Grid>
          <Grid
            container
            spacing={1}
            sx={{ display: 'flex', flexDirection: 'column' }}
            item
            xs={5}
            lg={2}
            md={2}
          >
            <Grid className="quattrieme"></Grid>
            <Grid className="cinquieme"></Grid>
          </Grid>
          <Grid
            container
            spacing={1}
            sx={{ display: 'flex', flexDirection: 'column' }}
            item
            xs={10}
            lg={2}
            md={2}
          >
            <Grid className="sixieme"></Grid>
          </Grid>
          <Grid
            container
            spacing={1}
            sx={{
              display: 'flex',
              flexDirection: { xs: 'row', lg: 'column' },
            }}
            item
            xs={12}
            lg={1}
            md={2}
          >
            <Grid className="septieme"></Grid>
            <Grid className="huitieme"></Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default Child
