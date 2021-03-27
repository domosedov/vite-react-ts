import { state } from './store'

setInterval(() => {
  ++state.count
}, 500)
