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

function CreationAdmin() {
  // recup les infos user
  /*  const { user } = useContext(AuthContext)
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

  // à la soumission du form
  const handleSubmit = async (event) => {
    event.preventDefault()

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

    const formData = new FormData()
    formData.append('firstName', Adminprenom)
    formData.append('lastName', AdminNom)
    formData.append('email', EmailAdmin)
    formData.append('password', AdminPassword)

    console.log(Adminprenom)

    axios
      .post(`${process.env.REACT_APP_API_URL}api/users`, formData)
      .then(function () {
        window.location.reload()
        setEmailAdminHelper("L'admin à été ajouté avec succès")
      })
      .catch(function (error) {
        console.log(error)
        setEmailAdminHelper("L'admin n'a pas pu etre ajouté")
      })
  } */

  // recup les infos user
  const { user } = useContext(AuthContext)

  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })
  const [error, setError] = useState('')

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const token = localStorage.getItem('jwtToken')
    try {
      const url = 'http://localhost:5000/api/users'
      const { data: res } = await axios.post(url, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message)
      }
    }
  }

  /*   const AdminPasswordChange = (e) => {
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
  } */

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

      <form onSubmit={handleSubmit}>
        <Box
          encType="multipart/form-data"
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
            label="Email du futur administrateur"
            autoFocus
            type="text"
            name="email"
            onChange={handleChange}
            value={data.email}
            required
          />
          <TextField
            label="Nom du futur administrateur"
            autoFocus
            type="text"
            name="lastName"
            onChange={handleChange}
            value={data.lastName}
            required
          />
          <TextField
            label="Prenom du futur administrateur"
            autoFocus
            type="text"
            name="firstName"
            onChange={handleChange}
            value={data.firstName}
            required
          />
          <Typography
            variant="h2"
            color="primary.main"
            sx={{ mt: 2, ml: 1, mb: 1, fontSize: '1.5rem' }}
          >
            Mot de passe :
          </Typography>
          <Typography
            variant="h3"
            color="secondary.main"
            sx={{ mt: 2, ml: 1, mb: 2, fontSize: '1rem' }}
          >
            Attention ! Le mot de passe doit contenir au minimum : 8 caractères,
            un caractère spécial, une majuscule, une minuscule, un chiffre.
          </Typography>
          <TextField
            label="Mot de passe du futur administrateur"
            autoFocus
            type="text"
            name="password"
            onChange={handleChange}
            value={data.password}
            required
          />

          <Button
            type="submit"
            variant="contained"
            sx={{ color: 'white' }}
            size="large"
          >
            Définir un nouvel administrateur
          </Button>

          {/*   {error && <div className="error_msg">{error}</div>}
          <button type="submit" className="green_btn">
            Sign Up
          </button> */}
        </Box>
      </form>
    </Box>
  )
}

export default CreationAdmin
