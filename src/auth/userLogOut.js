import { useNavigate } from "react-router-dom"; // Importe useNavigate em vez de Navigate

import { projectAuth } from "../firebase/firebase-config";

const userLogOut = () => {
  const navigate = useNavigate(); // Use useNavigate para obter a função de navegação

  const logOut = async () => {
    try {
      await projectAuth.signOut();
      navigate('/'); // Use navigate para redirecionar para a página inicial
    } catch (err) {
      // Trate erros, se necessário
    }
  }

  return { logOut };
}

export { userLogOut };