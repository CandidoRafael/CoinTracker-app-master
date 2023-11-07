import React from 'react'
import "./styles.css"

const ButtonBox = ({children}) => {
  return (
    <div className='buttonBox'>
    {children}
    </div>
  )
}

export default ButtonBox