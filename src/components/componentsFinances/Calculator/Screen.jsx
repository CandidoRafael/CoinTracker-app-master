import "./styles.css"
import { useAppStore } from "../../../store"



function Screen() {

  const calc  = useAppStore((state) => state.calc)
  const setCalc = useAppStore((state) => state.setCalc)

 
  return (
    <div className="screen">
      <h1>{calc.num ? calc.num : calc.res}</h1>
    </div>
  )
}

export default Screen