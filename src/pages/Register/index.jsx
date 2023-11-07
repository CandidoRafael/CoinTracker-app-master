import { useState } from "react";
import { useNavigate, useLocation, Link} from "react-router-dom";
import { userSignUp } from "../../auth/userSignUp";
import { InputAuth } from "../../components/componentsHome/InputAuth";

export const Register = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("")

  const navigate = useNavigate();
  const location  = useLocation();

  const from = location.state?.from?.pathname || "/dashboard";

  const {error, signUp} = userSignUp()

  const handleSignUp = async (e) => {
    e.preventDefault()
    if (registerEmail.length <= 0) {
      return;
    }

    await signUp(registerEmail, registerPassword)

    if(!error) {
    
        navigate(from , { replace: true })
        setRegisterEmail('')
        setRegisterPassword('')
        
    } else {
        setErrorMessage(error)
        return
    }
  }

  return (
       <>
       
       <InputAuth 
          title="Criar Conta" 
          handleChangeEmail={setRegisterEmail} 
          handleChangePassword={setRegisterPassword}
          handleAuth={handleSignUp}
          buttonTitle="Cadastrar-se"
          linkD="/login"
          linkTitle="Já possui cadastro?"
          errorMessage={errorMessage}
          />
       </>
  );
};
