import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { ThemeTitres } from '../theme/ThemeTitres';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'

function Histoire({
  title,
  content,
  content2,
  image
}) {
  return (
      <Card elevation={0} sx={{ my:5, bgcolor:"fourth.main", display:"flex", width:"100%", flexDirection:{xs:"column", sm:"row", md:"row", lg:"row"}, borderRadius:0 }} style={{border:"unset"}} >
      {/** L'image est sur la gauche, les données de l'action à coté */}
          <CardContent sx={{m:0, p:0, mr:{sm:4}}} >
          <ThemeProvider theme={ThemeTitres}>
              <Typography variant="h1" sx={{fontSize:"1.5rem"}}>
                  {title}
              </Typography>
          </ThemeProvider>
    
            <Typography variant="body2" color="text.secondary" sx={{ my: 3 }}>
              {content}
            </Typography>   
            <Typography variant="body2" color="text.secondary" sx={{ mt: 3 }}>
              {content2}
            </Typography>     
          </CardContent>
        
          <CardMedia
            sx={{aligSelf:"flex-end", width:{xs:"100%", sm:"40%"}, ml:{sm:3}, mt:{xs:3, sm:0}, height:{md:"180"}, backgroundSize:"contain"}}
            component="img"
            image={image}
            alt={title}
          />
          
      
    </Card>
  )
}

export default Histoire
