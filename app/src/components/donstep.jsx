import React from 'react'
import Divider from '@mui/material/Divider'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { ThemeProvider } from '@mui/material/styles'
import { ThemeTitres } from '../theme/ThemeTitres'
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline'
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead'
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism'

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
          <DownloadForOfflineIcon
            sx={{ width: 80, height: 80, color: 'primary.main' }}
          />
          <Typography
            variant="h3"
            color="primary.main"
            sx={{ mt: 4, fontSize: '1.250rem', fontWeight: 'bold' }}
          >
            Telecharger le fichier en bas de page <br /> <br />
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
          <MarkEmailReadIcon
            sx={{ width: 80, height: 80, color: 'primary.main' }}
          />
          <Typography
            variant="h3"
            color="primary.main"
            sx={{ mt: 4, fontSize: '1.250rem', fontWeight: 'bold' }}
          >
            L'envoyer à l'adresse email : <br /> <br />
            Ensemblegnofar@test.test
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
          <VolunteerActivismIcon
            sx={{ width: 80, height: 80, color: 'primary.main' }}
          />
          <Typography
            variant="h3"
            color="primary.main"
            sx={{ mt: 4, fontSize: '1.250rem', fontWeight: 'bold' }}
          >
            Nous revenons vers vous <br /> <br />
            Merci !
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Don_etape
