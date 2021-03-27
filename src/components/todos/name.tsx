import React, { FC } from 'react'
import { useSnapshot } from 'valtio'
import { state } from '../../store'

export const Name: FC = () => {
  const { user } = useSnapshot(state)
  return (
    <div className='p-2 bg-green-500'>
      <h2>Name: {user.name}</h2>
      Change name:
      <input
        type='text'
        value={user.name}
        className='border'
        onChange={({ target: { value } }) => {
          state.user.name = value
        }}
      />
      Change age:
      <input
        type='number'
        value={user.age}
        className='border'
        onChange={({ target: { value } }) => {
          state.user.age = Number(value)
        }}
      />
      <div>{Math.random()}</div>
    </div>
  )
}
