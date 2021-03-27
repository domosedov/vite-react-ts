import React, { FC } from 'react'
import { Age } from './age'
import { Counter } from './counter'
import { Name } from './name'

export const Todos: FC = () => {
  return (
    <div className='shadow-2xl'>
      <Counter />
      <Name />
      <Age />
    </div>
  )
}
