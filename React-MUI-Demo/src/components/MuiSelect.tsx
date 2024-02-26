import { Box, TextField, MenuItem } from "@mui/material";
import { useState } from "react";
const MuiSelect = () => {
  const [country, setCountry] = useState<string[]>([]);
  return (
    <Box width={"250px"}>
      <TextField
        label="Select Country"
        select
        value={country}
        onChange={(e) => {
            let value=e.target.value;
          setCountry(typeof(value)==='string'?value.split(','):value);
        }}
        fullWidth

        SelectProps={{
            multiple:true
        }}
        size="small"
        color="secondary"
        helperText="Please Select The Country"
        error
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="AU">Australia</MenuItem>
        <MenuItem value="UK">United Kingdom</MenuItem>
      </TextField>
    </Box>
  );
};

export default MuiSelect;
