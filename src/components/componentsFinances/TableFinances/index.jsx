import './styles.css'
import { useState } from 'react';
import { Divider, Stack, Typography, Box, Button } from '@mui/material';
import { useAppStore } from '../../../store';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from '@mui/icons-material/Edit';
import CalculateIcon from '@mui/icons-material/Calculate';
import ModalFinances from '../ModalFinances';
import Calculator from '../Calculator';


export default function TableFinances() {

  const userData = useAppStore((state) => state.userData)
  
  const [openModalCalculator, setModalOpenCalculator] = useState(false);
  const [openModalCreate, setModalOpenCreate] = useState(true);
  const handleOpen = () => setModalOpenCalculator(true);
  const handleClose = () => setModalOpenCalculator(false);

  const [formId, setFormId] = useState('')

  const editData = (goal, status, id) => {
      const data = {
        goals: goal,
        status: status,
        id: id
      }
      setFormId(data)
      handleOpenModalEdit()
  }

  const deleteData = (id) => {
    const data = {
      id: id
    }
    setDeleteId(data)
    handleOpenModalDelete()
  }

  return (
    <>
        <ModalFinances open={openModalCalculator}>
            <Calculator closeEvent={handleClose}/>
        </ModalFinances>

    
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <Typography
            gutterBottom
            variant='h5'
            component='div'
            sx={{padding: '20px'}}
        >
            <h2>Tabela Despesas</h2>
        </Typography>
        <Divider /> 
        <Box height={10} />
          <Stack direction="row" spacing={2} className="my-2 mb-2">
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
            </Typography>
            <Button 
            variant="contained" 
            endIcon={<CalculateIcon />}
            onClick={handleOpen}
            style={{backgroundColor: 'darkblue', margin:'5px'}}
            >
              <p>Calculadora</p>
            </Button>
            <Button 
            variant="contained" 
            endIcon={<AddCircleIcon />}
            style={{backgroundColor: 'green', margin:'5px'}}
            >
              <p>Criar</p>
            </Button>
          
          </Stack>
          <Box height={10} />
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
                <TableCell align='left' style={{minWidth: '100px'}}>
                    <h2>Descrição</h2>
                </TableCell>
                <TableCell align='left' style={{minWidth: '100px'}}>
                    <h2>Valor</h2>
                </TableCell>
                <TableCell align='left' style={{minWidth: '100px'}}>
                    <h2>Actions</h2>
                </TableCell>
               
            </TableRow>
          </TableHead>
          <TableBody>
            {userData.expenses
              ?.map((row, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                        <TableCell align='left'>
                            <p style={{fontWeight: 'bold', fontSize: '1.3em'}}>{row.description}</p>
                        </TableCell>
                       
                        <TableCell align='left'>
                                ${row.value}
                        </TableCell>
                        <TableCell align='left'>
                          <Stack spacing={2} direction='row'>

                              <EditIcon 
                                  onClick={() => {
                                    editData(row.expenses, row.status, index)
                                  }}
                                  style={{
                                  fontSize: '20px',
                                  color: 'blue',
                                  cursor: 'pointer'
                                  }}
                                />  
                             
                               <DeleteIcon
                                  onClick={() => deleteData(index)} 
                                  style={{
                                    fontSize: '20px',
                                    color: 'red',
                                    cursor: 'pointer'
                                }}  
                              />
                          </Stack>
                        </TableCell>
                  </TableRow>
                );
              }).reverse()}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
    </>
  );
}