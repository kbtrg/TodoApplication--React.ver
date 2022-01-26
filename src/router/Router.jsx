import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../page/Home.jsx'
import { TodoApp } from '../page/TodoApp.jsx'
import { Anger } from '../page/Anger.jsx'
import { Stress } from '../page/Stress.jsx'
import { Success } from '../page/Success.jsx'
import { Page404 } from '../page/Page404.jsx'

export const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="todo" element={<TodoApp />} />
      <Route exact path="anger" element={<Anger />} />
      <Route exact path="stress">
        <Route path="" element={<Stress />} />
        {/* 下位ページの記載 */}
      </Route>
      <Route exact path="success" element={<Success />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  )
}
