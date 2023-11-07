
import { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { userLogin } from "../../auth/userLogin";
import { InputAuth } from "../../components/componentsHome/InputAuth";

export const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/dashboard';

  const { error, login } = userLogin();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (loginEmail.length <= 0) {
      return;
    }
    await login(loginEmail, loginPassword);
    if (!error) {
      navigate(from, { replace: true });
      setLoginEmail("");
      setLoginPassword("");
      return;
    } else {
      setErrorMessage(error);
      return
    }
  };

  return (
    <InputAuth 
      title="Login" 
      handleChangeEmail={setLoginEmail} 
      handleChangePassword={setLoginPassword}
      handleAuth={handleLogin}
      buttonTitle="Entrar"
      linkTitle="Não possui conta?"
      linkD="/register"
      errorMessage={errorMessage}
      />
  );
};
