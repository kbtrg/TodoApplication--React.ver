import React from 'react'

/* Todoリスト */
export const TodoItems = (props) => {
  // メイン関数のonCheckへ渡す
  const handleCheck = (checkedItem) => {
    props.HandleCheck(checkedItem)
  }
  const handleDelete = (checkedItem) => {
    props.HandleDelete(checkedItem)
  }
  // items.doneの値に応じて、リスト要素挿入
  const insertItem = (bool) => {
    const filteredItems = props.items.filter((item) => {
      return item.done === bool
    })
    const element = filteredItems.map((item) => {
      return (
        <li className="flex justify-between text-xl my-1 bg-white" key={item.key}>
          <p className="text-base">{item.text}</p>
          <div className="buttons">
            {item.done === false ? (
              <button
                className="text-xs mx-1 my-auto border-solid border-2 border-lime-300 rounded-lg"
                onClick={() => handleCheck(item)}
              >
                完了
              </button>
            ) : (
              <button
                className="text-xs mx-1 my-auto border-solid border-2 border-lime-300 rounded-lg"
                onClick={() => handleCheck(item)}
              >
                戻る
              </button>
            )}
            <button
              className="text-xs mx-1 my-auto border-solid border-2 border-lime-300 rounded-lg"
              onClick={() => handleDelete(item)}
            >
              削除
            </button>
          </div>
        </li>
      )
    })
    return element
  }

  return (
    <div className="my-10 flex justify-center w-screen">
      <div className="bg-orange-100 m-1 p-1 w-72">
        <h3>UnDo</h3>
        <ul>{insertItem(false)}</ul>
      </div>
      <div className="bg-blue-100 m-1 p-1 w-72">
        <h3>Done</h3>
        <ul>{insertItem(true)}</ul>
      </div>
    </div>
  )
}
