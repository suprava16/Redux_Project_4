import React from 'react';
import {useSelector,useDispatch} from "react-redux"
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import {ListItemText,Grid} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
function ContactDetail() {
  const dispatch=useDispatch()
  const myData=useSelector((state)=>state.ContactReducer)

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
                      <DeleteIcon />
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
