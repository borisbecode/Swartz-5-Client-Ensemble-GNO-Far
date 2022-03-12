import React from 'react'

import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'

import Typography from '@mui/material/Typography'
import { ThemeProvider } from '@mui/material/styles'
import { ThemeTitres } from '../../theme/ThemeTitres'
import Grid from '@mui/material/Grid'
import './child.css'
import Button from '@mui/material/Button'
import SettingsIcon from '@mui/icons-material/Settings'

const Settings = () => {
  return (
    <Box sx={{ flexDirection: 'row-reverse' }}>
      <Button color="primary">
        {' '}
        <SettingsIcon />
      </Button>
    </Box>
  )
}

export default Settings
