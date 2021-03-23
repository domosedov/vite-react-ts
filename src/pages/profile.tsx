import React, { FC } from 'react'
import { Navigate } from 'react-router'
import { useUser } from '../models/app'

export const Profile: FC = () => {
  const user = useUser()

  return user ? (
    <div>
      <h1>This is Profile Page</h1>
    </div>
  ) : (
    <Navigate to='login' />
  )
}
