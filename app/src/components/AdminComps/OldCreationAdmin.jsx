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
import { AuthContext } from '../../context/auth'
import axios from 'axios'
import Checkbox from '@mui/material/Checkbox'

function OldCreationAdmin() {
  // recup les infos user
  const { user } = useContext(AuthContext)
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

  const [EmailAdmin, setEmailAdmin] = useState('')
  const [Adminprenom, setAdminprenom] = useState('')
  const [AdminNom, setAdminNom] = useState('')
  const [AdminPassword, setAdminPassword] = useState('')
  const [ConfirmAdminPassword, setConfirmAdminPassword] = useState('')

  const [EmailAdminError, setEmailAdminError] = useState(false)
  const [AdminprenomError, setAdminprenomError] = useState(false)
  const [AdminNomError, setAdminNomError] = useState(false)
  const [AdminPasswordError, setAdminPasswordError] = useState(false)
  const [ConfirmAdminPasswordError, setConfirmAdminPasswordError] =
    useState(false)

  const [EmailAdminHelper, setEmailAdminHelper] = useState('')
  const [AdminprenomHelper, setAdminprenomHelper] = useState('')
  const [AdminNomHelper, setAdminNomHelper] = useState('')
  const [AdminPasswordHelper, setAdminPasswordHelper] = useState('')
  const [ConfirmAdminPasswordHelper, setConfirmAdminPasswordHelper] =
    useState('')

  const [EmailAdminColor, setEmailAdminColor] = useState('primary')
  const [AdminprenomColor, setAdminprenomColor] = useState('primary')
  const [AdminNomColor, setAdminNomColor] = useState('primary')
  const [AdminPasswordColor, setAdminPasswordColor] = useState('primary')
  const [ConfirmAdminPasswordColor, setConfirmAdminPasswordColor] =
    useState('primary')

  const [EmailBackendError, setEmailBackendError] = useState('')

  // à la soumission du form
  const handleSubmit = async (event) => {
    event.preventDefault()
    const token = localStorage.getItem('jwtToken')

    if (EmailAdmin === '') {
      setEmailAdminError(true)
      setEmailAdminHelper('Ce champ est obligatoire.')
      setEmailAdminColor('secondary')
    }
    if (Adminprenom === '') {
      setAdminprenomError(true)
      setAdminprenomHelper('Ce champ est obligatoire.')
      setAdminprenomColor('secondary')
    }
    if (AdminNom === '') {
      setAdminNomError(true)
      setAdminNomHelper('Ce champ est obligatoire.')
      setAdminNomColor('secondary')
    }
    if (AdminPassword === '') {
      setAdminPasswordError(true)
      setAdminPasswordHelper('Ce champ est obligatoire.')
      setAdminPasswordColor('secondary')
    }
    if (ConfirmAdminPassword !== AdminPassword) {
      setConfirmAdminPasswordError(true)
      setConfirmAdminPasswordHelper('Le mot de passe ne correspond pas')
      setConfirmAdminPasswordColor('secondary')
    }

    const data = new FormData()
    data.append('firstName', 'clara')
    data.append('lastName', AdminNom)
    data.append('email', EmailAdmin)
    data.append('password', AdminPassword)

    /* console.log(Adminprenom) */
    if (ConfirmAdminPassword === AdminPassword) {
      axios
        .post(
          `${process.env.REACT_APP_API_URL}api/users`,
          {
            firstName: Adminprenom,
            lastName: AdminNom,
            password: AdminPassword,
            email: EmailAdmin,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then(function () {
          window.location.reload()
          setEmailAdminHelper("L'admin à été ajouté avec succès")
        })
        .catch(function (error) {
          console.log(error)
          setEmailBackendError(error.response.data.message)
          setEmailAdminHelper("L'admin n'a pas pu etre ajouté")
        })
    } else {
      setConfirmAdminPasswordHelper('Le mot de passe ne correspond pas')
    }
  }

  const AdminPasswordChange = (e) => {
    setAdminPassword(e)
    if (
      e === '' ||
      // le mot de passe doit contenir au moins 8 caractères, une min, une maj, un chiffre ainsi qu'un caractère spécial
      !e.match(/^(?=.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/)
    ) {
      setAdminPasswordError(true)
      setAdminPasswordColor('secondary')
      setAdminPasswordHelper(
        'Le mot de passe doit contenir au moins 8 caractères dont au moins un chiffre, une majuscule, une minuscule et un caractère spécial. '
      )
    } else {
      setAdminPasswordError(false)
      setAdminPasswordHelper('')
      setAdminPasswordColor('primary')
    }
  }

  return (
    <Box sx={{ flexGrow: 1, width: '80%', mx: 'auto' }}>
      <ThemeProvider theme={ThemeTitres}>
        <Typography
          variant="h1"
          color="primary.main"
          sx={{ mt: 4, fontSize: '2rem' }}
        >
          Ajouter un Admin
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
        <Typography
          variant="h2"
          color="primary.main"
          sx={{ mt: 2, ml: 1, mb: 2, fontSize: '1.5rem' }}
        >
          Information du futur Administrateur :
        </Typography>
        <TextField
          autoFocus
          required
          label="Email du futur administrateur"
          value={EmailAdmin}
          onChange={(event) => {
            setEmailAdmin(event.target.value)
          }}
          error={EmailAdminError}
          color={EmailAdminColor}
          helperText={EmailAdminHelper}
        />
        <TextField
          required
          label="Prenom du futur administrateur"
          value={Adminprenom}
          onChange={(event) => {
            setAdminprenom(event.target.value)
          }}
          error={AdminprenomError}
          color={AdminprenomColor}
          helperText={AdminprenomHelper}
        />
        <TextField
          required
          label="Nom du futur administrateur"
          value={AdminNom}
          onChange={(event) => {
            setAdminNom(event.target.value)
          }}
          error={AdminNomError}
          color={AdminNomColor}
          helperText={AdminNomHelper}
        />
        <Typography
          variant="h2"
          color="primary.main"
          sx={{ mt: 2, ml: 1, mb: 1, fontSize: '1.5rem' }}
        >
          Mot de passe :
        </Typography>
        <Typography
          fontWeight="bold"
          variant="h3"
          color="secondary.main"
          sx={{ mt: 2, ml: 1, mb: 2, fontSize: '1rem' }}
        >
          Attention ! Le mot de passe doit contenir au minimum : 8 caractères,
          un caractère spécial, une majuscule, une minuscule, un chiffre.
        </Typography>
        <TextField
          required
          label="Mot de passe du futur administrateur"
          value={AdminPassword}
          onChange={(e) => AdminPasswordChange(e.target.value)}
          error={AdminPasswordError}
          color={AdminPasswordColor}
          helperText={AdminPasswordHelper}
        />
        <TextField
          required
          label="Confirmer le mot de passe"
          value={ConfirmAdminPassword}
          onChange={(event) => {
            setConfirmAdminPassword(event.target.value)
          }}
          error={ConfirmAdminPasswordError}
          color={ConfirmAdminPasswordColor}
          helperText={ConfirmAdminPasswordHelper}
        />

        <Typography
          variant="h3"
          color="primary.main"
          fontWeight="bold"
          sx={{ mt: 2, ml: 1, mb: 2, fontSize: '1rem' }}
        >
          Notez bien le mot de passe et l'email du futur administrateur avant de
          confirmer.
        </Typography>

        <Typography
          variant="h3"
          color="secondary.main"
          fontWeight="bold"
          sx={{ mt: 2, ml: 1, mb: 2, fontSize: '1rem' }}
        >
          {EmailBackendError}
        </Typography>

        <Button
          type="submit"
          variant="contained"
          sx={{ color: 'white' }}
          size="large"
        >
          Définir un nouvel administrateur
        </Button>
      </Box>
    </Box>
  )
}

export default OldCreationAdmin
