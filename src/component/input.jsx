import React from 'react'
import { MyModal } from './modal'
import { InputButton } from './button'

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
      props.handleAdd(text)
      setMesLists(['登録完了', `Todoリストに【${text}】を追加しました。`, '閉じる'])
      setModalOpen(true)
    }
    setIsEmpty(text === '')
    setText('')
  }
  const handleClear = () => {
    props.handleClear()
    setMesLists(['クリア完了', `全てのリストを削除しました。`, '閉じる'])
    setModalOpen(true)
  }

  return (
    <>
      <div className="flex justify-center">
        <input
          className="border-2 border-solid border-slate-500"
          type="text"
          placeholder="タイトル"
          maxLength="10"
          value={text}
          onChange={handleChange}
        />
        <InputButton onClick={handleAdd} innerText={'登録'} extraClassName={'ml-10'} />
        <InputButton onClick={handleClear} innerText={'クリア'} extraClassName={'ml-24'} />
      </div>

      <div className={'text-center font-bold text-rose-600' + ' ' + (isEmpty ? '' : 'hidden')}>
        テキストを入力してください。
      </div>

      <MyModal modalType={'add'} mesList={mesLists} modalOpen={modalOpen} closeModal={closeModal} />
    </>
  )
}
