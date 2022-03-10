import * as React from 'react'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import Box from '@mui/material/Box'

export default function ArticleModele({
  img,
  title,
  subTitle,
  content,
  auteur,
  date,
}) {
  return (
    <Card
      elevation={0}
      sx={{ maxWidth: 345, position: 'relative', bgcolor: 'white' }}
      style={{ border: 'unset' }}
    >
      <Box
        sx={{
          position: 'absolute',
          p: 1,
          bgcolor: 'primary.main',
          right: 0,
          top: 0,
          textAlign: 'right',
        }}
      >
        <Typography variant="body2" color="white" sx={{ bgcolor: 'inherit' }}>
          {date}
        </Typography>
      </Box>
      <CardMedia component="img" height="300" image={img} alt={title} />
      <CardContent>
        <Typography variant="h6" color="text.secondary">
          {title}
        </Typography>
        <Typography
          variant="subtitle2"
          color="primary.main"
          sx={{ textTransform: 'uppercase', fontWeight: '600' }}
        >
          {subTitle}
        </Typography>
        <Divider sx={{ my: 3 }} />
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {content}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontStyle: 'italic', fontWeight: '700' }}
        >
          {auteur}
        </Typography>
      </CardContent>
    </Card>
  )
}
