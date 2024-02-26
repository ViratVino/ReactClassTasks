
import {Box, FormControlLabel,Switch } from '@mui/material';
import React, { useState } from 'react';

const MuiSwitch = () => {
    let [checked,setChecked]=useState<boolean>(false);
    console.log(checked);
    let handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
          if(e.target.checked){
             setChecked(true);
          }else{
            setChecked(false);
          }
    }
  return (
   <Box>
    <FormControlLabel label="DarkMode" control={<Switch onChange={handleChange}/>}/> 
   </Box>
  )
}

export default MuiSwitch