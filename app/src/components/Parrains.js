import React from 'react'
import Divider from '@mui/material/Divider'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { ThemeProvider } from '@mui/material/styles'
import { ThemeTitres } from '../theme/ThemeTitres'

function Parrains() {
  return (
    <Box sx={{ pt: 5 }}>
      <ThemeProvider theme={ThemeTitres}>
        <Typography variant="h1" sx={{ fontSize: '1.5rem', mt: 4 }}>
          Nos parrains et leur témoignage
        </Typography>
      </ThemeProvider>

      <Divider sx={{ my: 4 }} />

      <Box>
        <Box
          sx={{
            mb: 5,
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            textAlign: { xs: 'center', sm: 'left' },
            alignItems: { sx: 'center', sm: 'flex-start' },
            justifyContent: 'center',
          }}
        >
          <Avatar
            alt="Amandine Fourdin"
            src="https://zupimages.net/up/22/15/xgox.jpg"
            sx={{ width: 200, height: 200, mx: { xs: 'auto' } }}
          />
          <Box sx={{ ml: { sm: 4 } }}>
            <Typography
              variant="h3"
              color="primary.main"
              sx={{ mt: 4, fontSize: '1rem', fontWeight: 'bold' }}
            >
              Amandine Fourdin
            </Typography>
            <Typography variant="body2" gutterBottom sx={{ mt: 2 }}>
              N'hésitez pas à venir rejoindre la grande famille des parrains et
              marraines, ce n'est que du bonheur de pouvoir aider ces petits et
              leur famille grâce à une équipe formidable dans une association
              transparente et honnête.
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            mb: 5,
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            textAlign: { xs: 'center', sm: 'left' },
            alignItems: { sx: 'center', sm: 'flex-start' },
            justifyContent: 'center',
          }}
        >
          <Avatar
            alt="Colette Vanderwaele"
            src="https://zupimages.net/up/22/15/1fwa.jpg"
            sx={{ width: 200, height: 200, mx: { xs: 'auto' } }}
          />
          <Box sx={{ ml: { sm: 4 } }}>
            <Typography
              variant="h3"
              color="primary.main"
              sx={{ mt: 4, fontSize: '1rem', fontWeight: 'bold' }}
            >
              Colette Vanderwaele
            </Typography>
            <Typography variant="body2" gutterBottom sx={{ mt: 2 }}>
              Nouvelle membre de cette association, j'étais un peu réticente au
              départ, mais je ne regrette rien, bien que je n'ai pas voulu
              choisir mon filleul, j'ai entièrement fait confiance à Annie
              Tilmant , et c'est elle qui m'a permis d'améliorer la vie de
              Pierre, et ce n'est pas l'association qui demande quoi que ce
              soit, mais c'est moi qui veut aider Pierre , ils restent très
              discrets, mais les comptes, eux, sont limpides, encore un tout
              grand merci à toute l'équipe et de faire de moi une marraine
              heureuse
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            mb: 5,
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            textAlign: { xs: 'center', sm: 'left' },
            alignItems: { sx: 'center', sm: 'flex-start' },
            justifyContent: 'center',
          }}
        >
          <Avatar
            alt="Valeria Lai-Mayence"
            src="https://zupimages.net/up/22/15/nxtb.jpg"
            sx={{ width: 200, height: 200, mx: { xs: 'auto' } }}
          />
          <Box sx={{ ml: { sm: 4 } }}>
            <Typography
              variant="h3"
              color="primary.main"
              sx={{ mt: 4, fontSize: '1rem', fontWeight: 'bold' }}
            >
              Valeria Lai-Mayence
            </Typography>
            <Typography variant="body2" gutterBottom sx={{ mt: 2 }}>
              Je parraine un petite sénégalaise depuis quelques années déjà et
              je ne regrette pas avoir franchi le pas. L'asbl nous communique
              les différents projets en toute transparence et nous fait des
              retours de nos petits protégés. Je fais entièrement confiance en
              l'équipe et tout particulièrement à Annie et Jean Luc pour leur
              investissement et leur implication.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Parrains
