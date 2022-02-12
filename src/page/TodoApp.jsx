import React from 'react'
import { Header } from '../layout/header'
import { Input } from '../component/input'
import { TodoItems } from '../component/todoItems'
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
  const handleCheck = React.useCallback(
    (checkedItem) => {
      const newItems = items.map((item) => {
        if (item === checkedItem) item.done = !item.done
        return item
      })
      setItems(newItems)
    },
    [items]
  )

  // 削除ボタンが押されたら、対応する要素を削除した配列を再構築
  const handleDelete = React.useCallback(
    (checkedItem) => {
      const newItems = items.filter((item) => item !== checkedItem)
      setItems(newItems)
    },
    [items]
  )

  return (
    <div className="h-screen w-screen overflow-hidden bg-yellow-50">
      {console.log('App')}
      <Header name={'Todoリスト'} />
      <Input handleAdd={handleAdd} handleClear={handleClear} />
      <TodoItems items={items} handleCheck={handleCheck} handleDelete={handleDelete} />
    </div>
  )
}
