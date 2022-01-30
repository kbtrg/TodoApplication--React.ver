import React from 'react'

export const InputButton = (props) => {
  return (
    <button
      className={'rounded-lg border-2 border-solid border-indigo-600 bg-stone-100 p-1 ' + props.extraClassName}
      onClick={props.onClick}
    >
      {props.innerText}
    </button>
  )
}

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
