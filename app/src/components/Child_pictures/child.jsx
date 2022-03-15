import React from 'react'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography'
import { ThemeProvider } from '@mui/material/styles'
import { ThemeTitres } from '../../theme/ThemeTitres'
import Grid from '@mui/material/Grid'
import './child.css'
import axios from 'axios'

import BasicModal from './modal'
/* import Dashboard from './settingtest' */

function useFetch(url) {
  const [data, setData] = useState(null)
  const [name, setName] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    axios
      .get(url)
      .then((response) => {
        setData(response.data.map((e) => e.image))
        setName(response.data.map((e) => e.childName))
      })
      .catch((err) => {
        setError(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [url])

  return { data, loading, error, name }
}

function Child() {
  const { data, loading, error, name } = useFetch(
    `${process.env.REACT_APP_API_URL}api/parraines/`
  )

  if (loading) return <Box>Loading</Box>

  if (error) return <Box>Les photos ne peuvent pas etre chargées</Box>

  /*  console.log(data)
  console.log(name)
  console.log(data && data[0]) */

  /* const lastHero = data && data.pop()
  console.log(lastHero) */

  var premierephoto = data && data[data.length - 1]
  var premierephoto_nom = name && name[name.length - 1]
  var deuxiemephoto = data && data[data.length - 2]
  var deuxiemephoto_nom = name && name[name.length - 2]
  var troisiemephoto = data && data[data.length - 3]
  var troisiemephoto_nom = name && name[name.length - 3]
  var quattriemephoto = data && data[data.length - 4]
  var quattriemephoto_nom = name && name[name.length - 4]
  var cinquiemephoto = data && data[data.length - 5]
  var cinquiemephoto_nom = name && name[name.length - 5]
  var sixiemephoto = data && data[data.length - 6]
  var sixiemephoto_nom = name && name[name.length - 6]
  var septiemephoto = data && data[data.length - 7]
  var septiemephoto_nom = name && name[name.length - 7]
  var huitiemephoto = data && data[data.length - 8]
  var huitiemephoto_nom = name && name[name.length - 8]

  return (
    <div>
      <Box sx={{ flexGrow: 1, width: '80vw', mx: 'auto' }}>
        <ThemeProvider theme={ThemeTitres}>
          <Typography
            variant="h1"
            color="primary.main"
            sx={{ mt: 4, fontSize: '2rem' }}
          >
            Nos enfants parrainés <BasicModal />{' '}
          </Typography>
        </ThemeProvider>
        <Divider sx={{ my: 4, mx: 'auto' }} />

        <Grid className="align" container spacing={1} sx={{ mx: 'auto' }}>
          <Grid
            container
            spacing={1}
            sx={{ display: 'flex', flexDirection: 'column', maxWidth: 345 }}
            item
            lg={4}
            xs={10}
            md={4}
          >
            <Grid
              display="flex"
              alignItems="center"
              justifyContent="center"
              alignItems="flex-end"
              className="premier"
              style={{
                backgroundImage: `url(/uploads/${premierephoto})`,
              }}
            >
              <Typography
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                {' '}
                {premierephoto_nom}{' '}
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={1}
            sx={{ display: 'flex', flexDirection: 'column' }}
            item
            xs={5}
            lg={2}
            md={2}
          >
            <Grid
              className="deuxieme"
              style={{
                backgroundImage: `url(/uploads/${deuxiemephoto})`,
              }}
            ></Grid>
            <Grid
              className="troisieme"
              style={{
                backgroundImage: `url(/uploads/${troisiemephoto})`,
              }}
            ></Grid>
          </Grid>
          <Grid
            container
            spacing={1}
            sx={{ display: 'flex', flexDirection: 'column' }}
            item
            xs={5}
            lg={2}
            md={2}
          >
            <Grid
              className="quattrieme"
              style={{
                backgroundImage: `url(/uploads/${quattriemephoto})`,
              }}
            ></Grid>
            <Grid
              className="cinquieme"
              style={{
                backgroundImage: `url(/uploads/${cinquiemephoto})`,
              }}
            ></Grid>
          </Grid>
          <Grid
            container
            spacing={1}
            sx={{ display: 'flex', flexDirection: 'column' }}
            item
            xs={10}
            lg={2}
            md={2}
          >
            <Grid
              className="sixieme"
              style={{
                backgroundImage: `url(/uploads/${sixiemephoto})`,
              }}
            ></Grid>
          </Grid>
          <Grid
            container
            spacing={1}
            sx={{
              display: 'flex',
              flexDirection: { xs: 'row', lg: 'column' },
            }}
            item
            xs={12}
            lg={1}
            md={2}
          >
            <Grid
              className="septieme"
              style={{
                backgroundImage: `url(/uploads/${septiemephoto})`,
              }}
            ></Grid>
            <Grid
              className="huitieme"
              style={{
                backgroundImage: `url(/uploads/${huitiemephoto})`,
              }}
            ></Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default Child
