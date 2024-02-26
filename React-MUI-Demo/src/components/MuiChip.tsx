import { Stack,Chip,Avatar} from "@mui/material"
const MuiChip = () => {
  return (
    <Stack direction={"row"} spacing={1}>
        <Chip label="Chip" color="primary" size="small"/>
        <Chip label="Chip outlined" color="secondary" size="small" variant="outlined" avatar={<Avatar>VK</Avatar>}/>
        <Chip label="Click" color="success" onClick={()=>{alert("Clicked")}}/>
        <Chip label="Delete" color="primary"  onClick={()=>{alert("Clicked")}} onDelete={()=>alert("Delete Handler Called")}/>

    </Stack>
  )
}

export default MuiChip