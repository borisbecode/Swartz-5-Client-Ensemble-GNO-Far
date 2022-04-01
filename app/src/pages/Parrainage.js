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
          Parrainer un enfant, c'est lui offrir la possibilité d'avoir un avenir
          meilleur. Comme l'a si bien dit Nelson Mandela "l'éducation est l'arme
          la plus puissante qui puisse changer le monde".
        </Typography>
        <Divider sx={{ my: 4 }} />{' '}
      </Box>
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
              sx={{ mt: 4, fontSize: '1.5rem' }}
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
              sx={{ mt: 4 }}
            >
              Grace à vos dons , nous pouvons offrir une assurance santé ,
              lutter contre la malnutrition , offrir des colis alimentaires ,
              des lits, des lunettes ...
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1, width: '60%', mx: 'auto', pt: 2, mb: 3 }}>
            {' '}
            <Typography
              align="center"
              variant="body1"
              gutterBottom
              sx={{ mt: 4 }}
            >
              Grâce à une caisse de solidarité, alimentée par vos dons, nous
              pouvons permettre à certains enfants d'avoir accès à des soins
              plus onéreux (chaussures orthopédiques, opérations chirurgicales,
              membres fracturés).
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1, width: '60%', mx: 'auto', pt: 2, mb: 3 }}>
            {' '}
            <Typography
              align="center"
              variant="body1"
              gutterBottom
              sx={{ mt: 4 }}
            >
              Nous garantissons une transparence totale sur les dons récoltés ,
              chaque euros récoltés est intégralement consacré à nos actions.
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1, width: '60%', mx: 'auto', pt: 2, mb: 3 }}>
            {' '}
            <Typography
              align="center"
              variant="body1"
              gutterBottom
              sx={{ mt: 4, fontSize: '1rem', fontWeight: 'bold' }}
              /* sx={{ bgcolor: 'secondary.main', color: 'white', m: 4 }} */
            >
              Les dons sont déductibles d'impot.
            </Typography>
          </Box>
        </Box>
        <Box sx={{ flexGrow: 1, width: '90%', mx: 'auto' }}>
          {' '}
          <ThemeProvider theme={ThemeTitres}>
            <Typography
              variant="h1"
              color="primary.main"
              sx={{ mt: 5, fontSize: '1.5rem' }}
            >
              Comment se parrainer ?
            </Typography>
          </ThemeProvider>
          <Don_etape />
          <Box sx={{ flexGrow: 1, width: '60%', mx: 'auto', pt: 2, mb: 3 }}>
            {' '}
            <Typography
              align="center"
              variant="body1"
              gutterBottom
              sx={{ mt: 5, fontSize: '1rem', fontWeight: 'bold' }}
            >
              Vous pouvez aussi réaliser un don spontané sur le compte de
              l’association <br /> Ensemble-Gno Far : BE74 0018 2376 5607
            </Typography>
            <Typography
              align="center"
              variant="body1"
              gutterBottom
              sx={{ mt: 4 }}
            >
              N'oubliez pas , chaque don compte .
            </Typography>
          </Box>
          {/*  <Grid align="center" sx={{ mt: 5 }}>
            {' '}
            <Button
              variant="contained"
              sx={{ bgcolor: 'secondary.main', color: 'white', m: 4 }}
              href="/parrainage"
            >
              <Typography>Telecharger le pddf</Typography>
            </Button>
            <Downloadfile />
          </Grid> */}
          <Downloadfile />
        </Box>
      </Box>
    </Box>
  )
}

export default Parrainage
