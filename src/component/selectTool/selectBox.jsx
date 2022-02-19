import React from 'react'

export const SelectBox = () => {
  const [val, setVal] = React.useState('react')

  const handleChange = (e) => setVal(e.target.value)

  return (
    <section className="mt-4 bg-white">
      <h2>セレクトボックス</h2>
      <select value={val} onChange={handleChange}>
        <option value="react">React</option>
        <option value="vue">Vue.js</option>
        <option value="angular">Angular</option>
      </select>
      <p>選択値：{val}</p>
    </section>
  )
}
