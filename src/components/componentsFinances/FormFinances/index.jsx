import React, {useState, useRef, useEffect } from 'react'
import useCreateUser from '../../../auth/useCreateUser'
import { useAppStore } from '../../../store'
import { projectFirestore } from '../../../firebase/firebase-config'
import { getDoc, doc, updateDoc } from 'firebase/firestore'
import AlertMessage from '../ModalFinances'
import logo from '../../../assets/logo.png'
import './styles.css'
import { useSnackbar } from 'notistack'

function FormFinances() {

  const userData = useAppStore((state) => state.userData)
  const setUserData = useAppStore((state) => state.setUserData)
  const [finances, setFinances] = useState(0)
  const [investiment, setInvestiment] = useState(0)
  const [openAlert, setOpenAlert ] = useState(false)

  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");

  const inputDespesaRef = useRef(null);
  const inputValorRef = useRef(null);

  const usuario = useCreateUser()
  const { enqueueSnackbar } = useSnackbar()

  const getUserData = async () => {
  if(usuario) {
      const userCollectionRef = doc(projectFirestore, "users", usuario.uid)
          const dataDoc = await getDoc(userCollectionRef)
          if (dataDoc.exists()) {
              const documentData = dataDoc.data();
              setUserData(documentData)
          }
      }
      console.log(userData)
  }   


  const saveFinancesAndInvestimentData = async (e) => {
    e.preventDefault()
    if(usuario) {
      const userCollectionRef = doc(projectFirestore, "users", usuario?.uid)
      const user = await updateDoc(userCollectionRef, {
        investiment: Number(investiment),
        salary: Number(finances)
      })
    }

    enqueueSnackbar("Suas finanças foram registradas!", {
      variant: "success",
      style: {
        backgroundColor: "#3e9c52"
      },
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "right"
      }
    })
  }

  const handleDeleteExpenses = async (index) => {
    if (usuario) {
      try {
        const userDocRef = doc(projectFirestore, "users", usuario?.uid);
  
        await updateDoc(userDocRef, {
          expenses: arrayRemove(userData.expenses[index]), 
        });

        setUserData((prevData) => ({
          ...prevData,
          expenses: prevData.expenses.filter((_, i) => i !== index),
        }));
      } catch (error) {
        console.log("Esse é o erro:", error);
      }
    }
  };

  const addExpenses = async (e) => {
    e.preventDefault()
    if (usuario) {
      try {
        const userDocRef = doc(projectFirestore, "users", usuario?.uid);
        const userSnapshot = await getDoc(userDocRef);

        if (userSnapshot.exists()) {
          const userData = userSnapshot.data();
          if (!description || !value) return; // Verifique se ambos os campos estão preenchidos
          const newExpenses = {
            description: description,
            value: Number(value),
          };
          const updatedExpenses = [...userData.expenses, newExpenses];

          await updateDoc(userDocRef, {
            expenses: updatedExpenses,
          });

          setDescription("");
          setValue("");
          getUserData()
          inputDespesaRef.current.value = "";
          inputValorRef.current.value = "";
          setUserData((prevUserData) => ({ ...prevUserData, expenses: updatedExpenses }));
        }
      } catch (error) {
        console.error("Erro ao adicionar a despesa:", error);
      }

      enqueueSnackbar("Suas despesas foram registradas!", {
        variant: "success",
        style: {
          backgroundColor: "#3e9c52"
        },
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "right"
        }
      })
    }
  };
  return (

    <div className='div-container-form'>
         <AlertMessage setOpenAlert={setOpenAlert} openAlert={openAlert}/>
    <header className='header-container-form'>
        <figure>
            <img src={logo} alt="logo cointrackr"/>
        </figure>
        <div className='header-title-form'>
           <h1>Registre Finanças</h1> 
        </div>
     </header>
      <section className='section-form'>
        <form>
          <div>
            <label htmlFor="">Salário:</label>
                <input 
                type="number" 
                min={0}
                name="finances"
                placeholder='Salary...'
                onChange={(e) => setFinances(e.target.value)}
                />
            </div>
                <div>
                <label htmlFor="">Investimento:</label>
                    <input 
                    type="number" 
                    name="investiment"
                    min={1}
                    placeholder='Investimento...'
                    onChange={(e) => setInvestiment(e.target.value)}
                    />
                </div>
            <button type='submit' onClick={saveFinancesAndInvestimentData}>Salvar</button>
            </form>
            
        <h2>Registre Despesas</h2>
        <form>
          <div>
            <label htmlFor="">Descrição:</label>
            <input
                type="text"
                placeholder="Descrição..."
                ref={inputDespesaRef}
                onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="">Valor:</label>
                    <input
                    type="number"
                    placeholder="Valor da despesa..."
                    ref={inputValorRef}
                    onChange={(e) => setValue(e.target.value)}
                    />
            </div>
            <button onClick={addExpenses}>Salvar</button>
        </form>
     </section>
    </div>
  )
}

export default FormFinances