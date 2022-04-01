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
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import CardActions from '@mui/material/CardActions'

import { CardActionArea } from '@mui/material'

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
            Nos enfants parrainés
          </Typography>
        </ThemeProvider>
        <BasicModal /> <Divider sx={{ my: 4, mx: 'auto' }} />
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
            <Box
              style={{
                backgroundImage: `url(/uploads/${premierephoto})`,
              }}
              class="premier"
            >
              <Box class="image__img"></Box>

              <Box class="image__overlay image__overlay--primary">
                <Box class="image__title"> {premierephoto_nom}</Box>
              </Box>
            </Box>
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
            <Box
              style={{
                backgroundImage: `url(/uploads/${deuxiemephoto})`,
              }}
              class="deuxieme"
            >
              <Box class="image__img"></Box>

              <Box class="image__overlay image__overlay--primary">
                <Box class="image__title"> {deuxiemephoto_nom}</Box>
              </Box>
            </Box>
            <Box
              style={{
                backgroundImage: `url(/uploads/${troisiemephoto})`,
              }}
              class="troisieme"
            >
              <Box class="image__img"></Box>

              <Box class="image__overlay image__overlay--primary">
                <Box class="image__title"> {troisiemephoto_nom}</Box>
              </Box>
            </Box>
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
            <Box
              style={{
                backgroundImage: `url(/uploads/${quattriemephoto})`,
              }}
              class="quattrieme"
            >
              <Box class="image__img"></Box>

              <Box class="image__overlay image__overlay--primary">
                <Box class="image__title"> {quattriemephoto_nom}</Box>
              </Box>
            </Box>
            <Box
              style={{
                backgroundImage: `url(/uploads/${cinquiemephoto})`,
              }}
              class="cinquieme"
            >
              <Box class="image__img"></Box>

              <Box class="image__overlay image__overlay--primary">
                <Box class="image__title"> {cinquiemephoto_nom}</Box>
              </Box>
            </Box>
          </Grid>
          <Grid
            container
            spacing={1}
            sx={{ display: 'flex', flexDirection: 'column', maxWidth: 345 }}
            item
            lg={4}
            xs={10}
            md={4}
          >
            <Box
              style={{
                backgroundImage: `url(/uploads/${sixiemephoto})`,
              }}
              class="sixieme"
            >
              <Box class="image__img"></Box>

              <Box class="image__overlay image__overlay--primary">
                <Box class="image__title"> {sixiemephoto_nom}</Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default Child
