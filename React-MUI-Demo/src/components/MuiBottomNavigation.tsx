import { BottomNavigation,BottomNavigationAction, Typography } from "@mui/material"
import { useState } from "react";
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';

const MuiBottomNavigation = () => {
    const [value,setValue]=useState(0);
    const [select,setSelect]=useState<null|string>(null)
  return (
    <>
    <Typography variant="h3" textAlign={"center"} >{select}</Typography>
    <BottomNavigation
    sx={{width:"100%",position:"absolute",bottom:0}}
    value={value}
    onChange={(event,newValue)=>{
        setValue(newValue)
    }}
    >
        <BottomNavigationAction label="home" icon={<HomeIcon/>} onClick={()=>{setSelect("Home")}}></BottomNavigationAction>
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon/>} onClick={()=>{setSelect("Favorites")}}></BottomNavigationAction>
        <BottomNavigationAction label="Profile" icon={<PersonIcon></PersonIcon>} onClick={()=>{setSelect("Person")}}></BottomNavigationAction>


    </BottomNavigation>
    </>
  )
}

export default MuiBottomNavigation