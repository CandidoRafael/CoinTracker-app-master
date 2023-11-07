import './styles.css'
import { useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Divider, Stack, Typography, Box, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from '@mui/icons-material/Edit';
import { AddGoals } from '../AddGoals';
import { useAppStore } from '../../../store';
import EditGoals from '../EditGoals';
import ModalGoal from '../ModalGoal';
import DeleteGoals from '../DeleteGoals';

export default function TableGoals() {

  const userData = useAppStore((state) => state.userData)
  
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openModal, setOpenModal] = useState(false)
  const handleOpenModalEdit = () => setOpenModal(true)
  const handleCloseModalEdit = () => setOpenModal(false)

  const [formId, setFormId] = useState('')

  const [openModalDelete, setOpenModalDelete] = useState(false)
  const [deleteId, setDeleteId] = useState('')
  const handleOpenModalDelete = () => setOpenModalDelete(true)
  const handleCloseModalDelete = () => setOpenModalDelete(false)

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

  const statusStyles = {
    Iniciar: 'status-iniciar',
    Fazendo: 'status-fazendo',
    Finalizado: 'status-finalizado'
  };
  
  return (
    <>
      <div>
        <ModalGoal open={open}>
            <AddGoals closeEvent={handleClose}/>
        </ModalGoal>
        
          <ModalGoal open={openModal}>
              <EditGoals handleClose={handleCloseModalEdit} formId={formId} />
          </ModalGoal>

          <ModalGoal open={openModalDelete}>
              <DeleteGoals handleClose={handleCloseModalDelete} index={deleteId} />
          </ModalGoal>
      </div>

    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <Typography
            gutterBottom
            variant='h5'
            component='div'
            sx={{padding: '20px'}}
        >
            <h2>Tabela Metas</h2>
        </Typography>
        <Divider /> 
        <Box height={10} />
          <Stack direction="row" spacing={2} className="my-2 mb-2">
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            ></Typography>
            <Button 
            variant="contained" 
            endIcon={<AddCircleIcon />}
            onClick={handleOpen}
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
                    <h2>Status</h2>
                </TableCell>
                <TableCell align='left' style={{minWidth: '100px'}}>
                    <h2>Actions</h2>
                </TableCell>
               
            </TableRow>
          </TableHead>
          <TableBody>
            {userData.goals
              ?.map((row, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                        <TableCell align='left'>
                            <p style={{fontWeight: '700', fontSize: '1.3em'}}>{row.goals}</p>
                        </TableCell>
                       
                        <TableCell align='left'>
                            <p className={statusStyles[row.status]}>{row.status}</p>
                        </TableCell>
                        <TableCell align='left'>
                          <Stack spacing={2} direction='row'>

                              <EditIcon 
                                  onClick={() => {
                                    editData(row.goals, row.status, index)
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