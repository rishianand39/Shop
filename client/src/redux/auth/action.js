import axios from "axios";


export const actionTypes={
    AUTH_LOADING:"AUTH_LOADING",
    AUTH_SUCCESS:"AUTH_SUCCESS",
    AUTH_FAILURE:"AUTH_FAILURE",
    AC_CREATE:"AC_CREATE"
}

// ACTION
export const loading=()=>{
    return{
        type:actionTypes.AUTH_LOADING
    }
}
export const failure=(message)=>{
    return{
        type:actionTypes.AUTH_FAILURE,
        payload:message
    }
}
export const signup_success=(message)=>{
    return{
        type:actionTypes.AC_CREATE,
        payload:message
    }
}
export const signin_success=(data)=>{
    return{
        type:actionTypes.AUTH_SUCCESS,
        payload:data
    }
}


// CREATE ACCOUNT(sign up)
export const createAccount=(user)=>async(dispatch)=>{
    dispatch(loading())
    try {
      let result= await axios.post("http://localhost:8080/api/auth/signup",{
        username:user.username,
        first_name:user.first_name,
        last_name:user.last_name,
        email:user.email,
        password:user.password
       })
       dispatch(signup_success(result.data))
    } catch (error) {
        dispatch(failure(error.response.data))
    }
}


// SIGN IN
export const signin=(user)=>async(dispatch)=>{
    dispatch(loading())
    try {
        let result= await axios.post("http://localhost:8080/api/auth/signin",{
            username:user.username,
            password:user.password
           })
           console.log(result)
           dispatch(signin_success(result.data)) 
    } catch (error) {
        dispatch(failure(error.response.data))
    }
}