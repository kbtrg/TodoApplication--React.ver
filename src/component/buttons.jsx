import React from 'react'

export const InputButton = React.memo((props) => {
  return (
    <>
      {console.log('InputButton')}
      <button
        className={'rounded-lg border-2 border-solid border-indigo-600 bg-stone-100 p-1 ' + props.extraClassName}
        onClick={props.onClick}
      >
        {props.innerText}
      </button>
    </>
  )
})
InputButton.displayName = 'InputButton'

export const TodoButton = (props) => {
  return (
    <button
      className={'mx-1 my-auto rounded-lg border-2 border-solid border-lime-300 p-1 text-xs ' + props.extraClassName}
      onClick={props.onClick}
    >
      {props.innerText}
    </button>
  )
}
