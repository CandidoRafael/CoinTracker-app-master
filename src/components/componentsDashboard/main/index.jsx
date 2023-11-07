import "./styles.css"

import useCreateUser from "../../../auth/useCreateUser"
import {doc, getDoc } from "firebase/firestore"
import { projectFirestore } from "../../../firebase/firebase-config"
import { useEffect, useState } from "react"
import CountUp from "react-countup"
import { DataFinances } from "../../../Data"
import { BarChart } from "../charts/BarChart"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import { Grid, Stack } from "@mui/material";
import Typography from '@mui/material/Typography';
import WalletIcon from '@mui/icons-material/Wallet';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import StarPurple500Icon from '@mui/icons-material/StarPurple500';
import PercentIcon from '@mui/icons-material/Percent';
import { AccordionDash } from "../AccordionDash"
import { useAppStore } from "../../../store"


export const Main = () => {
    const userData = useAppStore((state) => state.userData)
    const setUserData = useAppStore((state) => state.setUserData)

    const [dataChart, setDataChart] = useState({
      labels: DataFinances.map((data) => data.description),
      datasets: [{
        label: 'Value of your expenses',
        data: DataFinances.map((data) => data.value),
      }]
    })

    useEffect(() => {
      const updatedDataChart = {
        labels: userData?.expenses?.map((expense) => expense.description),
        datasets: [
          {
            label: 'Amount Of Your Expenses',
            data: userData?.expenses?.map((expense) => expense.value),
            backgroundColor: ['#439762'],
            borderColor: 'black',
            borderWidth: 2
          },
        ],
      };
      setDataChart(updatedDataChart);
    }, [userData]);

    const usuario = useCreateUser()
    
    useEffect(() => {
        if(usuario) {
            const userCollectionRef = doc(projectFirestore, "users", usuario.uid)
            const getUserData = async () => {
                const dataDoc = await getDoc(userCollectionRef)
                if (dataDoc.exists()) {
                    const documentData = dataDoc.data();
                    setUserData(documentData)
                    console.log(userData)
                }
            }
            getUserData() 
        }   
    }, [usuario])

    return (
        <Box component="main" sx={{ flexGrow: 1, p: 3, height: '100%' }}>
          
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Stack spacing={2} direction={{xs: 'column', md: 'row'}} sx={{minWidth: '100%'}}>
            <Card sx={{ minWidth: '49%', height: 150 }} className="gradient">
              <CardContent>
                <div>
                    <WalletIcon sx={{color: 'white'}}/>
                </div>
                <Typography 
                  gutterBottom 
                  variant="h5" 
                  component="div"
                  sx={{color: 'white'}}
                  >
                    $<CountUp delay={0.4} end={userData?.salary - userData.investiment} duration={0.7}/>
                </Typography>
                <Typography 
                    gutterBottom 
                    variant="body2" 
                    component="div"
                    sx={{color: '#ccd1d1', fontWeight: 'bold'}}
                >
                    Salário
                </Typography>
              </CardContent>
          
           </Card>

            <Card 
              sx={{ 
                minWidth: '49%' , 
                height: 150, 
                backgroundColor: 'GrayText'}}
            >
              <CardContent>
                <div>
                    <QueryStatsIcon sx={{color: '#41b46c'}}/>
                </div>
                <Typography 
                  gutterBottom 
                  variant="h5" 
                  component="div"
                  sx={{color: '#41b46c'}}
                  >
                    $<CountUp delay={0.4} end={userData?.investiment} duration={0.7}/>
                </Typography>
                <Typography 
                    gutterBottom 
                    variant="body2" 
                    component="div"
                    sx={{color: '#ccd1d1', fontWeight: 'bold'}}
                >
                Total Investido
                </Typography>
              </CardContent>
           </Card>

            </Stack>
          </Grid>

          <Grid item xs={12} md={4}>
            <Stack spacing={2} direction='column'>
            <Card sx={{width: '100%'}}>
                <Stack spacing={2} direction='row' sx={{width: '100%'}}>
                    <div className="icon">
                         <StarPurple500Icon  />
                    </div>
                    <div className="padding-All">
                        <span className="priceTitle"><CountUp delay={0.4} end={userData?.goals?.length} duration={0.7}/> </span> 
                        <span className="priceSubtitle">Metas</span>
                    </div>
                </Stack>
       
           </Card>
              <Card>
                <Stack spacing={2} direction='row'>
                    <div className="icon">
                         <PercentIcon />
                    </div>
                    <div className="padding-All">
                        <span className="priceTitle"> <CountUp delay={0.4} end={Math.floor((userData?.investiment * 100 / userData?.salary)).toFixed(2)}/> </span> 
                        <span className="priceSubtitle">Porcentagem investida de suas finanças</span>
                    </div>
                </Stack>
             </Card>
           </Stack>
          </Grid>

      </Grid>

        <Box height={20}/>

      <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
          <Card sx={{ minHeight:  '60vh' }}>
              <CardContent>
                <BarChart chartData={dataChart}/>
              </CardContent>
           </Card> 
          </Grid>
          <Grid item xs={12} md={4} sm={12}>
          <Card sx={{ minHeight: '60vh'}}>
              <CardContent>
               <AccordionDash />
              </CardContent>
           </Card> 
         </Grid>
        </Grid>
      </Box>
    )
}