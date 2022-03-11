import * as React from 'react'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import CardActions from '@mui/material/CardActions'
import PlaceIcon from '@mui/icons-material/Place';
import Button from '@mui/material/Button';

const ActionModele = ({
    title,
    content,
    location,
    link,
    image
}) => {
  return (
    <Card elevation={0} sx={{ position:"relative", bgcolor:"white", m:{xs:0, sm:1} }} style={{border:"unset"}} >
    
      <CardMedia
        component="img"
        height="300"
        image={image}
        alt={title}
      />
      <CardContent>
        <Typography variant="h6" color="text.secondary">
          {title}
        </Typography>
        
        <Divider sx={{ my: 3 }} />
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {content}
        </Typography>        
      </CardContent>
      <CardActions disableSpacing sx={{display:"flex", flexDirection:"column", justifyContent:"flex-start"}}>
      <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontStyle: 'italic', fontWeight: '700' }}
        >
          {location}
        </Typography>
        <Button href={link} startIcon={<PlaceIcon />}>
        Voir carte
      </Button>
        
      </CardActions>
    </Card>
  )
}

export default ActionModele