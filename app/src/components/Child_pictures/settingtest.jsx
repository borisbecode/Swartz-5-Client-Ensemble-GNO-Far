import { Box } from '@mui/material/node_modules/@mui/system'
import React, { useState } from 'react'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import axios from 'axios'
import TextField from '@mui/material/TextField'

function Settingstest() {
  const [Image, setImage] = useState('')
  const [Nomdelenfant, setNomDeLenfant] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()

    const formData = new FormData()

    formData.append('image', Image)
    formData.append('childName', Nomdelenfant)

    axios
      .post(`http://localhost:5000/api/parraines/add`, formData)
      .then((res) => {
        console.log(res)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  return (
    <div>
      {' '}
      <Box>
        {' '}
        <input
          style={{ display: 'none' }}
          type="file"
          onChange={(event) => {
            setImage(event.target.files[0])
          }}
        />{' '}
        <Button
          onClick={() => this.fileInput.click()}
          variant="contained"
          sx={{ bgcolor: 'secondary.main', color: 'white', mt: 5, mr: 3 }}
        >
          <Typography> Choisir une image </Typography>{' '}
        </Button>
        <input
          type="text"
          onChange={(event) => {
            setNomDeLenfant(event.target.value)
          }}
        />{' '}
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
    </div>
  )
}

export default Settingstest
