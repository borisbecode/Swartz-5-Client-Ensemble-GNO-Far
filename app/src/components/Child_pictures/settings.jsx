import { Box } from '@mui/material/node_modules/@mui/system'
import React, { useState } from 'react'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import axios from 'axios'
import TextField from '@mui/material/TextField'

class Settings extends React.Component {
  state = {
    Lefichier: null,
    NomDeLenfant: null,
  }

  fichierAEnvoyer = (event) => {
    this.setState({
      Lefichier: event.target.files[0],
    })
  }

  Nomdelenfant = (event) => {
    this.setState({
      NomDeLenfant: event.target.value,
    })
  }

  EnvoiDuFichier = () => {
    console.log(this.state.NomDeLenfant)
    const formulaire = new FormData()
    formulaire.append('image', this.state.Lefichier, this.state.Lefichier.name)
    formulaire.append('childName', this.state.NomDeLenfant)

    axios
      .post(`http://localhost:5000/api/parraines/add`, formulaire)
      .then((res) => {
        console.log(res)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  render() {
    return (
      <Box>
        {' '}
        <input
          style={{ display: 'none' }}
          type="file"
          onChange={this.fichierAEnvoyer}
          ref={(fileInput) => (this.fileInput = fileInput)}
        />{' '}
        <Button
          onClick={() => this.fileInput.click()}
          variant="contained"
          sx={{ bgcolor: 'secondary.main', color: 'white', mt: 5, mr: 3 }}
        >
          <Typography> Choisir une image </Typography>{' '}
        </Button>
        <input type="text" onChange={this.Nomdelenfant} />{' '}
        {/*    <TextField
          required
          label="Nom de l'enfant"
          multiline
          rows={2}
          onChange={(event) => {
            setContenu(event.target.value)
          }}
        /> */}
        <Button
          onClick={this.EnvoiDuFichier}
          variant="contained"
          sx={{ bgcolor: 'secondary.main', color: 'white', mt: 5, ml: 3 }}
        >
          <Typography> Valider </Typography>{' '}
        </Button>
      </Box>
    )
  }
}

export default Settings
