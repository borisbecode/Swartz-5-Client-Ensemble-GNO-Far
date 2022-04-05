import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import { ThemeTitres } from '../theme/ThemeTitres';
import ActionModele from '../components/ActionModele';
import axios from "axios";


// Fetch data => ACTIONS
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };}


const Actions = () => {

  const {data, loading, error } = useFetch(
    `http://localhost:5000/api/actions/actif`
  );

  if (loading) return (<Box>Loading</Box>);

  if (error) return (<Box>There's been an error</Box>);


  return (
    <Box sx={{ width: '100%', m: 0 }}>
      {/** Partie: toutes les actions */}
      <Box sx={{ flexGrow: 1, width:"80%", mx:"auto" }}>
        {/** Titre actions */}
        <ThemeProvider theme={ThemeTitres}>
            <Typography variant="h1" color="primary.main" sx={{mt:4, fontSize:"2rem"}}>
                Nos actions
            </Typography>
        </ThemeProvider>
        {/** Texte explicatif actions */}
        <Typography variant="body1" gutterBottom sx={{mt:4}}>
        Etiam in convallis diam. Sed convallis non arcu a consequat. Nulla facilisi. Suspendisse commodo risus ac malesuada tincidunt. Suspendisse in tincidunt ex, non fermentum velit. Sed lacinia elementum viverra. Pellentesque ornare auctor purus eget volutpat. Integer eget ultricies dui, nec ullamcorper magna. Pellentesque pharetra vitae mi ut tincidunt. 
            </Typography>
    <Divider sx={{my:4}}/>
    {/** Actions "cards" */}
      <Grid container sx={{mx:"auto"}}>
        { data ?
          data.map((action) => {
            return <Grid key={action._id} item xs={12} >
              <ActionModele
              title={action.title}
              content={action.content}
              location={action.location}
              link={action.link}
              image={action.image ? `/uploads/${action.image}`
              : 'https://picsum.photos/id/173/400/800'} />
            </Grid>
          }) :
          <div>On a un soucis!</div>}
        
      </Grid>
    </Box>
    </Box>
  )
}


export default Actions