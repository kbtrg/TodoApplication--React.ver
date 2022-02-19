import React from 'react'

export const CheckBox = () => {
  const [val, setVal] = React.useState(['js'])

  const handleChange = (e) => {
    if (val.includes(e.target.value)) {
      // すでに含まれていれば OFF したと判断し、
      // イベント発行元を除いた配列を set し直す
      setVal(val.filter((item) => item !== e.target.value))
    } else {
      // そうでなければ ON と判断し、
      // イベント発行元を末尾に加えた配列を set し直す
      setVal([...val, e.target.value])
    }
  }

  return (
    <section className="mt-4 bg-white">
      <h2>チェックボックス</h2>
      <label>
        <input type="checkbox" value="js" onChange={handleChange} checked={val.includes('js')} />
        JavaScript
      </label>
      <label>
        <input type="checkbox" value="python" onChange={handleChange} checked={val.includes('python')} />
        Python
      </label>
      <label>
        <input type="checkbox" value="java" onChange={handleChange} checked={val.includes('java')} />
        Java
      </label>
      <p>選択値：{val.join(', ')}</p>
    </section>
  )
}
