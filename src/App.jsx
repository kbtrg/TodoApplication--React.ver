import React from 'react'
import { Router } from './router/Router'
import { BrowserRouter } from 'react-router-dom'
import Recoil from 'recoil'

export default function App() {
  return (
    <BrowserRouter>
      <Recoil.RecoilRoot>
        <Router />
      </Recoil.RecoilRoot>
    </BrowserRouter>
  )
}
