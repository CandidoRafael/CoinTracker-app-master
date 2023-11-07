import React from 'react'
import Screen from './Screen'
import ButtonBox from './ButtonBox'
import Button from './Button'
function Calculator({ closeEvent }) {

  const buttonValues = [
  "C", "+-", "%", "/",
  7, 8, 9, "x",
  4, 5, 6, "-",
  1, 2, 3, "+",
  0, ".", "="

  ]

  return (
    <div>
        <Screen />
        <ButtonBox>
            {buttonValues.map((btn, index) => (
                <Button value={btn} key={index} />
            ))}
        </ButtonBox>
        <button onClick={closeEvent}>Close</button>
    </div>
  )
}

export default Calculator