import React from 'react'

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
