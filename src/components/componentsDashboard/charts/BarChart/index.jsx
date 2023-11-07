import { Bar } from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'

export const BarChart = ({chartData}) => {

    const options = {
        title: 'awjdaijwd'
    }
  return (
    <div style={{maxWidth:950, display: 'flex', justifyContent: 'center'}}>
      <Bar data={chartData} options={options}/>
    </div>
    
  )
}