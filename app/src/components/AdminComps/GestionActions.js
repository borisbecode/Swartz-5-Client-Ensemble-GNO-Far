import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import { ThemeProvider } from '@mui/material/styles'
import { ThemeTitres } from '../../theme/ThemeTitres'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import PhotoCamera from '@mui/icons-material/PhotoCamera'
import { styled } from '@mui/material/styles'
import axios from 'axios'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import Stack from '@mui/material/Stack'
import IconButton from '@mui/material/IconButton'
import Modal from '@mui/material/Modal'
import UpdateAction from './UpdateAction'

const GestionActions = () => {
  let [fetchedData, setFetchedData] = useState([])

  let api = `${process.env.REACT_APP_API_URL}api/actions/actif`

  useEffect(() => {
    // IIFE: immediately invoked function expression
    ;(async function () {
      let data = await fetch(api).then((res) => res.json())
      setFetchedData(data)
    })()
  }, [])

  return (
    /** On affiche les titres des articles + button pour updater */
    <Box sx={{ flexGrow: 1, width: '80%', mx: 'auto', mt: 6 }}>
      {/** Titre création article */}
      <ThemeProvider theme={ThemeTitres}>
        <Typography
          variant="h1"
          color="primary.main"
          gutterBottom
          component="div"
          sx={{ mt: 4, fontSize: '2rem' }}
        >
          Actualiser ou effacer les actions ici
        </Typography>
      </ThemeProvider>
      <Typography variant="body1" gutterBottom component="div">
        Retrouvez vos actions par titre, actualisez les données ou effacez
        l'action de votre choix.
      </Typography>
      <Divider sx={{ my: 4 }} />

      {/** Ici on map les articles publiés et on les affiche par titre */}
      <Box
        sx={{
          mx: 'auto',
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '600px',
          mt: 2,
          mb: 6,
        }}
      >
        {fetchedData !== [] ? (
          fetchedData
            .slice(0)
            .reverse()
            .map((data) => (
              <Box
                key={data._id}
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  m: 1,
                  p: 1,
                  bgcolor: 'white',
                }}
              >
                <Typography sx={{ pr: 3, pl: 1, overflow: 'hidden' }}>
                  {data.title}
                </Typography>
                <UpdateAction data={data} />
              </Box>
            ))
        ) : (
          <Typography sx={{ pr: 3, overflow: 'hidden' }}>
            Oups, le contenu ne s'affiche pas!
          </Typography>
        )}
      </Box>
    </Box>
  )
}

export default GestionActions
