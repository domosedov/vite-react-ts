import { proxy, subscribe } from 'valtio'
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
