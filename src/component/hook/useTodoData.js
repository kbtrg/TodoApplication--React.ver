import React from 'react'
import axios from 'axios'
import { TodoItemsContext } from '../provider/TodoItemsProvider'

// リストを一意に紐づけるキー
const getKey = () => Math.random().toString(32).substring(2)

export const useTodoData = () => {
  const [, setItems] = React.useContext(TodoItemsContext)
  const [isLoading, setIsLoading] = React.useState(false)

  // axiosで取得
  const fetch = React.useCallback(async () => {
    setIsLoading(true)
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
      const filteredData = res.data.filter((data) => data.id < 20) // データ条件
      const loadedData = filteredData.map((data) => ({ key: getKey(), text: data.title, done: data.completed }))
      setItems(loadedData)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }, [])
  return { isLoading, fetch }
}
