import {
  Stack,
  Button,
  IconButton,
  ButtonGroup,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import { useState } from "react";
const MuiButton = () => {
    let [format,setFormat]=useState<string[]>([]);
    let handleFormatChange=(e:React.MouseEvent<HTMLElement>,updatedFormats:string[])=>{
        let value:string=e.target.value;
        console.log(value);
         setFormat([...format,e.target.value]);
    }
    console.log(format);
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained" href="https://www.google.com/">
          Contained
        </Button>
        <Button variant="outlined">OutLine</Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          secondary
        </Button>
        <Button variant="contained" color="error">
          error
        </Button>
        <Button variant="contained" color="warning">
          warning
        </Button>
        <Button variant="contained" color="info">
          info
        </Button>
        <Button variant="contained" color="success">
          success
        </Button>
      </Stack>

      {/* <Stack spacing={2} direction="row">
        <Button variant="text" color="primary">Primary</Button>
        <Button variant="text" color="secondary">secondary</Button>
        <Button variant="text" color="error">error</Button>
        <Button variant="text" color="warning">warning</Button>
        <Button variant="text" color="info">info</Button>
        <Button variant="text" color="success">success</Button>
    </Stack>

    <Stack spacing={2} direction="row">
        <Button variant="outlined" color="primary">Primary</Button>
        <Button variant="outlined" color="secondary">secondary</Button>
        <Button variant="outlined" color="error">error</Button>
        <Button variant="outlined" color="warning">warning</Button>
        <Button variant="outlined" color="info">info</Button>
        <Button variant="outlined" color="success">success</Button>
    </Stack> */}

      <Stack spacing={2} direction={"row"} display="block">
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>
      </Stack>

      <Stack spacing={2} direction={"row"}>
        <Button
          variant="contained"
          startIcon={<SendIcon />}
          disableRipple
          onClick={() => alert("Vanakkam da mapla")}
        >
          send
        </Button>
        <Button variant="contained" endIcon={<SendIcon />} disableElevation>
          send
        </Button>
        <IconButton color="secondary" size="medium">
          {" "}
          <SendIcon />
        </IconButton>
      </Stack>
      <Stack direction="row">
        <ButtonGroup
          variant="contained"
          orientation="vertical"
          color="secondary"
        >
          <Button>Primary</Button>
          <Button>secondary</Button>
          <Button>error</Button>
        </ButtonGroup>
      </Stack>

      <Stack>
        <ToggleButtonGroup aria-label="Text Formating" size="small" color="success" orientation="vertical" onChange={(e)=>{setFormat([...format,e.target.value])}} value={format}>
          <ToggleButton value="bold" aria-label="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalicIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};

export default MuiButton;
