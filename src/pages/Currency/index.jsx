import { InputAmount } from "../../components/componentsCurrency/InputAmount"
import SelectCountry from "../../components/componentsCurrency/SelectCountry"
import SwitchCurrency from "../../components/componentsCurrency/SwitchCurrency"
import { Navbar } from "../../components/componentsDashboard/Navbar"
import { SideBar } from "../../components/componentsDashboard/SideBar"
import { Box, Container, Grid } from "@mui/material"
import { Typography } from "@mui/material"
import { useAppStore } from "../../store"
import useFetchConversion from "../../hooks/useFetchConversion"

export const CurrencyMoney = () => {

const { fromCurrency, toCurrency, setFromCurrency, setToCurrency,firstAmount} = 
useAppStore()
  
const { resultCurrency, error } = 
useFetchConversion('https://api.freecurrencyapi.com/v1/latest')

  const containerStyle = {
    textAlign:'center',
    color: "#222",
    backgroundColor: '#f7f6f6',
    minHeight: '20rem',
    borderRadius: 2,
    marginTop: '2rem',
    padding: '4rem 2rem',
    boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
    position: 'relative'
  }
    
  return (
    <>
      <Navbar />
      <Box height={70} />
        <Box sx={{ display: 'flex'}}>
          <SideBar />
            <Container sx={containerStyle}>
                <Typography variant="h4" sx={{marginBottom: '2rem'}}>
                    Faça a conversão de Moedas
                </Typography>
                <Grid container spacing={2}>
                    <InputAmount />
                    <SelectCountry 
                      value={fromCurrency} 
                      setValue={setFromCurrency}
                      label='De'
                      
                      />
                    <SwitchCurrency />
                    <SelectCountry 
                      value={toCurrency}
                      setValue={setToCurrency}
                      label='Para'
                    />
                </Grid>
                
                {firstAmount ? (
                    <Box sx={{textAlign: 'left', marginTop: '1rem'}}>
                      <Typography variant="h5">{firstAmount} - {fromCurrency} = </Typography>
                      <Typography variant="h2" sx={{fontSize: '2.1rem', fontWeight: 500, marginTop: '10px'}}>{resultCurrency} -  {toCurrency}</Typography>
                    </Box>
                ): null}
            </Container>
        </Box>
    </>
  )
}
