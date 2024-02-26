import { Stack,Skeleton } from "@mui/material"
const MuiSkeliten = () => {
  return (
    <Stack spacing={1} width={"250px"}>
        <Skeleton variant="text" animation="wave" />
        <Skeleton variant="circular" width={40} height={40}/>
        <Skeleton variant="rectangular" width={250} height={125}/>
        
    </Stack>
  )
}

export default MuiSkeliten