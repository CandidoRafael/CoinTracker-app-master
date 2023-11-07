import './styles.css'

import { SideBar } from "../../components/componentsDashboard/SideBar"
import { Navbar } from '../../components/componentsDashboard/Navbar';
import { Main } from "../../components/componentsDashboard/main";

import Box from '@mui/material/Box';


export const Dashboard = () => {

  return (
      <>
        <Navbar />
        <Box height={70} />

          <Box sx={{ display: 'flex'}}>
            <SideBar />
            <Main />
          </Box>
      </>
  )
}