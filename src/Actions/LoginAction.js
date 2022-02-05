import { SET_EMAIL,SET_PASSWORD } from "../Constant/LoginConstant"
export function setEmail(email){
  return{
    type: SET_EMAIL,
    payload: email
  }
}

export function setPassword(password){
  return{
    type:SET_PASSWORD,
    payload:password
  }
}

export function addData(email,password){
//  return ()=>{
//    fetch("",{
//      method:"post",
//      headers:{},
//      body:JSON.stringify{
//        email:email,
//        password:password
//      }
//    })
//  }
}