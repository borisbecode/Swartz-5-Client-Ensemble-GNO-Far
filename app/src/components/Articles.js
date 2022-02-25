import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ArticleModele from './ArticleModele';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import { ThemeTitres } from '../theme/ThemeTitres';

const Articles = () => {
  return (
    <Box sx={{ flexGrow: 1, width:"80%", mx:"auto" }}>
        {/** Titre du blog */}
        <ThemeProvider theme={ThemeTitres}>
            <Typography variant="h1" color="primary.main" sx={{mt:4, fontSize:"2rem"}}>
                Notre actualité
            </Typography>
        </ThemeProvider>
    <Divider sx={{my:4}}/>
    {/** Articles du blog */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={4}>
          <ArticleModele 
            img="https://picsum.photos/id/237/200/300"
            title="Je veux vivre à Hogwarts!"
            subTitle="Test sous-titre"
            content="Curabitur ac mi faucibus erat scelerisque condimentum. Integer efficitur sapien magna, eget congue nisl ultrices blandit. Vivamus aliquet eros et mollis posuere. Integer dolor tortor, porttitor id finibus eu, mattis in turpis. Nunc eget aliquet risus. In consectetur nibh ac sollicitudin eleifend. Suspendisse potenti. Mauris pellentesque dolor vitae sapien porta interdum in vel nisl. Nam at scelerisque dui. Quisque vel imperdiet odio. Aenean dictum justo nec mi rutrum consequat. Nullam ac lectus aliquam dolor tincidunt tincidunt. Suspendisse hendrerit consequat mauris quis blandit. Etiam et lectus sem."
            date="VEN 02/03"
            auteur="Harry Potter" />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <ArticleModele 
            img="https://picsum.photos/id/237/200/300"
            title="Je veux vivre à Hogwarts!"
            subTitle="Test sous-titre"
            content="Curabitur ac mi faucibus erat scelerisque condimentum. Integer efficitur sapien magna, eget congue nisl ultrices blandit. Vivamus aliquet eros et mollis posuere. Integer dolor tortor, porttitor id finibus eu, mattis in turpis. Nunc eget aliquet risus. In consectetur nibh ac sollicitudin eleifend. Suspendisse potenti. Mauris pellentesque dolor vitae sapien porta interdum in vel nisl. Nam at scelerisque dui. Quisque vel imperdiet odio. Aenean dictum justo nec mi rutrum consequat. Nullam ac lectus aliquam dolor tincidunt tincidunt. Suspendisse hendrerit consequat mauris quis blandit. Etiam et lectus sem."
            date="VEN 02/03"
            auteur="Harry Potter" />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <ArticleModele 
            img="https://picsum.photos/id/237/200/300"
            title="Je veux vivre à Hogwarts!"
            subTitle="Test sous-titre"
            content="Curabitur ac mi faucibus erat scelerisque condimentum. Integer efficitur sapien magna, eget congue nisl ultrices blandit. Vivamus aliquet eros et mollis posuere. Integer dolor tortor, porttitor id finibus eu, mattis in turpis. Nunc eget aliquet risus. In consectetur nibh ac sollicitudin eleifend. Suspendisse potenti. Mauris pellentesque dolor vitae sapien porta interdum in vel nisl. Nam at scelerisque dui. Quisque vel imperdiet odio. Aenean dictum justo nec mi rutrum consequat. Nullam ac lectus aliquam dolor tincidunt tincidunt. Suspendisse hendrerit consequat mauris quis blandit. Etiam et lectus sem."
            date="VEN 02/03"
            auteur="Harry Potter" />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <ArticleModele 
            img="https://picsum.photos/id/237/200/300"
            title="Je veux vivre à Hogwarts!"
            subTitle="Test sous-titre"
            content="Curabitur ac mi faucibus erat scelerisque condimentum. Integer efficitur sapien magna, eget congue nisl ultrices blandit. Vivamus aliquet eros et mollis posuere. Integer dolor tortor, porttitor id finibus eu, mattis in turpis. Nunc eget aliquet risus. In consectetur nibh ac sollicitudin eleifend. Suspendisse potenti. Mauris pellentesque dolor vitae sapien porta interdum in vel nisl. Nam at scelerisque dui. Quisque vel imperdiet odio. Aenean dictum justo nec mi rutrum consequat. Nullam ac lectus aliquam dolor tincidunt tincidunt. Suspendisse hendrerit consequat mauris quis blandit. Etiam et lectus sem."
            date="VEN 02/03"
            auteur="Harry Potter" />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Articles