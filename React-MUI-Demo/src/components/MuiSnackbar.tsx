// import { Snackbar ,Button} from "@mui/material"
// import React, { useState } from "react"
// const MuiSnackbar = () => {
//     let [open,setOpen]=useState(false);
//     let handleClose=(event?:React.SyntheticEvent|Event,reson?:String)=>{
//         if(reson==='clickaway'){
//             return
//         }
//         setOpen(false);
//     }
//   return (
//     <>
//     <Button onClick={()=>setOpen(true)}>Submit</Button>
//     <Snackbar 
//     message="Form Submited Successfully"
//     autoHideDuration={4000}
//     open={open}
//     onClose={handleClose}
//     >

//     </Snackbar>
//     </>
//   )
// }

// export default MuiSnackbar






// Mui Dialog


import {  Dialog,DialogActions,DialogContent,DialogTitle,Button, DialogContentText} from '@mui/material';
import { useState } from 'react';
const MuiSnackbar = () => {
    let [open,setOpen]=useState(false);
  return (
    <>
    <Button onClick={()=>{setOpen(true)}}>Submit</Button>
    <Dialog
    open={open}
    onClose={()=>setOpen(false)}

    >
      < DialogTitle id="dialog-title">Submit the Test?</DialogTitle>
      <DialogContent>
        <DialogContentText id="dialod-description">Nee Test ah Submit pandiyaa da?</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={()=>setOpen(false)}>Cancel</Button>
        <Button  onClick={()=>setOpen(false)}>Submit</Button>
      </DialogActions>
    </Dialog>
    </>
  )
}

export default MuiSnackbar