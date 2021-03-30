import { state } from './store'

export const interval = setInterval(() => {
  ++state.count
}, 500)
