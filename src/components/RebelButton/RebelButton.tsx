import React from 'react'
import './RebelButton.css'

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
    <button className='rebel-button' onClick={handleOnClick}>{text ? text : 'Rebel Button'}</button>
  )
}

export default RebelButton