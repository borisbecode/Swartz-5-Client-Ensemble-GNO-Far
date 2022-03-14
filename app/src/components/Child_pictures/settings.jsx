import { Box } from '@mui/material/node_modules/@mui/system'
import React from 'react'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import axios from 'axios'

class Settings extends React.Component {
  state = {
    Lefichier: null,
  }
  fichierAEnvoyer = (event) => {
    this.setState({
      Lefichier: event.target.files[0],
    })
  }

  EnvoiDuFichier = () => {
    const formulaire = new FormData()
    formulaire.append('image', this.state.Lefichier, this.state.Lefichier.name)

    axios
      .post(`http://localhost:5000/....`)
      .then((res) => {
        console.log(res)
      })
      .catch(function (error) {
        console.log(error)
        setContenuHelper("L'article n'a pas pu être ajouté.")
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
