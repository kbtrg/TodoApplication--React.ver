import React from 'react'
import { Link } from 'react-router-dom'

export const Page404 = () => {
  return (
    <>
      <h1 className="text-2xl mb-8">Page404</h1>
      <Link to="/">Homeへ</Link>
    </>
  )
}
