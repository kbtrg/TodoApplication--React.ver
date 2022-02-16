import React from 'react'
import { TodoButton } from './buttons/todoButton'

/* Todoリスト */
export const TodoItems = React.memo((props) => {
  // メイン関数のonCheckへ渡す
  const handleCheck = (checkedItem) => {
    props.handleCheck(checkedItem)
  }
  const handleDelete = (checkedItem) => {
    props.handleDelete(checkedItem)
  }
  // items.doneの値に応じて、リスト要素挿入
  const insertItem = (bool) => {
    const filteredItems = props.items.filter((item) => {
      return item.done === bool
    })
    const element = filteredItems.map((item) => {
      return (
        <li className="my-1 flex justify-between bg-white text-xl" key={item.key}>
          <p className="w-48 break-words text-base">{item.text}</p>
          <div className="my-auto">
            {item.done === false ? (
              <TodoButton onClick={() => handleCheck(item)} innerText={'完了'} />
            ) : (
              <TodoButton onClick={() => handleCheck(item)} innerText={'戻る'} />
            )}
            <TodoButton onClick={() => handleDelete(item)} innerText={'削除'} />
          </div>
        </li>
      )
    })
    return element
  }

  return (
    <>
      <div className="my-10 flex w-screen justify-center">
        <div className="m-1 w-72 bg-orange-100 p-1">
          <h3>UnDo</h3>
          <ul>{insertItem(false)}</ul>
        </div>
        <div className="m-1 w-72 bg-blue-100 p-1">
          <h3>Done</h3>
          <ul>{insertItem(true)}</ul>
        </div>
      </div>
    </>
  )
})
TodoItems.displayName = 'TodoItems'
