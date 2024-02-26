import { AppBar,Toolbar,IconButton,Typography, Stack,Button,Menu,MenuItem } from "@mui/material";
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import { useState } from "react";
const MuiNavbar = () => {
    let [anchorEl,setAnchorEl]=useState<null|HTMLElement>(null);
    const open=Boolean(anchorEl)
    const handleClick=(event:React.MouseEvent<HTMLButtonElement>)=>{
        setAnchorEl(event.currentTarget);
    }
    const handleClose=()=>{
        setAnchorEl(null);
    }
  return (
 <AppBar position="static">
    <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
           <CatchingPokemonIcon/>
        </IconButton>
        <Typography variant="h6" component={"div"} sx={{flexGrow:1}}>
            PokemanApp
        </Typography>
        <Stack direction={"row"} spacing={2}>
            <Button color="inherit">Features</Button>
            <Button color="inherit">Pricing</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit" id="resourse-button" onClick={handleClick} aria-controls={open?"resourse-menu":undefined}
            aria-haspopup="true"
            aria-expanded={open?"true":undefined}
            >Resourses</Button>
            <Button color="inherit">Login</Button>

        </Stack>
        <Menu  
        id="resourse-menu"
        anchorEl={anchorEl}
        open={open}
       MenuListProps={{
        "aria-labelledby":"resourse-button"
       }}
       onClose={handleClose}
        >
         <MenuItem onClick={handleClose}>Blog</MenuItem>
         <MenuItem onClick={handleClose}>PodCast</MenuItem>

        </Menu>
    </Toolbar>
 </AppBar>
  )
}

export default MuiNavbar