import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import CloseIcon from '@mui/icons-material/close'
import { doc, updateDoc, getDoc } from 'firebase/firestore'
import { projectFirestore } from "../../../firebase/firebase-config";
import useCreateUser from "../../../auth/useCreateUser";
import Swal from 'sweetalert2';
import './styles.css'
import { useAppStore } from "../../../store";

export function AddGoals({ closeEvent }) {
  const [goals, setGoals] = useState('')
  const setUserData = useAppStore((state) => state.setUserData)
  
  const usuario = useCreateUser()

  const handleGoalChange = (event) => {
    setGoals(event.target.value)
  }
  
  const getUserData = async () => {
      const userCollectionRef = doc(projectFirestore, "users", usuario?.uid)
        const dataDoc = await getDoc(userCollectionRef)
        if (dataDoc.exists()) {
            const documentData = dataDoc.data();
            setUserData(documentData)
        }
    }
  
  const createGoal = async () => {
    if (usuario) {
      try {
        const userDocRef = doc(projectFirestore, "users", usuario?.uid);
        const userSnapshot = await getDoc(userDocRef);
  
        if (userSnapshot.exists()) {
          const userData = userSnapshot.data();
          const newGoal = {
            goals: goals,
            status: 'Iniciar',

          }
          const updatedGoals = [...userData.goals, newGoal];
          await updateDoc(userDocRef, {
            goals: updatedGoals,
          });
          
          setGoals('')
          closeEvent()
          getUserData()
          Swal.fire({
            title: 'Meta criada com sucesso, parabens!',
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
        Adicionar Meta
      </Typography>
      <IconButton
        style={{position: 'absolute', top: '0', right: '0'}}
        onClick={closeEvent}
        >
          <CloseIcon />
        </IconButton>
        <Box  height={20}/>
        <Grid container spacing={2}>

            <Grid item sx={{width: '100%'}}>
              <input 
                type="text" 
                className="input-text-goal" 
                placeholder="Digite sua meta..."
                value={goals}
                onChange={(e) => handleGoalChange(e)}
                />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5" align="center">
                  <Button 
                  variant="contained"
                  onClick={createGoal}
                  style={{backgroundColor: 'green'}}
                  >
                      Adicionar
                  </Button>
              </Typography>
            </Grid>
        </Grid>
        <Box  sx={{m: 4}}/>
    </>
  )
}

