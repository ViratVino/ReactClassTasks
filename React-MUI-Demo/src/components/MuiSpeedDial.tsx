import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";

const MuiSpeedDial = () => {
  return (
    <SpeedDial
      ariaLabel="Navigation speed Dial"
      sx={{ position: "absolute", bottom: 16, right: 16 }}
      icon={<SpeedDialIcon />}
    >
        <SpeedDialAction icon={<ContentCopyIcon/>} tooltipTitle="copy"></SpeedDialAction>
        <SpeedDialAction icon={<PrintIcon></PrintIcon>}  tooltipTitle="print"></SpeedDialAction>
        <SpeedDialAction icon={<ShareIcon/>}  tooltipTitle="share"></SpeedDialAction>

    </SpeedDial>
  );
};

export default MuiSpeedDial;
