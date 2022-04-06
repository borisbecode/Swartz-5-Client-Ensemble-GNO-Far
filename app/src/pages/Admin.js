import React, { useContext } from 'react'
import Box from '@mui/material/Box'
import CreationArticle from '../components/AdminComps/CreationArticle'
import BannerAdmin from '../components/AdminComps/BannerAdmin'
import GestionArticles from '../components/AdminComps/GestionArticles'
import CreationAction from '../components/AdminComps/CreationAction'
import { AuthContext } from '../context/auth'
import GestionActions from '../components/AdminComps/GestionActions'
import CreationAdmin from '../components/AdminComps/CreationAdmin'
import OldCreationAdmin from '../components/AdminComps/OldCreationAdmin'

const Admin = () => {
  const { user } = useContext(AuthContext)

  return (
    <Box id="accueil" sx={{ width: '100%', m: 0 }}>
      <BannerAdmin />
      <CreationArticle />
      <CreationAction />
      <GestionArticles />
      <GestionActions />
      {/*   <CreationAdmin /> */}
      <OldCreationAdmin />
    </Box>
  )
}

export default Admin
