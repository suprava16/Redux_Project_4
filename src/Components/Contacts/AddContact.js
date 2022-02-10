import { Grid } from '@mui/material';
import React from 'react';
import {TextField,Button} from "@mui/material"
import {useDispatch,useSelector} from "react-redux" 
import {addData} from "../../Actions/ContactAction"

function AddContact() {
// state variable
  const[user,setUser]=React.useState({name:"",email:""})

  //redux dispatch and useSelector()
  const dispatch=useDispatch()
  const myData=useSelector((state)=>state.ContactReducer)
  console.log(myData)
  
  return (<div>
    <Grid container justifyContent="center">
      <Grid item xs={12} lg={6}>
      <Grid item xs={12}>
        <TextField
          variant="filled"
          fullWidth
          label="Name"
          onChange={(event)=>{setUser({...user,name:event.target.value})}}
          autoFocus
        />
        </Grid>
        <Grid item xs={12}>
        <TextField
          variant="filled"
          fullWidth
          label="Email"
          onChange={(event)=>{setUser({...user,email:event.target.value})}}
        />
        </Grid>
        <Grid item xs={12}>
        <Button
          variant="contained"
          fullWidth
          name="ADD"
         color="secondary"
          onClick={()=>{dispatch(addData([...myData.contacts,user]))}}
        />
        </Grid>
      </Grid>
    </Grid>
  </div>)
}

export default AddContact;
