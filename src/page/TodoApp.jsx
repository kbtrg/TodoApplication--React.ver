import React from 'react'
import axios from 'axios'
import { Header } from '../component/header'
import { Input } from '../component/input'
import { TodoItems } from '../component/todoItems'
import '../css/style--tailwind.css'

export const TodoApp = () => {
  const [items, setItems] = React.useState([])

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

  /*
  // FetchAPIで取得
  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        console.log('JSON', json)
      })
  }, [])
  */

  // axiosで取得
  React.useEffect(async () => {
    const loadedData = []
    await axios
      .get('https://jsonplaceholder.typicode.com/todos')
      .then((response) => {
        const filteredData = response.data.filter((data) => data.id < 20)
        filteredData.map((data) => loadedData.push({ key: getKey(), text: data.title, done: data.completed }))
      })
      .catch((error) => {
        console.log(error)
      })
    console.log(loadedData)
    setItems(loadedData)
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
      <TodoItems items={items} handleCheck={handleCheck} handleDelete={handleDelete} />
    </div>
  )
}
