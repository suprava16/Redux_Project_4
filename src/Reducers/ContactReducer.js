import { ADD_CONTACT } from "../Constant/ContactConstant";

const initial_state={
  contacts:[]
}

export default function ContactReducer(state=initial_state,action){
  switch (action.type) {
    case ADD_CONTACT:
      return state={...state,contacts:action.payload}
      
  
    default:
     return state;
  }

}