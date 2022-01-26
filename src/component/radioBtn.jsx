import React from 'react'

export const RadioBtn = () => {
  const [val, setVal] = React.useState('cat')

  const handleChange = (e) => setVal(e.target.value)

  return (
    <section className="mt-4 bg-white">
      <h2>ラジオボタン</h2>
      <label>
        <input type="radio" value="cat" onChange={handleChange} checked={val === 'cat'} />
        猫派
      </label>
      <label>
        <input type="radio" value="dog" onChange={handleChange} checked={val === 'dog'} />
        犬派
      </label>
      <p>選択：{val}</p>
    </section>
  )
}
