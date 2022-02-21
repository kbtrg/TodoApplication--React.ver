import React from 'react'
import axios from 'axios'
import Recoil from 'recoil'
import { todoItems } from '../globalState'
//import { TodoItemsContext } from '../component/provider/TodoItemsProvider'
import { Header } from '../component/header'
import { Input } from '../component/input'
import { TodoItems } from '../component/itemDisplay'
import '../css/style--tailwind.css'

export const TodoApp = () => {
  //const [items, setItems] = React.useState([])
  const [items, setItems] = Recoil.useRecoilState(todoItems)
  //const [items, setItems] = React.useContext(TodoItemsContext)

  /*
  // ローカルストレージを用いて、データの保存・取得
  // ページ読み込み時にパースして、itemsにセット
  React.useEffect(() => {
    const json = localStorage.list
    if (json === undefined) return
    const parsedItems = JSON.parse(json)
    console.log(parsedItems.items)
    setItems(parsedItems.items)
  }, [])
  // itemsが更新された時にローカルストレージに保存
  React.useEffect(() => {
    localStorage.setItem('list', JSON.stringify({ items }))
  }, [items])
  */

  // axiosで取得
  React.useEffect(async () => {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
      const filteredData = res.data.filter((data) => data.id < 20) // データ条件
      const loadedData = filteredData.map((data) => ({ key: getKey(), text: data.title, done: data.completed }))
      setItems(loadedData)
    } catch (error) {
      console.log(error)
    }
  }, [])

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
    <div className="w-screen overflow-hidden bg-yellow-50">
      <Header name={'Todoリスト'} />
      <Input handleAdd={handleAdd} handleClear={handleClear} />
      <TodoItems handleCheck={handleCheck} handleDelete={handleDelete} />
    </div>
  )
}
