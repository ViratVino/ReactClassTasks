import { TabContext,TabList,TabPanel } from "@mui/lab";
import { Box,Tab} from '@mui/material';
import React, { useState } from "react";
const MuiTabs = () => {
    const [value,setValue]=useState("1");
    const handleChange=(event:React.SyntheticEvent,newVal:string)=>{
        setValue(newVal)
    }
  return (
    <Box>
        <TabContext value={value}>
            <Box sx={{borderBottom:1,borderColor:"divider"}}>
               <TabList onChange={handleChange} textColor="secondary" indicatorColor="secondary">
               <Tab label="Tab One" value={"1"}/>     {/*  We can add icon also here with the help of icon prop wecan set the position with the help of iconPosition*/}
                <Tab label="Tab Two" value={"2"} disabled/>
                <Tab label="Tab Three" value={"3"}/>

               </TabList>
            </Box>
            <TabPanel value={"1"}>Panel One</TabPanel>
            <TabPanel value={"2"}>Panel Two</TabPanel>
            <TabPanel value={"3"}>Panel Three</TabPanel>
        </TabContext>
    </Box>
  )
}

export default MuiTabs