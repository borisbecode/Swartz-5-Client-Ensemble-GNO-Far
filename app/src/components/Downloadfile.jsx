import React from 'react'
import { saveAs } from 'file-saver'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

import Typography from '@mui/material/Typography'

import Button from '@mui/material/Button'

function Downloadfile() {
  const saveFile = () => {
    saveAs('/document_telechargeable/parrainage.pdf', 'parrainage.pdf')
  }
  return (
    <Box>
      <Grid align="center" sx={{ mt: 5 }}>
        {' '}
        <Button
          variant="contained"
          sx={{ bgcolor: 'secondary.main', color: 'white', m: 4 }}
          onClick={saveFile}
        >
          <Typography>Telecharger le PDF</Typography>
        </Button>
      </Grid>
    </Box>
  )
}

export default Downloadfile
