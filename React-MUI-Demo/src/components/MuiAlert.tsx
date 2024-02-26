import { Stack,Alert,AlertTitle,Button} from "@mui/material";
import DoneAllIcon from '@mui/icons-material/DoneAll';

const MuiAlert = () => {
  return (
    <Stack>
        <Alert severity="error">This is an Error Alert</Alert>
        <Alert severity="warning">This is an warning Alert</Alert>
        <Alert severity="info">This is an Info Alert</Alert>
        <Alert severity="success">This is an success Alert</Alert>

        <Alert severity="error" variant="outlined">This is an Error Alert</Alert>
        <Alert severity="warning" variant="outlined">This is an warning Alert</Alert>
        <Alert severity="info" variant="outlined">This is an Info Alert</Alert>
        <Alert severity="success" variant="outlined">This is an success Alert</Alert>

        <Alert variant="filled" severity="error">
            <AlertTitle>Error</AlertTitle>
            This is an Error Alert</Alert>
        <Alert variant="filled" severity="warning"> <AlertTitle>Warning</AlertTitle> This is an warning Alert</Alert>
        <Alert variant="filled" severity="info"> <AlertTitle>Info</AlertTitle> This is an Info Alert</Alert>
        <Alert variant="filled" severity="success" icon={<DoneAllIcon fontSize="inherit"/>}
        action={
            <Button color="inherit" size="small">undo</Button>
        }
        > <AlertTitle>Success</AlertTitle> This is an success Alert</Alert>F
    </Stack>
  )
}

export default MuiAlert