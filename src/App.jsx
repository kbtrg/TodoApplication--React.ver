import React from 'react'
import { Router } from './router/Router'
import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'

export default function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Router />
      </RecoilRoot>
    </BrowserRouter>
  )
}
