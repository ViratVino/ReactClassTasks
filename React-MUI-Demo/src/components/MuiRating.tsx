import { Stack,Rating } from "@mui/material"
import { useState } from "react";
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const MuiRating = () => {
    let [value,setValue]=useState<number|null>(null);
    console.log(value);
    let handleChange=(e:React.ChangeEvent<{}>,newValue:number|null)=>{
       setValue(Number(newValue));
    }
  return (
    <Stack spacing={2}>
        <Rating value={value} onChange={handleChange} precision={0.5} icon={<HeartBrokenIcon color="error"/>} emptyIcon={<FavoriteBorderIcon  fontSize="inherit"/>} color="error" highlightSelectedOnly/> 
    </Stack>
  )
}

export default MuiRating