import { Drawer, Box, Typography, List,ListItem ,ListItemIcon,ListItemText,Divider} from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import EmailIcon from '@mui/icons-material/Email';

import {useContext} from 'react'
import { UIContext } from '../../context/ui';



const menuItems: string[] = ["Imbox","Starred","Send","Email","Drafts"]

export const Siderbar = () => {

    const {sidemenuOpen, closeSideMenu} = useContext(UIContext)

  return (
    <Drawer 
    anchor="left"
    open={sidemenuOpen}
    onClose={ closeSideMenu}
    >
    <Box sx={{ width: 250}}>

    <Box sx={{padding:"5px 10px"}}>
        <Typography variant="h4">
            Menú
        </Typography>
    </Box>
    <List>
        {
            menuItems.map((text,index)=>(
                <ListItem button key={text}>
                    <ListItemIcon>
                        {index % 2? <InboxIcon/>:<EmailIcon/>}
                    </ListItemIcon>
                    <ListItemText primary={text}/>
                </ListItem>
            ))
        }
    </List>  
        <Divider/>

        <List>
        {
            menuItems.map((text,index)=>(
                <ListItem button key={text}>
                    <ListItemIcon>
                        {index % 2? <InboxIcon/>:<EmailIcon/>}
                    </ListItemIcon>
                    <ListItemText primary={text}/>
                </ListItem>
            ))
        }
    </List>  
    </Box>
    
    </Drawer>
  )
}
