import React from 'react'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'

import Typography from '@mui/material/Typography'
import { ThemeProvider } from '@mui/material/styles'
import { ThemeTitres } from '../../theme/ThemeTitres'
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
      </Box>
    </div>
  )
}

export default Child
