import { Stack,Link,Typography } from "@mui/material";
const MuiLink = () => {
  return (
    <Stack spacing={2}>
        <Link>Vinoth</Link>
        <Link color={"error"} underline="hover">Kumar</Link>
        <Typography component={"div"} fontSize={"30"} >  <Link  color={"error"} underline="hover">Kumar</Link></Typography>
    </Stack>
  )
}

export default MuiLink