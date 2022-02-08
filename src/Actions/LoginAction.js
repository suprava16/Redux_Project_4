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
 return ()=>{
   fetch("https://reqres.in/api/login",{
     method:"post",
     headers:{
       "Accept":"application/json",
        "Content-Type":"application/json"
     },
     body:JSON.stringify({
       email:email,
       password:password
     })
   })
   .then((response)=>(response.json()))
   .then((result)=>{
     console.log(result)
     localStorage.setItem("user_token",result.token)
   })
 }
}