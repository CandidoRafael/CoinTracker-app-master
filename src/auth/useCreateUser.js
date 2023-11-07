import { useState, useEffect } from "react";
import { projectAuth, projectFirestore } from "../firebase/firebase-config";
import { doc, setDoc, getDoc } from "firebase/firestore";

const useCreateUser = () => {

  const [usuario, setUsuario] = useState(null);
  
  useEffect(() => {
    const unsubscribe = projectAuth.onAuthStateChanged(async (authUser) => {
      if (authUser) {
        setUsuario(authUser);

        // Verificar se o documento do usuário já existe no Firestore
        const userDocRef = doc(projectFirestore, "users", authUser.uid);
        const userSnapshot = await getDoc(userDocRef);
        if (!userSnapshot.exists()) {
          // Se o documento não existir, crie-o no Firestore
          await setDoc(userDocRef, {
            email: authUser.email,
            salary: 0,
            expenses: [],
            investiment: 0,
            goals: []
          });

          console.log("Documento criado com sucesso");
        }
      } else {
        setUsuario(null);
        console.log("Usuário não está autenticado");
      }
    });

    return () => unsubscribe();
  }, []);

  return usuario;
};

export default useCreateUser
