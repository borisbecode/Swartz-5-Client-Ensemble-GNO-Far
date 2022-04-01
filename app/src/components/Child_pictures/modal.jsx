import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import SettingsIcon from '@mui/icons-material/Settings'
import Settings from './settings'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {xs:"300", sm:"400", md:"auto", lg:"auto"},
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 15,
  p: 4,
}

export default function BasicModal() {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div>
      <SettingsIcon onClick={handleOpen} sx={{color:"primary.main", mt:2}}/>

      <Modal
        
        open={open}
        onClose={handleClose}
        aria-labelledby="ajout photo d'enfant"
        aria-describedby="l'admin peut ajouter ici les photos d'enfants pour la page principale"
      >
        <Box sx={style}>
        <Settings />
          {/*  <Settingstest /> */}
        </Box>
          
        
      </Modal>
    </div>
  )
}
