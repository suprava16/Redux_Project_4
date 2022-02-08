import React from 'react';
import { Button, TextField, Grid } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { setEmail, setPassword ,addData} from "../Actions/LoginAction"
function LoginComponent() {
  const token=localStorage.getItem("user_token")
  
  const dispatch = useDispatch();
console.log(token)
  //Getting reducer state variables
  const myData = useSelector((store) => store.LoginReducer)
  console.log(myData)

  return (
    <div>
      <h1>Login Component</h1>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={6} lg={6}>
          <Grid item xs={12}>
            <TextField
              type="text"
              variant="filled"
              fullWidth
              label="email"
              onChange={(event) => { dispatch(setEmail(event.target.value)) }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="password"
              variant="filled"
              fullWidth
              label="password"
              onChange={(event) => { dispatch(setPassword(event.target.value)) }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color='secondary'
              fullWidth
              onClick={()=>{dispatch(addData(myData.email,myData.password))}}
            >LOGIN</Button>
          </Grid>
        </Grid>
      </Grid>
    </div>);
}

export default LoginComponent;

// component->trigger any event->action(return object)->reducer(excuter proper switch case value)->combine reducers->create store->index.js(import Store and Provider)->use Provider and pass store value as props->by using useSelector hook u can access your store value 

// localStorage.getItem("user_token")!==null ?
// <Link to="">1</Link>
// <Link to="">1</Link>
// <Link to="">1</Link>
// :
// <Link to="">1</Link>
// <Link to="">1</Link>
// <Link to="">1</Link>