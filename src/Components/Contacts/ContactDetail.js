import React,{useEffect} from 'react';
import {useSelector,useDispatch} from "react-redux"
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import {ListItemText,Grid} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import {afterDelete} from "../../Actions/ContactAction"
function ContactDetail() {
  const dispatch=useDispatch()
  const myData=useSelector((state)=>state.ContactReducer)
  //using localstorage
  useEffect(()=>{
    const list=JSON.parse(localStorage.getItem("contact-list"))
    if(list){
      dispatch(afterDelete(list))
    }
  },[])
  //set data in localstorage
  useEffect(()=>{
    localStorage.setItem("contact-list",JSON.stringify(myData.contacts))
  })

  //delete contacts
  const handleDelete=(index)=>{
    const new_list=myData.contacts.filter((single)=>{
      return myData.contacts.indexOf(single)!==index;
      
    })
    dispatch(afterDelete(new_list))
  }
  console.log(myData.contacts)
  return (
  <div>
  <Grid container justifyContent="center">
    <Grid item xs={12} md={6} lg={6}>
     
     { myData.contacts.map((u,i)=>{
        return(
          <>
            <Grid item xs={12}>
            <List>
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon  onClick={()=>{handleDelete(i)}}/>
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={u.name}
                    secondary={ u.email}
                  />
                </ListItem>,
            </List>
            </Grid>
          </>
        )
      })}
    </Grid>
  </Grid>
  </div>)
}

export default ContactDetail;
