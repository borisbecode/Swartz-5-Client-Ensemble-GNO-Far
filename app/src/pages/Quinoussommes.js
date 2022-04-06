import React from 'react';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import { ThemeTitres } from '../theme/ThemeTitres';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Histoire from '../components/Histoire';
import LesMembres from '../components/LesMembres';
import Parrains from '../components/Parrains';
import Equipe from "../Assets/toutelequipe.jpg";



function Quinoussommes() {
  return (
    <Box id="accueil" sx={{ width: '100%', m: 0 }}>
       <Box sx={{ flexGrow: 1, width: '80%', mx: 'auto' }}>
        {/** Titre Qui sommes-nous */}
        <ThemeProvider theme={ThemeTitres}>
              <Typography variant="h1" color="primary.main" sx={{mt:4, fontSize:"2rem"}}>
                  Qui sommes-nous
              </Typography>
          </ThemeProvider>
          <Divider sx={{ my: 4 }} />
        </Box>
    
        <Box sx={{ flexGrow: 1, width:"80%", mx:"auto", my:3 }}>
        <Histoire 
          title="Comment notre ASBL est-elle née?"
          content="Trois randonneurs répondent à une proposition de randonnées au Sénégal et tombent sous le charme de l'accueil chaleureux des sénégalais mais sont surtout frappés par le nombre d'enfants traînant dans les rues alors que des écoles sont là pour les accueillir mais qui, fautes de moyens des parents, n'y ont pas accès."
          content2="Après des mois de réflexion, nous décidons de créer une ASBL afin de permettre à un maximum d'enfants d'avoir accès à l'éducation mais également aux soins en les affiliant à l'assurance santé."
          image={Equipe} />

          <LesMembres />
          <Parrains />
        </Box>
     
    </Box>
  )
}

export default Quinoussommes
