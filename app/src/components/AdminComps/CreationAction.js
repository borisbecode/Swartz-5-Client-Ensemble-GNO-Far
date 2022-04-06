import React, { useState, useEffect, useContext } from 'react'
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
import { AuthContext } from '../../context/auth'

const Input = styled('input')({
  display: 'none',
})

const CreationAction = () => {

  // recup les infos user
  const { user } = useContext(AuthContext)


  const [titre, setTitre] = useState('')
  const [contenu, setContenu] = useState('')
  const [lieu, setLieu] = useState("");
  const [lien, setLien] = useState("");
  const [imageNomAction, setImageNomAction] = useState('Choisissez une image');
  const [actionImage, setActionImage] = useState('');

  const [titreError, setTitreError] = useState(false);
  const [contenuError, setContenuError] = useState(false);
  const [lieuError, setLieuError] = useState(false);
  const [lienError, setLienError] = useState(false);
  const [imageError, setImageError] = useState(false);

  const [titreHelper, setTitreHelper] = useState('');
  const [contenuHelper, setContenuHelper] = useState('');
  const [lieuHelper, setLieuHelper] = useState("");
  const [lienHelper, setLienHelper] = useState("");
  const [imageHelper, setImageHelper] = useState("");


  const [titreColor, setTitreColor] = useState('primary');
  const [contenuColor, setContenuColor] = useState('primary');
  const [lieuColor, setLieuColor] = useState('primary');
  const [lienColor, setLienColor] = useState('primary');
  const [imageColor, setImageColor] = useState('primary');

  // à la soumission du form
  const handleSubmit = async (event) => {
    event.preventDefault()

    const token = localStorage.getItem('jwtToken')

    if (titre === '') {
      setTitreError(true)
      setTitreHelper('Ce champ est obligatoire.')
      setTitreColor('secondary')
    }
    if (contenu === '') {
      setContenuError(true)
      setContenuHelper('Ce champ est obligatoire.')
      setContenuColor('secondary')
    }

    if (lieu === '') {
      setLieuError(true)
      setLieuHelper('Ce champ est obligatoire.')
      setLieuColor('secondary')
    }

    if (lien === '') {
      setLienError(true)
      setLienHelper('Ce champ est obligatoire.')
      setLienColor('secondary')
    }

    const formData = new FormData()

    formData.append('title', titre)
    formData.append('content', contenu)
    formData.append('location', lieu)
    formData.append('link', lien)
    formData.append('image', actionImage)
    formData.append('id', user._id)
    formData.append('firstName', user.firstName)
    formData.append('lastName', user.lastName)
    formData.append('email', user.email)

    axios
      .post(`${process.env.REACT_APP_API_URL}api/actions/add`, formData,
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
      )
      .then(function () {
        window.location.reload()
        setContenuHelper("L'article a été publié avec succès!")
        // setTitre("");
        // setSoustitre("");
        // setContenu("");
        // setImageNom("Choisissez une image");
      })
      .catch(function (Error) {
        console.log(Error)
        setContenuHelper("L'article n'a pas pu être ajouté.")
      })
  }

  return (
    <Box sx={{ flexGrow: 1, width: '80%', mx: 'auto' }}>
      {/** Titre création article */}
      <ThemeProvider theme={ThemeTitres}>
        <Typography
          variant="h1"
          color="primary.main"
          sx={{ mt: 4, fontSize: '2rem' }}
        >
          Créer une nouvelle action
        </Typography>
      </ThemeProvider>
      <Divider sx={{ my: 4 }} />
      {/** Form pour créer nouvel article */}
      <Box
        component="form"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '600px',
          '& .MuiTextField-root': { m: 1 },
          '& .MuiButton-root': { m: 1 },
          justifyContent: 'center',
          mx: 'auto',
          encType: 'multipart/form-data',
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          autoFocus
          required
          label="Titre"
          value={titre}
          onChange={(event) => {
            setTitre(event.target.value)
          }}
          error={titreError}
          color={titreColor}
          helperText={titreHelper}
        />

        <TextField
          required
          label="Contenu"
          multiline
          rows={8}
          onChange={(event) => {
            setContenu(event.target.value)
          }}
          error={contenuError}
          color={contenuColor}
          helperText={contenuHelper}
        />

        <TextField
          label="Lieu"
          onChange={(event) => {
            setLieu(event.target.value)
          }}
          error={lieuError}
          color={lieuColor}
          helperText={lieuHelper}
        />

        <TextField
          label="Lien carte"
          onChange={(event) => {
            setLien(event.target.value)
          }}
          error={lienError}
          color={lienColor}
          helperText={lienHelper}
        />

        {/** Option ajout image */}
        <label htmlFor="contained-button-file2">
          <Input
            accept=".jpg,.jpeg,.png"
            id="contained-button-file2"
            type="file"
            filename="imageNomAction"
            onChange={(event) => {
              setImageNomAction(event.target.value);
              setActionImage(event.target.files[0]);
            }}
          />

          <Button
            variant="contained"
            component="span"
            endIcon={<PhotoCamera />}
            sx={{ color: 'white' }}
          >
            Image
          </Button>
          <Typography variant="caption" gutterBottom>
            {imageNomAction}
          </Typography>
        </label>

        <Button
          type="submit"
          variant="contained"
          sx={{ color: 'white' }}
          size="large"
        >
          Publier
        </Button>
      </Box>
    </Box>
  )
}

export default CreationAction
