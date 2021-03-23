import { createDomain, restore } from 'effector'
import { createGate, useStore } from 'effector-react'
import { combineEvents } from 'patronum/combine-events'
import { Todo, User } from './types'

export const app = createDomain('app')

export const $initialized = app.createStore(false)

export const fetchUserFx = app.createEffect<void, User>(async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
  return await response.json()
})

export const fetchTodosFx = app.createEffect<void, Todo[]>(async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos')
  return await response.json()
})

export const $user = restore(fetchUserFx.doneData, null)
export const $todos = restore(fetchTodosFx.doneData, [])

export const init = combineEvents({
  events: {
    fetchUser: fetchUserFx.finally,
    fetchTodos: fetchTodosFx.finally,
  },
})

export const AppGate = createGate('App')

export const useInit = () => useStore($initialized)
export const useUser = () => useStore($user)
export const useTodos = () => useStore($todos)
