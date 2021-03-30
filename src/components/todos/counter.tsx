import React, { FC, useEffect, useRef } from 'react'
import { useSnapshot } from 'valtio'
import { state, unsub } from '../../store'
import { Button } from '../ui/button'
import { interval } from '../../timer'

export const Counter: FC = () => {
  const { count } = useSnapshot(state)
  const countRef = useRef(Math.random())
  const renderCount = useRef(0)

  useEffect(() => {
    renderCount.current++
  })

  return (
    <div className='p-4 bg-yellow-500 rounded'>
      <h2>Count: {count}</h2>
      <Button pulse onClick={() => clearInterval(interval)} className='px-10'>
        Clear Interval
      </Button>
      <Button
        variant='green'
        size='big'
        onClick={() => {
          state.count++
        }}
      >
        Increment
      </Button>
      <Button variant='red' size='big' onClick={() => unsub()}>
        Unsub
      </Button>
      <Button size='big' onClick={() => (countRef.current = Math.random())}>
        Inc
      </Button>
      <div>{Math.random()}</div>
      <div>{countRef.current}</div>
      <h3>Render count {renderCount.current}</h3>
    </div>
  )
}
