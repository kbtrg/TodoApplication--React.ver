import React from 'react'
import { Header } from '../layout/header.jsx'
import { Input } from '../layout/input.jsx'
import { TodoItems } from '../component/todoItems.jsx'
import '../css/style--tailwind.css'

export const TodoApp = () => {
  const [items, setItems] = React.useState([])

  // ページ読み込み時にパースして、itemsにセット
  React.useEffect(() => {
    const json = localStorage.list
    if (json === undefined) return
    const parsedItems = JSON.parse(json)
    setItems(parsedItems.items)
  }, [])
  // itemsが更新された時にローカルストレージに保存
  React.useEffect(() => {
    localStorage.setItem('list', JSON.stringify({ items }))
  }, [items])

  // リストを一意に紐づけるキー
  const getKey = () => Math.random().toString(32).substring(2)

  // todoリスト要素の追加
  const handleAdd = (text) => setItems([...items, { key: getKey(), text, done: false }])

  // todoリスト要素の全消去
  const handleClear = () => setItems([])

  // 完了（戻る）ボタンが押されたら、doneを反転して再構築
  const handleCheck = (checkedItem) => {
    const newItems = items.map((item) => {
      if (item === checkedItem) item.done = !item.done
      return item
    })
    setItems(newItems)
  }

  // 削除ボタンが押されたら、対応する要素を削除した配列を再構築
  const handleDelete = (checkedItem) => {
    const newItems = items.filter((item) => item !== checkedItem)
    setItems(newItems)
  }

  return (
    <div className="overflow-hidden w-screen h-screen bg-yellow-50">
      <Header name={'Todoリスト'} />
      <Input HandleAdd={handleAdd} HandleClear={handleClear} />
      <TodoItems items={items} HandleCheck={handleCheck} HandleDelete={handleDelete} />
    </div>
  )
}
