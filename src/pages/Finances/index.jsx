import React from 'react'
import { Box } from '@mui/material'
import { Navbar } from '../../components/componentsDashboard/Navbar'
import { SideBar } from '../../components/componentsDashboard/SideBar'
import FormFinances from '../../components/componentsFinances/FormFinances'
import TableFinances from '../../components/componentsFinances/TableFinances'

export const Finances = () => {

  return (
    <>
      <Navbar />
      <Box height={70} />

        <Box sx={{display: 'flex'}}>
          <SideBar />
          <Box component="main" sx={{ flexGrow: 1, p: 3}}>
          
            <FormFinances />
            <Box height={30}/>
            <TableFinances />
          </Box> 
      </Box>     
    </>
 )
}
