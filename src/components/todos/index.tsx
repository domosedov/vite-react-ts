import React, { FC, useReducer } from 'react'
import { Fade } from '../ui/animation/fade'
import { Button } from '../ui/button'
import { Age } from './age'
import { Counter } from './counter'
import { List } from './list'
import { Name } from './name'
import { TodoForm } from './new-todo'

export const Todos: FC = () => {
  const [open, toggle] = useReducer(v => !v, false)
  return (
    <div className='shadow-2xl'>
      <Button onClick={toggle}>Open</Button>
      <Fade show={open}>
        <p className='w-[320px]'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. A quo
          perspiciatis natus quaerat, voluptatibus ex ipsum libero provident
          consequuntur. Sunt laboriosam vero inventore reprehenderit ad! Quia
          autem id rem fuga.
        </p>
      </Fade>
      <Counter />
      <Name />
      <Age />
      <TodoForm />
      <List />
    </div>
  )
}
