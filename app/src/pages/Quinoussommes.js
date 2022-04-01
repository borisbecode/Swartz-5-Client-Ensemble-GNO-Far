import React from 'react';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import { ThemeTitres } from '../theme/ThemeTitres';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Histoire from '../components/Histoire';
import LesMembres from '../components/LesMembres';
import Parrains from '../components/Parrains';



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
          title="L'histoire de Gno-Far"
          content="Proin nibh velit, elementum sed ante at, pretium venenatis dolor. Integer commodo rutrum neque. Morbi ante metus, ultricies nec tempor vel, ornare a enim. Fusce tincidunt consequat sem, eu ornare erat varius a. Sed vitae tristique dolor. Suspendisse maximus erat at sapien consectetur, porta rutrum libero mollis. Donec scelerisque condimentum nisl, eget ultricies dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras sapien sapien, laoreet id est eget, vestibulum aliquet sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque sed faucibus mi, nec sodales nisl. Nullam placerat nulla nec quam cursus feugiat. Morbi euismod, arcu eget bibendum bibendum, augue lectus eleifend tortor, eu dignissim dui felis quis odio. Fusce sed convallis tellus. Integer in finibus dolor."
          content2="Curabitur mollis massa sed auctor sagittis. Vestibulum vehicula tempor lectus, non elementum tortor auctor quis. Nullam in posuere odio. Vivamus ac aliquam ante. Sed nec tortor eu dui egestas dignissim. Donec volutpat augue eu turpis interdum imperdiet. Proin euismod dapibus lorem quis sodales. Morbi ac elit metus. Quisque quis enim augue. Duis id eleifend diam, molestie gravida purus. Donec maximus massa eros, sit amet varius orci condimentum sit amet."
          image="https://picsum.photos/id/237/800/800" />

          <LesMembres />
          <Parrains />
        </Box>
     
    </Box>
  )
}

export default Quinoussommes
