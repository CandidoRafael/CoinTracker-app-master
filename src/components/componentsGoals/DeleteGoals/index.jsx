import { doc, updateDoc, getDoc, arrayRemove } from 'firebase/firestore'
import { projectFirestore } from '../../../firebase/firebase-config'
import Swal from 'sweetalert2';
import useCreateUser from '../../../auth/useCreateUser'
import { useAppStore } from "../../../store"
import { Box, Typography, IconButton, Grid, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close'

function DeleteGoals({ handleClose, index }) {
  const setUserData = useAppStore((state) => state.setUserData);
  const userData = useAppStore((state) => state.userData);
  const usuario = useCreateUser();

  const getUserData = async () => {
      const userCollectionRef = doc(projectFirestore, "users", usuario?.uid);
      const dataDoc = await getDoc(userCollectionRef);
      if (dataDoc.exists()) {
          const documentData = dataDoc.data();
          setUserData(documentData);
      }
  };

  const handleDeleteGoals = async () => {
      if (usuario) {
          try {
              const userDocRef = doc(projectFirestore, "users", usuario?.uid);

              await updateDoc(userDocRef, {
                  goals: arrayRemove(userData.goals[index.id]), 
              });

              setUserData((prevData) => ({
                  ...prevData,
                  userData: {
                      ...prevData.userData,
                      goals: prevData.userData.goals.filter((_, i) => i !== index.id), 
                  },
              }));
              getUserData();
              handleClose();
              Swal.fire({
                  title: 'Deletado!',
                  confirmButtonColor: 'green',
                  width: 320,
              });
          } catch (error) {
              console.log("Esse é o erro:", error);
          }
      }
  };

  return (
      <>
          <Box sx={{ m: 2 }} />
          <Typography
              variant="h4"
              align="center"
              style={{ color: 'red', fontWeight: '500' }}
          >
              Deletar Meta
          </Typography>
          <IconButton
              style={{ position: 'absolute', top: '0', right: '0' }}
              onClick={handleClose}
          >
              <CloseIcon />
          </IconButton>
          <Box height={20} />
          <Grid container spacing={2}>
              <Grid item sx={{ width: '100%' }}>
                  <Typography align="center">
                      Você tem certeza que quer deletar essa meta?
                  </Typography>
              </Grid>
              <Grid item xs={12}>
                  <Typography variant="h5" align="center">
                      <Button
                          variant="contained"
                          style={{ backgroundColor: 'red' }}
                          onClick={handleDeleteGoals}
                      >
                          Deletar
                      </Button>
                  </Typography>
              </Grid>
          </Grid>
          <Box sx={{ m: 4 }} />
      </>
  );
}

export default DeleteGoals;

