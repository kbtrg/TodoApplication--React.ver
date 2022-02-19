import React from 'react'

export const InputButton = React.memo((props) => {
  return (
    <>
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
