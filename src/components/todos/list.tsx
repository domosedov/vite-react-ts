import React, { FC } from 'react'
import { todoActions, useTodos } from '../../store'
import cn from 'clsx'

export const List: FC = () => {
  const { todos } = useTodos()
  return (
    <div className='p-4 bg-indigo-500 rounded-md'>
      <ul className='space-y-2'>
        {todos.map(({ id, title, completed }) => (
          <li
            className={cn(
              'cursor-pointer text-white p-1 rounded',
              completed ? 'bg-green-500' : 'bg-red-500',
            )}
            key={id}
            onClick={() => todoActions.toggle(id)}
          >
            {title}
          </li>
        ))}
      </ul>
      <div>{Math.random()}</div>
    </div>
  )
}
