import { useState, useEffect } from "react";
import { useAppStore } from "../../../store"
import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close'
import useCreateUser from "../../../auth/useCreateUser";
import { projectFirestore } from "../../../firebase/firebase-config";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import Swal from "sweetalert2";


function EditGoals({ handleClose, formId }) {
  
  const [goals, setGoals] = useState('')
  const [status, setStatus] = useState('Começar')
  const setUserData = useAppStore((state) => state.setUserData)

  const usuario = useCreateUser()

  useEffect(() => {
    setGoals(formId.goals)
    setStatus(formId.status)
  }, [formId])

  const getUserData = async () => {
    const userCollectionRef = doc(projectFirestore, "users", usuario?.uid)
      const dataDoc = await getDoc(userCollectionRef)
      if (dataDoc.exists()) {
          const documentData = dataDoc.data();
          setUserData(documentData)
      }
  }

  const handleGoalChange = (event) => {
    setGoals(event.target.value)
  }

  const handleStatusChange = (event) => {
    setStatus(event.target.value)
  }

  const handleEdit = async () => {
    if (usuario) {
      try {
        const userDocRef = doc(projectFirestore, "users", usuario?.uid);
        const userSnapshot = await getDoc(userDocRef);
  
        if (userSnapshot.exists()) {
          const userData = userSnapshot.data();

          const updatedGoals = userData.goals.map((goal, index) =>
          index === formId.id ? { ...goal, goals, status } : goal
        );

        console.log(formId)
        if(status === 'Status') return

          await updateDoc(userDocRef, {
            goals: updatedGoals,
          });
          
          console.log("Meta adicionada com sucesso");
          handleClose()
          getUserData()
          Swal.fire({
            title: 'Editado!',
            confirmButtonColor: 'green',
            width: 320
          })
          setUserData((prevUserData) => ({ ...prevUserData, goals: updatedGoals }));
          
        }
      } catch (error) {
        console.error("Erro ao adicionar a meta:", error);
      }
    }
  };

  return (
    <>
    <Box sx={{m: 2}} />
    <Typography 
      variant="h4" 
      align="center"
      style={{color: 'green', fontWeight: 'bold'}}
      >
      Editar Meta
    </Typography>
    <IconButton
      style={{position: 'absolute', top: '0', right: '0'}}
      onClick={handleClose}
      >
        <CloseIcon />
      </IconButton>
      <Box  height={20}/>
      <Grid container spacing={2}>

          <Grid item sx={{width: '100%'}}>
            <input 
              type="text" 
              className="input-text-goal" 
              placeholder="What is your Goal..."
              value={goals}
              onChange={(e) => handleGoalChange(e)}
              />
          </Grid>
          <Grid item sx={{width: '50%'}}>
            <select 
              name="" 
              id="" 
              value={status} 
              onChange={(event) => handleStatusChange(event)}
              style={{
                width: '100%',
                fontSize: '1.1em',
                border: '2px solid green',
                borderRadius: '5px',
                outline: 'none'
              }}
              >
                <option value="Status">Status</option>
                <option value="Começar">Começar</option>
                <option value="Fazendo">Fazendo</option>
                <option value="Finalizado">Finalizado</option>
            </select>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" align="center">
                <Button 
                variant="contained"
                style={{backgroundColor: 'green'}}
                onClick={handleEdit}
                >
                    Editar
                </Button>
            </Typography>
          </Grid>
      </Grid>
      <Box  sx={{m: 1}}/>
  </>
  )
}

export default EditGoals