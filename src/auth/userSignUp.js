import { projectAuth } from "../firebase/firebase-config";


let error = null 

const signUp = async (email, password) => {
    error = null
    try {
        const response = await projectAuth.createUserWithEmailAndPassword
        (email, password)

        if(!response) {
            throw new Error('error page')
        }
    } catch (err) {
        error = err.message
    }
}

const userSignUp = () => {
    return { error, signUp }
}

export { userSignUp }