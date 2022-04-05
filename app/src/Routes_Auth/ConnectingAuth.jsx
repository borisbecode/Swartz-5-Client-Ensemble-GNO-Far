import React, { useContext } from 'react'

import { Navigate, useLocation, Outlet } from 'react-router-dom'

import { AuthContext } from '../context/auth'

const ConnectingAuth = () => {
  const { user } = useContext(AuthContext)
  const location = useLocation()

  return user ? (
    <Navigate to="/" state={{ from: location }} replace />
  ) : (
    <Outlet />
  )
}

export default ConnectingAuth
