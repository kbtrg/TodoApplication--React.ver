import React from 'react'
import { MyModal } from '../component/modal.jsx'

/* 入力ボックス */
export const Input = (props) => {
  const [text, setText] = React.useState('')
  const [isEmpty, setIsEmpty] = React.useState(false)
  const [mesLists, setMesLists] = React.useState([])
  const [modalOpen, setModalOpen] = React.useState(false)
  const closeModal = () => setModalOpen(false)
  const handleChange = (e) => setText(e.target.value)
  const handleAdd = () => {
    if (text !== '') {
      props.HandleAdd(text)
      setMesLists(['登録完了', `Todoリストに【${text}】を追加しました。`, '閉じる'])
      setModalOpen(true)
    }
    setIsEmpty(text === '')
    setText('')
  }
  const handleClear = () => {
    props.HandleClear()
    setMesLists(['クリア完了', `全てのリストを削除しました。`, '閉じる'])
    setModalOpen(true)
  }

  return (
    <>
      <div className="flex justify-center">
        <input
          className="border-solid border-slate-500 border-2"
          type="text"
          placeholder="タイトル"
          maxLength="10"
          value={text}
          onChange={handleChange}
        />
        <button className="ml-10 bg-stone-100 border-solid border-2 border-indigo-600 rounded-lg" onClick={handleAdd}>
          登録する
        </button>
        <button className="ml-10 bg-stone-100 border-solid border-2 border-indigo-600 rounded-lg" onClick={handleClear}>
          クリア
        </button>
      </div>
      <div className={'font-bold text-rose-600 text-center' + ' ' + (isEmpty ? '' : 'hidden')}>
        テキストを入力してください。
      </div>

      <MyModal modalType={'add'} mesList={mesLists} modalOpen={modalOpen} closeModal={closeModal} />
    </>
  )
}
