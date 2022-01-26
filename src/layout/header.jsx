import React from 'react'
import { Link } from 'react-router-dom'

/* ヘッダー */
export const Header = (props) => {
  return (
    <header>
      <Link to="/">Homeへ</Link>
      <div className={'p-2 mt-10 mb-6 bg-lime-300' + ''}>
        <h2 className="text-lg font-bold">{props.name}</h2>
      </div>
    </header>
  )
}
