import React from 'react'
import { useTodoData } from '../hook/useTodoData'

export const LoadButton = (props) => {
  const { isLoading, fetch } = useTodoData()
  const handleFetch = () => fetch()

  return (
    <>
      {isLoading ? (
        'データ更新中'
      ) : (
        <button
          className={'rounded-lg border-2 border-solid border-green-600 bg-stone-100 p-1 ' + props.extraClassName}
          onClick={handleFetch}
        >
          Todoリストを取得
        </button>
      )}
    </>
  )
}
