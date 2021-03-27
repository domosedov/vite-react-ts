import React, { FC } from 'react'
import { useSnapshot } from 'valtio'
import { state, unsub } from '../../store'
import { Button } from '../ui/button'

export const Counter: FC = () => {
  const { count } = useSnapshot(state)
  return (
    <div className='p-4 bg-yellow-500 rounded'>
      <h2>Count: {count}</h2>
      <Button
        variant='green'
        onClick={() => {
          state.count++
        }}
      >
        Increment
      </Button>
      <Button variant='red' onClick={() => unsub()}>
        Unsub
      </Button>
      <div>{Math.random()}</div>
    </div>
  )
}
