import React, { FC, FormEvent } from 'react'
import { todoActions, useTodos } from '../../store'

export const TodoForm: FC = () => {
  const { todoTitle } = useTodos()
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    todoActions.add({ title: todoTitle })
    todoActions.setTitle('')
  }
  return (
    <div className='p-4 bg-pink-400'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          className='p-1 bg-pink-100 border border-pink-700'
          value={todoTitle}
          onChange={({ target: { value } }) => todoActions.setTitle(value)}
        />
      </form>
      <div>{Math.random()}</div>
    </div>
  )
}
