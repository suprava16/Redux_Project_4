import { ADD_CONTACT } from "../Constant/ContactConstant"
export function addData(user){
  console.log(user)
  return{
    type:ADD_CONTACT,
    payload:user
  }
}