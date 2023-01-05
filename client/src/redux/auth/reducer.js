import { actionTypes } from "./action"

export const intialState={
    isLoading:false,
    isFailure:false,
    isAccountCreated:false,
    message:"",
    user:null //will store logged In user data
}

export const authReducer=(state=intialState, {type, payload})=>{
    switch(type){
        case actionTypes.AUTH_LOADING:{
            return{
                ...state,
                isLoading:true,
                isFailure:false,
                message:""
            }
        }
        case actionTypes.AUTH_SUCCESS:{
            return{
                ...state,
                isLoading:false,
                isFailure:false,
                user:payload,   //if user signin then user information(object) will come here
            }
        }
        case actionTypes.AUTH_FAILURE:{
            return{
                ...state,
                isLoading:false,
                message:payload,
                isFailure:true
            }
        }
        case actionTypes.AC_CREATE:{
            return{
                ...state,
                isAccountCreated:true,
                message:payload,
                isLoading:false,
                isFailure:false
            }
        }
        default:{
            return state
        }
    }
}