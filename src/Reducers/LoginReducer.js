import { SET_EMAIL,SET_PASSWORD } from "../Constant/LoginConstant";

const initial_state={
  email:"",
  password:"",
}

export default function LoginReducer(state=initial_state,action){
switch (action.type) {
  case SET_EMAIL:
    return state={...state,email:action.payload}
 case SET_PASSWORD:
   return state={...state,password:action.payload}
  default:
    return state;
   
}
}

