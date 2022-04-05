import * as React from 'react'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import CardActions from '@mui/material/CardActions'
import PlaceIcon from '@mui/icons-material/Place';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const ActionModele = ({
    title,
    content,
    location,
    link,
    image
}) => {
  return (
    <Card elevation={0} sx={{ display:"flex", width:"100%", flexDirection:{xs:"column", sm:"row", md:"row", lg:"row"}, bgcolor:"white", my:{xs:2, sm:2} }} style={{border:"unset"}} >
      {/** L'image est sur la gauche, les données de l'action à coté */}
      <CardMedia
        sx={{aligSelf:"flex-start", width:{sm:"100%", md:"300px"}}}
        component="img"
        height="100%"
        image={image}
        alt={title}
      />
      <Box sx={{ p:2, display:"flex", justifyContent:"space-between", flexDirection:"column", flexGrow:1}}>
      <CardContent>
        <Typography variant="h6" color="primary.main">
          {title}
        </Typography>
        
        <Divider sx={{ my: 3 }} />
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {content}
        </Typography>        
      </CardContent>
      <CardActions  sx={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
        <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontStyle: 'italic', fontWeight: '700' }}
          >
            {location}
          </Typography>
          <Button href={link} target="_blank" startIcon={<PlaceIcon />}>
          Voir carte
        </Button>
      </CardActions>
      </Box>
      
    </Card>
  )
}

export default ActionModele