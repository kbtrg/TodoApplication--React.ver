import Recoil from 'recoil'

export const todoItems = Recoil.atom({
  key: 'todoItems',
  default: []
})
