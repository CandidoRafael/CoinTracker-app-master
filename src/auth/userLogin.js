import { projectAuth } from "../firebase/firebase-config";

let error = null;


export const login = async (email, password) => {
  error = null;
 
  try {
    error = null;
    const response = await projectAuth.signInWithEmailAndPassword(email, password);
    error = null;
    console.log(response.user)

    return response
  } catch (e) {
    console.log('aqui deu o erro', e);
    error  = e.message
    return 
  }
};

const userLogin = () => {
  return { error, login }
}

export { userLogin }
