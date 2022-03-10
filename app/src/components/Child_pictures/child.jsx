import React from 'react'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'

import Typography from '@mui/material/Typography'
import { ThemeProvider } from '@mui/material/styles'
import { ThemeTitres } from '../../theme/ThemeTitres'
import Grid from '@mui/material/Grid'
import './child.css'

function Child() {
  return (
    <div>
      <Box sx={{ flexGrow: 1, width: '80%', mx: 'auto' }}>
        <ThemeProvider theme={ThemeTitres}>
          <Typography
            variant="h1"
            color="primary.main"
            sx={{ mt: 4, fontSize: '2rem' }}
          >
            Nos enfants parrainés
          </Typography>
        </ThemeProvider>
        <Divider sx={{ my: 4 }} />

        <Grid className="align" container spacing={1}>
          <Grid
            container
            spacing={1}
            sx={{ display: 'flex', flexDirection: 'column' }}
            item
            xs={4}
          >
            <Grid className="premier">aaaa</Grid>
          </Grid>
          <Grid
            container
            spacing={1}
            sx={{ display: 'flex', flexDirection: 'column' }}
            item
            xs={2}
          >
            <Grid className="deuxieme">ddd</Grid>
            <Grid className="troisieme">aaaa</Grid>
          </Grid>
          <Grid
            container
            spacing={1}
            sx={{ display: 'flex', flexDirection: 'column' }}
            item
            xs={2}
          >
            <Grid className="deuxieme">ddd</Grid>
            <Grid className="troisieme">aaaa</Grid>
          </Grid>
          <Grid
            container
            spacing={1}
            sx={{ display: 'flex', flexDirection: 'column' }}
            item
            xs={2}
          >
            <Grid className="sixieme">aaaa</Grid>
          </Grid>
          <Grid
            container
            spacing={1}
            sx={{ display: 'flex', flexDirection: 'column' }}
            item
            xs={2}
          >
            <Grid className="deuxieme">ddd</Grid>
            <Grid className="troisieme">aaaa</Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default Child
