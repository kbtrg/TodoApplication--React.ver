import React from 'react'
import { MyModal } from './modal'
import { InputButton } from './buttons/inputButton'

/* 入力ボックス */
export const Input = (props) => {
  const [text, setText] = React.useState('')
  const [isEmpty, setIsEmpty] = React.useState(false)
  const [modalTitle, setModalTitle] = React.useState('')
  const [modalBody, setModalBody] = React.useState('')
  const [modalOpen, setModalOpen] = React.useState(false)
  const closeModal = React.useCallback(() => setModalOpen(false), [])
  const handleChange = (e) => setText(e.target.value)
  const handleEnterKeyDown = (e) => {
    if (e.keyCode === 13) handleAdd()
  }
  const handleAdd = () => {
    if (text !== '') {
      props.handleAdd(text)
      setModalTitle('登録完了')
      setModalBody(`Todoリストに【${text}】を追加しました。`)
      setModalOpen(true)
    }
    setIsEmpty(text === '')
    setText('')
  }
  const handleClear = () => {
    props.handleClear()
    setModalTitle('クリア完了')
    setModalBody('全てのリストを削除しました')
    setModalOpen(true)
  }

  return (
    <>
      <div className="flex justify-center">
        <input
          className="border-2 border-solid border-slate-500"
          type="text"
          placeholder="タイトル"
          value={text}
          onChange={handleChange}
          onKeyDown={(e) => handleEnterKeyDown(e)}
        />
        <InputButton onClick={handleAdd} innerText={'登録'} extraClassName={'ml-10'} />
        <InputButton onClick={handleClear} innerText={'クリア'} extraClassName={'ml-24'} />
      </div>

      <div className={'text-center font-bold text-rose-600' + ' ' + (isEmpty ? '' : 'hidden')}>
        テキストを入力してください。
      </div>

      <MyModal modalTitle={modalTitle} modalBody={modalBody} modalOpen={modalOpen} closeModal={closeModal} />
    </>
  )
}
