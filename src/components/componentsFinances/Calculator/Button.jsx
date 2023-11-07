import "./styles.css"
import { useAppStore } from '../../../store'

function Button({value, index}) {
  const setCalc = useAppStore((state) => state.setCalc)
  const calc = useAppStore((state) => state.calc)

  const getStyleName = (btn) => {
      const className = {
        "=": "equals",
        "x": "opt",
        "-": "opt",
        "+": "opt",
        "/": "opt",
      }

      return className[btn]
  }

  const commaClick = () => {
    setCalc({
      ...calc,
      num: !calc.num.toString().includes('.') ? calc.num + value : calc.num
    })

  }

  const resetClick = () => {
    setCalc({ sign: '', num: 0, resp: 0 })
  }

  const handleClickButton = () => {
    const numberString = value.toString()

    let numberValue;

    if(numberString === '0' && calc.num === 0) {
      numberValue = '0'
    } else {
      numberValue = Number(calc.num + numberString)
    }
    
    setCalc({ ...calc, num: numberValue })
  }

  const signClick = () => {
    setCalc({
      sign: value,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0 
      })
  }

  const equalsClick = () => {
    if(calc.res && calc.num) {
      const math = (a, b, sign) => {
        const result = {
          '+': (a,b) => a + b, 
          '-': (a,b) => a - b,
          'x': (a,b) => a * b, 
          '/': (a,b) => a / b 
        }

       return result[sign](a, b)
    }
    setCalc({ 
      res: math(calc.res, calc.num, calc.sign),
      sign: '',
      num: 0
    })}    
  }

  const persenClick = () => {
    setCalc({
      num: (calc.num / 100),
      res: (calc.num / 100),
      sign: ''
    })
  }

  const invertClick = () => {
    setCalc({
      num: calc.num ? calc.num * -1 : 0,
      res: calc.res ? calc.res * -1 : 0,
      sign: ''
    })
  }

  const handleBtnClick = () => {
    
    const result = {
        '.': commaClick,
        'C': resetClick,
        '/': signClick,
        'x': signClick,
        '-': signClick,
        '+': signClick,
        '=': equalsClick,
        '%': persenClick,
        '+-': invertClick
      }

    if(result[value]) {
      return result[value]()
    } else {
        return handleClickButton()
    }
}
  return (
    <button onClick={handleBtnClick} className={`${getStyleName(value)} button`}>{value}</button>
  )
}

export default Button