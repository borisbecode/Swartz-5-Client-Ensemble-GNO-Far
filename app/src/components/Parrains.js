import React from 'react';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { ThemeProvider } from '@mui/material/styles';
import { ThemeTitres } from '../theme/ThemeTitres';

function Parrains() {
  return (
    <Box sx={{pt:5}}>
        <ThemeProvider theme={ThemeTitres}>
              <Typography variant="h1" sx={{fontSize:"1.5rem", mt:4}}>
                  Nos parrains et leur témoignage
              </Typography>
          </ThemeProvider>
        
        <Divider sx={{my:4}}/>

        <Box>
            <Box  sx={{mb:5, display:"flex", flexDirection:{xs:"column", sm:"row"}, textAlign:{xs:"center", sm:"left"}, alignItems:{sx:"center", sm:"flex-start"}, justifyContent:"center"}}>
                <Avatar
                alt="Prénom Nom"
                src="https://picsum.photos/id/122/800/800"
                sx={{ width: 200, height: 200, mx:{xs:"auto"} }}
                />
                <Box sx={{ml:{sm:4}}}>
                    <Typography
                    variant="h3"
                    color="primary.main"
                    sx={{ mt: 4, fontSize: '1rem', fontWeight:"bold" }}>Prénom Nom</Typography>
                    <Typography
                    variant="body2" gutterBottom
                    sx={{ mt: 2 }}>Nunc sollicitudin urna eu risus consequat, vel rhoncus leo facilisis. Maecenas facilisis, leo id hendrerit condimentum, massa nisi porttitor mi, in ornare est urna ac elit. Donec tellus lorem, venenatis vitae risus non, interdum lobortis nibh. Mauris magna felis, tempor eget viverra id, sagittis a nunc.
                    </Typography>
                </Box>
            </Box>

            <Box  sx={{mb:5, display:"flex", flexDirection:{xs:"column", sm:"row"}, textAlign:{xs:"center", sm:"left"}, alignItems:{sx:"center", sm:"flex-start"}, justifyContent:"center"}}>
                <Avatar
                alt="Prénom Nom"
                src="https://picsum.photos/id/788/800/800"
                sx={{ width: 200, height: 200, mx:{xs:"auto"} }}
                />
                <Box sx={{ml:{sm:4}}}>
                    <Typography
                    variant="h3"
                    color="primary.main"
                    sx={{ mt: 4, fontSize: '1rem', fontWeight:"bold" }}>Prénom Nom</Typography>
                    <Typography
                    variant="body2" gutterBottom
                    sx={{ mt: 2 }}>Nulla sed pharetra ex. Proin commodo vulputate ante eget auctor. Sed blandit ipsum et sapien hendrerit, a imperdiet lorem accumsan. Maecenas scelerisque bibendum ante quis eleifend. Aenean et orci at risus pulvinar venenatis ac eu turpis. Etiam feugiat, erat et tempus faucibus, ligula lectus convallis lacus, nec pulvinar turpis ligula vel erat. Nulla tortor elit, porttitor eu vestibulum vel, facilisis ac metus. Vivamus convallis pellentesque eros, a malesuada nunc consectetur non. 
                    </Typography>
                </Box>
            </Box>


            <Box  sx={{mb:5, display:"flex", flexDirection:{xs:"column", sm:"row"}, textAlign:{xs:"center", sm:"left"}, alignItems:{sx:"center", sm:"flex-start"}, justifyContent:"center"}}>
                <Avatar
                alt="Prénom Nom"
                src="https://picsum.photos/id/58/800/800"
                sx={{ width: 200, height: 200, mx:{xs:"auto"} }}
                />
                <Box sx={{ml:{sm:4}}}>
                    <Typography
                    variant="h3"
                    color="primary.main"
                    sx={{ mt: 4, fontSize: '1rem', fontWeight:"bold" }}>Prénom Nom</Typography>
                    <Typography
                    variant="body2" gutterBottom
                    sx={{ mt: 2 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum varius vestibulum. Morbi at viverra lectus, vitae aliquet neque. Phasellus eleifend libero nec felis euismod, accumsan facilisis massa sodales. Sed odio nisl, porttitor quis imperdiet vel, pulvinar in libero. Suspendisse dictum, neque ac sodales tempor, nulla felis pretium ex, at molestie enim augue quis nibh. Nam non tristique erat. Vestibulum id volutpat est. Nullam lacinia lectus in sem consectetur condimentum. Duis placerat dui ut tincidunt tempus. Curabitur vel rutrum est. Maecenas dolor dolor, mattis mollis justo in, convallis vulputate ipsum. Aenean blandit aliquam tristique. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam vestibulum egestas vulputate.
                    </Typography>
                </Box>
            </Box>

        </Box>

    </Box>
  )
}

export default Parrains
