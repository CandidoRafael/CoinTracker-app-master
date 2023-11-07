import { Button, Grid } from '@mui/material'
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import { useAppStore } from '../../store';

const SwitchCurrency = () => {

  const { fromCurrency, toCurrency, setFromCurrency, setToCurrency } = useAppStore()

  const handleSwitch = () => {
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
  }

  return (
   <Grid item xs={12} md="auto">
     <Button onClick={handleSwitch} sx={{borderRadius: 1, height:'100%'}}>
       <CompareArrowsIcon sx={{fontSize: 40, color:'green'}}/>
     </Button>
   </Grid>
  )
}

export default SwitchCurrency