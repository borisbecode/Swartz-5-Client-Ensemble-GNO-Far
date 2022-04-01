import React from 'react'
import Divider from '@mui/material/Divider'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { ThemeProvider } from '@mui/material/styles'
import { ThemeTitres } from '../theme/ThemeTitres'

function Don_etape() {
  return (
    <Box sx={{ pt: 5 }}>
      <Grid container spacing={4}>
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <Avatar
            alt="Prénom Nom"
            src="https://picsum.photos/id/42/800/800"
            sx={{ width: 200, height: 200 }}
          />
          <Typography
            variant="h3"
            color="primary.main"
            sx={{ mt: 4, fontSize: '1rem', fontWeight: 'bold' }}
          >
            Telecharger le fichier
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <Avatar
            alt="Prénom Nom"
            src="https://picsum.photos/id/122/800/800"
            sx={{ width: 200, height: 200 }}
          />
          <Typography
            variant="h3"
            color="primary.main"
            sx={{ mt: 4, fontSize: '1rem', fontWeight: 'bold' }}
          >
            L'envoyer à l'adresse email :
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <Avatar
            alt="Prénom Nom"
            src="https://picsum.photos/id/34/800/800"
            sx={{ width: 200, height: 200 }}
          />
          <Typography
            variant="h3"
            color="primary.main"
            sx={{ mt: 4, fontSize: '1rem', fontWeight: 'bold' }}
          >
            Merci !
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Don_etape
