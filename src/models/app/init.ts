import { forward } from 'effector'
import { $initialized, init, AppGate, fetchTodosFx, fetchUserFx } from './'

$initialized.on(init, () => true)

forward({
  from: AppGate.open,
  to: [fetchTodosFx, fetchUserFx],
})
