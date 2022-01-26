import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <>
      <h1 className="text-2xl">homeページです</h1>
      <Link to="/todo" style={{ display: 'block', margin: '20px 0 5px', background: '#dcf7ee' }}>
        TodoApp
      </Link>
      <Link to="/anger" style={{ display: 'block', margin: '5px 0', background: '#facec5' }}>
        アンガーログ
      </Link>
      <Link to="/stress" style={{ display: 'block', margin: '5px 0', background: '#f4f7dc' }}>
        ストレスログ
      </Link>
      <Link to="/success" style={{ display: 'block', margin: '5px 0', background: '#aef2cf' }}>
        サクセスログ
      </Link>
      <Link to="/dummy" style={{ display: 'block', margin: '5px 0', background: '#cfcfcf' }}>
        ダミー（Page404へ）
      </Link>
    </>
  )
}
