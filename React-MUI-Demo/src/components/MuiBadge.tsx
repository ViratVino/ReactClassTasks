import { Stack,Badge, Button } from "@mui/material";
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import MailIcon from '@mui/icons-material/Mail';
import { useState } from "react";


const MuiBadge = () => {
    let [val,setVAl]=useState(0);
  return (
    <Stack spacing={2} direction={"row"}>
    <Stack>
        <Badge badgeContent={5} color="primary"><CircleNotificationsIcon/></Badge>
    </Stack>
     <Stack>
     <Badge badgeContent={val} color="primary"><MailIcon/></Badge>
   
 </Stack>
 <Button onClick={(prevval)=>setVAl(val+1)}>Increment</Button>
 </Stack>
  )
}

export default MuiBadge