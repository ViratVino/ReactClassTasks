import { Tooltip,IconButton } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
const MuiTooltip = () => {
  return (
    <Tooltip title="Mail" placement='right' arrow>
        <IconButton>
         <MailIcon/>
        </IconButton>
    </Tooltip>
  )
}

export default MuiTooltip


