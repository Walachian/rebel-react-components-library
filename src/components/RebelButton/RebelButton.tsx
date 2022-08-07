import React from 'react'

type RebelButtonProps = {
    text?: string,
    onClick?: () => void
}

function RebelButton({text, onClick}: RebelButtonProps) {
    const handleOnClick = () =>{
        console.log('rebel button clicked')
        onClick?.()
    }

  return (
    <button onClick={handleOnClick}>{text ? text : 'Rebel Button'}</button>
  )
}

export default RebelButton