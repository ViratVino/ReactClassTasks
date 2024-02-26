import { Box, Stack ,Grid,Paper} from "@mui/material";

const MuiLayOut = () => {
  return (
    <Paper sx={{padding:"32px"}}>
    <Stack sx={{border:"1px solid green"}} direction={"row"}>
    <Box component={"span"} sx={{ backgroundColor: "primary.main", 
    color:"white",
    height:"100px",
    width:"100px",
    "&:hover":{
        backgroundColor:"primary.light"
    }
    }}>
      MuiLayOut
    </Box>
    <h1>Hello</h1>
    </Stack>
    <Grid container my={4}  rowSpacing={2} columnSpacing={4}>
      <Grid item xs={6}> 
        <Box bgcolor="primary.light" p={2}>Item 1</Box>
      </Grid>
      <Grid item xs={6}>
        <Box bgcolor="primary.light" p={2}>Item 2</Box>
      </Grid>
      <Grid item xs={6}>
        <Box bgcolor="primary.light" p={2}>Item 3</Box>
      </Grid>
      <Grid item xs={6}>
        <Box bgcolor="primary.light" p={2}>Item 4</Box>
      </Grid>
    </Grid>
    </Paper>
  );
};

export default MuiLayOut;
