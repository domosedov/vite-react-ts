import React, { FC } from 'react'
import { useSnapshot } from 'valtio'
import { state } from '../../store'

export const Age: FC = () => {
  const {
    user: { age },
  } = useSnapshot(state)
  return (
    <div className='p-2 bg-blue-500'>
      <h2>Age: {age}</h2>
      <div>{Math.random()}</div>
    </div>
  )
}
