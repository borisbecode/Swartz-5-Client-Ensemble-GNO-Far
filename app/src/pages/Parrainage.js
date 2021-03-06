import React from 'react'

import '../theme/parrainagecss.css'
import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import { ThemeProvider } from '@mui/material/styles'
import { ThemeTitres } from '../theme/ThemeTitres'
import ActionModele from '../components/ActionModele'
import axios from 'axios'
import Button from '@mui/material/Button'

import Don_etape from '../components/donstep'
import Link from '@mui/material/Link'

import Downloadfile from '../components/Downloadfile'

const Parrainage = () => {
  return (
    <Box>
      <Box sx={{ flexGrow: 1, width: '80%', mx: 'auto' }}>
        {' '}
        <ThemeProvider theme={ThemeTitres}>
          <Typography
            variant="h1"
            color="primary.main"
            sx={{ mt: 4, fontSize: '2rem' }}
          >
            Vous parrainer
          </Typography>
        </ThemeProvider>
        {/** Texte explicatif actions */}
        <Typography variant="body1" gutterBottom sx={{ mt: 4 }}>
          Parrainer un enfant, c'est lui offrir la possibilit√© d'avoir un avenir
          meilleur. Comme l'a si bien dit Nelson Mandela "l'√©ducation est l'arme
          la plus puissante qui puisse changer le monde".
        </Typography>
        <Divider sx={{ my: 4 }} />{' '}
      </Box>{' '}
      <Box
        className="background"
        sx={{ flexGrow: 1, width: '80%', mx: 'auto', mb: 5 }}
      >
        <Box sx={{ flexGrow: 1, width: '90%', mx: 'auto' }}>
          {' '}
          <ThemeProvider theme={ThemeTitres}>
            <Typography
              variant="h1"
              color="primary.main"
              sx={{ mt: 2, pt: 3, fontSize: '1.750rem' }}
            >
              Comment parrainer un enfant ?
            </Typography>
          </ThemeProvider>
          <Don_etape />
          <Box sx={{ flexGrow: 1, width: '60%', mx: 'auto', pt: 2, mb: 3 }}>
            {' '}
            <Typography
              align="center"
              variant="body1"
              gutterBottom
              sx={{
                mt: 5,
                fontSize: '1rem',
                fontWeight: 'bold',

                fontSize: '1.125rem',
              }}
            >
              Vous pouvez aussi r√©aliser un don spontan√© sur le compte de
              l‚Äôassociation <br /> Ensemble-Gno Far : BE74 0018 2376 5607
            </Typography>
            <Typography
              align="center"
              variant="body1"
              gutterBottom
              sx={{ mt: 4, fontSize: '1.125rem' }}
            >
              N'oubliez pas, chaque don compte .
            </Typography>
          </Box>
          <Downloadfile />
        </Box>
      </Box>
      <Box
        className="background2"
        sx={{ flexGrow: 1, width: '80%', mx: 'auto', mb: 5 }}
      ></Box>
      <Box
        className="background"
        sx={{ flexGrow: 1, width: '80%', mx: 'auto', mb: 5 }}
      >
        <Box sx={{ flexGrow: 1, width: '90%', mx: 'auto', pt: 2, mb: 3 }}>
          {' '}
          <ThemeProvider theme={ThemeTitres}>
            <Typography
              variant="h1"
              color="primary.main"
              sx={{ mt: 2, fontSize: '1.750rem' }}
            >
              Nous avons besoin de vous
            </Typography>
          </ThemeProvider>
          <Box sx={{ flexGrow: 1, width: '60%', mx: 'auto', pt: 2, mb: 3 }}>
            {' '}
            <Typography
              align="center"
              variant="body1"
              gutterBottom
              sx={{ mt: 4, fontSize: '1.125rem' }}
            >
              Grace √† vos parrainages, nous pouvons offrir une assurance sant√©,
              lutter contre la malnutrition, offrir des colis alimentaires, des
              lits, des lunettes...
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1, width: '60%', mx: 'auto', pt: 2, mb: 3 }}>
            {' '}
            <Typography
              align="center"
              variant="body1"
              gutterBottom
              sx={{ mt: 4, fontSize: '1.125rem' }}
            >
              Gr√Ęce √† une caisse de solidarit√©, aliment√©e par vos dons, nous
              pouvons permettre √† certains enfants d'avoir acc√®s √† des soins
              plus on√©reux (chaussures orthop√©diques, op√©rations chirurgicales,
              membres fractur√©s).
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1, width: '60%', mx: 'auto', pt: 2, mb: 3 }}>
            {' '}
            <Typography
              align="center"
              variant="body1"
              gutterBottom
              sx={{ mt: 4, fontSize: '1.125rem' }}
            >
              Nous garantissons une transparence totale sur les dons r√©colt√©s,
              chaque euros r√©colt√©s est int√©gralement consacr√© √† nos actions.
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1, width: '60%', mx: 'auto', pt: 2, mb: 3 }}>
            {' '}
            <Typography
              align="center"
              variant="body1"
              gutterBottom
              sx={{
                mt: 4,
                pb: 4,
                fontSize: '1rem',
                fontWeight: 'bold',

                fontSize: '1.125rem',
              }}
              /* sx={{ bgcolor: 'secondary.main',  m: 4 }} */
            >
              Les dons sont d√©ductibles d'impot.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Parrainage
