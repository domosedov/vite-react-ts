import { proxy, subscribe, useSnapshot } from 'valtio'
import { subscribeKey } from 'valtio/utils'

export const state = proxy({
  count: 0,
  text: 'Hello',
  user: { name: 'Alex', age: 28 },
})

export const unsub = subscribeKey(state, 'count', c => {
  if (c > 10) {
    state.count = 0
  }
})

subscribeKey(state, 'text', t => console.log('Changed text:', t))

subscribe(state.user, () => console.log('User name changed:', state.user.name))

/**
 * TodoApp
 */

type Todo = {
  id: number
  title: string
  completed: boolean
}

type TodoStore = {
  todos: Todo[]
  todoTitle: Todo['title']
}

export const todoStore = proxy<TodoStore>({
  todos: [],
  todoTitle: '',
})

export const todoActions = {
  add(todo: Omit<Todo, 'id' | 'completed'>) {
    todoStore.todos.push({ ...todo, id: Date.now(), completed: false })
  },
  setTitle(title: Todo['title']) {
    todoStore.todoTitle = title
  },
  toggle(id: Todo['id']) {
    const index = todoStore.todos.findIndex(todo => todo.id === id)
    if (index !== -1)
      todoStore.todos[index].completed = !todoStore.todos[index].completed
  },
}

export const useTodos = () => useSnapshot(todoStore)
