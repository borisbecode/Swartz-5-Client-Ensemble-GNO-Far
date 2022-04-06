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
        Chaque année nous sommes sollicités par de nombreux parents qui souhaiteraient voir leurs enfants fréquenter l'école. Cette année scolaire 2021-2022 ce ne sont pas moins de 172 enfants qui sont parrainés : 21 à Mbour et 151 à Foundiougne.
        </Typography>
        <Typography sx={{ mt: 2 }}>
        La plus grande difficulté que nous rencontrons est la diversité des types d'enseignements (publics ou privés) et des villes dans lesquels vivent ces enfants, dans une ville comme Mbour, il est courant d'avoir une centaine d'enfants par classe et là, l'achat des manuels scolaires sont une évidence, de même que le paiement de cours de renforcement.. Cela nous obligent à fixer les montants des parrainages selon ces différents critères, ceux-ci peuvent varier de 65€ à 200€ par an.
        </Typography>
      </Grid>
      <Grid
        className="responsive"
        item
        xs={12}
        lg={2}
        sx={{ pr: 0, mr: 0, alignItems: 'flex-end', alignSelf:"flex-end" }}
      >
        {' '}
        <Button
          variant="contained"
          sx={{ bgcolor: 'secondary.main', color: 'white', alignSelf:"flex-end", whiteSpace:"nowrap", my:4, ml:{lg:4}}}
          href="/parrainage"
        >Je parraine!
        </Button>
      </Grid>
    </Box>
  )
}

export default Childtext
